import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public nome:string = "APG";
  public idade:number = 28;
  public profissao:string = "Analista de sistemas";

  public checkedDisabled:boolean = true;

  public imgSrc:string = "https://images.tcdn.com.br/img/img_prod/606732/produto_teste_3919_1_85010fa0e84b19ffcfe78386f6f702cd.jpg";
  public imgTitle:string = "Imagem teste";
  public imgWidth:number = 100;
  public imgHeight:number = 100;

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public position: {x: number, y:number} = {x: 0, y: 0}

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
