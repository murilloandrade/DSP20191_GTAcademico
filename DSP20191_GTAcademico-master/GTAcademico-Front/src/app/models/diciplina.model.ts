import { Evento } from "./evento.model";

export class Diciplina {
    id: number;
    nome: string;
    eventos: Evento[];

    constructor() {
        this.id = null;
        this.nome = null;
        this.eventos = [];
    }
}