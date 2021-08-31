import { Component, OnInit} from '@angular/core';
import {Tarefa} from '../../models/Tarefa'
import {TarefaService} from '../../services/tarefa.service'


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  tarefaInput:string = ""

  onSubmit() {
    var tarefa:Tarefa = {
      checked: false,
      prioridade: 1,
      conteudo: this.tarefaInput
    }

    var service = new TarefaService()
    service.addTarefa(tarefa)

  }

 constructor() {
  }

  ngOnInit(): void {

  }

}
