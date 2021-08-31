import { Component, OnInit} from '@angular/core';
import { Tarefa } from '../../models/Tarefa'
import { TarefaService } from '../../services/tarefa.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  service:TarefaService
  tarefaInput:string = ""

  onSubmit() {
    var tarefa:Tarefa = {
      checked: false,
      prioridade: 1,
      conteudo: this.tarefaInput
    }
   this.service.addTarefa(tarefa)
  }

  constructor(s: TarefaService) {
    this.service = s
  }

  ngOnInit(): void {

  }

}
