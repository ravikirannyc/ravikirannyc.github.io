(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~category-category-module~home-home-module~products-products-module~user-profile-user-profile-module"), __webpack_require__.e("default~category-category-module~home-home-module~products-products-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/main/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        path: 'category',
        loadChildren: () => Promise.all(/*! import() | category-category-module */[__webpack_require__.e("default~category-category-module~home-home-module~products-products-module~user-profile-user-profile-module"), __webpack_require__.e("default~category-category-module~home-home-module~products-products-module"), __webpack_require__.e("common"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ./category/category.module */ "./src/app/main/category/category.module.ts")).then(m => m.CategoryModule)
    },
    {
        path: 'product',
        loadChildren: () => Promise.all(/*! import() | products-products-module */[__webpack_require__.e("default~category-category-module~home-home-module~products-products-module~user-profile-user-profile-module"), __webpack_require__.e("default~category-category-module~home-home-module~products-products-module"), __webpack_require__.e("common"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null, /*! ./products/products.module */ "./src/app/main/products/products.module.ts")).then(m => m.ProductsModule)
    },
    {
        path: 'user',
        loadChildren: () => Promise.all(/*! import() | user-profile-user-profile-module */[__webpack_require__.e("default~category-category-module~home-home-module~products-products-module~user-profile-user-profile-module"), __webpack_require__.e("common"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ./user-profile/user-profile.module */ "./src/app/main/user-profile/user-profile.module.ts")).then(m => m.UserProfileModule)
    },
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");




class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                ],
                exports: [],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map