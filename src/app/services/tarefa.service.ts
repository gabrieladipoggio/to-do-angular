import { Injectable } from '@angular/core';
import { Tarefa } from '../../app/models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  lista_de_tarefas: Tarefa[];

  constructor() {
    this.lista_de_tarefas = [
      {checked: false, prioridade: 1, conteudo: "Estudar Angular"},
    ]
  }

  getTarefas():Tarefa[]{
    return this.lista_de_tarefas
  }

  addTarefa(t:Tarefa):void{
    this.lista_de_tarefas.push(t)
  }
}
