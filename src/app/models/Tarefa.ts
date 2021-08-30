import {Prioridades} from "./Prioridade";

export interface Tarefa {
    checked: boolean;
    prioridade?:Prioridades;
    conteudo:string;
}
