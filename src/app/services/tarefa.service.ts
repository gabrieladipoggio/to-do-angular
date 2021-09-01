import { Injectable } from '@angular/core';
import { Tarefa } from '../../app/models/Tarefa';

function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

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

  addTarefa(tarefa:Tarefa):void{
    this.lista_de_tarefas.push(tarefa)
  }

  removeTarefa(tarefa: Tarefa):void{
    removeItem(this.lista_de_tarefas, tarefa)
  }
}
