(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-about-about-module"],{

/***/ "./src/app/components/about/about-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/about/about-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1>{{title}}</h1>\r\n    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\r\n      </p>\r\n    <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more</a></p>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.title = 'about works';
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/about/about.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/about/about.module.ts ***!
  \**************************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/components/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Component = [
    _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
];
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _about_routing_module__WEBPACK_IMPORTED_MODULE_1__["AboutRoutingModule"],
            ],
            declarations: Component.slice(),
            entryComponents: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
            exports: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-about-about-module.js.map