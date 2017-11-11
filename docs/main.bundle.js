webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/clickOutside.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
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

var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
    var _a;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/clickOutside.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/list-filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListFilterPipe = (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter) {
        return !(filter.itemName && item.itemName && item.itemName.toLowerCase().indexOf(filter.itemName.toLowerCase()) === -1);
    };
    ListFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'listFilter',
            pure: false
        })
    ], ListFilterPipe);
    return ListFilterPipe;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/list-filter.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/menu-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TemplateRenderer; });
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

var Item = (function () {
    function Item() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
    ], Item.prototype, "template", void 0);
    Item = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-item',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], Item);
    return Item;
    var _a;
}());

var TemplateRenderer = (function () {
    function TemplateRenderer(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateRenderer.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.data.template, {
            '\$implicit': this.data,
            'item': this.item
        });
    };
    TemplateRenderer.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemplateRenderer.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemplateRenderer.prototype, "item", void 0);
    TemplateRenderer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-templateRenderer',
            template: ""
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
    ], TemplateRenderer);
    return TemplateRenderer;
    var _a;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/menu-item.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdown()\">\r\n    <div class=\"selected-list\">\r\n        <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\">\r\n            <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\r\n            <span *ngIf=\"settings.singleSelection\">\r\n                <span *ngFor=\"let item of selectedItems;trackBy: trackByFn;\">\r\n                    {{item.itemName}}\r\n                </span>\r\n            </span>\r\n            <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\r\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\r\n                    <span class=\"c-label\">{{item.itemName}}</span>\r\n                    <span class=\"fa fa-remove\" (click)=\"onItemClick(item,k,$event)\"></span>\r\n                </div>\r\n            </div> \r\n            <span *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\r\n            <span class=\"fa\" [ngClass]=\"{'fa-angle-down': !isActive,'fa-angle-up':isActive}\"></span>\r\n        </div>      \r\n    </div>\r\n    <div class=\"dropdown-list\" [hidden]=\"!isActive\">\r\n    <div class=\"arrow-up arrow-2\"></div>\r\n    <div class=\"arrow-up\"></div>\r\n    <div class=\"list-area\">\r\n        <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection\" (click)=\"toggleSelectAll()\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"/>\r\n            <label>\r\n                <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\r\n                <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\r\n            </label>\r\n        </div>   \r\n        <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\r\n            <span class=\"fa fa-search\"></span>\r\n            <input type=\"text\" [placeholder]=\"settings.searchPlaceholderText\" [(ngModel)]=\"filter.itemName\">\r\n        </div> \r\n    <ul *ngIf=\"!settings.groupBy\" [style.maxHeight] = \"settings.maxHeight+'px'\">\r\n        <span *ngIf=\"itemTempl\">\r\n            <li *ngFor=\"let item of data | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label></label>\r\n            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\r\n        </li>\r\n        </span>\r\n        <span *ngIf=\"!itemTempl\" >\r\n        <li *ngFor=\"let item of data | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label>{{item.itemName}}</label>\r\n        </li>\r\n        </span>\r\n    </ul>\r\n    <div *ngIf=\"settings.groupBy\" [style.maxHeight] = \"settings.maxHeight+'px'\" style=\"overflow: auto;\">\r\n    <ul *ngFor=\"let obj of groupedData ; let i = index;\" class=\"list-grp\">\r\n        <h4>{{obj.key}}</h4>\r\n        <span *ngIf=\"itemTempl\" >\r\n        <li *ngFor=\"let item of obj.value | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label>{{item.itemName}}</label>\r\n            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\r\n        </li>\r\n        </span>\r\n        <span *ngIf=\"!itemTempl\" >\r\n        <li *ngFor=\"let item of obj.value | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label>{{item.itemName}}</label>\r\n        </li>\r\n        </span>\r\n    </ul>\r\n    </div>\r\n    <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">No Data Available</h5>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cuppa-dropdown {\n  position: relative; }\n\n.c-btn {\n  display: inline-block;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 14px;\n  color: #333; }\n\n.c-btn.disabled {\n  background: #ccc; }\n\n.c-btn:focus {\n  outline: none; }\n\n.selected-list .c-list {\n  float: left;\n  padding: 0px;\n  margin: 0px; }\n  .selected-list .c-list .c-token {\n    list-style: none;\n    padding: 0px 5px;\n    background: #0079FE;\n    color: #fff;\n    border-radius: 2px;\n    margin-right: 4px;\n    float: left; }\n    .selected-list .c-list .c-token .c-label {\n      display: block;\n      float: left;\n      /*width: 50px;\r\n                white-space: nowrap;\r\n                text-overflow: ellipsis;\r\n                overflow: hidden;*/ }\n    .selected-list .c-list .c-token .fa-remove {\n      margin-left: 1px;\n      font-size: 12px;\n      z-index: 100000000; }\n\n.selected-list .fa-angle-down, .selected-list .fa-angle-up {\n  font-size: 15pt;\n  position: absolute;\n  right: 10px;\n  top: 25%; }\n\n.selected-list .c-btn {\n  width: 100%;\n  box-shadow: 0px 1px 5px #959595;\n  padding: 10px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.dropdown-list {\n  position: absolute;\n  padding-top: 14px;\n  width: 100%;\n  z-index: 9999; }\n  .dropdown-list ul {\n    padding: 0px;\n    list-style: none;\n    overflow: auto;\n    margin: 0px; }\n    .dropdown-list ul li {\n      padding: 10px 10px;\n      cursor: pointer;\n      text-align: left; }\n    .dropdown-list ul li:first-child {\n      padding-top: 10px; }\n    .dropdown-list ul li:last-child {\n      padding-bottom: 10px; }\n    .dropdown-list ul li:hover {\n      background: #f5f5f5; }\n  .dropdown-list ::-webkit-scrollbar {\n    width: 8px; }\n  .dropdown-list ::-webkit-scrollbar-thumb {\n    background: #cccccc;\n    border-radius: 5px; }\n  .dropdown-list ::-webkit-scrollbar-track {\n    background: #f2f2f2; }\n\n.arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 15px solid #fff;\n  margin-left: 15px;\n  position: absolute;\n  top: 0; }\n\n.arrow-2 {\n  border-bottom: 15px solid #ccc;\n  top: -1px; }\n\n.list-area {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  margin: 0px;\n  box-shadow: 0px 1px 5px #959595; }\n\n.select-all {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  text-align: left; }\n\n.list-filter {\n  border-bottom: 1px solid #ccc;\n  position: relative; }\n  .list-filter input {\n    border: 0px;\n    width: 100%;\n    height: 35px;\n    padding: 0px 0px 0px 35px; }\n  .list-filter input:focus {\n    outline: none; }\n  .list-filter .fa {\n    position: absolute;\n    top: 10px;\n    left: 13px;\n    color: #888; }\n\n.pure-checkbox input[type=\"checkbox\"] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.pure-checkbox input[type=\"checkbox\"]:focus + label:before,\n.pure-checkbox input[type=\"checkbox\"]:hover + label:before {\n  border-color: #0079FE;\n  background-color: #f2f2f2; }\n\n.pure-checkbox input[type=\"checkbox\"]:active + label:before {\n  transition-duration: 0s; }\n\n.pure-checkbox input[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 2em;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin: 0px;\n  color: #000;\n  font-weight: 300; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:before {\n  box-sizing: content-box;\n  content: '';\n  color: #0079FE;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 14px;\n  height: 14px;\n  margin-top: -9px;\n  border: 2px solid #0079FE;\n  text-align: center;\n  transition: all 0.4s ease; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:after {\n  box-sizing: content-box;\n  content: '';\n  background-color: #0079FE;\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled + label:before {\n  border-color: #cccccc; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled:focus + label:before\n.pure-checkbox input[type=\"checkbox\"]:disabled:hover + label:before {\n  background-color: inherit; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled:checked + label:before {\n  background-color: #cccccc; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:after {\n  background-color: transparent;\n  top: 50%;\n  left: 4px;\n  width: 8px;\n  height: 3px;\n  margin-top: -4px;\n  border-style: solid;\n  border-color: #ffffff;\n  border-width: 0 0 3px 3px;\n  -o-border-image: none;\n     border-image: none;\n  -webkit-transform: rotate(-45deg) scale(0);\n          transform: rotate(-45deg) scale(0); }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after {\n  content: '';\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1);\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out; }\n\n.pure-checkbox input[type=\"radio\"]:checked + label:before {\n  -webkit-animation: borderscale 300ms ease-in;\n          animation: borderscale 300ms ease-in;\n  background-color: white; }\n\n.pure-checkbox input[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.pure-checkbox input[type=\"radio\"] + label:before {\n  border-radius: 50%; }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:before {\n  -webkit-animation: borderscale 200ms ease-in;\n          animation: borderscale 200ms ease-in;\n  background: #0079FE; }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after {\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1); }\n\n@-webkit-keyframes borderscale {\n  50% {\n    box-shadow: 0 0 0 2px #0079FE; } }\n\n@keyframes borderscale {\n  50% {\n    box-shadow: 0 0 0 2px #0079FE; } }\n\n.list-message {\n  text-align: center; }\n\n.list-grp {\n  padding: 0 15px !important; }\n\n.list-grp h4 {\n  text-transform: capitalize;\n  margin: 15px 0px 0px 0px;\n  font-size: 14px;\n  font-weight: 700; }\n\n.list-grp > li {\n  padding-left: 15px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DROPDOWN_CONTROL_VALUE_ACCESSOR */
/* unused harmony export AngularMultiSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMultiSelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiselect_model__ = __webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/multiselect.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multiselect_interface__ = __webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/multiselect.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multiselect_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__multiselect_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clickOutside__ = __webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/clickOutside.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_filter__ = __webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/list-filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_item__ = __webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/menu-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return AngularMultiSelect; }),
    multi: true
};
var noop = function () {
};
var AngularMultiSelect = (function () {
    function AngularMultiSelect() {
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isActive = false;
        this.isSelectAll = false;
        this.filter = new __WEBPACK_IMPORTED_MODULE_3__multiselect_model__["a" /* ListItem */]();
        this.defaultSettings = {
            singleSelection: false,
            text: 'Select',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            maxHeight: 300,
            badgeShowLimit: 999999999999,
            classes: '',
            disabled: false,
            searchPlaceholderText: 'Search',
            showCheckbox: true
        };
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    AngularMultiSelect.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.groupBy) {
            this.groupedData = this.transformData(this.data, this.settings.groupBy);
        }
    };
    AngularMultiSelect.prototype.ngOnChanges = function (changes) {
        if (!changes.data.firstChange) {
            if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);
                if (this.data.length == 0) {
                    this.selectedItems = [];
                }
            }
        }
    };
    AngularMultiSelect.prototype.ngDoCheck = function () {
        if (this.selectedItems) {
            if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
            }
        }
    };
    AngularMultiSelect.prototype.onItemClick = function (item, index, evt) {
        if (this.settings.disabled) {
            return false;
        }
        var found = this.isSelected(item);
        var limit = this.selectedItems.length < this.settings.limitSelection ? true : false;
        if (!found) {
            if (this.settings.limitSelection) {
                if (limit) {
                    this.addSelected(item);
                    this.onSelect.emit(item);
                }
            }
            else {
                this.addSelected(item);
                this.onSelect.emit(item);
            }
        }
        else {
            this.removeSelected(item);
            this.onDeSelect.emit(item);
        }
        if (this.isSelectAll || this.data.length > this.selectedItems.length) {
            this.isSelectAll = false;
        }
        if (this.data.length == this.selectedItems.length) {
            this.isSelectAll = true;
        }
    };
    AngularMultiSelect.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            if (this.settings.singleSelection) {
                try {
                    if (value.length > 1) {
                        this.selectedItems = [value[0]];
                        throw new __WEBPACK_IMPORTED_MODULE_3__multiselect_model__["b" /* MyException */](404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                    }
                    else {
                        this.selectedItems = value;
                    }
                }
                catch (e) {
                    console.error(e.body.msg);
                }
            }
            else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.splice(0, this.settings.limitSelection);
                }
                else {
                    this.selectedItems = value;
                }
                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                    this.isSelectAll = true;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
    };
    //From ControlValueAccessor interface
    AngularMultiSelect.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    AngularMultiSelect.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    AngularMultiSelect.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    AngularMultiSelect.prototype.isSelected = function (clickedItem) {
        var found = false;
        this.selectedItems && this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    AngularMultiSelect.prototype.addSelected = function (item) {
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else
            this.selectedItems.push(item);
        this.onChangeCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.removeSelected = function (clickedItem) {
        var _this = this;
        this.selectedItems && this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.toggleDropdown = function (evt) {
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = !this.isActive;
        evt.preventDefault();
    };
    AngularMultiSelect.prototype.closeDropdown = function () {
        this.filter = new __WEBPACK_IMPORTED_MODULE_3__multiselect_model__["a" /* ListItem */]();
        this.isActive = false;
    };
    AngularMultiSelect.prototype.toggleSelectAll = function () {
        if (!this.isSelectAll) {
            this.selectedItems = [];
            this.selectedItems = this.data.slice();
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
        }
    };
    AngularMultiSelect.prototype.transformData = function (arr, field) {
        var groupedObj = arr.reduce(function (prev, cur) {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        var tempArr = [];
        Object.keys(groupedObj).map(function (x) {
            tempArr.push({ key: x, value: groupedObj[x] });
        });
        return tempArr;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AngularMultiSelect.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__multiselect_interface__["DropdownSettings"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__multiselect_interface__["DropdownSettings"]) === "function" && _a || Object)
    ], AngularMultiSelect.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onSelect'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
    ], AngularMultiSelect.prototype, "onSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onDeSelect'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
    ], AngularMultiSelect.prototype, "onDeSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onSelectAll'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
    ], AngularMultiSelect.prototype, "onSelectAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onDeSelectAll'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
    ], AngularMultiSelect.prototype, "onDeSelectAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Item */]),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Item */]) === "function" && _f || Object)
    ], AngularMultiSelect.prototype, "itemTempl", void 0);
    AngularMultiSelect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'angular2-multiselect',
            template: __webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.html"),
            host: { '[class]': 'defaultSettings.classes' },
            styles: [__webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.scss")],
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [])
    ], AngularMultiSelect);
    return AngularMultiSelect;
    var _a, _b, _c, _d, _e, _f;
}());

var AngularMultiSelectModule = (function () {
    function AngularMultiSelectModule() {
    }
    AngularMultiSelectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
            declarations: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_5__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_6__list_filter__["a" /* ListFilterPipe */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Item */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["b" /* TemplateRenderer */]],
            exports: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_5__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_6__list_filter__["a" /* ListFilterPipe */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Item */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["b" /* TemplateRenderer */]]
        })
    ], AngularMultiSelectModule);
    return AngularMultiSelectModule;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/multiselect.component.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/multiselect.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/multiselect.interface.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/multiselect.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyException; });
var ListItem = (function () {
    function ListItem() {
    }
    return ListItem;
}());

var MyException = (function () {
    function MyException(status, body) {
        this.status = status;
        this.body = body;
    }
    return MyException;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/multiselect.model.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-sidebar, .right-sidebar {\r\n    width: 330px;\r\n    max-width: 330px;\r\n    min-width: 330px;\r\n}\r\n.outer-wrapper {\r\n    padding: 30px;\r\n}\r\n.center-content{\r\n    background: #ffffff;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: 3px;\r\n    padding: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-md-3 left-sidebar\">\r\n      <div class=\"list-group\">\r\n        <a href=\"#\" class=\"list-group-item list-group-item-action disabled\">\r\n    Examples\r\n  </a>\r\n        <a [routerLink]=\"['basic']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiselect basic example</a>\r\n        <a [routerLink]=\"['singleselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Single selection</a>\r\n        <a [routerLink]=\"['searchfilter']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Search filter</a>\r\n        <a [routerLink]=\"['groupby']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Group By</a>\r\n        <a [routerLink]=\"['templating']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Templating</a>\r\n        <a [routerLink]=\"['resetdropdown']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Reset dropdown</a>\r\n        <a [routerLink]=\"['disablemode']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Disable dropdown</a>\r\n        <a [routerLink]=\"['limitselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit selection</a>\r\n        <a [routerLink]=\"['limitbadges']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit Badges</a>\r\n        <a [routerLink]=\"['customplaceholder']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom placeholder</a>\r\n        <a [routerLink]=\"['styling']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">CSS Styling</a>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col center-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.singleSelectionList = [];
        this.singleSelectionselectedItems = [];
        this.singleSelectionSettings = {};
        this.basicExampleList = [];
        this.basicExampleSelectedItems = [];
        this.basicExampleSettings = {};
        this.selectedItems3 = [];
        this.dropdownSettings3 = {};
        this.limitSelectionSelectedItems = [];
        this.limitSelectionSettings = {};
        this.disableModeSelectedItems = [];
        this.disableModeSettings = {};
        this.placeholderExampleList = [];
        this.placeholderExampleSelectedItems = [];
        this.placeholderExampleSettings = {};
        this.resetExampleList = [];
        this.resetExampleSelectedItems = [];
        this.resetExampleSettings = {};
        this.groupByExampleList = [];
        this.groupByExampleSelectedItems = [];
        this.groupByExampleSettings = {};
        this.templatingExampleList = [];
        this.templatingExampleSelectedItems = [];
        this.templatingExampleSettings = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        this.singleSelectionList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" }
        ];
        this.singleSelectionselectedItems = [
            { "id": 2, "itemName": "Singapore" }
        ];
        this.singleSelectionSettings = { singleSelection: true, text: "Select Country" };
        this.basicExampleList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.basicExampleSelectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.basicExampleSettings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
        this.selectedItems3 = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" }
        ];
        this.dropdownSettings3 = { singleSelection: false,
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3
        };
        this.limitSelectionSelectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.limitSelectionSettings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class",
            limitSelection: 4
        };
        this.disableModeSelectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.disableModeSettings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class",
            limitSelection: 2,
            disabled: true
        };
        this.placeholderExampleList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" }
        ];
        this.placeholderExampleSelectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.placeholderExampleSettings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            searchPlaceholderText: "Custom Placeholder text"
        };
        this.resetExampleList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" }
        ];
        this.resetExampleSelectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.resetExampleSettings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class"
        };
        this.groupByExampleList = [
            { "id": 1, "itemName": "India", "category": "asia" },
            { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
            { "id": 3, "itemName": "Germany", "category": "Europe" },
            { "id": 4, "itemName": "France", "category": "Europe" },
            { "id": 5, "itemName": "South Korea", "category": "asia" },
            { "id": 6, "itemName": "Sweden", "category": "Europe" }
        ];
        this.groupByExampleSelectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Germany" },
            { "id": 4, "itemName": "France" }
        ];
        this.groupByExampleSettings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            groupBy: "category"
        };
        this.groupByExampleSettings = {
            singleSelection: false,
            text: "Select Fields",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            searchPlaceholderText: 'Search Fields',
            enableSearchFilter: true,
            badgeShowLimit: 5,
            groupBy: "category"
        };
        this.templatingExampleList = [
            { "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
            { "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
            { "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" },
            { "id": 5, "itemName": "South Korea", "capital": "Seoul", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg" },
            { "id": 6, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" }
        ];
        this.templatingExampleSelectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "United Kingdom" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.templatingExampleSettings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            showCheckbox: true
        };
    };
    AppComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.basicExampleSelectedItems);
    };
    AppComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.basicExampleSelectedItems);
    };
    AppComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    AppComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    AppComponent.prototype.showModel = function () {
        console.log(this.singleSelectionselectedItems);
    };
    AppComponent.prototype.changeData = function () {
        this.resetExampleSelectedItems = [];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular2_multiselect_dropdown_multiselect_component__ = __webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_basic__ = __webpack_require__("../../../../../src/app/examples/basic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__examples_singleselection__ = __webpack_require__("../../../../../src/app/examples/singleselection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_groupBy__ = __webpack_require__("../../../../../src/app/examples/groupBy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__examples_searchFilter__ = __webpack_require__("../../../../../src/app/examples/searchFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__examples_templating__ = __webpack_require__("../../../../../src/app/examples/templating.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__examples_resetdropdown__ = __webpack_require__("../../../../../src/app/examples/resetdropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__examples_disablemode__ = __webpack_require__("../../../../../src/app/examples/disablemode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__examples_limitselection__ = __webpack_require__("../../../../../src/app/examples/limitselection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__examples_limitbadges__ = __webpack_require__("../../../../../src/app/examples/limitbadges.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__examples_customplaceholder__ = __webpack_require__("../../../../../src/app/examples/customplaceholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__examples_styling__ = __webpack_require__("../../../../../src/app/examples/styling.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__examples_gist__ = __webpack_require__("../../../../../src/app/examples/gist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__examples_gist__["a" /* ng2Gist */],
                __WEBPACK_IMPORTED_MODULE_7__examples_basic__["a" /* BasicExample */],
                __WEBPACK_IMPORTED_MODULE_8__examples_singleselection__["a" /* SingleSelectionExample */],
                __WEBPACK_IMPORTED_MODULE_9__examples_groupBy__["a" /* GroupByExample */],
                __WEBPACK_IMPORTED_MODULE_10__examples_searchFilter__["a" /* SearchFilterExample */],
                __WEBPACK_IMPORTED_MODULE_11__examples_templating__["a" /* TemplatingExample */],
                __WEBPACK_IMPORTED_MODULE_12__examples_resetdropdown__["a" /* ResetDropdownExample */],
                __WEBPACK_IMPORTED_MODULE_13__examples_disablemode__["a" /* DisableModeExample */],
                __WEBPACK_IMPORTED_MODULE_14__examples_limitselection__["a" /* LimitSelectionExample */],
                __WEBPACK_IMPORTED_MODULE_15__examples_limitbadges__["a" /* LimitBadgesExample */],
                __WEBPACK_IMPORTED_MODULE_16__examples_customplaceholder__["a" /* CustomPlaceholderExample */],
                __WEBPACK_IMPORTED_MODULE_17__examples_styling__["a" /* StylingExample */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_router__["a" /* AppRouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular2_multiselect_dropdown_multiselect_component__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["TabViewModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_basic__ = __webpack_require__("../../../../../src/app/examples/basic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_singleselection__ = __webpack_require__("../../../../../src/app/examples/singleselection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_groupBy__ = __webpack_require__("../../../../../src/app/examples/groupBy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_searchFilter__ = __webpack_require__("../../../../../src/app/examples/searchFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__examples_templating__ = __webpack_require__("../../../../../src/app/examples/templating.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_resetdropdown__ = __webpack_require__("../../../../../src/app/examples/resetdropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__examples_disablemode__ = __webpack_require__("../../../../../src/app/examples/disablemode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_limitselection__ = __webpack_require__("../../../../../src/app/examples/limitselection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__examples_limitbadges__ = __webpack_require__("../../../../../src/app/examples/limitbadges.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__examples_customplaceholder__ = __webpack_require__("../../../../../src/app/examples/customplaceholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__examples_styling__ = __webpack_require__("../../../../../src/app/examples/styling.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', redirectTo: '/basic', pathMatch: 'full' },
    { path: 'basic', component: __WEBPACK_IMPORTED_MODULE_2__examples_basic__["a" /* BasicExample */] },
    { path: 'singleselection', component: __WEBPACK_IMPORTED_MODULE_3__examples_singleselection__["a" /* SingleSelectionExample */] },
    { path: 'searchfilter', component: __WEBPACK_IMPORTED_MODULE_5__examples_searchFilter__["a" /* SearchFilterExample */] },
    { path: 'groupby', component: __WEBPACK_IMPORTED_MODULE_4__examples_groupBy__["a" /* GroupByExample */] },
    { path: 'templating', component: __WEBPACK_IMPORTED_MODULE_6__examples_templating__["a" /* TemplatingExample */] },
    { path: 'resetdropdown', component: __WEBPACK_IMPORTED_MODULE_7__examples_resetdropdown__["a" /* ResetDropdownExample */] },
    { path: 'disablemode', component: __WEBPACK_IMPORTED_MODULE_8__examples_disablemode__["a" /* DisableModeExample */] },
    { path: 'limitselection', component: __WEBPACK_IMPORTED_MODULE_9__examples_limitselection__["a" /* LimitSelectionExample */] },
    { path: 'limitbadges', component: __WEBPACK_IMPORTED_MODULE_10__examples_limitbadges__["a" /* LimitBadgesExample */] },
    { path: 'customplaceholder', component: __WEBPACK_IMPORTED_MODULE_11__examples_customplaceholder__["a" /* CustomPlaceholderExample */] },
    { path: 'styling', component: __WEBPACK_IMPORTED_MODULE_12__examples_styling__["a" /* StylingExample */] }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]
            ]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/app.router.js.map

/***/ }),

/***/ "../../../../../src/app/examples/basic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicExample; });
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

var BasicExample = (function () {
    function BasicExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Basic example";
        this.tsgist = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "basic.ts";
        this.htmltitle = "basic.html";
    }
    BasicExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
    };
    BasicExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], BasicExample);
    return BasicExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/basic.js.map

/***/ }),

/***/ "../../../../../src/app/examples/customplaceholder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPlaceholderExample; });
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

var CustomPlaceholderExample = (function () {
    function CustomPlaceholderExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Custom search placeholder";
        this.tsgist = "CuppaLabs/48c087b6c0b4381d5bae1c689cc0ee3e";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "customPlaceholder.ts";
        this.htmltitle = "customPlaceholder.html";
    }
    CustomPlaceholderExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            searchPlaceholderText: "Custom Placeholder text"
        };
    };
    CustomPlaceholderExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    CustomPlaceholderExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    CustomPlaceholderExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    CustomPlaceholderExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    CustomPlaceholderExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], CustomPlaceholderExample);
    return CustomPlaceholderExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/customplaceholder.js.map

/***/ }),

/***/ "../../../../../src/app/examples/disablemode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisableModeExample; });
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

var DisableModeExample = (function () {
    function DisableModeExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Disable mode";
        this.tsgist = "CuppaLabs/96f799302bdfa08e11b4420c86c1d720";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "disableMode.ts";
        this.htmltitle = "disableMode.html";
    }
    DisableModeExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class",
            limitSelection: 2,
            disabled: true
        };
    };
    DisableModeExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    DisableModeExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    DisableModeExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    DisableModeExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    DisableModeExample.prototype.showModel = function () {
        console.log(this.selectedItems);
    };
    DisableModeExample.prototype.changeData = function () {
        this.selectedItems = [];
    };
    DisableModeExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], DisableModeExample);
    return DisableModeExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/disablemode.js.map

/***/ }),

/***/ "../../../../../src/app/examples/gist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ng2Gist; });
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

var ng2Gist = (function () {
    function ng2Gist() {
    }
    ng2Gist.prototype.ngAfterViewInit = function () {
        this.iframe.nativeElement.id = 'gist-' + this.gistId;
        var doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        var content = "\n      <html>\n        <head>\n          <base target=\"_parent\">\n        </head>\n        <body onload=\"parent.document.getElementById('" + this.iframe.nativeElement.id + "')\n        .style.height=document.body.scrollHeight + 'px'\">\n        <script type=\"text/javascript\" src=\"https://gist.github.com/" + this.gistId + ".js\"></script>\n        </body>\n      </html>\n    ";
        doc.open();
        doc.write(content);
        doc.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iframe'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ng2Gist.prototype, "iframe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ng2Gist.prototype, "gistId", void 0);
    ng2Gist = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-gist',
            template: "\n    <iframe #iframe type=\"text/javascript\" width=\"100%\" frameborder=\"0\"></iframe>\n  ",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], ng2Gist);
    return ng2Gist;
    var _a;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/gist.js.map

/***/ }),

/***/ "../../../../../src/app/examples/groupBy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupByExample; });
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

var GroupByExample = (function () {
    function GroupByExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Group By";
        this.tsgist = "CuppaLabs/f6c1328ade3201042a4b4d268a30ad8c";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "groupBy.ts";
        this.htmltitle = "groupBy.html";
    }
    GroupByExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India", "category": "asia" },
            { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
            { "id": 3, "itemName": "Germany", "category": "Europe" },
            { "id": 4, "itemName": "France", "category": "Europe" },
            { "id": 5, "itemName": "South Korea", "category": "asia" },
            { "id": 6, "itemName": "Sweden", "category": "Europe" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            singleSelection: false,
            text: "Select Fields",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            searchPlaceholderText: 'Search Fields',
            enableSearchFilter: true,
            badgeShowLimit: 5,
            groupBy: "category"
        };
    };
    GroupByExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    GroupByExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    GroupByExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    GroupByExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    GroupByExample.prototype.change = function () {
        this.selectedItems = [];
        this.itemList = [{ "id": 1, "itemName": "India", "category": "asia" },
            { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
            { "id": 5, "itemName": "South Korea", "category": "asia" },
            { "id": 6, "itemName": "Sweden", "category": "Europe" }];
    };
    GroupByExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], GroupByExample);
    return GroupByExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/groupBy.js.map

/***/ }),

/***/ "../../../../../src/app/examples/limitbadges.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitBadgesExample; });
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

var LimitBadgesExample = (function () {
    function LimitBadgesExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Limit badges length";
        this.tsgist = "CuppaLabs/00a25e7f8f70199f6571ac9fccbb94c2";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "limitBadges.ts";
        this.htmltitle = "limitBadges.html";
    }
    LimitBadgesExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            singleSelection: false,
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3
        };
    };
    LimitBadgesExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    LimitBadgesExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    LimitBadgesExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    LimitBadgesExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    LimitBadgesExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], LimitBadgesExample);
    return LimitBadgesExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/limitbadges.js.map

/***/ }),

/***/ "../../../../../src/app/examples/limitselection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitSelectionExample; });
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

var LimitSelectionExample = (function () {
    function LimitSelectionExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Limit Selection";
        this.tsgist = "CuppaLabs/70667b7d4dd4270bb290685e036a379a";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "limitSelection.ts";
        this.htmltitle = "limitSelection.html";
    }
    LimitSelectionExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class",
            limitSelection: 4
        };
    };
    LimitSelectionExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    LimitSelectionExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    LimitSelectionExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    LimitSelectionExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    LimitSelectionExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], LimitSelectionExample);
    return LimitSelectionExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/limitselection.js.map

/***/ }),

/***/ "../../../../../src/app/examples/resetdropdown.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetDropdownExample; });
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

var ResetDropdownExample = (function () {
    function ResetDropdownExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Reset dropdown";
        this.tsgist = "CuppaLabs/96d3ca7681f1a7a38b8c76b2f1552458";
        this.htmlgist = "CuppaLabs/bbd73b9f9864effb69f361c9fc65a6e5";
        this.tstitle = "resetDropdown.ts";
        this.htmltitle = "resetDropdown.html";
    }
    ResetDropdownExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
    };
    ResetDropdownExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    ResetDropdownExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    ResetDropdownExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    ResetDropdownExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    ResetDropdownExample.prototype.showModel = function () {
        console.log(this.selectedItems);
    };
    ResetDropdownExample.prototype.changeData = function () {
        this.selectedItems = [];
    };
    ResetDropdownExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/resetDropdown.html")
        }),
        __metadata("design:paramtypes", [])
    ], ResetDropdownExample);
    return ResetDropdownExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/resetdropdown.js.map

/***/ }),

/***/ "../../../../../src/app/examples/searchFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterExample; });
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

var SearchFilterExample = (function () {
    function SearchFilterExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Search filter";
        this.tsgist = "CuppaLabs/447bd5fce6dfc2832f5f4a8c36726a9b";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "searchFilter.ts";
        this.htmltitle = "searchFilter.html";
    }
    SearchFilterExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            singleSelection: false,
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3
        };
    };
    SearchFilterExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    SearchFilterExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    SearchFilterExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    SearchFilterExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    SearchFilterExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], SearchFilterExample);
    return SearchFilterExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/searchFilter.js.map

/***/ }),

/***/ "../../../../../src/app/examples/singleselection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleSelectionExample; });
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

var SingleSelectionExample = (function () {
    function SingleSelectionExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Single Selection";
        this.tsgist = "CuppaLabs/6ef578ce507dfd548eec39e008b4de14";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "singleSelection.ts";
        this.htmltitle = "singleSelection.html";
    }
    SingleSelectionExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" }
        ];
        this.settings = { singleSelection: true, text: "Select Country" };
    };
    SingleSelectionExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    SingleSelectionExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    SingleSelectionExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    SingleSelectionExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    SingleSelectionExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], SingleSelectionExample);
    return SingleSelectionExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/singleselection.js.map

/***/ }),

/***/ "../../../../../src/app/examples/styling.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingExample; });
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

var StylingExample = (function () {
    function StylingExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Custom styling";
        this.tsgist = "CuppaLabs/67fb11cbb67a62888ca0a3adb44ee440";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.cssgist = "CuppaLabs/e6efeedade8f737df03107625df165e7";
        this.tstitle = "customStyling.ts";
        this.htmltitle = "customStyling.html";
        this.csstitle = "app.css";
    }
    StylingExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class-example"
        };
    };
    StylingExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    StylingExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    StylingExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    StylingExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    StylingExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], StylingExample);
    return StylingExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/styling.js.map

/***/ }),

/***/ "../../../../../src/app/examples/templating.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatingExample; });
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

var TemplatingExample = (function () {
    function TemplatingExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.title = "Templating menu option";
        this.tsgist = "CuppaLabs/cc0ac5976bf26b89119180ff82115fe4";
        this.htmlgist = "CuppaLabs/6399258d93fd5580be1736aba2539519";
        this.tstitle = "templating.ts";
        this.htmltitle = "templating.html";
    }
    TemplatingExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
            { "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
            { "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" },
            { "id": 5, "itemName": "South Korea", "capital": "Seoul", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg" },
            { "id": 6, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "United Kingdom" },
            { "id": 4, "itemName": "Canada" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            showCheckbox: true
        };
    };
    TemplatingExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    TemplatingExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    TemplatingExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    TemplatingExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    TemplatingExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/templating.html")
        }),
        __metadata("design:paramtypes", [])
    ], TemplatingExample);
    return TemplatingExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/templating.js.map

/***/ }),

/***/ "../../../../../src/app/examples/views/resetDropdown.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-10 mr-auto ml-auto dropdown-container\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <button (click)=\"changeData()\" class=\"btn btn-danger\">Reset</button>\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n</p-tabView>"

/***/ }),

/***/ "../../../../../src/app/examples/views/templating.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-7 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"  (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n   <c-item>\r\n          <ng-template let-item=\"item\">\r\n            <label style=\"color: #333;min-width: 150px;\">{{item.itemName}}</label>\r\n            <img [src]=\"item.image\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 20px;\" />\r\n            <label>Capital - {{item.capital}}</label>\r\n          </ng-template>\r\n        </c-item>\r\n  </angular2-multiselect>\r\n</div>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/views/view.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/environment.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map