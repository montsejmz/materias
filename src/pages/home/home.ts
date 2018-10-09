import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CalculoPage } from '../calculo/calculo';
import { PyePage } from '../pye/pye';
import { DibujoPage } from '../dibujo/dibujo';
import { CsPage } from '../cs/cs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia=HistoriaPage;
  calculo=CalculoPage;
  pye=PyePage;
  dibujo=DibujoPage;
  CS= CsPage;
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
  
  clickPye()
  {
    this.navCtrl.push(this.pye);
  }

  clickDibujo()
  {
    this.navCtrl.push(this.dibujo);
  }
  clickCS()
  {
    this.navCtrl.push(this.CS);
  }

}
