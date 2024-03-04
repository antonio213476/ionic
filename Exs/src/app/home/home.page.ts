import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  nCel=''
  res=0

  converter(){
    let valorCel = parseFloat(this.nCel)

    this.res=(9*valorCel+160)/5
    console.log(this.res)
  }

  /*
    Digite para Fahrenheit: (9*C+160)/5
    Fahrenheit para Celsius: (F-32)*(5/9)
  */
}
