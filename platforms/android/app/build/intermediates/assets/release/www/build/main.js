webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PantallaCalculadoraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PantallaCalculadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PantallaCalculadoraPage = /** @class */ (function () {
    function PantallaCalculadoraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cliente = {};
        this.cliente = navParams.get('cliente');
    }
    PantallaCalculadoraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PantallaCalculadoraPage');
    };
    PantallaCalculadoraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pantalla-calculadora',template:/*ion-inline-start:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/pages/pantalla-calculadora/pantalla-calculadora.html"*/'<!--\n  Generated template for the PantallaCalculadoraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Resultado Liqui-Web</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>        \n    <ion-item>\n      <img src="../../assets/imgs/pantallaCalculadora.gif" alt="">\n      <h1 text-center>{{cliente.nombres}} {{cliente.apellidos}}</h1>\n      <h3 text-center>Documento: {{cliente.documento}}</h3>\n      <h3 text-center>Teléfono: {{cliente.telefono}}</h3>\n      <h2 text-center>Resultado</h2>\n      <h2 text-center>${{cliente.total}}</h2>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>        \n      <!-- DIAS LABORADOS       -->\n      <ion-item>\n        <ion-label floating>Días Laborados</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.diasLaborados"></ion-input>\n      </ion-item>\n      <!-- Prima -->\n      <ion-item>\n        <ion-label floating>Prima</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.prima"></ion-input>\n      </ion-item>\n      <!-- Cesantía -->\n      <ion-item>\n        <ion-label floating>Cesantía</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.cesantia"></ion-input>\n      </ion-item>            \n      <!-- Interés Cesantía -->\n      <ion-item>\n        <ion-label floating>Interés Cesantía</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.icesantia"></ion-input>\n      </ion-item>\n      <!-- VACACIONES -->\n      <ion-item>\n        <ion-label floating>Vacaciones</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.vacaciones"></ion-input>\n      </ion-item>\n      <!-- INDEMNIZACIÓN FIJO -->\n      <ion-item>\n        <ion-label floating>Indemnización Plazo Fijo</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.indemnizacionFijo"></ion-input>\n      </ion-item>\n      <!-- INDEMNIZACION INDEFINIDO -->\n      <ion-item>\n        <ion-label floating>Indemnización Plazo Indefinido</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.indemnizacionIndefinido"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <h1>TOTAL</h1>\n        <h2>{{cliente.total}}</h2>\n      </ion-item>\n    </ion-list>\n\n  <!-- <button ion-button full (click)="irVentanaDatosLaborales(cliente)">Calcular Dí</button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/pages/pantalla-calculadora/pantalla-calculadora.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PantallaCalculadoraPage);
    return PantallaCalculadoraPage;
}());

//# sourceMappingURL=pantalla-calculadora.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentanaDatosPersonalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ventana_datos_laborales_ventana_datos_laborales__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VentanaDatosPersonalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VentanaDatosPersonalesPage = /** @class */ (function () {
    function VentanaDatosPersonalesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cliente = {};
    }
    VentanaDatosPersonalesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VentanaDatosPersonalesPage');
    };
    VentanaDatosPersonalesPage.prototype.irVentanaDatosLaborales = function (cliente) {
        console.log(cliente);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__ventana_datos_laborales_ventana_datos_laborales__["a" /* VentanaDatosLaboralesPage */], { cliente: cliente });
    };
    VentanaDatosPersonalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-ventana-datos-personales',template:/*ion-inline-start:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/pages/ventana-datos-personales/ventana-datos-personales.html"*/'<!--\n  Generated template for the VentanaDatosPersonalesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Datos Personales Liqui-Web</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>      \n      <img src="../../assets/imgs/datosPersonales.gif" alt="">\n      <h1 text-center>Datos Personales</h1>\n    </ion-item>    \n    <!-- NOMBRE -->\n    <ion-item>\n      <ion-label floating>Nombre/s</ion-label>\n      <ion-input type="text" [(ngModel)]="cliente.nombres"></ion-input>\n    </ion-item>\n    <!-- APELLIDOS -->\n    <ion-item>\n      <ion-label floating>Apellidos</ion-label>\n      <ion-input type="text" [(ngModel)]="cliente.apellidos"></ion-input>\n    </ion-item> \n    <!-- CÉDULA    -->\n    <ion-item>\n      <ion-label floating>Cédula</ion-label>\n      <ion-input type="text" [(ngModel)]="cliente.documento"></ion-input>\n    </ion-item>\n    <!-- TELÉFONO     -->\n    <ion-item>\n      <ion-label floating>Teléfono</ion-label>\n      <ion-input type="text" [(ngModel)]="cliente.telefono"></ion-input>\n    </ion-item>    \n  </ion-list>\n  <button ion-button full (click)="irVentanaDatosLaborales(cliente)">Datos Laborales</button>\n</ion-content>'/*ion-inline-end:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/pages/ventana-datos-personales/ventana-datos-personales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], VentanaDatosPersonalesPage);
    return VentanaDatosPersonalesPage;
}());

//# sourceMappingURL=ventana-datos-personales.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/pantalla-calculadora/pantalla-calculadora.module": [
		271,
		2
	],
	"../pages/ventana-datos-laborales/ventana-datos-laborales.module": [
		272,
		1
	],
	"../pages/ventana-datos-personales/ventana-datos-personales.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ventana_datos_personales_ventana_datos_personales__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
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
    }
    HomePage.prototype.irAVentanaDatosPersonales = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__ventana_datos_personales_ventana_datos_personales__["a" /* VentanaDatosPersonalesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Liquidación Empleados\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page-home">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="irAVentanaDatosPersonales()">Omitir</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="../../assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Iniciamos Liquidación?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="irAVentanaDatosPersonales()">\n        Continuar\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_ventana_datos_laborales_ventana_datos_laborales__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_ventana_datos_personales_ventana_datos_personales__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pantalla_calculadora_pantalla_calculadora__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_ventana_datos_personales_ventana_datos_personales__["a" /* VentanaDatosPersonalesPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_ventana_datos_laborales_ventana_datos_laborales__["a" /* VentanaDatosLaboralesPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_pantalla_calculadora_pantalla_calculadora__["a" /* PantallaCalculadoraPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/pantalla-calculadora/pantalla-calculadora.module#PantallaCalculadoraPageModule', name: 'PantallaCalculadoraPage', segment: 'pantalla-calculadora', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ventana-datos-laborales/ventana-datos-laborales.module#VentanaDatosLaboralesPageModule', name: 'VentanaDatosLaboralesPage', segment: 'ventana-datos-laborales', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ventana-datos-personales/ventana-datos-personales.module#VentanaDatosPersonalesPageModule', name: 'VentanaDatosPersonalesPage', segment: 'ventana-datos-personales', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_ventana_datos_personales_ventana_datos_personales__["a" /* VentanaDatosPersonalesPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_ventana_datos_laborales_ventana_datos_laborales__["a" /* VentanaDatosLaboralesPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_pantalla_calculadora_pantalla_calculadora__["a" /* PantallaCalculadoraPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentanaDatosLaboralesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pantalla_calculadora_pantalla_calculadora__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VentanaDatosLaboralesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VentanaDatosLaboralesPage = /** @class */ (function () {
    function VentanaDatosLaboralesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cliente = {};
        this.cliente = navParams.get('cliente');
        console.log(this.cliente);
    }
    VentanaDatosLaboralesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VentanaDatosLaboralesPage');
    };
    VentanaDatosLaboralesPage.prototype.calcularDias = function () {
        var fechaini = new Date(this.cliente.fechaIngreso);
        var fechafin = new Date(this.cliente.fechaSalida);
        var diasdif = fechafin.getTime() - fechaini.getTime();
        var contdias = Math.round(diasdif / (1000 * 60 * 60 * 24));
        this.cliente.diasLaborados = contdias;
        var fechaTerminacionContrato = new Date(this.cliente.fechaTerminacionContrato);
        var restaFechas = fechaTerminacionContrato.getTime() - fechafin.getTime();
        var diasFaltantes = Math.round(restaFechas / (1000 * 60 * 60 * 24));
        this.cliente.diasFaltantes = diasFaltantes;
        this.calcularLiquidacion();
    };
    VentanaDatosLaboralesPage.prototype.calcularLiquidacion = function () {
        var salarioBase = this.cliente.salarioBase;
        var diasLaborados = this.cliente.diasLaborados;
        // PRIMA
        var prima = (salarioBase * (diasLaborados) / 180) / 360;
        this.cliente.prima = Math.trunc(prima).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '');
        // CESANTIA
        var cesantia = (salarioBase * diasLaborados) / 360;
        this.cliente.cesantia = Math.trunc(cesantia).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '');
        // I CESANTIA
        var icesantia = (cesantia * diasLaborados * 0.12) / 360;
        this.cliente.icesantia = Math.trunc(icesantia).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '');
        // VACACIONES
        var vacaciones = (salarioBase * diasLaborados) / 720;
        this.cliente.vacaciones = Math.trunc(vacaciones).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '');
        // INDEMNIZACIÓN FIJO    
        var indemnizacionFijo = 0;
        var diasFaltantes = this.cliente.diasFaltantes;
        var smlmv = 781242;
        var sdlv = 26041;
        indemnizacionFijo = diasFaltantes * sdlv;
        this.cliente.indemnizacionFijo = Math.trunc(indemnizacionFijo).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '');
        // INDEMNIZACIÓN INDEFINIDO                 MIRAR BIEN ESTA PARTE
        var indemnizacionIndefinido = 0;
        var añosTrabajados = diasLaborados / 360; // Evaluar bien
        // SALARIO BASE MENOR A 10 SMLMV
        if (salarioBase < (smlmv * 10)) {
            if (añosTrabajados > 0) {
                indemnizacionIndefinido = smlmv;
            }
            if (añosTrabajados > 1) {
                añosTrabajados--;
                while (añosTrabajados > 0) {
                    indemnizacionIndefinido += 20 * sdlv;
                    añosTrabajados--;
                }
            }
        }
        // SALARIO BASE MAYOR A 10 SMLMV
        if (salarioBase > (smlmv * 10)) {
            if (añosTrabajados > 0) {
                indemnizacionIndefinido = 20 * sdlv;
            }
            if (añosTrabajados > 1) {
                añosTrabajados--;
                while (añosTrabajados > 0) {
                    indemnizacionIndefinido += 15 * sdlv;
                    añosTrabajados--;
                }
            }
        }
        this.cliente.indemnizacionIndefinido = Math.trunc(indemnizacionIndefinido).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '');
        var result = prima + cesantia + icesantia + vacaciones + indemnizacionFijo + indemnizacionIndefinido;
        this.cliente.total = Math.trunc(result).toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '');
    };
    VentanaDatosLaboralesPage.prototype.irVentanaCalculadora = function (cliente) {
        console.log(cliente);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pantalla_calculadora_pantalla_calculadora__["a" /* PantallaCalculadoraPage */], { cliente: cliente });
    };
    VentanaDatosLaboralesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-ventana-datos-laborales',template:/*ion-inline-start:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/pages/ventana-datos-laborales/ventana-datos-laborales.html"*/'<!--\n  Generated template for the VentanaDatosLaboralesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Datos Laborales Liqui-Web</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <img src="../../assets/imgs/datosLaborales.gif" alt="">\n      <h1 text-ceter>Datos Laborales</h1>\n    </ion-item>   \n    <ion-item>\n      <ion-label floating>Salario Base</ion-label>\n      <ion-input type="text" [(ngModel)]="cliente.salarioBase"></ion-input>\n    </ion-item> \n    <!-- FECHA DE INGRESO -->\n    <ion-item>\n      <ion-label>Fecha de Ingreso</ion-label>\n      <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="cliente.fechaIngreso"></ion-datetime>\n    </ion-item>\n    <!-- FECHA DE SALIDA -->\n    <ion-item>\n      <ion-label>Fecha de Salida</ion-label>\n      <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="cliente.fechaSalida"></ion-datetime>\n    </ion-item>\n    <!-- FECHA DE SALIDA -->\n    <ion-item>\n      <ion-label>Fecha Terminación de Contrato</ion-label>\n      <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="cliente.fechaTerminacionContrato" (ionChange)="calcularDias()"></ion-datetime>\n    </ion-item>\n  </ion-list>\n  <button ion-button full (click)="irVentanaCalculadora(cliente)">Calcular Resultado</button>\n</ion-content>'/*ion-inline-end:"/Users/cristianfranco/Documents/universidad/appLiquiWeb/src/pages/ventana-datos-laborales/ventana-datos-laborales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], VentanaDatosLaboralesPage);
    return VentanaDatosLaboralesPage;
}());

//# sourceMappingURL=ventana-datos-laborales.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map