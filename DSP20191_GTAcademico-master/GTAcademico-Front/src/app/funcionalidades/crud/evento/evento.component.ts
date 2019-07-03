import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../../WindowRef';
import { NotifyService } from '../../../services/notify/notify.service';
import { Evento } from '../../../models/evento.model';
import { EventosService } from '../../../services/eventos/evento.service';
import { Diciplina } from '../../../models/diciplina.model';
import { DiciplinaStorage } from '../../../services/diciplina.storage';
import { DiciplinaService } from '../../../services/diciplina/dicplina.service';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  diciplina: Diciplina = new Diciplina;
  eventos: Evento[];
  evento: Evento = new Evento();
  updateEvento: Evento = new Evento();
  findOneById: Evento = new Evento();

  constructor(private eventoService: EventosService,
    private diciplinaService: DiciplinaService,
    private winRef: WindowRef,
    private notifyService: NotifyService,
    private diciplinaId: DiciplinaStorage,
    private router: Router) {
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.diciplina.id = Number.parseInt(this.diciplinaId.getToken());
    this.diciplinaService.findOne(this.diciplina).subscribe(data => {
      this.diciplina = data;
    });
    this.eventos = this.diciplina.eventos;
  }

  voltar() {
    this.router.navigate(['/diciplina']);
  }

  findOne(evento: Evento): void {
    this.eventoService.findOne(evento)
      .subscribe(data => {
        this.findOneById = data;
        this.updateEvento = this.findOneById;
      });
  }

  putEvento(): void {

    this.eventoService.putEvento(this.updateEvento).toPromise().then(
      retorno => {
        this.notifyService.createNotify('Sucesso', 'Evento editado', 'green');
        this.initData();
        $('.modal').modal('hide');
      }
    ).catch(erro => {
      this.notifyService.createNotify('Atenção', 'Erro ao editar evento', 'red');
      this.initData();
      $('.modal').modal('hide');
    });
  }

  deleteEvento(evento: Evento): void {

    for (var i = 0; i < this.diciplina.eventos.length; i++) {
      if (this.diciplina.eventos[i].id === evento.id) {
        this.diciplina.eventos.splice(i, 1);
        break;
      }
    }
    console.log(JSON.stringify(this.diciplina));
    this.diciplinaService.putDiciplina(this.diciplina).toPromise().then(data => {
      this.eventoService.deleteEvento(evento).toPromise().then(
        retorno => {
          this.notifyService.createNotify('Sucesso', 'Evento deletado', 'green');
          this.initData();
        }
      ).catch(
        erro => {
          this.notifyService.createNotify('Atenção', 'Erro ao deletar evento', 'red');
        }
      );
    }).catch(
      erro => {
        this.notifyService.createNotify('Atenção', 'Erro ao deletar evento', 'red');
      }
    );
  }

  checkFields() {

    if (this.evento.nome == null || '') {
      this.notifyService.createNotify('Aviso', 'O campo nome não pode está vazio!', 'orange');
      return false;
    }
    if (this.evento.descricao == null || '') {
      this.notifyService.createNotify('Aviso', 'O campo de descriação do evento nao pode está vazio!', 'orange');
      return false;
    }
    if (this.evento.dataInicio == null) {
      this.notifyService.createNotify('Aviso', 'O evento precisa ter uma data de inicio!', 'orange');
      return false;
    }
    if (this.evento.dataFim == null) {
      this.notifyService.createNotify('Aviso', 'O evento precisa ter uma data de finalização!', 'orange');
      this.notifyService.createNotify('Aviso', '', 'orange');
      return false;
    }
    return true;
  }

  createEvento(): void {
    if (!this.checkFields()) {
      return;
    }
    this.eventoService.createEvento(this.evento).toPromise().then(
      retorno => {
        this.notifyService.createNotify('Sucesso', 'Evento criado', 'green');
        this.diciplina.eventos.push(retorno);
        this.diciplinaService.putDiciplina(this.diciplina).toPromise().then(data => {
			this.diciplina = data;
			(document.getElementById('createEvento') as HTMLFormElement).reset();
			this.initData();
        }).catch(erro => {
          console.log('Deu Ruim');
        });
        $('.modal').modal('hide');
        (document.getElementById('createEvento') as HTMLFormElement).reset();
        this.initData();
        $('.modal').modal('hide');
      }
    ).catch(erro => {
      this.notifyService.createNotify('Aviso', 'Erro ao criar evento', 'red');
      (document.getElementById('createEvento') as HTMLFormElement).reset();
      this.initData();
      $('.modal').modal('hide');
    });
  }

}
