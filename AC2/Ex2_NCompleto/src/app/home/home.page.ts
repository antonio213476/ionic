import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}

  kilometros='';
  selecao='';
  cortemotorista = 0;
  corteApp = 0;
  res=0;
  alert = ['Fechar'];

  converter(){
    let kilometrosValor = parseFloat(this.kilometros)

    let inicialNormal = 5
    let inicialSuperior = 7.5
    let inicialVip = 10

    let multiNormal = 2.5
    let multiSuperior = 3.5
    let multiVip = 5.5

    if(this.selecao === 'nor') {
      this.res = (kilometrosValor * multiNormal) + inicialNormal
    } else if(this.selecao === 'sup') {
      this.res = (kilometrosValor * multiSuperior) + inicialSuperior
    } else {
      this.res = (kilometrosValor * multiVip) + inicialVip
    }
    if(this.res > 150) {
      this.corteApp = this.res * 0.2
      this.cortemotorista = this.res * 0.8
    } else {
      this.corteApp = this.res * 0.25
      this.cortemotorista = this.res * 0.75
    }
  }


  /*
    O aplicativo fica com 25% do valor da viagem e o motorista com 75%. Quando o valor total da
    viagem for superior a R$150,00 o App fica com 20% e o motorista com 80%
    Exiba, em um alert, o valor final, o valor do Motorista e o valor do APP
  */
}

