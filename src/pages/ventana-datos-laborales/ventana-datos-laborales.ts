import { PantallaCalculadoraPage } from './../pantalla-calculadora/pantalla-calculadora';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PARAMETERS } from '@angular/core/src/util/decorators';

/**
 * Generated class for the VentanaDatosLaboralesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventana-datos-laborales',
  templateUrl: 'ventana-datos-laborales.html',
})
export class VentanaDatosLaboralesPage {
  cliente: any = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.cliente = navParams.get('cliente');
    console.log(this.cliente)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentanaDatosLaboralesPage');
  }

  calcularDias(){    
    var fechaini = new Date(this.cliente.fechaIngreso);
    var fechafin = new Date(this.cliente.fechaSalida);
    var diasdif= fechafin.getTime()-fechaini.getTime();
    var contdias = Math.round(diasdif/(1000*60*60*24));    
    this.cliente.diasLaborados = contdias; 

    var fechaTerminacionContrato = new Date(this.cliente.fechaTerminacionContrato);
    var restaFechas = fechaTerminacionContrato.getTime() - fechafin.getTime();
    var diasFaltantes = Math.round(restaFechas/(1000*60*60*24));    
    this.cliente.diasFaltantes = diasFaltantes;
    this.calcularLiquidacion();
  }

  calcularLiquidacion(){
    var salarioBase: number = this.cliente.salarioBase;    
    var diasLaborados: number = this.cliente.diasLaborados;
    // PRIMA
    var prima = (salarioBase * (diasLaborados)/180) / 360;
    this.cliente.prima = Math.trunc(prima).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.').split('').reverse().join('').replace(/^[\.]/,'');
    // CESANTIA
    var cesantia = (salarioBase * diasLaborados) / 360;
    this.cliente.cesantia = Math.trunc(cesantia).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.').split('').reverse().join('').replace(/^[\.]/,'');
    // I CESANTIA
    var icesantia = (cesantia * diasLaborados * 0.12) / 360;
    this.cliente.icesantia = Math.trunc(icesantia).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.').split('').reverse().join('').replace(/^[\.]/,'');
    // VACACIONES
    var vacaciones = (salarioBase * diasLaborados) / 720;
    this.cliente.vacaciones = Math.trunc(vacaciones).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.').split('').reverse().join('').replace(/^[\.]/,'');
    // INDEMNIZACIÓN FIJO    
    var indemnizacionFijo: number = 0;
    var diasFaltantes: number = this.cliente.diasFaltantes;
    var smlmv: number = 781242;
    var sdlv: number = 26041;
    indemnizacionFijo = diasFaltantes * sdlv;
    this.cliente.indemnizacionFijo = Math.trunc(indemnizacionFijo).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.').split('').reverse().join('').replace(/^[\.]/,'');
    // INDEMNIZACIÓN INDEFINIDO                 MIRAR BIEN ESTA PARTE
    var indemnizacionIndefinido: number = 0;
    var añosTrabajados = diasLaborados / 360; // Evaluar bien
    // SALARIO BASE MENOR A 10 SMLMV
    if (salarioBase < (smlmv*10)){      
      if (añosTrabajados > 0){
        indemnizacionIndefinido = smlmv;
      }
      if (añosTrabajados > 1){
        añosTrabajados--;
        while(añosTrabajados > 0){
          indemnizacionIndefinido += 20 * sdlv;
          añosTrabajados--;
        }
      }
    }
    // SALARIO BASE MAYOR A 10 SMLMV
    if (salarioBase > (smlmv*10)){      
      if (añosTrabajados > 0){
        indemnizacionIndefinido = 20 * sdlv;
      }
      if (añosTrabajados > 1){
        añosTrabajados--;
        while(añosTrabajados > 0){
          indemnizacionIndefinido += 15 * sdlv;
          añosTrabajados--;
        }
      }      
    }
    this.cliente.indemnizacionIndefinido = Math.trunc(indemnizacionIndefinido).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.').split('').reverse().join('').replace(/^[\.]/,'');
    var result: number = prima + cesantia + icesantia + vacaciones + indemnizacionFijo + indemnizacionIndefinido;
    this.cliente.total = Math.trunc(result).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.').split('').reverse().join('').replace(/^[\.]/,'');    
  }

  irVentanaCalculadora(cliente){
    console.log(cliente);
    this.navCtrl.setRoot(PantallaCalculadoraPage,{cliente: cliente});
  }
  
}
