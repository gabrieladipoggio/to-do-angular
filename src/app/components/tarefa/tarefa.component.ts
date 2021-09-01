import { Component, OnInit, Input } from '@angular/core';
import {Tarefa} from '../../models/Tarefa'
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  @Input() registro!:Tarefa;
  service: TarefaService;

  constructor(s:TarefaService) {
    this.service = s
  }

  delete(){
    this.service.removeTarefa(this.registro);
  }

  ngOnInit(): void {
  }

}
