(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~category-category-module~home-home-module~products-products-module~user-profile-user-profile-module"],{

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js ***!
  \*********************************************************************************************/
/*! exports provided: BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownModule, BsDropdownState, BsDropdownToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return BsDropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default dropdown configuration
 */




const _c0 = ["*"];
class BsDropdownConfig {
    constructor() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
        /**
         * default dropdown auto closing behavior
         */
        this.insideClick = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
    }
}
BsDropdownConfig.ɵfac = function BsDropdownConfig_Factory(t) { return new (t || BsDropdownConfig)(); };
BsDropdownConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsDropdownConfig, factory: BsDropdownConfig.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownMenu = new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.resolveDropdownMenu = resolve;
        }));
    }
}
BsDropdownState.ɵfac = function BsDropdownState_Factory(t) { return new (t || BsDropdownState)(); };
BsDropdownState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsDropdownState, factory: BsDropdownState.ɵfac });
/** @nocollapse */
BsDropdownState.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DROPDOWN_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
/** @type {?} */
const dropdownAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: 0, overflow: 'hidden' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(DROPDOWN_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', overflow: 'hidden' }))
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownContainerComponent {
    /**
     * @param {?} _state
     * @param {?} cd
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _builder
     */
    constructor(_state, cd, _renderer, _element, _builder) {
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
        this._subscription = _state.isOpenChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.isOpen = value;
            /** @type {?} */
            const dropdown = this._element.nativeElement.querySelector('.dropdown-menu');
            this._renderer.addClass(this._element.nativeElement.querySelector('div'), 'open');
            if (dropdown && !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])()) {
                this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    this._renderer.setStyle(dropdown, 'left', 'auto');
                    this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (this.direction === 'up') {
                    this._renderer.setStyle(dropdown, 'top', 'auto');
                    this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            if (dropdown && this._state.isAnimated) {
                this._factoryDropDownAnimation.create(dropdown)
                    .play();
            }
            this.cd.markForCheck();
            this.cd.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._state.direction;
    }
    /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    _contains(el) {
        return this._element.nativeElement.contains(el);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
BsDropdownContainerComponent.ɵfac = function BsDropdownContainerComponent_Factory(t) { return new (t || BsDropdownContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"])); };
BsDropdownContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BsDropdownContainerComponent, selectors: [["bs-dropdown-container"]], hostAttrs: [2, "display", "block", "position", "absolute"], ngContentSelectors: _c0, decls: 2, vars: 8, template: function BsDropdownContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropup", ctx.direction === "up")("dropdown", ctx.direction === "down")("show", ctx.isOpen)("open", ctx.isOpen);
    } }, directives: function () { return [BsDropdownDirective]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = () => [
    { type: BsDropdownState },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bs-dropdown-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    style: 'display:block;position: absolute;'
                },
                template: `
    <div [class.dropup]="direction === 'up'"
         [class.dropdown]="direction === 'down'"
         [class.show]="isOpen"
         [class.open]="isOpen"><ng-content></ng-content>
    </div>
  `
            }]
    }], function () { return [{ type: BsDropdownState }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _cis
     * @param {?} _state
     * @param {?} _config
     * @param {?} _builder
     */
    constructor(_elementRef, _renderer, _viewContainerRef, _cis, _state, _config, _builder) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._state = _state;
        this._config = _config;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        this._state.insideClick = this._config.insideClick;
        this._state.isAnimated = this._config.isAnimated;
        this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    /**
     * Indicates that dropdown will be closed on item or document click,
     * and after pressing ESC
     * @param {?} value
     * @return {?}
     */
    set autoClose(value) {
        this._state.autoClose = value;
    }
    /**
     * @return {?}
     */
    get autoClose() {
        return this._state.autoClose;
    }
    /**
     * Indicates that dropdown will be animated
     * @param {?} value
     * @return {?}
     */
    set isAnimated(value) {
        this._state.isAnimated = value;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this._state.isAnimated;
    }
    /**
     * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
     * @param {?} value
     * @return {?}
     */
    set insideClick(value) {
        this._state.insideClick = value;
    }
    /**
     * @return {?}
     */
    get insideClick() {
        return this._state.insideClick;
    }
    /**
     * Disables dropdown toggle and hides dropdown menu if opened
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._isDisabled = value;
        this._state.isDisabledChange.emit(value);
        if (value) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this._isDisabled;
    }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        if (this._showInline) {
            return this._isInlineOpen;
        }
        return this._dropdown.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])();
    }
    /**
     * @private
     * @return {?}
     */
    get _showInline() {
        return !this.container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            () => this.show())
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => this.toggle(value))));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((/**
         * @param {?} value
         * @return {?}
         */
        (value) => value)))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => this.hide())));
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then((/**
                 * @param {?} dropdownMenu
                 * @return {?}
                 */
                (dropdownMenu) => {
                    this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    this._inlinedMenu = this._dropdown._inlineViewRef;
                    this.addBs4Polyfills();
                    this._renderer.addClass(this._inlinedMenu.rootNodes[0].parentNode, 'open');
                    this.playAnimation();
                }))
                    // swallow errors
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            this.playAnimation();
            return;
        }
        this._state.dropdownMenu.then((/**
         * @param {?} dropdownMenu
         * @return {?}
         */
        dropdownMenu => {
            // check direction in which dropdown should be opened
            /** @type {?} */
            const _dropup = this.dropup ||
                (typeof this.dropup !== 'undefined' && this.dropup);
            this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            const _placement = this.placement || (_dropup ? 'top start' : 'bottom start');
            // show dropdown
            this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            this._state.isOpenChange.emit(true);
        }))
            // swallow error
            .catch();
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    toggle(value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    }
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    _contains(event) {
        return this._elementRef.nativeElement.contains(event.target) ||
            (this._dropdown.instance && this._dropdown.instance._contains(event.target));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions and destroy dropdown
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    }
    /**
     * @private
     * @return {?}
     */
    addBs4Polyfills() {
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    }
    /**
     * @private
     * @return {?}
     */
    playAnimation() {
        if (this._state.isAnimated && this._inlinedMenu) {
            this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0])
                .play();
        }
    }
    /**
     * @private
     * @return {?}
     */
    addShowClass() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeShowClass() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkRightAlignment() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            /** @type {?} */
            const isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    }
    /**
     * @private
     * @return {?}
     */
    addDropupStyles() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeDropupStyles() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
        }
    }
}
BsDropdownDirective.ɵfac = function BsDropdownDirective_Factory(t) { return new (t || BsDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"])); };
BsDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsDropdownDirective, selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]], hostVars: 6, hostBindings: function BsDropdownDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropup", ctx.dropup)("open", ctx.isOpen)("show", ctx.isOpen && ctx.isBs4);
    } }, inputs: { autoClose: "autoClose", isAnimated: "isAnimated", insideClick: "insideClick", isDisabled: "isDisabled", isOpen: "isOpen", placement: "placement", triggers: "triggers", container: "container", dropup: "dropup" }, outputs: { onShown: "onShown", onHidden: "onHidden", isOpenChange: "isOpenChange" }, exportAs: ["bs-dropdown"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([BsDropdownState])] });
/** @nocollapse */
BsDropdownDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] },
    { type: BsDropdownState },
    { type: BsDropdownConfig },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"] }
];
BsDropdownDirective.propDecorators = {
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    insideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[bsDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState],
                host: {
                    '[class.dropup]': 'dropup',
                    '[class.open]': 'isOpen',
                    '[class.show]': 'isOpen && isBs4'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }, { type: BsDropdownState }, { type: BsDropdownConfig }, { type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"] }]; }, { onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], autoClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], insideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownMenuDirective {
    // tslint:disable:no-any
    /**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
}
BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(t) { return new (t || BsDropdownMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
BsDropdownMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsDropdownMenuDirective, selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]], exportAs: ["bs-dropdown-menu"] });
/** @nocollapse */
BsDropdownMenuDirective.ctorParameters = () => [
    { type: BsDropdownState },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownMenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[bsDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            }]
    }], function () { return [{ type: BsDropdownState }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownToggleDirective {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dropdown
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _state
     */
    constructor(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dropdown = _dropdown;
        this._element = _element;
        this._renderer = _renderer;
        this._state = _state;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.isOpen = value;
            if (value) {
                this._documentClickListener = this._renderer.listen('document', 'click', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    if (this._state.autoClose && event.button !== 2 &&
                        !this._element.nativeElement.contains(event.target) &&
                        !(this._state.insideClick && this._dropdown._contains(event))) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                }));
                this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, 'keyup.esc', (/**
                 * @return {?}
                 */
                () => {
                    if (this._state.autoClose) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                }));
            }
            else {
                this._documentClickListener();
                this._escKeyUpListener();
            }
        })));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => (this.isDisabled = value || null))));
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._documentClickListener) {
            this._documentClickListener();
        }
        if (this._escKeyUpListener) {
            this._escKeyUpListener();
        }
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
}
BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(t) { return new (t || BsDropdownToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownState)); };
BsDropdownToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsDropdownToggleDirective, selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]], hostVars: 3, hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsDropdownToggleDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", true)("disabled", ctx.isDisabled)("aria-expanded", ctx.isOpen);
    } }, exportAs: ["bs-dropdown-toggle"] });
/** @nocollapse */
BsDropdownToggleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: BsDropdownDirective },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: BsDropdownState }
];
BsDropdownToggleDirective.propDecorators = {
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.disabled',] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-expanded',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', [],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[bsDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
                host: {
                    '[attr.aria-haspopup]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: BsDropdownDirective }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: BsDropdownState }]; }, { isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.disabled']
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-expanded']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', []]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownModule {
    // tslint:disable-next-line:no-any
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"],
                ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"],
                BsDropdownState,
                {
                    provide: BsDropdownConfig,
                    useValue: config ? config : { autoClose: true, insideClick: false }
                }
            ]
        };
    }
}
BsDropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BsDropdownModule });
BsDropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BsDropdownModule_Factory(t) { return new (t || BsDropdownModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BsDropdownModule, { declarations: [BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownContainerComponent,
        BsDropdownDirective], exports: [BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            }]
    }], null, null); })();



//# sourceMappingURL=ngx-bootstrap-dropdown.js.map

/***/ }),

/***/ "./src/app/main/products/product-details/product-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/products/product-details/product-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: productDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDetailsComponent", function() { return productDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/user-data */ "./src/app/shared/models/user-data.ts");
/* harmony import */ var src_app_shared_models_extractionstatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/extractionstatus */ "./src/app/shared/models/extractionstatus.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/core/product.service */ "./src/app/shared/core/product.service.ts");
/* harmony import */ var src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/core/authentication.service */ "./src/app/shared/core/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pt_components_product_card_details_product_card_d_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pt-components/product-card-details/product-card-d.component */ "./src/app/shared/pt-components/product-card-details/product-card-d.component.ts");
/* harmony import */ var _shared_pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pt-components/product-card-loading/product-card-loading.component */ "./src/app/shared/pt-components/product-card-loading/product-card-loading.component.ts");
/* harmony import */ var _shared_pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipe/productfilter.pipe */ "./src/app/shared/pipe/productfilter.pipe.ts");












const _c0 = ["signupModal"];
function productDetailsComponent_div_3_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productDetailsComponent_div_3_div_4_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r90.addPrdocutsToWishList(ctx_r90.product.masterProductId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function productDetailsComponent_div_3_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productDetailsComponent_div_3_div_4_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r92.addPrdocutsToWishList(ctx_r92.product.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function productDetailsComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, productDetailsComponent_div_3_div_4_div_1_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, productDetailsComponent_div_3_div_4_div_2_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r83.setWishListFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r83.setWishListFlag);
} }
function productDetailsComponent_div_3_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productDetailsComponent_div_3_div_5_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r96.removePrdocutFromWishList(ctx_r96.product.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function productDetailsComponent_div_3_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productDetailsComponent_div_3_div_5_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r98.removePrdocutFromWishList(ctx_r98.product.masterProductId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function productDetailsComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, productDetailsComponent_div_3_div_5_div_1_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, productDetailsComponent_div_3_div_5_div_2_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r84.setWishListFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r84.setWishListFlag);
} }
function productDetailsComponent_div_3_h5_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", ctx_r85.product.cost, " ");
} }
function productDetailsComponent_div_3_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function productDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function productDetailsComponent_div_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.copyMessage(ctx_r100.product.url, ctx_r100.product.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, productDetailsComponent_div_3_div_4_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, productDetailsComponent_div_3_div_5_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, productDetailsComponent_div_3_h5_28_Template, 2, 1, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, productDetailsComponent_div_3_ng_template_29_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r81.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r81.isProductWishListed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.isProductWishListed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r81.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r81.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "https://artiaraimages.s3.us-east-2.amazonaws.com/", ctx_r81.product.retailerType, "/", ctx_r81.product.productImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r81.product.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r81.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r81.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx_r81.product.brandName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buy on ", ctx_r81.product.retailerType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/logos/", ctx_r81.product.retailerType, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r81.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r81.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.product.cost != 0)("ngIfElse", _r86);
} }
function productDetailsComponent_section_5_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card-d", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r105)("page", "app-product-selection");
} }
function productDetailsComponent_section_5_div_1_app_product_card_loading_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card-loading", 40);
} }
function productDetailsComponent_section_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Similar Styles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, productDetailsComponent_section_5_div_1_div_4_Template, 2, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "productfilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, productDetailsComponent_section_5_div_1_app_product_card_loading_7_Template, 1, 0, "app-product-card-loading", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, ctx_r102.similarProducts, ctx_r102.filterargs), 0, ctx_r102.noOfProductsToShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.showLoading);
} }
function productDetailsComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, productDetailsComponent_section_5_div_1_Template, 8, 9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.numberOfSimilarProducts > 0);
} }
class productDetailsComponent {
    constructor(router, route, modalService, productService, authenticationService) {
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.productService = productService;
        this.authenticationService = authenticationService;
        this.filterargs = { extractioStatus: src_app_shared_models_extractionstatus__WEBPACK_IMPORTED_MODULE_2__["ExtractionStatus"].SUCCESS };
        this.noOfProductsToShow = 12;
        this.userData = new src_app_shared_models_user_data__WEBPACK_IMPORTED_MODULE_1__["UserData"]();
        this.errorMessage = '';
        this.showLoading = true;
    }
    ngOnInit() {
        this.showLoading = true;
        if (this.setWishListFlag) {
            this.isProductWishListed = true;
        }
        else {
            this.isProductWishListed = false;
        }
        this.selectedProduct = this.product.masterProductId;
        this.getPrdocutsBySimilarity(this.selectedProduct);
        this.route.params.subscribe(() => {
            this.authenticationService.loginStatus().subscribe(res => {
                if (!res) {
                    sessionStorage.removeItem('iuli');
                    this.router.navigate(['/']);
                }
            });
        });
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
    openModal(template, classNames) {
        this.modalRef = this.modalService.show(template, { class: classNames });
    }
    addPrdocutsToWishList(value) {
        if (!this.authenticationService.isUserLoggedIn()) {
            this.authenticationService.login();
        }
        else {
            this.productService.addProductsToWishList(value).subscribe(res => {
                if (!res) {
                    this.isProductWishListed = false;
                }
                else {
                    this.isProductWishListed = true;
                }
            });
        }
    }
    copyMessage(val, val2) {
        if (document.getElementById(val2).style.color == 'lightcoral') {
            document.getElementById(val2).style.color = 'crimson';
        }
        else {
            document.getElementById(val2).style.color = 'lightcoral';
        }
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val + "";
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    removePrdocutFromWishList(value) {
        if (!this.authenticationService.isUserLoggedIn()) {
            this.authenticationService.login();
        }
        else {
            this.productService.removeProductsFromWishList(value).subscribe(res => {
                this.isProductWishListed = false;
            });
        }
    }
    getPrdocutsBySimilarity(selectedProduct) {
        //This is for passing data to datalayer for google analytics
        /*   if(window.dataLayer) {
            window.dataLayer.push({'CategoryName' : this.category});
          }; */
        //this.products = [];
        this.showLoading = true;
        this.productService.getProductsBySimilarity(selectedProduct).subscribe(res => {
            // console.log(res);
            this.similarProducts = this.shuffle(res);
            this.showLoading = false;
            this.numberOfSimilarProducts = this.similarProducts.length;
            // this.retailerWiseProducts = this.groupBy(this.products, 'retailerType');
            // console.log(this.groupBy(this.products, 'retailerType'));
            //this.getQueryParams();
        });
    }
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
}
productDetailsComponent.ɵfac = function productDetailsComponent_Factory(t) { return new (t || productDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
productDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: productDetailsComponent, selectors: [["app-product-selection"]], viewQuery: function productDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signupModal = _t.first);
    } }, inputs: { product: "product", page: "page", setWishListFlag: "setWishListFlag" }, decls: 6, vars: 2, consts: [[1, "container"], ["class", "item", 4, "ngIf"], [2, "margin-top", "10px"], ["class", "browse py-1", 4, "ngIf"], [1, "item"], ["target", "_blank", "title", "Copy Product Link", 2, "color", "lightcoral", "font-size", "medium", 3, "click"], [1, "fa", "fa-clipboard", 2, "font-size", "24px", 3, "id"], [4, "ngIf"], [1, "card"], [1, "product-image-d"], ["target", "_blank", "onclick", "dataLayer.push({\n              'event': 'productClick',\n              'productName': this.title,\n              'productUrl': this.href\n            }\n            );", 3, "title", "href"], ["alt", "", 2, "align-items", "left", 3, "src"], [2, "font-size", "small", "text-align", "center", "color", "black"], [1, "card-body", "bg-white", "border-0", "py-0"], [1, "product-details"], ["target", "_blank", "onclick", "dataLayer.push({\n              'event': 'productClick',\n              'productName': this.title,\n              'productUrl': this.href\n            }\n          );", 3, "href", "title"], [2, "font-size", "medium", "color", "lightcoral"], ["type", "submit", 1, "btn", "btn-light", "w-100"], [1, "card-footer", "bg-white", "border-0", "d-flex", "align-items-center", "justify-content-between", "flex-column"], [1, "my-0", "w-100", "mb-2"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between"], [1, "w-50", "retailer-logo"], ["alt", "", 3, "src"], [1, "w-50", "text-right"], ["target", "_blank", "onclick", "dataLayer.push({\n                    'event': 'productClick',\n                    'productName': this.title,\n                    'productUrl': this.href\n                  }\n                );", 1, "btn", "btn-md", "btn-light", 3, "href", "title"], ["class", "text-dark mb-0", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["data-toggle", "modal", "data-target", "#emailModlal", 3, "click"], ["title", "Wishlist", 1, "fa", "fa-heart", "text-grey", 2, "font-size", "large"], ["title", "Remove Wishlist", 1, "fa", "fa-heart", "text-primary", 2, "font-size", "large"], [1, "text-dark", "mb-0"], [1, "text-dark", "fw-semi-bold", "mb-0"], [1, "browse", "py-1"], ["class", "container", 4, "ngIf"], [2, "font-size", "large", "text-align", "center", "color", "black", "background-color", "lightgray"], [1, "row", "align-items-center"], ["class", "col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 col-md-6 col-lg-3 mb-3", 4, "ngIf"], [1, "col-sm-12", "col-md-6", "col-lg-3", "col-xl-3", "mb-3"], [3, "product", "page"], [1, "col-sm-12", "col-md-6", "col-lg-3", "mb-3"]], template: function productDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, productDetailsComponent_div_3_Template, 31, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, productDetailsComponent_section_5_Template, 2, 1, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.similarProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_pt_components_product_card_details_product_card_d_component__WEBPACK_IMPORTED_MODULE_8__["ProductCardDComponent"], _shared_pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardLoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], _shared_pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_10__["ProductFilterPipe"]], styles: [".customSearch[_ngcontent-%COMP%] {\n  width: 65%;\n  margin-bottom: 30px;\n}\n\n#sortItems[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n@media (max-width: 992px) {\n  .customSearch[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media (max-width: 697px) {\n  #categoryItems[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n@media (max-width: 576px) {\n  .customSearch[_ngcontent-%COMP%], #categoryItems[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.empty[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvRDpcXFdvcmtzcGFjZVxcYXJ0aWFyYS1uZy1hcHAtbmV3L3NyY1xcYXBwXFxtYWluXFxwcm9kdWN0c1xccHJvZHVjdC1kZXRhaWxzXFxwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL21haW4vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRGtCQTtFQUNJLGdCQUFBO0FDZko7O0FEaUJBO0VBQ0k7SUFDSSxVQUFBO0VDZE47QUFDRjs7QURnQkE7RUFDSztJQUNHLGVBQUE7RUNkTjtBQUNGOztBRGVBO0VBQ0k7SUFDSSxXQUFBO0VDYk47QUFDRjs7QURrQkE7RUFDSSxhQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbVNlYXJjaFxyXG4gICAgd2lkdGg6IDY1JVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweFxyXG5cclxuXHJcbi8vIC5zZWFyY2hcclxuLy8gICAgIHdpZHRoOiAxMDAlXHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhXHJcblxyXG4vLyAgICAgZm9ybVxyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNylcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuXHJcbi8vICAgICAgICAgLmlucHV0LWdyb3VwLXRleHQsIGlucHV0XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbi8vICAgICAgICAgICAgIGJvcmRlcjogbm9uZVxyXG5cclxuLy8gICAgICAgICBpbnB1dFxyXG4vLyAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRTlFOUU5XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBcclxuXHJcbiNzb3J0SXRlbXNcclxuICAgIG1pbi13aWR0aDogMTQwcHhcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkgXHJcbiAgICAuY3VzdG9tU2VhcmNoXHJcbiAgICAgICAgd2lkdGg6IDgwJVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2OTdweClcclxuICAgICAjY2F0ZWdvcnlJdGVtc1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgXHJcbiAgICAuY3VzdG9tU2VhcmNoLCAjY2F0ZWdvcnlJdGVtc1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcblxyXG4gICAgLy8gLnNlYXJjaCBmb3JtIGlucHV0XHJcbiAgICAvLyAgICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgI0U5RTlFOVxyXG5cclxuXHJcbi5lbXB0eTplbXB0eVxyXG4gICAgZGlzcGxheTogbm9uZSIsIi5jdXN0b21TZWFyY2gge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jc29ydEl0ZW1zIHtcbiAgbWluLXdpZHRoOiAxNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jdXN0b21TZWFyY2gge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2OTdweCkge1xuICAjY2F0ZWdvcnlJdGVtcyB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmN1c3RvbVNlYXJjaCwgI2NhdGVnb3J5SXRlbXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZW1wdHk6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](productDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-selection',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }, { type: src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }, { type: src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setWishListFlag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], signupModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['signupModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/models/extractionstatus.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/extractionstatus.ts ***!
  \***************************************************/
/*! exports provided: ExtractionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractionStatus", function() { return ExtractionStatus; });
var ExtractionStatus;
(function (ExtractionStatus) {
    ExtractionStatus["SUCCESS"] = "SUCCESS";
    ExtractionStatus["ERROR"] = "ERROR";
    ExtractionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ExtractionStatus["PENDING"] = "PENDING";
})(ExtractionStatus || (ExtractionStatus = {}));


/***/ }),

/***/ "./src/app/shared/pipe/productfilter.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipe/productfilter.pipe.ts ***!
  \***************************************************/
/*! exports provided: ProductFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterPipe", function() { return ProductFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductFilterPipe {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        items = items.filter(item => item.extractioStatus);
        // return items.filter(item => item.extractioStatus.toString().indexOf(filter.extractioStatus.toString()) !== -1);
        return items.filter(item => item.extractioStatus === filter.extractioStatus);
    }
}
ProductFilterPipe.ɵfac = function ProductFilterPipe_Factory(t) { return new (t || ProductFilterPipe)(); };
ProductFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "productfilter", type: ProductFilterPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'productfilter',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pt-components/product-card-details/product-card-d.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/pt-components/product-card-details/product-card-d.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductCardDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardDComponent", function() { return ProductCardDComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/core/product.service */ "./src/app/shared/core/product.service.ts");
/* harmony import */ var src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/core/authentication.service */ "./src/app/shared/core/authentication.service.ts");






const _c0 = ["signupModal"];
const _c1 = ["productDetailsModal"];
function ProductCardDComponent_div_0_h6_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", ctx_r128.product.cost, " ");
} }
function ProductCardDComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductCardDComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardDComponent_div_0_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.openProductDetailsModal("model-lg", ctx_r131.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardDComponent_div_0_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.openProductDetailsModal("model-lg", ctx_r133.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductCardDComponent_div_0_h6_12_Template, 2, 1, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductCardDComponent_div_0_ng_template_13_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r125.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "https://artiaraimages.s3.us-east-2.amazonaws.com/", ctx_r125.product.retailerType, "/", ctx_r125.product.productImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/logos/", ctx_r125.product.retailerType, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r125.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.product.cost != 0)("ngIfElse", _r129);
} }
function ProductCardDComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardDComponent_ng_template_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.productDetailsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-product-selection", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardDComponent_ng_template_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.productDetailsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r127.product)("page", "product-details");
} }
class ProductCardDComponent {
    constructor(router, route, modalService, productService, authenticationService) {
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.productService = productService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        if (this.setWishListFlag) {
            this.isProductWishListed = true;
        }
        else {
            this.isProductWishListed = false;
        }
    }
    redirectToGoodToMatchSearchPage(searchKey) {
        this.addQeuryParamForSearch(this.router, this.route, searchKey, '');
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
    openProductDetailsModal(classNames, product) {
        this.productDetailsModalRef = this.modalService.show(this.productDetailsModal, { class: classNames });
        this.productDetailsModalRef.setClass('modal-lg');
        // Remove query params
        this.router.navigate([], {
            queryParams: {
                product: product
            },
            queryParamsHandling: 'merge'
        });
    }
    addQeuryParamForSearch(router, route, searchKey, zipcode) {
        // changes the route without moving from the current view or
        // triggering a navigation event,
        router.navigate(['/product/search/title'], {
            relativeTo: route,
            queryParams: {
                kw: searchKey,
                zip: '',
                pr: 'l2h'
            }
            // preserve the existing query params in the route
            // skipLocationChange: true
            // do not trigger navigation
        });
    }
    addPrdocutsToWishList(value) {
        if (!this.authenticationService.isUserLoggedIn()) {
            this.authenticationService.login();
        }
        else {
            this.productService.addProductsToWishList(value).subscribe(res => {
                if (!res) {
                    this.isProductWishListed = false;
                }
                else {
                    this.isProductWishListed = true;
                }
            });
        }
    }
    copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val + "";
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        selBox.hidden = true;
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    removePrdocutFromWishList(value) {
        if (!this.authenticationService.isUserLoggedIn()) {
            this.authenticationService.login();
        }
        else {
            this.productService.removeProductsFromWishList(value).subscribe(res => {
                this.isProductWishListed = false;
            });
        }
    }
}
ProductCardDComponent.ɵfac = function ProductCardDComponent_Factory(t) { return new (t || ProductCardDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
ProductCardDComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardDComponent, selectors: [["app-product-card-d"]], viewQuery: function ProductCardDComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signupModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productDetailsModal = _t.first);
    } }, inputs: { product: "product", page: "page", setWishListFlag: "setWishListFlag" }, decls: 3, vars: 1, consts: [["class", "item", 4, "ngIf"], ["productDetailsModal", ""], [1, "item"], [1, "card"], [1, "product-image"], ["target", "_blank", 3, "title", "click"], ["alt", "", 3, "src"], [1, "card-footer", "bg-white", "border-0", "d-flex", "align-items-center", "justify-content-between", "flex-column"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between"], [1, "retailer-logo"], [1, "text-right"], ["class", "text-dark fw-semi-bold mb-0", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "text-dark", "fw-semi-bold", "mb-0"], [2, "margin-right", "20px", "margin-top", "20px"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "text-dark", 3, "click"], ["aria-hidden", "true", 2, "font-size", "xx-large", "color", "crimson"], [3, "product", "page"], [1, "fa", "fa-angle-left", 2, "font-size", "36px"]], template: function ProductCardDComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductCardDComponent_div_0_Template, 15, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductCardDComponent_ng_template_1_Template, 10, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdC1jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC1kZXRhaWxzL3Byb2R1Y3QtY2FyZC1kLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCardDComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-card-d',
                templateUrl: './product-card-d.component.html',
                styleUrls: ['./product-card-d.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }, { type: src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setWishListFlag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], signupModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['signupModal', { static: false }]
        }], productDetailsModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['productDetailsModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/pt-components/product-card-loading/product-card-loading.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/pt-components/product-card-loading/product-card-loading.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductCardLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardLoadingComponent", function() { return ProductCardLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductCardLoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductCardLoadingComponent.ɵfac = function ProductCardLoadingComponent_Factory(t) { return new (t || ProductCardLoadingComponent)(); };
ProductCardLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardLoadingComponent, selectors: [["app-product-card-loading"]], decls: 7, vars: 0, consts: [[1, "item"], [1, "card"], [1, "card-skeleton"]], template: function ProductCardLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdC1jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC1sb2FkaW5nL3Byb2R1Y3QtY2FyZC1sb2FkaW5nLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCardLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-card-loading',
                templateUrl: './product-card-loading.component.html',
                styleUrls: ['./product-card-loading.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pt-components/product-card-w/product-card-w.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/pt-components/product-card-w/product-card-w.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductCardWComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardWComponent", function() { return ProductCardWComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/core/product.service */ "./src/app/shared/core/product.service.ts");
/* harmony import */ var src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/core/authentication.service */ "./src/app/shared/core/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ProductCardWComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardWComponent_div_0_div_1_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r115.addPrdocutsToWishList(ctx_r115.product.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductCardWComponent_div_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardWComponent_div_0_div_1_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r117.addPrdocutsToWishList(ctx_r117.product.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductCardWComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductCardWComponent_div_0_div_1_div_1_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductCardWComponent_div_0_div_1_div_2_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r108.setWishListFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r108.setWishListFlag);
} }
function ProductCardWComponent_div_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardWComponent_div_0_div_2_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r121.removePrdocutFromWishList(ctx_r121.product.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductCardWComponent_div_0_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardWComponent_div_0_div_2_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r123.removePrdocutFromWishList(ctx_r123.product.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductCardWComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductCardWComponent_div_0_div_2_div_1_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductCardWComponent_div_0_div_2_div_2_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.setWishListFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r109.setWishListFlag);
} }
function ProductCardWComponent_div_0_h5_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", ctx_r110.product.cost, " ");
} }
function ProductCardWComponent_div_0_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductCardWComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductCardWComponent_div_0_div_1_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductCardWComponent_div_0_div_2_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductCardWComponent_div_0_h5_23_Template, 2, 1, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProductCardWComponent_div_0_ng_template_24_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r107.isProductWishListed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r107.isProductWishListed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r107.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r107.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "https://artiaraimages.s3.us-east-2.amazonaws.com/", ctx_r107.product.retailerType, "/", ctx_r107.product.productImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r107.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r107.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx_r107.product.brandName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buy on ", ctx_r107.product.retailerType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/logos/", ctx_r107.product.retailerType, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r107.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r107.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r107.product.cost != 0)("ngIfElse", _r111);
} }
class ProductCardWComponent {
    constructor(router, route, productService, authenticationService) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        /* this.route.params.subscribe(() => {
          this.authenticationService.loginStatus().subscribe(res => {
            if(!res) {
              sessionStorage.removeItem('iuli');
              this.router.navigate(['/']);
            }
          });
        }); */
        if (this.setWishListFlag) {
            this.isProductWishListed = true;
        }
        else {
            this.isProductWishListed = false;
        }
    }
    redirectToGoodToMatchSearchPage(searchKey) {
        this.addQeuryParamForSearch(this.router, this.route, searchKey, '');
    }
    addQeuryParamForSearch(router, route, searchKey, zipcode) {
        // changes the route without moving from the current view or
        // triggering a navigation event,
        router.navigate(['/product/search/title'], {
            relativeTo: route,
            queryParams: {
                kw: searchKey,
                zip: '',
                pr: 'l2h'
            }
            // preserve the existing query params in the route
            // skipLocationChange: true
            // do not trigger navigation
        });
    }
    addPrdocutsToWishList(value) {
        if (!this.authenticationService.isUserLoggedIn()) {
            this.authenticationService.login();
        }
        else {
            this.productService.addProductsToWishList(value).subscribe(res => {
                if (!res) {
                    this.isProductWishListed = false;
                }
                else {
                    this.isProductWishListed = true;
                }
            });
        }
    }
    removePrdocutFromWishList(value) {
        if (!this.authenticationService.isUserLoggedIn()) {
            this.authenticationService.login();
        }
        else {
            this.productService.removeProductsFromWishList(value).subscribe(res => {
                this.isProductWishListed = false;
            });
        }
    }
}
ProductCardWComponent.ɵfac = function ProductCardWComponent_Factory(t) { return new (t || ProductCardWComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ProductCardWComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardWComponent, selectors: [["app-product-card-w"]], inputs: { product: "product", page: "page", setWishListFlag: "setWishListFlag" }, decls: 1, vars: 1, consts: [["class", "item", 4, "ngIf"], [1, "item"], ["class", "wishlist", 4, "ngIf"], [1, "card"], [1, "bg-white", "border-0"], [1, "product-image"], ["target", "_blank", 3, "title", "href"], ["alt", "", 3, "src"], [1, "card-body", "bg-white", "border-0", "py-0"], [1, "product-details"], [2, "font-size", "medium", "color", "lightcoral"], ["type", "submit", 1, "btn", "btn-light", "w-100", 2, "font-size", "small"], [1, "card-footer", "bg-white", "border-0", "d-flex", "align-items-center", "justify-content-between", "flex-column"], [1, "my-0", "w-100", "mb-2"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between"], [1, "retailer-logo"], [1, "text-right"], ["class", "text-dark fw-semi-bold mb-0", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "wishlist"], [4, "ngIf"], ["data-toggle", "modal", "data-target", "#emailModlal", 3, "click"], ["title", "Wishlist", 1, "fa", "fa-heart", "text-grey", 2, "margin-right", "20px", "margin-top", "10px"], ["title", "Remove Wishlist", 1, "fa", "fa-heart", "text-primary", 2, "margin-right", "20px", "margin-top", "10px"], [1, "text-dark", "fw-semi-bold", "mb-0"]], template: function ProductCardWComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductCardWComponent_div_0_Template, 26, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdC1jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC13L3Byb2R1Y3QtY2FyZC13LmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCardWComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-card-w',
                templateUrl: './product-card-w.component.html',
                styleUrls: ['./product-card-w.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setWishListFlag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/pt-components/product-card/product-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pt-components/product-card/product-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/core/product.service */ "./src/app/shared/core/product.service.ts");
/* harmony import */ var src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/core/authentication.service */ "./src/app/shared/core/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../main/products/product-details/product-details.component */ "./src/app/main/products/product-details/product-details.component.ts");








const _c0 = ["signupModal"];
const _c1 = ["productDetailsModal"];
function ProductCardComponent_div_0_h6_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", ctx_r72.product.cost, " ");
} }
function ProductCardComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardComponent_div_0_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.openProductDetailsModal("model-lg", ctx_r75.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardComponent_div_0_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.openProductDetailsModal("model-lg", ctx_r77.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductCardComponent_div_0_h6_12_Template, 2, 1, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductCardComponent_div_0_ng_template_13_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r69.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "https://artiaraimages.s3.us-east-2.amazonaws.com/", ctx_r69.product.retailerType, "/", ctx_r69.product.productImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/logos/", ctx_r69.product.retailerType, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r69.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.product.cost != 0)("ngIfElse", _r73);
} }
function ProductCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardComponent_ng_template_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.productDetailsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-product-selection", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardComponent_ng_template_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.productDetailsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r71.product)("page", "product-details");
} }
class ProductCardComponent {
    constructor(router, route, modalService, productService, authenticationService) {
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.productService = productService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        /* if(this.product.title.length > 30){
          this.product.title = this.product.title.substring(0,30)+"...";
        }
        if(this.product.brandName.length > 12){
          this.product.brandName = this.product.brandName.substring(0,8)+"...";
        } */
        /*  this.route.params.subscribe(() => {
           this.authenticationService.loginStatus().subscribe(res => {
             if(!res) {
               sessionStorage.removeItem('iuli');
               this.router.navigate(['/']);
             }
           });
         });  */
        if (this.setWishListFlag) {
            this.isProductWishListed = true;
        }
        else {
            this.isProductWishListed = false;
        }
    }
    redirectToGoodToMatchSearchPage(searchKey) {
        this.addQeuryParamForSearch(this.router, this.route, searchKey, '');
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
    openProductDetailsModal(classNames, product) {
        this.productDetailsModalRef = this.modalService.show(this.productDetailsModal, { class: classNames });
        this.productDetailsModalRef.setClass('modal-lg');
        // Remove query params
        this.router.navigate([], {
            queryParams: {
                product: product
            },
            queryParamsHandling: 'merge'
        });
    }
    addQeuryParamForSearch(router, route, searchKey, zipcode) {
        // changes the route without moving from the current view or
        // triggering a navigation event,
        router.navigate(['/product/search/title'], {
            relativeTo: route,
            queryParams: {
                kw: searchKey,
                zip: '',
                pr: 'l2h'
            }
            // preserve the existing query params in the route
            // skipLocationChange: true
            // do not trigger navigation
        });
    }
    addPrdocutsToWishList(value) {
        if (!this.authenticationService.isUserLoggedIn()) {
            this.authenticationService.login();
        }
        else {
            this.productService.addProductsToWishList(value).subscribe(res => {
                if (!res) {
                    this.isProductWishListed = false;
                }
                else {
                    this.isProductWishListed = true;
                }
            });
        }
    }
    removePrdocutFromWishList(value) {
        if (!this.authenticationService.isUserLoggedIn()) {
            this.authenticationService.login();
        }
        else {
            this.productService.removeProductsFromWishList(value).subscribe(res => {
                this.isProductWishListed = false;
            });
        }
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], viewQuery: function ProductCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signupModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productDetailsModal = _t.first);
    } }, inputs: { product: "product", page: "page", setWishListFlag: "setWishListFlag" }, decls: 3, vars: 1, consts: [["class", "item", 4, "ngIf"], ["productDetailsModal", ""], [1, "item"], [1, "card"], [1, "product-image"], ["target", "_blank", 3, "title", "click"], ["alt", "", 3, "src"], [1, "card-footer", "bg-white", "border-0", "d-flex", "align-items-center", "justify-content-between", "flex-column"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between"], [1, "retailer-logo"], [1, "text-right"], ["class", "text-dark fw-semi-bold mb-0", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "text-dark", "fw-semi-bold", "mb-0"], [2, "margin-right", "20px", "margin-top", "20px"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "text-dark", 3, "click"], ["aria-hidden", "true", 2, "font-size", "xx-large", "color", "crimson"], [3, "product", "page"], [2, "margin-right", "20px", "margin-top", "10px", "margin-bottom", "20px"], [1, "fa", "fa-angle-left", 2, "font-size", "36px"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductCardComponent_div_0_Template, 15, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductCardComponent_ng_template_1_Template, 10, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _main_products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["productDetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdC1jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-card',
                templateUrl: './product-card.component.html',
                styleUrls: ['./product-card.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }, { type: src_app_shared_core_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: src_app_shared_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setWishListFlag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], signupModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['signupModal', { static: false }]
        }], productDetailsModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['productDetailsModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/pt-components/product-filter/product-filter.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/pt-components/product-filter/product-filter.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductFilterComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductFilterComponent.ɵfac = function ProductFilterComponent_Factory(t) { return new (t || ProductFilterComponent)(); };
ProductFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductFilterComponent, selectors: [["app-product-filter"]], decls: 0, vars: 0, template: function ProductFilterComponent_Template(rf, ctx) { }, styles: [".filter_card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   #retailerFilter[_ngcontent-%COMP%], .filter_card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   #availFilter[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.filter_card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 45%;\n  right: 15px;\n}\n.filter_card[_ngcontent-%COMP%] {\n  border-color: #E9E9E9;\n}\n.filter_card[_ngcontent-%COMP%]   .bg-light-gray[_ngcontent-%COMP%] {\n  background-color: #F6F6F6;\n}\n.filter_card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.75rem;\n}\n.filter_card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover, .filter_card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-outline-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.filter_card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #E9E9E9;\n}\n.filter_card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-outline-secondary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.filter_card[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.filter_card[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .filter_card[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {\n  color: #6c757d;\n  text-decoration: none;\n  background-color: #e9ecef;\n}\n.filter_card[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: white;\n  border-left: 0;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-color: #E9E9E9;\n}\n.filter_card[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-color: #E9E9E9;\n}\n@media (max-width: 480px) {\n  #retailerFilter.space[_ngcontent-%COMP%], #availFilter.space[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3B0LWNvbXBvbmVudHMvcHJvZHVjdC1maWx0ZXIvRDpcXFdvcmtzcGFjZVxcYXJ0aWFyYS1uZy1hcHAtbmV3L3NyY1xcYXBwXFxzaGFyZWRcXHB0LWNvbXBvbmVudHNcXHByb2R1Y3QtZmlsdGVyXFxwcm9kdWN0LWZpbHRlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvc2hhcmVkL3B0LWNvbXBvbmVudHMvcHJvZHVjdC1maWx0ZXIvcHJvZHVjdC1maWx0ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxnQkFBQTtBQ0RaO0FERVE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQVo7QURHQTtFQUNJLHFCQUFBO0FDQUo7QURDSTtFQUNJLHlCQUFBO0FDQ1I7QURBSTtFQUNJLHdCQUFBO0FDRVI7QUREUTtFQUNJLGNBQUE7QUNHWjtBREZRO0VBQ0kscUJBQUE7QUNJWjtBREhRO0VBQ0ksZ0JBQUE7QUNLWjtBREpJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDTVI7QURKSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDTVI7QURKSTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtBQ01SO0FESkk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNNUjtBREhBO0VBQ0k7SUFDSSxnQkFBQTtFQ01OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcHQtY29tcG9uZW50cy9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJfY2FyZFxyXG4gICAgLmZvcm0tZ3JvdXBcclxuICAgICAgICAjcmV0YWlsZXJGaWx0ZXIsI2F2YWlsRmlsdGVyXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgICAgICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlclxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgICAgXHJcbiAgICAgICAgICAgIHRvcDogNDUlXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4XHJcblxyXG5cclxuLmZpbHRlcl9jYXJkXHJcbiAgICBib3JkZXItY29sb3I6ICAjRTlFOUU5XHJcbiAgICAuYmctbGlnaHQtZ3JheVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjZcclxuICAgIC5jYXJkLWJvZHlcclxuICAgICAgICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW1cclxuICAgICAgICAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyLC5idG4tb3V0bGluZS1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlXHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkXHJcbiAgICAgICAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeVxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNFOUU5RTlcclxuICAgICAgICAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1c1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lXHJcbiAgICAuYnRuLWdyb3VwIHVsIGxpIC5kcm9wZG93bi1pdGVtXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG5cclxuICAgIC5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmRyb3Bkb3duLWl0ZW06YWN0aXZlXHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2RcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmXHJcbiAgICBcclxuICAgIC5pbnB1dC1ncm91cC10ZXh0XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxuICAgICAgICBib3JkZXItbGVmdDogMFxyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW1cclxuICAgICAgICBib3JkZXItY29sb3I6ICNFOUU5RTlcclxuXHJcbiAgICBpbnB1dC5mb3JtLWNvbnRyb2xcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDBcclxuICAgICAgICBib3JkZXItY29sb3I6ICNFOUU5RTlcclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIFxyXG4gICAgI3JldGFpbGVyRmlsdGVyLnNwYWNlLCAjYXZhaWxGaWx0ZXIuc3BhY2VcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtIiwiLmZpbHRlcl9jYXJkIC5mb3JtLWdyb3VwICNyZXRhaWxlckZpbHRlciwgLmZpbHRlcl9jYXJkIC5mb3JtLWdyb3VwICNhdmFpbEZpbHRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZmlsdGVyX2NhcmQgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICByaWdodDogMTVweDtcbn1cblxuLmZpbHRlcl9jYXJkIHtcbiAgYm9yZGVyLWNvbG9yOiAjRTlFOUU5O1xufVxuLmZpbHRlcl9jYXJkIC5iZy1saWdodC1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcbn1cbi5maWx0ZXJfY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMC41NXJlbSAwLjc1cmVtO1xufVxuLmZpbHRlcl9jYXJkIC5jYXJkLWJvZHkgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3ZlciwgLmZpbHRlcl9jYXJkIC5jYXJkLWJvZHkgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cbi5maWx0ZXJfY2FyZCAuY2FyZC1ib2R5IC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6ICNFOUU5RTk7XG59XG4uZmlsdGVyX2NhcmQgLmNhcmQtYm9keSAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZmlsdGVyX2NhcmQgLmJ0bi1ncm91cCB1bCBsaSAuZHJvcGRvd24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZmlsdGVyX2NhcmQgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLCAuZmlsdGVyX2NhcmQgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbn1cbi5maWx0ZXJfY2FyZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItY29sb3I6ICNFOUU5RTk7XG59XG4uZmlsdGVyX2NhcmQgaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6ICNFOUU5RTk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAjcmV0YWlsZXJGaWx0ZXIuc3BhY2UsICNhdmFpbEZpbHRlci5zcGFjZSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-filter',
                templateUrl: './product-filter.component.html',
                styleUrls: ['./product-filter.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pt-components/select-store/select-store.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pt-components/select-store/select-store.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectStoreComponent", function() { return SelectStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SelectStoreComponent {
    constructor() {
        this.loading = [];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.retailerType && changes.retailerType.currentValue) {
        }
    }
}
SelectStoreComponent.ɵfac = function SelectStoreComponent_Factory(t) { return new (t || SelectStoreComponent)(); };
SelectStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectStoreComponent, selectors: [["app-select-store"]], inputs: { retailerType: "retailerType", radius: "radius", zipcode: "zipcode" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function SelectStoreComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdC1jb21wb25lbnRzL3NlbGVjdC1zdG9yZS9zZWxlY3Qtc3RvcmUuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-store',
                templateUrl: './select-store.component.html',
                styleUrls: ['./select-store.component.sass']
            }]
    }], function () { return []; }, { retailerType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zipcode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pt-components/product-card/product-card.component */ "./src/app/shared/pt-components/product-card/product-card.component.ts");
/* harmony import */ var _main_products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main/products/product-details/product-details.component */ "./src/app/main/products/product-details/product-details.component.ts");
/* harmony import */ var _pt_components_product_card_w_product_card_w_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pt-components/product-card-w/product-card-w.component */ "./src/app/shared/pt-components/product-card-w/product-card-w.component.ts");
/* harmony import */ var _pt_components_product_card_details_product_card_d_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pt-components/product-card-details/product-card-d.component */ "./src/app/shared/pt-components/product-card-details/product-card-d.component.ts");
/* harmony import */ var _pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pt-components/product-card-loading/product-card-loading.component */ "./src/app/shared/pt-components/product-card-loading/product-card-loading.component.ts");
/* harmony import */ var _pt_components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pt-components/product-filter/product-filter.component */ "./src/app/shared/pt-components/product-filter/product-filter.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe/productfilter.pipe */ "./src/app/shared/pipe/productfilter.pipe.ts");
/* harmony import */ var _pt_components_select_store_select_store_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pt-components/select-store/select-store.component */ "./src/app/shared/pt-components/select-store/select-store.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");




















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
    // SupportService,
    // UserProfileService,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            // AvatarModule,
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
        ],
        // HeaderComponent,
        // FooterComponent,
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [
        // HeaderComponent,
        // FooterComponent,
        _pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"],
        _pt_components_product_card_details_product_card_d_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardDComponent"],
        _pt_components_product_card_w_product_card_w_component__WEBPACK_IMPORTED_MODULE_6__["ProductCardWComponent"],
        _pt_components_select_store_select_store_component__WEBPACK_IMPORTED_MODULE_12__["SelectStoreComponent"],
        _pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_8__["ProductCardLoadingComponent"],
        _pt_components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__["ProductFilterComponent"],
        _pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_11__["ProductFilterPipe"],
        _main_products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["productDetailsComponent"]
        // TermsOfUseComponent,
        // PrivacyPolicyComponent,
        // SignupComponent,
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"]], exports: [
        // HeaderComponent,
        // FooterComponent,
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"],
        _pt_components_product_card_details_product_card_d_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardDComponent"],
        _pt_components_product_card_w_product_card_w_component__WEBPACK_IMPORTED_MODULE_6__["ProductCardWComponent"],
        _pt_components_select_store_select_store_component__WEBPACK_IMPORTED_MODULE_12__["SelectStoreComponent"],
        _pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_8__["ProductCardLoadingComponent"],
        _pt_components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__["ProductFilterComponent"],
        _pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_11__["ProductFilterPipe"],
        _main_products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["productDetailsComponent"]
        // TermsOfUseComponent,
        // PrivacyPolicyComponent,
        // SignupComponent,
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    // HeaderComponent,
                    // FooterComponent,
                    _pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"],
                    _pt_components_product_card_details_product_card_d_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardDComponent"],
                    _pt_components_product_card_w_product_card_w_component__WEBPACK_IMPORTED_MODULE_6__["ProductCardWComponent"],
                    _pt_components_select_store_select_store_component__WEBPACK_IMPORTED_MODULE_12__["SelectStoreComponent"],
                    _pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_8__["ProductCardLoadingComponent"],
                    _pt_components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__["ProductFilterComponent"],
                    _pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_11__["ProductFilterPipe"],
                    _main_products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["productDetailsComponent"]
                    // TermsOfUseComponent,
                    // PrivacyPolicyComponent,
                    // SignupComponent,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    // AvatarModule,
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
                ],
                exports: [
                    // HeaderComponent,
                    // FooterComponent,
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"],
                    _pt_components_product_card_details_product_card_d_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardDComponent"],
                    _pt_components_product_card_w_product_card_w_component__WEBPACK_IMPORTED_MODULE_6__["ProductCardWComponent"],
                    _pt_components_select_store_select_store_component__WEBPACK_IMPORTED_MODULE_12__["SelectStoreComponent"],
                    _pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_8__["ProductCardLoadingComponent"],
                    _pt_components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__["ProductFilterComponent"],
                    _pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_11__["ProductFilterPipe"],
                    _main_products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["productDetailsComponent"]
                    // TermsOfUseComponent,
                    // PrivacyPolicyComponent,
                    // SignupComponent,
                ],
                providers: [
                // SupportService,
                // UserProfileService,
                ],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_pt_components_product_card_details_product_card_d_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardDComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownMenuDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵr"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵg"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵh"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵi"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵj"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵk"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵl"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵm"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵn"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵo"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵp"], 
    // HeaderComponent,
    // FooterComponent,
    _pt_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"],
    _pt_components_product_card_details_product_card_d_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardDComponent"],
    _pt_components_product_card_w_product_card_w_component__WEBPACK_IMPORTED_MODULE_6__["ProductCardWComponent"],
    _pt_components_select_store_select_store_component__WEBPACK_IMPORTED_MODULE_12__["SelectStoreComponent"],
    _pt_components_product_card_loading_product_card_loading_component__WEBPACK_IMPORTED_MODULE_8__["ProductCardLoadingComponent"],
    _pt_components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__["ProductFilterComponent"],
    _main_products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["productDetailsComponent"]
    // TermsOfUseComponent,
    // PrivacyPolicyComponent,
    // SignupComponent,
], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], _pipe_productfilter_pipe__WEBPACK_IMPORTED_MODULE_11__["ProductFilterPipe"]]);


/***/ })

}]);
//# sourceMappingURL=default~category-category-module~home-home-module~products-products-module~user-profile-user-profile-module-es2015.js.map