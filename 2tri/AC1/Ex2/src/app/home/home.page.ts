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
  valorDesconto=0;
  valorOriginal=200;

  onIonChangeEvent(ev:RangeCustomEvent){
    let desconto = (this.valorDesconto / 100) * this.valorOriginal

    this.valorPagamento = this.valorOriginal - desconto
  }
}

