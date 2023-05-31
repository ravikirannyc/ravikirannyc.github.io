function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./src/app/main/products/product-search-box/product-search-box.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/main/products/product-search-box/product-search-box.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductSearchBoxComponent */

  /***/
  function srcAppMainProductsProductSearchBoxProductSearchBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductSearchBoxComponent", function () {
      return ProductSearchBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_models_searchlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/models/searchlog */
    "./src/app/shared/models/searchlog.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/models/searchstatus */
    "./src/app/shared/models/searchstatus.ts");
    /* harmony import */


    var src_app_shared_ng_select_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/ng-select/items */
    "./src/app/shared/ng-select/items.ts");
    /* harmony import */


    var src_app_shared_enums_category_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/enums/category.enum */
    "./src/app/shared/enums/category.enum.ts");
    /* harmony import */


    var src_app_shared_enums_colors_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/enums/colors.enum */
    "./src/app/shared/enums/colors.enum.ts");
    /* harmony import */


    var src_app_shared_enums_borderStyles_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/enums/borderStyles.enum */
    "./src/app/shared/enums/borderStyles.enum.ts");
    /* harmony import */


    var src_app_shared_enums_retailertype_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/enums/retailertype.enum */
    "./src/app/shared/enums/retailertype.enum.ts");
    /* harmony import */


    var src_app_shared_enums_retailertype_ui_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/enums/retailertype_ui.enum */
    "./src/app/shared/enums/retailertype_ui.enum.ts");
    /* harmony import */


    var src_app_shared_enums_priceRange_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/enums/priceRange.enum */
    "./src/app/shared/enums/priceRange.enum.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_models_extractionstatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/models/extractionstatus */
    "./src/app/shared/models/extractionstatus.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/shared/core/product.service */
    "./src/app/shared/core/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _shared_pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/pt-components/product-card/product-card.component */
    "./src/app/shared/pt-components/product-card/product-card.component.ts");
    /* harmony import */


    var _shared_pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../shared/pt-components/product-card-loading/product-card-loading.component */
    "./src/app/shared/pt-components/product-card-loading/product-card-loading.component.ts");
    /* harmony import */


    var _shared_pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../shared/pipe/productfilter.pipe */
    "./src/app/shared/pipe/productfilter.pipe.ts"); //import { BrandNameItems } from 'src/app/shared/enums/brandName.enum';
    //import { FittingTypeItems } from 'src/app/shared/enums/FittingType.enum';
    //import { OrnamentationItems } from 'src/app/shared/enums/ornamentation.enum';
    //import { SleeveLengthItems } from 'src/app/shared/enums/sleeveLength.enum';
    //import { PatternTypeItems } from 'src/app/shared/enums/patternType.enum';
    //import { NeckStyleItems } from 'src/app/shared/enums/neckStyle.enum';


    var _c0 = ["productSearchModal"];

    function ProductSearchBoxComponent_div_6_div_4_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Keyword should be more than 3 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductSearchBoxComponent_div_6_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductSearchBoxComponent_div_6_div_4_span_2_Template, 2, 0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r237.titleKeywordFC.errors == null ? null : ctx_r237.titleKeywordFC.errors.minlength);
      }
    }

    function ProductSearchBoxComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchBoxComponent_div_6_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240);

          var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r239.searchKey = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductSearchBoxComponent_div_6_div_4_Template, 3, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchBoxComponent_div_6_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240);

          var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r241.callSearchProducts("title", "", "", "", "", "", "", "", "", "", "", "", "");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r234.titleSearchFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r234.titleSearchFormGroup.get("titleKeywordFormControl").invalid && ctx_r234.titleSearchFormGroup.get("titleKeywordFormControl").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r234.searchKey);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r234.titleKeywordFC.invalid && ctx_r234.titleKeywordFC.touched || ctx_r234.titleKeywordFC.dirty);
      }
    }

    function ProductSearchBoxComponent_div_9_div_7_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a category!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductSearchBoxComponent_div_9_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductSearchBoxComponent_div_9_div_7_span_1_Template, 2, 0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r242.categoryCategory1FC == null ? null : ctx_r242.categoryCategory1FC.errors);
      }
    }

    function ProductSearchBoxComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchBoxComponent_div_9_Template_ng_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r245);

          var ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r244.category = $event;
        })("change", function ProductSearchBoxComponent_div_9_Template_ng_select_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r245);

          var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r246.callSearchProductsFilterByCategory("category", ctx_r246.category);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductSearchBoxComponent_div_9_div_7_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r235.categorySearchFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r235.categorySearchFormGroup.get("categoryCategoryFormControl").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r235.categoryItems)("clearable", true)("searchable", true)("ngModel", ctx_r235.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r235.categoryCategory1FC.invalid);
      }
    }

    function ProductSearchBoxComponent_section_10_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r247.errorMessage, " Please relax the filter. ");
      }
    }

    function ProductSearchBoxComponent_section_10_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Products Found, Please try relaxing filter. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductSearchBoxComponent_section_10_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r255 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r255)("page", "product-search");
      }
    }

    function ProductSearchBoxComponent_section_10_app_product_card_loading_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card-loading", 34);
      }
    }

    function ProductSearchBoxComponent_section_10_app_product_card_loading_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card-loading", 34);
      }
    }

    function ProductSearchBoxComponent_section_10_app_product_card_loading_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card-loading", 34);
      }
    }

    function ProductSearchBoxComponent_section_10_app_product_card_loading_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card-loading", 34);
      }
    }

    function ProductSearchBoxComponent_section_10_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchBoxComponent_section_10_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r258);

          var ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r257.noOfProductsToShow = ctx_r257.noOfProductsToShow + 16;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductSearchBoxComponent_section_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductSearchBoxComponent_section_10_div_8_Template, 3, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductSearchBoxComponent_section_10_div_10_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductSearchBoxComponent_section_10_div_11_Template, 2, 2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "productfilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductSearchBoxComponent_section_10_app_product_card_loading_14_Template, 1, 0, "app-product-card-loading", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductSearchBoxComponent_section_10_app_product_card_loading_15_Template, 1, 0, "app-product-card-loading", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductSearchBoxComponent_section_10_app_product_card_loading_16_Template, 1, 0, "app-product-card-loading", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductSearchBoxComponent_section_10_app_product_card_loading_17_Template, 1, 0, "app-product-card-loading", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProductSearchBoxComponent_section_10_button_20_Template, 2, 0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Found ", ctx_r236.totalSuccessProductsFound, " products in Category ", ctx_r236.category, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.isSearchError);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r236.isSearchInProgress && ctx_r236.searchLog.totalProductsToSearch == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 14, ctx_r236.products, ctx_r236.filterargs), 0, ctx_r236.noOfProductsToShow));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.isSearchInProgress && ctx_r236.noOfProductsToShow >= ctx_r236.totalSuccessProductsFound);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.showLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.showLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.showLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.noOfProductsToShow < ctx_r236.totalSuccessProductsFound);
      }
    }

    var ProductSearchBoxComponent = /*#__PURE__*/function () {
      function ProductSearchBoxComponent(router, route, modalService, productService) {
        _classCallCheck(this, ProductSearchBoxComponent);

        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.productService = productService;
        this.searchLog = new src_app_shared_models_searchlog__WEBPACK_IMPORTED_MODULE_1__["SearchLog"]();
        this.brandNameItems = [];
        this.noOfProductsToShow = 16; // filterargs = {extractioStatus: 'SUCCESS'};

        this.filterargs = {
          extractioStatus: src_app_shared_models_extractionstatus__WEBPACK_IMPORTED_MODULE_12__["ExtractionStatus"].SUCCESS
        };
        this.titleSearchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
          titleZipcodeFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]({
            value: '',
            disabled: ''
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(7)]),
          titleKeywordFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]({
            value: '',
            disabled: ''
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(3)])
        });
        this.categorySearchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
          categoryZipcodeFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(7)]),
          categoryCategoryFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl1: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl2: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl3: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl4: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl5: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl6: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl7: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl8: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl9: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl10: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl11: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
          categoryCategoryFormControl12: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required])
        });
        this.sortItems = src_app_shared_ng_select_items__WEBPACK_IMPORTED_MODULE_4__["SortItems"];
        this.categoryItems = src_app_shared_enums_category_enum__WEBPACK_IMPORTED_MODULE_5__["CategoryItems"]; //this.productTypeItems = ProductTypeItems;
        //this.brandNameItems = BrandNameItems;

        this.colorItems = src_app_shared_enums_colors_enum__WEBPACK_IMPORTED_MODULE_6__["ColorItems"];
        this.priceRangeItems = src_app_shared_enums_priceRange_enum__WEBPACK_IMPORTED_MODULE_10__["PriceRangeItems"]; //this.patternTypeItems = PatternTypeItems;
        //this.sleeveLengthItems = SleeveLengthItems;
        //this.fittingTypeItems = FittingTypeItems;
        //this.neckTypeItems = NeckStyleItems;

        this.retailerTypeItems = src_app_shared_enums_retailertype_enum__WEBPACK_IMPORTED_MODULE_8__["RetailerTypeItems"];
        this.retailerTypeItemsUi = src_app_shared_enums_retailertype_ui_enum__WEBPACK_IMPORTED_MODULE_9__["RetailerTypeItemsUi"];
        this.borderStylesItems = src_app_shared_enums_borderStyles_enum__WEBPACK_IMPORTED_MODULE_7__["BorderStylesItems"]; //this.ornamentationItems = OrnamentationItems;
      }

      _createClass(ProductSearchBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.pipe().subscribe(function (params) {
            _this.searchType = _this.route.snapshot.paramMap.get("searchtype");
            _this.searchKey = params.kw;
            _this.zipcode = params.zip;

            if (!_this.isDropDownsLoaed) {
              _this.getDropDownValuesOnLoad('all');

              _this.isDropDownsLoaed = true; //console.log("drop downs loaded");
            }

            if (_this.category == null) {
              _this.category = params.category;
              _this.outfitType = params.outfitType;
              _this.brandName = params.brandName;
              _this.color = params.color;
              _this.priceRange = 'All';
              _this.patternType = params.patternType;
              _this.borderStyle = params.borderStyle;
              _this.neckType = params.neckType;
              _this.sleeveLength = params.sleeveLength;
              _this.fittingType = params.fittingType;
              _this.retailerType = params.retailerType;
              _this.ornamentation = params.ornamentation;
            } // Call below function only when there is any change in keyword or zipcode


            if (_this.category !== _this.lastCategory || _this.searchKey !== _this.lastSearchKey || _this.zipcode !== _this.lastZipcode || _this.outfitType !== _this.lastOutfitType || _this.brandName !== _this.lastBrandName || _this.color !== _this.lastColor || _this.patternType !== _this.lastPatternType || _this.borderStyle !== _this.lastBorderStyle || _this.sleeveLength !== _this.lastSleeveLength || _this.fittingType !== _this.lastFittingType || _this.neckType !== _this.lastNeckType || _this.retailerType !== _this.lastRetailerType || _this.ornamentation !== _this.lastOrnamentation) {
              _this.cancelSearch();

              window.scroll(0, 0);
              setTimeout(function () {
                if (_this.searchType === 'title' && _this.titleKeywordFC.valid || _this.searchType === 'category' && _this.categoryCategoryFC.valid) {
                  _this.callSearchProducts(_this.searchType, _this.category, _this.outfitType, _this.brandName, _this.color, _this.priceRange, _this.neckType, _this.fittingType, _this.sleeveLength, _this.patternType, _this.borderStyle, _this.retailerType, _this.ornamentation);
                }
              }, 100);
            }

            if (_this.category == 'Handbags' || _this.category == 'Watches' || _this.category == 'Sunglasses' || _this.category == 'Hair Accessory' || _this.category == 'Mobile Accessories' || _this.category == 'Other Accessories' || _this.category == 'Flats' || _this.category == 'Heels' || _this.category == 'Boots' || _this.category == 'Casual Shoes' || _this.category == 'Sports Shoes' || _this.category == 'Sandals') {
              _this.disabledCondition = true;
            } else {
              _this.disabledCondition = false;
            }

            _this.lastSearchKey = params.kw;
            _this.lastZipcode = params.zip; //this.lastCategory = params.category;
            //this.lastOutfitType = params.outfitType;
            //this.brandName = params.brandName;
            //this.color = params.color;

            _this.selectedSortItem = params.pr;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // if (this.searchStatusSubscription) {
          //   this.searchStatusSubscription.unsubscribe();  
          // }
          // this.isSearchInProgress = false;
          this.cancelSearch();
        }
      }, {
        key: "updateQueryParams",
        value: function updateQueryParams() {
          var queryParams = {
            kw: this.searchKey,
            zip: this.zipcode,
            category: this.category
          };
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: queryParams,
            queryParamsHandling: 'merge'
          });
        }
      }, {
        key: "callSearchProductsFilterByCategory",
        value: function callSearchProductsFilterByCategory(searchType, category) {
          this.callSearchProducts(searchType, category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByOutfitType",
        value: function callSearchProductsFilterByOutfitType(searchType, outfitType) {
          this.callSearchProducts(searchType, this.category, outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByBrandName",
        value: function callSearchProductsFilterByBrandName(searchType, brandName) {
          this.callSearchProducts(searchType, this.category, this.outfitType, brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByColor",
        value: function callSearchProductsFilterByColor(searchType, color) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByPriceRange",
        value: function callSearchProductsFilterByPriceRange(searchType, priceRange) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByNeckType",
        value: function callSearchProductsFilterByNeckType(searchType, neckType) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByFittingType",
        value: function callSearchProductsFilterByFittingType(searchType, fittingType) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterBySleeveLength",
        value: function callSearchProductsFilterBySleeveLength(searchType, sleeveLength) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByPattern",
        value: function callSearchProductsFilterByPattern(searchType, patternType) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByBorderStyle",
        value: function callSearchProductsFilterByBorderStyle(searchType, borderStyle) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByRetailer",
        value: function callSearchProductsFilterByRetailer(searchType, retailerType) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByOrnamentation",
        value: function callSearchProductsFilterByOrnamentation(searchType, ornamentation) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, ornamentation);
        }
      }, {
        key: "callSearchProductsFilterClearAll",
        value: function callSearchProductsFilterClearAll(searchType) {
          this.callSearchProducts(searchType, 'All', 'All', 'All', 'All', 'All', 'All', 'All', 'All', 'All', 'All', 'All', 'All');
        }
      }, {
        key: "callSearchProducts",
        value: function callSearchProducts(searchType, category, outfitType, brandName, color, priceRange, neckType, fittingType, sleeveLength, patternType, borderStyle, retailerType, ornamentation) {
          var _this2 = this;

          if (this.searchType === 'title' && this.titleKeywordFC.valid || this.searchType === 'category' && this.categoryCategoryFC.valid) {
            //if(!this.isSearchInProgress) {
            this.category = category;
            this.outfitType = outfitType;
            this.brandName = brandName;
            this.color = color;
            this.priceRange = priceRange;
            this.neckType = neckType;
            this.fittingType = fittingType;
            this.sleeveLength = sleeveLength;
            this.patternType = patternType;
            this.borderStyle = borderStyle;
            this.retailerType = retailerType;
            this.ornamentation = ornamentation;
            this.totalSuccessProductsFound = 0;
            this.isSearchInProgress = true;
            this.noOfProductsToShow = 16;
            this.disableFormControls();
            this.updateQueryParams();
            this.showLoading = true;
            this.products = [];
            this.searchLog = new src_app_shared_models_searchlog__WEBPACK_IMPORTED_MODULE_1__["SearchLog"]();
            this.searchLog.percentageCompleted = 0;
            this.isSearchError = false;
            this.searchSubscription = this.productService.searchProducts(this.searchKey, this.zipcode, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation).subscribe(function (res) {
              _this2.searchResult = res;
              _this2.products = _this2.shuffle(_this2.searchResult.products);

              _this2.getTotalSuccessProductsFound();

              _this2.searchLog = _this2.searchResult.searchLog;
              _this2.showLoading = false;
              _this2.isSearchPerformed = true;

              _this2.getQueryParams();

              _this2.calculatePercentage();

              _this2.callGetSearchStatus();

              if (_this2.searchLog.searchStatus.toString() == src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__["SearchStatus"][src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__["SearchStatus"].Completed] || _this2.searchLog.totalProductsSearched > _this2.searchLog.totalProductsToSearch) {
                _this2.cancelSearch();

                if (window.dataLayer) {
                  //Passing Search Params To Datalayer
                  window.dataLayer.push({
                    'event': 'productCount',
                    'productNumber': _this2.totalSuccessProductsFound
                  });
                }
              }
            }, function (error) {
              _this2.errorMessage = error.error.message;
              _this2.showLoading = false;
              _this2.isSearchError = true;
              _this2.isSearchPerformed = true;
              _this2.isSearchInProgress = false;

              _this2.enableFormControls();
            }); // }
          }
        }
      }, {
        key: "callSearchProductsByTitle",
        value: function callSearchProductsByTitle(searchType) {
          var _this3 = this;

          if (this.searchType === 'title' && this.titleKeywordFC.valid || this.searchType === 'category' && this.categoryCategoryFC.valid) {
            //if(!this.isSearchInProgress) {
            this.category = this.category;
            this.outfitType = this.outfitType;
            this.brandName = this.brandName;
            this.color = this.color;
            this.priceRange = this.priceRange;
            this.neckType = this.neckType;
            this.fittingType = this.fittingType;
            this.sleeveLength = this.sleeveLength;
            this.patternType = this.patternType;
            this.borderStyle = this.borderStyle;
            this.retailerType = this.retailerType;
            this.ornamentation = this.ornamentation;
            this.totalSuccessProductsFound = 0;
            this.isSearchInProgress = true;
            this.noOfProductsToShow = 16;
            this.disableFormControls();
            this.updateQueryParams();
            this.showLoading = true;
            this.products = [];
            this.searchLog = new src_app_shared_models_searchlog__WEBPACK_IMPORTED_MODULE_1__["SearchLog"]();
            this.searchLog.percentageCompleted = 0;
            this.isSearchError = false;
            this.searchSubscription = this.productService.searchProducts(this.searchKey, this.zipcode, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation).subscribe(function (res) {
              _this3.searchResult = res;
              _this3.products = _this3.shuffle(_this3.searchResult.products);

              _this3.getTotalSuccessProductsFound();

              _this3.searchLog = _this3.searchResult.searchLog;
              _this3.showLoading = false;
              _this3.isSearchPerformed = true;

              _this3.getQueryParams();

              _this3.calculatePercentage();

              _this3.callGetSearchStatus();

              if (_this3.searchLog.searchStatus.toString() == src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__["SearchStatus"][src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__["SearchStatus"].Completed] || _this3.searchLog.totalProductsSearched > _this3.searchLog.totalProductsToSearch) {
                _this3.cancelSearch();

                if (window.dataLayer) {
                  //Passing Search Params To Datalayer
                  window.dataLayer.push({
                    'event': 'productCount',
                    'productNumber': _this3.totalSuccessProductsFound
                  });
                }
              }
            }, function (error) {
              _this3.errorMessage = error.error.message;
              _this3.showLoading = false;
              _this3.isSearchError = true;
              _this3.isSearchPerformed = true;
              _this3.isSearchInProgress = false;

              _this3.enableFormControls();
            }); // }
          }
        }
      }, {
        key: "getQueryParams",
        value: function getQueryParams() {
          var _this4 = this;

          this.route.queryParams.pipe().subscribe(function (params) {
            if (params.pr && params.pr !== '') {
              _this4.sortProducts('price', params.pr);

              _this4.selectedSortItem = params.pr;
            } else if (params.av && params.av !== '') {
              _this4.sortProducts('availability', params.av);

              _this4.selectedSortItem = params.av;
            }
          });
        }
      }, {
        key: "getPrdocutsByCategory",
        value: function getPrdocutsByCategory() {
          var _this5 = this;

          //This is for passing data to datalayer for google analytics
          if (window.dataLayer) {
            window.dataLayer.push({
              'CategoryName': this.category
            });
          }

          ;
          this.products = [];
          this.productService.getProductsByCategory(this.category).subscribe(function (res) {
            // console.log(res);
            _this5.products = _this5.shuffle(res); // this.retailerWiseProducts = this.groupBy(this.products, 'retailerType');
            // console.log(this.groupBy(this.products, 'retailerType'));

            _this5.getQueryParams();
          });
        }
      }, {
        key: "getDropDownValuesOnLoad",
        value: function getDropDownValuesOnLoad(itemName) {
          var _this6 = this;

          this.productService.getDropDownValues(itemName).subscribe(function (res) {
            _this6.brandNameItems = res.brandnames;
            _this6.productTypeItems = res.outfitTypes;
            _this6.neckTypeItems = res.neckTypes;
            _this6.fittingTypeItems = res.fittingTypes;
            _this6.sleeveLengthItems = res.sleeves;
            _this6.ornamentationItems = res.ornamentations;
            _this6.patternTypeItems = res.patternTypes;
          });
        }
      }, {
        key: "shuffle",
        value: function shuffle(array) {
          var currentIndex = array.length,
              temporaryValue,
              randomIndex; // While there remain elements to shuffle...

          while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1; // And swap it with the current element.

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

      }, {
        key: "sortProducts",
        value: function sortProducts(property, criteria) {
          var _this7 = this;

          this.updateQueryParamsForSort(property, criteria);

          if (property == 'price') {
            if (criteria == 'l2h') {
              this.products.sort(function (a, b) {
                return a.cost - b.cost;
              }); // Move cost 0 to last

              for (var i = this.products.length - 1; i >= 0; i--) {
                this.products.forEach(function (product, index) {
                  if (product.cost == 0) {
                    // Move this object to last position in the array
                    _this7.products.push(_this7.products.splice(index, 1)[0]);
                  }
                });
              }
            } else if (criteria == 'h2l') {
              this.products.sort(function (a, b) {
                return b.cost - a.cost;
              });
            }
          } else if (property == 'availability') {
            if (criteria == 'is') {
              var inStockProducts = this.products.filter(function (product) {
                return product.availability && product.availability.toString() === "In_stock";
              }).length;
              var laProducts = this.products.filter(function (product) {
                return product.availability && product.availability.toString() === "Limited_availability";
              }).length;
              var inStockIndex = 0;
              var limitedAvailabilityIndex = inStockProducts; // All In_stock products first, in order

              this.products.forEach(function (product, i) {
                if (product.availability && product.availability.toString() === "In_stock") {
                  _this7.products.splice(i, 1);

                  _this7.products.splice(inStockIndex, 0, product);

                  inStockIndex = inStockIndex + 1;
                }
              }); // All Limited_availability products after In_stock, in order

              this.products.forEach(function (product, i) {
                if (product.availability && product.availability.toString() === "Limited_availability") {
                  _this7.products.splice(i, 1);

                  _this7.products.splice(limitedAvailabilityIndex, 0, product);

                  limitedAvailabilityIndex = limitedAvailabilityIndex + 1;
                }
              });
            }
          }
        }
      }, {
        key: "updateQueryParamsForSort",
        value: function updateQueryParamsForSort(property, criteria) {
          if (property === 'price' && criteria === 'l2h') {} else if (property === 'price' && criteria === 'h2l') {} // const queryParams: Params = {
          //   pr: property === 'price' ? criteria : '',
          //   av: property === 'availability' ? criteria : ''
          // };


          var queryParams = {};

          if (property === 'price') {
            queryParams = {
              pr: criteria
            };
          } else if (property === 'availability') {
            queryParams = {
              av: criteria
            };
          }

          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: queryParams,
            queryParamsHandling: 'merge'
          });
        }
      }, {
        key: "calculatePercentage",
        value: function calculatePercentage() {
          // this.searchLog.percentageCompleted = Math.round((this.searchLog.totalProductsSearched/this.searchLog.totalProductsToSearch) * 100);
          if (this.searchLog.totalProductsToSearch != 0) {
            this.searchLog.percentageCompleted = Math.round(this.products.length / this.searchLog.totalProductsToSearch * 100);
          } else {
            this.searchLog.percentageCompleted = 0;
          }
        }
      }, {
        key: "callGetSearchStatus",
        value: function callGetSearchStatus() {
          var _this8 = this;

          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000);
          this.searchStatusSubscription = source.subscribe(function (val) {
            _this8.getSearchStatus();
          });
        }
      }, {
        key: "getSearchStatus",
        value: function getSearchStatus() {
          var _this9 = this;

          this.productService.getSearchStatus(this.searchLog.spIds).subscribe(function (res) {
            _this9.searchStatus = res; // this.searchLog = this.searchStatus.searchLog;

            var productIds = new Set(_this9.products.map(function (product) {
              return product.productId;
            }));
            var mergedProducts = [].concat(_toConsumableArray(_this9.products), _toConsumableArray(_this9.searchStatus.products.filter(function (product) {
              return !productIds.has(product.productId);
            })));
            _this9.products = mergedProducts;

            _this9.getTotalSuccessProductsFound();

            _this9.calculatePercentage(); // To sort on live search


            _this9.getQueryParams(); // if(this.searchStatus.searchLog.searchStatus.toString() === SearchStatus[SearchStatus.Completed]) {
            //   this.cancelSearch();
            // }


            if (_this9.searchLog.percentageCompleted == 100 || _this9.products.length == _this9.searchLog.totalProductsToSearch) {
              _this9.cancelSearch();

              if (window.dataLayer) {
                //Passing Search Params To Datalayer
                window.dataLayer.push({
                  'event': 'productCount',
                  'productNumber': _this9.totalSuccessProductsFound
                });
              }
            }
          });
        }
      }, {
        key: "cancelSearch",
        value: function cancelSearch() {
          if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
          }

          if (this.searchStatusSubscription) {
            this.searchStatusSubscription.unsubscribe();
          }

          this.isSearchInProgress = false;
          this.enableFormControls();
          this.showLoading = false;
        }
      }, {
        key: "sortItemChange",
        value: function sortItemChange(event) {
          this.sortProducts(event.type, event.value);
        }
      }, {
        key: "categorySelectChange",
        value: function categorySelectChange(event) {// window.dataLayer.push({'CategoryName' : event.label});
          //   const queryParams: Params = {
          //     category: event.label
          //   };
          //   this.router.navigate(['/product/search/category/'], 
          //   {
          //     relativeTo: this.route,
          //     queryParams: queryParams, 
          //     queryParamsHandling: 'merge', // remove to replace all query params by provided
          //   });
          // console.log(event.label)
        }
      }, {
        key: "enableFormControls",
        value: function enableFormControls() {
          this.titleSearchFormGroup.get('titleZipcodeFormControl').enable();
          this.titleSearchFormGroup.get('titleKeywordFormControl').enable();
          this.categorySearchFormGroup.get('categoryZipcodeFormControl').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl1').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl2').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl3').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl4').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl5').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl6').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl7').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl8').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl9').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl10').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl11').enable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl12').enable();
        }
      }, {
        key: "disableFormControls",
        value: function disableFormControls() {
          this.titleSearchFormGroup.get('titleZipcodeFormControl').disable();
          this.titleSearchFormGroup.get('titleKeywordFormControl').disable();
          this.categorySearchFormGroup.get('categoryZipcodeFormControl').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl1').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl2').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl3').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl4').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl5').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl6').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl7').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl8').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl9').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl10').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl11').disable();
          this.categorySearchFormGroup.get('categoryCategoryFormControl12').disable();
        }
      }, {
        key: "hideExtraFormControls",
        value: function hideExtraFormControls(category) {
          if (category == 'Handbags' || category == 'Watches' || category == 'Sunglasses' || category == 'Hair Accessory' || category == 'Mobile Accessories' || category == 'Other Accessories' || category == 'Flats' || category == 'Heels' || category == 'Boots' || category == 'Casual Shoes' || category == 'Sports Shoes' || category == 'Sandals') {
            document.getElementById("filter2Dropdowns").hidden = true;
          } else {
            document.getElementById("filter2Dropdowns").hidden = false;
          }
        }
      }, {
        key: "getTotalSuccessProductsFound",
        value: function getTotalSuccessProductsFound() {
          this.totalSuccessProductsFound = this.products.filter(function (product) {
            return product.extractioStatus && product.extractioStatus.toString() === 'SUCCESS';
          }).length;
        }
      }, {
        key: "openProductSearchModal",
        value: function openProductSearchModal(classNames) {
          this.productSearchModalRef = this.modalService.show(this.productSearchModal, {
            "class": classNames
          }); //this.productSearchModalRef.setClass('modal-lg'); 
          // Remove query params
        }
      }, {
        key: "onPopState",
        value: function onPopState(event) {
          window.location.reload();
          this.callSearchProducts('category', this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "titleZipcodeFC",
        get: function get() {
          return this.titleSearchFormGroup.get('titleZipcodeFormControl');
        }
      }, {
        key: "titleKeywordFC",
        get: function get() {
          return this.titleSearchFormGroup.get('titleKeywordFormControl');
        }
      }, {
        key: "categoryZipcodeFC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryZipcodeFormControl');
        }
      }, {
        key: "categoryCategoryFC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl');
        }
      }, {
        key: "categoryCategory1FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl1');
        }
      }, {
        key: "categoryCategory2FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl2');
        }
      }, {
        key: "categoryCategory3FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl3');
        }
      }, {
        key: "categoryCategory4FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl4');
        }
      }, {
        key: "categoryCategory5FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl5');
        }
      }, {
        key: "categoryCategory6FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl6');
        }
      }, {
        key: "categoryCategory7FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl7');
        }
      }, {
        key: "categoryCategory8FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl8');
        }
      }, {
        key: "categoryCategory9FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl9');
        }
      }, {
        key: "categoryCategory10FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl10');
        }
      }, {
        key: "categoryCategory11FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl11');
        }
      }, {
        key: "categoryCategory12FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl12');
        }
      }]);

      return ProductSearchBoxComponent;
    }();

    ProductSearchBoxComponent.ɵfac = function ProductSearchBoxComponent_Factory(t) {
      return new (t || ProductSearchBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_15__["ProductService"]));
    };

    ProductSearchBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductSearchBoxComponent,
      selectors: [["app-product-search"]],
      viewQuery: function ProductSearchBoxComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productSearchModal = _t.first);
        }
      },
      hostBindings: function ProductSearchBoxComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popstate", function ProductSearchBoxComponent_popstate_HostBindingHandler($event) {
            return ctx.onPopState($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 11,
      vars: 3,
      consts: [[1, "browse", "py-1"], [1, "container", 2, "margin-top", "120px"], [1, "row"], [1, "col-sm-12"], ["class", "col-sm-12", 4, "ngIf"], [1, "container", 2, "margin-top", "5px"], ["class", "col-12 mb-1", 4, "ngIf"], ["class", "browse py-1", 4, "ngIf"], [3, "formGroup"], [1, "form-row"], ["type", "text", "id", "inlineFormInputName2", "name", "searchKey", "placeholder", "Search", "formControlName", "titleKeywordFormControl", 1, "form-control-search", "w-75", 3, "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], [2, "margin-left", "10px", "margin-top", "5px"], [3, "click"], [1, "fas", "fa-search", "fa-lg"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col-12", "mb-1"], ["action", "", 1, "p-2", "bg-white", 3, "formGroup"], [1, "col-auto", "col-md-4", "col-lg-4", "col-xl-2", 2, "margin-top", "4px"], [1, "col-auto", "col-md-4", "col-lg-4", "col-xl-2"], ["id", "categoryItems", "bindLabel", "label", "bindValue", "label", "name", "category", "formControlName", "categoryCategoryFormControl", 3, "items", "clearable", "searchable", "ngModel", "ngModelChange", "change"], [1, "container"], [1, "col-sm-12", "col-md-8", "mb-1"], [1, "text-left", "w-100", "mb-0", 2, "margin-top", "10px"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["style", "margin-top: 5px;", "class", "col-6 col-md-3 col-lg-3 col-xl-3", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 col-md-6 col-lg-3 mb-3", 4, "ngIf"], [1, "text-right", "my-4", "loadmore"], ["class", "btn btn-sm btn-danger showMoreButton", 3, "click", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], ["role", "alert", 1, "alert", "alert-warning"], [1, "col-6", "col-md-3", "col-lg-3", "col-xl-3", 2, "margin-top", "5px"], [3, "product", "page"], [1, "col-sm-12", "col-md-6", "col-lg-3", "mb-3"], [1, "btn", "btn-sm", "btn-danger", "showMoreButton", 3, "click"]],
      template: function ProductSearchBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductSearchBoxComponent_div_6_Template, 8, 5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductSearchBoxComponent_div_9_Template, 8, 8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductSearchBoxComponent_section_10_Template, 21, 17, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchType === "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchType === "category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _shared_pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_18__["ProductCardComponent"], _shared_pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_19__["ProductCardLoadingComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["SlicePipe"], _shared_pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_20__["ProductFilterPipe"]],
      styles: [".customSearch[_ngcontent-%COMP%] {\n  width: 65%;\n  margin-bottom: 30px;\n}\n\n#sortItems[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n@media (max-width: 992px) {\n  .customSearch[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media (max-width: 697px) {\n  #categoryItems[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n@media (max-width: 576px) {\n  .customSearch[_ngcontent-%COMP%], #categoryItems[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.empty[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9kdWN0cy9wcm9kdWN0LXNlYXJjaC1ib3gvRDpcXFdvcmtzcGFjZVxcYXJ0aWFyYS1uZy1hcHAtbmV3L3NyY1xcYXBwXFxtYWluXFxwcm9kdWN0c1xccHJvZHVjdC1zZWFyY2gtYm94XFxwcm9kdWN0LXNlYXJjaC1ib3guY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL21haW4vcHJvZHVjdHMvcHJvZHVjdC1zZWFyY2gtYm94L3Byb2R1Y3Qtc2VhcmNoLWJveC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRGtCQTtFQUNJLGdCQUFBO0FDZko7O0FEaUJBO0VBQ0k7SUFDSSxVQUFBO0VDZE47QUFDRjs7QURnQkE7RUFDSztJQUNHLGVBQUE7RUNkTjtBQUNGOztBRGVBO0VBQ0k7SUFDSSxXQUFBO0VDYk47QUFDRjs7QURrQkE7RUFDSSxhQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9wcm9kdWN0cy9wcm9kdWN0LXNlYXJjaC1ib3gvcHJvZHVjdC1zZWFyY2gtYm94LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbVNlYXJjaFxyXG4gICAgd2lkdGg6IDY1JVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweFxyXG5cclxuXHJcbi8vIC5zZWFyY2hcclxuLy8gICAgIHdpZHRoOiAxMDAlXHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhXHJcblxyXG4vLyAgICAgZm9ybVxyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNylcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuXHJcbi8vICAgICAgICAgLmlucHV0LWdyb3VwLXRleHQsIGlucHV0XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbi8vICAgICAgICAgICAgIGJvcmRlcjogbm9uZVxyXG5cclxuLy8gICAgICAgICBpbnB1dFxyXG4vLyAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRTlFOUU5XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBcclxuXHJcbiNzb3J0SXRlbXNcclxuICAgIG1pbi13aWR0aDogMTQwcHhcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkgXHJcbiAgICAuY3VzdG9tU2VhcmNoXHJcbiAgICAgICAgd2lkdGg6IDgwJVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2OTdweClcclxuICAgICAjY2F0ZWdvcnlJdGVtc1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgXHJcbiAgICAuY3VzdG9tU2VhcmNoLCAjY2F0ZWdvcnlJdGVtc1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcblxyXG4gICAgLy8gLnNlYXJjaCBmb3JtIGlucHV0XHJcbiAgICAvLyAgICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgI0U5RTlFOVxyXG5cclxuXHJcbi5lbXB0eTplbXB0eVxyXG4gICAgZGlzcGxheTogbm9uZSIsIi5jdXN0b21TZWFyY2gge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jc29ydEl0ZW1zIHtcbiAgbWluLXdpZHRoOiAxNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jdXN0b21TZWFyY2gge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2OTdweCkge1xuICAjY2F0ZWdvcnlJdGVtcyB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmN1c3RvbVNlYXJjaCwgI2NhdGVnb3J5SXRlbXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZW1wdHk6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSearchBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-search',
          templateUrl: './product-search-box.component.html',
          styleUrls: ['./product-search-box.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["BsModalService"]
        }, {
          type: src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_15__["ProductService"]
        }];
      }, {
        productSearchModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['productSearchModal', {
            "static": false
          }]
        }],
        onPopState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:popstate', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/products/product-search/product-search.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/main/products/product-search/product-search.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ProductSearchComponent */

  /***/
  function srcAppMainProductsProductSearchProductSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductSearchComponent", function () {
      return ProductSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_models_searchlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/models/searchlog */
    "./src/app/shared/models/searchlog.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/models/searchstatus */
    "./src/app/shared/models/searchstatus.ts");
    /* harmony import */


    var src_app_shared_ng_select_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/ng-select/items */
    "./src/app/shared/ng-select/items.ts");
    /* harmony import */


    var src_app_shared_enums_category_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/enums/category.enum */
    "./src/app/shared/enums/category.enum.ts");
    /* harmony import */


    var src_app_shared_enums_productType_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/enums/productType.enum */
    "./src/app/shared/enums/productType.enum.ts");
    /* harmony import */


    var src_app_shared_enums_retailertype_ui_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/enums/retailertype_ui.enum */
    "./src/app/shared/enums/retailertype_ui.enum.ts");
    /* harmony import */


    var src_app_shared_enums_priceRange_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/enums/priceRange.enum */
    "./src/app/shared/enums/priceRange.enum.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_models_extractionstatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/models/extractionstatus */
    "./src/app/shared/models/extractionstatus.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/core/product.service */
    "./src/app/shared/core/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _shared_pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/pt-components/product-card/product-card.component */
    "./src/app/shared/pt-components/product-card/product-card.component.ts");
    /* harmony import */


    var _shared_pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/pt-components/product-card-loading/product-card-loading.component */
    "./src/app/shared/pt-components/product-card-loading/product-card-loading.component.ts");
    /* harmony import */


    var _shared_pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/pipe/productfilter.pipe */
    "./src/app/shared/pipe/productfilter.pipe.ts");

    var _c0 = ["productSearchModal"];
    var _c1 = ["productSortModal"];

    function ProductSearchComponent_div_4_div_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a style name!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductSearchComponent_div_4_div_5_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Keyword should be more than 3 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductSearchComponent_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductSearchComponent_div_4_div_5_span_1_Template, 2, 0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductSearchComponent_div_4_div_5_span_2_Template, 2, 0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r172.titleKeywordFC == null ? null : ctx_r172.titleKeywordFC.errors == null ? null : ctx_r172.titleKeywordFC.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r172.titleKeywordFC == null ? null : ctx_r172.titleKeywordFC.errors == null ? null : ctx_r172.titleKeywordFC.errors.minlength);
      }
    }

    function ProductSearchComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_div_4_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176);

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r175.searchKey = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductSearchComponent_div_4_div_5_Template, 3, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_div_4_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r177.callSearchProducts("title", "All", "All", "All", "All", "All", "All", "All", "All", "All", "All", "All", "All");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r165.titleSearchFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r165.titleSearchFormGroup.get("titleKeywordFormControl").invalid && ctx_r165.titleSearchFormGroup.get("titleKeywordFormControl").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r165.searchKey);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r165.titleKeywordFC.invalid && ctx_r165.titleKeywordFC.touched || ctx_r165.titleKeywordFC.dirty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r165.isSearchInProgress);
      }
    }

    function ProductSearchComponent_div_5_div_7_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a category!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductSearchComponent_div_5_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductSearchComponent_div_5_div_7_span_1_Template, 2, 0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r178.categoryCategory1FC == null ? null : ctx_r178.categoryCategory1FC.errors);
      }
    }

    function ProductSearchComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_div_5_Template_ng_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181);

          var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r180.category = $event;
        })("change", function ProductSearchComponent_div_5_Template_ng_select_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r182.callSearchProductsFilterByCategory("category", ctx_r182.category);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductSearchComponent_div_5_div_7_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r166.categorySearchFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r166.categorySearchFormGroup.get("categoryCategoryFormControl").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r166.categoryItems)("clearable", true)("searchable", true)("ngModel", ctx_r166.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r166.categoryCategory1FC.invalid);
      }
    }

    function ProductSearchComponent_section_6_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r183.errorMessage, " Please relax the filter. ");
      }
    }

    function ProductSearchComponent_section_6_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Products Found, Please try to Clear filter. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductSearchComponent_section_6_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r191 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r191)("page", "product-search");
      }
    }

    function ProductSearchComponent_section_6_app_product_card_loading_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card-loading", 41);
      }
    }

    function ProductSearchComponent_section_6_app_product_card_loading_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card-loading", 41);
      }
    }

    function ProductSearchComponent_section_6_app_product_card_loading_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card-loading", 41);
      }
    }

    function ProductSearchComponent_section_6_app_product_card_loading_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card-loading", 41);
      }
    }

    function ProductSearchComponent_section_6_button_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_section_6_button_28_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r193.noOfProductsToShow = ctx_r193.noOfProductsToShow + 16;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductSearchComponent_section_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_section_6_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196);

          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r195.openProductSearchModal("model-lg");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Filter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_section_6_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196);

          var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r197.openProductSortModal("model-lg");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sort");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_section_6_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196);

          var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r198.callSearchProductsFilterClearAll("category", ctx_r198.category);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Clear Filter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductSearchComponent_section_6_div_16_Template, 3, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductSearchComponent_section_6_div_18_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductSearchComponent_section_6_div_19_Template, 2, 2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "productfilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductSearchComponent_section_6_app_product_card_loading_22_Template, 1, 0, "app-product-card-loading", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductSearchComponent_section_6_app_product_card_loading_23_Template, 1, 0, "app-product-card-loading", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProductSearchComponent_section_6_app_product_card_loading_24_Template, 1, 0, "app-product-card-loading", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductSearchComponent_section_6_app_product_card_loading_25_Template, 1, 0, "app-product-card-loading", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProductSearchComponent_section_6_button_28_Template, 2, 0, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Found ", ctx_r167.totalSuccessProductsFound, " products in Category ", ctx_r167.category, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r167.isSearchError);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r167.isSearchInProgress && ctx_r167.searchLog.totalProductsToSearch == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](20, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 14, ctx_r167.products, ctx_r167.filterargs), 0, ctx_r167.noOfProductsToShow));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r167.isSearchInProgress && ctx_r167.noOfProductsToShow >= ctx_r167.totalSuccessProductsFound);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r167.showLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r167.showLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r167.showLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r167.noOfProductsToShow < ctx_r167.totalSuccessProductsFound);
      }
    }

    function ProductSearchComponent_ng_template_7_div_6_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Discount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_div_27_Template_ng_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207);

          var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r206.outfitType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r200.productTypeItems)("clearable", false)("searchable", false)("ngModel", ctx_r200.outfitType);
      }
    }

    function ProductSearchComponent_ng_template_7_div_6_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Neck");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_div_29_Template_ng_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r208.neckType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r201.neckTypeItems)("clearable", false)("searchable", false)("ngModel", ctx_r201.neckType);
      }
    }

    function ProductSearchComponent_ng_template_7_div_6_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_div_30_Template_ng_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211);

          var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r210.fittingType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r202.fittingTypeItems)("clearable", false)("searchable", false)("ngModel", ctx_r202.fittingType);
      }
    }

    function ProductSearchComponent_ng_template_7_div_6_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sleeves");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_div_31_Template_ng_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r213);

          var ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r212.sleeveLength = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r203.sleeveLengthItems)("clearable", false)("searchable", false)("ngModel", ctx_r203.sleeveLength);
      }
    }

    function ProductSearchComponent_ng_template_7_div_6_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fabric");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_div_32_Template_ng_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r215);

          var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r214.ornamentation = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r204.ornamentationItems)("clearable", false)("searchable", false)("ngModel", ctx_r204.ornamentation);
      }
    }

    function ProductSearchComponent_ng_template_7_div_6_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pattern or Ornamentation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_div_33_Template_ng_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217);

          var ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r216.patternType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r205.patternTypeItems)("clearable", false)("searchable", false)("ngModel", ctx_r205.patternType);
      }
    }

    function ProductSearchComponent_ng_template_7_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_ng_template_7_div_6_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          ctx_r218.callSearchProducts("category", ctx_r218.category, ctx_r218.outfitType, ctx_r218.brandName, ctx_r218.color, ctx_r218.priceRange, ctx_r218.neckType, ctx_r218.fittingType, ctx_r218.sleeveLength, ctx_r218.patternType, ctx_r218.borderStyle, ctx_r218.retailerType, ctx_r218.ornamentation);
          return ctx_r218.productSearchModalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Apply Filter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ng-select", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_Template_ng_select_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r220.category = $event;
        })("change", function ProductSearchComponent_ng_template_7_div_6_Template_ng_select_change_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r221.hideExtraFormControls(ctx_r221.category);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Brand");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ng-select", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_Template_ng_select_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r222.brandName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Coloration");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-select", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_Template_ng_select_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r223.color = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ng-select", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_Template_ng_select_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r224.priceRange = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Retailer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-select", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_7_div_6_Template_ng_select_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r225.retailerType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductSearchComponent_ng_template_7_div_6_div_27_Template, 4, 4, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProductSearchComponent_ng_template_7_div_6_div_29_Template, 4, 4, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductSearchComponent_ng_template_7_div_6_div_30_Template, 4, 4, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProductSearchComponent_ng_template_7_div_6_div_31_Template, 4, 4, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductSearchComponent_ng_template_7_div_6_div_32_Template, 4, 4, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProductSearchComponent_ng_template_7_div_6_div_33_Template, 4, 4, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_ng_template_7_div_6_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          ctx_r226.callSearchProducts("category", ctx_r226.category, ctx_r226.outfitType, ctx_r226.brandName, ctx_r226.color, ctx_r226.priceRange, ctx_r226.neckType, ctx_r226.fittingType, ctx_r226.sleeveLength, ctx_r226.patternType, ctx_r226.borderStyle, ctx_r226.retailerType, ctx_r226.ornamentation);
          return ctx_r226.productSearchModalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Apply Filter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r199.categorySearchFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r199.categoryItems)("clearable", false)("searchable", false)("ngModel", ctx_r199.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r199.brandNameItems)("clearable", false)("searchable", false)("ngModel", ctx_r199.brandName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r199.colorItems)("clearable", false)("searchable", false)("ngModel", ctx_r199.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r199.priceRangeItems)("clearable", false)("searchable", false)("ngModel", ctx_r199.priceRange);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r199.retailerTypeItemsUi)("clearable", false)("searchable", false)("ngModel", ctx_r199.retailerType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r199.disabledCondition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r199.disabledCondition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r199.disabledCondition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r199.disabledCondition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r199.disabledCondition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r199.disabledCondition);
      }
    }

    function ProductSearchComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_ng_template_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r228);

          var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r227.productSearchModalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductSearchComponent_ng_template_7_div_6_Template, 37, 27, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_ng_template_7_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r228);

          var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r229.productSearchModalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r169.searchType === "category");
      }
    }

    function ProductSearchComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_ng_template_9_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r231);

          var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r230.productSortModalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-select", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSearchComponent_ng_template_9_Template_ng_select_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r231);

          var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r232.selectedSortItem = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSearchComponent_ng_template_9_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r231);

          var ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r233.sortItemChange(ctx_r233.selectedSortItem);
          return ctx_r233.productSortModalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Apply Sort ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r171.sortItems)("clearable", false)("ngModel", ctx_r171.selectedSortItem);
      }
    }

    var ProductSearchComponent = /*#__PURE__*/function () {
      function ProductSearchComponent(router, route, modalService, productService) {
        _classCallCheck(this, ProductSearchComponent);

        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.productService = productService;
        this.searchLog = new src_app_shared_models_searchlog__WEBPACK_IMPORTED_MODULE_1__["SearchLog"]();
        this.lastOutfitType = [];
        this.lastBrandName = [];
        this.lastColor = [];
        this.lastPatternType = [];
        this.lastBorderStyle = [];
        this.lastOrnamentation = [];
        this.lastSleeveLength = [];
        this.lastFittingType = [];
        this.lastRetailerType = [];
        this.lastNeckType = [];
        this.lastPriceRange = [];
        this.outfitType = [];
        this.brandName = [];
        this.color = [];
        this.priceRange = [];
        this.neckType = [];
        this.sleeveLength = [];
        this.fittingType = [];
        this.patternType = [];
        this.retailerType = [];
        this.borderStyle = [];
        this.ornamentation = [];
        this.noOfProductsToShow = 16; // filterargs = {extractioStatus: 'SUCCESS'};

        this.filterargs = {
          extractioStatus: src_app_shared_models_extractionstatus__WEBPACK_IMPORTED_MODULE_10__["ExtractionStatus"].SUCCESS
        };
        this.titleSearchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
          /*  titleZipcodeFormControl: new FormControl({value: '', disabled: this.isSearchInProgress},[
             Validators.pattern("^[0-9]*$"),
             Validators.minLength(5),
             Validators.maxLength(7)
           ]),
           titleKeywordFormControl: new FormControl({value: '', disabled: this.isSearchInProgress},[
             Validators.required,
             Validators.minLength(3)
           ]) */
        });
        this.categorySearchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
          categoryZipcodeFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(7)]),
          categoryCategoryFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl1: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl3: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl4: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl5: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl6: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl7: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl8: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl9: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl10: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl11: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
          categoryCategoryFormControl12: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])
        });
        this.sortItems = src_app_shared_ng_select_items__WEBPACK_IMPORTED_MODULE_4__["SortItems"];
        this.categoryItems = src_app_shared_enums_category_enum__WEBPACK_IMPORTED_MODULE_5__["CategoryItems"];
        this.productTypeItems = src_app_shared_enums_productType_enum__WEBPACK_IMPORTED_MODULE_6__["ProductTypeItems"]; //this.brandNameItems = BrandNameItems;
        //this.colorItems = ColorItems;

        this.priceRangeItems = src_app_shared_enums_priceRange_enum__WEBPACK_IMPORTED_MODULE_8__["PriceRangeItems"]; //this.patternTypeItems = PatternTypeItems;
        //this.sleeveLengthItems = SleeveLengthItems;
        //this.fittingTypeItems = FittingTypeItems;
        //this.neckTypeItems = NeckStyleItems;
        //this.retailerTypeItems =  RetailerTypeItems;

        this.retailerTypeItemsUi = src_app_shared_enums_retailertype_ui_enum__WEBPACK_IMPORTED_MODULE_7__["RetailerTypeItemsUi"]; //this.borderStylesItems =  BorderStylesItems;
        //this.ornamentationItems = OrnamentationItems;
      }

      _createClass(ProductSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          if (sessionStorage.getItem('category') != 'undefined') {
            this.lastCategory = JSON.parse(sessionStorage.getItem('category'));
          }

          if (sessionStorage.getItem('brandName') != 'undefined') {
            this.lastBrandName = JSON.parse(sessionStorage.getItem('brandName'));
          }

          if (sessionStorage.getItem('color') != 'undefined') {
            this.lastColor = JSON.parse(sessionStorage.getItem('color'));
          }

          if (sessionStorage.getItem('patternType') != 'undefined') {
            this.lastPatternType = JSON.parse(sessionStorage.getItem('patternType'));
          }

          if (sessionStorage.getItem('sleeveLength') != 'undefined') {
            this.lastSleeveLength = JSON.parse(sessionStorage.getItem('sleeveLength'));
          }

          if (sessionStorage.getItem('neckType') != 'undefined') {
            this.lastNeckType = JSON.parse(sessionStorage.getItem('neckType'));
          }

          if (sessionStorage.getItem('retailerType') != 'undefined') {
            this.lastRetailerType = JSON.parse(sessionStorage.getItem('retailerType'));
          }

          if (sessionStorage.getItem('ornamentation') != 'undefined') {
            this.lastOrnamentation = JSON.parse(sessionStorage.getItem('ornamentation'));
          }

          if (sessionStorage.getItem('fittingType') != 'undefined') {
            this.lastFittingType = JSON.parse(sessionStorage.getItem('fittingType'));
          }

          if (sessionStorage.getItem('priceRange') != 'undefined') {
            this.lastPriceRange = JSON.parse(sessionStorage.getItem('priceRange'));
          }

          this.route.queryParams.pipe().subscribe(function (params) {
            _this10.searchType = _this10.route.snapshot.paramMap.get("searchtype");
            _this10.searchKey = params.kw;
            _this10.zipcode = params.zip; //this.isDropDownsLoaed = JSON.parse(sessionStorage.getItem('isDropDownsLoaed'));;
            //if(this.isDropDownsLoaed != true){

            if (params.category == null) {//this.getDropDownValuesOnLoad('all');
            } else {
              _this10.getDropDownValuesOnLoad(params.category);
            } //sessionStorage.setItem('isDropDownsLoaed', JSON.stringify(true));
            //}


            if (_this10.category == null) {
              _this10.category = params.category; //this.outfitType = params.lastOutfitType;

              if (_this10.lastBrandName != null && _this10.lastBrandName != undefined) {
                _this10.brandName = _this10.lastBrandName;
              }

              if (_this10.lastColor != null && _this10.lastColor != undefined) {
                _this10.color = _this10.lastColor;
              }

              if (_this10.lastPriceRange != null && _this10.lastPriceRange != undefined) {
                _this10.priceRange = _this10.lastPriceRange;
              }

              if (_this10.lastPatternType != null && _this10.lastPatternType != undefined) {
                _this10.patternType = _this10.lastPatternType;
              }

              if (_this10.lastNeckType != null && _this10.lastNeckType != undefined) {
                _this10.neckType = _this10.lastNeckType;
              }

              if (_this10.lastSleeveLength != null && _this10.lastSleeveLength != undefined) {
                _this10.sleeveLength = _this10.lastSleeveLength;
              }

              if (_this10.fittingType != null && _this10.fittingType != undefined) {
                _this10.fittingType = _this10.fittingType;
              }

              if (_this10.lastRetailerType != null && _this10.lastRetailerType != undefined) {
                _this10.retailerType = _this10.lastRetailerType;
              }

              if (_this10.ornamentation != null && _this10.ornamentation != undefined) {
                _this10.ornamentation = _this10.lastOrnamentation;
              } // Call below function only when there is any change in keyword or zipcode


              if (_this10.category !== _this10.lastCategory || _this10.searchKey !== _this10.lastSearchKey || _this10.zipcode !== _this10.lastZipcode || _this10.outfitType !== _this10.lastOutfitType || _this10.brandName !== _this10.lastBrandName || _this10.color !== _this10.lastColor || _this10.patternType !== _this10.lastPatternType || _this10.borderStyle !== _this10.lastBorderStyle || _this10.sleeveLength !== _this10.lastSleeveLength || _this10.fittingType !== _this10.lastFittingType || _this10.neckType !== _this10.lastNeckType || _this10.retailerType !== _this10.lastRetailerType || _this10.ornamentation !== _this10.lastOrnamentation) {
                _this10.cancelSearch();

                window.scroll(0, 0);
                setTimeout(function () {
                  if (_this10.searchType === 'title' && _this10.titleKeywordFC.valid || _this10.searchType === 'category' && _this10.categoryCategoryFC.valid) {
                    _this10.callSearchProducts(_this10.searchType, _this10.category, _this10.outfitType, _this10.brandName, _this10.color, _this10.priceRange, _this10.neckType, _this10.fittingType, _this10.sleeveLength, _this10.patternType, _this10.borderStyle, _this10.retailerType, _this10.ornamentation);
                  }
                }, 100);
              }

              if (_this10.category == 'Handbags' || _this10.category == 'Watches' || _this10.category == 'Sunglasses' || _this10.category == 'Hair Accessory' || _this10.category == 'Mobile Accessories' || _this10.category == 'Other Accessories' || _this10.category == 'Flats' || _this10.category == 'Heels' || _this10.category == 'Boots' || _this10.category == 'Casual Shoes' || _this10.category == 'Sports Shoes' || _this10.category == 'Sandals') {
                _this10.disabledCondition = true;
              } else {
                _this10.disabledCondition = false;
              }

              _this10.lastSearchKey = params.kw;
              _this10.lastZipcode = params.zip; //this.lastCategory = params.category;
              //this.lastOutfitType = params.outfitType;
              //this.brandName = params.brandName;
              //this.color = params.color;

              _this10.selectedSortItem = params.pr;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // if (this.searchStatusSubscription) {
          //   this.searchStatusSubscription.unsubscribe();  
          // }
          // this.isSearchInProgress = false;
          this.cancelSearch();
        }
      }, {
        key: "updateQueryParams",
        value: function updateQueryParams() {
          var queryParams = {
            kw: this.searchKey,
            zip: this.zipcode,
            category: this.category
          };
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: queryParams,
            queryParamsHandling: 'merge'
          });
        }
      }, {
        key: "callSearchProductsFilterByCategory",
        value: function callSearchProductsFilterByCategory(searchType, category) {
          this.callSearchProducts(searchType, category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByOutfitType",
        value: function callSearchProductsFilterByOutfitType(searchType, outfitType) {
          this.callSearchProducts(searchType, this.category, outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByBrandName",
        value: function callSearchProductsFilterByBrandName(searchType, brandName) {
          this.callSearchProducts(searchType, this.category, this.outfitType, brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByColor",
        value: function callSearchProductsFilterByColor(searchType, color) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByPriceRange",
        value: function callSearchProductsFilterByPriceRange(searchType, priceRange) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByNeckType",
        value: function callSearchProductsFilterByNeckType(searchType, neckType) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByFittingType",
        value: function callSearchProductsFilterByFittingType(searchType, fittingType) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterBySleeveLength",
        value: function callSearchProductsFilterBySleeveLength(searchType, sleeveLength) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByPattern",
        value: function callSearchProductsFilterByPattern(searchType, patternType) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByBorderStyle",
        value: function callSearchProductsFilterByBorderStyle(searchType, borderStyle) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByRetailer",
        value: function callSearchProductsFilterByRetailer(searchType, retailerType) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, retailerType, this.ornamentation);
        }
      }, {
        key: "callSearchProductsFilterByOrnamentation",
        value: function callSearchProductsFilterByOrnamentation(searchType, ornamentation) {
          this.callSearchProducts(searchType, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, ornamentation);
        }
      }, {
        key: "callSearchProductsFilterClearAll",
        value: function callSearchProductsFilterClearAll(searchType, category) {
          this.callSearchProducts(searchType, category, 'All', 'All', 'All', 'All', 'All', 'All', 'All', 'All', 'All', 'All', 'All');
        }
      }, {
        key: "callSearchProducts",
        value: function callSearchProducts(searchType, category, outfitType, brandName, color, priceRange, neckType, fittingType, sleeveLength, patternType, borderStyle, retailerType, ornamentation) {
          var _this11 = this;

          if (this.searchType === 'title' && this.titleKeywordFC.valid || this.searchType === 'category' && this.categoryCategoryFC.valid) {
            sessionStorage.setItem('category', JSON.stringify(category));
            sessionStorage.setItem('outfitType', JSON.stringify(outfitType));
            sessionStorage.setItem('brandName', JSON.stringify(brandName));
            sessionStorage.setItem('color', JSON.stringify(color));
            sessionStorage.setItem('patternType', JSON.stringify(patternType));
            sessionStorage.setItem('sleeveLength', JSON.stringify(sleeveLength));
            sessionStorage.setItem('neckType', JSON.stringify(neckType));
            sessionStorage.setItem('retailerType', JSON.stringify(retailerType));
            sessionStorage.setItem('ornamentation', JSON.stringify(ornamentation));
            sessionStorage.setItem('priceRange', JSON.stringify(priceRange));
            sessionStorage.setItem('fittingType', JSON.stringify(fittingType)); //if(!this.isSearchInProgress) {

            this.category = category;
            this.outfitType = outfitType;
            this.brandName = brandName;
            this.color = color;
            this.priceRange = priceRange;
            this.neckType = neckType;
            this.fittingType = fittingType;
            this.sleeveLength = sleeveLength;
            this.patternType = patternType;
            this.borderStyle = borderStyle;
            this.retailerType = retailerType;
            this.ornamentation = ornamentation;
            this.totalSuccessProductsFound = 0;
            this.isSearchInProgress = true;
            this.noOfProductsToShow = 16; //this.disableFormControls();

            this.updateQueryParams();
            this.showLoading = true;
            this.products = [];
            this.searchLog = new src_app_shared_models_searchlog__WEBPACK_IMPORTED_MODULE_1__["SearchLog"]();
            this.searchLog.percentageCompleted = 0;
            this.isSearchError = false;
            this.searchSubscription = this.productService.searchProducts(this.searchKey, this.zipcode, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation).subscribe(function (res) {
              _this11.searchResult = res;
              _this11.products = _this11.shuffle(_this11.searchResult.products);

              _this11.getTotalSuccessProductsFound();

              _this11.searchLog = _this11.searchResult.searchLog;
              _this11.showLoading = false;
              _this11.isSearchPerformed = true;

              _this11.getQueryParams(); //this.calculatePercentage();
              //this.callGetSearchStatus();


              if (_this11.searchLog.searchStatus.toString() == src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__["SearchStatus"][src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__["SearchStatus"].Completed] || _this11.searchLog.totalProductsSearched > _this11.searchLog.totalProductsToSearch) {
                _this11.cancelSearch();

                if (window.dataLayer) {
                  //Passing Search Params To Datalayer
                  window.dataLayer.push({
                    'event': 'productCount',
                    'productNumber': _this11.totalSuccessProductsFound
                  });
                }
              }
            }, function (error) {
              _this11.errorMessage = error.error.message;
              _this11.showLoading = false;
              _this11.isSearchError = true;
              _this11.isSearchPerformed = true;
              _this11.isSearchInProgress = false; //this.enableFormControls();
              //this.hideExtraFormControls(this.category);
            }); // }
          }
        }
      }, {
        key: "callSearchProductsByTitle",
        value: function callSearchProductsByTitle(searchType) {
          var _this12 = this;

          if (this.searchType === 'title' && this.titleKeywordFC.valid || this.searchType === 'category' && this.categoryCategoryFC.valid) {
            //if(!this.isSearchInProgress) {
            this.category = this.category;
            this.outfitType = this.outfitType;
            this.brandName = this.brandName;
            this.color = this.color;
            this.priceRange = this.priceRange;
            this.neckType = this.neckType;
            this.fittingType = this.fittingType;
            this.sleeveLength = this.sleeveLength;
            this.patternType = this.patternType;
            this.borderStyle = this.borderStyle;
            this.retailerType = this.retailerType;
            this.ornamentation = this.ornamentation;
            this.totalSuccessProductsFound = 0;
            this.isSearchInProgress = true;
            this.noOfProductsToShow = 16; //this.disableFormControls();

            this.updateQueryParams();
            this.showLoading = true;
            this.products = [];
            this.searchLog = new src_app_shared_models_searchlog__WEBPACK_IMPORTED_MODULE_1__["SearchLog"]();
            this.searchLog.percentageCompleted = 0;
            this.isSearchError = false;
            this.searchSubscription = this.productService.searchProducts(this.searchKey, this.zipcode, this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation).subscribe(function (res) {
              _this12.searchResult = res;
              _this12.products = _this12.shuffle(_this12.searchResult.products);

              _this12.getTotalSuccessProductsFound();

              _this12.searchLog = _this12.searchResult.searchLog;
              _this12.showLoading = false;
              _this12.isSearchPerformed = true;

              _this12.getQueryParams();

              _this12.calculatePercentage();

              _this12.callGetSearchStatus();

              if (_this12.searchLog.searchStatus.toString() == src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__["SearchStatus"][src_app_shared_models_searchstatus__WEBPACK_IMPORTED_MODULE_3__["SearchStatus"].Completed] || _this12.searchLog.totalProductsSearched > _this12.searchLog.totalProductsToSearch) {
                _this12.cancelSearch();

                if (window.dataLayer) {
                  //Passing Search Params To Datalayer
                  window.dataLayer.push({
                    'event': 'productCount',
                    'productNumber': _this12.totalSuccessProductsFound
                  });
                }
              }
            }, function (error) {
              _this12.errorMessage = error.error.message;
              _this12.showLoading = false;
              _this12.isSearchError = true;
              _this12.isSearchPerformed = true;
              _this12.isSearchInProgress = false; //this.enableFormControls();
              //this.hideExtraFormControls(this.category);
            }); // }
          }
        }
      }, {
        key: "getQueryParams",
        value: function getQueryParams() {
          var _this13 = this;

          this.route.queryParams.pipe().subscribe(function (params) {
            if (params.pr && params.pr !== '') {
              _this13.sortProducts('price', params.pr);

              _this13.selectedSortItem = params.pr;
            } else if (params.av && params.av !== '') {
              _this13.sortProducts('availability', params.av);

              _this13.selectedSortItem = params.av;
            }
          });
        }
      }, {
        key: "getPrdocutsByCategory",
        value: function getPrdocutsByCategory() {
          var _this14 = this;

          //This is for passing data to datalayer for google analytics
          if (window.dataLayer) {
            window.dataLayer.push({
              'CategoryName': this.category
            });
          }

          ;
          this.products = [];
          this.productService.getProductsByCategory(this.category).subscribe(function (res) {
            // console.log(res);
            _this14.products = _this14.shuffle(res); // this.retailerWiseProducts = this.groupBy(this.products, 'retailerType');
            // console.log(this.groupBy(this.products, 'retailerType'));

            _this14.getQueryParams();
          });
        }
      }, {
        key: "getDropDownValuesOnLoad",
        value: function getDropDownValuesOnLoad(itemName) {
          var _this15 = this;

          this.productService.getDropDownValues(itemName).subscribe(function (res) {
            _this15.brandNameItems = res.brandnames; //this.productTypeItems = res.outfitTypes;

            _this15.neckTypeItems = res.neckTypes;
            _this15.fittingTypeItems = res.fittingTypes;
            _this15.sleeveLengthItems = res.sleeves;
            _this15.ornamentationItems = res.ornamentations;
            _this15.patternTypeItems = res.patternTypes; //this.borderStylesItems = res.borders;

            _this15.colorItems = res.colors;
          });
        }
      }, {
        key: "shuffle",
        value: function shuffle(array) {
          var currentIndex = array.length,
              temporaryValue,
              randomIndex; // While there remain elements to shuffle...

          while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1; // And swap it with the current element.

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

      }, {
        key: "sortProducts",
        value: function sortProducts(property, criteria) {
          var _this16 = this;

          this.updateQueryParamsForSort(property, criteria);

          if (property == 'price') {
            if (criteria == 'l2h') {
              this.products.sort(function (a, b) {
                return a.cost - b.cost;
              }); // Move cost 0 to last

              for (var i = this.products.length - 1; i >= 0; i--) {
                this.products.forEach(function (product, index) {
                  if (product.cost == 0) {
                    // Move this object to last position in the array
                    _this16.products.push(_this16.products.splice(index, 1)[0]);
                  }
                });
              }
            } else if (criteria == 'h2l') {
              this.products.sort(function (a, b) {
                return b.cost - a.cost;
              });
            }
          } else if (property == 'availability') {
            if (criteria == 'is') {
              var inStockProducts = this.products.filter(function (product) {
                return product.availability && product.availability.toString() === "In_stock";
              }).length;
              var laProducts = this.products.filter(function (product) {
                return product.availability && product.availability.toString() === "Limited_availability";
              }).length;
              var inStockIndex = 0;
              var limitedAvailabilityIndex = inStockProducts; // All In_stock products first, in order

              this.products.forEach(function (product, i) {
                if (product.availability && product.availability.toString() === "In_stock") {
                  _this16.products.splice(i, 1);

                  _this16.products.splice(inStockIndex, 0, product);

                  inStockIndex = inStockIndex + 1;
                }
              }); // All Limited_availability products after In_stock, in order

              this.products.forEach(function (product, i) {
                if (product.availability && product.availability.toString() === "Limited_availability") {
                  _this16.products.splice(i, 1);

                  _this16.products.splice(limitedAvailabilityIndex, 0, product);

                  limitedAvailabilityIndex = limitedAvailabilityIndex + 1;
                }
              });
            }
          }
        }
      }, {
        key: "updateQueryParamsForSort",
        value: function updateQueryParamsForSort(property, criteria) {
          if (property === 'price' && criteria === 'l2h') {} else if (property === 'price' && criteria === 'h2l') {} // const queryParams: Params = {
          //   pr: property === 'price' ? criteria : '',
          //   av: property === 'availability' ? criteria : ''
          // };


          var queryParams = {};

          if (property === 'price') {
            queryParams = {
              pr: criteria
            };
          } else if (property === 'availability') {
            queryParams = {
              av: criteria
            };
          }

          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: queryParams,
            queryParamsHandling: 'merge'
          });
        }
      }, {
        key: "calculatePercentage",
        value: function calculatePercentage() {
          // this.searchLog.percentageCompleted = Math.round((this.searchLog.totalProductsSearched/this.searchLog.totalProductsToSearch) * 100);
          if (this.searchLog.totalProductsToSearch != 0) {
            this.searchLog.percentageCompleted = Math.round(this.products.length / this.searchLog.totalProductsToSearch * 100);
          } else {
            this.searchLog.percentageCompleted = 0;
          }
        }
      }, {
        key: "callGetSearchStatus",
        value: function callGetSearchStatus() {
          var _this17 = this;

          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(3000);
          this.searchStatusSubscription = source.subscribe(function (val) {
            _this17.getSearchStatus();
          });
        }
      }, {
        key: "getSearchStatus",
        value: function getSearchStatus() {
          var _this18 = this;

          this.productService.getSearchStatus(this.searchLog.spIds).subscribe(function (res) {
            _this18.searchStatus = res; // this.searchLog = this.searchStatus.searchLog;

            var productIds = new Set(_this18.products.map(function (product) {
              return product.productId;
            }));
            var mergedProducts = [].concat(_toConsumableArray(_this18.products), _toConsumableArray(_this18.searchStatus.products.filter(function (product) {
              return !productIds.has(product.productId);
            })));
            _this18.products = mergedProducts;

            _this18.getTotalSuccessProductsFound();

            _this18.calculatePercentage(); // To sort on live search


            _this18.getQueryParams(); // if(this.searchStatus.searchLog.searchStatus.toString() === SearchStatus[SearchStatus.Completed]) {
            //   this.cancelSearch();
            // }


            if (_this18.searchLog.percentageCompleted == 100 || _this18.products.length == _this18.searchLog.totalProductsToSearch) {
              _this18.cancelSearch();

              if (window.dataLayer) {
                //Passing Search Params To Datalayer
                window.dataLayer.push({
                  'event': 'productCount',
                  'productNumber': _this18.totalSuccessProductsFound
                });
              }
            }
          });
        }
      }, {
        key: "cancelSearch",
        value: function cancelSearch() {
          if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
          }

          if (this.searchStatusSubscription) {
            this.searchStatusSubscription.unsubscribe();
          }

          this.isSearchInProgress = false; //this.enableFormControls();

          this.showLoading = false;
        }
      }, {
        key: "sortItemChange",
        value: function sortItemChange(value) {
          this.sortProducts('price', value);
        }
      }, {
        key: "categorySelectChange",
        value: function categorySelectChange(event) {// window.dataLayer.push({'CategoryName' : event.label});
          //   const queryParams: Params = {
          //     category: event.label
          //   };
          //   this.router.navigate(['/product/search/category/'], 
          //   {
          //     relativeTo: this.route,
          //     queryParams: queryParams, 
          //     queryParamsHandling: 'merge', // remove to replace all query params by provided
          //   });
          // console.log(event.label)
        }
      }, {
        key: "hideExtraFormControls",
        value: function hideExtraFormControls(category) {
          this.getDropDownValuesOnLoad(category);

          if (category == 'Handbags' || category == 'Watches' || category == 'Sunglasses' || category == 'Hair Accessory' || category == 'Mobile Accessories' || category == 'Other Accessories' || category == 'Flats' || category == 'Heels' || category == 'Boots' || category == 'Casual Shoes' || category == 'Sports Shoes' || category == 'Sandals' || category == 'Dupatta Shawl') {
            document.getElementById("filter2Dropdowns").hidden = true;
            this.disabledCondition = true;
          } else {
            document.getElementById("filter2Dropdowns").hidden = false;
            this.disabledCondition = false;
          }

          if (category == 'Skirts Palazzos' || category == 'Trousers' || category == 'Ethnic Bottomwear') {
            document.getElementById("neckTypeItems-div").hidden = true;
            document.getElementById("sleeveLengthItems-div").hidden = true;
          } else {
            document.getElementById("neckTypeItems-div").hidden = false;
            document.getElementById("sleeveLengthItems-div").hidden = false;
          }
        }
      }, {
        key: "getTotalSuccessProductsFound",
        value: function getTotalSuccessProductsFound() {
          this.totalSuccessProductsFound = this.products.filter(function (product) {
            return product.extractioStatus && product.extractioStatus.toString() === 'SUCCESS';
          }).length;
        }
      }, {
        key: "openProductSearchModal",
        value: function openProductSearchModal(classNames) {
          this.productSearchModalRef = this.modalService.show(this.productSearchModal, {
            "class": classNames
          }); //this.productSearchModalRef.setClass('modal-lg'); 
          // Remove query params
        }
      }, {
        key: "openProductSortModal",
        value: function openProductSortModal(classNames) {
          this.productSortModalRef = this.modalService.show(this.productSortModal, {
            "class": classNames
          }); //this.productSearchModalRef.setClass('modal-lg'); 
          // Remove query params
        }
      }, {
        key: "onPopState",
        value: function onPopState(event) {
          window.location.reload();
          this.callSearchProducts('category', this.category, this.outfitType, this.brandName, this.color, this.priceRange, this.neckType, this.fittingType, this.sleeveLength, this.patternType, this.borderStyle, this.retailerType, this.ornamentation);
        }
      }, {
        key: "titleZipcodeFC",
        get: function get() {
          return this.titleSearchFormGroup.get('titleZipcodeFormControl');
        }
      }, {
        key: "titleKeywordFC",
        get: function get() {
          return this.titleSearchFormGroup.get('titleKeywordFormControl');
        }
      }, {
        key: "categoryZipcodeFC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryZipcodeFormControl');
        }
      }, {
        key: "categoryCategoryFC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl');
        }
      }, {
        key: "categoryCategory1FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl1');
        }
      }, {
        key: "categoryCategory2FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl2');
        }
      }, {
        key: "categoryCategory3FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl3');
        }
      }, {
        key: "categoryCategory4FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl4');
        }
      }, {
        key: "categoryCategory5FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl5');
        }
      }, {
        key: "categoryCategory6FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl6');
        }
      }, {
        key: "categoryCategory7FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl7');
        }
      }, {
        key: "categoryCategory8FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl8');
        }
      }, {
        key: "categoryCategory9FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl9');
        }
      }, {
        key: "categoryCategory10FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl10');
        }
      }, {
        key: "categoryCategory11FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl11');
        }
      }, {
        key: "categoryCategory12FC",
        get: function get() {
          return this.categorySearchFormGroup.get('categoryCategoryFormControl12');
        }
      }]);

      return ProductSearchComponent;
    }();

    ProductSearchComponent.ɵfac = function ProductSearchComponent_Factory(t) {
      return new (t || ProductSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_13__["ProductService"]));
    };

    ProductSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductSearchComponent,
      selectors: [["app-product-search"]],
      viewQuery: function ProductSearchComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productSearchModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productSortModal = _t.first);
        }
      },
      hostBindings: function ProductSearchComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popstate", function ProductSearchComponent_popstate_HostBindingHandler($event) {
            return ctx.onPopState($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 11,
      vars: 3,
      consts: [[1, "browse", "search", "py-2"], ["hidden", "true", 1, "container"], [1, "row", 2, "margin-top", "65px"], ["class", "col-sm-12", 4, "ngIf"], ["class", "col-12 mb-1", 4, "ngIf"], ["class", "browse py-1", 4, "ngIf"], ["productSearchModal", ""], ["productSortModal", ""], [1, "col-sm-12"], ["action", "", 1, "p-2", "bg-white", 3, "formGroup"], [1, "form-row"], [1, "col-auto", "col-md-6", "col-lg-6", "col-xl-4"], ["type", "text", "id", "inlineFormInputName2", "name", "searchKey", "placeholder", "What are you looking for?", "formControlName", "titleKeywordFormControl", "required", "", 1, "form-control", "w-100", 3, "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-auto", "col-md-2", "col-lg-2", "col-xl-1"], ["type", "submit", 1, "btn", "btn-danger", "w-100", 3, "disabled", "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col-12", "mb-1"], [1, "col-auto", "col-md-4", "col-lg-4", "col-xl-2", 2, "margin-top", "4px"], [1, "col-auto", "col-md-4", "col-lg-4", "col-xl-2"], ["id", "categoryItems", "bindLabel", "label", "bindValue", "label", "name", "category", "formControlName", "categoryCategoryFormControl", 3, "items", "clearable", "searchable", "ngModel", "ngModelChange", "change"], [1, "browse", "py-1"], [1, "container", 2, "margin-top", "45px"], [1, "row"], [1, "col-sm-12", "col-md-4", "mb-1"], ["target", "_blank", "title", "Product Filter", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-filter", "fa-lg", 2, "font-size", "20px", "color", "lightcoral", "margin-left", "10px", "margin-right", "50px"], ["target", "_blank", "title", "Sort By", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sort", "fa-lg", 2, "font-size", "28px", "color", "lightcoral", "margin-left", "10px"], ["target", "_blank", "title", "Product Filter", 2, "color", "lightcoral", "margin-left", "25px", "font-size", "smaller", 3, "click"], [1, "text-left", "w-100", "mb-0", 2, "margin-top", "30px"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["style", "margin-top: 5px;", "class", "col-6 col-md-3 col-lg-3 col-xl-3", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 col-md-6 col-lg-3 mb-3", 4, "ngIf"], [2, "text-align", "right", "margin-top", "20px", "text-decoration", "underline"], ["styele", "background-color:red", "class", "btn btn-danger showMoreButton", 3, "click", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], ["role", "alert", 1, "alert", "alert-warning"], [1, "col-6", "col-md-3", "col-lg-3", "col-xl-3", 2, "margin-top", "5px"], [3, "product", "page"], [1, "col-sm-12", "col-md-6", "col-lg-3", "mb-3"], ["styele", "background-color:red", 1, "btn", "btn-danger", "showMoreButton", 3, "click"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "text-dark", 2, "margin-right", "10px", 3, "click"], ["aria-hidden", "true", 2, "font-size", "xx-large", "color", "crimson"], [1, "container"], [1, "row", 2, "font-size", "small", "color", "lightcoral"], [1, "fa", "fa-angle-left", 2, "font-size", "36px"], [1, "col-md-6", "0col-lg-6", "col-xl-6", 2, "margin-top", "15px"], ["type", "submit", 1, "btn", "btn-danger", "w-100", 3, "click"], [1, "col-md-12", "col-lg-12", "col-xl-12", 2, "margin-top", "8px", "width", "100%"], [2, "width", "100%"], ["id", "categoryItems", "bindLabel", "label", "bindValue", "label", "name", "category", "formControlName", "categoryCategoryFormControl", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange", "change"], [1, "col-md-12", "col-lg-12", "col-xl-12", 2, "margin-top", "4px"], ["id", "brandNameItems", "multiple", "true", "placeholder", "Select", "bindLabel", "label", "bindValue", "label", "name", "brandName", "formControlName", "categoryCategoryFormControl2", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], ["id", "colorsItems", "bindLabel", "label", "bindValue", "label", "name", "color", "formControlName", "categoryCategoryFormControl3", "multiple", "true", "placeholder", "Select", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], ["id", "priceRangeItems", "bindLabel", "label", "bindValue", "label", "name", "priceRange", "formControlName", "categoryCategoryFormControl4", "multiple", "true", "placeholder", "Select", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], ["id", "retailerTypeItemsUi", "bindLabel", "label", "bindValue", "label", "name", "retailerType", "formControlName", "categoryCategoryFormControl12", "multiple", "true", "placeholder", "Select", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], ["class", "col-md-12 col-lg-12 col-xl-12", "style", "margin-top:4px;", 4, "ngIf"], ["id", "filter2Dropdowns", 1, "form-row"], ["class", "col-md-12 col-lg-12 col-xl-12", "style", "margin-top:4px;", "id", "neckTypeItems-div", 4, "ngIf"], ["class", "col-md-12 col-lg-12 col-xl-12", "style", "margin-top:4px;", "id", "sleeveLengthItems-div", 4, "ngIf"], [1, "col-md-6", "0col-lg-6", "col-xl-6", 2, "margin-top", "15px", "margin-bottom", "15px"], ["id", "productTypeItems", "bindLabel", "label", "bindValue", "label", "name", "outfitType", "formControlName", "categoryCategoryFormControl11", "multiple", "true", "placeholder", "Select", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], ["id", "neckTypeItems-div", 1, "col-md-12", "col-lg-12", "col-xl-12", 2, "margin-top", "4px"], ["id", "neckTypeItems", "bindLabel", "label", "bindValue", "label", "name", "neckType", "formControlName", "categoryCategoryFormControl5", "multiple", "true", "placeholder", "Select", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], ["id", "fittingTypeItems", "bindLabel", "label", "bindValue", "label", "name", "fittingType", "formControlName", "categoryCategoryFormControl6", "multiple", "true", "placeholder", "Select", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], ["id", "sleeveLengthItems-div", 1, "col-md-12", "col-lg-12", "col-xl-12", 2, "margin-top", "4px"], ["id", "sleeveLengthItems", "bindLabel", "label", "bindValue", "label", "name", "sleeveLength", "formControlName", "categoryCategoryFormControl7", "multiple", "true", "placeholder", "Select", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], ["id", "ornamentationItems", "bindLabel", "label", "bindValue", "label", "name", "ornamentation", "formControlName", "categoryCategoryFormControl8", "multiple", "true", "placeholder", "Select", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], ["id", "patternTypeItems", "bindLabel", "label", "bindValue", "label", "name", "patternType", "formControlName", "categoryCategoryFormControl9", "multiple", "true", "placeholder", "Select", 3, "is-invalid", "items", "clearable", "searchable", "ngModel", "ngModelChange"], [2, "margin-left", "30%", "margin-bottom", "10px"], ["id", "sortItems", "bindLabel", "label", "placeholder", "Sort by", "bindValue", "value", "name", "sortItem", 3, "items", "clearable", "ngModel", "ngModelChange"]],
      template: function ProductSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductSearchComponent_div_4_Template, 9, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductSearchComponent_div_5_Template, 8, 8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductSearchComponent_section_6_Template, 29, 17, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductSearchComponent_ng_template_7_Template, 11, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductSearchComponent_ng_template_9_Template, 10, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchType === "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchType === "category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _shared_pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_16__["ProductCardComponent"], _shared_pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_17__["ProductCardLoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"], _shared_pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_18__["ProductFilterPipe"]],
      styles: [".customSearch[_ngcontent-%COMP%] {\n  width: 65%;\n  margin-bottom: 30px;\n}\n\n#sortItems[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n@media (max-width: 992px) {\n  .customSearch[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media (max-width: 697px) {\n  #categoryItems[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n@media (max-width: 576px) {\n  .customSearch[_ngcontent-%COMP%], #categoryItems[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.empty[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9kdWN0cy9wcm9kdWN0LXNlYXJjaC9EOlxcV29ya3NwYWNlXFxhcnRpYXJhLW5nLWFwcC1uZXcvc3JjXFxhcHBcXG1haW5cXHByb2R1Y3RzXFxwcm9kdWN0LXNlYXJjaFxccHJvZHVjdC1zZWFyY2guY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL21haW4vcHJvZHVjdHMvcHJvZHVjdC1zZWFyY2gvcHJvZHVjdC1zZWFyY2guY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURrQkE7RUFDSSxnQkFBQTtBQ2ZKOztBRGlCQTtFQUNJO0lBQ0ksVUFBQTtFQ2ROO0FBQ0Y7O0FEZ0JBO0VBQ0s7SUFDRyxlQUFBO0VDZE47QUFDRjs7QURlQTtFQUNJO0lBQ0ksV0FBQTtFQ2JOO0FBQ0Y7O0FEa0JBO0VBQ0ksYUFBQTtBQ2hCSiIsImZpbGUiOiJzcmMvYXBwL21haW4vcHJvZHVjdHMvcHJvZHVjdC1zZWFyY2gvcHJvZHVjdC1zZWFyY2guY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tU2VhcmNoXHJcbiAgICB3aWR0aDogNjUlXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcblxyXG5cclxuLy8gLnNlYXJjaFxyXG4vLyAgICAgd2lkdGg6IDEwMCVcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmFcclxuXHJcbi8vICAgICBmb3JtXHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA3KVxyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG5cclxuLy8gICAgICAgICAuaW5wdXQtZ3JvdXAtdGV4dCwgaW5wdXRcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcclxuLy8gICAgICAgICAgICAgYm9yZGVyOiBub25lXHJcblxyXG4vLyAgICAgICAgIGlucHV0XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNFOUU5RTlcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMFxyXG5cclxuI3NvcnRJdGVtc1xyXG4gICAgbWluLXdpZHRoOiAxNDBweFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSBcclxuICAgIC5jdXN0b21TZWFyY2hcclxuICAgICAgICB3aWR0aDogODAlXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY5N3B4KVxyXG4gICAgICNjYXRlZ29yeUl0ZW1zXHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlIFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSBcclxuICAgIC5jdXN0b21TZWFyY2gsICNjYXRlZ29yeUl0ZW1zXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuXHJcbiAgICAvLyAuc2VhcmNoIGZvcm0gaW5wdXRcclxuICAgIC8vICAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCAjRTlFOUU5XHJcblxyXG5cclxuLmVtcHR5OmVtcHR5XHJcbiAgICBkaXNwbGF5OiBub25lIiwiLmN1c3RvbVNlYXJjaCB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNzb3J0SXRlbXMge1xuICBtaW4td2lkdGg6IDE0MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmN1c3RvbVNlYXJjaCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY5N3B4KSB7XG4gICNjYXRlZ29yeUl0ZW1zIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY3VzdG9tU2VhcmNoLCAjY2F0ZWdvcnlJdGVtcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5lbXB0eTplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-search',
          templateUrl: './product-search.component.html',
          styleUrls: ['./product-search.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"]
        }, {
          type: src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_13__["ProductService"]
        }];
      }, {
        productSearchModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['productSearchModal', {
            "static": false
          }]
        }],
        productSortModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['productSortModal', {
            "static": false
          }]
        }],
        onPopState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:popstate', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/products/products-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main/products/products-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppMainProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product-search/product-search.component */
    "./src/app/main/products/product-search/product-search.component.ts");
    /* harmony import */


    var _product_search_box_product_search_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-search-box/product-search-box.component */
    "./src/app/main/products/product-search-box/product-search-box.component.ts");

    var routes = [{
      path: 'search/:searchtype',
      component: _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_2__["ProductSearchComponent"]
    }, {
      path: 'search-box/:searchtype',
      component: _product_search_box_product_search_box_component__WEBPACK_IMPORTED_MODULE_3__["ProductSearchBoxComponent"]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
    ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsRoutingModule_Factory(t) {
        return new (t || ProductsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/products/products.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/main/products/products.module.ts ***!
    \**************************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppMainProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-search/product-search.component */
    "./src/app/main/products/product-search/product-search.component.ts");
    /* harmony import */


    var _product_search_box_product_search_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product-search-box/product-search-box.component */
    "./src/app/main/products/product-search-box/product-search-box.component.ts");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/main/products/products-routing.module.ts");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
    ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsModule_Factory(t) {
        return new (t || ProductsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"].withConfig({
        warnOnNgModelWithFormControl: 'never'
      }), _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
        declarations: [_product_search_product_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductSearchComponent"], _product_search_box_product_search_box_component__WEBPACK_IMPORTED_MODULE_4__["ProductSearchBoxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_product_search_product_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductSearchComponent"], _product_search_box_product_search_box_component__WEBPACK_IMPORTED_MODULE_4__["ProductSearchBoxComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"].withConfig({
            warnOnNgModelWithFormControl: 'never'
          }), _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot()]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/enums/borderStyles.enum.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/enums/borderStyles.enum.ts ***!
    \***************************************************/

  /*! exports provided: BorderStyles, BorderStylesItems */

  /***/
  function srcAppSharedEnumsBorderStylesEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorderStyles", function () {
      return BorderStyles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorderStylesItems", function () {
      return BorderStylesItems;
    });

    var BorderStyles;

    (function (BorderStyles) {})(BorderStyles || (BorderStyles = {}));

    var BorderStylesItems = [{
      label: 'All',
      value: 'All',
      img: ''
    }, {
      label: 'Small',
      value: 'Small',
      img: ''
    }, {
      label: 'Zari',
      value: 'Zari',
      img: ''
    }];
    /***/
  },

  /***/
  "./src/app/shared/enums/colors.enum.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/enums/colors.enum.ts ***!
    \*********************************************/

  /*! exports provided: Colors, ColorItems */

  /***/
  function srcAppSharedEnumsColorsEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Colors", function () {
      return Colors;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorItems", function () {
      return ColorItems;
    });

    var Colors;

    (function (Colors) {})(Colors || (Colors = {}));

    var ColorItems = [{
      label: 'All',
      value: 'All',
      img: ''
    }, {
      label: 'Peach',
      value: 'Peach',
      img: ''
    }, {
      label: 'Pink',
      value: 'Pink',
      img: ''
    }, {
      label: 'Green',
      value: 'Green',
      img: ''
    }, {
      label: 'Navy Blue',
      value: 'Navy Blue',
      img: ''
    }, {
      label: 'Maroon',
      value: 'Maroon',
      img: ''
    }, {
      label: 'Mustard Yellow',
      value: 'Mustard Yellow',
      img: ''
    }, {
      label: 'Mustard Brown',
      value: 'Mustard Brown',
      img: ''
    }, {
      label: 'Multi',
      value: 'Multi',
      img: ''
    }, {
      label: 'Golden',
      value: 'Golden',
      img: ''
    }, {
      label: 'Off-White',
      value: 'Off-White',
      img: ''
    }, {
      label: 'Yello',
      value: 'Yello',
      img: ''
    }, {
      label: 'White',
      value: 'White',
      img: ''
    }, {
      label: 'Blue',
      value: 'Blue',
      img: ''
    }, {
      label: 'Orange',
      value: 'Orange',
      img: ''
    }, {
      label: 'Brown',
      value: 'Brown',
      img: ''
    }, {
      label: 'Cream',
      value: 'Cream',
      img: ''
    }, {
      label: 'Black',
      value: 'Black',
      img: ''
    }];
    /***/
  },

  /***/
  "./src/app/shared/enums/priceRange.enum.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/enums/priceRange.enum.ts ***!
    \*************************************************/

  /*! exports provided: PriceRange, PriceRangeItems */

  /***/
  function srcAppSharedEnumsPriceRangeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceRange", function () {
      return PriceRange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceRangeItems", function () {
      return PriceRangeItems;
    });

    var PriceRange;

    (function (PriceRange) {})(PriceRange || (PriceRange = {}));

    var PriceRangeItems = [{
      label: 'All',
      value: 'All',
      img: ''
    }, {
      label: 'Below 2000',
      value: 'Below 2000',
      img: ''
    }, {
      label: '2000 to 5000',
      value: '2000 to 5000',
      img: ''
    }, {
      label: '5000 to 7000',
      value: '5000 to 7000',
      img: ''
    }, {
      label: '7000 to 10000',
      value: '7000 to 10000',
      img: ''
    }, {
      label: 'Above 10000',
      value: 'Above 10000',
      img: ''
    }];
    /***/
  },

  /***/
  "./src/app/shared/enums/productType.enum.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/enums/productType.enum.ts ***!
    \**************************************************/

  /*! exports provided: ProductType, ProductTypeItems */

  /***/
  function srcAppSharedEnumsProductTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductType", function () {
      return ProductType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductTypeItems", function () {
      return ProductTypeItems;
    });

    var ProductType;

    (function (ProductType) {})(ProductType || (ProductType = {}));

    var ProductTypeItems = [{
      label: 'All',
      value: 'All',
      img: ''
    }, {
      label: 'Above 80%',
      value: 'Above 80%',
      img: ''
    }, {
      label: 'Above 60%',
      value: 'Above 60%',
      img: ''
    }, {
      label: 'Above 40%',
      value: 'Above 40%',
      img: ''
    }, {
      label: 'Above 20%',
      value: 'Above 20%',
      img: ''
    }, {
      label: 'Above 10%',
      value: 'Above 10%',
      img: ''
    }];
    /***/
  },

  /***/
  "./src/app/shared/enums/retailertype.enum.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/enums/retailertype.enum.ts ***!
    \***************************************************/

  /*! exports provided: RetailerType, RetailerTypeItems */

  /***/
  function srcAppSharedEnumsRetailertypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RetailerType", function () {
      return RetailerType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RetailerTypeItems", function () {
      return RetailerTypeItems;
    });

    var RetailerType;

    (function (RetailerType) {
      RetailerType["Myntra"] = "Myntra";
      RetailerType["Ajio"] = "Ajio";
      RetailerType["Bibo"] = "Biba";
    })(RetailerType || (RetailerType = {}));

    var RetailerTypeItems = [{
      label: 'All',
      value: 'All',
      img: ''
    }, {
      label: 'Myntra',
      value: 'Myntra',
      img: ''
    }, {
      label: 'Ajio',
      value: 'Ajio',
      img: ''
    }, {
      label: 'Kalki Fashions',
      value: 'Kalki',
      img: ''
    }, {
      label: 'Biba',
      value: 'Biba',
      img: ''
    }, {
      label: 'TataCliq',
      value: 'TataCliq',
      img: ''
    }, {
      label: 'Mirraw',
      value: 'Mirraw',
      img: ''
    }, {
      label: 'Veromoda',
      value: 'Veromoda',
      img: ''
    }, {
      label: 'Urbanic',
      value: 'Urbanic',
      img: ''
    }, {
      label: 'Macys',
      value: 'Macys',
      img: ''
    }, {
      label: 'Pantaloons',
      value: 'Pantaloons',
      img: ''
    }, {
      label: 'Limeroad',
      value: 'Limeroad',
      img: ''
    }, {
      label: 'Fabindia',
      value: 'Macys',
      img: ''
    }, {
      label: 'lifestyle',
      value: 'Pantaloons',
      img: ''
    }];
    /***/
  },

  /***/
  "./src/app/shared/enums/retailertype_ui.enum.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/enums/retailertype_ui.enum.ts ***!
    \******************************************************/

  /*! exports provided: RetailerTypeUi, RetailerTypeItemsUi */

  /***/
  function srcAppSharedEnumsRetailertype_uiEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RetailerTypeUi", function () {
      return RetailerTypeUi;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RetailerTypeItemsUi", function () {
      return RetailerTypeItemsUi;
    });

    var RetailerTypeUi;

    (function (RetailerTypeUi) {
      RetailerTypeUi["Myntra"] = "Myntra";
      RetailerTypeUi["Ajio"] = "Ajio";
      RetailerTypeUi["Bibo"] = "Biba";
    })(RetailerTypeUi || (RetailerTypeUi = {}));

    var RetailerTypeItemsUi = [{
      label: 'All',
      value: 'All',
      img: ''
    }, {
      label: 'Myntra',
      value: 'Myntra',
      img: ''
    }, {
      label: 'Ajio',
      value: 'Ajio',
      img: ''
    }, //{ label: 'Kalki Fashions', value: 'Kalki', img: '' },
    {
      label: 'Biba',
      value: 'Biba',
      img: ''
    }, {
      label: 'TataCliq',
      value: 'TataCliq',
      img: ''
    }, {
      label: 'Azafashions',
      value: 'Azafashions',
      img: ''
    }, {
      label: 'Jaypore',
      value: 'Jaypore',
      img: ''
    }, //{ label: 'Fablestreet', value: 'Fablestreet', img: '' },
    //{ label: 'Veromoda', value: 'Veromoda', img: '' },
    //{ label: 'Urbanic', value: 'Urbanic', img: '' },
    //{ label: 'Macys', value: 'Macys', img: '' },
    //{ label: 'Pantaloons', value: 'Pantaloons', img: '' },
    //{ label: 'nykaafashion', value: 'Limeroad', img: '' },
    {
      label: 'Fabindia',
      value: 'Fabindia',
      img: ''
    } //{ label: 'lifestyle', value: 'Pantaloons', img: '' }
    ];
    /***/
  },

  /***/
  "./src/app/shared/models/searchlog.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/models/searchlog.ts ***!
    \********************************************/

  /*! exports provided: SearchLog */

  /***/
  function srcAppSharedModelsSearchlogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchLog", function () {
      return SearchLog;
    });

    var SearchLog = function SearchLog(searchLog) {
      _classCallCheck(this, SearchLog);

      if (searchLog) {
        for (var prop in searchLog) {
          if (searchLog.hasOwnProperty(prop)) {
            this[prop] = searchLog[prop];
          }
        }

        this.spIds = [];

        if (searchLog.spIds) {
          var _iterator = _createForOfIteratorHelper(searchLog.spIds),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var spId = _step.value;
              this.spIds.push(new String(spId));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      } else {
        this.spIds = [];
        this.spIds.push(new String());
      }
    };
    /***/

  },

  /***/
  "./src/app/shared/models/searchstatus.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/models/searchstatus.ts ***!
    \***********************************************/

  /*! exports provided: SearchStatus */

  /***/
  function srcAppSharedModelsSearchstatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchStatus", function () {
      return SearchStatus;
    });

    var SearchStatus;

    (function (SearchStatus) {
      SearchStatus[SearchStatus["Completed"] = 0] = "Completed";
      SearchStatus[SearchStatus["In_progress"] = 1] = "In_progress";
      SearchStatus[SearchStatus["Not_started"] = 2] = "Not_started";
    })(SearchStatus || (SearchStatus = {}));
    /***/

  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map