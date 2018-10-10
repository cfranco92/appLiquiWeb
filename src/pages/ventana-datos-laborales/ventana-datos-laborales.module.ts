import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentanaDatosLaboralesPage } from './ventana-datos-laborales';

@NgModule({
  declarations: [
    VentanaDatosLaboralesPage,
  ],
  imports: [
    IonicPageModule.forChild(VentanaDatosLaboralesPage),
  ],
})
export class VentanaDatosLaboralesPageModule {}
