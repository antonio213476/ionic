import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  nReal=''
  res=0

  converter(){
    this.res=parseFloat(this.nReal)/4.97
    console.log(this.res)
  }
}
