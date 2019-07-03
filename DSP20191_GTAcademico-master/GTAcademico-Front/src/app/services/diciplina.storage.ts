import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Diciplina } from '../models/diciplina.model';

const ID = 'IdDiciplina';

@Injectable()
export class DiciplinaStorage {

    constructor() { }

    clear() {
        window.sessionStorage.removeItem(ID);
        window.sessionStorage.clear();

    }

    public saveDiciplina(diciplina: Diciplina) {
        window.sessionStorage.removeItem(ID);
        window.sessionStorage.setItem(ID, diciplina.id.toString());
    }

    public getToken(): string {
        return sessionStorage.getItem(ID);
    }
}