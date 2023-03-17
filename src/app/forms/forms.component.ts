import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public listComidas: Array<{comida: string, preco: string}> = [
  	{comida: "X-Salada", preco: "R$10,00"},
    {comida: "X-bacon", preco: "R$11,00"},
    {comida: "coxinha", preco: "R$12,00"}
  ];

  public submitForm(form:NgForm){
    alert("Nome: " + form.value.nome);
  }
}
