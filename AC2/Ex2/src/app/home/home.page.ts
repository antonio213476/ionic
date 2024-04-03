import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}

  kilometros='';
  combustivel='';
  res=0;

  converter(){
    let kilometrosValor = parseFloat(this.kilometros)

    let etanolMulti = 9
    let gasolineMulti = 12
    let dieselMulti = 15

    let precoEta = 3
    let precoGas = 4.5
    let precoDiesel = 4.75

    let valorFinal = 0;

    if(this.combustivel === 'eta') {
      valorFinal = (kilometrosValor / etanolMulti) * precoEta
    } else if(this.combustivel === 'gas') {
      valorFinal = (kilometrosValor / gasolineMulti) * precoGas
    } else {
      valorFinal = (kilometrosValor / dieselMulti) * precoDiesel
    }

    this.res = Math.round(valorFinal * 100) / 100

  }


  /*
    Para isso, o usuário irá selecionar em um ionradio o tipo de combustível, o preço por litro do combustível e a quilometragem rodada.
    Exiba, em um toast, o valor a pagar pelo combustível. Para que este cálculo seja possível, utilize os dados
    abaixo:
    ETANOL faz em média 9km/l
    GASOLINA faz em média 12 km/l
    DIESEL faz em média 15km/l
  */
}

