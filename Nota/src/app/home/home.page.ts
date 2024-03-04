import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  n1='';
  n2='';
  n3='';
  n4='';
  res='';

  converter(){
    let nota1 = parseFloat(this.n1)
    let nota2 = parseFloat(this.n2)
    let nota3 = parseFloat(this.n3)
    let nota4 = parseFloat(this.n4)

    let media = (nota1+nota2+nota3+nota4)/4
    console.log('Media : '+media)

    if(media < 3) {
      this.res='Retido'
    } else if(media < 6) {
      this.res='Recuperação'
    } else {
      this.res='Aprovado'
    }

  }
  /*
    Elabore um APP que faça a leitura de 4 notas escolares e calcule a média. Exiba a média
    acompanhada de uma das seguintes mensagens:

    Retido, para médias inferiores a 3;
    Recuperação, para médias entre 3 e 5.9;
    Aprovado, para média maior ou igual a 6
  */
}
