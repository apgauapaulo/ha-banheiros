import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list:Array<{nome:string, idade:number}> = [
    {nome: "APG", idade: 29},
    {nome: "APG2", idade: 32},
    {nome: "APG3", idade: 38}
  ]

  public getDados(event:number){
    this.enviarDados.emit(this.list[event]);
  }
}
