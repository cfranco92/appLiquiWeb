import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PantallaCalculadoraPage } from './pantalla-calculadora';

@NgModule({
  declarations: [
    PantallaCalculadoraPage,
  ],
  imports: [
    IonicPageModule.forChild(PantallaCalculadoraPage),
  ],
})
export class PantallaCalculadoraPageModule {}
