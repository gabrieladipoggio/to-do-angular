import { Component, OnInit } from '@angular/core';
import {Tarefa} from '../../models/Tarefa'

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
  tarefas:Tarefa[] = [
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
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
