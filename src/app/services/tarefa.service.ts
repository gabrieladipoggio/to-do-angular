import { Injectable } from '@angular/core';
import {Tarefa} from '../../app/models/Tarefa'

const LISTA_DE_TAREFAS:Tarefa[] = [
  {
    checked: false,
    prioridade: 3,
    conteudo: "Estudar Angular"
  },
  {
    checked: false,
    prioridade: 2,
    conteudo: "Lavar louça"
  },
  {
    checked: false,
    prioridade: 1,
    conteudo: "Comprar pão"
  }
]

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTarefas():Tarefa[]{
    return LISTA_DE_TAREFAS
  }

  addTarefa(t:Tarefa):void{
    LISTA_DE_TAREFAS.push(t)
  }
}
