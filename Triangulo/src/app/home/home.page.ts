import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  lado1='';
  lado2='';
  lado3='';
  res='';

  converter(){
    let lado1C = parseFloat(this.lado1)
    let lado2C = parseFloat(this.lado2)
    let lado3C = parseFloat(this.lado3)


    if (lado1C + lado2C > lado3C && lado1C + lado3C > lado2C && lado2C + lado3C > lado1C) {
      if (lado1C === lado2C && lado2C === lado3C) {
          this.res = "Equilátero";
      } else if (lado1C === lado2C || lado1C === lado3C || lado2C === lado3C) {
        this.res = "Isósceles";
      } else {
        this.res = "Escaleno";
      }
  } else {
    this.res = "Não forma um triângulo";
  }
    console.log(this.res)
  }

  /*
    Leia 3 valores referentes aos lados de um triângulo. Verifique se eles formam um triângulo e, se
    formar, exiba o tipo (Equilátero, Isósceles ou Escaleno). Caso não forme um triângulo, avise ao
    usuário.
  */
}
