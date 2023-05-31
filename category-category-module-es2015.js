(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./src/app/main/category/category-list/category-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/category/category-list/category-list.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_utility_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utility/utils.service */ "./src/app/shared/utility/utils.service.ts");
/* harmony import */ var src_app_shared_enums_category_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/category.enum */ "./src/app/shared/enums/category.enum.ts");
/* harmony import */ var src_app_shared_ng_select_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ng-select/items */ "./src/app/shared/ng-select/items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/core/authentication.service */ "./src/app/shared/core/authentication.service.ts");
/* harmony import */ var src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/core/product.service */ "./src/app/shared/core/product.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pt-components/product-card-loading/product-card-loading.component */ "./src/app/shared/pt-components/product-card-loading/product-card-loading.component.ts");
/* harmony import */ var _shared_pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pt-components/product-card/product-card.component */ "./src/app/shared/pt-components/product-card/product-card.component.ts");













function CategoryListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r158 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/icons/", item_r158.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r158.label, "");
} }
function CategoryListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r159 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/icons/", item_r159.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r159.label, " ");
} }
function CategoryListComponent_section_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "style", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " .st0{fill:none;stroke:#F26422;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:#F26422;} ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "circle", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "circle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "circle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A moment please while we find the products available in ", ctx_r154.category, " category.");
} }
function CategoryListComponent_section_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-product-card-loading", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-product-card-loading", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-product-card-loading", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-product-card-loading", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoryListComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r161 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r161)("page", "category-list");
} }
function CategoryListComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r163.noOfProductsToShow = ctx_r163.noOfProductsToShow + ctx_r163.noOfProductsToShow; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "VIEW MORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CategoryListComponent {
    constructor(router, route, authenticationService, productService) {
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.productService = productService;
        this.products = [];
        // retailerWiseProducts: any;
        this.noOfProductsToShow = 16;
        this.sortItems = src_app_shared_ng_select_items__WEBPACK_IMPORTED_MODULE_3__["SortItems"];
        this.categoryItems = src_app_shared_enums_category_enum__WEBPACK_IMPORTED_MODULE_2__["CategoryItems"];
    }
    ngOnInit() {
        this.route.params.subscribe(() => {
            //console.log(this.route.snapshot.paramMap.get("category"))
            this.category = this.route.snapshot.paramMap.get("category");
            if (this.category) {
                this.getPrdocutsByCategory();
            }
            else {
                this.getAllProducts();
            }
            this.categorySelect = src_app_shared_utility_utils_service__WEBPACK_IMPORTED_MODULE_1__["default"].stringEnumToKeyValue(src_app_shared_enums_category_enum__WEBPACK_IMPORTED_MODULE_2__["Category"]);
            //console.log(this.categoryItems)
        });
        this.route.params.subscribe(() => {
            this.authenticationService.loginStatus().subscribe(res => {
                if (!res) {
                    sessionStorage.removeItem('iuli');
                    this.router.navigate(['/']);
                }
            });
        });
    }
    getPrdocutsByCategory() {
        //This is for passing data to datalayer for google analytics
        window.dataLayer.push({ 'CategoryName': this.category });
        this.products = [];
        this.productService.getProductsByCategory(this.category).subscribe(res => {
            // console.log(res);
            this.products = this.shuffle(res);
            // this.retailerWiseProducts = this.groupBy(this.products, 'retailerType');
            // console.log(this.groupBy(this.products, 'retailerType'));
            this.route.queryParams.pipe().subscribe(params => {
                if (params.pr && params.pr !== '') {
                    this.sortProducts('price', params.pr);
                    this.selectedSortItem = params.pr;
                }
                else if (params.av && params.av !== '') {
                    this.sortProducts('availability', params.av);
                    this.selectedSortItem = params.av;
                }
            });
        });
    }
    categorySelectChange(event) {
        // #GA - If you want to track the category change event
        // this.router.navigateByUrl('/category/' + this.category);
        this.route.queryParams.pipe().subscribe(params => {
            this.router.navigate(['/category/' + this.category], {
                relativeTo: this.route,
                queryParams: params,
                queryParamsHandling: 'merge',
            });
        });
    }
    getAllProducts() {
    }
    // Accepts the array and key
    groupBy(array, key) {
        // Return the end result
        return array.reduce((result, currentValue) => {
            // If an array already present for key, push it to the array. Else create an array and push the object
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
            return result;
        }, {}); // empty object is the initial value for result object
    }
    ;
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    /**
     *
     * @param property Ex: Price
     * @param criteria Ex: l2h - low to high, h2l - high to low
     */
    sortProducts(property, criteria) {
        this.updateQueryParams(property, criteria);
        if (property == 'price') {
            if (criteria == 'l2h') {
                this.products.sort(function (a, b) { return a.cost - b.cost; });
                // Move cost 0 to last
                for (var i = this.products.length - 1; i >= 0; i--) {
                    this.products.forEach((product, index) => {
                        if (product.cost == 0) {
                            // Move this object to last position in the array
                            this.products.push(this.products.splice(index, 1)[0]);
                        }
                    });
                }
            }
            else if (criteria == 'h2l') {
                this.products.sort(function (a, b) { return b.cost - a.cost; });
            }
        }
        else if (property == 'availability') {
            if (criteria == 'is') {
                // Move in stock to first
                this.products.forEach((product, i) => {
                    if (product.availability.toString() === "In_stock") {
                        this.products.splice(i, 1);
                        this.products.unshift(product);
                    }
                });
            }
        }
    }
    updateQueryParams(property, criteria) {
        if (property === 'price' && criteria === 'l2h') {
        }
        else if (property === 'price' && criteria === 'h2l') {
        }
        const queryParams = {
            pr: property === 'price' ? criteria : '',
            av: property === 'availability' ? criteria : ''
        };
        this.router.navigate(['/category/' + this.category], {
            relativeTo: this.route,
            queryParams: queryParams,
            queryParamsHandling: 'merge',
        });
    }
    sortItemChange(event) {
        this.sortProducts(event.type, event.value);
    }
}
CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) { return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"])); };
CategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryListComponent, selectors: [["app-category-list"]], decls: 29, vars: 15, consts: [[1, "browse", "pt-4", "pb-1"], [1, "container"], [1, "row", "align-items-center"], [1, "col-sm-12", "col-md-12", "col-lg-8", "mb-1"], [1, "font-weight-normal"], [1, "category_box"], ["id", "categoryItems", "bindLabel", "label", "bindValue", "label", "name", "category", 3, "items", "clearable", "searchable", "ngModel", "ngModelChange", "change"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "col-sm-12", "col-md-12", "col-lg-4", "mb-1"], ["action", ""], [1, "form-row", "justify-content-end"], [1, "form-group", "col-auto", "col-md-auto", "mr-2"], [1, "text-right", "w-100", "mb-0"], ["id", "sortItems", "bindLabel", "label", "placeholder", "Sort by", "bindValue", "value", "name", "sortItem", 3, "items", "clearable", "ngModel", "ngModelChange", "change"], ["class", "loader", 4, "ngIf"], ["class", "section my-4", 4, "ngIf"], [1, "section", "my-2"], [1, "row"], ["class", "col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-sm-12"], [1, "text-center", "mt-4", "loadmore"], ["class", "btn btn-md btn-secondary showMoreButton", 3, "click", 4, "ngIf"], ["height", "22", "width", "22", 3, "src"], [1, "loader"], [1, "loader-box"], [1, "loader_icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Layer_1", "x", "0px", "y", "0px", "viewBox", "75 75 150 150", 0, "xml", "space", "preserve", "preserveAspectRatio", "xMidYMid meet", 2, "enable-background", "new 0 0 300 300"], ["type", "text/css"], ["d", "M216.9,110.9H194l-15.2,56c-1.3,4.7-5.5,7.9-10.3,7.9h-49.1c-4.9,0-9.1-3.3-10.3-12.7l-10-38.1h70.8", 1, "st0", "bubble-cart"], ["cx", "120.4", "cy", "199", "r", "8.9", 1, "st1", "bubble-cart"], ["cx", "169.9", "cy", "199", "r", "8.9", 1, "st1", "bubble-cart"], ["cx", "144.5", "cy", "83", "r", "5", 1, "st1", "manifest-dot"], [1, "lead", "text-center"], [1, "section", "my-4"], [1, "col-sm-12", "col-md-6", "col-lg-3", "mb-3"], [1, "col-sm-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-3"], [3, "product", "page"], [1, "btn", "btn-md", "btn-secondary", "showMoreButton", 3, "click"]], template: function CategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Showing Products In: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ng-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryListComponent_Template_ng_select_ngModelChange_8_listener($event) { return ctx.category = $event; })("change", function CategoryListComponent_Template_ng_select_change_8_listener($event) { return ctx.categorySelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoryListComponent_ng_template_9_Template, 3, 2, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoryListComponent_ng_template_10_Template, 2, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sort By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryListComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.selectedSortItem = $event; })("change", function CategoryListComponent_Template_ng_select_change_18_listener($event) { return ctx.sortItemChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CategoryListComponent_section_19_Template, 14, 1, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CategoryListComponent_section_20_Template, 7, 0, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CategoryListComponent_div_24_Template, 2, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CategoryListComponent_button_28_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.categoryItems)("clearable", false)("searchable", false)("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.sortItems)("clearable", false)("ngModel", ctx.selectedSortItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 11, ctx.products, 0, ctx.noOfProductsToShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noOfProductsToShow < ctx.products.length);
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵh"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_10__["ProductCardLoadingComponent"], _shared_pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__["ProductCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"]], styles: [".category_sections[_ngcontent-%COMP%]:nth-of-type(odd) {\n  padding: 20px 0;\n  background-color: #f9fafb;\n}\n\n#sortBy.btn-outline-secondary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\nspan.ng-value-label[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n\n#sortItems[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n.browse[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background: white;\n  border-right: none;\n}\n\n.browse[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-left: none;\n  height: 36px;\n}\n\n.browse[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  height: 100%;\n  top: -1.2px;\n}\n\n.w-35[_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n.category_box[_ngcontent-%COMP%] {\n  display: inline;\n  width: 100%;\n}\n\n@media (max-width: 1200px) {\n  .category_box[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-top: 3px;\n  }\n  .category_box[_ngcontent-%COMP%]   .w-35[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n\n@media (max-width: 767px) {\n  #categoryItems[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .category_box[_ngcontent-%COMP%]   .w-35[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n}\n\n@media (max-width: 480px) {\n  #categoryItems[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 400px;\n    margin-top: 8px;\n  }\n\n  .category_box[_ngcontent-%COMP%]   .w-35[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 15px;\n    margin-left: 0 !important;\n  }\n\n  #categoryItems[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jYXRlZ29yeS9jYXRlZ29yeS1saXN0L0Q6XFxXb3Jrc3BhY2VcXGFydGlhcmEtbmctYXBwLW5ldy9zcmNcXGFwcFxcbWFpblxcY2F0ZWdvcnlcXGNhdGVnb3J5LWxpc3RcXGNhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL21haW4vY2F0ZWdvcnkvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDRlI7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksMkJBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpBO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNPTjtFRExNO0lBQ0ksVUFBQTtFQ09WO0FBQ0Y7O0FETkE7RUFFSTtJQUNJLFVBQUE7RUNPTjs7RURORTtJQUNJLFVBQUE7RUNTTjtBQUNGOztBRFJBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDVU47O0VEUkU7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQ1dOOztFRFRFO0lBQ0ksV0FBQTtFQ1lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NhdGVnb3J5L2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzJyBcclxuXHJcbi5jYXRlZ29yeV9zZWN0aW9uc1xyXG4gICAgJjpudGgtb2YtdHlwZShvZGQpXHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZ3JleS1iZyAsIDAuNSUpXHJcbiAgICAgICAgXHJcbiNzb3J0QnkuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1c1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG5cclxuc3Bhbi5uZy12YWx1ZS1sYWJlbCBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudFxyXG5cclxuI3NvcnRJdGVtc1xyXG4gICAgbWluLXdpZHRoOiAxNDBweFxyXG5cclxuLmJyb3dzZSBoNSAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCBcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlXHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmVcclxuXHJcbi5icm93c2UgaDUgIC5pbnB1dC1ncm91cCBpbnB1dFxyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmVcclxuICAgIGhlaWdodDogMzZweFxyXG5cclxuLmJyb3dzZSBoNSAuaW5wdXQtZ3JvdXBcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgdG9wOiAtMS4ycHhcclxuXHJcbi53LTM1XHJcbiAgICB3aWR0aDogMzUlXHJcblxyXG4uY2F0ZWdvcnlfYm94XHJcbiAgICBkaXNwbGF5OiBpbmxpbmVcclxuICAgIHdpZHRoOiAxMDAlXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBcclxuICAgIC5jYXRlZ29yeV9ib3hcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4XHJcblxyXG4gICAgICAgIC53LTM1XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSVcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgXHJcblxyXG4gICAgI2NhdGVnb3J5SXRlbXNcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICAuY2F0ZWdvcnlfYm94IC53LTM1XHJcbiAgICAgICAgd2lkdGg6IDQ4JVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSBcclxuICAgICNjYXRlZ29yeUl0ZW1zIFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgbWluLXdpZHRoOiA0MDBweFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweFxyXG4gICAgXHJcbiAgICAuY2F0ZWdvcnlfYm94IC53LTM1XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudFxyXG5cclxuICAgICNjYXRlZ29yeUl0ZW1zIC5uZy1kcm9wZG93bi1wYW5lbCBcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4iLCIuY2F0ZWdvcnlfc2VjdGlvbnM6bnRoLW9mLXR5cGUob2RkKSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbn1cblxuI3NvcnRCeS5idG4tb3V0bGluZS1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuc3Bhbi5uZy12YWx1ZS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuI3NvcnRJdGVtcyB7XG4gIG1pbi13aWR0aDogMTQwcHg7XG59XG5cbi5icm93c2UgaDUgLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uYnJvd3NlIGg1IC5pbnB1dC1ncm91cCBpbnB1dCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5icm93c2UgaDUgLmlucHV0LWdyb3VwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IC0xLjJweDtcbn1cblxuLnctMzUge1xuICB3aWR0aDogMzUlO1xufVxuXG4uY2F0ZWdvcnlfYm94IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY2F0ZWdvcnlfYm94IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cbiAgLmNhdGVnb3J5X2JveCAudy0zNSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICNjYXRlZ29yeUl0ZW1zIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmNhdGVnb3J5X2JveCAudy0zNSB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNjYXRlZ29yeUl0ZW1zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuXG4gIC5jYXRlZ29yeV9ib3ggLnctMzUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gICNjYXRlZ29yeUl0ZW1zIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-list',
                templateUrl: './category-list.component.html',
                styleUrls: ['./category-list.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/category/category-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/category/category-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/main/category/category-list/category-list.component.ts");





const routes = [
    { path: '', component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__["CategoryListComponent"] },
    { path: ':category', component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__["CategoryListComponent"] },
];
class CategoryRoutingModule {
}
CategoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CategoryRoutingModule });
CategoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CategoryRoutingModule_Factory(t) { return new (t || CategoryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/category/category.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/category/category.module.ts ***!
  \**************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/main/category/category-routing.module.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/main/category/category-list/category-list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");













class CategoryModule {
}
CategoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CategoryModule });
CategoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CategoryModule_Factory(t) { return new (t || CategoryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _category_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoryRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressbarModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoryModule, { declarations: [_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoryRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                    _category_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoryRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressbarModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/utility/utils.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/utility/utils.service.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UtilsService; });
class UtilsService {
    static stringEnumToKeyValue(stringEnum) {
        const keyValue = [];
        const keys = Object.keys(stringEnum).filter((value, index) => {
            return !(index % 2);
        });
        for (const k of keys) {
            keyValue.push({ key: k, value: stringEnum[k] });
        }
        return keyValue;
    }
    static updateQueryParams(router, route, queryParams) {
        router.navigate([], {
            relativeTo: route,
            queryParams: queryParams,
            queryParamsHandling: 'merge',
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map