import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CalculoPage } from '../calculo/calculo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia=HistoriaPage;
  calculo=CalculoPage;
  constructor(public navCtrl: NavController) {
    
  }
  clickHistoria()
  {
    this.navCtrl.push(this.historia);
  }

  clickCalculo()
  {
    this.navCtrl.push(this.calculo);
  }

}
