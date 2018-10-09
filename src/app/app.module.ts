import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { CalculoPage } from '../pages/calculo/calculo';
import { PyePage } from '../pages/pye/pye';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { CsPage } from '../pages/cs/cs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    CalculoPage,
    PyePage,
    DibujoPage,
    CsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    CalculoPage,
    PyePage,
    DibujoPage,
    CsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
