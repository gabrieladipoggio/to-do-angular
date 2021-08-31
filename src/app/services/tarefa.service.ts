import { Injectable } from '@angular/core';
import { Tarefa } from '../../app/models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  list_of_tasks: Tarefa[];

  constructor() {
    this.list_of_tasks = [
      {checked: true, prioridade: 1, conteudo: "To love gabi"},
    ]
  }

  getTarefas():Tarefa[]{
    return this.list_of_tasks
  }

  addTarefa(t:Tarefa):void{
    this.list_of_tasks.push(t)
  }
}
