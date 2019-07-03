import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../token.storage';
import { Evento } from '../../models/evento.model';
import { NotifyService } from '../notify/notify.service';

@Injectable()
export class EventosService {

  baseEventosUrl = 'http://localhost:8080/api/eventos/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token.getToken()
  });

  constructor(private http: HttpClient, private token: TokenStorage, private notifyService: NotifyService) {
  }

  public getEventos() {
    return this.http.get<Evento[]>(this.baseEventosUrl, { headers: this.headers });
  }

  public createEvento(evento) {
    return this.http.post<Evento>(this.baseEventosUrl, evento, { headers: this.headers });
  }

  public findOne(evento) {
    return this.http.get<Evento>(this.baseEventosUrl + evento.id, { headers: this.headers });
  }

  public putEvento(evento) {
    return this.http.put(this.baseEventosUrl + evento.id, evento, { headers: this.headers });
  }

  public deleteEvento(evento) {
    return this.http.delete(this.baseEventosUrl + evento.id, { headers: this.headers });
  }

}
