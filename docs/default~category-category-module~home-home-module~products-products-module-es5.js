function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~category-category-module~home-home-module~products-products-module"], {
  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js ***!
    \***************************************************************************************************/

  /*! exports provided: BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__ProgressbarFesm2015NgxBootstrapProgressbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarComponent", function () {
      return BarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function () {
      return ProgressbarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function () {
      return ProgressbarConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function () {
      return ProgressbarModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function ProgressbarComponent_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("value", ctx_r0._value);
      }
    }

    function ProgressbarComponent_ng_template_1_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", item_r3.type)("value", item_r3.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
      }
    }

    function ProgressbarComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressbarComponent_ng_template_1_bar_0_Template, 2, 3, "bar", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1._value);
      }
    }

    var _c0 = ["*"];

    var ProgressbarConfig = function ProgressbarConfig() {
      _classCallCheck(this, ProgressbarConfig);

      /**
       * if `true` changing value of progress bar will be animated
       */
      this.animate = false;
      /**
       * maximum total value of progress element
       */

      this.max = 100;
    };

    ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) {
      return new (t || ProgressbarConfig)();
    };

    ProgressbarConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProgressbarConfig,
      factory: ProgressbarConfig.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ProgressbarComponent = /*#__PURE__*/function () {
      /**
       * @param {?} config
       */
      function ProgressbarComponent(config) {
        _classCallCheck(this, ProgressbarComponent);

        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */

        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
      }
      /**
       * if `true` changing value of progress bar will be animated
       * @param {?} value
       * @return {?}
       */


      _createClass(ProgressbarComponent, [{
        key: "addBar",

        /**
         * @param {?} bar
         * @return {?}
         */
        value: function addBar(bar) {
          bar.animate = this._animate;
          bar.striped = this._striped;
          this.bars.push(bar);
        }
        /**
         * @param {?} bar
         * @return {?}
         */

      }, {
        key: "removeBar",
        value: function removeBar(bar) {
          this.bars.splice(this.bars.indexOf(bar), 1);
        }
      }, {
        key: "animate",
        set: function set(value) {
          this._animate = value;
          this.bars.forEach(
          /**
          * @param {?} b
          * @return {?}
          */
          function (b) {
            b.animate = value;
          });
        }
        /**
         * If `true`, striped classes are applied
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "striped",
        set: function set(value) {
          this._striped = value;
          this.bars.forEach(
          /**
          * @param {?} b
          * @return {?}
          */
          function (b) {
            b.striped = value;
          });
        }
        /**
         * current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "value",
        set: function set(value) {
          this.isStacked = Array.isArray(value);
          this._value = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isBs3",
        get: function get() {
          return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        }
        /**
         * maximum total value of progress element
         * @return {?}
         */

      }, {
        key: "max",
        get: function get() {
          return this._max;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._max = v;
          this.bars.forEach(
          /**
          * @param {?} bar
          * @return {?}
          */
          function (bar) {
            bar.recalculatePercentage();
          });
        }
      }]);

      return ProgressbarComponent;
    }();

    ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) {
      return new (t || ProgressbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ProgressbarConfig));
    };

    ProgressbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressbarComponent,
      selectors: [["progressbar"]],
      hostVars: 3,
      hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("max", ctx.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress", ctx.addClass);
        }
      },
      inputs: {
        animate: "animate",
        striped: "striped",
        value: "value",
        max: "max",
        type: "type"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 2,
      consts: [[3, "type", "value", 4, "ngIf"], [3, "ngIf"], [3, "type", "value"], [3, "type", "value", 4, "ngFor", "ngForOf"]],
      template: function ProgressbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressbarComponent_bar_0_Template, 2, 2, "bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressbarComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isStacked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStacked);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], BarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]];
      },
      styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"]
    });
    /** @nocollapse */

    ProgressbarComponent.ctorParameters = function () {
      return [{
        type: ProgressbarConfig
      }];
    };

    ProgressbarComponent.propDecorators = {
      animate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      striped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['attr.max']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      addClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.progress']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'progressbar',
          template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
          styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: ProgressbarConfig
        }];
      }, {
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.progress']
        }],
        animate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        striped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.max']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // todo: number pipe
    // todo: use query from progress?


    var BarComponent = /*#__PURE__*/function () {
      /**
       * @param {?} el
       * @param {?} progress
       * @param {?} renderer
       */
      function BarComponent(el, progress, renderer) {
        _classCallCheck(this, BarComponent);

        this.el = el;
        this.renderer = renderer;
        this.addClass = true;
        this.percent = 0;
        this.progress = progress;
      }
      /**
       * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
       * @return {?}
       */


      _createClass(BarComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.progress.addBar(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.progress.removeBar(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "recalculatePercentage",
        value: function recalculatePercentage() {
          this.percent = +(this.value / this.progress.max * 100).toFixed(2);
          /** @type {?} */

          var totalPercentage = this.progress.bars.reduce(
          /**
          * @param {?} total
          * @param {?} bar
          * @return {?}
          */
          function (total, bar) {
            return total + bar.percent;
          }, 0);

          if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "applyTypeClasses",
        value: function applyTypeClasses() {
          if (this._prevType) {
            /** @type {?} */
            var barTypeClass = "progress-bar-".concat(this._prevType);
            /** @type {?} */

            var bgClass = "bg-".concat(this._prevType);
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = null;
          }

          if (this._type) {
            /** @type {?} */
            var _barTypeClass = "progress-bar-".concat(this._type);
            /** @type {?} */


            var _bgClass = "bg-".concat(this._type);

            this.renderer.addClass(this.el.nativeElement, _barTypeClass);
            this.renderer.addClass(this.el.nativeElement, _bgClass);
            this._prevType = this._type;
          }
        }
      }, {
        key: "type",
        get: function get() {
          return this._type;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._type = v;
          this.applyTypeClasses();
        }
        /**
         * current value of progress bar
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          if (!v && v !== 0) {
            return;
          }

          this._value = v;
          this.recalculatePercentage();
        }
        /**
         * @return {?}
         */

      }, {
        key: "setBarWidth",
        get: function get() {
          this.recalculatePercentage();
          return this.percent;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isBs3",
        get: function get() {
          return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        }
      }]);

      return BarComponent;
    }();

    BarComponent.ɵfac = function BarComponent_Factory(t) {
      return new (t || BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ProgressbarComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BarComponent,
      selectors: [["bar"]],
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0"],
      hostVars: 15,
      hostBindings: function BarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100", "%")("width", ctx.setBarWidth, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate)("progress-bar", ctx.addClass);
        }
      },
      inputs: {
        type: "type",
        value: "value"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function BarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
    /** @nocollapse */

    BarComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: ProgressbarComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    BarComponent.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      setBarWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.width.%']
      }],
      addClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.progress-bar']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bar',
          template: "<ng-content></ng-content>\n",
          host: {
            role: 'progressbar',
            'aria-valuemin': '0',
            '[class.progress-bar-animated]': '!isBs3 && animate',
            '[class.progress-bar-striped]': 'striped',
            '[class.active]': 'isBs3 && animate',
            '[attr.aria-valuenow]': 'value',
            '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
            '[attr.aria-valuemax]': 'max',
            '[style.height.%]': '"100"'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ProgressbarComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.progress-bar']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        setBarWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.width.%']
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ProgressbarModule = /*#__PURE__*/function () {
      function ProgressbarModule() {
        _classCallCheck(this, ProgressbarModule);
      }

      _createClass(ProgressbarModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: ProgressbarModule,
            providers: [ProgressbarConfig]
          };
        }
      }]);

      return ProgressbarModule;
    }();

    ProgressbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProgressbarModule
    });
    ProgressbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProgressbarModule_Factory(t) {
        return new (t || ProgressbarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressbarModule, {
        declarations: function declarations() {
          return [BarComponent, ProgressbarComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [BarComponent, ProgressbarComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [BarComponent, ProgressbarComponent],
          exports: [BarComponent, ProgressbarComponent]
        }]
      }], null, null);
    })(); //# sourceMappingURL=ngx-bootstrap-progressbar.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~category-category-module~home-home-module~products-products-module-es5.js.map