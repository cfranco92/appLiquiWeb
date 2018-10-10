import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentanaDatosPersonalesPage } from './ventana-datos-personales';

@NgModule({
  declarations: [
    VentanaDatosPersonalesPage,
  ],
  imports: [
    IonicPageModule.forChild(VentanaDatosPersonalesPage),
  ],
})
export class VentanaDatosPersonalesPageModule {}
