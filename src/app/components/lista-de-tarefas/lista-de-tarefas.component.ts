import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/Tarefa'
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
  tarefas:Tarefa[];

  constructor(s: TarefaService) {
    this.tarefas = s.getTarefas();
  }

  ngOnInit(): void {
  }

}
