import { VentanaDatosLaboralesPage } from './../pages/ventana-datos-laborales/ventana-datos-laborales';
import { VentanaDatosPersonalesPage } from './../pages/ventana-datos-personales/ventana-datos-personales';
import { PantallaCalculadoraPage } from './../pages/pantalla-calculadora/pantalla-calculadora';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VentanaDatosPersonalesPage,
    VentanaDatosLaboralesPage,
    PantallaCalculadoraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VentanaDatosPersonalesPage,
    VentanaDatosLaboralesPage,
    PantallaCalculadoraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
