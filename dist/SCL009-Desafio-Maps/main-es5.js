(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NavBar Style Bootstrap -->\r\n<!-- <nav class=\"navbar navbar-light bg-light col-12\">\r\n  <img style=\"float:left\" width=\"70\" src=\"https://i.ibb.co/XfnWSkF/uber.png\" alt=\"g logo\">\r\n  <div class=\"title\">\r\n    <h1 class=\"\"> {{ title }} </h1>\r\n  </div> -->\r\n  <!-- <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n  <a routerLink=\"/details\" routerLinkActive=\"active\">details</a> -->\r\n  <!-- Form other options \r\n  <form class=\"form-inline\"> -->\r\n      <!-- <button class=\"btn btn-sm btn-outline-bg-light\" routerLink=\"/home\" routerLinkActive=\"active\" type=\"button\"><h3>Home</h3></button>-->\r\n      <!--<button class=\"btn btn-sm btn-outline-bg-light\" routerLink=\"/details\" routerLinkActive=\"active\" type=\"button\"><h3>Details</h3></button> -->\r\n  <!-- </form>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 p-0\">\r\n      <div id=\"map\" class=\"match-parent col-12 p-0\">\r\n          <div #Coordinadas id='coordinates' class='' *ngFor=\"let m of markers\">\r\n            {{markers}}\r\n          </div> -->\r\n       <!-- <div id=\"marker\" class=\"marker\" *ngFor=\"let m of markers\" (click)=\"onSelect(m)\"> {{m.lat}}{{m.lng}} </div> -->\r\n             <!-- <ul> -->\r\n              <!-- {{Markers.Name}}<br>{{Coordinates.Address}} -->\r\n              <!-- <div *ngFor=\"let m of markers; let i = index\"(click)=\"onSelect(m, i)\"\r\n              [lat]=\"m.lat\" [lng]=\"m.lng\"[markerDraggable]=\"m.arrastrable\"\r\n              (click)=\"onSelect(Markers.Coordinates)\">\r\n              [Coordinates.lat]=\"item.lat\" [Coordinates.long]=\"item.lng\"\r\n              </div> -->\r\n          <!-- </ul> -->\r\n      <!-- </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/confirmation/confirmation.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/confirmation/confirmation.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-map></app-map>\r\n<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-sm-6 col-md-6\">\r\n            <div class=\"welcome my-3 mx-0\">\r\n                <p class=\"font-weight-bold\">Proximo viaje confirmado</p>\r\n            </div>\r\n            <!-- <div class=\"info my-1 mx-0 mt-2\">\r\n                <p class=\"font-weight\">Confirma el retiro</p>\r\n            </div> -->\r\n            <div class=\"mt-4\">\r\n                <a routerLink=\"/home\" routerLinkActive=\"active\">    \r\n                    <button class=\"btn ml-5 mt-2\">\r\n                        <h6 class=\"m-0\">LISTO</h6>\r\n                    </button>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>    \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/details/details.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/details/details.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-aos=\"zoom-out\"  data-aos-duration=\"1000\">\r\n        <app-map></app-map>\r\n</div>\r\n<section data-aos=\"fade-up\"  data-aos-duration=\"1000\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-sm-6 col-md-6\">\r\n            <div class=\"info my-1 mx-0 mt-2\">\r\n                <p class=\"font-weight\">Confirmar el retiro</p>\r\n            </div>\r\n            <div class=\"select-card mt-4\">\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-auto\">\r\n                        <img src=\"../../../assets/img/icon/Icono reciclar.png\" class=\"card-img m-3\" alt=\"img car blue\">\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        \r\n                        <div class=\"card-body\">\r\n                            \r\n                            <span class=\"card-text ml-1\">Uber Recycle</span>\r\n                            <p class=\"font-weight ml-1\">Llegada aprox.{{ time }} </p> \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                        <div class=\"card-body\">\r\n                            <a routerLink=\"/program\" routerLinkActive=\"active\">  \r\n                                <p class=\"card-text float-right\">CLP 0.000</p>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>    \r\n            </div>\r\n            <div class=\"mt-4\">\r\n                <a routerLink=\"/home\" routerLinkActive=\"active\">    \r\n                    <button class=\"btn ml-5 mt-2\">\r\n                        <h6 class=\"m-0\">PROGRAMAR UBER RECYCLE</h6>\r\n                        <p class=\"m-0\">vie., oct.25, {{time}} </p>\r\n                    </button>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/direction/direction.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/direction/direction.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  class=\"map\" data-aos=\"zoom-out\"  data-aos-duration=\"1000\">\n        <div>\n                <app-map></app-map>\n        </div>\n    <div> \n        <form data-aos=\"fade-up\"  data-aos-duration=\"1000\">\n                <div class=\"welcome my-3 mx-0\">\n                        <p class=\"font-weight-bold\">Buenas tardes, Maria</p>\n                    </div>\n            <div class=\"m-0 p-0\">\n                    <div class=\"form-group mx-3 p-0\" style=\"background-color: #EDEDED\">\n                            <input type=\"text\" class=\"form-control rounded-0 mt-2  mb-2\" placeholder=\"Ingresa el punto de partida\">\n                    </div>\n                    <div class=\"direction-containers mx-4 my-2 pb-3 border-bottom\" (click)=\"getDetails('puma')\">\n                            <img src=\"../../../assets/img/Direction/Dirección Puma.png\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"direction-containers mx-4 my-2 py-2\" (click)=\"getDetails('apoquindo')\">\n                            <img src=\"../../../assets/img/Direction/Dirección Apoquindo.png\" class=\"img-fluid\">\n                    </div>\n                </div>\n                </form>\n        </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recycle-icon mr-5\" (click)=\"getInfo()\">\r\n        <img src=\"../../../assets/img/icon/icon-recycle.png\" width=\"120px\" class=\"img-fluid\">\r\n</div>\r\n<section  class=\"map\" data-aos=\"zoom-out\"  data-aos-duration=\"1000\">\r\n        <div>\r\n                <app-map></app-map>\r\n        </div>\r\n    <div>  \r\n        <form data-aos=\"fade-up\"  data-aos-duration=\"1000\">\r\n                <div class=\"welcome my-3 mx-0\">\r\n                        <p class=\"font-weight-bold\">Buenas tardes, Maria</p>\r\n                    </div>\r\n            <div>\r\n                <div class=\"row justify-content-center m-0 p-0\">\r\n                    <div class=\"form-group col-6 col-sm-6 col-md-6 col-lg-6 p-0\" style=\"background-color: #EDEDED\">\r\n                            <input type=\"text\" class=\"form-control rounded-0 mt-2  mb-2\" placeholder=\"¿A dónde vas?\">\r\n                        </div> \r\n                        <div class=\"form-group col-4 col-sm-4 col-md-4 col-lg-4 p-0\" style=\"background-color: #EDEDED\">\r\n                                <input type=\"text\" class=\"form-control border-left rounded-0 mt-2  mb-2\" placeholder=\"Programar\">\r\n                            </div> \r\n                    </div>\r\n                    <div class=\"direction-containers mx-4 my-2 pb-3 border-bottom\">\r\n                            <img src=\"../../../assets/img/Direction/Dirección Puma.png\" class=\"img-fluid\">\r\n                    </div>\r\n                    <div class=\"direction-containers mx-4 my-2 py-2\">\r\n                            <img src=\"../../../assets/img/Direction/Dirección Apoquindo.png\" class=\"img-fluid\">\r\n                    </div>\r\n                </div>\r\n                </form>\r\n        </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/info/info.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/info/info.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info\" data-aos=\"zoom-out\" data-aos-duration=\"1000\">\n        <img src=\"../../../assets/img/Infografía Pasajero.png\" class=\"img-fluid\">\n</div>\n<div class=\"form-group m-3\">\n        <button class=\"btn btn-dark btn-block rounded-0\" type=\"button\" (click)=\"getProgram()\">PROGRAMAR <span style=\"color: #98D400\">UBER RECYCLE</span></button>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/program/program.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/program/program.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"map\" data-aos=\"zoom-out\"  data-aos-duration=\"1000\">\n    <div>\n        <app-map></app-map>\n    </div>\n    <div data-aos=\"fade-up\"  data-aos-duration=\"1000\">\n        <div class=\"welcome my-4 mx-0\">\n            <p class=\"font-weight-bold\">Programar Uber Recycle</p>\n        </div>\n        <form>\n            <div class=\"welcome my-4 mx-0\">\n               <p>vie., 25 oct.</p>\n            </div>\n            <div class=\"welcome my-4 mx-0\">\n                <input onfocus=\"(this.type='time')\" class=\"form-control\" (change)=\"fromTime($event)\"\n                    placeholder=\"15:00\">\n            </div>\n        </form>\n        <div class=\"form-group m-3\">\n                <button class=\"btn btn-dark btn-block rounded-0\" type=\"button\" (click)=\"getDirection()\">FIJAR HORA DEL RETIRO</button>\n            </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 p-0\">\r\n        <div id=\"map\" class=\"match-parent col-12 p-0\">\r\n            <div #Coordinadas id='coordinates' class='' *ngFor=\"let m of markers\">\r\n              {{markers}}\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _components_program_program_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/program/program.component */ "./src/app/components/program/program.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");
/* harmony import */ var _components_direction_direction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/direction/direction.component */ "./src/app/components/direction/direction.component.ts");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/confirmation/confirmation.component */ "./src/app/components/confirmation/confirmation.component.ts");










var appRoutes = [
    { path: 'map', component: _app_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'info', component: _components_info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"] },
    { path: 'program', component: _components_program_program_component__WEBPACK_IMPORTED_MODULE_6__["ProgramComponent"] },
    { path: 'direction', component: _components_direction_direction_component__WEBPACK_IMPORTED_MODULE_8__["DirectionComponent"] },
    { path: 'details', component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"] },
    { path: 'confirmation', component: _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _app_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false, scrollPositionRestoration: 'enabled' } // <-- debugging purposes only
                )
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n    height: 100%;\r\n}\r\n\r\n.match-parent {\r\n    width: 100%;\r\n    height: 1000px;\r\n    /* display: flow-root; */\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n/* .coordinates {\r\n    background-image: url(https://i.ibb.co/ypyh2Rb/chinch.png);\r\n    background-size: cover;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n} */\r\n\r\n.title {\r\n    /* display: flex; */\r\n    -webkit-box-align: left;\r\n            align-items: left;\r\n    -webkit-box-pack: left;\r\n            justify-content: left;\r\n}\r\n\r\n/* #marker {\r\n    background-image: url('https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg');\r\n    background-size: cover;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    } */\r\n\r\n.mapboxgl-popup {\r\n    max-width: 200px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUNBOzs7Ozs7O0dBT0c7O0FBQ0g7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixzQkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUNBOzs7Ozs7O09BT087O0FBRUg7SUFDQSxnQkFBZ0I7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdGNoLXBhcmVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgLyogZGlzcGxheTogZmxvdy1yb290OyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi8qIC5jb29yZGluYXRlcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmliYi5jby95cHloMlJiL2NoaW5jaC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59ICovXHJcbi50aXRsZSB7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuLyogI21hcmtlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9hc3NldHMvd2FzaGluZ3Rvbi1tb251bWVudC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH0gKi9cclxuICAgICBcclxuICAgIC5tYXBib3hnbC1wb3B1cCB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_program_program_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/program/program.component */ "./src/app/components/program/program.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");
/* harmony import */ var _components_direction_direction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/direction/direction.component */ "./src/app/components/direction/direction.component.ts");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/confirmation/confirmation.component */ "./src/app/components/confirmation/confirmation.component.ts");



// import { HttpClient } from '@angular/common/http';
// COMPONENTS









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
                _components_program_program_component__WEBPACK_IMPORTED_MODULE_8__["ProgramComponent"],
                _components_info_info_component__WEBPACK_IMPORTED_MODULE_9__["InfoComponent"],
                _components_direction_direction_component__WEBPACK_IMPORTED_MODULE_10__["DirectionComponent"],
                _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
                // HttpClient
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info {\r\n    text-align: center;\r\n    font-size: 14px;\r\n}\r\n.btn {\r\n    background-color: black;\r\n    padding: 10px 50px;\r\n    color: white;\r\n    font-weight:bold;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! raw-loader!./confirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.css */ "./src/app/components/confirmation/confirmation.component.css")]
        })
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/details/details.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    padding: 1px 0 1px 0;\r\n\r\n}\r\n.select-card {\r\n    padding: 1px 0 1px 0;\r\n    background-color: #EDEDED; \r\n\r\n}\r\n.card-body {\r\n    padding: 0 0 0 1px;\r\n    \r\n}\r\n.card-body > .card-text {\r\n    margin-bottom: 0;\r\n    text-align: left;\r\n    font-size: 18px;\r\n    font-weight:bold\r\n}\r\n.card-img {\r\n    max-width: 50px;\r\n}\r\n.card1-img {\r\n    max-width: 4em;\r\n    /* text-align: right; */\r\n}\r\n.card2-img {\r\n    max-width: 9em;\r\n    /* text-align: right; */\r\n}\r\n.info {\r\n    text-align: center;\r\n    font-size: 14px;\r\n}\r\n.btn {\r\n    background-color: black;\r\n    padding: 7px 35px;\r\n    color: white;\r\n    font-weight:bold;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjs7QUFFeEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7O0FBRTdCO0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZjtBQUNKO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxcHggMCAxcHggMDtcclxuXHJcbn1cclxuLnNlbGVjdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDFweCAwIDFweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDsgXHJcblxyXG59XHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMXB4O1xyXG4gICAgXHJcbn1cclxuLmNhcmQtYm9keSA+IC5jYXJkLXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkXHJcbn1cclxuIFxyXG4uY2FyZC1pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG59XHJcbi5jYXJkMS1pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA0ZW07XHJcbiAgICAvKiB0ZXh0LWFsaWduOiByaWdodDsgKi9cclxufVxyXG4uY2FyZDItaW1nIHtcclxuICAgIG1heC13aWR0aDogOWVtO1xyXG4gICAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXHJcbn1cclxuLmluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA3cHggMzVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_destination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/destination.service */ "./src/app/services/destination.service.ts");



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(destinationService) {
        this.destinationService = destinationService;
        this.date = destinationService.date;
        this.time = destinationService.time;
        this.direction = destinationService.direction;
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.ctorParameters = function () { return [
        { type: src_app_services_destination_service__WEBPACK_IMPORTED_MODULE_2__["DestinationService"] }
    ]; };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/components/details/details.component.css")]
        })
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/direction/direction.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/direction/direction.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\r\n    border-bottom: 3px solid #dee2e6!important;\r\n    text-align: center;\r\n    font-size: 14px;\r\n}\r\n.form-control {\r\n    border: none;\r\n    background-color: #EDEDED;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXJlY3Rpb24vZGlyZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlyZWN0aW9uL2RpcmVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/direction/direction.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/direction/direction.component.ts ***!
  \*************************************************************/
/*! exports provided: DirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionComponent", function() { return DirectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_destination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/destination.service */ "./src/app/services/destination.service.ts");




var DirectionComponent = /** @class */ (function () {
    function DirectionComponent(destinationService, router) {
        this.destinationService = destinationService;
        this.router = router;
    }
    DirectionComponent.prototype.ngOnInit = function () {
    };
    DirectionComponent.prototype.getDetails = function (direction) {
        this.destinationService.getDirection(direction);
        this.router.navigate(['/details']);
    };
    DirectionComponent.ctorParameters = function () { return [
        { type: src_app_services_destination_service__WEBPACK_IMPORTED_MODULE_3__["DestinationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DirectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-direction',
            template: __webpack_require__(/*! raw-loader!./direction.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/direction/direction.component.html"),
            styles: [__webpack_require__(/*! ./direction.component.css */ "./src/app/components/direction/direction.component.css")]
        })
    ], DirectionComponent);
    return DirectionComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\r\n    border-bottom: 3px solid #dee2e6!important;\r\n    text-align: center;\r\n    font-size: 14px;\r\n}\r\n.form-control {\r\n    border: none;\r\n    background-color: #EDEDED;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n.border-left {\r\nborder-left: 1px solid #000000!important;\r\n}\r\n.recycle-icon {\r\n    display: block;\r\n    float: right;  \r\n    z-index: 3;\r\n    position: absolute; /*newly added*/\r\n    right: 5px; /*newly added*/\r\n    top: 25px;/*newly added*/\r\n}\r\n.map {\r\n position: fixed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQixFQUFFLGNBQWM7SUFDbEMsVUFBVSxFQUFFLGNBQWM7SUFDMUIsU0FBUyxDQUFDLGNBQWM7QUFDNUI7QUFDQTtDQUNDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5ib3JkZXItbGVmdCB7XHJcbmJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDAwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlY3ljbGUtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiByaWdodDsgIFxyXG4gICAgei1pbmRleDogMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLypuZXdseSBhZGRlZCovXHJcbiAgICByaWdodDogNXB4OyAvKm5ld2x5IGFkZGVkKi9cclxuICAgIHRvcDogMjVweDsvKm5ld2x5IGFkZGVkKi9cclxufVxyXG4ubWFwIHtcclxuIHBvc2l0aW9uOiBmaXhlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getInfo = function () {
        this.router.navigate(['/info']);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/info/info.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/info/info.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-dark {\r\n    background-color: #000000 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var InfoComponent = /** @class */ (function () {
    function InfoComponent(router) {
        this.router = router;
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent.prototype.getProgram = function () {
        this.router.navigate(['/program']);
    };
    InfoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/components/info/info.component.css")]
        })
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/program/program.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/program/program.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\r\n    border-bottom: 2px solid #dee2e6!important;\r\n    text-align: center;\r\n    font-size: 18px;\r\n}\r\n.form-control {\r\n    border: none;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n\r\n}\r\n.btn-dark {\r\n    background-color: #000000 !important;\r\n}\r\n.form-group, .form-control {\r\n    -webkit-appearance: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmFtL3Byb2dyYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2dyYW0vcHJvZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5idG4tZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAsIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/program/program.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/program/program.component.ts ***!
  \*********************************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_destination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/destination.service */ "./src/app/services/destination.service.ts");




var ProgramComponent = /** @class */ (function () {
    function ProgramComponent(destinationService, router) {
        this.destinationService = destinationService;
        this.router = router;
    }
    ProgramComponent.prototype.fromDate = function (event) {
        this.initialDate = event.target.value;
    };
    ProgramComponent.prototype.fromTime = function (event) {
        this.initialTime = event.target.value;
    };
    ProgramComponent.prototype.ngOnInit = function () {
    };
    ProgramComponent.prototype.getDirection = function () {
        this.destinationService.getDate(this.initialDate);
        this.destinationService.getTime(this.initialTime);
        this.router.navigate(['/direction']);
    };
    ProgramComponent.ctorParameters = function () { return [
        { type: src_app_services_destination_service__WEBPACK_IMPORTED_MODULE_3__["DestinationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-program',
            template: __webpack_require__(/*! raw-loader!./program.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/program/program.component.html"),
            styles: [__webpack_require__(/*! ./program.component.css */ "./src/app/components/program/program.component.css")]
        })
    ], ProgramComponent);
    return ProgramComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n    height: 100%;\r\n}\r\n\r\n.match-parent {\r\n    width: 100%;\r\n    height: 300px;\r\n    /* display: flow-root; */\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.title {\r\n    /* display: flex; */\r\n    float: left;\r\n}\r\n\r\n@media (max-width:320px){\r\n   .match-parent {\r\n    height: 230px;\r\n}\r\n}\r\n\r\n@media (max-width:360px){\r\n    .match-parent {\r\n        height: 360px;\r\n    }\r\n}\r\n\r\n@media (max-width:411px){\r\n    .match-parent {\r\n        height: 340px;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7R0FDRztJQUNDLGFBQWE7QUFDakI7QUFDQTs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRjaC1wYXJlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgLyogZGlzcGxheTogZmxvdy1yb290OyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiAgICAgXHJcbkBtZWRpYSAobWF4LXdpZHRoOjMyMHB4KXtcclxuICAgLm1hdGNoLXBhcmVudCB7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG59XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MzYwcHgpe1xyXG4gICAgLm1hdGNoLXBhcmVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo0MTFweCl7XHJcbiAgICAubWF0Y2gtcGFyZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/map.service */ "./src/services/map.service.ts");



// MapBox

// Service

var MapComponent = /** @class */ (function () {
    function MapComponent(mapService) {
        this.mapService = mapService;
        // @ViewChild('coordinadas') coordinadas: ElementRef;
        // Title app
        this.title = 'Uber';
        this.style = 'mapbox://styles/mapbox/streets-v11';
        // Position initial SantiagoCity
        this.lat = -33.4123212;
        this.lng = -70.5796153;
    }
    // Call Observable with Subscribe
    MapComponent.prototype.getMarkers = function () {
        var _this = this;
        this.mapService.getData()
            .subscribe(function (markersPoints) { return _this.list = markersPoints; });
    };
    MapComponent.prototype.ngOnInit = function () {
        // Initializing mapbox with token
        mapbox_gl__WEBPACK_IMPORTED_MODULE_3__["accessToken"] = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mapbox.accessToken;
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__["Map"]({
            container: 'map',
            style: this.style,
            zoom: 16,
            center: [this.lng, this.lat]
        });
        // Add map controls
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__["NavigationControl"]());
        // Add first marker in SantiagoCity
        var marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__["Marker"](this.element)
            .setLngLat({
            lat: -33.4123212,
            lng: -70.5796153,
        })
            .addTo(this.map);
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        //Call service to print markers
        // let list = this.mapService.getData();
        // console.log("LISTA:", list);
        // list.forEach(element => {
        //   let item = element;
        //   console.log("ELEMENT:", element);
        //   item.forEach(e => {
        //     let coordinates = e.Coordinates;  
        //     let arr:[number, number] = [coordinates.lng, coordinates.lat]
        // console.log(arr);
        // let name = e.Name;
        // let address = e.Address;
        // Option for Markers in map
        // let marker = new mapboxgl.Marker({
        //   draggable: true  
        // })
        // .setLngLat(arr) 
        // .addTo(this.map);
        // console.log(arr);
        // let monument = arr;
        // let map = new mapboxgl.Map({
        // container: 'map',
        // style: 'mapbox://styles/mapbox/light-v10',
        // center: monument,
        // zoom: 15
        // });
        // create the popup
        // let popup = new mapboxgl.Popup({ offset: 25 })
        // .setText('Construction on the Washington Monument began in 1848.');
        // // create DOM element for the marker
        // let el = document.createElement('div');
        // el.id = 'marker';
        // // create the marker
        // new mapboxgl.Marker(el)
        // .setLngLat(monument)
        // .setPopup(popup) // sets a popup on this marker
        // .addTo(map);
        // });
        // });
    };
    MapComponent.ctorParameters = function () { return [
        { type: _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"] }
    ]; };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
            providers: [_services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]],
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/services/destination.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/destination.service.ts ***!
  \*************************************************/
/*! exports provided: DestinationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationService", function() { return DestinationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DestinationService = /** @class */ (function () {
    function DestinationService() {
        this.getDateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getDateObservable = this.getDateSubject.asObservable();
        this.getTimeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getTimeObservable = this.getTimeSubject.asObservable();
        this.getDirectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getDirectionObservable = this.getDirectionSubject.asObservable();
    }
    DestinationService.prototype.getDate = function (date) {
        this.date = date;
        this.getDateSubject.next(date);
    };
    DestinationService.prototype.getTime = function (time) {
        this.time = time;
        this.getTimeSubject.next(time);
    };
    DestinationService.prototype.getDirection = function (direction) {
        this.direction = direction;
        this.getDirectionSubject.next(direction);
    };
    DestinationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DestinationService);
    return DestinationService;
}());



/***/ }),

/***/ "./src/data_models/init-markers.ts":
/*!*****************************************!*\
  !*** ./src/data_models/init-markers.ts ***!
  \*****************************************/
/*! exports provided: markersPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markersPoints", function() { return markersPoints; });
// export default class Init {
//   load(){
//     if(localStorage.getItem('markersPoints') === null || localStorage.getItem('markersPoints') === undefined){
//       console.log('No se encontraron marcadores');
var markersPoints = [
    {
        "Name": "Red Barn Stores 3858-CUAJIMALPA",
        "Address": "JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 2344-LOMAS",
        "Address": "BOULEVARD MANUEL AVILA CAMACHO NO. 491 COL. PERIODISTAS C.P.11220",
        "Coordinates": {
            "lat": 40.640771,
            "lng": -74.016133
        }
    },
    {
        "Name": "Red Barn Stores 1770-PATIO SANTA FE",
        "Address": "AV. PROLONGACIÓN PASEO DE LA REFORMA NO. 400, ENTRE LAS CALLES: AVENIDA VASCO DE QUIROGA  Y DE AVENIDA PASEO DE LA REFORMA, COL. SANTA FE,  DELEGACIÓN ÁLVARO OBREGÓN CP  01210",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 2466-CUITLAHUAC",
        "Address": "AV. CUITLÁHUAC NO. 3651 COL. HOGAR Y SEGURIDAD DELEG. AZCAPOTZALCO C.P.02820",
        "Coordinates": {
            "lat": 19.46961,
            "lng": -99.17176
        }
    },
    {
        "Name": "Red Barn Stores 3862-AZCAPOTZALCO",
        "Address": "AV. NEXTENGO NO. 78 COL. SANTA CRUZ ACAYUCAN , MEXICO D.F. C.P. 02770",
        "Coordinates": {
            "lat": 19.47704,
            "lng": -99.1927
        }
    },
    {
        "Name": "Red Barn Stores 2347-TLAHUAC",
        "Address": "CALZ. TLÁHUAC NO. 5662  COL. SAN LORENZO TEZONCO  DELEG. TLÁHUAC, MEXICO DF. C.P. 13266",
        "Coordinates": {
            "lat": 19.30518,
            "lng": -99.0615
        }
    },
    {
        "Name": "Red Barn Stores 2464-MIRAMONTES ",
        "Address": "AV. ESCUELA NAVAL MILITAR # 753 ESQ. AV. CANAL DE MIRAMONTES DELEG. COYOACÁN C.P. 04890",
        "Coordinates": {
            "lat": 19.31519,
            "lng": -99.12459
        }
    },
    {
        "Name": "Red Barn Stores 2670-TLALPAN",
        "Address": "CALZADA TLALPAN NO. 1037  COL. AMERICAS UNIDAS C.P. 03500 DELEG. BENITO JUÁREZ",
        "Coordinates": {
            "lat": 19.3801,
            "lng": -99.14036
        }
    },
    {
        "Name": "Red Barn Stores 3857-VILLA COAPA",
        "Address": "AV. CANAL DE MIRAMONTES NO. 3520 COL. SAN BARTOLO COAPA  C.P. 14390, MEXICO, D.F.",
        "Coordinates": {
            "lat": 19.29443,
            "lng": -99.1255
        }
    },
    {
        "Name": "Red Barn Stores 2345-TEPEYAC",
        "Address": "CALZ. DE GUADALUPE NO. 431 COL. GUADALUPE TEPEYAC C.P.07840 DELEG. GUSTAVO A. MADERO",
        "Coordinates": {
            "lat": 19.47242,
            "lng": -99.12184
        }
    },
    {
        "Name": "Red Barn Stores 3794-ACUEDUCTO DE GUADALUPE",
        "Address": "AV. LUIS ESPINOZA NO.  160 COL. SANTIAGO ATEPETLAC, DELEGACION GUSTAVO A. MADERO MEXICO D.F. C.P. 07200",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 3846-BUENAVISTA",
        "Address": "INSURGENTES NORTE NO. 131, COL GUERRERO C.P. 06300   MEXICO, D.F.",
        "Coordinates": {
            "lat": 19.44128,
            "lng": -99.14378
        }
    },
    {
        "Name": "Red Barn Stores 3851-AEROPUERTO",
        "Address": "CALZADA IGNACIO ZARAGOZA NO. 58   COL. FEDERAL  C.P. 15700, MEXICO D.F.",
        "Coordinates": {
            "lat": 19.41938,
            "lng": -99.09469
        }
    },
    {
        "Name": "Red Barn Stores 3872-BALBUENA",
        "Address": "FRAY SERVANDO TERESA DE MIER NO. 881 COL.  JARDIN BALBUENA C.P. 15900, MEXICO D.F.",
        "Coordinates": {
            "lat": 19.41799,
            "lng": -99.10565
        }
    },
    {
        "Name": "Red Barn Stores 3877-TORRES  LINDAVISTA",
        "Address": "MIGUEL OTHON DE MENDIZABAL OTE. 343, COL. NUEVA INDUSTRIAL VALLEJO,  C.P. 07700 MÉXICO, D.F",
        "Coordinates": {
            "lat": 19.50548,
            "lng": -99.15066
        }
    },
    {
        "Name": "Red Barn Stores 4547-EDUARDO MOLINA",
        "Address": "CALZADA SAN JUAN DE ARAGÓN NO. 516 COLONIA D.M. NACIONAL DELEGARCIÓN GUSTAVO A. MADERO D.F. C.P. 7090",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 2430-COPILCO",
        "Address": "AV. COPILCO NO. 164 COL. OXTOPULCO DEL. COYOACAN C.P. 04318",
        "Coordinates": {
            "lat": 19.344095,
            "lng": -99.178408
        }
    },
    {
        "Name": "Red Barn Stores 2689-FELIX CUEVAS",
        "Address": "AV. SAN FRANCISCO NO. 1621 COL. DEL VALLE DEL. BENITO JUÁREZ C.P. 03100",
        "Coordinates": {
            "lat": 19.38631,
            "lng": -99.17346
        }
    },
    {
        "Name": "Red Barn Stores 3845-UNIVERSIDAD",
        "Address": "AV. UNIVERSIDAD NO. 936-A COL. SANTA CRUZ ATOYAC   C.P. 03310, MEXICO D.F.",
        "Coordinates": {
            "lat": 19.36984,
            "lng": -99.16516
        }
    },
    {
        "Name": "Red Barn Stores 3848-TAXQUEÑA",
        "Address": "MIGUEL A. DE QUEVEDO NO. 175 COL. CHIMALISTAC DELEGACION COYOACAN C.P. 01070, MEXICO D.F.",
        "Coordinates": {
            "lat": 19.34828,
            "lng": -99.18477
        }
    },
    {
        "Name": "Red Barn Stores 3852-PLATEROS",
        "Address": "BLVD. ADOLFO LOPEZ MATEOS NO. 1701 COL. LOMAS DE PLATEROS, DELEG. ALVARO OBREGON C.P. 01460 MEXICO D.F.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 3863-PERIFERICO SUR",
        "Address": "AV. CENTRO COMERCIAL NO. 190 COL. INSURGENTES CUICUILCO C.P. 04530 MEXICO, D.F.",
        "Coordinates": {
            "lat": 19.30759,
            "lng": -99.19368
        }
    },
    {
        "Name": "Red Barn Stores 3876-LAS AGUILAS",
        "Address": "LAS AGUILAS NO. 820 COL. LAS AGUILAS C.P. 01710  ALVARO OBREGON MEXICO D.F.",
        "Coordinates": {
            "lat": 19.36016,
            "lng": -99.20757
        }
    },
    {
        "Name": "Red Barn Stores 1580-EL ROSARIO",
        "Address": "AV. EL ROSARIO NO. 1025 ENTRE LAS CALLES AQUILES SERDÁN Y AV. DEL PARQUE, COL. TIERRA NUEVA, C.P. 02430, DELEG. AZCAPOTZALCO, D.F.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 2033-PLAZA ORIENTE",
        "Address": "AV. CANAL DE TEZONTLE NO. 1520 COL. DR. ALFONSO ORTIZ TIRADO DELEG. IZTAPALAPA D.F. C.P.09020",
        "Coordinates": {
            "lat": 19.38422,
            "lng": -99.07574
        }
    },
    {
        "Name": "Red Barn Stores 1460-CUEMANCO",
        "Address": "CAÑAVERALES #222 COL.GRANJAS COAPA DELEGACION TLALPAN C.P.14330",
        "Coordinates": {
            "lat": 19.291905,
            "lng": -99.110701
        }
    },
    {
        "Name": "Red Barn Stores 2382-INTERLOMAS",
        "Address": "BLVD. MAGNOCENTRO NO. 35, LOTE 1, MANZANA II, COL  BOSQUES DE LAS PALMAS, HUIXQUILUCAN, EDO. DE MEXICO, C.P. 52787",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 3504-AV. JESUS DEL MONTE",
        "Address": "BLVD. PASEO INTERLOMAS # 5 ENTRE LAS CALLES PASEO INTERLOMAS Y JESUS DEL MONTE, COL. GREEN HOUSE SEGUNDA ETAPA, CP 52779, HUIXQUILUCAN EDO MEX",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 2343-TOLUCA",
        "Address": "PASEO TOLLOCAN NO. 600 COL. SECTOR PROGRESO, C.P.50150 TOLUCA EDO. DE MÉXICO",
        "Coordinates": {
            "lat": 19.28327,
            "lng": -99.64021
        }
    },
    {
        "Name": "Red Barn Stores 3263-PILARES",
        "Address": "AV. BAJA VELOCIDAD NO. 1201 ORIENTE, ENTRE LAS CALLES PRIVADA CERRADA BERNARDO VARA Y TOLLOCAN II, COL. SAN JERÓNIMO CHICAHUALCO, CP 52170, METEPEC, MEX. (OFICIAL) ",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 3790-METEPEC",
        "Address": "LEONA VICARIO NO. 502, COL LA PURISIMA, C.P. 52840, METEPEC, EDO DE MÉXICO",
        "Coordinates": {
            "lat": 19.26131,
            "lng": -99.62237
        }
    },
    {
        "Name": "Red Barn Stores 5702-SANTIN ",
        "Address": "VIALIDAD TOLUCA-NAUCALPAN NO. 1101, SAN MATEO OTZACATIPAN,TOLUCA EDO. MEX. CP. 50200",
        "Coordinates": {
            "lat": 19.32126,
            "lng": -99.61086
        }
    },
    {
        "Name": "Red Barn Stores 5791-ZINACANTEPEC",
        "Address": "BOULEVARD ADOLFO LÓPEZ MATEOS NO. 117 COL. OJUELOS ZINACANTEPEC C.P. 51350",
        "Coordinates": {
            "lat": 19.5418,
            "lng": -99.23292
        }
    },
    {
        "Name": "Red Barn Stores 5825-ALFREDO DEL MAZO",
        "Address": "BOULEVARD ALFREDO DEL MAZO NO. 503 COL. JARDINES DE TLACOPA TOLUCA C.P. 50071",
        "Coordinates": {
            "lat": 19.29185,
            "lng": -99.62784
        }
    },
    {
        "Name": "Red Barn Stores 1044-SAN MARCOS IZCALLI",
        "Address": "AV. CHALMA NO. 281 COL. JARDINES DE LA HACIENDA, CUAUTITLAN IZCALLI, EDO. DE MEX. C.P. 54720",
        "Coordinates": {
            "lat": 19.67025,
            "lng": -99.20183
        }
    },
    {
        "Name": "Red Barn Stores 1423-SANTA ELENA",
        "Address": "CARRETERA CUAUTITLAN-TULTEPEC NO. 2 ENTRE LAS CALLES SANTA LUCIA Y CAMINO VIEJO EL QUEMADO, COL. TERREMOTO C.P. 54850, CUAUTITLAN EDO. DE MEX.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 1834-PLAZA DEL LAGO",
        "Address": "AV. CUAUTITLÁN IZCALLI S/N ESQ. TENANGO DEL VALLE, COL. CUAUTITLÁN IZCALLI, C.P. 54700, CUAUTITLÁN IZCALLI, EDO. DE MÉX.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1001-San Buenaventura",
        "Address": "Paseo San Buenaventura No. 15, Esq. Paseo de Las Lomas, San Buenaventura, Municipio de Ixtapaluca, Estado de México, C.P. 56536",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 2643-NICOLAS ROMERO",
        "Address": "BLVD. ARTURO MONTIEL ROJAS KM 10+700 ENTRE LAS CALLES AV. DE LAS FLORES Y CALLE 6 DE ENERO, COL. AMPLIACION VISTA HERMOSA, C.P. 54414 NICOLAS ROMERO, EDO. DE MEX.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 3900-COACALCO",
        "Address": "VIA JOSE LOPEZ PORTILLO NO 101. COL. ZACUAUTITLA, C.P. 55710 COACALCO DE BERRIOZABAL, EDO DE MEX",
        "Coordinates": {
            "lat": 19.63355,
            "lng": -99.09562
        }
    },
    {
        "Name": "Red Barn Stores 4018-SANTA MARÍA COACALCO",
        "Address": "VÍA JOSÉ LÓPEZ PORTILLO NO. 2 COL. SAN FRANCISCO COACALCO, C.P. 55712 COACALCO DE BERRIOZABAL, EDO. DE MEX.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1002-Teotihuacán",
        "Address": "Avenida Cruz de la Misión #8 San JuanTeotihuacán, Edo de Méx C.P. 55800",
        "Coordinates": {
            "lat": 19.49696,
            "lng": -99.25328
        }
    },
    {
        "Name": "Red Barn Stores 2041-TOLTECAS",
        "Address": "AV. HIDALGO S/N  COL. INDUSTRIAL TLAXCOLPAN CP 54030 , TLALNEPANTLA DE BAZ, EDO. DE MEX.",
        "Coordinates": {
            "lat": 19.54396,
            "lng": -99.1944
        }
    },
    {
        "Name": "SuperStore 3849-ESMERALDA",
        "Address": "Vía Doctor Jorge Jimenez Cantu S/N Col. Plaza Del Condado C.P. 52930 Atizapán de Zaragoza, Edo. De Mexico",
        "Coordinates": {
            "lat": 32.965945,
            "lng": -96.86535
        }
    },
    {
        "Name": "Red Barn Stores 1032-LOMAS VERDES",
        "Address": "SUPER CARRETERA LOMAS VERDES NO. 1200 VI SECCIÓN LOMAS VERDES; NAUCALPAN, ED. MEXICO C.P. 53120",
        "Coordinates": {
            "lat": 19.51193,
            "lng": -99.26485
        }
    },
    {
        "Name": "Red Barn Stores 1584-ESPACIO ESMERALDA",
        "Address": "AV. DR. JORGE JIMENEZ CANTU SN, ENTRE LAS CALLES ESTADIA Y RESIDENCIA CHILUCA, COL. LA ESTADIA C.P. 52936 ATIZAPAN EDO. DE MEX.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 3847-SATELITE",
        "Address": "CIRCUITO 19 METALURGISTAS NO. 2 CD. SATELITE  C.P. 53100  NAUCALPAN DE JUAREZ, EDO. DE MEX.",
        "Coordinates": {
            "lat": 19.52169,
            "lng": -99.23713
        }
    },
    {
        "Name": "Red Barn Stores 3850-ECHEGARAY",
        "Address": "EMILIANO ZAPATA NO 7  COL. SANTA MARÍA NATIVITAS C.P. 05320 EDO. DE MEX.",
        "Coordinates": {
            "lat": 19.40531,
            "lng": -98.93792
        }
    },
    {
        "Name": "Red Barn Stores 3854-PIRULES",
        "Address": "BLVD. MANUEL AVILA CAMACHO NO. 2550  FRACC. LOS PIRULES  C.P. 54050  TLALNEPANTLA EDO. DE MEX.",
        "Coordinates": {
            "lat": 19.543,
            "lng": -99.21271
        }
    },
    {
        "Name": "Red Barn Stores 1169-MULTIPLAZA ARBOLEDAS",
        "Address": "AUTOPISTA  MEXICO-QUERETARO NO. 3985 COL. CENTRO INDUSTRIAL TLALNEPANTLA CP 54030 MPO. TLANEPANTLA DE BAZ, ESTADO DE MEXICO.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 5855-LAS ALAMEDAS",
        "Address": "PASEO DE LAS PALOMAS NO. 25 FRACC. LAS ALAMEDAS MUNICIPIO DE ATIZAPÁN DE ZARAGOZA, EDO. DE MÉX. C.P. 52970",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 1683-VICENTE GUERRERO",
        "Address": "CARRETERA FEDERAL MEXICO -CUAULA # 166 ESQ. CARRETERA A CHALCO-SANTA MARIA HUEXOCULCO COL. SAN GREGORIO CUAUTZINGO, CP 56600, CHALCO EDO DE MEXICO",
        "Coordinates": {
            "lat": 18.43148,
            "lng": -67.118742
        }
    },
    {
        "Name": "Red Barn Stores 1202-HORIZONTE",
        "Address": "AV. INGENIEROS NO. 370 MANZANA 1855 LOTE 02 ENTRE LAS CALLES DE HERMENEGILDO GALEANA Y PILAR DEL PROGRESO, COL. EL AGOSTADERO, C.P. 56615, VALLE DE CHALCO SOLIDARIDAD, ESTADO DE MÉXICO ",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 1489-HIPERPLAZA TEXCOCO",
        "Address": "HIDALGO NO. 300, ENTRE LAS CALLES CAMINO ALMOLINO DE LAS FLORES Y LIBERTAD, COL. STA. CRUZ DE ARRIBA C.P. 56120, TEXCOCO EDO. DE MEX. ",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1008-Héroes Tecamac",
        "Address": "José Ma. Pino Suarez No. 52  Los Heroes Tecamac , Tecamac Edo de Mex  CP. 55760",
        "Coordinates": {
            "lat": 19.62411,
            "lng": -99.01469
        }
    },
    {
        "Name": "Red Barn Stores 2079-CD. JARDIN",
        "Address": "AV. BORDO DE XOCHIACA NO. 3 LT -A2  COL. BENITO JUÁREZ  C.P. 57000  MUNICIPIO NEZAHUALCOYOTL, EDO. DE MÉXICO.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 3005-PLAZA ARAGON",
        "Address": "AV. CENTRAL NO 120, LOCAL 62 AL 68 Y 118, COL. RINCONADA DE ARAGON, ECATEPEC ESTADO DE ME XICO, C.P. 55120",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 4109-PUERTA TEXCOCO",
        "Address": "CARRETERA FEDERAL MEXICO TEXCOCO KM 30.5   COL. SANTIAGO CUAUTLALPAN     TEXCOCO ESTADO DE MEXICO   C.P.56259",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 4157-PERIFÉRICO CUAUTITLAN",
        "Address": "AUT. MÉXICO-QUERÉTARO KM.  36.5 LTE. 1 COL. PARQUE INDUSTRIAL CUAMATLA, C.P. 54730, CUAUTITLAN  IZCALLI, ESTADO DE MÉXICO",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 1462-LERMA TOLUCA",
        "Address": "RIO LERMA NO. 5 ENTRE LAS CALLES DE MORELOS Y EL CALVARIO, COL. LA MERCED LERMA CP 52006",
        "Coordinates": {
            "lat": 39.417933,
            "lng": -88.288332
        }
    },
    {
        "Name": "Red Barn Stores 1171-SAN JOSE TECAMC",
        "Address": "CARRETERA FEDERAL MÉXICO - PACHUCA  KM  36.5   COL. HUEYOTENCO   TECÁMAC, EDO. DE MEX  C.P.  55741",
        "Coordinates": {
            "lat": 19.68085,
            "lng": -98.99573
        }
    },
    {
        "Name": "Red Barn Stores 1203-SUPER PLAZA ECATEPEC",
        "Address": "AVE. CARLOS HANK GONZALEZ S/N ENTRE LAS CALLES DE CARRIL Y AVE GOBERNADORA STA MA. TULPETLAC 55400 ECATEPEC DE MORELOS EDO DE MEX.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1109-Ayotla",
        "Address": "Carretera Federal Mexico-Puebla KM 27.5 N° 6, Entre Nicolas Bravo Y Francisco Javier Mina, C.P. 56560",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3826-VIVEROS",
        "Address": "Calle 8 No. 1 Col. Viveros Del Valle C.P. 54080 Tlalnepantla, Estado De Mexico",
        "Coordinates": {
            "lat": 19.52355,
            "lng": -99.22337
        }
    },
    {
        "Name": "SuperStore 3838-LOMAS VERDES",
        "Address": "Av. Lomas Verdes No. 545 Col. Lomas Verdes C.P. 53120 Naucalpan, Edo. De Mexico",
        "Coordinates": {
            "lat": 19.50736,
            "lng": -99.26002
        }
    },
    {
        "Name": "SuperStore 3815-TECAMACHALCO",
        "Address": "Av. De Las Fuentes No. 174 Col. Lomas De Tecamachalco C.P. 53950 Naucalpan, Edo. de Mexico",
        "Coordinates": {
            "lat": 19.42277,
            "lng": -99.23712
        }
    },
    {
        "Name": "La Tienda Especiál 1110-Plaza Ecatepec",
        "Address": "Av. Vía Morelos Km21 No.172 Colonia Laureles C.P 55090, Ecatepec De Morelos, Edo.  De México ",
        "Coordinates": {
            "lat": 32.9198,
            "lng": -117.136314
        }
    },
    {
        "Name": "Red Barn Stores 5469-RÍO DE LOS REMEDIOS",
        "Address": "AV. RIO DE LOS REMEDIOS N°. 5 COL. EXRANCHO PUEBLODE SAN JUAN IXHUATEPEC, TLALNEPANTLA, ESTADO DE MÉXICO CP 54180",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "KAYCHEE 98-Santa Fe",
        "Address": "PROLONGACION VASCO DE QUIROGA No. 3800, SANTA FE CUAJIMALPA, CUAJIMALPA DE MORELOS, DISTRITO FEDERAL, C.P..05348",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 106-Toreo",
        "Address": "BOULEVARD MANUEL AVILA CAMACHO NO.5, LOMAS DE SOTELO, NAUCALPAN DE JUAREZ, ESTADO DE MEXICO, C.P..53390",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 117-UN-San Esteban",
        "Address": "CALZ. SAN ESTEBAN NO. 46 ENTRE CANAL DEL TORNILLO Y PRIV. 10 DE MAYO, COL. SAN ESTEBAN HITZILACASCO, NAUCALPAN DE JUAREZ, ESTADO DE MEXICO. C.P. 53550",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 129-Un-Buen Tono",
        "Address": "BUEN TONO NO. 8 ENTRE DELICIAS Y ERNESTO PUGIBET, COL CENTRO, DELEG CUAUHTEMOC, MEXICO, DISTRITO FEDERAL. C.P. 06070",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 147-Cuajimalpa",
        "Address": "AV. JOSE MARIA CASTORENA NO. 316, CUAJIMALPA, CUAJIMALPA DE MORELOS, C.P..05000",
        "Coordinates": {
            "lat": 19.35356,
            "lng": -99.29991
        }
    },
    {
        "Name": "KAYCHEE 231-UN-Interlomas",
        "Address": "BLVRD. INTERLOMAS NO. 5, LOCAL A-400 CENTRO COM INTERLOMAS, COL. SAN FERNANDO LA HERRADURA, HUIXQUILUCAN, ESTADO DE MEXICO. 52760 ",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 232-UN-Polanco",
        "Address": "AV. MIGUEL DE CERVANTES SAAVEDRA NO. 397, COL. IRRIGACION, DEL. MIGUEL HIDALGO, MEXICO, DISTRITO FEDERAL. C.P. 11579",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 652-UN-Samara Santa Fe",
        "Address": "AV. ANTONIO DOVALI JAIME NO. 70, COL. ZEDEC SANTA FE DELEG. áLVARO OBREGóN, MéXICO, D.F. C.P. 01260",
        "Coordinates": {
            "lat": 19.36907,
            "lng": -99.26085
        }
    },
    {
        "Name": "KAYCHEE 655-Tecamachalco",
        "Address": "AV. DE LOS BOSQUES NO. 128, LOMAS DE TECAMACHALCO, HUIXQUILUCAN, C.P..52780",
        "Coordinates": {
            "lat": 19.40456,
            "lng": -99.25774
        }
    },
    {
        "Name": "KAYCHEE 18-UN-Atizapan",
        "Address": "AV. SAN MATEO NO. 17, COL. ATIZAPAN CENTRO, MPIO. ATIZAPAN DE ZARAGOZA, ESTADO DE MEXICO. C.P. 52900",
        "Coordinates": {
            "lat": 19.56712,
            "lng": -99.24766
        }
    },
    {
        "Name": "KAYCHEE 111-UN-Nicolas Romero",
        "Address": "CARRETERA ATIZAPAN- NICOLAS ROMERO NO. 4, COL. FRANCISCO SARABIA, MPIO. NICOLAS ROMERO,  ESTADO DE MEXICO, C.P. 54473",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 130-Cd. Labor",
        "Address": "AV. BOULEVARD REFORMA No.42, SAN FRANCISCO CHILPAN, TULTITLAN, C.P..54944",
        "Coordinates": {
            "lat": 19.61516,
            "lng": -99.17365
        }
    },
    {
        "Name": "KAYCHEE 146-Coacalco",
        "Address": "VIALIDAD MEXIQUENSE NO. 92, FRACC. SAN FRANCISCO, COACALCO, ESTADO DE MEXICO, C.P..55712",
        "Coordinates": {
            "lat": 19.63774,
            "lng": -99.06647
        }
    },
    {
        "Name": "KAYCHEE 161-Bellavista",
        "Address": "BLVD. BELLAVISTA NO. 22, LOMAS DE BELLAVISTA, ATIZAPAN DE ZARAGOZA, ATIZAPAN,C.P..52994",
        "Coordinates": {
            "lat": 19.52063,
            "lng": -99.25052
        }
    },
    {
        "Name": "KAYCHEE 167-Lago de Gpe",
        "Address": "BOSQUE DE BOLOGNIA S/N, BOSQUES DEL LAGO, CUAUTITLAN IZCALLI, C.P..54766",
        "Coordinates": {
            "lat": 27.877364,
            "lng": -81.837176
        }
    },
    {
        "Name": "KAYCHEE 236-UN-Mundo E *Satelite",
        "Address": "BLVD. MANUEL AVILA CAMACHO NO. 1007, COL SAN LUCAS TEPETLACALCO, TLALNEPANTLA, ESTADO DE MEXICO. C.P. 54055",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 237-UN-Tenayuca",
        "Address": "AV. LA VENTISCA NO. 100, COL. SOLIDARIDAD NACIONAL, DELEG. GUSTAVO A. MADERO, MéXICO, D.F. C.P. 07268",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 667-Viveros",
        "Address": "PARQUE CENTRAL No. 44, UNIDAD HABITACIONAL ADOLFO LOPEZ MATEOS,TLALNEPANTLA DE BAZ,  C.P..54070",
        "Coordinates": {
            "lat": 19.52382,
            "lng": -99.21306
        }
    },
    {
        "Name": "KAYCHEE 100-UN-Iztapalapa",
        "Address": "CALLE SOTO Y GAMA NO. 21, DELEGACION IZTAPALAPA, MEXICO, DISTRITO FEDERAL. C.P 09240",
        "Coordinates": {
            "lat": 19.34974,
            "lng": -99.03859
        }
    },
    {
        "Name": "KAYCHEE 121-Churubusco",
        "Address": "RIO CHURUBUSCO NO. 1072, NUEVA ROSITA, IZTAPALAPA, MEXICO, C.P. 09420",
        "Coordinates": {
            "lat": 19.37953,
            "lng": -99.103954
        }
    },
    {
        "Name": "KAYCHEE 140-Tulyehualco",
        "Address": "AV. AQUILES CERDAN No. 360, QUIRINO MENDOZA, TULYEHUALCO, DISTRITO FEDERAL, C.P..16740",
        "Coordinates": {
            "lat": 19.25644,
            "lng": -99.01552
        }
    },
    {
        "Name": "KAYCHEE 141-Copilco",
        "Address": "AV. PEDRO ENRIQUEZ UREÑA NO. 514, PUEBLO DE LOS REYES, COYOACAN,MEXICO,  C.P..04330",
        "Coordinates": {
            "lat": 19.33371,
            "lng": -99.15139
        }
    },
    {
        "Name": "KAYCHEE 154-Xochimilco",
        "Address": "CARRETERA A SANTIAGO TEPELCATLALPAN NO. 400, LA CONCHA, XOCHIMILCO, C.P..16210",
        "Coordinates": {
            "lat": 19.24988,
            "lng": -99.11909
        }
    },
    {
        "Name": "KAYCHEE 158-Plaza América",
        "Address": "BENITO JUAREZ NO. 117, EX HACIENDA COAPA, COYOACAN, MEXICO, C.P..04980",
        "Coordinates": {
            "lat": 19.31482,
            "lng": -99.13949
        }
    },
    {
        "Name": "KAYCHEE 165-Zaragoza",
        "Address": "CALZADA IGNACIO ZARAGOZA NO. 846, PANTITLAN, IZTACALCO, DF, C.P..08100",
        "Coordinates": {
            "lat": 19.40981,
            "lng": -99.063622
        }
    },
    {
        "Name": "KAYCHEE 233-UN-Coapa",
        "Address": "CALZ. DEL HUESO NO. 670, COL. LOS ROBLES, DELEGACION COYOACAN, MEXICO, DISTRITO FEDERAL. C.P. 04940",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 234-UN-Ajusco",
        "Address": "CARRET. PICACHO-AJUSCO NO. 175, COL. HEROES DE PADIERNA, DELEGACION TLALPAN, MEXICO, DISTRITO FEDERAL. C.P. 14200",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 235-UN-Universidad",
        "Address": "AV. UNIVERSIDAD NO. 740, COL STA CRUZ ATOYAC, DELEGACION BENITO JUAREZ, MEXICO, DISTRITO FEDERAL. C.P. 03300",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 241-UN-Anfora",
        "Address": "ANFORA NO. 71, COL MADERO, DELEGACION VENUSTIANO CARRANZA, MEXICO, DISTRITO FEDERAL. C.P. 15320",
        "Coordinates": {
            "lat": 19.44534,
            "lng": -99.12794
        }
    },
    {
        "Name": "KAYCHEE 670-Tezontle",
        "Address": "AV. CANAL TEZONTLE No. 1512, DR. ALFONSO ORTIZ TIRADO, IZTAPALAPA, MEXICO, DF, C.P..09020",
        "Coordinates": {
            "lat": 19.38676,
            "lng": -99.07548
        }
    },
    {
        "Name": "KAYCHEE 39-UN-Ecatepec *Palomas",
        "Address": "AV. CENTRAL ESQ. AV. JARDINES DE MORELOS S/N, SANTA CRUZ VENTA DE CARPIO, ECATEPEC DE MORELOS, ESTADO DE MEXICO. C.P. 55065",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 91-UN-Tecamac",
        "Address": "CARR. FED. MEX-PACHUCA KM. 35.3 S/N, FRACC. SIERRA HERMOSA, TECAMAC DE FELIPE VILLANUEVA CENTRO, ESTADO DE MEXICO. C.P 55740",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 107-UN-Ojo de Agua",
        "Address": "AV. SANTA CRUZ OJO DE AGUA NO. 88, COL. EX-EJIDO DE SAN FRANCISCO, MPIO. DE TECAMAC, ESTADO DE MEXICO. C.P. 55770",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 116-UN-Tepozan",
        "Address": "AV. TEPOZANES NO. 3 , COL. VALLE DE LOS REYES, MPIO. LOS REYES LA PAZ, MEXICO, ESTADO DE MEXICO. C.P. 56430",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 157-Tecamac II (Heroes)",
        "Address": "AV. OZUMBILLA LOTE 27 MZA. 42 NO. 97, LOS HEROES TECAMAC III, TECAMAC DE FELIPE VILLANUEVA, MEXICO, C.P..55764",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 239-UN-Eduardo Molina",
        "Address": "AV. EDUARDO MOLINA NO. 1623, COL. EL COYOL, DELEGACION GUSTAVO A. MADERO, MEXICO, DISTRITO FEDERAL. C.P. 07440",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 240-UN-Neza 1 *Estadio",
        "Address": "4TA. AVENIDA NO. 257 LOTE 1 ENTRE LAZARO CARDENAS Y CTO REY NEZA, FRACC REY NEZA, MPIO DE NEZAHUALCOYOTL, ESTADO DE MEXICO. C.P. 57000",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE 260-UN-Neza 2 *Impulsora",
        "Address": "AV. PLAZA CENTRAL NO. 1, COL. PLAZAS DE ARAGON, CIUDAD NEZAHUALCOYOTL, ESTADO DE MEXICO. C.P. 57139",
        "Coordinates": {
            "lat": 19.48354,
            "lng": -99.03819
        }
    },
    {
        "Name": "La Tienda Especiál 1142-Totoltepec",
        "Address": "Vicente Lombardo Toledano #343 Santa Maria Totoltepec C.P. 50200 Toluca Estado De Mexico.",
        "Coordinates": {
            "lat": 19.30899,
            "lng": -99.58681
        }
    },
    {
        "Name": "La Tienda Especiál 1150-Huehuetoca",
        "Address": "Blvrd. Jorobas-Huehuetoca KM  4.5,  Barrio de Salitrillo CP. 54680",
        "Coordinates": {
            "lat": 49.434921,
            "lng": 5.914574
        }
    },
    {
        "Name": "La Tienda Especiál 1161-Valle De Chalco",
        "Address": "Av. Cuauhtémoc N° 467, entre Isidro Fabela y Topógrafos Colonia María Isabel Municipio Valle de Chalco Solidaridad C.P. 56615",
        "Coordinates": {
            "lat": 26.218311,
            "lng": -98.34827
        }
    },
    {
        "Name": "La Tienda Especiál 1177-Santiago Tianguistenco",
        "Address": "Av. Catarino Gonzalez Benítez 202| Santiago Tianguistenco, Estado de México C.P. 52600",
        "Coordinates": {
            "lat": 19.17701,
            "lng": -99.4636
        }
    },
    {
        "Name": "La Tienda Especiál 1199-Tepojaco",
        "Address": "San Felipe de Jesus M- 20 Lte. 10 Entre San Antonio de Padua y San Francisco de Asis Col. Lomas  de San Francisco Tepojaco Municipio Cuautitlan izcalli Estado de México CP. 54720",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1201-San Agustín Ecatepec",
        "Address": "Av. Adolfo López Mateos S/N Col. Miguel Hidalgo Ecatepec Edo. De México C.P. 55490",
        "Coordinates": {
            "lat": 19.53452,
            "lng": -99.04561
        }
    },
    {
        "Name": "La Tienda Especiál 1233-Tecalco",
        "Address": "Camino Sanpablo Tecalco S/N  Colonia Nueva Santa Maria (De San Pablo Tecalco)  C. P. 55747",
        "Coordinates": {
            "lat": 19.67386,
            "lng": -98.95727
        }
    },
    {
        "Name": "La Tienda Especiál 1236-Atlacomulco",
        "Address": "Av. Mario Colín Sánchez N° 283, entre las calles Duraznos y Porfirio Alcántara Col Cuatro Milpas Deleg. Atlacomulco, Edo de Méx CP.50455",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1400-Joyas de Coacalco",
        "Address": "Av Isaac Colin #281 Las Garzas Coacalco de Berriozabal Edo de Mex CP. 55718",
        "Coordinates": {
            "lat": 19.65931,
            "lng": -99.08354
        }
    },
    {
        "Name": "La Tienda Especiál 1428-San Mateo Atenco",
        "Address": "Av. Benito Juárez No. 504 Barrio de Santiago  CP. 52100 San Mateo Atenco Edo. de México",
        "Coordinates": {
            "lat": 19.27357,
            "lng": -99.52924
        }
    },
    {
        "Name": "La Tienda Especiál 1496-El Molinito",
        "Address": "Av. De Las Granjas N° 41,  Col. Martires De Rio Blanco Municipio Naucalpan De Juarez Estado De Mexico  C.P 53780",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1558-La Palma",
        "Address": "AV Venustiano Carranza #3 El Infiernillo Cuautitlán Edo de Mex CP. 54878",
        "Coordinates": {
            "lat": 20.11308,
            "lng": -97.01491
        }
    },
    {
        "Name": "La Tienda Especiál 1559-San Mateo Nopala",
        "Address": "Camino Real A San Mateo N° 115, Entre Las Calles De Andador El Trueno Y Ayuntamiento Col. San Mateo Nopala Municipio  Naucalpan De Juarez Estado De Mexico CP.53220",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1634-Cuautzingo",
        "Address": "Avenida Morelos S/N San Gregorio Cuautzingo C.P. 56640, Chalco Edo de México",
        "Coordinates": {
            "lat": 37.326983,
            "lng": -120.49887
        }
    },
    {
        "Name": "La Tienda Especiál 1828-Acolman",
        "Address": "Carretera Libre México-Pirámides Km. 37 Col. Tepexpan Mun. Acolman C.P 55885 Estado de México",
        "Coordinates": {
            "lat": 19.61072,
            "lng": -98.94833
        }
    },
    {
        "Name": "La Tienda Especiál 1829-Almoloya",
        "Address": "Av. Benito Juarez s/n  Colonia Centro, Almoloya de Juárez, Estado de México",
        "Coordinates": {
            "lat": 33.210064,
            "lng": -117.248199
        }
    },
    {
        "Name": "La Tienda Especiál 1830-Arbolada los Sauces",
        "Address": "Arbolada Los Maples N° 141, Entre las Calles viaducto Bicentenario y Av. Los Sauces Col. Conjunto Urbano la Arbolada los Sauces II CP. 55635",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1870-Tepotzotlan",
        "Address": "Av. Juarez  N° 3, Entre las Calles Av. Insurgentes y Rio Chico de Tepotzotlan CP. 54605",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 1899-San Juan de la Labor",
        "Address": "Carretera Zumpango-Los Reyes, No. 5000, Col. Paseos de San juan, Zumpango, Estado de México, C.P. 55634",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 1930-El Oro",
        "Address": "Av. Centro Industrial N° 14 Y 16 Lotes 6 Y 7 , Entre Las Calles Av. De Las Alamedas Y Tuxpan, Estado De Mexico C.P 54954",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 2054-Terranova",
        "Address": "Boulevard del Lago #1-A Mz 1 Lt 3 Colonia Geovillas de Terranova,  Acolman Edo. de Mex. C.P. 55883",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 2072-Portal Chalco",
        "Address": "Av. Prolongación San Sebastián S/N Lote 2, Esquina Arturo Montiel Rojas, Colonia Barrio de San Sebastián, Chalco Estado de México, CP.56600",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 2141-Xonacatlán",
        "Address": "Venustiano Carranza 133, Col. Centro Cp 52060, Xonacatlan Estado De Mexico.",
        "Coordinates": {
            "lat": 44.560235,
            "lng": -70.544894
        }
    },
    {
        "Name": "La Tienda Especiál 2221-Alpinismo",
        "Address": "Maria del Refugio Alexandre Tarello No. 528 Col. San Buenaventura C.P 50121 Toluca Estado de México",
        "Coordinates": {
            "lat": 19.28039,
            "lng": -99.67466
        }
    },
    {
        "Name": "La Tienda Especiál 2240-Santa Cruz",
        "Address": "Agripin García Estrada N° 403, entre las calles de Insurgentes y Pozo Blanco Col Santiago Tlaxomulco Centro Deleg. Toluca, Edo de Mex CP.50280",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 2525-Río Hondo",
        "Address": "Camino Arenero #650 Col. San Jose Rio Hondo Municipio de Naucalpan Estado De Mexico C.P 52810",
        "Coordinates": {
            "lat": 19.43716,
            "lng": -99.25059
        }
    },
    {
        "Name": "La Tienda Especiál 2736-Chimalhuacan Peñon",
        "Address": "Av. Del Peñón s/n Col. Xochitenco Chimalhuacán Estado de México C.P. 56340",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 2737- Etzatlan",
        "Address": "Calle Etzatlan, N.25 Colonia Popular Rastro, Delegación Venustiano Carranza, CP. 15220",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 2767-Doctores",
        "Address": "Eje Central Lázaro Cárdenas Niño Perdido N° 303, Entre Las Calles Doctor Bolaños Cacho Y Doctor Morones Prieto Eje 3 Sur, CDMX C.P. 6780",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 2871-Viento Nuevo",
        "Address": "Emiliano Zapara s/n , entre las calles Felipe Angeles y Av. Circuito Metropolitano Col. Viento Nuevo C.P.55066, Ecatepec de Morelos",
        "Coordinates": {
            "lat": 42.492177,
            "lng": -90.642805
        }
    },
    {
        "Name": "La Tienda Especiál 2873-Dimas",
        "Address": "Camino a San Antonio La Concepcion No. 600 Fraccionamiento Rancho San Dimas Municipio san antonio La Isla Edo. De Mexico CP. 52280",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3020-Xalostoc",
        "Address": "Av. San Andres s/n. Colonia Hank Gonzalez C.P 55520 Ecatepec Edo. Mexico",
        "Coordinates": {
            "lat": 19.55051,
            "lng": -99.07539
        }
    },
    {
        "Name": "La Tienda Especiál 3026-Gobernadora",
        "Address": "Av. Gobernadora 50-E Colonia Tulpetlac CP 55108 Ecatepec, Estado de Mexico",
        "Coordinates": {
            "lat": 39.170285,
            "lng": -91.87336
        }
    },
    {
        "Name": "La Tienda Especiál 3043-Zinacantepec",
        "Address": "Av. 16 de Septiembre N° 349 entre Privada 16 de Septiembre y Niños Héroes Colonia Barrio de San Miguel Deleg. Zinacantepec, Estado de México CP.51354",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3065-Bosques del Valle",
        "Address": "Tultepec #23 Bosques del Valle Coacalco de Berriozabal Edo de Mex CP.55717",
        "Coordinates": {
            "lat": 19.64255,
            "lng": -99.12103
        }
    },
    {
        "Name": "La Tienda Especiál 3074-Villas De La Hacienda",
        "Address": "Carr. Lago de Gpe N° 388, Entre Las Calles De Luis Donaldo Colosio y Del Charro Villas De La Hacienda Atizapan De Zaragoza, Edo De Mex C.P. 52929",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3098-Guadalupana",
        "Address": "Vialidad mexiquense #2  Los Heroes de Tecamac , Tecamac  Edo de Mex CP. 55763",
        "Coordinates": {
            "lat": 19.62133,
            "lng": -99.02169
        }
    },
    {
        "Name": "La Tienda Especiál 3141-San Pablo Tultitlán",
        "Address": "Recursos Hidraulicos No 280 Col. San Pablo de las Salinas Tultitlan Estado de México C.P. 54930",
        "Coordinates": {
            "lat": 19.66552,
            "lng": -99.08241
        }
    },
    {
        "Name": "La Tienda Especiál 3167-Santa Inés",
        "Address": "Carretera Himno Nacional S/N entre las calles de Emiliano Zapata y Carretera Zumpango, Col. Visitación, Melchor Ocampo, Estado de México, CP 54890",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3213-La Presa",
        "Address": "Hermilio Mena S/N esq. Calle Alpino, Col. Industrial La Presa, C.P. 54187, Tlalnepantla de Baz, Edo. De Mex.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3214-Chinampa",
        "Address": "Carretera Federal Mexico-Pachuca  Colonia Sierra Hermosa  Tecamac Estado de Mexico C. P.  55749",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 3296-Villas de Ayotla",
        "Address": "Boulevard Cuauhtemoc N° 4700, Esquina Jose Maria Velasco Colonia Villas de Ayotla C.P. 56560, Municipio de Ixtapaluca, Estado de México.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 2219-JOROBAS",
        "Address": "CARRETERA JOROBAS-TULA 02 38 MANZANA 125 NTE 1 CAMINO A SANTA TERESA, COL. STA TERESA 3 Y 3 BIS CP 54695, HUEHUETOCA, EDO. DE MEXICO",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3668-Real De Costitlan",
        "Address": "Real del  Arzobispado Mz. 62, Lt. 1, U. Hab. Real de Costitlan  C.P. 56370, Chicoloapan de Juárez Estado de México.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 1107-IXTAPALUCA ",
        "Address": "CARRETERA MEXICO- CUAUTLA LOCALES 3A Y 3B S/N COL. HACIENDA DE SANTA BARBARA, C.P. 56530, IXTAPALUCA MEXICO ENTRE LA ESPINITA E IXTAPALUCA",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3725-Toluca Pilares",
        "Address": "Av Gobernadores No 308 Barrio De Coaxustenco Metepec Edo De Mex CP 52176",
        "Coordinates": {
            "lat": 19.26773,
            "lng": -99.59806
        }
    },
    {
        "Name": "La Tienda Especiál 3750-Autopista Querétaro",
        "Address": "Km 41.5 Autopista México Querétaro Col. Parque Industrial la Luz CP. 34830",
        "Coordinates": {
            "lat": 19.69572,
            "lng": -99.20425
        }
    },
    {
        "Name": "La Tienda Especiál 3751-Insurgentes Sur",
        "Address": " Guadalupe Victoria No. 1 Tlalpan Centro, D.F C.P. 14000",
        "Coordinates": {
            "lat": 19.282785,
            "lng": -99.190402
        }
    },
    {
        "Name": "La Tienda Especiál 3752-Vallejo",
        "Address": "Av. Industria #7 Fracc. Industrial San Pablo Xalpa Tlalnepantla, Estado De Mexico C.P. 54090",
        "Coordinates": {
            "lat": 19.51874,
            "lng": -99.16443
        }
    },
    {
        "Name": "La Tienda Especiál 3753-Plaza Aragón",
        "Address": "Av. Central  Lt 62 AL 68 Y 118 Cd. Azteca 3ra Seccion Ecatepec Edo. Mex. CP.55280",
        "Coordinates": {
            "lat": 25.92159,
            "lng": -97.434356
        }
    },
    {
        "Name": "SuperStore 3825-SAN  MATEO",
        "Address": "Antiguo Camino a San Mateo No. 20 Col. Anexo Coamilco C.P. 53240 Naucalpan, Edo. De Mexico",
        "Coordinates": {
            "lat": 19.48969,
            "lng": -99.24804
        }
    },
    {
        "Name": "La Tienda Especiál 3755-Tacubaya",
        "Address": "Parque Lira #147 Col. Tacubaya Delegación  Miguel Hidalgo D.F. C.P 11870",
        "Coordinates": {
            "lat": 19.40399,
            "lng": -99.18765
        }
    },
    {
        "Name": "La Tienda Especiál 3756-Tlalnepantla",
        "Address": "Rio Lerma #105 Fracc. La Romana Tlalnepantla, Estado De Mexico C.P. 54030",
        "Coordinates": {
            "lat": 19.54739,
            "lng": -99.20255
        }
    },
    {
        "Name": "La Tienda Especiál 3757-San Juan de Aragón ",
        "Address": "Av. Jose Loreto Favela  N. 55 Col. San Juan De Aragon  Delg. Gustavo A.Madero  C.P 55090",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 3759-San Rafael",
        "Address": "Serapio Rendon #117 San Rafael Cuauhtemoc, D.F. C.P. 6470",
        "Coordinates": {
            "lat": 19.43375,
            "lng": -99.16079
        }
    },
    {
        "Name": "La Tienda Especiál 3760-Lomas Estrella",
        "Address": "Av Tlahuac #4421, Iztapalapa Lomas Estrella 2a Sección, 09890 Ciudad de México, D.F.",
        "Coordinates": {
            "lat": 19.32093,
            "lng": -99.09061
        }
    },
    {
        "Name": "La Tienda Especiál 3761-Tulyehualco",
        "Address": "Av. Tlahuac # 1577 Colonia.  Mirasoles  C.P 09880 Del . Iztapalapa",
        "Coordinates": {
            "lat": 19.32284,
            "lng": -99.0982
        }
    },
    {
        "Name": "La Tienda Especiál 3762-Chimalhuacán",
        "Address": "Av. Chimalhuacan  428 y 430 Col. Benito Juarez  c.p 57000 Nezahualcoyotl  Edo. Mex",
        "Coordinates": {
            "lat": 19.40267,
            "lng": -99.00781
        }
    },
    {
        "Name": "La Tienda Especiál 3763-Mariano Escobedo",
        "Address": "Mariano Escobedo #145 Anahuac Miguel Hidalgo, D.F. C.P. 11320",
        "Coordinates": {
            "lat": 19.443705,
            "lng": -99.173946
        }
    },
    {
        "Name": "La Tienda Especiál 3764-Iztapalapa",
        "Address": "Av. Ermita Iztapalapa # 875 Col. Santa Isabel Industrial C.P 09820 Delegacion Iztapalapa",
        "Coordinates": {
            "lat": 19.35584,
            "lng": -99.10174
        }
    },
    {
        "Name": "La Tienda Especiál 3765-Ecatepec",
        "Address": "Av Lopez Portillo #410 Col Guadalupe Victoria Ecatepec Edo de Mex CP.55010",
        "Coordinates": {
            "lat": 19.61604,
            "lng": -99.06336
        }
    },
    {
        "Name": "La Tienda Especiál 3766-La Viga ",
        "Address": "Calz. La Viga #136 Colonia Lorenzo Boturini Del.  Venustiano Carranza D.F. C.P 15820",
        "Coordinates": {
            "lat": 19.41425,
            "lng": -99.12797
        }
    },
    {
        "Name": "La Tienda Especiál 3768-Villa Coapa",
        "Address": "Av. Canal de Miramontes No. 7620, Col. Villa Coapa, Del. Tlalpan, D.F.  C.P. 14390",
        "Coordinates": {
            "lat": 19.28993,
            "lng": -99.12587
        }
    },
    {
        "Name": "La Tienda Especiál 3770-Pantitlán",
        "Address": "Calz. I. Zaragoza #1172 Col. Agricola Pantitlan, Delegacion Iztacalco C.p. 08100",
        "Coordinates": {
            "lat": 19.40835,
            "lng": -99.07605
        }
    },
    {
        "Name": "La Tienda Especiál 3771-Plaza Churubusco",
        "Address": "Av. Rio Churubusco # 1130 Col. Infonavit Iztacalco Del. Iztacalco D.F C.P 08900",
        "Coordinates": {
            "lat": 19.38025,
            "lng": -99.10158
        }
    },
    {
        "Name": "La Tienda Especiál 3772-Plaza Atizapan",
        "Address": "Carr. Atizapan Villa Nic. Romero Atizapan Atizapan, Estado De Mexico C.P. 52947",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 3774-Ferrocarril Hidalgo",
        "Address": "Venturina  #354 Col. Estrella Deleg. Gustavo A Madero Entidad D.F. C.P 07810",
        "Coordinates": {
            "lat": 19.47214,
            "lng": -99.11516
        }
    },
    {
        "Name": "La Tienda Especiál 3775-La Aurora",
        "Address": "Carmelo Perez No. 774 Benito Juarez, Cd. Nezahualcoyotl, Estado de México C.P. 5700",
        "Coordinates": {
            "lat": 19.40679,
            "lng": -98.99355
        }
    },
    {
        "Name": "La Tienda Especiál 3776-Sor Juana",
        "Address": "Indio Triste No 47 Metropolitana 2da seccion,Netzahualcoyotl.Edo de Mexico CP. 55740",
        "Coordinates": {
            "lat": 19.38623,
            "lng": -99.02007
        }
    },
    {
        "Name": "La Tienda Especiál 3777-Valle de Aragón ",
        "Address": "Valle  Santiago  N° 102  Col. Valle  de  Aragon  CP. 57100  Nezahualcoyotl  Estado  de  Mexico",
        "Coordinates": {
            "lat": 19.48876,
            "lng": -99.05071
        }
    },
    {
        "Name": "Red Barn Stores 5765-LAS AMERICAS ",
        "Address": "AV. CENTRAL ESQ. AV. 1° DE MAYO, MZ 04 LT. 01 COL. LAS AMERICAS, C.P. 55459 ECATEPEC DE MORELOS, ESTADO DE MEXICO",
        "Coordinates": {
            "lat": 35.382493,
            "lng": -106.475935
        }
    },
    {
        "Name": "La Tienda Especiál 3778-Xochimilco",
        "Address": "Prolongación Division del Norte 5333, Colonia Potrero de San Bernardino, Delegación Xochimilco, C.P. 16030, México, D.F.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3782-Centenario",
        "Address": "Av. Centenario # 394 Col.  Merced Gomez, Del  Alvaro Obregon D.F. C.P 1600",
        "Coordinates": {
            "lat": 19.3664,
            "lng": -99.20936
        }
    },
    {
        "Name": "La Tienda Especiál 3783-Santa Clara ",
        "Address": "Carr. Mex-Pachuca #3277 Km. 17.5, col. Tulpetlac, Ecatepec, Estado de México, CP 55400",
        "Coordinates": {
            "lat": 19.55633,
            "lng": -99.02116
        }
    },
    {
        "Name": "La Tienda Especiál 3784-1° de Mayo",
        "Address": "Av. 1 Mayo Y Rio Hondo #200 Col. San Andres Atoto  Municipio Naucalpan Estado De Mexico C.P 53500",
        "Coordinates": {
            "lat": 19.46523,
            "lng": -99.22864
        }
    },
    {
        "Name": "La Tienda Especiál 3786-Santa Fe",
        "Address": "Camino Real A Toluca # 644 Colonia Cuevitas delegación  Alvaro Obregon D.F.  C.P 1220",
        "Coordinates": {
            "lat": 19.35712,
            "lng": -99.23983
        }
    },
    {
        "Name": "Red Barn Stores 3503-ECATEPEC CENTRO",
        "Address": "AV . REVOLUCION 1560 ENTRE LAS CALLES AGRICULTURA Y BENITO JUAREZ COL. SAN CRISTOBAL CENTRO CP 55000 ECATEPEC EDO DE MEXICO",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3787-Cuautitlán",
        "Address": "Av. Paseo de la Constitución s/n L-1 Mz. C-34 B Col Centro Urbano, CP  54700 Edo de Mex.",
        "Coordinates": {
            "lat": 19.14205,
            "lng": -96.96833
        }
    },
    {
        "Name": "La Tienda Especiál 3791-Fuentes del Valle",
        "Address": "Vía López Portillo #149 Fuentes del Valle Tultitlán Edo de Mex CP.54910",
        "Coordinates": {
            "lat": 19.62843,
            "lng": -99.13862
        }
    },
    {
        "Name": "La Tienda Especiál 3792-San Juanico",
        "Address": "Carretera Mexico Laredo km 8 Colonia La Laguna C.P 54190",
        "Coordinates": {
            "lat": 19.51337,
            "lng": -99.101943
        }
    },
    {
        "Name": "La Tienda Especiál 3795-Texcoco",
        "Address": "Calle Prolongación 16 De Septiembre S/N Colonia San Pablo Municipio De Texcoco De Mora Edo Mex. CP. 56110",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3797-Cabeza de Juárez",
        "Address": "Anillo Periferico 1911 Col. Ejercito Constitucionalista entre eje 5 y 6 C.P 09220",
        "Coordinates": {
            "lat": 19.34553,
            "lng": -99.06229
        }
    },
    {
        "Name": "La Tienda Especiál 3798-Santa Cecilia",
        "Address": "Calz. Sta Cecilia #17 Pueblo Sta Cecilia Tlalnepantla, Estado De Mexico C.P. 54130",
        "Coordinates": {
            "lat": 19.55578,
            "lng": -99.17741
        }
    },
    {
        "Name": "La Tienda Especiál 3799-Ángeles Iztapalapa",
        "Address": "Av. Ermita Iztapalapa No.2001 Col. Los Angeles Del. Iztapalapa CP. 09830",
        "Coordinates": {
            "lat": 19.34838,
            "lng": -99.06954
        }
    },
    {
        "Name": "La Tienda Especiál 3803-Observatorio",
        "Address": "Av. Observatorio #457 Col. Las Americas Del.  Alvaro Obregon D.F. C.P 1120",
        "Coordinates": {
            "lat": 19.40137,
            "lng": -99.20377
        }
    },
    {
        "Name": "La Tienda Especiál 3805-Santa Lucía",
        "Address": "Av. Sta Lucia # 185 Col. Alfonso XIII Del.  Alvaro Obregon D.F. C.P 01460",
        "Coordinates": {
            "lat": 19.37856,
            "lng": -99.19746
        }
    },
    {
        "Name": "La Tienda Especiál 3808-Bolivar",
        "Address": "Bolivar #190 Obrera Cuauhtemoc, D.F. C.P. 6800",
        "Coordinates": {
            "lat": 19.41721,
            "lng": -99.14234
        }
    },
    {
        "Name": "La Tienda Especiál 3860-Zaragoza",
        "Address": "Calzada Ignacio Zaragoza No. 1527, Col. Tepalcates, Iztapalapa, D.F. , C.P. 09210",
        "Coordinates": {
            "lat": 19.39522,
            "lng": -99.0534
        }
    },
    {
        "Name": "La Tienda Especiál 3871-Plaza Cuautitlán",
        "Address": "Autopista México Qro. Km. 37.10 Esq. Av. de los Fresnos Col. Arcos del Alba, Municipio Cuautitlán Izcalli CP. 54750",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 3874-Cantil",
        "Address": "Av. Aztecas no. 221 Col. Los Reyes Del. Coyoacan CP 04330",
        "Coordinates": {
            "lat": 44.355538,
            "lng": -69.749067
        }
    },
    {
        "Name": "La Tienda Especiál 3883-Melchor Ocampo",
        "Address": "Carr. Melchor Ocampo No.1  Barrio Tlaltepan. C.P. 54800",
        "Coordinates": {
            "lat": 19.673625,
            "lng": -99.181558
        }
    },
    {
        "Name": "La Tienda Especiál 3884-Chalco 2000",
        "Address": "Av. Vicente Guerrero N° 25 Colonia Ejidal Chalco Centro C.P 56030 Chalco Edo de México",
        "Coordinates": {
            "lat": 19.26459,
            "lng": -98.90173
        }
    },
    {
        "Name": "La Tienda Especiál 3888-Vía Morelos",
        "Address": "Av. Vía Morelos S/N, Col. Alcahuacan Jajalpa CP 55090,  Ecatepec de Morelos Estado de México",
        "Coordinates": {
            "lat": 18.378818,
            "lng": -65.954174
        }
    },
    {
        "Name": "La Tienda Especiál 3891-Los Reyes",
        "Address": "Km. 17.5 Carr. Lib. Mex-Puebla, Col. Emiliano Zapata, Los Reyes La Paz, Estado de México, C.P. 56490",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 3892-Av Central",
        "Address": "Av. Hank Gonzalez No. 104-106 entre Av. Independencia y Av. Constitucion de la Republica, Nezahualcoyotl  Edo. De Mexico C.P. 07469",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 3897-La Virgen",
        "Address": "Calzada de la Virgen No. 2990, Colonia UCTM Culhuacan CP.04480 México D.F.",
        "Coordinates": {
            "lat": 19.32063,
            "lng": -99.11459
        }
    },
    {
        "Name": "Red Barn Stores 1724-LOS REYES ZUMPANGO",
        "Address": "CARRETERA ZUMPANGO LOS REYES S/N ENTRE LAS CALLES DE LOS PINOS Y PIRINEOS COL. BUENAVISTA CP 55635 ZUMPANGO, EDO. DE MEXICO",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 3910-Palomas",
        "Address": "Calle Palomas Mz 1 Lt 1 La Veleta Ecatepec Edo de Mex CP.55000",
        "Coordinates": {
            "lat": 19.56792,
            "lng": -99.06371
        }
    },
    {
        "Name": "Red Barn Stores 3176-OJO DE AGUA TECAMAC",
        "Address": "BLVD. VALLE DE SAN PEDRO LOTE 1A, ESQUINA AV. LEONARDO MARTINEZ, COL. SAN FRANCISCO CUAUTIQUIXCO CP 55760, TECAMAC, EDO DE MEXICO",
        "Coordinates": {
            "lat": 27.520641,
            "lng": -99.497786
        }
    },
    {
        "Name": "La Tienda Especiál 3916-Iztapalapa Norte",
        "Address": "Calz. Ermita Iztapalapa no. 3409 col. Santa Maria Aztahucan  CP. 09500",
        "Coordinates": {
            "lat": 19.351225,
            "lng": -99.025238
        }
    },
    {
        "Name": "La Tienda Especiál 3924-Cofradías",
        "Address": "Av. Jorge Jiménez Cantú, lote 2, manzana s/n, Colonia Ex - Hacienda San Miguel  CP.54710",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 4017-Toluca Aztecas",
        "Address": "Heriberto Enríquez N° 1037 entre Paseo Real de San Javier y Nogales Colonia Azteca Deleg. Toluca, Estado de México CP.50180",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 4029-Av. Nacional",
        "Address": "Carretera Mexico-Pachuca s/n esquina privada av nacional  Santo Tomas chiconautla Ecatepec de Morelos Edo de Mex CP.55068",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 4128-Arca De Noé",
        "Address": "Av. Arca de Noe #150 Col. Acuitlapilco Chimalhuacan, Estado de México C.P. 56335",
        "Coordinates": {
            "lat": 19.42039,
            "lng": -98.93079
        }
    },
    {
        "Name": "La Tienda Especiál 4198-El Tenayo",
        "Address": "Paseo De Los Sauces N° 5 Entre Av. Santa Cecilia Y Paseo De Las Ahuehuetes Valle Del Tenayo Tlalnepantla De Baz, Estado De Mexico C.P. 54147",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 4541-Ixtapaluca",
        "Address": "Carretera Federal México- Cuautla KM 30.5 , Fracc. Hacienda de Santa Barbara, Ixtapaluca, Estado de Mexico, C.P. 56530",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 4558-Tecamac",
        "Address": "Carretera federal Mexico-Pachuca # 65 Esmeralda Tecamac Edo de Mex CP. 55765",
        "Coordinates": {
            "lat": 19.65945,
            "lng": -99.00772
        }
    },
    {
        "Name": "La Tienda Especiál 5730-Chicoloapan",
        "Address": " Carretera México - Texcoco K.m. 29.5 s/n Col. 2 de Marzo Sn Vicente Chicoloapan C.P. 56370 ",
        "Coordinates": {
            "lat": 39.78373,
            "lng": -100.445882
        }
    },
    {
        "Name": "La Tienda Especiál 5733-Plaza Chimalhuacán",
        "Address": "Av. Nezahualcoyolt  No.172 Col Cabecera Municipal Chimalhuacan Estado de Mexico CP 56330",
        "Coordinates": {
            "lat": 19.41588,
            "lng": -98.94409
        }
    },
    {
        "Name": "La Tienda Especiál 5768-Cd Labor",
        "Address": "Vía José López Portillo No. 12  Col. San Francisco Chilpan Tultitlan, Estado De Mexico C.P. 54940",
        "Coordinates": {
            "lat": 19.61902,
            "lng": -99.17541
        }
    },
    {
        "Name": "SuperStore 1053-ACOXPA",
        "Address": "Calz. Acoxpa No. 438, Esq. Con Calzada De Guadalupe, Col. Ex hacienda Coapa, C.P. 14300, Del. Tlalpan, D.F.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3813-CHURUBUSCO",
        "Address": "Av. Cerro de Las Torres No. 229 Col. Campestre Churubusco Delegación Coyoacán Mexico, D.F.C.P.04200",
        "Coordinates": {
            "lat": 19.34522,
            "lng": -99.13519
        }
    },
    {
        "Name": "SuperStore 3836-COPILCO",
        "Address": "Av. Copilco No. 75 Col. Copilco El Bajo Delegación Coyoacán Mexico, D.F. C.P. 04340",
        "Coordinates": {
            "lat": 19.3378,
            "lng": -99.18585
        }
    },
    {
        "Name": "SuperStore 3831-COYOACAN",
        "Address": "Miguel A. De Quevedo 870 Col. Concepción  Delegación Coyoacán Mexico, D.F. C.P. 04000",
        "Coordinates": {
            "lat": 19.34438,
            "lng": -99.16153
        }
    },
    {
        "Name": "SuperStore 3843-DIVISIÓN DEL NORTE",
        "Address": "División del Nte.  No. 3651 Col. Sn. Pablo Tepetlapa Delegación Coyoacán Mexico, D.F. C.P. 04600",
        "Coordinates": {
            "lat": 19.32132,
            "lng": -99.13901
        }
    },
    {
        "Name": "SuperStore 2766-FELIX CUEVAS",
        "Address": "Félix Cuevas #374 Col. Tlacoquemecatl C.P. 03200, Benito Juarez,  Distrito Federal ",
        "Coordinates": {
            "lat": 19.3728,
            "lng": -99.17285
        }
    },
    {
        "Name": "SuperStore 3839-GIRASOLES",
        "Address": "Rancho Sn. Lorenzo No. 6 Col. Girasoles de Valle Delegación Coyoacán Mexico, D.F. C.P. 04920",
        "Coordinates": {
            "lat": 19.30643,
            "lng": -99.12261
        }
    },
    {
        "Name": "SuperStore 3397-MAYORAZGO",
        "Address": "Mayorazgo No130 Col. Xoco Del. Benito Juarez , México  D.F. C.P. 03339 ",
        "Coordinates": {
            "lat": 28.704321,
            "lng": -81.568948
        }
    },
    {
        "Name": "SuperStore 3819-DEL VALLE",
        "Address": "Heriberto Frías No. 1107 Col. Del Valle Delegación Benito Juarez México, D.F. C.P. 03100",
        "Coordinates": {
            "lat": 19.38173,
            "lng": -99.16248
        }
    },
    {
        "Name": "SuperStore 3223-DEL VALLE NORTE",
        "Address": "Boulevard Xola No. 407 Col. Del Valle Norte, Delegación Benito Juarez, México, D.F.  C.P.03103",
        "Coordinates": {
            "lat": 19.39772,
            "lng": -99.16801
        }
    },
    {
        "Name": "SuperStore 1492-OLIPLAZA",
        "Address": "Av. Río Churubusco No. 583 esq. Av. La Viga, Col. Sector Popular, C.P. 09060, Deleg. Iztapalapa, D.F.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3199-PASEOS DE TAXQUEÑA",
        "Address": "Calz. Taxqueña No. 1752 Col. Paseos de Taxqueña, Delegación Coyoacán C.P. 04290, México, D.F.",
        "Coordinates": {
            "lat": 19.33824,
            "lng": -99.1255
        }
    },
    {
        "Name": "SuperStore 3479-POPOCATEPETL",
        "Address": "Av. Popocatepetl No 546 esq. Av. Universidad, Col. Xoco, C.P. 03330, Deleg. Benito Juarez, D.F.",
        "Coordinates": {
            "lat": 19.36593,
            "lng": -99.16669
        }
    },
    {
        "Name": "SuperStore 3842-RIO CHURUBUSCO",
        "Address": "Ajusco No. 126 Col. Portales C.P. 03300 Delegación Benito Juarez México, D.F.",
        "Coordinates": {
            "lat": 19.35817,
            "lng": -99.15264
        }
    },
    {
        "Name": "SuperStore 2829-CALZADA DE LOS LEONES",
        "Address": "Calzada de Los Leones No. 242 Col. Los Alpes  Delg. Alvaro Obregón Mexico D.F. C.P. 01010",
        "Coordinates": {
            "lat": 19.35987,
            "lng": -99.19758
        }
    },
    {
        "Name": "SuperStore 2830-J.DE LA MONTAÑA",
        "Address": "Blvd. Picacho Ajusco No. 8 entre las calles Paseos del Pedregal y Pico de Turquino, Col. Jardines en la Montaña, C.P. 14210, Tlalpan, D.F",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3177-INS. LA JOYA",
        "Address": "Insurgentes Sur No. 4120 entre las calles de Cantera y Limantitla, Col. Tlalpan Centro, C.P. 14000, Deleg. Tlalpan, D.F.",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3816-PEDREGAL",
        "Address": "Av. Sn. Jerónimo No.273 Col. La Otra Banda  Delegación Alvaro Obregón Mexico, D.F. C.P. 01090",
        "Coordinates": {
            "lat": 19.33461,
            "lng": -99.19903
        }
    },
    {
        "Name": "SuperStore 3818-REVOLUCIÓN",
        "Address": "Av. Revolución No. 1151 Col. Mixcoac Delegación Benito Juarez México, D.F. C.P. 03910",
        "Coordinates": {
            "lat": 19.37458,
            "lng": -99.18789
        }
    },
    {
        "Name": "SuperStore 3827-PERIFERICO",
        "Address": "Calz. De Tlalpan  No.4467 Col. Toriello Guerra  Delegación Tlalpan Mexico,D.F. C.P. 14050",
        "Coordinates": {
            "lat": 19.29569,
            "lng": -99.1549
        }
    },
    {
        "Name": "SuperStore 3833-JARDINES",
        "Address": "Av. De Las Fuentes  No. 490 Jardines Del Pedregal Delegación Alvaro Obregón Mexico, D.F. C.P. 01900",
        "Coordinates": {
            "lat": 19.31474,
            "lng": -99.21255
        }
    },
    {
        "Name": "SuperStore 3837-LUIS CABRERA",
        "Address": "Av. Contreras No.386 Col. Sn. Jerónimo Lidice Delegación Magdalena Contreras Mexico, D.F. C.P. 10200",
        "Coordinates": {
            "lat": 19.32635,
            "lng": -99.2164
        }
    },
    {
        "Name": "SuperStore 3840-PATIO PEDREGAL",
        "Address": "Periférico Sur No 5270 Col. Sta. Úrsula Coyoacán Mexico, D.F. C.P. 04650",
        "Coordinates": {
            "lat": 19.30235,
            "lng": -99.14271
        }
    },
    {
        "Name": "SuperStore 3896-FTES. PEDREGAL",
        "Address": "Calle Unión No. 3 Colonia Fuentes del Pedregal Delegación Tlalpan Mexico, D.F. C.P. 14220",
        "Coordinates": {
            "lat": 19.3091,
            "lng": -99.21786
        }
    },
    {
        "Name": "SuperStore 3915-AV. TOLUCA",
        "Address": "Av. Toluca No. 511  Col. Olivar de Los Padres Delegación Alvaro Obregón Mexico, D.F. C.P. 01780",
        "Coordinates": {
            "lat": 19.33897,
            "lng": -99.2187
        }
    },
    {
        "Name": "SuperStore 3817-GEORGIA",
        "Address": "Georgia No. 53 Col. Nápoles Delegación Benito Juarez México, D.F. C.P. 03810",
        "Coordinates": {
            "lat": 19.38981,
            "lng": -99.17507
        }
    },
    {
        "Name": "SuperStore 3481-GRAND POLANCO",
        "Address": "Boulevard Miguel de Cervantes Saavedra no. 380, (376a)Col. Irrigación, Delegación Miguel Hidalgo C.P. 11500",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3832-HOMERO",
        "Address": "Av. Homero No.310  Col. Chapultepec Morales Delegación Miguel Hidalgo Mexico, D.F. C.P. 11570",
        "Coordinates": {
            "lat": 19.43597,
            "lng": -99.19813
        }
    },
    {
        "Name": "SuperStore 3811-HORACIO",
        "Address": "Horacio No. 603 Col. Chapultepec Morales Delegación Miguel Hidalgo Mexico, D.F. C.P. 11570",
        "Coordinates": {
            "lat": 19.42458,
            "lng": -99.17869
        }
    },
    {
        "Name": "SuperStore 3834-INDIANA",
        "Address": "Maximino Avila Camacho No. 32 Col. Ciudad De Los Deportes Delegación Benito Juarez México, D.F. C.P. 03710",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3828-LOS MORALES",
        "Address": "Horacio No. 1740 Col. Chapultepec Morales Delegación Miguel Hidalgo Mexico, D.F. C.P. 11510",
        "Coordinates": {
            "lat": 19.42458,
            "lng": -99.17869
        }
    },
    {
        "Name": "SuperStore 3820-MICHOACÁN",
        "Address": "Michoacán No. 38 Col. Hipódromo Condesa Delegación Cuauhtémoc Mexico, D.F. C.P. 06170",
        "Coordinates": {
            "lat": 19.40948,
            "lng": -99.17733
        }
    },
    {
        "Name": "SuperStore 3809-PACHUCA",
        "Address": "Pachuca No.99 Col. Condesa Delegación Cuauhtémoc Mexico, D.F. C.P. 06140",
        "Coordinates": {
            "lat": 19.41525,
            "lng": -99.17773
        }
    },
    {
        "Name": "SuperStore 3025-PARQUES POLANCO",
        "Address": "Lago Alberto No. 320, entre las calles Mariano Escobedo y Lago Mayor, Col. Granada, C.P. 11520, Deleg. Miguel Hidalgo, D.F.",
        "Coordinates": {
            "lat": 41.687312,
            "lng": -93.96118
        }
    },
    {
        "Name": "SuperStore 3812-NARVARTE",
        "Address": "Pedro Romero De Terreros No. 1461 Col. Narvarte Delegación Benito Juarez México, D.F. C.P. 03020",
        "Coordinates": {
            "lat": 19.39373,
            "lng": -99.15409
        }
    },
    {
        "Name": "SuperStore 3810-SENA",
        "Address": "Rio Balsas No. 23 Col. Cuauhtémoc Delegación Cuauhtémoc Mexico, D.F. C.P. 06500",
        "Coordinates": {
            "lat": 19.43363,
            "lng": -99.16771
        }
    },
    {
        "Name": "SuperStore 3480-WTC DAKOTA",
        "Address": "Av. Dakota No. 95 entre las calles Arizona y altadena, col. Nápoles, C.P. 03810, Deleg. Benito Juárez, D.F. ",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "Red Barn Stores 4191-LAGO DE GUADALUPE ",
        "Address": "LAGO DE GPE S/N LOTE 2 LOCAL SA03 ENTRE LAS CALLES AUTOPISTA MEXIC-QUERETARO Y TEXCATILPOCA, COL. SAN PEDRO BARRIENTOS 54010 TLANEPANTLA DE BAZ EDO DE MEXICO",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3835-LOMAS ANAHUAC",
        "Address": "Av. De Los Bosques No. 234 Col. Lomas De Tecamachalco Huixquilucan, Edo. De Mexico C.P. 52760",
        "Coordinates": {
            "lat": 19.41273,
            "lng": -99.24837
        }
    },
    {
        "Name": "SuperStore 3629-ECHEGARAY",
        "Address": "Av. Gustavo Baz 3 244 Col. Echegaray Naucalpan Edo. De Mexico C.P. 02770",
        "Coordinates": {
            "lat": 19.47346,
            "lng": -99.23385
        }
    },
    {
        "Name": "Red Barn Stores 3016-MACRO PLAZA HEROES TEC.",
        "Address": "BOSQUES DEL ESTADO DE MEXICO NO. 2 LOTE 1, ENTRE BOSQUES DE CHAPULTEPEC Y BOSQUES DE LOS CIPRESES, COL. LOS HEROES TECAMAC, C.P. 55764 TECAMAC EDO. DE MEXICO",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3824-ORADORES",
        "Address": "Av. Fuentes de Satélite No. 1 Fraccionamiento Col. Jardines de Bellavista, Tlalnepantla de Baz, Edo. De Mexico C.P. 54080",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "La Tienda Especiál 5770-Zumpango",
        "Address": "Blvd.Melchor Ocampo No.120/Col.Barrio de Santiago. CP 55600",
        "Coordinates": {
            "lat": 49.566596,
            "lng": 5.391386
        }
    },
    {
        "Name": "SuperStore 1408-VALLE DORADO",
        "Address": "Blvd. Manuel Avila Camacho No. 3130, Tlalnepantla, Estado de México C.P. 54020",
        "Coordinates": {
            "lat": 19.5662,
            "lng": -99.2083
        }
    },
    {
        "Name": "La Tienda Especiál 5813-La Paz",
        "Address": "Av. Río Bravo No. 6, Col. El Salado, La Paz, Estado de México, C.P. 56410",
        "Coordinates": {
            "lat": 19.37009,
            "lng": -98.96128
        }
    },
    {
        "Name": "SuperStore 3821-LINDAVISTA",
        "Address": "Montevideo No. 360 Col. Lindavista Delegación Gustavo A. Madero Mexico, D.F. C.P. 07300",
        "Coordinates": {
            "lat": 19.49068,
            "lng": -99.13391
        }
    },
    {
        "Name": "Red Barn Stores 4154-PERINORTE",
        "Address": "AUTOPISTA MEXICO-QUERETARO KM 30.2 ENTRE LAS CALLES AV, CENTRAL Y CARRETERA CUAUTITLAN TLANEPANTLA, COL. SAN MARTIN TEPETLIXPAN CP 54763 CUAUTITLAN IZCALLI, EDO DE MEXICO",
        "Coordinates": {
            "lat": 34.570817,
            "lng": -105.993007
        }
    },
    {
        "Name": "SuperStore 3814-BARRILACO",
        "Address": "Sierra Ventana No.750 Col. Lomas de Chapultepec Delegación Miguel Hidalgo Mexico, D.F.C.P. 11000",
        "Coordinates": {
            "lat": 19.42605,
            "lng": -99.22107
        }
    },
    {
        "Name": "SuperStore 3829-BOSQUES DE LAS LOMAS",
        "Address": "Bosques de Duraznos 187 Loc. 1 Col. Bosques de Las Lomas Delegación Miguel Hidalgo Mexico, D.F.C.P. 11700",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "SuperStore 3841-LILAS",
        "Address": "Paseo de Las Lilas No.92 Col. Bosques De Las Lomas Delegación Cuajimalpa Mexico, D.F. C.P. 05120",
        "Coordinates": {
            "lat": 19.3922,
            "lng": -99.2474
        }
    },
    {
        "Name": "SuperStore 3881-SANTA FE",
        "Address": "Av. Tamaulipas No. 3000 Col. Santa Fe Delegación Cuajimalpa Mexico, D.F. C.P. 05340",
        "Coordinates": {
            "lat": 19.35625,
            "lng": -99.27609
        }
    },
    {
        "Name": "SuperStore 3830-VIRREYES",
        "Address": "Aguilar y Seixas No. 123 Col. Molino Del Rey Delegación Miguel Hidalgo Mexico, D.F. C.P. 01140",
        "Coordinates": {
            "lat": 18.09187,
            "lng": -93.34861
        }
    },
    {
        "Name": "SuperStore 3921-VISTA HERMOSA",
        "Address": "Av. Noche de Paz No. 38 Col. Granjas Navidad  Delegación Cuajimalpa Mexico, D.F. C.P. 05219",
        "Coordinates": {
            "lat": 19.37323,
            "lng": -99.2788
        }
    },
    {
        "Name": "SuperStore 5817-AXOMIATLA",
        "Address": "Calz. de Las Águilas No. 1819 Col. San Antonio Tarango Delg. Alvaro Obregón Mexico, D.F. C.P. 01780",
        "Coordinates": {
            "lat": 19.34859,
            "lng": -99.22953
        }
    },
    {
        "Name": "SuperStore 3844-BOSQUES DE MINAS",
        "Address": "Bosque de Minas No. 33 Col. Bosques de La Herradura Huixquilucan, Edo. de Mexico C.P. 52783",
        "Coordinates": {
            "lat": 19.42022,
            "lng": -99.2655
        }
    },
    {
        "Name": "SuperStore 3034-FUENTES DE LAS LOMAS",
        "Address": "Av. Jesús Del Monte No. 37, Entre Olmo y Prolongación Huixquilucan, Col. Jesús Del Monte, , Huixquilucan, Estado De México, C.P. 52764",
        "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
        }
    },
    {
        "Name": "KAYCHEE  175-Lomas Estrella",
        "Address": "Avenida Tláhuac 4409, Itzapalapa, Lomas Estrella, 09890 Ciudad de México, D.F., México",
        "Coordinates": {
            "lat": 19.32192,
            "lng": -99.09512
        }
    }
];
// localStorage.setItem('markersPoints', JSON.stringify(markersPoints));
// }
// else {
//  console.log('Cargando marcadores...'); 
// }
//   }
// }


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    mapbox: {
        accessToken: 'pk.eyJ1IjoiZ2FiYTI4MDEiLCJhIjoiY2sxOHJrOXlrMXRqazNsdGo4anlkZWg0NiJ9.jLrlKOQb1A9JDdZniLHDBg'
        // pk.eyJ1IjoiZ2FiYTI4MDEiLCJhIjoiY2p6Y3p5aXd3MDA1MDNjcHI1Z3o1MnVmZCJ9.nDIUvESnqMoNiXZwoqB3LQ' 
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/map.service.ts":
/*!*************************************!*\
  !*** ./src/services/map.service.ts ***!
  \*************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_models_init_markers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_models/init-markers */ "./src/data_models/init-markers.ts");



// Data

var MapService = /** @class */ (function () {
    function MapService() {
        // this.getMarkers();
        // super();
        // console.log('Servicio de marcadores iniciando...');
        // this.load();
    }
    // getMarkers(){
    //   let markers = JSON.parse(localStorage.getItem('markers'));
    //   console.log('Servicio de marcadores leyendo JSON: '+ JSON.stringify(markers));
    // }
    // Function with Observable
    MapService.prototype.getData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_data_models_init_markers__WEBPACK_IMPORTED_MODULE_3__["markersPoints"]);
    };
    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\SCL009-Desafio-Maps\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map