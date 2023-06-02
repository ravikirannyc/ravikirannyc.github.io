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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_pt_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/pt-components/not-found/not-found.component */ "./src/app/shared/pt-components/not-found/not-found.component.ts");
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/header/header.component */ "./src/app/main/header/header.component.ts");






const routes = [
    // {
    //   path: '',
    //   loadChildren: () => import('./main/main.module').then(m => m.MainModule)
    // },
    {
        path: '',
        component: _main_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | main-main-module */ "main-main-module").then(__webpack_require__.bind(null, /*! ./main/main.module */ "./src/app/main/main.module.ts")).then(m => m.MainModule)
            },
            { path: '404', component: _shared_pt_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
            { path: '**', redirectTo: '404' }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled'
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'pt-main-fe';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_core_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/core/product.service */ "./src/app/shared/core/product.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_pt_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pt-components/not-found/not-found.component */ "./src/app/shared/pt-components/not-found/not-found.component.ts");
/* harmony import */ var _shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/core/authentication.service */ "./src/app/shared/core/authentication.service.ts");
/* harmony import */ var _shared_core_support_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/core/support.service */ "./src/app/shared/core/support.service.ts");
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_core_user_profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/core/user-profile.service */ "./src/app/shared/core/user-profile.service.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/__ivy_ngcc__/fesm2015/ngx-avatar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/footer/footer.component */ "./src/app/main/footer/footer.component.ts");
/* harmony import */ var _shared_pt_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/pt-components/terms-of-use/terms-of-use.component */ "./src/app/shared/pt-components/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _shared_pt_components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/pt-components/disclaimer/disclaimer.component */ "./src/app/shared/pt-components/disclaimer/disclaimer.component.ts");
/* harmony import */ var _shared_pt_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/pt-components/privacy-policy/privacy-policy.component */ "./src/app/shared/pt-components/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _shared_core_data_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/core/data.service */ "./src/app/shared/core/data.service.ts");
/* harmony import */ var _shared_core_zipcode_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/core/zipcode.service */ "./src/app/shared/core/zipcode.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _shared_core_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
        _shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
        _shared_core_support_service__WEBPACK_IMPORTED_MODULE_9__["SupportService"],
        _shared_core_user_profile_service__WEBPACK_IMPORTED_MODULE_12__["UserProfileService"],
        _shared_core_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"],
        _shared_core_zipcode_service__WEBPACK_IMPORTED_MODULE_21__["ZipcodeService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
            ngx_avatar__WEBPACK_IMPORTED_MODULE_13__["AvatarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shared_pt_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
        _main_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
        _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _shared_pt_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_17__["TermsOfUseComponent"],
        _shared_pt_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_19__["PrivacyPolicyComponent"],
        _shared_pt_components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_18__["DisclaimerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_13__["AvatarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]], exports: [_main_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
        _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _shared_pt_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_17__["TermsOfUseComponent"],
        _shared_pt_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_19__["PrivacyPolicyComponent"],
        _shared_pt_components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_18__["DisclaimerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _shared_pt_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                    _main_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                    _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _shared_pt_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_17__["TermsOfUseComponent"],
                    _shared_pt_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_19__["PrivacyPolicyComponent"],
                    _shared_pt_components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_18__["DisclaimerComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                    ngx_avatar__WEBPACK_IMPORTED_MODULE_13__["AvatarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                ],
                exports: [
                    _main_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                    _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _shared_pt_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_17__["TermsOfUseComponent"],
                    _shared_pt_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_19__["PrivacyPolicyComponent"],
                    _shared_pt_components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_18__["DisclaimerComponent"]
                ],
                providers: [
                    _shared_core_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
                    _shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
                    _shared_core_support_service__WEBPACK_IMPORTED_MODULE_9__["SupportService"],
                    _shared_core_user_profile_service__WEBPACK_IMPORTED_MODULE_12__["UserProfileService"],
                    _shared_core_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"],
                    _shared_core_zipcode_service__WEBPACK_IMPORTED_MODULE_21__["ZipcodeService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/user-data */ "./src/app/shared/models/user-data.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/core/authentication.service */ "./src/app/shared/core/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pt_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pt-components/terms-of-use/terms-of-use.component */ "./src/app/shared/pt-components/terms-of-use/terms-of-use.component.ts");









function SignupComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r123.errorMessage);
} }
function SignupComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please provide a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be minimum 8 characters long & contain at least 1 number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords didn't match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 29);
} }
function SignupComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_ng_template_55_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-terms-of-use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(modalService, authenticationService) {
        var _a;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.isAddedUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userData = new src_app_shared_models_user_data__WEBPACK_IMPORTED_MODULE_1__["UserData"]();
        this.errorMessage = '';
        this.signupFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
            ]),
            firstNameFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            lastNameFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            passwordFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*?[0-9]).{8,}$") // Min 8 chars long, at least 1 number
            ]),
            confirmPasswordFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern((_a = this.getPassword) === null || _a === void 0 ? void 0 : _a.value)
            ]),
            tncFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')
            ]),
        });
    }
    ngOnInit() {
    }
    // Min 8 characters, at least 1 uppercase, 1 lowercase letter, 1 number and 1 special character
    // ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
    checkPasswords(signupFormGroup) {
        let password = signupFormGroup ? signupFormGroup.get('passwordFormControl') : "";
        let confirmPassword = signupFormGroup ? signupFormGroup.get('confirmPasswordFormControl') : "";
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    validateIfChecked() {
        return (form) => {
            const checked = form.get('checked');
            const second = form.get('second');
            if (checked && !second) {
                return {
                    err: true
                };
            }
            return null;
        };
    }
    get getEmail() {
        return this.signupFormGroup.get('emailFormControl');
    }
    get getFirstName() {
        return this.signupFormGroup.get('firstNameFormControl');
    }
    get getLastName() {
        return this.signupFormGroup.get('lastNameFormControl');
    }
    get getPassword() {
        var _a;
        return (_a = this.signupFormGroup) === null || _a === void 0 ? void 0 : _a.get('passwordFormControl');
    }
    get getConfirmPassword() {
        // console.log(this.signupFormGroup.get('confirmPasswordFormControl'));
        return this.signupFormGroup.get('confirmPasswordFormControl');
    }
    get getTncFormControl() {
        return this.signupFormGroup.get('tncFormControl');
    }
    get getForm() { return this.signupFormGroup.controls; }
    openModal(template, classNames) {
        this.modalRef = this.modalService.show(template, { class: classNames });
    }
    // this.openModal(pincode, 'modal-xl modal-dialog-centered zipcode')
    signUp() {
        this.errorMessage = '';
        if (!this.signupFormGroup.get('emailFormControl').invalid &&
            !this.signupFormGroup.get('firstNameFormControl').invalid &&
            !this.signupFormGroup.get('lastNameFormControl').invalid &&
            !this.signupFormGroup.get('passwordFormControl').invalid &&
            !this.signupFormGroup.get('confirmPasswordFormControl').invalid &&
            !this.signupFormGroup.get('tncFormControl').invalid &&
            this.isPasswordsMatch &&
            !this.showLoading) {
            this.showLoading = true;
            if (!this.signupFormGroup.get('tncFormControl').invalid) {
                this.userData.agreedToTerms = true;
            }
            this.authenticationService.signUp(this.userData).subscribe(res => {
                //console.log(res);
                this.showLoading = false;
                this.errorMessage = '';
                this.isAddedUser.emit(true);
            }, (error) => {
                var _a;
                this.showLoading = false;
                this.errorMessage = (_a = error.error.error) === null || _a === void 0 ? void 0 : _a.message;
                if (this.errorMessage === '' || this.errorMessage == null) {
                    this.errorMessage = error.error.errors[0];
                    if (this.errorMessage === '' || this.errorMessage == null) {
                        this.errorMessage = 'Oops! Something went wrong. Please try again.';
                    }
                }
            });
        }
        else {
        }
    }
    comparePasswords() {
        if (this.getPassword.value === this.getConfirmPassword.value) {
            this.isPasswordsMatch = true;
        }
        else {
            this.isPasswordsMatch = false;
        }
    }
    login() {
        this.authenticationService.login();
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], outputs: { isAddedUser: "isAddedUser" }, decls: 57, vars: 26, consts: [[1, "brows"], [1, "container"], [1, "fw-bold", "pb-2"], ["class", "alert alert-danger fade show", "role", "alert", 4, "ngIf"], ["action", "", 3, "formGroup"], [1, "form-row", 2, "margin-top", "5px"], [1, "col-sm-12", "col-md-12", "col-lg-6"], ["type", "email", "placeholder", "Email", "name", "email", "formControlName", "emailFormControl", 1, "form-control-signup", 3, "ngModel", "ngModelChange"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "text", "placeholder", "First Name", "name", "firstName", "formControlName", "firstNameFormControl", 1, "form-control-signup", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", "name", "lastName", "formControlName", "lastNameFormControl", 1, "form-control-signup", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", "formControlName", "passwordFormControl", 1, "form-control-signup", 3, "ngModel", "ngModelChange", "keyup"], ["type", "password", "placeholder", "Confirm Password", "name", "confirmpassword", "formControlName", "confirmPasswordFormControl", 1, "form-control-signup", 3, "keyup"], [1, "form-group", 2, "margin-top", "5px"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "tncCheck", "name", "tnccheck", "formControlName", "tncFormControl", 1, "custom-control-input"], ["for", "tncCheck", 1, "custom-control-label", "tncCheck", 2, "color", "darkgray"], ["href", "javascript:void(0);", 2, "color", "lightcoral", 3, "click"], [1, "form-row", "align-items-left"], [1, "form-group", "col-12", "col-sm-12", "col-md-6"], ["type", "submit", 1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm ml-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "sr-only"], [1, "col-12", "col-sm-12", "col-md-auto", 2, "color", "black"], ["href", "javascript:", 2, "color", "lightcoral", 3, "click"], [1, "form-row", "mt-2"], ["termsModal", ""], ["role", "alert", 1, "alert", "alert-danger", "fade", "show"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "ml-1"], [1, "modal-header", "bg-danger"], [1, "modal-title", "pull-left", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "text-white", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignupComponent_div_5_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_9_listener($event) { return ctx.userData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignupComponent_span_11_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignupComponent_span_12_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_15_listener($event) { return ctx.userData.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignupComponent_span_17_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_20_listener($event) { return ctx.userData.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignupComponent_span_22_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_25_listener($event) { return ctx.userData.password = $event; })("keyup", function SignupComponent_Template_input_keyup_25_listener() { return ctx.comparePasswords(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignupComponent_span_27_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignupComponent_span_28_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SignupComponent_Template_input_keyup_31_listener() { return ctx.comparePasswords(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SignupComponent_span_33_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SignupComponent_span_34_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " I agree to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137); const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return ctx.openModal(_r133, "modal-xl modal-dialog-scrollable"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " You must agree to the terms before proceeding. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_46_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, SignupComponent_span_48_Template, 1, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_52_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Login (or) Login Using Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SignupComponent_ng_template_55_Template, 8, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signupFormGroup.get("emailFormControl").invalid && ctx.signupFormGroup.get("emailFormControl").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getEmail.errors == null ? null : ctx.getEmail.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getEmail.errors == null ? null : ctx.getEmail.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signupFormGroup.get("firstNameFormControl").invalid && ctx.signupFormGroup.get("firstNameFormControl").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getFirstName.errors == null ? null : ctx.getFirstName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signupFormGroup.get("lastNameFormControl").invalid && ctx.signupFormGroup.get("lastNameFormControl").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getLastName.errors == null ? null : ctx.getLastName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signupFormGroup.get("passwordFormControl").invalid && ctx.signupFormGroup.get("passwordFormControl").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getPassword.errors == null ? null : ctx.getPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getPassword.errors == null ? null : ctx.getPassword.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signupFormGroup.get("confirmPasswordFormControl").invalid && ctx.signupFormGroup.get("confirmPasswordFormControl").touched || !ctx.isPasswordsMatch && ctx.signupFormGroup.get("confirmPasswordFormControl").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getConfirmPassword.errors == null ? null : ctx.getConfirmPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.getConfirmPassword.errors == null ? null : ctx.getConfirmPassword.errors.required) && !ctx.isPasswordsMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signupFormGroup.get("emailFormControl").invalid || ctx.signupFormGroup.get("firstNameFormControl").invalid || ctx.signupFormGroup.get("lastNameFormControl").invalid || ctx.signupFormGroup.get("passwordFormControl").invalid || ctx.signupFormGroup.get("confirmPasswordFormControl").invalid || ctx.signupFormGroup.get("tncFormControl").invalid || !ctx.isPasswordsMatch || ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _shared_pt_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_6__["TermsOfUseComponent"]], styles: [".social-sign[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: lightcoral;\n  border-color: lightcoral;\n  width: 35px;\n}\n.social-sign[_ngcontent-%COMP%]   .btn.btn-outline-facebook[_ngcontent-%COMP%]:hover {\n  background-color: #4267B2;\n  color: #ffffff;\n  border-color: #4267B2;\n}\n.social-sign[_ngcontent-%COMP%]   .btn.btn-outline-google[_ngcontent-%COMP%]:hover {\n  background-color: #DB4437;\n  color: #ffffff;\n  border-color: #DB4437;\n}\n.social-sign[_ngcontent-%COMP%]   .btn.btn-outline-twitter[_ngcontent-%COMP%]:hover {\n  background-color: #1DA1F2;\n  color: #ffffff;\n  border-color: #1DA1F2;\n}\n.tncCheck[_ngcontent-%COMP%] {\n  font-size: 90%;\n  font-weight: 400;\n  color: lightcoral;\n}\n.tncCheck.custom-control-label[_ngcontent-%COMP%]::before {\n  top: 0.15rem;\n}\n.tncCheck.custom-control-label[_ngcontent-%COMP%]::after {\n  top: 0.15rem;\n  color: lightcoral;\n}\n.accountExsist[_ngcontent-%COMP%] {\n  color: lightcoral;\n  font-size: 90%;\n}\n.sign-heading[_ngcontent-%COMP%] {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvRDpcXFdvcmtzcGFjZVxcYXJ0aWFyYS1uZy1hcHAtbmV3L3NyY1xcYXBwXFxhdXRoXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9hdXRoL3NpZ251cC9EOlxcV29ya3NwYWNlXFxhcnRpYXJhLW5nLWFwcC1uZXcvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDSFI7QURLSTtFQUNJLHlCQUFBO0VBQ0EsY0VSUTtFRlNSLHFCRUZJO0FERFo7QURLSTtFQUNJLHlCRUpJO0VGS0osY0ViUTtFRmNSLHFCRU5JO0FER1o7QURLSTtFQUNJLHlCRVJJO0VGU0osY0VsQlE7RUZtQlIscUJFVkk7QURPWjtBREtBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRElBO0VBQ0ksWUFBQTtBQ0RKO0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQUo7QURFQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzJyBcclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL19taXhpbnMnIFxyXG5cclxuLnNvY2lhbC1zaWduXHJcbiAgICBhXHJcbiAgICAgICAgY29sb3I6IGxpZ2h0Y29yYWxcclxuICAgICAgICBib3JkZXItY29sb3I6IGxpZ2h0Y29yYWxcclxuICAgICAgICB3aWR0aDogMzVweFxyXG5cclxuICAgIC5idG4uYnRuLW91dGxpbmUtZmFjZWJvb2s6aG92ZXJcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmFjZWJvb2tcclxuICAgICAgICBjb2xvcjogJHdoaXRlXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZmFjZWJvb2tcclxuXHJcbiAgICAuYnRuLmJ0bi1vdXRsaW5lLWdvb2dsZTpob3ZlclxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRnb29nbGVcclxuICAgICAgICBjb2xvcjogJHdoaXRlXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZ29vZ2xlXHJcblxyXG4gICAgLmJ0bi5idG4tb3V0bGluZS10d2l0dGVyOmhvdmVyXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHR3aXR0ZXJcclxuICAgICAgICBjb2xvcjogJHdoaXRlXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdHdpdHRlclxyXG5cclxuLnRuY0NoZWNrXHJcbiAgICBmb250LXNpemU6IDkwJVxyXG4gICAgZm9udC13ZWlnaHQ6IDQwMFxyXG4gICAgY29sb3I6IGxpZ2h0Y29yYWxcclxuICAgIFxyXG4udG5jQ2hlY2suY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZVxyXG4gICAgdG9wOiAwLjE1cmVtXHJcblxyXG4udG5jQ2hlY2suY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyXHJcbiAgICB0b3A6IDAuMTVyZW1cclxuICAgIGNvbG9yOiBsaWdodGNvcmFsXHJcblxyXG5cclxuLmFjY291bnRFeHNpc3RcclxuICAgIGNvbG9yOiBsaWdodGNvcmFsXHJcbiAgICBmb250LXNpemU6IDkwJVxyXG5cclxuLnNpZ24taGVhZGluZ1xyXG4gICAgd2lkdGg6IDgwJSIsIi5zb2NpYWwtc2lnbiBhIHtcbiAgY29sb3I6IGxpZ2h0Y29yYWw7XG4gIGJvcmRlci1jb2xvcjogbGlnaHRjb3JhbDtcbiAgd2lkdGg6IDM1cHg7XG59XG4uc29jaWFsLXNpZ24gLmJ0bi5idG4tb3V0bGluZS1mYWNlYm9vazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjY3QjI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICM0MjY3QjI7XG59XG4uc29jaWFsLXNpZ24gLmJ0bi5idG4tb3V0bGluZS1nb29nbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREI0NDM3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjREI0NDM3O1xufVxuLnNvY2lhbC1zaWduIC5idG4uYnRuLW91dGxpbmUtdHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxREExRjI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICMxREExRjI7XG59XG5cbi50bmNDaGVjayB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuLnRuY0NoZWNrLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICB0b3A6IDAuMTVyZW07XG59XG5cbi50bmNDaGVjay5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICB0b3A6IDAuMTVyZW07XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4uYWNjb3VudEV4c2lzdCB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xuICBmb250LXNpemU6IDkwJTtcbn1cblxuLnNpZ24taGVhZGluZyB7XG4gIHdpZHRoOiA4MCU7XG59IiwiJHByaW1hcnk6ICAgICAgICNGNDc2MjQ7XHJcbiRwcmltYXJ5LWxpZ2h0OiAjRkZCMjM4O1xyXG4kdGV4dDogICAgICAgICAgIzMzMzMzMztcclxuJHdoaXRlOiAgICAgICAgICNmZmZmZmY7XHJcbiRibGFjay1iZzogICAgICAjMjMyNTI4O1xyXG4kZ3JleTogICAgICAgICAgI2ExYTFhMTtcclxuJGdyZXktYmc6ICAgICAgICNmOGY5ZmE7XHJcbiR3YXJuaW5nOiAgICAgICAjZTBhODA1OyBcclxuXHJcbi8vIHNvY2lhbCBtZWRpYSBjb2xvcnNcclxuJGZhY2Vib29rIDogIzQyNjdCMjtcclxuJGdvb2dsZSAgIDogI0RCNDQzNztcclxuJHR3aXR0ZXIgIDogIzFEQTFGMjtcclxuXHJcbiR0aGVtZS1jb2xvcnM6IChcclxuICBwcmltYXJ5OiAgJHByaW1hcnksXHJcbiAgd2FybmluZzogICR3YXJuaW5nLFxyXG4gIGRhcms6ICAgICAkYmxhY2stYmdcclxuKTtcclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDQ4MHB4LFxyXG4gIG1kOiA1NzZweCxcclxuICBsZzogNzY5cHgsXHJcbiAgeGw6IDEyMDBweCxcclxuKTtcclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.sass']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }, { type: src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, { isAddedUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_enums_category_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/category.enum */ "./src/app/shared/enums/category.enum.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_pt_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pt-components/terms-of-use/terms-of-use.component */ "./src/app/shared/pt-components/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _shared_pt_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pt-components/privacy-policy/privacy-policy.component */ "./src/app/shared/pt-components/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _shared_pt_components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pt-components/disclaimer/disclaimer.component */ "./src/app/shared/pt-components/disclaimer/disclaimer.component.ts");







function FooterComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_ng_template_36_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-terms-of-use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_ng_template_38_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-privacy-policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Disclaimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_ng_template_40_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "disclaimer-policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.categoryItems = src_app_shared_enums_category_enum__WEBPACK_IMPORTED_MODULE_1__["CategoryItems"];
    }
    ngOnInit() {
    }
    trackEvent(category) {
        if (window.dataLayer) {
            window.dataLayer.push({ 'CategoryName': category });
        }
        ;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 42, vars: 0, consts: [[1, "pt-3", 2, "margin-top", "10px"], [1, "text-left", "text-secondary"], [1, "container"], [1, "col-sm-12"], [1, "fw-regular", 2, "color", "black"], [2, "color", "black", "font-size", "medium"], ["href", "mailto:support@artiara.in"], [2, "color", "lightcoral", "font-size", "medium"], [1, "row", "align-items-center", "justify-content-left", 2, "margin-top", "10px"], [1, "col-sm-12", "col-md-5", "col-lg-3"], ["target", "_blank", "href", "https://www.facebook.com/profile.php?id=100070543672558", 1, "px-2", "text-danger"], [1, "fab", "fa-facebook-f", 2, "font-size", "30px", "color", "lightcoral"], ["target", "_blank", "href", "https://twitter.com/Artiara9", 1, "px-2", "text-danger"], [1, "fab", "fa-twitter", 2, "font-size", "30px", "color", "lightcoral"], ["target", "_blank", "href", "https://www.instagram.com/artiara_couture/", 1, "px-2", "text-danger"], [1, "fab", "fa-instagram", 2, "font-size", "30px", "color", "lightcoral"], [1, "row", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", 1, "px-2", "fw-light", 2, "color", "lightcoral", 3, "click"], [1, "col-sm-12", "col-md-5", "col-lg-3", 2, "color", "black", "font-size", "medium", "margin-bottom", "20px"], [1, "bg-dark", "p-0"], ["terms", ""], ["privacy", ""], ["disclaimer", ""], [1, "modal-header", "bg-danger"], [1, "modal-title", "pull-left", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "text-white", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-header", "btn-danger"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You can send your suggestions to our email id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " support@artiara.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return ctx.openModal(_r56); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return ctx.openModal(_r58); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return ctx.openModal(_r60); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Copyright \u00A9 2023 Artiara All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FooterComponent_ng_template_36_Template, 8, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, FooterComponent_ng_template_38_Template, 8, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, FooterComponent_ng_template_40_Template, 8, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_shared_pt_components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_3__["TermsOfUseComponent"], _shared_pt_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyPolicyComponent"], _shared_pt_components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__["DisclaimerComponent"]], styles: ["footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: right;\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  max-height: 85vh;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.modal-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  font-size: 18px;\n  font-weight: 700;\n}\n.modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  -webkit-padding-start: 40px;\n          padding-inline-start: 40px;\n}\n.modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.modal-body[_ngcontent-%COMP%]   ul.bullets[_ngcontent-%COMP%] {\n  list-style-type: disc;\n}\n.modal-body[_ngcontent-%COMP%]   ul.bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n.inline-padding[_ngcontent-%COMP%] {\n  -webkit-padding-start: 40px;\n          padding-inline-start: 40px;\n}\n@media (max-width: 499px) {\n  .logo-footer[_ngcontent-%COMP%] {\n    margin: 15px auto;\n    text-align: center;\n  }\n  .logo-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb290ZXIvRDpcXFdvcmtzcGFjZVxcYXJ0aWFyYS1uZy1hcHAtbmV3L3NyY1xcYXBwXFxtYWluXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7QUNBUjtBRENRO0VBQ0ksa0JBQUE7QUNDWjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0FDRVI7QURESTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHUjtBREZJO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkJBQUE7VUFBQSwwQkFBQTtBQ0lSO0FERlk7RUFDSSxtQkFBQTtBQ0loQjtBREhRO0VBQ0ksbUJBQUE7QUNLWjtBREpZO0VBQ0ksZ0JBQUE7QUNNaEI7QURMSTtFQUNJLHFCQUFBO0FDT1I7QUROUTtFQUNJLGdCQUFBO0FDUVo7QUROQTtFQUNJLDJCQUFBO1VBQUEsMEJBQUE7QUNTSjtBRFBBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VDVU47RURUTTtJQUNJLFlBQUE7RUNXVjs7RURSTTtJQUNJLGtCQUFBO0VDV1Y7RURWVTtJQUNJLGtCQUFBO0VDWWQ7RURYYztJQUNJLGtCQUFBO0VDYWxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIgXHJcbiAgICB1bFxyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0XHJcbiAgICAgICAgbGlcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtICAgXHJcbiAgICBcclxuXHJcbi5tb2RhbC1ib2R5XHJcbiAgICBtYXgtaGVpZ2h0OiA4NXZoXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvXHJcbiAgICBvbCx1bFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbVxyXG4gICAgb2xcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHhcclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgICAgICBmb250LXdlaWdodDogNzAwXHJcbiAgICB1bFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweFxyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4XHJcbiAgICAgICAgdWxcclxuICAgICAgICAgICAgbGlcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWxcclxuICAgICAgICBsaVxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbiAgICAgICAgICAgIHN0cm9uZ1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAgXHJcbiAgICB1bC5idWxsZXRzXHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjXHJcbiAgICAgICAgbGlcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGlzYyAgICBcclxuXHJcbi5pbmxpbmUtcGFkZGluZ1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHhcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0OTlweCkgXHJcbiAgICAubG9nby1mb290ZXJcclxuICAgICAgICBtYXJnaW46IDE1cHggYXV0b1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIGltZ1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHhcclxuICAgICAgICAgICAgXHJcbiAgICBmb290ZXJcclxuICAgICAgICAuY29udGFpbmVyXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAgXHJcbiAgICAgICAgICAgIHVsXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgIGxpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtICAgXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIFxyXG4gICAgIiwiZm9vdGVyIHVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5mb290ZXIgdWwgbGkge1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tb2RhbC1ib2R5IG9sLCAubW9kYWwtYm9keSB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5tb2RhbC1ib2R5IG9sIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubW9kYWwtYm9keSB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xufVxuLm1vZGFsLWJvZHkgdWwgdWwgbGkge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm1vZGFsLWJvZHkgdWwgbGkge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm1vZGFsLWJvZHkgdWwgbGkgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tb2RhbC1ib2R5IHVsLmJ1bGxldHMge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59XG4ubW9kYWwtYm9keSB1bC5idWxsZXRzIGxpIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cblxuLmlubGluZS1wYWRkaW5nIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0OTlweCkge1xuICAubG9nby1mb290ZXIge1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubG9nby1mb290ZXIgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cblxuICBmb290ZXIgLmNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIHVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgZm9vdGVyIC5jb250YWluZXIgdWwgbGkge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/support */ "./src/app/shared/models/support.ts");
/* harmony import */ var src_app_shared_models_SupportType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/SupportType */ "./src/app/shared/models/SupportType.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_models_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/user-data */ "./src/app/shared/models/user-data.ts");
/* harmony import */ var src_app_shared_models_user_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/user-info */ "./src/app/shared/models/user-info.ts");
/* harmony import */ var src_app_shared_section_sectioned_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/section/sectioned-components */ "./src/app/shared/section/sectioned-components.ts");
/* harmony import */ var src_app_shared_section_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/section/section */ "./src/app/shared/section/section.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_core_support_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/core/support.service */ "./src/app/shared/core/support.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_core_user_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/core/user-profile.service */ "./src/app/shared/core/user-profile.service.ts");
/* harmony import */ var src_app_shared_core_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/core/data.service */ "./src/app/shared/core/data.service.ts");
/* harmony import */ var src_app_shared_core_zipcode_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/core/zipcode.service */ "./src/app/shared/core/zipcode.service.ts");
/* harmony import */ var src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/core/authentication.service */ "./src/app/shared/core/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/main/footer/footer.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/__ivy_ngcc__/fesm2015/ngx-avatar.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");




















const _c0 = ["verificationEmailModal"];
const _c1 = ["signupModal"];
const _c2 = ["zipcodeModal"];
const _c3 = ["stickyMenu"];
function HeaderComponent_ngx_avatar_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-avatar", 32);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "inline-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", (ctx_r1.userInfo == null ? null : ctx_r1.userInfo.firstName) + " " + (ctx_r1.userInfo == null ? null : ctx_r1.userInfo.lastName));
} }
function HeaderComponent_ngx_avatar_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-avatar", 33);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "inline-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/JPEG;base64,", ctx_r2.userInfo.profilePicture, "");
} }
function HeaderComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_30_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const section_r8 = ctx.$implicit; const tabIndex_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r10.openSection(section_r8.route, tabIndex_r9); return ctx_r10.showUserMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", section_r8.icon, " mr-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", section_r8.title, " ");
} }
function HeaderComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_39_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.signupModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-signup", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isAddedUser", function HeaderComponent_ng_template_39_Template_app_signup_isAddedUser_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.checkIsAddedUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verify Your Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_41_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.verificationEmailModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 1.We have sent a verification link to your email , please verify using the same, for help on email verification please contact support@artiara.in. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 2.After successful verification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_41_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Click here to Log In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Thank you for signing up.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function () { return { "bg-white": true }; };
const _c5 = function () { return ["/"]; };
const _c6 = function (a0) { return { "d-none": a0 }; };
const _c7 = function (a0) { return { "active": a0 }; };
class HeaderComponent extends src_app_shared_section_sectioned_components__WEBPACK_IMPORTED_MODULE_6__["SectionedComponent"] {
    constructor(route, router, supportService, modalService, userProfileService, dataService, zipcodeService, authenticationService) {
        super();
        this.route = route;
        this.router = router;
        this.supportService = supportService;
        this.modalService = modalService;
        this.userProfileService = userProfileService;
        this.dataService = dataService;
        this.zipcodeService = zipcodeService;
        this.authenticationService = authenticationService;
        this.userEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            earlyAccessEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
            ])
        });
        this.userZipcode = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            userZipcodeFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$"),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(7)
            ]),
        });
        this.sticky = false;
        this.support = new src_app_shared_models_support__WEBPACK_IMPORTED_MODULE_1__["Support"]();
        this.userData = new src_app_shared_models_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]();
        this.userInfo = new src_app_shared_models_user_info__WEBPACK_IMPORTED_MODULE_5__["UserInfo"]();
        this.isValidZipcode = true;
        //Feedback Alert
        this.feedbackToggled = false;
    }
    get eaEmail() {
        return this.userEmail.get('earlyAccessEmail');
    }
    openSignupModal(classNames) {
        this.signupModalRef = this.modalService.show(this.signupModal, { class: classNames });
        // Remove query params
        this.router.navigate([], {
            queryParams: {
                signup: null,
            },
            queryParamsHandling: 'merge'
        });
    }
    get getUserZipcode() {
        return this.userZipcode.get('userZipcodeFormControl');
    }
    openVerificationEmailModal(classNames) {
        this.verificationEmailModalRef = this.modalService.show(this.verificationEmailModal, { class: classNames });
    }
    openZipcodeModal(classNames) {
        this.zipcodeModalRef = this.modalService.show(this.zipcodeModal, { class: classNames, backdrop: "static", keyboard: false });
    }
    updateUserProfile() {
        this.showZipcodeLoading = true;
        /*    this.userProfileService.updateUserProfile(this.userInfo).subscribe(res => {
             this.showZipcodeLoading = false;
             this.zipcodeModalRef.hide();
           }, (error) => {
             this.showZipcodeLoading = false;
           }); */
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.signup === 'true') {
                setTimeout(() => {
                    this.openSignupModal('modal-xl modal-dialog-centered signup');
                }, 100);
            }
            this.dataService.currentMessage.subscribe(message => { this.isHome = message; });
        });
        this.route.params.subscribe(() => {
            this.refreshSections(src_app_shared_section_section__WEBPACK_IMPORTED_MODULE_7__["userProfileSections"]);
        });
        this.getUserInfo();
        if (this.isHome) {
            this.alertToggled = false;
        }
        this.userProfileService.currentprofilePicture.subscribe(profilePicture => {
            if (profilePicture.length !== 0)
                this.userInfo.profilePicture = profilePicture;
        });
        this.userProfileService.currentUserInfo.subscribe(userInfo => {
            this.userInfo = userInfo;
        });
        // window.addEventListener('scroll', this.scrollEvent, true);
        //checking if there is BG image behind the navbar
        // if (document.querySelector("section").classList.contains('jumbotron')) {
        //   //If yes then the function will run below
        //   (() => {
        //     const nav = document.getElementById('header');
        //     window.addEventListener('scroll', () => {
        //       if (window.scrollY > 80) {
        //         nav.classList.add("bg-primary");
        //         nav.classList.remove("bg-transparent");
        //       } else {
        //         nav.classList.remove("bg-primary");
        //         nav.classList.add("bg-transparent");
        //       }
        //     });
        //     // console.log('Listner added');
        //   })();
        // }else{
        //   //If not then the some default classes will be removed
        //   const nav = document.getElementById('header');
        //   nav.classList.add("bg-primary");
        //   nav.classList.remove("bg-transparent", "fixed-top");
        // }
    }
    openSection(routeSection, index) {
        let redirectRoute = "/user/" + routeSection;
        this.setActiveSection(index);
        this.router.navigate([redirectRoute]);
    }
    checkIsAddedUser(event) {
        if (event) {
            this.signupModalRef.hide();
            this.openVerificationEmailModal('modal-md modal-dialog-centered');
        }
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= 80) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
    }
    ngOnDestroy() {
        // window.removeEventListener('scroll', this.scrollEvent, true);
    }
    // scrollEvent = (event: any): void => {
    //   const number = event.srcElement.scrollTop;
    //   // console.log(event.path[1].scrollY);
    //   this.scrollFromTop = event.path[1].scrollY;
    // }
    // Scroll To Top
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    ;
    toggleAlert() {
        this.alertToggled = !this.alertToggled;
    }
    toggleFeedback() {
        this.feedbackToggled = !this.feedbackToggled;
        // this.formSubmitted = false;
    }
    sendEarlyAccessRequest() {
        this.support.supportType = src_app_shared_models_SupportType__WEBPACK_IMPORTED_MODULE_2__["SupportType"].early_access;
        this.isProcessingRequest = true;
        this.supportService.sendEarlyAccessRequest(this.support).subscribe(res => {
            this.isSupportError = false;
            this.isProcessingRequest = false;
            // this.feedbackToggled = false;
            this.formSubmitted = true;
            this.support = new src_app_shared_models_support__WEBPACK_IMPORTED_MODULE_1__["Support"]();
            this.emailExists = false;
        }, (error) => {
            this.isSupportError = true;
            this.isProcessingRequest = false;
            if (error.error.message == "email_exists") {
                this.emailExists = true;
            }
            else if (error.error.message == "invalid_email") {
                this.errorMessage = "Please provide a valid email address";
                this.emailExists = false;
            }
            else {
                this.errorMessage = "Oh no! Something went wrong, please try again in a while";
                this.emailExists = false;
            }
        });
    }
    login() {
        // this.authenticationService.login().subscribe(res => {
        //   console.log(res);
        // });
        this.authenticationService.login();
    }
    getUserInfo() {
        /*  this.userProfileService.getUserInfo().subscribe(res => {
           this.userInfo = res;
           //console.log(res);
           if(!this.userInfo.zipCode) {
             //this.openZipcodeModal('modal-xl modal-dialog-centered zipcode');
           }
     
         }) */
    }
    logout() {
        this.showUserMenu = false;
        this.authenticationService.logout().subscribe(res => {
            this.userInfo = new src_app_shared_models_user_info__WEBPACK_IMPORTED_MODULE_5__["UserInfo"]();
        }, (error) => {
            sessionStorage.removeItem('iuli');
            this.router.navigate(['/']);
        });
    }
    validateZipcode() {
        if (!this.userZipcode.get('userZipcodeFormControl').invalid) {
            this.isValidatingZipcode = true;
            this.zipcodeService.getCityState(this.userInfo.zipCode).subscribe(locationInfoRes => {
                this.userInfo.city = locationInfoRes.city;
                this.userInfo.state = locationInfoRes.state;
                this.isValidatingZipcode = false;
                this.isInValidZipcode = false;
            }, (error) => {
                this.isValidatingZipcode = false;
                this.isInValidZipcode = true;
            });
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_support_service__WEBPACK_IMPORTED_MODULE_9__["SupportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_user_profile_service__WEBPACK_IMPORTED_MODULE_11__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_zipcode_service__WEBPACK_IMPORTED_MODULE_13__["ZipcodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.verificationEmailModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signupModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.zipcodeModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
    } }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { isHome: "isHome" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 45, vars: 21, consts: [["id", "header", 1, "fixed-top", 3, "ngClass"], ["stickyMenu", ""], [1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container"], ["href", "javascript:", 1, "navbar-brand", 3, "routerLink"], ["src", "../../../assets/artiara_logo_final.svg"], [1, "navbar-nav", "ml-auto"], [1, "btn", "btn-link", "nav-link", 2, "color", "lightcoral", "font-size", "medium", "font-weight", "200", 3, "routerLink"], [3, "ngClass"], ["href", "javascript:void()", 3, "click"], [1, "media"], [1, "media-body", "ml-2"], [1, "mt-0", 2, "color", "#F8CFCF"], [1, "fa", "fa-angle-down", "d-inline-block"], [1, "side-menu", 3, "ngClass"], [1, "side-user", "d-flex", "align-items-center", "justify-content-between", "mb-5"], [1, "media", "align-items-center"], ["class", "", "size", "50", 3, "display", "name", 4, "ngIf"], ["class", "", "size", "70", 3, "display", "src", 4, "ngIf"], [2, "color", "lightcoral"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "side-nav-links"], [3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:", 3, "click"], [1, "fa", "fa-sign-out-alt", "mr-3"], [1, "bg-menu"], [1, "scrollTop"], [3, "click"], [1, "fas", "fa-chevron-up"], ["signupModal", ""], ["verificationEmailModal", ""], ["size", "50", 1, "", 3, "name"], ["size", "70", 1, "", 3, "src"], ["href", "javascript:"], [1, "modal-header", "bg-transparent", "signup-bg", "border-bottom-0"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "text-dark", 3, "click"], [1, "modal-body", "signup-bg"], [3, "isAddedUser"], [1, "modal-header", 2, "color", "lightcoral"], ["aria-hidden", "true", 2, "font-size", "xx-large", "color", "red"], [2, "margin", "30px"], ["href", "#", 2, "color", "lightcoral", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.showUserMenu = !ctx.showUserMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_ngx_avatar_20_Template, 1, 3, "ngx-avatar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_ngx_avatar_21_Template, 1, 3, "ngx-avatar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_25_listener() { return ctx.showUserMenu = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HeaderComponent_li_30_Template, 4, 4, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_32_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_37_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HeaderComponent_ng_template_39_Template, 6, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HeaderComponent_ng_template_41_Template, 15, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrolled", ctx.sticky);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c6, !(ctx.userInfo == null ? null : ctx.userInfo.email)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userInfo == null ? null : ctx.userInfo.firstName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c7, ctx.showUserMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.userInfo == null ? null : ctx.userInfo.profilePicture));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfo == null ? null : ctx.userInfo.profilePicture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInfo == null ? null : ctx.userInfo.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.sticky);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], ngx_avatar__WEBPACK_IMPORTED_MODULE_17__["AvatarComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"]], styles: [".covid[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 8%;\n  right: 20%;\n  z-index: 9991;\n  width: 60%;\n  pointer-events: none;\n}\n\n.show[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n.custom-invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.feedback-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 50%;\n  z-index: 9993;\n}\n\n.feedback-btn[_ngcontent-%COMP%]   .feed[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  padding: 10px 14px 10px 10px;\n  background: #F47624;\n  cursor: pointer;\n  transition: box-shadow 0.1s ease-in-out;\n  box-sizing: border-box !important;\n}\n\n.feedback-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  overflow-wrap: normal !important;\n  word-break: normal !important;\n  word-wrap: normal !important;\n  white-space: nowrap !important;\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  cursor: pointer;\n  -webkit-writing-mode: vertical-lr;\n  -moz-writing-mode: vertical-lr;\n  -o-writing-mode: vertical-lr;\n  writing-mode: vertical-lr;\n  transform: rotate(180deg);\n}\n\n.feedback-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  margin: 10px 0 0 5px;\n  font-size: 14px;\n}\n\n.feedback[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  right: -700px;\n  z-index: 9993;\n  opacity: 0;\n  transition: all 0.35s ease-out;\n  pointer-events: none;\n  max-width: 410px;\n  box-shadow: 3px 14px 32px -20px rgba(0, 0, 0, 0.45);\n}\n\n.feedback[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.feedback[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .feedback-close[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #F47624;\n  color: #ffffff;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  top: -15px;\n  right: 2%;\n  transform: translate(-2%, 3.5%);\n  border-radius: 50%;\n  opacity: 1;\n}\n\n.feedback[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .feedback-close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1;\n  height: 26px;\n  font-size: 25px;\n}\n\n.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  right: 0px;\n  pointer-events: all;\n}\n\nheader[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  top: 0;\n  left: 0;\n  position: absolute;\n  transform: translateY(-110%);\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 5px 25px #0000000f;\n}\n\nheader.scrolled[_ngcontent-%COMP%]::before {\n  transform: translateY(0%);\n}\n\n\n\n.media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 45px;\n}\n\n.media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #321F40;\n}\n\n.media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #321F40;\n  font-size: 1rem;\n}\n\n.bg-menu[_ngcontent-%COMP%] {\n  background-color: rgba(35, 37, 40, 0.35);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -5;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n  pointer-events: none;\n}\n\n.side-menu[_ngcontent-%COMP%] {\n  width: 300px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #ffffff;\n  z-index: 99991;\n  padding: 30px 25px;\n  transform: translate(100%);\n  transition: all 0.3s ease-out;\n  pointer-events: none;\n}\n\n.side-menu[_ngcontent-%COMP%]   .side-nav-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.side-menu[_ngcontent-%COMP%]   .side-nav-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.side-menu[_ngcontent-%COMP%]   .side-nav-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #232528;\n  font-weight: 200;\n}\n\n.side-menu[_ngcontent-%COMP%]   .side-nav-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: lightcoral;\n}\n\n.side-menu.active[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  box-shadow: -10px 0px 55px rgba(0, 0, 0, 0.2);\n  pointer-events: all;\n}\n\n.side-menu.active[_ngcontent-%COMP%]    + .bg-menu[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 99990;\n  pointer-events: all;\n}\n\n@media (max-width: 1440px) {\n  .covid[_ngcontent-%COMP%] {\n    top: 10%;\n    right: 10%;\n    width: 80%;\n  }\n}\n\n@media (max-width: 1366px) {\n  .covid[_ngcontent-%COMP%] {\n    top: 10%;\n    right: 10%;\n    width: 80%;\n  }\n}\n\n@media (max-width: 1366px) {\n  .covid[_ngcontent-%COMP%] {\n    top: 10%;\n    right: 10%;\n    width: 82%;\n  }\n}\n\n@media (max-width: 992px) {\n  .covid[_ngcontent-%COMP%] {\n    width: 92%;\n    right: 5%;\n  }\n\n  .sign-heading[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n@media (max-width: 576px) {\n  .covid[_ngcontent-%COMP%] {\n    width: 95%;\n    z-index: 9994;\n    right: 2%;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .feedback.open[_ngcontent-%COMP%] {\n    top: 45%;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    padding-top: 0rem;\n    padding-bottom: 0rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .side-menu[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n}\n\n@media (max-width: 359px) {\n  .feedback.open[_ngcontent-%COMP%] {\n    top: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9oZWFkZXIvRDpcXFdvcmtzcGFjZVxcYXJ0aWFyYS1uZy1hcHAtbmV3L3NyY1xcYXBwXFxtYWluXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9tYWluL2hlYWRlci9EOlxcV29ya3NwYWNlXFxhcnRpYXJhLW5nLWFwcC1uZXcvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbWFpbi9oZWFkZXIvRDpcXFdvcmtzcGFjZVxcYXJ0aWFyYS1uZy1hcHAtbmV3L3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDRko7O0FESUk7RUFDSSxtQkFBQTtBQ0RSOztBREdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJFNUJRO0VGNkJSLGVBQUE7RUFLQSx1Q0FBQTtFQUdBLGlDQUFBO0FDQ1I7O0FEQ0k7RUFDSSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUVBLDRCQUFBO0VBQ0EseUJBQUE7RUFLQSx5QkFBQTtBQ0NSOztBREFJO0VBQ0ksZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNFUjs7QURBQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBR0EsbURBQUE7QUNHSjs7QURESTtFQUNJLGtCQUFBO0FDR1I7O0FERlE7RUFDSSxrQkFBQTtFQUNBLHlCRS9FSTtFRmdGSixjRTdFSTtFRjhFSixXQUFBO0VBQ0EsWUFBQTtFR2hGUixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CSDhFNkI7RUFDckIsVUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ09aOztBRE5ZO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUWhCOztBRFBBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ1VKOztBRE5JO0VBQ0csV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJFckdTO0VGc0dULE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7QUNTUDs7QURMSTtFQUNHLHlCQUFBO0FDUVA7O0FETkEsNkJBQUE7O0FBRUk7RUFDSSxXQUFBO0FDUVI7O0FETFE7RUFDSSxjQUFBO0FDT1o7O0FETlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1FaOztBRFBBO0VBQ0ksd0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ1VKOztBRFJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCRWhKWTtFRmlKWixjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUNXSjs7QURUSTtFQUNJLGtCQUFBO0FDV1I7O0FEVlE7RUFDSSxlQUFBO0FDWVo7O0FEWFk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDYWhCOztBRFpnQjtFQUNJLGlCQUFBO0FDY3BCOztBRGJJO0VBQ0ksd0JBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FDZVI7O0FEZEk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDZ0JSOztBRGRBO0VBS0k7SUFDSSxRQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUNhTjtBQUNGOztBRFpBO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUNjTjtBQUNGOztBRGJBO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUNlTjtBQUNGOztBRGRBO0VBRUk7SUFDSSxVQUFBO0lBQ0EsU0FBQTtFQ2VOOztFRGJFO0lBQ0ksVUFBQTtFQ2dCTjtBQUNGOztBRGRBO0VBRUk7SUFDSSxVQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7RUNlTjs7RURaTTtJQUNJLGFBQUE7RUNlVjs7RURiRTtJQUNJLFFBQUE7RUNnQk47O0VEZEU7SUFDSSxtQkFBQTtFQ2lCTjs7RURmRTtJQUNJLG9CQUFBO0lBQ0EsdUJBQUE7RUNrQk47O0VEaEJFO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtFQ21CTjtBQUNGOztBRGpCQTtFQUNJO0lBQ0ksVUFBQTtFQ21CTjtBQUNGOztBRGxCQTtFQUVJO0lBQ0ksUUFBQTtFQ21CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMnIFxyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX21peGlucycgXHJcblxyXG4uY292aWRcclxuICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgdG9wOiA4JVxyXG4gICAgcmlnaHQ6IDIwJVxyXG4gICAgei1pbmRleDogOTk5MVxyXG4gICAgd2lkdGg6IDYwJVxyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcclxuLnNob3dcclxuICAgIGJ1dHRvblxyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGxcclxuICAgIFxyXG4uY3VzdG9tLWludmFsaWQtZmVlZGJhY2tcclxuICAgIGZvbnQtc2l6ZTogODAlXHJcbiAgICBjb2xvcjogI2RjMzU0NVxyXG4gICAgXHJcbi5mZWVkYmFjay1idG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgcmlnaHQ6IDBcclxuICAgIHRvcDogNTAlXHJcbiAgICB6LWluZGV4OiA5OTkzXHJcbiAgICBcclxuICAgIC5mZWVkXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgd2lkdGg6IDQwcHhcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHggMTBweCAxMHB4XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnlcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LWJveC1zaGFkb3cgMC4xcyBlYXNlLWluLW91dFxyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IC1vLWJveC1zaGFkb3cgMC4xcyBlYXNlLWluLW91dFxyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiAtbXMtYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnRcclxuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudFxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudFxyXG5cclxuICAgIHNwYW5cclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudFxyXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IG5vcm1hbCAhaW1wb3J0YW50XHJcbiAgICAgICAgd29yZC1icmVhazogbm9ybWFsICFpbXBvcnRhbnRcclxuICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbCAhaW1wb3J0YW50XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50XHJcbiAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgIC13ZWJraXQtd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1sclxyXG4gICAgICAgIC1tb3otd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1sclxyXG4gICAgICAgIC1tcy13cml0aW5nLW1vZGU6IHRiLXJsXHJcbiAgICAgICAgLW8td3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1sclxyXG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHJcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXHJcbiAgICBpXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnRcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDVweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAgICBcclxuICAgICAgICBcclxuLmZlZWRiYWNrXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogNTAlXHJcbiAgICByaWdodDogLTcwMHB4XHJcbiAgICB6LWluZGV4OiA5OTkzXHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1vdXRcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXHJcbiAgICBtYXgtd2lkdGg6IDQxMHB4XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxNHB4IDMycHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KVxyXG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggMTRweCAzMnB4IC0yMHB4IHJnYmEoMCwwLDAsMC40NSlcclxuICAgIGJveC1zaGFkb3c6IDNweCAxNHB4IDMycHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KVxyXG5cclxuICAgIC5jYXJkXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgLmZlZWRiYWNrLWNsb3NlXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeVxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweFxyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4X2NlbnRlcihyb3cpXHJcbiAgICAgICAgICAgIHRvcDogLTE1cHhcclxuICAgICAgICAgICAgcmlnaHQ6IDIlXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yJSwgMy41JSlcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgc3BhblxyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjZweFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4XHJcbi5vcGVuXHJcbiAgICBvcGFjaXR5OiAxICAgICAgICAgICBcclxuICAgIHJpZ2h0OiAwcHhcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGxcclxuXHJcblxyXG5oZWFkZXJcclxuICAgICY6OmJlZm9yZVxyXG4gICAgICAgY29udGVudDogJydcclxuICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZVxyXG4gICAgICAgdG9wOiAwXHJcbiAgICAgICBsZWZ0OiAwXHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgXHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMCUpXHJcbiAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dFxyXG4gICAgICAgYm94LXNoYWRvdzogMCA1cHggMjVweCAjMDAwMDAwMGZcclxuICAgIFxyXG5cclxuaGVhZGVyLnNjcm9sbGVkXHJcbiAgICAmOjpiZWZvcmVcclxuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSlcclxuXHJcbi8qIC0tIFVzZXIgQWNjb3VudCBJbiBOYXYgLS0qL1xyXG4ubWVkaWFcclxuICAgIGltZ1xyXG4gICAgICAgIHdpZHRoOiA0NXB4XHJcblxyXG4gICAgLm1lZGlhLWJvZHlcclxuICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICBjb2xvcjogIzMyMUY0MFxyXG4gICAgICAgIGg1XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzIxRjQwXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbVxyXG4uYmctbWVudVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmxhY2stYmcsIDAuMzUpXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogMFxyXG4gICAgbGVmdDogMFxyXG4gICAgd2lkdGg6IDEwMHZ3XHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbiAgICB6LWluZGV4OiAtNVxyXG4gICAgb3BhY2l0eTogMFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXRcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXHJcbiAgICBcclxuLnNpZGUtbWVudVxyXG4gICAgd2lkdGg6IDMwMHB4XHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHJpZ2h0OiAwXHJcbiAgICB0b3A6IDBcclxuICAgIGhlaWdodDogMTAwdmhcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZVxyXG4gICAgei1pbmRleDogOTk5OTFcclxuICAgIHBhZGRpbmc6IDMwcHggMjVweFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSlcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxyXG5cclxuICAgIC5zaWRlLW5hdi1saW5rcyB1bFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweFxyXG4gICAgICAgIGxpXHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweCAwXHJcbiAgICAgICAgICAgIGFcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbVxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMzI1MjhcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDBcclxuICAgICAgICAgICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRjb3JhbFxyXG4gICAgJi5hY3RpdmVcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcclxuICAgICAgICBib3gtc2hhZG93OiAtMTBweCAwcHggNTVweCByZ2JhKDAsIDAsIDAsIDAuMilcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsXHJcbiAgICAmLmFjdGl2ZSArIC5iZy1tZW51XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIHotaW5kZXg6IDk5OTkwXHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkgXHJcblxyXG4gICAgLy8gLmZlZWRiYWNrLm9wZW5cclxuICAgIC8vICAgICB0b3A6IDIwJSAgXHJcblxyXG4gICAgLmNvdmlkXHJcbiAgICAgICAgdG9wOiAxMCVcclxuICAgICAgICByaWdodDogMTAlXHJcbiAgICAgICAgd2lkdGg6IDgwJVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgXHJcbiAgICAuY292aWRcclxuICAgICAgICB0b3A6IDEwJVxyXG4gICAgICAgIHJpZ2h0OiAxMCVcclxuICAgICAgICB3aWR0aDogODAlICBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIFxyXG4gICAgLmNvdmlkXHJcbiAgICAgICAgdG9wOiAxMCVcclxuICAgICAgICByaWdodDogMTAlXHJcbiAgICAgICAgd2lkdGg6IDgyJSAgICAgICAgICBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkgXHJcblxyXG4gICAgLmNvdmlkXHJcbiAgICAgICAgd2lkdGg6IDkyJVxyXG4gICAgICAgIHJpZ2h0OiA1JVxyXG5cclxuICAgIC5zaWduLWhlYWRpbmdcclxuICAgICAgICB3aWR0aDogOTAlXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSBcclxuXHJcbiAgICAuY292aWRcclxuICAgICAgICB3aWR0aDogOTUlXHJcbiAgICAgICAgei1pbmRleDogOTk5NFxyXG4gICAgICAgIHJpZ2h0OiAyJVxyXG5cclxuICAgIC5uYXZiYXItbmF2IGJ1dHRvblxyXG4gICAgICAgIGltZ1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcblxyXG4gICAgLmZlZWRiYWNrLm9wZW5cclxuICAgICAgICB0b3A6IDQ1JSAgICAgICAgXHJcblxyXG4gICAgLm5hdmJhci1uYXZcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcblxyXG4gICAgLm5hdi1saW5rXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMjVyZW0gXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gXHJcblxyXG4gICAgLm5hdmJhci1icmFuZFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtIFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcmVtIFxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkgXHJcbiAgICAuc2lkZS1tZW51XHJcbiAgICAgICAgd2lkdGg6IDg1JVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM1OXB4KSBcclxuXHJcbiAgICAuZmVlZGJhY2sub3BlblxyXG4gICAgICAgIHRvcDogMjAlICBcclxuIiwiLmNvdmlkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDglO1xuICByaWdodDogMjAlO1xuICB6LWluZGV4OiA5OTkxO1xuICB3aWR0aDogNjAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNob3cgYnV0dG9uIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmN1c3RvbS1pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uZmVlZGJhY2stYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDk5OTM7XG59XG4uZmVlZGJhY2stYnRuIC5mZWVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZzogMTBweCAxNHB4IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI0Y0NzYyNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiAtby1ib3gtc2hhZG93IDAuMXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiAtbXMtYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xufVxuLmZlZWRiYWNrLWJ0biBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB3b3JkLWJyZWFrOiBub3JtYWwgIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBub3JtYWwgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgLW1vei13cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICAtbXMtd3JpdGluZy1tb2RlOiB0Yi1ybDtcbiAgLW8td3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmZlZWRiYWNrLWJ0biBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwIDAgNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAtNzAwcHg7XG4gIHotaW5kZXg6IDk5OTM7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLW91dDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG1heC13aWR0aDogNDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDE0cHggMzJweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAxNHB4IDMycHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgYm94LXNoYWRvdzogM3B4IDE0cHggMzJweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuLmZlZWRiYWNrIC5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZlZWRiYWNrIC5jYXJkIC5mZWVkYmFjay1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NzYyNDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB0b3A6IC0xNXB4O1xuICByaWdodDogMiU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yJSwgMy41JSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMTtcbn1cbi5mZWVkYmFjayAuY2FyZCAuZmVlZGJhY2stY2xvc2Ugc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLm9wZW4ge1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMHB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG5oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogMCA1cHggMjVweCAjMDAwMDAwMGY7XG59XG5cbmhlYWRlci5zY3JvbGxlZDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbn1cblxuLyogLS0gVXNlciBBY2NvdW50IEluIE5hdiAtLSovXG4ubWVkaWEgaW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG59XG4ubWVkaWEgLm1lZGlhLWJvZHkgc21hbGwge1xuICBjb2xvcjogIzMyMUY0MDtcbn1cbi5tZWRpYSAubWVkaWEtYm9keSBoNSB7XG4gIGNvbG9yOiAjMzIxRjQwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5iZy1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMzcsIDQwLCAwLjM1KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogLTU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNpZGUtbWVudSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5OTk5MTtcbiAgcGFkZGluZzogMzBweCAyNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnNpZGUtbWVudSAuc2lkZS1uYXYtbGlua3MgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uc2lkZS1tZW51IC5zaWRlLW5hdi1saW5rcyB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5zaWRlLW1lbnUgLnNpZGUtbmF2LWxpbmtzIHVsIGxpIGEge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMjMyNTI4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuLnNpZGUtbWVudSAuc2lkZS1uYXYtbGlua3MgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuLnNpZGUtbWVudS5hY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDBweCA1NXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbi5zaWRlLW1lbnUuYWN0aXZlICsgLmJnLW1lbnUge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiA5OTk5MDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuY292aWQge1xuICAgIHRvcDogMTAlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuY292aWQge1xuICAgIHRvcDogMTAlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuY292aWQge1xuICAgIHRvcDogMTAlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDgyJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb3ZpZCB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICByaWdodDogNSU7XG4gIH1cblxuICAuc2lnbi1oZWFkaW5nIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNvdmlkIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIHotaW5kZXg6IDk5OTQ7XG4gICAgcmlnaHQ6IDIlO1xuICB9XG5cbiAgLm5hdmJhci1uYXYgYnV0dG9uIGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mZWVkYmFjay5vcGVuIHtcbiAgICB0b3A6IDQ1JTtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgfVxuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLnNpZGUtbWVudSB7XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5mZWVkYmFjay5vcGVuIHtcbiAgICB0b3A6IDIwJTtcbiAgfVxufSIsIiRwcmltYXJ5OiAgICAgICAjRjQ3NjI0O1xyXG4kcHJpbWFyeS1saWdodDogI0ZGQjIzODtcclxuJHRleHQ6ICAgICAgICAgICMzMzMzMzM7XHJcbiR3aGl0ZTogICAgICAgICAjZmZmZmZmO1xyXG4kYmxhY2stYmc6ICAgICAgIzIzMjUyODtcclxuJGdyZXk6ICAgICAgICAgICNhMWExYTE7XHJcbiRncmV5LWJnOiAgICAgICAjZjhmOWZhO1xyXG4kd2FybmluZzogICAgICAgI2UwYTgwNTsgXHJcblxyXG4vLyBzb2NpYWwgbWVkaWEgY29sb3JzXHJcbiRmYWNlYm9vayA6ICM0MjY3QjI7XHJcbiRnb29nbGUgICA6ICNEQjQ0Mzc7XHJcbiR0d2l0dGVyICA6ICMxREExRjI7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoXHJcbiAgcHJpbWFyeTogICRwcmltYXJ5LFxyXG4gIHdhcm5pbmc6ICAkd2FybmluZyxcclxuICBkYXJrOiAgICAgJGJsYWNrLWJnXHJcbik7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA0ODBweCxcclxuICBtZDogNTc2cHgsXHJcbiAgbGc6IDc2OXB4LFxyXG4gIHhsOiAxMjAwcHgsXHJcbik7XHJcblxyXG5cclxuIiwiXHJcbj1mbGV4X2NlbnRlcigkZGlyZWN0aW9uKVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uXHJcblxyXG49Zml4ZWRfZnVsbCgpXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHdpZHRoOiAxMDB2d1xyXG4gICAgaGVpZ2h0OiAxMDB2aFxyXG4gICAgdG9wOiAwXHJcbiAgICBsZWZ0OiAwXHJcblxyXG49cG9zaXRpb25fY2VudGVyKClcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgdG9wOiA1MCVcclxuICAgIGxlZnQ6IDUwJVxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcclxuICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_shared_core_support_service__WEBPACK_IMPORTED_MODULE_9__["SupportService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] }, { type: src_app_shared_core_user_profile_service__WEBPACK_IMPORTED_MODULE_11__["UserProfileService"] }, { type: src_app_shared_core_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"] }, { type: src_app_shared_core_zipcode_service__WEBPACK_IMPORTED_MODULE_13__["ZipcodeService"] }, { type: src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"] }]; }, { verificationEmailModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['verificationEmailModal', { static: false }]
        }], signupModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['signupModal', { static: false }]
        }], zipcodeModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['zipcodeModal', { static: false }]
        }], isHome: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stickyMenu']
        }], handleScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/core/authConfig.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/core/authConfig.ts ***!
  \*******************************************/
/*! exports provided: authConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
const authConfig = {
    //tokenEndpoint: '/api/v1/login/oauth2/code/keyclock'
    tokenEndpoint: '/secure/login'
};


/***/ }),

/***/ "./src/app/shared/core/authentication.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/core/authentication.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_authConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/authConfig */ "./src/app/shared/core/authConfig.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.userLoginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.currentUserLoginStatus = this.userLoginStatus.asObservable();
        this.currentTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](sessionStorage.getItem('access_token'));
        this.currentToken = this.currentTokenSubject.asObservable();
    }
    ngOnInit() {
    }
    // public login(loginData : LoginData) : Observable<any> {
    //     if(loginData){
    //         let params = new URLSearchParams();
    //         params.append('username',loginData.username);
    //         params.append('password',loginData.password);
    //           const httpOptions = {
    //             headers: new HttpHeaders({
    //                 'Content-Type':  'application/x-www-form-urlencoded',
    //                 // 'Authorization': "Basic " + btoa(authConfig.clientId + ":" + authConfig.secret),
    //                 // Authorization: 'Basic dXNlcjowN2ZmZTIxNS04OGUxLTQyYmMtYWE3NC1iOGM4ZTRiMDViMzM=',
    //                 // 'Access-Control-Allow-Origin': 'https://login.microsoftonline.com/a311b731-37bf-4abd-807d-ddbd66d6f377/oauth2/v2.0/token',
    //                 // 'X-Requested-With': 'XMLHttpRequest',
    //             })
    //           };
    //          return this.http.post(authConfig.tokenEndpoint, params.toString(), httpOptions).pipe(
    //          tap((tokens) => {
    //              this.storeAccessTokenResponse(tokens);
    //         }));
    //     }
    // }
    sendUserLoginStatus(data) {
        this.userLoginStatus.next(data);
    }
    login() {
        window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + _core_authConfig__WEBPACK_IMPORTED_MODULE_2__["authConfig"].tokenEndpoint;
    }
    signUp(userData) {
        return this.http.post("/register/users", userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            return res;
        }));
    }
    /*    public loginStatus() {
           return this.http.get("/api/v1/user/login-status").pipe(map((res) => {
               this.sendUserLoginStatus(res["loginStatus"]);
               return res["loginStatus"];
           }));
       } */
    logout() {
        return this.http.get("/api/v1/logout").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            sessionStorage.removeItem('iuli');
            this.router.navigate(['/']);
            return res;
        }));
    }
    isUserLoggedIn() {
        if (sessionStorage.getItem('iuli') != 'null' && sessionStorage.getItem('iuli')) {
            return true;
        }
        else {
            return false;
        }
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/core/data.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/core/data.service.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class DataService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/core/product.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/core/product.service.ts ***!
  \************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ProductService {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    getRetailersList() {
        return this.http.get("https://artiara-api-github.el.r.appspot.com/api/v1/retailer").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["Retailers"];
        }));
    }
    getProductsByCategory(category) {
        return this.http.get("https://artiara-api-github.el.r.appspot.com/api/v1/products/category/" + category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["Products"];
        }));
    }
    getProductsBySimilarity(selectedProduct) {
        return this.http.post("https://artiara-api-github.el.r.appspot.com/api/v1/products/similar", selectedProduct).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["Products"];
        }));
    }
    getDropDownValues(itemName) {
        return this.http.post("https://artiara-api-github.el.r.appspot.com/api/v1/dropdown/items", itemName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["DropDownValues"];
        }));
    }
    getProductsByWishList() {
        return this.http.get("https://artiara-api-github.el.r.appspot.com/api/v1/products/wishlist").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["Products"];
        }));
    }
    addProductsToWishList(productId) {
        return this.http.put("https://artiara-api-github.el.r.appspot.com/api/v1/products/wishlist", productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["Product"];
        }));
    }
    removeProductsFromWishList(productId) {
        return this.http.delete("https://artiara-api-github.el.r.appspot.com/api/v1/products/wishlist/" + productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res[""];
        }));
    }
    getCategoryData() {
        return this.http.get("https://artiara-api-github.el.r.appspot.com/api/v1/products/category/data").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["Category"];
        }));
    }
    searchProducts(keyword, zip, category, outfitType, brandName, color, priceRange, neckType, fittingType, sleeveLength, patternType, borderStyle, retailerType, ornamentation) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(zip)) {
            zip = "";
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(category)) {
            category = "";
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(keyword)) {
            keyword = "";
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(keyword)) {
            keyword = "";
        }
        return this.http.get("https://artiara-api-github.el.r.appspot.com/api/v1/products?title=" + encodeURIComponent(keyword) + "&category=" + encodeURIComponent(category) + "&outfitType=" + encodeURIComponent(outfitType)
            + "&brandName=" + encodeURIComponent(brandName) + "&color=" + encodeURIComponent(color) + "&priceRange=" + encodeURIComponent(priceRange)
            + "&neckType=" + encodeURIComponent(neckType) + "&fittingType=" + encodeURIComponent(fittingType)
            + "&sleeveLength=" + encodeURIComponent(sleeveLength) + "&patternType=" + encodeURIComponent(patternType)
            + "&borderStyle=" + encodeURIComponent(borderStyle) + "&retailerType=" + encodeURIComponent(retailerType)
            + "&ornamentation=" + encodeURIComponent(ornamentation)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["SearchResult"];
        }));
    }
    getSearchStatus(spIds) {
        return this.http.post("https://artiara-api-github.el.r.appspot.com/api/v1/products/search/", spIds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["SearchResult"];
        }));
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/core/support.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/core/support.service.ts ***!
  \************************************************/
/*! exports provided: SupportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportService", function() { return SupportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class SupportService {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    sendEarlyAccessRequest(support) {
        return this.http.post("/api/v1/support", support).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["Support"];
        }));
    }
}
SupportService.ɵfac = function SupportService_Factory(t) { return new (t || SupportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SupportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SupportService, factory: SupportService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/core/user-profile.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/core/user-profile.service.ts ***!
  \*****************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UserProfileService {
    constructor(http) {
        this.http = http;
        this.userInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentUserInfo = this.userInfo.asObservable();
        this.profilePictureSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentprofilePicture = this.profilePictureSource.asObservable();
    }
    ngOnInit() {
    }
    sendUserInfo(data) {
        this.userInfo.next(data);
    }
    /*  public getUserInfo() {
         return this.http.get("/api/v1/user").pipe(map((res: UserInfo) => {
             //console.log(res);
             //console.log(res["UserInfo"]);
             this.sendUserInfo(res["UserInfo"]);
             sessionStorage.setItem('iuli', res["UserInfo"].email);
             return res["UserInfo"];
         }));
     } */
    /*   updateUserProfile(userInfo) {
          return this.http.put("/api/v1/user", userInfo).pipe(map((res) => {
              //console.log(res);
              //console.log(res["UserInfo"]);
              this.sendUserInfo(res["UserInfo"]);
              return res;
          }));
      } */
    updateUserPassword(passwordDto) {
        return this.http.put("/api/v1/reset-password", passwordDto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res;
        }));
    }
    uploadProfilePicture(profilePicture) {
        //console.log(profilePicture)
        return this.http.post("/api/v1/profile-picture", profilePicture).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.sendProfilePicture(res["profilePicture"]);
            return res["profilePicture"];
        }));
    }
    sendProfilePicture(data) {
        this.profilePictureSource.next(data);
    }
}
UserProfileService.ɵfac = function UserProfileService_Factory(t) { return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserProfileService, factory: UserProfileService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/core/zipcode.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/core/zipcode.service.ts ***!
  \************************************************/
/*! exports provided: ZipcodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipcodeService", function() { return ZipcodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ZipcodeService {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    getCityState(zipcode) {
        return this.http.get("/api/v1/zipCodes/" + zipcode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res["LocationInfo"];
        }));
    }
}
ZipcodeService.ɵfac = function ZipcodeService_Factory(t) { return new (t || ZipcodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ZipcodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ZipcodeService, factory: ZipcodeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZipcodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/enums/category.enum.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/enums/category.enum.ts ***!
  \***********************************************/
/*! exports provided: Category, CategoryItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItems", function() { return CategoryItems; });
var Category;
(function (Category) {
})(Category || (Category = {}));
const CategoryItems = [
    { label: 'Kurtas', value: 'Kurtas', img: 'Kurti.svg' },
    { label: 'Ethnic Tops', value: 'Ethnic Tops', img: 'EthnicTop.svg' },
    { label: 'Sarees', value: 'Sarees', img: 'Saree.svg' },
    { label: 'Ethnic Dresses', value: 'Ethnic Dresses', img: 'EthnicWear.svg' },
    { label: 'Ethnic Bottomwear', value: 'Ethnic Bottomwear', img: 'EthnicBottomWear.svg' },
    { label: 'Skirts Palazzos', value: 'Skirts Palazzos', img: 'Palazzo.svg' },
    { label: 'Dress Material', value: 'Dress Material', img: 'DressMeterials.svg' },
    { label: 'Lehenga Choli', value: 'Lehenga Choli', img: 'LehangaCholi.svg' },
    { label: 'Dupatta Shawl', value: 'Dupatta Shawl', img: 'DupattaShawl.svg' },
    { label: 'Jackets', value: 'Jackets', img: 'Jackets.svg' },
    { label: 'Dresses', value: 'Dresses', img: 'Dresses.svg' },
    { label: 'Tops', value: 'Tops', img: 'Tops.svg' },
    { label: 'Co-Ords', value: 'Co-Ords', img: 'Coords.svg' },
    { label: 'Trousers', value: 'Trousers', img: 'Trousers.svg' },
    { label: 'Jeans', value: 'Jeans', img: 'Jeans.svg' },
    { label: 'Jump Suits', value: 'Jump Suits', img: 'Jumpsuits.svg' },
    { label: 'Tshirts', value: 'Tshirts', img: 'Tshirts.svg' },
    { label: 'Shrugs', value: 'Shrugs', img: 'Shrugs.svg' },
    { label: 'Handbags', value: 'Handbags', img: 'Shrugs.svg' },
    { label: 'Watches', value: 'Watches', img: 'Shrugs.svg' },
    { label: 'Sunglasses', value: 'Sunglasses', img: 'Sunglasses.svg' },
    { label: 'Hair Accessory', value: 'Hair Accessory', img: 'Shrugs.svg' },
    { label: 'Mobile Accessories', value: 'Mobile Accessories', img: 'Shrugs.svg' },
    { label: 'Other Accessories', value: 'Other Accessories', img: 'Shrugs.svg' },
    { label: 'Flats', value: 'Flats', img: 'Shrugs.svg' },
    { label: 'Heels', value: 'Heels', img: 'Shrugs.svg' },
    { label: 'Slippers', value: 'Slippers', img: 'Slippers.svg' },
    { label: 'Casual Shoes', value: 'Casual Shoes', img: 'Shrugs.svg' },
    { label: 'Sports Shoes', value: 'Sports Shoes', img: 'Shrugs.svg' },
    { label: 'Sandals', value: 'Sandals', img: 'Shrugs.svg' }
    //{ label: 'All', value: 'All', img: 'Shrugs.svg' }
];


/***/ }),

/***/ "./src/app/shared/models/SupportType.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/SupportType.ts ***!
  \**********************************************/
/*! exports provided: SupportType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportType", function() { return SupportType; });
var SupportType;
(function (SupportType) {
    SupportType[SupportType["early_access"] = 0] = "early_access";
    SupportType[SupportType["product_suggestion"] = 1] = "product_suggestion";
})(SupportType || (SupportType = {}));


/***/ }),

/***/ "./src/app/shared/models/support.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/support.ts ***!
  \******************************************/
/*! exports provided: Support */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Support", function() { return Support; });
class Support {
    constructor(support) {
        if (support) {
            for (let prop in support) {
                if (support.hasOwnProperty(prop)) {
                    this[prop] = support[prop];
                }
            }
        }
        else {
        }
    }
}


/***/ }),

/***/ "./src/app/shared/models/user-data.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/user-data.ts ***!
  \********************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
class UserData {
    constructor(userData) {
        if (userData) {
            for (let prop in userData) {
                if (userData.hasOwnProperty(prop)) {
                    this[prop] = userData[prop];
                }
            }
        }
        else {
        }
    }
}


/***/ }),

/***/ "./src/app/shared/models/user-info.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/user-info.ts ***!
  \********************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
class UserInfo {
    constructor(userInfo) {
        if (userInfo) {
            for (let prop in userInfo) {
                if (userInfo.hasOwnProperty(prop)) {
                    this[prop] = userInfo[prop];
                }
            }
            if (!this.radius) {
                this.radius = 10;
            }
        }
        else {
            this.radius = 10;
        }
    }
}


/***/ }),

/***/ "./src/app/shared/pt-components/disclaimer/disclaimer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/pt-components/disclaimer/disclaimer.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DisclaimerComponent {
    constructor() { }
    ngOnInit() {
    }
}
DisclaimerComponent.ɵfac = function DisclaimerComponent_Factory(t) { return new (t || DisclaimerComponent)(); };
DisclaimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisclaimerComponent, selectors: [["disclaimer-policy"]], decls: 32, vars: 0, consts: [[1, "row"], [2, "text-align", "center", "font-family", "Times New Roman"], [2, "font-family", "Times New Roman"]], template: function DisclaimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DISCLAIMER POLICY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " WELCOME TO ARTIARA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This document contains information about the Website and mobile application \u201Chttps://www.artiara.in/ \u201D hereinafter referred to as the \u201CWebsite\u201D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " THIS WEBSITE IS NOT AN E-COMMERCE WEBSITE. THE WEBSITE NEITHER SELLS PRODUCTS ON THIS WEBSITE NOR ASKS FOR ANY PAYMENT FROM THE USERS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " THE WEBSITE ALSO MAKES IT CLEAR THAT IT SHALL NOT BE HELD LIABLE FOR ANY DAMAGE/HURT/INCONVENIENCE CAUSED TO THE VENDOR THROUGH THE COURSE OF THE PROVISION OF SERVICES OR AS A RESULT OF THE VENDORS\u2019 ACTIONS. THE WEBSITE MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OF THE VENDORS. THE WEBSITE TAKES NO RESPONSIBILITY FOR ANY CONTENT THAT VENDORS SEND OR RECEIVE FROM OTHER VENDORS OR THIRD-PARTY POSTS THROUGH THE WEBSITE OR WEBSITE. ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH USE OF THE SERVICE IS ACCESSED AT THE VENDORS OWN DISCRETION AND RISK.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " THE SERVICES ON THE WEBSITE ARE INTENDED TO BE SUBJECT TO AVAILABILITY, WITHOUT ANY PROMISES OR GUARANTEES ON THE SAME BY THE WEBSITE, AND WHILE CERTAIN INFORMATION AVAILABLE ON THE WEBSITE IS THE PROPERTY OF THE WEBSITE AND THE WEBSITE ENDEAVOURS TO KEEP THE SAID INFORMATION UPDATED AND ACCURATE, THE WEBSITE SHALL NOT MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, ABOUT THE COMPLETENESS, ACCURACY, RELIABILITY, SUITABILITY OR AVAILABILITY WITH RESPECT TO THE WEBSITE OR THE INFORMATION, CUSTOMERS, SERVICES, OR RELATED GRAPHICS CONTAINED ON THE WEBSITE FOR ANY PURPOSE. ANY RELIANCE\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " YOU PLACE ON SUCH INFORMATION IS THEREFORE STRICTLY AT YOUR OWN RISK.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " THE SERVICES ON THE WEBSITE ARE BASED ON THE INFORMATION THAT IS GIVEN BY THE USER AND THE CORRECTNESS OF AUTHENTICITY OF THE SAME IS ASSURED BY THE USERS, THE USERS CANNOT HOLD THE WEBSITE ACCOUNTABLE FOR THE MISTAKES CAUSED BY ANY ERROR IN THE INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " ANY AND OR ALL THE INTELLECTUAL PROPERTY ON THE WEBSITE WEBSITE MAY HAVE BEEN TRADEMARKED OR COPYRIGHTED BY THE WEBSITE AND OR ANY OTHER SUCH PERSON AND ANY USE, MISUSE OR MANIPULATIONS THAT MAY BE IN RELATION TO THE INTELLECTUAL PROPERTY SHALL BE THE RESPONSIBILITY OF THE VENDOR. HOWEVER, WHEN BROUGHT TO THE NOTICE OF THE WEBSITE, THERE SHALL BE IMMEDIATE LEGAL ACTION TAKEN.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " THE WEBSITE BEARS NO RESPONSIBILITY WHATSOEVER FOR ANY CONSEQUENCES ARISING FROM THE USE OF THE SAID SERVICES BY VENDORS. THE USE OF THE SERVICES IN THE WEBSITE IS THE SOLE RESPONSIBILITY OF THE VENDOR(OR LEGALLY AUTHORISED PERSON ON BEHALF OF THE VENDOR), AND IN CASE OF ANY NEGLIGENCE ON THE PART OF THE VENDOR IN ACTING ON THE SAME SHALL NOT BE CONSTRUED AS IMPOSING ANY LIABILITY, DIRECT OR INDIRECT, ON THE WEBSITE/WEBSITE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " THE WEBSITE SHALL DISCLAIM ALL RESPONSIBILITY AND OWNS NO LIABILITY TO VENDORS FOR ANY OUTCOME (INCIDENTAL, DIRECT, INDIRECT OR OTHERWISE) FROM THE USE OF THE SERVICES. IN NO EVENT WILL THE WEBSITE BE LIABLE FOR ANY LOSS OR DAMAGE INCLUDING WITHOUT LIMITATION, INDIRECT OR CONSEQUENTIAL LOSS OR DAMAGE, OR ANY LOSS OR DAMAGE WHATSOEVER ARISING FROM LOSS OF DATA OR PROFITS ARISING OUT OF, OR IN CONNECTION WITH, THE USE OF THE WEBSITE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " THROUGH THIS WEBSITE, YOU MAY ABLE TO LINK TO OTHER WEBSITES WHICH ARE NOT UNDER THE CONTROL OF THE WEBSITE. WE HAVE NO CONTROL OVER NATURE, CONTENT AND AVAILABILITY OF THOSE SITES. THE INCLUSION OF ANY LINKS DOES NOT NECESSARILY IMPLY A RECOMMENDATION OR ENDORSE THE VIEWS EXPRESSED WITHIN THEM. EVERY EFFORT IS MADE TO KEEP THE WEBSITE UP AND RUNNING SMOOTHLY. HOWEVER, THE WEBSITE TAKES NO RESPONSIBILITY FOR, AND WILL NOT BE LIABLE FOR, THE WEBSITE BEING TEMPORARILY UNAVAILABLE DUE TO TECHNICAL ISSUES BEYOND OUR CONTROL. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE WILL HAVE NO LIABILITY RELATED TO VENDOR CONTENT ARISING UNDER INTELLECTUAL PROPERTY RIGHTS, LIBEL, PRIVACY, PUBLICITY, OBSCENITY OR OTHER LAWS. WEBSITE ALSO DISCLAIMS ALL LIABILITY WITH RESPECT TO THE MISUSE, LOSS, MODIFICATION OR UNAVAILABILITY OF ANY VENDOR CONTENT. THE VENDOR UNDERSTANDS AND AGREES THAT ANY MATERIAL OR DATA DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE WEBSITE IS DONE ENTIRELY AT HIS/HER OWN DISCRETION AND RISK AND HE/SHE WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO HIS/HER COMPUTER SYSTEMS OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL OR DATA. WE ARE NOT RESPONSIBLE FOR ANY TYPOGRAPHICAL ERROR LEADING TO AN INVALID COUPON. WEBSITE ACCEPTS NO LIABILITY FOR ANY ERRORS OR OMISSIONS, WITH RESPECT TO ANY INFORMATION PROVIDED TO YOU WHETHER ON BEHALF OF ITSELF OR THIRD PARTIES.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " YOU AGREE THAT YOUR USE OF THE WEBSITE AND USE OF THE SERVICES GIVEN BY THE WEBSITE SHALL BE AT YOUR OWN RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, AND HOFETO AND ITS OFFICERS, MANAGERS, MEMBERS, DIRECTORS, EMPLOYEES, SUCCESSORS, ASSIGNS, SUBSIDIARIES, AFFILIATES, SERVICE PROFESSIONALS, SUPPLIERS, AND AGENTS DISCLAIM ALL WARRANTIES, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, AND MAKE NO WARRANTIES, REPRESENTATIONS, OR GUARANTEES IN CONNECTION WITH THIS WEBSITE, THE SERVICES OFFERED ON OR THROUGH THIS WEBSITE, ANY DATA, MATERIALS, SUBMITTED CONTENT, RELATING TO THE QUALITY, SUITABILITY, TRUTH, ACCURACY OR COMPLETENESS OF ANY INFORMATION OR MATERIAL CONTAINED OR PRESENTED ON THIS WEBSITE, INCLUDING WITHOUT LIMITATION THE MATERIALS, DATA AND SUBMITTED CONTENT OF OTHER VENDORS OF THIS SITE OR OTHER THIRD PARTIES. UNLESS OTHERWISE EXPLICITLY STATED, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THIS WEBSITE, THE SERVICES OFFERED ON OR THROUGH THIS WEBSITE, DATA, MATERIALS, SUBMITTED CONTENT, AND ANY INFORMATION OR MATERIAL CONTAINED OR PRESENTED ON THIS WEBSITE IS PROVIDED TO YOU ON AN \"AS IS,\" \"AS AVAILABLE\" AND \"WHERE-IS\" BASIS WITH, NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\nWEBSITE DOES NOT PROVIDE ANY WARRANTIES AGAINST ERRORS, MISTAKES, OR INACCURACIES OF DATA, CONTENT, INFORMATION, MATERIALS, SUBSTANCE OF THE WEBSITE OR SUBMITTED CONTENT, ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE WEBSITE BY ANY THIRD PARTY, ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE WEBSITE, ANY DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY OR SERVICE VENDOR OR SERVICE PROVIDER, OR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY DATA, CONTENT, INFORMATION, MATERIALS, SUBSTANCE OF THE WEBSITE OR SUBMITTED CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE WEBSITE. WEBSITE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY PARTY, INCLUDING THIRD PARTY SERVICE PROFESSIONALS OF PRODUCTS OR SERVICES. AS WITH THE USE OF ANY PRODUCT OR SERVICE, AND THE PUBLISHING OR POSTING OF ANY MATERIAL THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdC1jb21wb25lbnRzL2Rpc2NsYWltZXIvZGlzY2xhaW1lci5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisclaimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'disclaimer-policy',
                templateUrl: './disclaimer.component.html',
                styleUrls: ['./disclaimer.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pt-components/not-found/not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/pt-components/not-found/not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-not-found"]], decls: 12, vars: 4, consts: [[1, "error_page"], [1, "not_found"], ["href", "javascript:", 3, "routerLink"], ["src", "../../../../assets/logo_original.svg", "alt", "", 1, "error_logo"], ["src", "../.././../../assets/404.svg", "alt", "", 1, "error_img"], [1, "error_content"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Oops! You\u2019re lost...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The page you are looking for might have been moved, renamed, or might never have existed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Go Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".error_page {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.error_page .error_logo {\n  height: 32px;\n  margin-bottom: 50px;\n}\n.error_page .error_img {\n  height: 40vh;\n  margin-bottom: 30px;\n}\n.error_page .error_content {\n  width: 50%;\n  margin: 0 auto;\n}\n.error_page .error_content a {\n  padding: 8px 20px;\n  background-color: #F47624;\n  color: #ffffff;\n  border-radius: 20px;\n}\n@media (max-width: 992px) {\n  .error_page .error_content {\n    width: 85%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3B0LWNvbXBvbmVudHMvbm90LWZvdW5kL0Q6XFxXb3Jrc3BhY2VcXGFydGlhcmEtbmctYXBwLW5ldy9zcmNcXGFwcFxcc2hhcmVkXFxwdC1jb21wb25lbnRzXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvc2hhcmVkL3B0LWNvbXBvbmVudHMvbm90LWZvdW5kL0Q6XFxXb3Jrc3BhY2VcXGFydGlhcmEtbmctYXBwLW5ldy9zcmNcXHN0eWxlc1xcX21peGlucy5zYXNzIiwic3JjL2FwcC9zaGFyZWQvcHQtY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaGFyZWQvcHQtY29tcG9uZW50cy9ub3QtZm91bmQvRDpcXFdvcmtzcGFjZVxcYXJ0aWFyYS1uZy1hcHAtbmV3L3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQ0hBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JEQ3FCO0VBQ3JCLGtCQUFBO0FFQ0o7QUZBSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBRUVSO0FGREk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUVHUjtBRkZJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUVJUjtBRkhRO0VBQ0ksaUJBQUE7RUFDQSx5QkduQkk7RUhvQkosY0dqQkk7RUhrQkosbUJBQUE7QUVLWjtBRkZBO0VBQ0k7SUFDSSxVQUFBO0VFS047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdC1jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcycgXHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zJyBcclxuXHJcbi5lcnJvcl9wYWdlXHJcbiAgICB3aWR0aDogMTAwdndcclxuICAgIGhlaWdodDogMTAwdmhcclxuICAgIEBpbmNsdWRlIGZsZXhfY2VudGVyKGNvbHVtbilcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgLmVycm9yX2xvZ29cclxuICAgICAgICBoZWlnaHQ6IDMycHhcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4XHJcbiAgICAuZXJyb3JfaW1nXHJcbiAgICAgICAgaGVpZ2h0OiA0MHZoXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweFxyXG4gICAgLmVycm9yX2NvbnRlbnRcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG9cclxuICAgICAgICBhXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGVcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweFxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkgXHJcbiAgICAuZXJyb3JfcGFnZSAuZXJyb3JfY29udGVudFxyXG4gICAgICAgIHdpZHRoOiA4NSUiLCJcclxuPWZsZXhfY2VudGVyKCRkaXJlY3Rpb24pXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb25cclxuXHJcbj1maXhlZF9mdWxsKClcclxuICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgd2lkdGg6IDEwMHZ3XHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbiAgICB0b3A6IDBcclxuICAgIGxlZnQ6IDBcclxuXHJcbj1wb3NpdGlvbl9jZW50ZXIoKVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB0b3A6IDUwJVxyXG4gICAgbGVmdDogNTAlXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxyXG4gICAgIiwiLmVycm9yX3BhZ2Uge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXJyb3JfcGFnZSAuZXJyb3JfbG9nbyB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5lcnJvcl9wYWdlIC5lcnJvcl9pbWcge1xuICBoZWlnaHQ6IDQwdmg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZXJyb3JfcGFnZSAuZXJyb3JfY29udGVudCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmVycm9yX3BhZ2UgLmVycm9yX2NvbnRlbnQgYSB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ3NjI0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5lcnJvcl9wYWdlIC5lcnJvcl9jb250ZW50IHtcbiAgICB3aWR0aDogODUlO1xuICB9XG59IiwiJHByaW1hcnk6ICAgICAgICNGNDc2MjQ7XHJcbiRwcmltYXJ5LWxpZ2h0OiAjRkZCMjM4O1xyXG4kdGV4dDogICAgICAgICAgIzMzMzMzMztcclxuJHdoaXRlOiAgICAgICAgICNmZmZmZmY7XHJcbiRibGFjay1iZzogICAgICAjMjMyNTI4O1xyXG4kZ3JleTogICAgICAgICAgI2ExYTFhMTtcclxuJGdyZXktYmc6ICAgICAgICNmOGY5ZmE7XHJcbiR3YXJuaW5nOiAgICAgICAjZTBhODA1OyBcclxuXHJcbi8vIHNvY2lhbCBtZWRpYSBjb2xvcnNcclxuJGZhY2Vib29rIDogIzQyNjdCMjtcclxuJGdvb2dsZSAgIDogI0RCNDQzNztcclxuJHR3aXR0ZXIgIDogIzFEQTFGMjtcclxuXHJcbiR0aGVtZS1jb2xvcnM6IChcclxuICBwcmltYXJ5OiAgJHByaW1hcnksXHJcbiAgd2FybmluZzogICR3YXJuaW5nLFxyXG4gIGRhcms6ICAgICAkYmxhY2stYmdcclxuKTtcclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDQ4MHB4LFxyXG4gIG1kOiA1NzZweCxcclxuICBsZzogNzY5cHgsXHJcbiAgeGw6IDEyMDBweCxcclxuKTtcclxuXHJcblxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.sass'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pt-components/privacy-policy/privacy-policy.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/pt-components/privacy-policy/privacy-policy.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 129, vars: 0, consts: [[1, "row", 2, "font-family", "Times New Roman"], [2, "text-align", "center", "font-family", "Times New Roman"], [2, "font-family", "Times New Roman"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PRIVACY POLICY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Welcome to Artiara\u2019s Privacy Policy for Website. This Website is created and operated by Artiara having its address at \"Chandanagar, Hyderabad.\u201D hereinafter referred to as the \u201CArtiara\u201D.This legal agreement is an electronic record in terms of Indian Information Technology Act, 2000 and rules there under as applicable and the amended provisions about electronic records in various statutes as amended by the Indian Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " This legal document is published in accordance with the provisions of Rule 3 (1) of the Indian Information Technology (Intermediaries guidelines) Rules, 2011 and Rule 4 of the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 of Information Technology Act, 2000 amended through Information Technology Amendment Act, 2008 that require publishing the Terms of Services and practices for access or usage of https://www.artiara.in (\u201CWebsite\u201D)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " The creator of this Privacy Policy ensures a steady commitment to Your privacy with regard to the protection of your invaluable information that you may share across on this Website. This privacy policy contains information about the Website https://artiara.in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " To provide You with Our uninterrupted use of the Website, We may collect and, in some circumstances, disclose information about you with your permission. To ensure better protection of Your privacy, We provide this notice explaining Our information collection and disclosure policies, and the choices You make about the way Your information is collected and used.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "a. This Privacy Policy shall be in compliance with the General Data Protection Regulation (GDPR) in effect from May 25, 2018, and any and all provisions that may read to the contrary shall be deemed to be void and unenforceable as of that date. If you do not agree with the terms and conditions of our Privacy Policy, including in relation to the manner of collection or use of your information, please do not use or access the Site. If you have any questions or concerns regarding this Privacy Policy, you should contact our Customer Support Desk at support@artiara.in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " ANY CAPITALIZED WORDS USED HENCEFORTH SHALL HAVE THE MEANING ACCORDED TO THEM UNDER THIS AGREEMENT. FURTHER, ALL HEADING USED HEREIN ARE ONLY FOR THE PURPOSE OF ARRANGING THE VARIOUS PROVISIONS OF THE AGREEMENT IN ANY MANNER. NEITHER THE USER NOR THE CREATORS OF THIS PRIVACY POLICY MAY USE THE HEADING TO INTERPRET THE PROVISIONS CONTAINED WITHIN IT IN ANY MANNER. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "INFORMATION WE COLLECT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " We are committed to respecting Your online privacy. We further recognize Your need for appropriate protection and management of any Personal Information You share with us. We may collect the following information: a. Personal data including but not limited to Name, Email Id, City, State and Password. b. Tracking Information such as, but not limited to the IP address of your device and Device ID when connected to the Internet. This information may include the URL that you just came from (whether this URL is on the Website or not), which URL you next go to (whether this URL is on the Website or not), your computer or device browser information, and other information associated with your interaction with the Website; c. Details of Website usage for analytics. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " This privacy policy also applies to data we collect from users who are not registered as members of this Website, including, but not limited to, browsing behaviour, pages viewed etc. We also collect and store personal information provided by You from time to time on the Website. We only collect and use such information from you that we consider necessary for achieving a seamless, efficient and safe experience, customized to your needs including: a. To enable the provision of services opted for by you; b. To enable the viewing of content in your interest; c. To communicate the necessary account and service-related information from time to time; d. To allow you to receive quality customer care services and data Collection; e. To comply with applicable laws, rules and regulations; b. Where any service requested by You involves a third party, such information as is reasonably necessary by the Company to carry out Your service request may be shared with such third party. We also do use your contact information to send you offers based on your interests and prior activity and also to view the content preferred by you. The Company may also use contact information internally to direct its efforts for service improvement but shall immediately delete all such information upon withdrawal of your consent for the same through the \u2018unsubscribe\u2019 button or through an email to be sent to support@artiara.in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " To the extent possible, we provide You with the option of not divulging any specific information that you wish for us not to collect, store or use. You may also choose not to use a particular service or feature on the Website and opt-out of any non-essential communications from the Website. Further, transacting over the internet has inherent risks which can only be avoided by you following security practices yourself, such as not revealing account/login related information to any other person and informing our customer care team about any suspicious activity or where your account has/may have been compromised.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 2. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "OUR USE OF YOUR INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " The information provided by you shall be used to provide and improve the service for you and all users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " a. To provide you with services on your request. b. For maintaining an internal record. c. For enhancing the Services provided. d. For maintaining record under the legal and statutory provisions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " For more details about the nature of such communications, please refer to our Terms of Service. Further, your data and Sensitive Personal data may be collected and stored by Us for internal record. We use Your tracking information such as IP addresses, and or Device ID to help identify you and to gather broad demographic information and make further services available to you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " We will not sell, license or trade Your personal information. We will not share your personal information with others unless they are acting under our instructions or we are required to do so by law.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Information collected via Our server logs includes users' IP addresses and the pages visited; this will be used to manage the web system and troubleshoot problems. We also use third-party analytics, tracking, optimization and targeting tools to understand how users engage with our Website so that we can improve it and cater personalized content/ads according to their preferences. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " HOW INFORMATION IS COLLECTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Before or at the time of collecting personal information, we will identify the purposes for which information is being collected. If the same is not identified to you, you have the right to request the Company to elucidate the purpose of collection of said personal information, pending the fulfilment of which you shall not be mandated to disclose any information whatsoever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " We will collect and use your personal information solely to fulfil those purposes specified by us, within the scope of the consent of the individual concerned or as required by law. We will only retain personal information as long as necessary for the fulfilment of those purposes. We will collect personal information by lawful and fair means and with the knowledge and consent of the individual concerned. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "EXTERNAL LINKS ON THE WEBSITE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " The Website may include advertisements, hyperlinks to other Websites or resources. We have no control over any other website or resources or contents available on these other websites, which are provided by companies or persons other than Us. You acknowledge and agree that we are not responsible for the availability of any such external sites or resources, and do not endorse any advertising, services/services or other materials on or available from such Website or resources. You acknowledge and agree that We are not liable for any loss or damage which may be incurred by you as a result of the availability of those external sites or resources, or as a result of any reliance placed by you on the completeness, accuracy or existence of any advertising, services or other materials on, or available from, such Websites. These external third party websites and resource providers may have their privacy policies governing the collection, storage, retention and disclosure of Your Personal Information that You may be subject to. We recommend that you enter the Website and review their privacy policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " YOUR RIGHTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Unless subject to an exemption, you have the following rights concerning your data: a. The right to request a copy of your data which we hold about you; b. The right to request for any correction to any personal data if it is found to be inaccurate or out of date; c. The right to withdraw Your consent to the processing at any time; d. The right to object to the processing of personal data; e. The right to complain about a supervisory authority. f. The right to obtain information as to whether personal data are transferred to a third country or an international organization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Where you hold an account with any of our services, you are entitled to a copy of all personal data which we hold concerning you. You are also entitled to request that we restrict how we use your data in your account when you log in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 6. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "CONFIDENTIALITY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " You further acknowledge that the Website may contain information which is designated confidential by us and that you shall not disclose such information without our prior written consent. Your information is regarded as confidential and therefore will not be divulged to any third party, unless if legally required to do so to the appropriate authorities. We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by us will only be in connection with the provision of agreed services, and you retain sole discretion to seek for discontinuation of such communications at any point of time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " 7.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " OTHER INFORMATION COLLECTORS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Except as otherwise expressly included in this Privacy Policy, this document only addresses the use and disclosure of information we collect from you. To the extent that you disclose your information to other parties, whether they are on our Website or other sites throughout the Internet, different rules may apply to their use or disclosure of the information you disclose to them. To the extent that we use third party advertisers, they adhere to their privacy policies. Since we do not control the privacy policies of the third parties, you are subject to ask questions before you disclose your personal information to others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " 8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "OUR DISCLOSURE OF YOUR INFORMATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " We may host surveys for survey creators for our Website who are the owners and users of your survey responses. We do not own or sell your responses. Anything you expressly disclose in your responses will be disclosed to survey creators. Please contact the survey creator directly to better understand how they might share your survey responses. Information collected will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005, any rules made thereunder or any other law for the time being in force. Due to the existing regulatory environment, we cannot ensure that all of your private communications and other personally identifiable information will never be disclosed in ways not otherwise described in this Privacy Policy. By way of example (without limiting and foregoing), we may be forced to disclose information to the government, law enforcement agencies or third parties. Therefore, although we use industry-standard practices to protect your privacy, we do not promise, and you should not expect, that your personally identifiable information or private communications would always remain private. We do however assure you that any disclosure of your personally identifiable information shall be personally intimated to you through an email sent to your provided email address. As a matter of policy, we do not sell or rent any personally identifiable information about you to any third party. However, the following describes some of the ways that your personally identifiable information may be disclosed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " a. External Service Providers: There may be several services offered by external service providers that help you use our Website. If you choose to use these optional services, and in the course of doing so, disclose information to the external service providers, and/or permit them to collect information about you, then their use of your information is governed by their privacy policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " b. Law and Order: We cooperate with law enforcement inquiries, as well as other third parties to enforce laws, such as intellectual property rights, fraud and other rights. We can (and you authorize us to) disclose any information about you to law enforcement and other government officials as we, in our sole discretion, believe necessary or appropriate, in connection with an investigation of fraud, intellectual property infringements, or other activity that is illegal or may expose us or you to legal liability. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " 9. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "ACCESSING, REVIEWING AND CHANGING YOUR PROFILE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Following registration, you can review and change the information you submitted at the stage of registration, except Email ID. An option for facilitating such change shall be present on the Website and such change shall be facilitated by the User. If you change any information, we may or may not keep track of your old information. We will not retain in our files information you have requested to remove for certain circumstances, such as to resolve disputes, troubleshoot problems and enforce our terms and conditions. Such prior information shall be completely removed from our databases, including stored \u2018back up\u2019 systems. If you believe that any information, we are holding on you is incorrect or incomplete, or to remove your profile so that others cannot view it, the User needs to remediate, and promptly correct any such incorrect information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "10. CONTROL OF YOUR PASSWORD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " You are entirely responsible for maintaining the confidentiality of your password. You must protect it against unauthorized access of your account and information by choosing your password carefully and keeping your password and computer secure by signing out after using our services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " You agree not to use the account, username, email address or password of another Member at any time or to disclose your password to any third party. You are responsible for all actions taken with your login information and password, including fees. If you lose control of your password, you may lose substantial control over your personally identifiable information and may be subject to legally binding actions taken on your behalf. Therefore, if your password has been compromised for any reason, you should immediately change your password. You agree to notify us immediately if you suspect any consistent unauthorized use of your account or access to your password even after changing it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "11. SECURITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " We treat data as an asset that must be protected against loss and unauthorized access. We employ many different security techniques to protect such data from unauthorized access by members inside and outside the Company. We follow generally accepted industry standards to protect the Personal Information submitted to us and information that we have accessed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " However, as effective as encryption technology is, no security system is impenetrable. Our Company cannot guarantee the security of our database, nor can we guarantee that information you provide won\u2019t be intercepted while being transmitted to the Company over the Internet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "12. SEVERABILITY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Each paragraph of this Privacy Policy shall be and remain separate from and independent of and severable from all and any other paragraphs herein except where otherwise expressly indicated or indicated by the context of the agreement. The decision or declaration that one or more of the paragraphs are null and void shall not affect the remaining paragraphs of this privacy policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "13. AMENDMENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Our Privacy Policy may change from time to time. The most current version of the policy will govern our use of your information and will always be at the Website. Any amendments to this Policy shall be deemed as accepted by the User on their continued use of the Website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "14. CONSENT WITHDRAWAL, DATA DOWNLOAD & DATA REMOVAL REQUESTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " c. To withdraw your consent, or to request the download or delete your data with us for any or all our services at any time, please email to support@artiara.in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "15. CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " d. If you have any questions or concerns regarding this privacy policy, you should contact us by sending an e-mail to please email to support@artiara.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdC1jb21wb25lbnRzL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-policy',
                templateUrl: './privacy-policy.component.html',
                styleUrls: ['./privacy-policy.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pt-components/terms-of-use/terms-of-use.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pt-components/terms-of-use/terms-of-use.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TermsOfUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUseComponent", function() { return TermsOfUseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TermsOfUseComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermsOfUseComponent.ɵfac = function TermsOfUseComponent_Factory(t) { return new (t || TermsOfUseComponent)(); };
TermsOfUseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsOfUseComponent, selectors: [["app-terms-of-use"]], decls: 249, vars: 0, consts: [[1, "row"], [2, "text-align", "center", "font-family", "Times New Roman"], [2, "font-family", "Times New Roman"]], template: function TermsOfUseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TERMS OF USE OF ARTIARA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Welcome to Artiara \u2019s Terms of Use for Website This Website is created and operated by Artiara having its address at \"Chandanagar, Hyderabad.\u201D hereinafter referred to as the \u201CArtiara\u201D. This legal agreement is an electronic record in terms of Indian Information Technology Act, 2000 and rules there under as applicable and the amended provisions about electronic records in various statutes as amended by the Indian Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This legal document is published in accordance with the provisions of Rule 3 (1) of the Indian Information Technology (Intermediaries guidelines) Rules, 2011 and Rule 4 of the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 of Information Technology Act, 2000 amended through Information Technology Amendment Act, 2008 that require publishing the Terms of Use and practices for access or usage of \u201Chttp://www.artiara.in/\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The creator of these Terms of Use ensures your steady commitment to the usage of the Website and the services provided by the Artiara on the Website \u201Chttp://www.artiara.in/\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " For the purpose of these Terms of Use (\u201CTerms of Use\u201D), wherever the context so requires, \u201CWe\u201D, \u201COur\u201D, and \u201CUs\u201D shall mean and refer to the Website and/or the Artiara, as the context so requires. \u201CYou\u201D, \u201CYour\u201D, \u201CYourself\u201D, \u201CUser\u201D shall mean and refer to natural and legal individuals who shall be Users of this Website provided by the Artiara and who is competent to enter into binding contracts, as per Indian laws. \u201CThird Parties\u201D refer to any Website, Platform or individual apart from the Users and the creator of this Website. \u201CWebsite\u201D refers to the Website created by Artiara.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GENERAL TERMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " i. The headings of each section in these Terms of Use or Privacy Policy are only for the purpose of organizing the various provisions under these Terms of Use and the Privacy Policy in an orderly manner and shall be used by either Party to interpret the provisions contained herein in a manner as may apply to the Users. Further, it is specifically agreed to by the Parties that the headings shall have legal or contractual value on You using the Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ii. The use of this Website by You is solely governed by these Terms of Use, Privacy Policy that may be uploaded on the Website and any modifications or amendments made thereto by Us from time to time, at our sole discretion. If You as a User continue to access and use this Website, You are agreeing to comply with and be bound by the following Terms of Use and Privacy Policy. iii. You expressly agrees and acknowledges that these Terms of Use and Privacy Policy are co-terminus in nature and that expiry/termination of either one will lead to the termination of the other.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " iv. You unequivocally agree that these Terms of Use and the Privacy Policy constitute a legally binding agreement between You and Us, and that You shall be subject to the rules, guidelines, policies, terms, and conditions applicable to your use of the Website, and that the same shall be deemed to be incorporated into these Terms of Use and shall be treated as part and parcel of the same. You acknowledge and agree that no signature or express act is required to make these Terms of Use and the Privacy Policy binding on You and that your act of visiting any part of the Website constitutes the User\u2019s full and final acceptance of these Terms of Use and the Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " v. We reserve the sole and exclusive right to amend or modify these Terms of Use without any prior permission or intimation to You, and You expressly agrees that any such amendments or modifications shall come into effect immediately. If You do not adhere to the changes, You must stop using the Website at once. Your continued use of the Website will signify your acceptance of the changed terms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 2. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "SERVICE OVERVIEW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " The Website is a fashion content aggregator and curator where it provides services of hosting products content from multiple e-commerce websites, making it easy for customers to compare and select products and the customer are redirected to the actual e-commerce website like Amazon , tataCliq, etc. The Website does not sell any products and does not require any payments.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "REGISTRATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " You can register yourself on the Website in order to avail the Website and its services. However, registeration on the Website is not mandatory. You are allowed to upload personal photographs to your profile and also wishlist the products for future reference.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " For the purpose of registration, you shall be required to provide the following information on the registration link available on the homepage of the Website. 1. Name 2. Email Id 3. City 4. State 5. Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " To Register on the Website, you may visit http://www.artiara.com/\u201D. You can also register by linking either of the following social media accounts, Facebook, Google. All registrations on the Website are free of cost and you shall not be charged for any such registration on the Website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ELIGIBILITY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " a) You represent and warrant that you are competent and eligible to enter into legally binding agreements and of age and that you have the requisite authority to bind themselves to these Terms of Use following the Law. However, if you are minor using this Website, you may do so with the consent of your legal guardian. All Acts of minor shall be deemed to be considered as the acts undertaken under the supervision of their legal guardian. b) You further represent that you will comply with these Terms of Use and all applicable local, state, national and international laws, rules and regulations. c) You shall not use the Website if you are not competent to contract or are disqualified from doing so by any other applicable law, rule or regulation currently in force. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 5. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "CONTENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " All text, graphics, User interfaces, visual interfaces, photographs, trademarks, logos, brand names, descriptions, sounds, music and artwork (collectively, \u2018Content\u2019), is generated/provided or based on information provided by the users or third parties and We has no control and make no guarantees regarding the quality, the accuracy, integrity or genuineness of such content or such other information provided on the Website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " All the Content displayed on the Website is subject to copyright and shall not be reused by You (or a third party) without the prior written consent from Us and the copyright owner.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " You are solely responsible for the integrity, authenticity, quality and genuineness of the content provided on the Website and whilst feedback and comments by You can be made via the Website, We bear no liability whatsoever for any feedback or comments made by the other Users or made in respect of any of the content on the Website. Further, the Website reserves its right to suspend the account of any User for an indefinite period to be decided at the discretion of the Website or to terminate the account of any User who is found to have created or shared or submitted any content or part thereof that is found to be untrue/inaccurate/misleading or offensive/vulgar. You shall be solely responsible for making good any financial or legal losses incurred through the creation/sharing/submission of Content or part thereof that is deemed to be untrue/inaccurate/misleading. You have a personal, non-exclusive, non-transferable, revocable, limited privilege to access the content on the Website. You shall not copy, adapt, and modify any content without written permission from Us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 6. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "INDEMNITY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " You agree to indemnify, defend and hold harmless the Us, and our respective directors, officers, employees and agents (collectively, \"Parties\"), from and against any losses, liabilities, claims, damages, demands, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by Us that arise out of, result from, or maybe payable by, any breach or non-performance of any representation, warranty, covenant or agreement made or obligation to be performed according to these ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Terms of Use. Further, You agrees to hold the Us harmless against any claims made by any third party due to, or arising out of, or in connection with: a. Your use of the Website, b. Your violation of these Terms of Use; c. Your violation of any rights of another; d. Your alleged improper conduct according to these Terms of use; e. Your conduct in connection with the Website; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " You agree to fully cooperate in indemnifying Us at your expense. You also agree not to settle with any party without the consent from Us. In no event shall we be liable to compensate You or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever, including those resulting from loss of use, data or profits, whether or not foreseeable, and whether or not You had been advised of the possibility of such damages, or based on any theory of liability, including breach of contract or warranty, negligence or other tortuous action, or any other claim arising out of or in connection with the Your use of or access to the Website and/or the Services or materials contained therein.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "7. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "LIMITATION OF LIABILITY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " a. The Founders/ Promoters/ Partners/ Associated people of Artiara are not responsible for any consequences arising out of the following events: i. If the Website is inoperative/non-responsive due to any connectivity errors associated with the internet connection such as but not limited to slow connectivity, no connectivity, server failure; ii. If you have fed incorrect information or data or for any deletion of data; iii. If there is an undue delay or inability to communicate through email; iv. If there is any deficiency or defect in the Services managed by Us; v. If there is a failure in the functioning of any other service provided by Us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " b. The Website accepts no liability for any errors or omissions, on behalf of itself, or for any damage caused to You, Your belongings, or any third party, resulting from the use or misuse of the Website or any service availed of by Us through the Website. The service and any Content or material displayed on the service is provided without any guarantees, conditions or warranties as to its accuracy, suitability, completeness or reliability. We will not be liable to you for the unavailability or failure of the Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " c. You are to comply with all laws applicable to you or your activities, and with all Policies, which are hereby incorporated into this Terms of Use by reference.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " d. The Website expressly excludes any liability for any loss or damage that was not reasonably foreseeable by the Website and which is incurred by you in connection with the Website, including loss of profits; and any loss or damage incurred by you as a result of your breach of these Terms of Use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " e. To the fullest extent permitted by law, We shall not be liable to You or any other party for any loss or damage, regardless of the form of action or basis of any claim. You acknowledge and agree that your sole and exclusive remedy for any dispute with us is to terminate your use of the Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " 8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "TERM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " a. These Terms of Use shall continue to form a valid and binding contract between You and Us and shall continue to be in full force and effect until You continues to access and use the Websites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " b. You may terminate your use of the Website at any time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " c. We may terminate these Terms of Use and close your account at any time without notice and/or suspend or terminate Your access to the Website at any time and for any reason, if any discrepancy or legal issue arises.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " d. Such suspension or termination shall not limit our right to take any other action against you that we consider appropriate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " e. It is also hereby declared that We may discontinue the Services and Websites without any prior notice.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 9. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "TERMINATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " a. We reserve the right, in its sole discretion, to unilaterally terminate Your access to the Website, or any portion thereof, at any time, without notice or cause.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " b. We also reserve the universal right to deny access to You, to any/all of are on its Website without any prior notice/explanation to protect the interests of the Website and/or other Users to the Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " c. We reserve the right to limit, deny or create different access to the Website and its features concerning different Users, or to change any of the features or introduce new features without prior notice.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " d. You shall continue to be bound by these Terms of use, and it is expressly agreed to by You that You shall not have the right to terminate these Terms of Use till the expiry of the same.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " 10. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "COMMUNICATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " By using this Website and providing Your identity and contact information to Us through the Website, You agree and consent to receive calls, e-mails or SMS from Us and/or any of its representatives at any time. You can report to \u201C support@artiara.in \u201D if you find any discrepancy with regard to Website or content-related information and We will take necessary action after an investigation. The response with resolution (if any issues found) shall be dependent on the time is taken for investigation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " You expressly agree that notwithstanding anything contained hereinabove, it may be contacted by Us relating to any services availed by You on the Website or anything pursuant thereto and You agree to indemnify Us from any harassment claims. It is expressly agreed to by Us that any information shared by Us shall be governed by the Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " 11. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "USER OBLIGATIONS AND FORMAL UNDERTAKINGS AS TO CONDUCT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " You agree and acknowledges that you are a restricted user of this Website and you:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " a. Agree to provide genuine credentials during the process of registration on the Website. You shall not use a fictitious identity to register. We are not liable if You have provided incorrect information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " b. Agree to ensure the Name, Email address, Address, and any such other information provided during account registration is valid at all times and shall keep your information accurate and up-to-date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " c. You agree that You are solely responsible for maintaining the confidentiality of your account password. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to close your account at any time for any or no reason.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " d. Understand and acknowledge that the data submitted is manually entered into the database of the Website. You also acknowledge the fact that data so entered into the database is for easy and ready reference for You, and to streamline the Services through the Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " e. Authorize the Website to use, store or otherwise process certain personal information and all published Content, responses, locations, User comments, reviews and ratings for personalization of Services, marketing and promotional purposes and for optimisation of User-related options and Services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " f. Understand and agree that, to the fullest extent permissible by law, the Website or any of their affiliates or their respective officers, directors, employees, agents, licensors, representatives, operational service providers, advertisers or suppliers shall not be liable for any loss or damage, of any kind, direct or indirect, in connection with or arising from the use of the Website or this terms of use, including, but not limited to, compensatory, consequential, incidental, indirect, special or punitive damages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " g. Are bound not to cut, copy, modify, recreate, reverse engineer, distribute, disseminate, post, publish or create derivative works from, transfer, or sell any information or obtained from the Website. Any such use/limited use of the Website will only be allowed with the prior express written permission.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " h. Agree not to access (or attempt to access) the Website and/or the materials or Services by any means other than through the interface provided by the Website. The use of deep-link, robot, spider or other automatic devices, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Website or its content, or in any way reproduce or circumvent the navigational structure or presentation of the Website, materials or any content, or to obtain or attempt to obtain any materials, documents or information through any means not specifically made available through the Website will lead to suspension or termination of your access to the Website. We disclaim any liabilities arising concerning such offensive content on the Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " i. Expressly agree and acknowledge that the Content generated by the Users and displayed on the Website is not owned by Us and that We are in no way responsible for the content of the same. You may, however, report any offensive or objectionable content, which We may then remove from the Website, at our sole discretion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " You further undertake not to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " a. Engage in any activity that interferes with or disrupts access to the Website or the Services provided therein (or the servers and networks which are connected to the Website);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " b. Impersonate any person or entity, or falsely state or otherwise misrepresent his/her affiliation with a person or entity;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " c. Probe, scan or test the vulnerability of the Website or any network connected to the Website, nor breach the security or authentication measures on the Website or any network connected to the Website. The User may not reverse look-up, trace or seek to trace any information relating to any other User of, or visitor to, the Website, or any other viewer of the Website, including any User account maintained on the Website not operated/managed by the User, or exploit the Website or information made available or offered by or through the Website, in any manner;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " d. Disrupt or interfere with the security of, or otherwise cause harm to, the Website, systems resources, accounts, passwords, servers, or networks connected to or accessible through the Website or any affiliated or linked Websites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " e. Use the Website or any material or content therein for any purpose that is unlawful or prohibited by these Terms of Use, or to solicit the performance of any illegal activity or other activity which infringes the rights of this Website or any other third party (s);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " f. Violate any code of conduct or guideline which may apply for or to any particular service offered on the Website;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " g. Violate any applicable laws, rules or regulations currently in force within or outside India;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " h. Violate any portion of these Terms of Use or the Privacy Policy, including but not limited to any applicable additional terms of the Website contained herein or elsewhere, whether made by amendment, modification, or otherwise;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " i. Commit any act that causes Us to lose (in whole or in part) the Services of its Internet Establishment (\"ISP\") or in any manner disrupts the Services of any other supplier/service provider of the Website; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Further: j. You hereby expressly authorize Us to disclose any and all information relating to You in our possession to law enforcement or other government officials, as We may in our sole discretion, believe necessary or appropriate in connection with the investigation and/or resolution of possible crimes, especially those involve personal injury and theft/infringement of intellectual property. You further understand that the Website might be directed to disclose any information (including the identity of persons providing information or materials on the Website) as necessary to satisfy any judicial Order, law, regulation or valid governmental request. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " k. You agree to use the services provided by Us, our affiliates, consultants and contracted companies, for lawful purposes only. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " l. You agree to provide authentic and true information. We reserve the right to confirm and validate the information and other details provided by You at any point in time. If upon confirmation such details are found to be false, not to be true (wholly or partly), We shall in our sole discretion reject the registration and debar You from using the Website without prior intimation whatsoever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " m. You agree not to post any material on the Website that is defamatory, offensive, obscene, indecent, abusive, or needlessly distressful or advertising any goods or services. More specifically, You agree not to host, display, upload, update, publish, modify, transmit, or in any manner share any information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " that: i. belongs to another person and to which you have no right to; ii. is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " unlawful in any manner whatever;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " iii. is in any way harmful to minors; iv. infringes any patent, trademark, copyright or other proprietary rights;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " v. violates any law for the time being in force; vi. deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " vii. Abuse, harass, threaten, defame, disillusion, erode, abrogate, demean or otherwise violate the legal rights of others; viii. Impersonate any person or entity, or falsely state or otherwise misrepresent Your affiliation with a person or entity;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " ix. Publish, post, disseminate, any grossly harmful information, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever; or unlawfully threatening or unlawfully harassing including but not limited to \"indecent representation of women\" within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " x. Threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "12. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "SUSPENSION OF USER ACCESS AND ACTIVITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Notwithstanding other legal remedies that may be available, we may in our sole discretion, limit the You access and/or activity by immediately removing your access credentials either temporarily or indefinitely, or suspend/terminate your association with the Website, and/or refuse to the usage of the Website, without being required to provide you with notice or cause: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " a. If you are in breach any of these Terms of Use or the Privacy Policy; b. If you have provided wrong, inaccurate, incomplete or incorrect information; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " c. If your actions may cause any harm, damage or loss to the other Users or Us, at our sole discretion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " 13. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "INTELLECTUAL PROPERTY RIGHTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Unless expressly agreed to in writing, nothing contained herein shall give You a right to use any of the Website\u2019s trade names, trademarks, service marks, logos, domain names, information, questions, answers, solutions, reports and other distinctive brand features, save according to the provisions of these Terms of Use. All logos, trademarks, brand names, service marks, domain names, including material, designs, and graphics created by and developed by the Website and other distinctive brand features of the Website are the property of the Website or the respective copyright or trademark owner. Furthermore, concerning the Website, we shall be the exclusive owner of all the designs, graphics and the like, related to the Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " You shall not use any of the intellectual property displayed on the Website in any manner that is likely to cause confusion among existing or prospective Users of the Website, or that in any manner disparages or discredits the Website, to be determined in the sole discretion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " You are aware all intellectual property, including but not limited to copyrights, relating to said services resides with the owners, and that at no point does any such intellectual property stand transferred from the aforementioned creators. You are aware that we merely provide the Website through which the You can communicate with other users and the Website does not own any of the intellectual property relating to the independent content displayed on the Website, apart from created graphics and specified content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " You are further aware that any reproduction or infringement of the intellectual property of the aforementioned owners by You will result in legal action being initiated against You by the respective owners of the intellectual property so reproduced/infringed upon. It is agreed to by You that the contents of this Section shall survive even after the termination or expiry of these Terms of Use and/or Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " 14. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "DISCLAIMER OF WARRANTIES AND LIABILITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " a. You further agree and undertake that you are accessing the Website at your sole risk and are that you are using the best and prudent judgment before availing any features on the Website or accessing/using any information displayed thereon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " b. You agree that any kind of information, resources, activities, recommendations obtained/availed from Website, written or oral, will not create any warranty and we disclaim all liabilities resulting from these. c. We do not guarantee that the features and content contained in the Website will be uninterrupted or error-free, or that the Website or its server will be free of viruses or other harmful components, and You hereby expressly accepts any associated risks involved with your use of the Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " d. It is further agreed to by You that the contents of this Section shall survive even after the termination or expiry of the Terms of Use and/or Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " 15. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "FORCE MAJEURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " We will not be liable for damages for any delay or failure to perform our obligations hereunder if such delay or failure is due to cause beyond our control or without its fault or negligence, due to Force Majeure events including but not limited to acts of war, acts of God, earthquake, riot, fire, festive activities sabotage, labour shortage or dispute, internet interruption, technical failure, breakage of sea cable, hacking, piracy, cheating, illegal or unauthorized.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " 16. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "DISPUTE RESOLUTION AND JURISDICTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " It is expressly agreed to by You hereto that the formation, interpretation, and performance of these Terms of Use and any disputes arising therefrom will be resolved through Arbitration. It is further agreed to by You that the contents of this Section shall survive even after the termination or expiry of the Terms of Use and/or Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Arbitration: In the event that the Parties are unable to amicably resolve a dispute, the said dispute will be referred to arbitration by a sole arbitrator to be appointed by Us, and the award passed by such sole arbitrator will be valid and binding on all parties. All cost of the Arbitration shall be borne solely in accordance with the Arbitrators award. The arbitration shall be conducted in English, and the seat of Arbitration shall be the city of Hyderabad, Telegana, India. You expressly agree that the Terms of Use, Privacy Policy and any other agreements entered into between the Parties are governed by the laws, rules, and regulations of India.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " 17. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "MISCELLANEOUS PROVISIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " a. Entire Agreement: These Terms of Use, read with the Privacy Policy, form the complete and final contract between the You and Us with respect to the subject matter hereof and supersedes all other communications, representations, and agreements (whether oral, written or otherwise) relating thereto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " b. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Waiver:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " The failure of either Party at any time to require performance of any provision of these Terms of Use shall in no manner affect such Party's right at a later time to enforce the same. No waiver by either party of any breach of these Terms of Use, whether by conduct or otherwise, in any one or more instances, shall be deemed to be or construed as a further or continuing waiver of any such breach, or a waiver of any other breach of these Terms of Use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " c. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Severability:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " If any provision/clause of these Terms of Use is held to be invalid, illegal or unenforceable by any court or authority of competent jurisdiction, the validity, legality, and enforceability of the remaining provisions/clauses of these Terms of Use shall in no way be affected or impaired thereby, and each such provision/clause of these Terms of Use shall be valid and enforceable to the fullest extent permitted by law. In such case, these Terms of Use shall be reformed to the minimum extent necessary to correct any invalidity, illegality or unenforceability, while preserving to the maximum extent the original rights, intentions and commercial expectations of the Parties hereto, as expressed herein.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " d. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Contact Us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " If you have any questions about these Terms of Use or the Privacy Policy, the practices of the Website, or your experience, you can contact us at \u00A0 support@artiara.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdC1jb21wb25lbnRzL3Rlcm1zLW9mLXVzZS90ZXJtcy1vZi11c2UuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsOfUseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms-of-use',
                templateUrl: './terms-of-use.component.html',
                styleUrls: ['./terms-of-use.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/section/section.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/section/section.ts ***!
  \*******************************************/
/*! exports provided: userProfileSections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfileSections", function() { return userProfileSections; });
const userProfileSections = [
    { title: 'Profile', route: 'profile', active: true, icon: 'fa fa-user' },
    { title: 'Wishlist', route: 'wishlist', active: false, icon: 'fa fa-heart' }
    // { title: 'Style Preferences', route: 'defaultstore', active: false, icon: 'fa fa-route' },
];


/***/ }),

/***/ "./src/app/shared/section/sectioned-components.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/section/sectioned-components.ts ***!
  \********************************************************/
/*! exports provided: SectionedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionedComponent", function() { return SectionedComponent; });
/**
 * Base class for any UI component that needs to offer section based navigation (the left-hand side vertical menu for splitting the page
 * into sections)
 */
class SectionedComponent {
    // after user refresh it will active the same tab by finding the index form url path.
    refreshSections(sections) {
        this.sections = sections;
        this.inactivateAllSections();
        this.sections[this.getSelectedSectionIndex()].active = true;
    }
    // to active one tab at a time this method will inactive all tabs.
    inactivateAllSections() {
        this.sections.forEach(section => {
            section.active = false;
        });
    }
    /**
     * Extract the index of the selected section (in the sections array) based on its name component in the active route
     * @returns {number}
     */
    getSelectedSectionIndex() {
        let tabName = this.getActiveSectionName().toLowerCase();
        // let index = _.findIndex(this.tabs, chr => chr.route.toLowerCase() === tabName);
        let index = this.sections.findIndex(function (chr) {
            return chr.route.toLowerCase() === tabName;
        });
        return (index > 0) ? index : 0;
    }
    // this fetch the section name from url string.
    // as it is not part of param se we have got it by splitting the url.
    // the position of the tabName will remain same.for each tab.
    getActiveSectionName() {
        this.urlPath = location.pathname;
        let urlArray = this.urlPath.split('/');
        return urlArray[urlArray.length - 1];
    }
    setActiveSection(index) {
        this.inactivateAllSections();
        this.sections[index].active = true;
    }
}


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
const environment = {
    production: false,
    environmentName: 'NA',
    development: false,
    //host: 'https://www.artiara.in:4500/'
    host: 'https://artiara-api-github.el.r.appspot.com'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




// if (environment.production) {
//   enableProdMode();
// }
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
else if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].development) {
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\artiara-ng-app-new\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map