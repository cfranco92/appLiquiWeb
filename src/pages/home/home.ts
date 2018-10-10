import { VentanaDatosPersonalesPage } from './../ventana-datos-personales/ventana-datos-personales';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slides = [
    {
      title: "Bienvenid@ a Liqui-Web!",
      // description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      description: "La <b>liquidación</b> de empleados hoy en día es un dolor de cabeza tanto para los empleados como para el empleador.",
      image: "../../assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "Qué es Liqui-Web?",
      // description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      description: "<b>Liquidaciones en tiempo real</b> es la propuesta de Liqui-Web, para transformar el mundo laboral y legal. Buscando siempre favorecer a el empleado y a el empleador.",
      image: "../../assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "Cómo Funciona Liqui-Web?",
      description: "La <b>plataforma</b> de Liqui-Web cuenta con una aplicación movil y web, las cuales en una simple vista, puedes acceder a todos los datos necesarios y calcular la liquidación estimado para tu caso en específico.",
      image: "../../assets/imgs/ica-slidebox-img-3.png",
    }
  ];

  irAVentanaDatosPersonales(){
   this.navCtrl.setRoot(VentanaDatosPersonalesPage);
  }

}
