export class Evento {
    id: number;
    nome: string;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;
    realizado: boolean;

    constructor() {
        this.id = null;
        this.nome = null;
        this.descricao = null;
        this.dataInicio = null;
        this.dataFim = null;
        this.realizado = false;
    }
}