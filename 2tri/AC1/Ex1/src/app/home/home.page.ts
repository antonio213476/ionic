import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}

  valorPagamento=0;
  valorMensal=0;
  valorEmprestimo=0;
  valorJuros=0;
  valorMeses=0;

  onIonChangeEvent(ev:RangeCustomEvent){
    let emprestimo = this.valorEmprestimo
    let juros = (this.valorJuros / 100) * emprestimo
    let meses = this.valorMeses

    this.valorPagamento = emprestimo + juros * meses
    if(meses === 0) {
      this.valorMensal = this.valorPagamento
    } else {
      this.valorMensal = this.valorPagamento / meses
    }



  }
}

