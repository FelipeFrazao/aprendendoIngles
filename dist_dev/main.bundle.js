webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-topo></app-topo>\r\n<div *ngIf=\"jogoEmAndamento; else fimDeJogo\">\r\n  <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\r\n</div>\r\n<ng-template #fimDeJogo>\r\n<div class=\"container m-5 p-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div [class]=\"classe\" role=\"alert\">\r\n        <h4>{{mensagem}}</h4>\r\n      </div>\r\n      <button class=\"btn btn-outline-primary\" (click)=\"reinicia()\">\r\n        Jogar novamente\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        // Variavel que vai dizer se o jogo ainda está em andamento
        this.jogoEmAndamento = true;
    }
    AppComponent.prototype.encerrarJogo = function (tipo) {
        this.jogoEmAndamento = false;
        if (tipo === 'derrota') {
            // Definindo a mensagem e classe de derrota
            this.mensagem = 'Você perdeu meu chapa';
            this.classe = 'alert alert-danger';
        }
        else {
            // Define a classe e mensagem de vitoria
            this.mensagem = 'Parabéns, você conseguiu!!!';
            this.classe = 'alert alert-success';
        }
    };
    AppComponent.prototype.reinicia = function () {
        // Volta a aplicação para o estado inicial
        this.jogoEmAndamento = true;
        this.mensagem = null;
        this.classe = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__ = __webpack_require__("../../../../../src/app/topo/topo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__ = __webpack_require__("../../../../../src/app/painel/painel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__ = __webpack_require__("../../../../../src/app/tentativas/tentativas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__ = __webpack_require__("../../../../../src/app/progresso/progresso.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__["a" /* TopoComponent */],
            __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__["a" /* PainelComponent */],
            __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__["a" /* TentativasComponent */],
            __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__["a" /* ProgressoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/painel/frases-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRASES; });
var FRASES = [
    { fraseIng: 'You are milf', fraseBr: 'Você é milf' },
    { fraseIng: 'I watch tv', fraseBr: 'Eu assisto tv' },
    { fraseIng: 'Plato is trash, Aristoteles  is god', fraseBr: 'Platão é lixo, Aristóteles é deus' },
    { fraseIng: 'I Love Starbucks Frappuccino', fraseBr: 'Eu amo o frappuccino do Starbucks' }
];
//# sourceMappingURL=frases-mock.js.map

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n  margin-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"p-5 jumbotron\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <app-progresso [progresso]=\"progresso\"></app-progresso>\r\n      </div>\r\n      <div class=\"d-flex justify-content-end col-sm-6\">\r\n        <app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h6>Traduza a frase:</h6>\r\n        <p>{{rodadaFrase.fraseIng}}</p>\r\n        <div class=\"form-group\">\r\n          <textarea\r\n            class=\"form-control\" cols=\"30\" rows=\"3\"\r\n            (input)=\"pegaResposta($event)\" [value]=\"resposta\"></textarea>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button (click)=\"verificaResposta()\" class=\"btn btn-primary text-right\">Verificar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frases_mock__ = __webpack_require__("../../../../../src/app/painel/frases-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importando componentes e modulos


// Declarando component
var PainelComponent = (function () {
    function PainelComponent() {
        // declaração de variaveis
        this.frases = __WEBPACK_IMPORTED_MODULE_1__frases_mock__["a" /* FRASES */];
        this.resposta = '';
        this.rodada = 0;
        // Inicia a barra de progresso com 0
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.atualizaRodada();
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    // Logica para pegar a resposta
    PainelComponent.prototype.pegaResposta = function (resposta) {
        this.resposta = resposta.target.value;
    };
    // Logica para verificar a resposta digitada
    PainelComponent.prototype.verificaResposta = function () {
        if (this.resposta === this.rodadaFrase.fraseBr) {
            // troca a rodada
            this.rodada++;
            // Aumenta a barra de progresso de acordo com a rodada
            this.progresso = this.progresso + (100 / this.frases.length);
            if (this.rodada === 4) {
                this.encerrarJogo.emit('vitoria');
            }
            else {
                // atualiza a frase da rodada
                this.atualizaRodada();
            }
        }
        else {
            // reduzir uma vida
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit('derrota');
            }
        }
    };
    PainelComponent.prototype.atualizaRodada = function () {
        // define a frase da rodada
        this.rodadaFrase = this.frases[this.rodada];
        // limpar o campo resposta
        this.resposta = '';
    };
    return PainelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], PainelComponent.prototype, "encerrarJogo", void 0);
PainelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-painel',
        template: __webpack_require__("../../../../../src/app/painel/painel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/painel/painel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PainelComponent);

var _a;
//# sourceMappingURL=painel.component.js.map

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress {\r\n  background-color: #c9c9c9;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n  <div class=\"progress-bar w-{{progresso}}\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressoComponent = (function () {
    function ProgressoComponent() {
        // Recebe o valor da barra de progresso
        this.progresso = 0;
    }
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    return ProgressoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ProgressoComponent.prototype, "progresso", void 0);
ProgressoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-progresso',
        template: __webpack_require__("../../../../../src/app/progresso/progresso.component.html"),
        styles: [__webpack_require__("../../../../../src/app/progresso/progresso.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProgressoComponent);

//# sourceMappingURL=progresso.component.js.map

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\r\n  color: #ee0000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.html":
/***/ (function(module, exports) {

module.exports = "<i *ngFor=\"let coracao of coracoes\"[class]=\"coracao.exibeCoracao()\"></i>\r\n"

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TentativasComponent; });
/* unused harmony export Coracao */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TentativasComponent = (function () {
    function TentativasComponent() {
        this.coracaoCheio = 'fa fa-heart fa-2x';
        this.coracaoVazio = 'fa fa-heart-o fa-2x';
        this.coracoes = [
            new Coracao(true), new Coracao(true), new Coracao(true)
        ];
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        if (this.tentativas !== this.coracoes.length) {
            var indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
        }
    };
    TentativasComponent.prototype.ngOnInit = function () {
    };
    return TentativasComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], TentativasComponent.prototype, "tentativas", void 0);
TentativasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-tentativas',
        template: __webpack_require__("../../../../../src/app/tentativas/tentativas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tentativas/tentativas.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TentativasComponent);

var Coracao = (function () {
    function Coracao(cheio, coracaoCheio, coracaoVazio) {
        if (coracaoCheio === void 0) { coracaoCheio = 'fa fa-heart fa-2x'; }
        if (coracaoVazio === void 0) { coracaoVazio = 'fa fa-heart-o fa-2x'; }
        this.cheio = cheio;
        this.coracaoCheio = coracaoCheio;
        this.coracaoVazio = coracaoVazio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio) {
            return this.coracaoCheio;
        }
        else {
            return this.coracaoVazio;
        }
    };
    return Coracao;
}());

//# sourceMappingURL=tentativas.component.js.map

/***/ }),

/***/ "../../../../../src/app/topo/topo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topo/topo.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\r\n  <span class=\"navbar-brand mb-0 h1\">{{titulo}}</span>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/topo/topo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopoComponent = (function () {
    function TopoComponent() {
        this.titulo = 'Aprendendo Inglês';
    }
    return TopoComponent;
}());
TopoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-topo',
        template: __webpack_require__("../../../../../src/app/topo/topo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topo/topo.component.css")]
    })
], TopoComponent);

//# sourceMappingURL=topo.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map