import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../../WindowRef';
import { NotifyService } from '../../../services/notify/notify.service';
import { Diciplina } from '../../../models/diciplina.model';
import { DiciplinaService } from '../../../services/diciplina/dicplina.service';
import { Router } from '@angular/router';
import { DiciplinaStorage } from '../../../services/diciplina.storage';

declare let $: any;

@Component({
  selector: 'app-diciplina',
  templateUrl: './diciplina.component.html',
  styleUrls: ['./diciplina.component.scss']
})
export class DiciplinaComponent implements OnInit {

  diciplinas: Diciplina[];
  diciplina: Diciplina = new Diciplina();
  updateDiciplina: Diciplina = new Diciplina();
  findOneById: Diciplina = new Diciplina();

  constructor(private diciplinaService: DiciplinaService,
    private winRef: WindowRef,
    private notifyService: NotifyService,
    private router: Router,
    private diciplinaStorage: DiciplinaStorage) {
  }

  ngOnInit() {
    this.initData();
  }

  ver(diciplina: Diciplina) {
    this.diciplinaStorage.saveDiciplina(diciplina);
    this.router.navigate(['diciplina/eventos']);
  }

  initData() {
    this.diciplinaService.getDiciplinas().subscribe(
      data => this.diciplinas = data
    );
  }

  findOne(diciplina: Diciplina): void {
    this.diciplinaService.findOne(diciplina).subscribe(
      data => this.updateDiciplina = this.findOneById = data
    );
  }

  checkFields() {

    if (this.diciplina.nome == null || '') {
      this.notifyService.createNotify('Aviso', 'O campo nome não pode está vazio!', 'orange');
      return false;
    }
    return true;
  }

  createDiciplina(): void {
    if (!this.checkFields()) {
      return;
    }

    this.diciplinaService.createDiciplina(this.diciplina).toPromise().then(
      retorno => {
        this.notifyService.createNotify("Suceso", "Diciplina criada!", 'green');
        (document.getElementById('createDiciplina') as HTMLFormElement).reset();
        this.initData();
        $('.modal').modal('hide');
      }
    ).catch(erro => {
      this.notifyService.createNotify("Aviso", "Erro ao criar diciplina", 'red');
      (document.getElementById('createDiciplina') as HTMLFormElement).reset();
      this.initData();
      $('.modal').modal('hide');
    });
  }

  putDiciplina(): void {
    this.diciplinaService.putDiciplina(this.updateDiciplina).toPromise().then(retorno => {
      this.notifyService.createNotify("Sucesso", "Diciplina editada!", 'green');
      this.initData();
      $('.modal').modal('hide');
    }).catch(erro => {
      this.notifyService.createNotify("Aviso", "Erro ao editar diciplina!", 'red');
      this.initData();
      $('.modal').modal('hide');
    });
  }

  deleteDiciplina(diciplina: Diciplina): void {
    this.diciplinaService.deleteDiciplina(diciplina).toPromise().then(retorno => {
      this.diciplinas = this.diciplinas.filter(u => u !== diciplina);
      this.notifyService.createNotify("Sucesso", "Diciplina deletada", 'green');
      this.initData();
    }).catch(erro => {
      this.diciplinas = this.diciplinas.filter(u => u !== diciplina);
      this.notifyService.createNotify("Aviso", "Não foi possível deletar a Diciplina", 'red');
      this.initData();
    });
  }
}
