import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  FormComanda: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.FormComanda = this.formBuilder.group({
      chopp : this.formBuilder.control(''),
      pizzas : this.formBuilder.control(''),
      recheios : this.formBuilder.control(''),
      pessoas : this.formBuilder.control(''),
      taxa :this.formBuilder.control(false)
      });
  }

  onProcessar(){
    let chopp=this.FormComanda.value.chopp;
    let pizzas=this.FormComanda.value.pizzas;
    let recheios=this.FormComanda.value.recheios;
    let pessoas=this.FormComanda.value.pessoas;
    let taxa=this.FormComanda.value.taxa;

    let totalConsumo =  (chopp *7.30) + (pizzas * 31.50) + (recheios * 5.00);
    let servicos = totalConsumo * 0.10;
    let total = totalConsumo;

    if(taxa){
      total = totalConsumo + servicos;
    }

    let consumo_pessoa = totalConsumo / pessoas;

    
    alert(`Consumo: R$ ${totalConsumo.toFixed(2)} \n Serviços: R$ ${servicos.toFixed(2)} \n Total: R$ ${total.toFixed(2)} \n Por Pessoa: R$ ${consumo_pessoa.toFixed(2)}`);
  }
}
