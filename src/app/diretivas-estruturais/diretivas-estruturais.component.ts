import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition:boolean = true;

  public conditionClick:boolean = true;

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    }
    else{
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome: "teste", idade: 31})
  }

  constructor(){}

  ngOnInit(): void {

    setInterval( () =>{
      if(this.condition){
        this.condition = false;
      }
      else{
        this.condition = true;
      }
    }, 2000)

  }

  public list: Array<{nome:string, idade: number}> = [{nome: "APG", idade:20}, {nome: "APG1", idade:21}, {nome: "APG2", idade:22}, {nome: "APG3", idade:23}, {nome: "APG4", idade:24}, {nome: "APG5", idade:25} ];

  public onClickEventList(event: number){
    this.list.splice(event, 1);
  }

  public nome: string = "";
}
