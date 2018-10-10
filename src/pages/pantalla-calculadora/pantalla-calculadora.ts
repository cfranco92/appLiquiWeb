import { VentanaDatosLaboralesPage } from './../ventana-datos-laborales/ventana-datos-laborales';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PantallaCalculadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pantalla-calculadora',
  templateUrl: 'pantalla-calculadora.html',
})
export class PantallaCalculadoraPage {
  cliente: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.get('cliente');    
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallaCalculadoraPage');
  }
  
}
