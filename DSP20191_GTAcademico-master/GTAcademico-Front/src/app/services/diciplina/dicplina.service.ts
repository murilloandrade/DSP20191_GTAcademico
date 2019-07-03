import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TokenStorage } from '../token.storage';
import { Diciplina } from '../../models/diciplina.model';

@Injectable()
export class DiciplinaService {

  baseDiciplinasUrl = 'http://localhost:8080/api/diciplinas/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token.getToken()
  })

  constructor(private http: HttpClient, private token: TokenStorage) {
  }

  public getDiciplinas() {
    return this.http.get<Diciplina[]>(this.baseDiciplinasUrl, { headers: this.headers } );
  }

  public createDiciplina(diciplina) {
    return this.http.post<Diciplina>(this.baseDiciplinasUrl, diciplina, { headers: this.headers });
  }

  public findOne(diciplina) {
    return this.http.get<Diciplina>(this.baseDiciplinasUrl + diciplina.id, { headers: this.headers });
  }

  public putDiciplina(diciplina) {
    return this.http.put<Diciplina>(this.baseDiciplinasUrl + diciplina.id, diciplina, { headers: this.headers });
  }

  public deleteDiciplina(diciplina) {
    return this.http.delete(this.baseDiciplinasUrl + diciplina.id, { headers: this.headers });
  }

}
