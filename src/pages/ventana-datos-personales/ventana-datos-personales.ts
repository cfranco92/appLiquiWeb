import { VentanaDatosLaboralesPage } from './../ventana-datos-laborales/ventana-datos-laborales';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VentanaDatosPersonalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventana-datos-personales',
  templateUrl: 'ventana-datos-personales.html',
})
export class VentanaDatosPersonalesPage {
  cliente: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentanaDatosPersonalesPage');
  }

  irVentanaDatosLaborales(cliente){
    console.log(cliente);
    this.navCtrl.push(VentanaDatosLaboralesPage, {cliente: cliente});
  }
}
