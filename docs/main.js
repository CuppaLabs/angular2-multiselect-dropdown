(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular2-multiselect-dropdown/clickOutside.ts":
/*!***************************************************************!*\
  !*** ./src/app/angular2-multiselect-dropdown/clickOutside.ts ***!
  \***************************************************************/
/*! exports provided: ClickOutsideDirective, ScrollDirective, styleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirective", function() { return ScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleDirective", function() { return styleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:touchstart', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());

var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ScrollDirective.prototype.onClick = function (event, targetElement) {
        this.scroll.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollDirective.prototype, "scroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ScrollDirective.prototype, "onClick", null);
    ScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[scroll]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollDirective);
    return ScrollDirective;
}());

var styleDirective = /** @class */ (function () {
    function styleDirective(el) {
        this.el = el;
    }
    styleDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.top = this.styleVal;
    };
    styleDirective.prototype.ngOnChanges = function () {
        this.el.nativeElement.style.top = this.styleVal;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('styleProp'),
        __metadata("design:type", Number)
    ], styleDirective.prototype, "styleVal", void 0);
    styleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[styleProp]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], styleDirective);
    return styleDirective;
}());



/***/ }),

/***/ "./src/app/angular2-multiselect-dropdown/list-filter.ts":
/*!**************************************************************!*\
  !*** ./src/app/angular2-multiselect-dropdown/list-filter.ts ***!
  \**************************************************************/
/*! exports provided: ListFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterPipe", function() { return ListFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter, searchBy) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter, searchBy); });
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter, searchBy) {
        var found = false;
        if (searchBy.length > 0) {
            for (var t = 0; t < searchBy.length; t++) {
                if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                    if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        found = true;
                    }
                }
            }
        }
        else {
            for (var prop in item) {
                if (filter && item[prop]) {
                    if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        found = true;
                    }
                }
            }
        }
        return found;
    };
    ListFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'listFilter',
            pure: false
        })
    ], ListFilterPipe);
    return ListFilterPipe;
}());



/***/ }),

/***/ "./src/app/angular2-multiselect-dropdown/menu-item.ts":
/*!************************************************************!*\
  !*** ./src/app/angular2-multiselect-dropdown/menu-item.ts ***!
  \************************************************************/
/*! exports provided: Item, Badge, Search, TemplateRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRenderer", function() { return TemplateRenderer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Item = /** @class */ (function () {
    function Item() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], Item.prototype, "template", void 0);
    Item = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'c-item',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], Item);
    return Item;
}());

var Badge = /** @class */ (function () {
    function Badge() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], Badge.prototype, "template", void 0);
    Badge = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'c-badge',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], Badge);
    return Badge;
}());

var Search = /** @class */ (function () {
    function Search() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], Search.prototype, "template", void 0);
    Search = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'c-search',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], Search);
    return Search;
}());

var TemplateRenderer = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemplateRenderer.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemplateRenderer.prototype, "item", void 0);
    TemplateRenderer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'c-templateRenderer',
            template: ""
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], TemplateRenderer);
    return TemplateRenderer;
}());



/***/ }),

/***/ "./src/app/angular2-multiselect-dropdown/multiselect.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/angular2-multiselect-dropdown/multiselect.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdown()\">\r\n    <div class=\"selected-list\" #selectedList>\r\n        <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\">\r\n            <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\r\n            <span *ngIf=\"settings.singleSelection\">\r\n                <span *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);\">\r\n                    {{item[settings.labelKey]}}\r\n                </span>\r\n            </span>\r\n            <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\r\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\r\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\r\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\r\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\r\n                    </span>\r\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event)\">\r\n                        <svg width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\">\r\n<g>\r\n\t<path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\r\n\t\tc-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\r\n\t\tC1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\r\n\t\ts1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\"/>\r\n</g>\r\n</svg>\r\n\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <span class=\"countplaceholder\" *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\r\n            <!--            <span class=\"fa\" [ngClass]=\"{'c-angle-down': !isActive,'fa-angle-up':isActive}\"></span>\r\n--><span *ngIf=\"!isActive\" class=\"c-angle-down\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\r\n<g>\r\n\t<g id=\"_x31_0_34_\">\r\n\t\t<g>\r\n\t\t\t<path d=\"M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\r\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\r\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z\"/>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n</svg>\r\n\r\n            </span>\r\n            <span *ngIf=\"isActive\" class=\"c-angle-up\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\r\n<g>\r\n\t<g id=\"_x39__30_\">\r\n\t\t<g>\r\n\t\t\t<path d=\"M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\r\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\r\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z\"/>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n\r\n</svg>\r\n\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div #dropdownList class=\"dropdown-list\"\r\n\t\t[ngClass]=\"{'dropdown-list-top': dropdownListYOffset}\"\r\n\t\t[style.bottom.px]=\"dropdownListYOffset ? dropdownListYOffset : null\"\r\n        [hidden]=\"!isActive\">\r\n        <div [ngClass]=\"{'arrow-up': !dropdownListYOffset, 'arrow-down': dropdownListYOffset}\" class=\"arrow-2\"></div>\r\n        <div [ngClass]=\"{'arrow-up': !dropdownListYOffset, 'arrow-down': dropdownListYOffset}\"></div>\r\n        <div class=\"list-area\">\r\n            <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection\"\r\n                (click)=\"toggleSelectAll()\">\r\n                <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\r\n                />\r\n                <label>\r\n                <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\r\n                <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\r\n            </label>\r\n            </div>\r\n            <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\r\n                <span class=\"c-search\">\r\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 615.52 615.52\" style=\"enable-background:new 0 0 615.52 615.52;\"\r\n\t xml:space=\"preserve\">\r\n<g>\r\n\t<g>\r\n\t\t<g id=\"Search__x28_and_thou_shall_find_x29_\">\r\n\t\t\t<g>\r\n\t\t\t\t<path d=\"M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\r\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\r\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\r\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\r\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\r\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z\"/>\r\n\t\t\t</g>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n\r\n</svg>\r\n\r\n                </span>\r\n                <input class=\"c-input\" *ngIf=\"!settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\r\n                    [(ngModel)]=\"filter\">\r\n                <input class=\"c-input\" *ngIf=\"settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\r\n                    (keyup)=\"filterInfiniteList($event)\">\r\n                <c-templateRenderer *ngIf=\"searchTempl\" [data]=\"searchTempl\" [item]=\"item\"></c-templateRenderer>\r\n            </div>\r\n            <ul *ngIf=\"!settings.groupBy\" [style.maxHeight]=\"settings.maxHeight+'px'\" class=\"lazyContainer\">\r\n                <span *ngIf=\"itemTempl\">\r\n            <li *ngFor=\"let item of data | listFilter: filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label></label>\r\n            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\r\n        </li>\r\n        </span>\r\n                <span *ngIf=\"!itemTempl && !settings.lazyLoading\">\r\n        <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label>{{item[settings.labelKey]}}</label>\r\n        </li>\r\n        </span>\r\n                <span *ngIf=\"!itemTempl && settings.lazyLoading\">\r\n            <div [ngStyle]=\"{'height':totalHeight+'px'}\" style=\"position: relative;\">\r\n\r\n            \r\n        <li *ngFor=\"let item of chunkArray | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" style=\"position: absolute;width: 100%;\" class=\"pure-checkbox\" [styleProp]=\"chunkIndex[i]\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label>{{item[settings.labelKey]}}</label>\r\n        </li>\r\n        </div>\r\n        </span>\r\n            </ul>\r\n            <div *ngIf=\"settings.groupBy\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\r\n                <ul *ngFor=\"let obj of groupedData ; let i = index;\" class=\"list-grp\">\r\n                    <h4 *ngIf=\"(obj.value | listFilter:filter : settings.searchBy ).length > 0\">{{obj.key}}</h4>\r\n                    <span *ngIf=\"itemTempl\">\r\n        <li *ngFor=\"let item of obj.value | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label></label>\r\n            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\r\n        </li>\r\n        </span>\r\n                    <span *ngIf=\"!itemTempl\">\r\n        <li *ngFor=\"let item of obj.value | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label>{{item[settings.labelKey]}}</label>\r\n        </li>\r\n        </span>\r\n                </ul>\r\n            </div>\r\n            <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">{{settings.noDataLabel}}</h5>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/angular2-multiselect-dropdown/multiselect.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/angular2-multiselect-dropdown/multiselect.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cuppa-dropdown {\n  position: relative; }\n\n.c-btn {\n  display: inline-block;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 14px;\n  color: #333; }\n\n.c-btn.disabled {\n  background: #ccc; }\n\n.c-btn:focus {\n  outline: none; }\n\n.selected-list .c-list {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  width: calc(100% - 20px); }\n\n.selected-list .c-list .c-token {\n    list-style: none;\n    padding: 2px 8px;\n    background: #0079FE;\n    color: #fff;\n    border-radius: 2px;\n    margin-right: 4px;\n    margin-top: 2px;\n    float: left;\n    position: relative;\n    padding-right: 25px; }\n\n.selected-list .c-list .c-token .c-label {\n      display: block;\n      float: left; }\n\n.selected-list .c-list .c-token .c-remove {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 10px; }\n\n.selected-list .c-list .c-token .c-remove svg {\n        fill: #fff; }\n\n.selected-list .fa-angle-down, .selected-list .fa-angle-up {\n  font-size: 15pt;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.selected-list .c-angle-down, .selected-list .c-angle-up {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  pointer-events: none; }\n\n.selected-list .c-angle-down svg, .selected-list .c-angle-up svg {\n    fill: #333; }\n\n.selected-list .countplaceholder {\n  position: absolute;\n  right: 30px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.selected-list .c-btn {\n  width: 100%;\n  box-shadow: 0px 1px 5px #959595;\n  padding: 10px;\n  cursor: pointer;\n  display: flex;\n  position: relative; }\n\n.selected-list .c-btn .c-icon {\n    position: absolute;\n    right: 5px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\n.dropdown-list {\n  position: absolute;\n  padding-top: 14px;\n  width: 100%;\n  z-index: 9999; }\n\n.dropdown-list ul {\n    padding: 0px;\n    list-style: none;\n    overflow: auto;\n    margin: 0px; }\n\n.dropdown-list ul li {\n      padding: 10px 10px;\n      cursor: pointer;\n      text-align: left; }\n\n.dropdown-list ul li:first-child {\n      padding-top: 10px; }\n\n.dropdown-list ul li:last-child {\n      padding-bottom: 10px; }\n\n.dropdown-list ul li:hover {\n      background: #f5f5f5; }\n\n.dropdown-list ::-webkit-scrollbar {\n    width: 8px; }\n\n.dropdown-list ::-webkit-scrollbar-thumb {\n    background: #cccccc;\n    border-radius: 5px; }\n\n.dropdown-list ::-webkit-scrollbar-track {\n    background: #f2f2f2; }\n\n.arrow-up, .arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 15px solid #fff;\n  margin-left: 15px;\n  position: absolute;\n  top: 0; }\n\n.arrow-down {\n  bottom: -14px;\n  top: unset;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.arrow-2 {\n  border-bottom: 15px solid #ccc;\n  top: -1px; }\n\n.arrow-down.arrow-2 {\n  top: unset;\n  bottom: -16px; }\n\n.list-area {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  margin: 0px;\n  box-shadow: 0px 1px 5px #959595; }\n\n.select-all {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  text-align: left; }\n\n.list-filter {\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  padding-left: 35px;\n  height: 35px; }\n\n.list-filter input {\n    border: 0px;\n    width: 100%;\n    height: 100%;\n    padding: 0px; }\n\n.list-filter input:focus {\n    outline: none; }\n\n.list-filter .c-search {\n    position: absolute;\n    top: 9px;\n    left: 10px;\n    width: 15px;\n    height: 15px; }\n\n.list-filter .c-search svg {\n      fill: #888; }\n\n.pure-checkbox input[type=\"checkbox\"] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.pure-checkbox input[type=\"checkbox\"]:focus + label:before,\n.pure-checkbox input[type=\"checkbox\"]:hover + label:before {\n  border-color: #0079FE;\n  background-color: #f2f2f2; }\n\n.pure-checkbox input[type=\"checkbox\"]:active + label:before {\n  transition-duration: 0s; }\n\n.pure-checkbox input[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 2em;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin: 0px;\n  color: #000;\n  font-weight: 300; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:before {\n  box-sizing: content-box;\n  content: '';\n  color: #0079FE;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 14px;\n  height: 14px;\n  margin-top: -9px;\n  border: 2px solid #0079FE;\n  text-align: center;\n  transition: all 0.4s ease; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:after {\n  box-sizing: content-box;\n  content: '';\n  background-color: #0079FE;\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled + label:before {\n  border-color: #cccccc; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled:focus + label:before\n.pure-checkbox input[type=\"checkbox\"]:disabled:hover + label:before {\n  background-color: inherit; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled:checked + label:before {\n  background-color: #cccccc; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:after {\n  background-color: transparent;\n  top: 50%;\n  left: 4px;\n  width: 8px;\n  height: 3px;\n  margin-top: -4px;\n  border-style: solid;\n  border-color: #ffffff;\n  border-width: 0 0 3px 3px;\n  -o-border-image: none;\n     border-image: none;\n  -webkit-transform: rotate(-45deg) scale(0);\n          transform: rotate(-45deg) scale(0); }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after {\n  content: '';\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1);\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out; }\n\n.pure-checkbox input[type=\"radio\"]:checked + label:before {\n  background-color: white; }\n\n.pure-checkbox input[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.pure-checkbox input[type=\"radio\"] + label:before {\n  border-radius: 50%; }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:before {\n  background: #0079FE; }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after {\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1); }\n\n.list-message {\n  text-align: center;\n  margin: 0px;\n  padding: 15px 0px;\n  font-size: initial; }\n\n.list-grp {\n  padding: 0 15px !important; }\n\n.list-grp h4 {\n  text-transform: capitalize;\n  margin: 15px 0px 0px 0px;\n  font-size: 14px;\n  font-weight: 700; }\n\n.list-grp > li {\n  padding-left: 15px !important; }\n"

/***/ }),

/***/ "./src/app/angular2-multiselect-dropdown/multiselect.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/angular2-multiselect-dropdown/multiselect.component.ts ***!
  \************************************************************************/
/*! exports provided: DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION, AngularMultiSelect, AngularMultiSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_CONTROL_VALUE_ACCESSOR", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_CONTROL_VALIDATION", function() { return DROPDOWN_CONTROL_VALIDATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelect", function() { return AngularMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelectModule", function() { return AngularMultiSelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _multiselect_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiselect.model */ "./src/app/angular2-multiselect-dropdown/multiselect.model.ts");
/* harmony import */ var _clickOutside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clickOutside */ "./src/app/angular2-multiselect-dropdown/clickOutside.ts");
/* harmony import */ var _list_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-filter */ "./src/app/angular2-multiselect-dropdown/list-filter.ts");
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-item */ "./src/app/angular2-multiselect-dropdown/menu-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AngularMultiSelect; }),
    multi: true
};
var DROPDOWN_CONTROL_VALIDATION = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AngularMultiSelect; }),
    multi: true,
};
var noop = function () {
};
var AngularMultiSelect = /** @class */ (function () {
    function AngularMultiSelect(_elementRef, cdr) {
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isActive = false;
        this.isSelectAll = false;
        this.chunkIndex = [];
        this.cachedItems = [];
        this.itemHeight = 41.6;
        this.dropdownListYOffset = 0;
        this.defaultSettings = {
            singleSelection: false,
            text: 'Select',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            searchBy: [],
            maxHeight: 300,
            badgeShowLimit: 999999999999,
            classes: '',
            disabled: false,
            searchPlaceholderText: 'Search',
            showCheckbox: true,
            noDataLabel: 'No Data Available',
            searchAutofocus: true,
            lazyLoading: false,
            labelKey: 'itemName',
            primaryKey: 'id',
            position: 'bottom',
            autoPosition: true,
            escapeToClose: true
        };
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    AngularMultiSelect.prototype.onEscapeDown = function (event) {
        if (this.settings.escapeToClose) {
            this.closeDropdown();
        }
    };
    AngularMultiSelect.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.groupBy) {
            this.groupedData = this.transformData(this.data, this.settings.groupBy);
        }
        this.totalRows = (this.data && this.data.length);
        this.cachedItems = this.data;
        this.screenItemsLen = Math.ceil(this.settings.maxHeight / this.itemHeight);
        this.cachedItemsLen = this.screenItemsLen * 3;
        this.totalHeight = this.itemHeight * this.totalRows;
        this.maxBuffer = this.screenItemsLen * this.itemHeight;
        this.lastScrolled = 0;
        this.renderChunk(0, this.cachedItemsLen / 2);
        setTimeout(function () {
            _this.calculateDropdownDirection();
        });
    };
    AngularMultiSelect.prototype.ngOnChanges = function (changes) {
        if (changes.data && !changes.data.firstChange) {
            if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);
                if (this.data.length == 0) {
                    this.selectedItems = [];
                }
            }
        }
        if (changes.settings && !changes.settings.firstChange) {
            this.settings = Object.assign(this.defaultSettings, this.settings);
        }
    };
    AngularMultiSelect.prototype.ngDoCheck = function () {
        if (this.selectedItems) {
            if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
            }
        }
    };
    AngularMultiSelect.prototype.ngAfterViewInit = function () {
        if (this.settings.lazyLoading) {
            this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
        }
    };
    AngularMultiSelect.prototype.ngAfterViewChecked = function () {
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
    AngularMultiSelect.prototype.validate = function (c) {
        return null;
    };
    AngularMultiSelect.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            if (this.settings.singleSelection) {
                try {
                    if (value.length > 1) {
                        this.selectedItems = [value[0]];
                        throw new _multiselect_model__WEBPACK_IMPORTED_MODULE_3__["MyException"](404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
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
        return item[this.settings.primaryKey];
    };
    AngularMultiSelect.prototype.isSelected = function (clickedItem) {
        var _this = this;
        var found = false;
        this.selectedItems && this.selectedItems.forEach(function (item) {
            if (clickedItem[_this.settings.primaryKey] === item[_this.settings.primaryKey]) {
                found = true;
            }
        });
        return found;
    };
    AngularMultiSelect.prototype.addSelected = function (item) {
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
            this.closeDropdown();
        }
        else
            this.selectedItems.push(item);
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.removeSelected = function (clickedItem) {
        var _this = this;
        this.selectedItems && this.selectedItems.forEach(function (item) {
            if (clickedItem[_this.settings.primaryKey] === item[_this.settings.primaryKey]) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.toggleDropdown = function (evt) {
        var _this = this;
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = !this.isActive;
        if (this.isActive) {
            if (this.settings.searchAutofocus && this.settings.enableSearchFilter && !this.searchTempl) {
                setTimeout(function () {
                    _this.searchInput.nativeElement.focus();
                }, 0);
            }
            this.cdr.detectChanges();
            this.calculateDropdownDirection();
            this.onOpen.emit(true);
        }
        else {
            this.onClose.emit(false);
        }
        evt.preventDefault();
    };
    AngularMultiSelect.prototype.closeDropdown = function () {
        if (this.searchInput && this.settings.lazyLoading) {
            this.searchInput.nativeElement.value = "";
            this.data = [];
            this.data = this.cachedItems;
            this.totalHeight = this.itemHeight * this.data.length;
            this.totalRows = this.data.length;
            this.updateView(this.scrollTop);
        }
        if (this.searchInput) {
            this.searchInput.nativeElement.value = "";
        }
        this.filter = "";
        this.isActive = false;
        this.onClose.emit(false);
    };
    AngularMultiSelect.prototype.toggleSelectAll = function () {
        if (!this.isSelectAll) {
            this.selectedItems = [];
            this.selectedItems = this.data.slice();
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
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
    AngularMultiSelect.prototype.renderChunk = function (fromPos, howMany) {
        this.chunkArray = [];
        this.chunkIndex = [];
        var finalItem = fromPos + howMany;
        if (finalItem > this.totalRows)
            finalItem = this.totalRows;
        for (var i = fromPos; i < finalItem; i++) {
            this.chunkIndex.push((i * this.itemHeight) + 'px');
            this.chunkArray.push(this.data[i]);
        }
    };
    AngularMultiSelect.prototype.calculateDropdownDirection = function () {
        var shouldOpenTowardsTop = this.settings.position == 'top';
        if (this.settings.autoPosition) {
            var dropdownHeight = this.dropdownListElem.nativeElement.clientHeight;
            var viewportHeight = document.documentElement.clientHeight;
            var selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();
            var spaceOnTop = selectedListBounds.top - dropdownHeight > 0;
            var spaceOnBottom = selectedListBounds.bottom + dropdownHeight < viewportHeight;
            console.log('Top: ' + spaceOnTop);
            console.log('Bottom: ' + spaceOnBottom);
            // Keep preference if there is not enough space on either the top or bottom
            if (spaceOnTop || spaceOnBottom) {
                if (shouldOpenTowardsTop) {
                    shouldOpenTowardsTop = spaceOnTop;
                }
                else {
                    shouldOpenTowardsTop = !spaceOnBottom;
                }
            }
        }
        console.log(shouldOpenTowardsTop);
        this.openTowardsTop(shouldOpenTowardsTop);
    };
    AngularMultiSelect.prototype.openTowardsTop = function (value) {
        if (value && this.selectedListElem.nativeElement.clientHeight) {
            this.dropdownListYOffset = 15 + this.selectedListElem.nativeElement.clientHeight;
        }
        else {
            this.dropdownListYOffset = 0;
        }
    };
    AngularMultiSelect.prototype.onScroll = function (e) {
        this.scrollTop = e.target.scrollTop;
        this.updateView(this.scrollTop);
    };
    AngularMultiSelect.prototype.updateView = function (scrollTop) {
        var scrollPos = scrollTop ? scrollTop : 0;
        var first = (scrollPos / this.itemHeight) - this.screenItemsLen;
        var firstTemp = "" + first;
        first = parseInt(firstTemp) < 0 ? 0 : parseInt(firstTemp);
        this.renderChunk(first, this.cachedItemsLen);
        this.lastRepaintY = scrollPos;
    };
    AngularMultiSelect.prototype.filterInfiniteList = function (evt) {
        var filteredElems = [];
        this.data = this.cachedItems.slice();
        if (evt.target.value.toString() != '') {
            this.data.filter(function (el) {
                for (var prop in el) {
                    if (el[prop].toString().toLowerCase().indexOf(evt.target.value.toString().toLowerCase()) >= 0) {
                        filteredElems.push(el);
                        break;
                    }
                }
            });
            //this.cachedItems = this.data;
            this.totalHeight = this.itemHeight * filteredElems.length;
            this.totalRows = filteredElems.length;
            this.data = [];
            this.data = filteredElems;
            this.updateView(this.scrollTop);
        }
        else if (evt.target.value.toString() == '' && this.cachedItems.length > 0) {
            this.data = [];
            this.data = this.cachedItems;
            this.totalHeight = this.itemHeight * this.data.length;
            this.totalRows = this.data.length;
            this.updateView(this.scrollTop);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AngularMultiSelect.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AngularMultiSelect.prototype, "settings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onSelect'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AngularMultiSelect.prototype, "onSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onDeSelect'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AngularMultiSelect.prototype, "onDeSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onSelectAll'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AngularMultiSelect.prototype, "onSelectAll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onDeSelectAll'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AngularMultiSelect.prototype, "onDeSelectAll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onOpen'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AngularMultiSelect.prototype, "onOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onClose'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AngularMultiSelect.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_menu_item__WEBPACK_IMPORTED_MODULE_6__["Item"]),
        __metadata("design:type", _menu_item__WEBPACK_IMPORTED_MODULE_6__["Item"])
    ], AngularMultiSelect.prototype, "itemTempl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_menu_item__WEBPACK_IMPORTED_MODULE_6__["Badge"]),
        __metadata("design:type", _menu_item__WEBPACK_IMPORTED_MODULE_6__["Badge"])
    ], AngularMultiSelect.prototype, "badgeTempl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_menu_item__WEBPACK_IMPORTED_MODULE_6__["Search"]),
        __metadata("design:type", _menu_item__WEBPACK_IMPORTED_MODULE_6__["Search"])
    ], AngularMultiSelect.prototype, "searchTempl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AngularMultiSelect.prototype, "searchInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedList'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AngularMultiSelect.prototype, "selectedListElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropdownList'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AngularMultiSelect.prototype, "dropdownListElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup.escape', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AngularMultiSelect.prototype, "onEscapeDown", null);
    AngularMultiSelect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angular2-multiselect',
            template: __webpack_require__(/*! ./multiselect.component.html */ "./src/app/angular2-multiselect-dropdown/multiselect.component.html"),
            host: { '[class]': 'defaultSettings.classes' },
            styles: [__webpack_require__(/*! ./multiselect.component.scss */ "./src/app/angular2-multiselect-dropdown/multiselect.component.scss")],
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AngularMultiSelect);
    return AngularMultiSelect;
}());

var AngularMultiSelectModule = /** @class */ (function () {
    function AngularMultiSelectModule() {
    }
    AngularMultiSelectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
            declarations: [AngularMultiSelect, _clickOutside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _clickOutside__WEBPACK_IMPORTED_MODULE_4__["ScrollDirective"], _clickOutside__WEBPACK_IMPORTED_MODULE_4__["styleDirective"], _list_filter__WEBPACK_IMPORTED_MODULE_5__["ListFilterPipe"], _menu_item__WEBPACK_IMPORTED_MODULE_6__["Item"], _menu_item__WEBPACK_IMPORTED_MODULE_6__["TemplateRenderer"], _menu_item__WEBPACK_IMPORTED_MODULE_6__["Badge"], _menu_item__WEBPACK_IMPORTED_MODULE_6__["Search"]],
            exports: [AngularMultiSelect, _clickOutside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _clickOutside__WEBPACK_IMPORTED_MODULE_4__["ScrollDirective"], _clickOutside__WEBPACK_IMPORTED_MODULE_4__["styleDirective"], _list_filter__WEBPACK_IMPORTED_MODULE_5__["ListFilterPipe"], _menu_item__WEBPACK_IMPORTED_MODULE_6__["Item"], _menu_item__WEBPACK_IMPORTED_MODULE_6__["TemplateRenderer"], _menu_item__WEBPACK_IMPORTED_MODULE_6__["Badge"], _menu_item__WEBPACK_IMPORTED_MODULE_6__["Search"]]
        })
    ], AngularMultiSelectModule);
    return AngularMultiSelectModule;
}());



/***/ }),

/***/ "./src/app/angular2-multiselect-dropdown/multiselect.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/angular2-multiselect-dropdown/multiselect.model.ts ***!
  \********************************************************************/
/*! exports provided: MyException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyException", function() { return MyException; });
var MyException = /** @class */ (function () {
    function MyException(status, body) {
        this.status = status;
        this.body = body;
    }
    return MyException;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-sidebar {\r\n    position: fixed;\r\n    top: 70px;\r\n    height: calc(100vh - 75px);\r\n    overflow: auto;\r\n    padding-right: 0px;\r\n}\r\n.left-sidebar, .right-sidebar {\r\n    width: 330px;\r\n    max-width: 315px;\r\n    min-width: 315px;\r\n}\r\n.outer-wrapper {\r\n    padding: 30px;\r\n}\r\n.center-content{\r\n    background: #ffffff;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: 3px;\r\n    padding: 15px;\r\n    margin-left: 330px;\r\n    margin-top: 55px;\r\n}\r\n.nav-sub{\r\n    width: 100%;\r\n    box-shadow: none;\r\n    margin-bottom: 6px;\r\n    padding: 0px;\r\n}\r\n.nav-wrapper {\r\n    padding: 0px 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <nav class=\"navbar navbar-expand-lg nav-sub navbar-light d-md-none d-lg-none\">\r\n    <div class=\"nav-wrapper\">\r\n      <a class=\"navbar-brand\" href=\"#\">Examples</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n     <span class=\"fa fa-angle-down\"></span>\r\n  </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <div class=\"list-group\">\r\n        <a [routerLink]=\"['basic']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiselect basic example</a>\r\n        <a [routerLink]=\"['singleselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Single selection</a>\r\n        <a [routerLink]=\"['searchfilter']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Search filter</a>\r\n        <a [routerLink]=\"['groupby']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Group By</a>\r\n        <a [routerLink]=\"['templating']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Templating</a>\r\n        <a [routerLink]=\"['usinginform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Template Driven Forms</a>\r\n        <a [routerLink]=\"['usinginreactiveform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Reactive Forms</a>\r\n        <a [routerLink]=\"['lazyloading']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Lazy Loading</a>\r\n        <a [routerLink]=\"['resetdropdown']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Reset dropdown</a>\r\n        <a [routerLink]=\"['disablemode']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Disable dropdown</a>\r\n        <a [routerLink]=\"['limitselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit selection</a>\r\n        <a [routerLink]=\"['limitbadges']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit Badges</a>\r\n        <a [routerLink]=\"['customplaceholder']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom placeholder</a>\r\n        <a [routerLink]=\"['styling']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">CSS Styling</a>\r\n        <a [routerLink]=\"['theming']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Theming</a>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </nav>\r\n  <div class=\"col-md-3 left-sidebar d-none d-md-block d-lg-block\">\r\n    <div class=\"list-group\">\r\n      <a href=\"#\" class=\"list-group-item list-group-item-action disabled\">\r\n    Examples\r\n  </a>\r\n      <a [routerLink]=\"['basic']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiselect basic example</a>\r\n      <a [routerLink]=\"['singleselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Single selection</a>\r\n      <a [routerLink]=\"['searchfilter']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Search filter</a>\r\n      <a [routerLink]=\"['customSearchAPI']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom Search / Search API</a>\r\n      <a [routerLink]=\"['groupby']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Group By</a>\r\n      <a [routerLink]=\"['templating']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Templating</a>\r\n      <a [routerLink]=\"['usinginform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Template Driven Forms</a>\r\n      <a [routerLink]=\"['usinginreactiveform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Reactive Forms</a>\r\n      <a [routerLink]=\"['lazyloading']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Lazy Loading</a>\r\n      <a [routerLink]=\"['remoteData']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Data from remote API</a>\r\n      <a [routerLink]=\"['multipledropdowns']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiple dropdowns in a page</a>\r\n      <a [routerLink]=\"['dynamicdatasets']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Dynamic Data Sets loading</a>\r\n      <a [routerLink]=\"['resetdropdown']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Reset dropdown</a>\r\n      <a [routerLink]=\"['disablemode']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Disable dropdown</a>\r\n      <a [routerLink]=\"['limitselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit selection</a>\r\n      <a [routerLink]=\"['limitbadges']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit Badges</a>\r\n      <a [routerLink]=\"['customplaceholder']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom placeholder</a>\r\n      <a [routerLink]=\"['styling']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">CSS Styling</a>\r\n<!--      <a [routerLink]=\"['theming']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Theming</a>\r\n-->\r\n    </div>\r\n  </div>\r\n  <div class=\"col center-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _examples_mock_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/mock-data */ "./src/app/examples/mock-data.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular2_multiselect_dropdown_multiselect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular2-multiselect-dropdown/multiselect.component */ "./src/app/angular2-multiselect-dropdown/multiselect.component.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _examples_basic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/basic */ "./src/app/examples/basic.ts");
/* harmony import */ var _examples_singleselection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/singleselection */ "./src/app/examples/singleselection.ts");
/* harmony import */ var _examples_groupBy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/groupBy */ "./src/app/examples/groupBy.ts");
/* harmony import */ var _examples_searchFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/searchFilter */ "./src/app/examples/searchFilter.ts");
/* harmony import */ var _examples_templating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/templating */ "./src/app/examples/templating.ts");
/* harmony import */ var _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/resetdropdown */ "./src/app/examples/resetdropdown.ts");
/* harmony import */ var _examples_disablemode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/disablemode */ "./src/app/examples/disablemode.ts");
/* harmony import */ var _examples_limitselection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/limitselection */ "./src/app/examples/limitselection.ts");
/* harmony import */ var _examples_limitbadges__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/limitbadges */ "./src/app/examples/limitbadges.ts");
/* harmony import */ var _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/customplaceholder */ "./src/app/examples/customplaceholder.ts");
/* harmony import */ var _examples_styling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/styling */ "./src/app/examples/styling.ts");
/* harmony import */ var _examples_gist__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/gist */ "./src/app/examples/gist.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./examples/usingWithForms */ "./src/app/examples/usingWithForms.ts");
/* harmony import */ var _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./examples/usingInReactForms */ "./src/app/examples/usingInReactForms.ts");
/* harmony import */ var _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./examples/lazyLoading */ "./src/app/examples/lazyLoading.ts");
/* harmony import */ var _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./examples/multipleDropdowns */ "./src/app/examples/multipleDropdowns.ts");
/* harmony import */ var _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./examples/dynamicDataSets */ "./src/app/examples/dynamicDataSets.ts");
/* harmony import */ var _examples_theming__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./examples/theming */ "./src/app/examples/theming.ts");
/* harmony import */ var _examples_remoteData__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./examples/remoteData */ "./src/app/examples/remoteData.ts");
/* harmony import */ var _examples_customSearch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./examples/customSearch */ "./src/app/examples/customSearch.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _examples_gist__WEBPACK_IMPORTED_MODULE_20__["ng2Gist"],
                _examples_basic__WEBPACK_IMPORTED_MODULE_9__["BasicExample"],
                _examples_singleselection__WEBPACK_IMPORTED_MODULE_10__["SingleSelectionExample"],
                _examples_groupBy__WEBPACK_IMPORTED_MODULE_11__["GroupByExample"],
                _examples_searchFilter__WEBPACK_IMPORTED_MODULE_12__["SearchFilterExample"],
                _examples_templating__WEBPACK_IMPORTED_MODULE_13__["TemplatingExample"],
                _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_14__["ResetDropdownExample"],
                _examples_disablemode__WEBPACK_IMPORTED_MODULE_15__["DisableModeExample"],
                _examples_limitselection__WEBPACK_IMPORTED_MODULE_16__["LimitSelectionExample"],
                _examples_limitbadges__WEBPACK_IMPORTED_MODULE_17__["LimitBadgesExample"],
                _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_18__["CustomPlaceholderExample"],
                _examples_styling__WEBPACK_IMPORTED_MODULE_19__["StylingExample"],
                _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_22__["UsingWithFormExample"],
                _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_23__["UsingWithReactiveFormExample"],
                _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_24__["LazyLoadingExample"],
                _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_25__["MultipleDropdownsExample"],
                _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_26__["DynamicDataSetsExample"],
                _examples_theming__WEBPACK_IMPORTED_MODULE_27__["ThemingExample"],
                _examples_remoteData__WEBPACK_IMPORTED_MODULE_28__["RemoteDataExample"],
                _examples_customSearch__WEBPACK_IMPORTED_MODULE_29__["CustomSearchExample"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_router__WEBPACK_IMPORTED_MODULE_8__["AppRouterModule"],
                _angular2_multiselect_dropdown_multiselect_component__WEBPACK_IMPORTED_MODULE_7__["AngularMultiSelectModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_21__["TabViewModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_examples_mock_data__WEBPACK_IMPORTED_MODULE_5__["MockService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _examples_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/basic */ "./src/app/examples/basic.ts");
/* harmony import */ var _examples_singleselection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/singleselection */ "./src/app/examples/singleselection.ts");
/* harmony import */ var _examples_groupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/groupBy */ "./src/app/examples/groupBy.ts");
/* harmony import */ var _examples_searchFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/searchFilter */ "./src/app/examples/searchFilter.ts");
/* harmony import */ var _examples_templating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/templating */ "./src/app/examples/templating.ts");
/* harmony import */ var _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/resetdropdown */ "./src/app/examples/resetdropdown.ts");
/* harmony import */ var _examples_disablemode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/disablemode */ "./src/app/examples/disablemode.ts");
/* harmony import */ var _examples_limitselection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/limitselection */ "./src/app/examples/limitselection.ts");
/* harmony import */ var _examples_limitbadges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/limitbadges */ "./src/app/examples/limitbadges.ts");
/* harmony import */ var _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/customplaceholder */ "./src/app/examples/customplaceholder.ts");
/* harmony import */ var _examples_styling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/styling */ "./src/app/examples/styling.ts");
/* harmony import */ var _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/usingWithForms */ "./src/app/examples/usingWithForms.ts");
/* harmony import */ var _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/usingInReactForms */ "./src/app/examples/usingInReactForms.ts");
/* harmony import */ var _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/lazyLoading */ "./src/app/examples/lazyLoading.ts");
/* harmony import */ var _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/multipleDropdowns */ "./src/app/examples/multipleDropdowns.ts");
/* harmony import */ var _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/dynamicDataSets */ "./src/app/examples/dynamicDataSets.ts");
/* harmony import */ var _examples_theming__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/theming */ "./src/app/examples/theming.ts");
/* harmony import */ var _examples_remoteData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/remoteData */ "./src/app/examples/remoteData.ts");
/* harmony import */ var _examples_customSearch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/customSearch */ "./src/app/examples/customSearch.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: '', redirectTo: '/basic', pathMatch: 'full' },
    { path: 'basic', component: _examples_basic__WEBPACK_IMPORTED_MODULE_2__["BasicExample"] },
    { path: 'singleselection', component: _examples_singleselection__WEBPACK_IMPORTED_MODULE_3__["SingleSelectionExample"] },
    { path: 'searchfilter', component: _examples_searchFilter__WEBPACK_IMPORTED_MODULE_5__["SearchFilterExample"] },
    { path: 'groupby', component: _examples_groupBy__WEBPACK_IMPORTED_MODULE_4__["GroupByExample"] },
    { path: 'templating', component: _examples_templating__WEBPACK_IMPORTED_MODULE_6__["TemplatingExample"] },
    { path: 'resetdropdown', component: _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_7__["ResetDropdownExample"] },
    { path: 'disablemode', component: _examples_disablemode__WEBPACK_IMPORTED_MODULE_8__["DisableModeExample"] },
    { path: 'limitselection', component: _examples_limitselection__WEBPACK_IMPORTED_MODULE_9__["LimitSelectionExample"] },
    { path: 'limitbadges', component: _examples_limitbadges__WEBPACK_IMPORTED_MODULE_10__["LimitBadgesExample"] },
    { path: 'customplaceholder', component: _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_11__["CustomPlaceholderExample"] },
    { path: 'styling', component: _examples_styling__WEBPACK_IMPORTED_MODULE_12__["StylingExample"] },
    { path: 'usinginform', component: _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_13__["UsingWithFormExample"] },
    { path: 'usinginreactiveform', component: _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_14__["UsingWithReactiveFormExample"] },
    { path: 'lazyloading', component: _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_15__["LazyLoadingExample"] },
    { path: 'multipledropdowns', component: _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_16__["MultipleDropdownsExample"] },
    { path: 'dynamicdatasets', component: _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_17__["DynamicDataSetsExample"] },
    { path: 'theming', component: _examples_theming__WEBPACK_IMPORTED_MODULE_18__["ThemingExample"] },
    { path: 'remoteData', component: _examples_remoteData__WEBPACK_IMPORTED_MODULE_19__["RemoteDataExample"] },
    { path: 'customSearchAPI', component: _examples_customSearch__WEBPACK_IMPORTED_MODULE_20__["CustomSearchExample"] }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/examples/basic.ts":
/*!***********************************!*\
  !*** ./src/app/examples/basic.ts ***!
  \***********************************/
/*! exports provided: BasicExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExample", function() { return BasicExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicExample = /** @class */ (function () {
    function BasicExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
        this.title = "Basic example";
        this.tsgist = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "basic.ts";
        this.htmltitle = "basic.html";
    }
    BasicExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "countryId": 1, "itemName": "India" },
            { "countryId": 2, "itemName": "Singapore" },
            { "countryId": 3, "itemName": "Australia" },
            { "countryId": 4, "itemName": "Canada" },
            { "countryId": 5, "itemName": "South Korea" },
            { "countryId": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "countryId": 1, "itemName": "India" },
            { "countryId": 2, "itemName": "Singapore" },
            { "countryId": 3, "itemName": "Australia" },
            { "countryId": 4, "itemName": "Canada" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "countryId"
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/view.html */ "./src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], BasicExample);
    return BasicExample;
}());



/***/ }),

/***/ "./src/app/examples/customSearch.ts":
/*!******************************************!*\
  !*** ./src/app/examples/customSearch.ts ***!
  \******************************************/
/*! exports provided: CustomSearchExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSearchExample", function() { return CustomSearchExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomSearchExample = /** @class */ (function () {
    function CustomSearchExample(http) {
        this.http = http;
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
        this.title = "Custom Search / Search from API";
        this.tsgist = "CuppaLabs/1bab5ecbbb22727eb0afe49848a454f0";
        this.htmlgist = "CuppaLabs/7f0d8ea9f9cfe9eec2cc1699affd2c14";
        this.tstitle = "customSearch.ts";
        this.htmltitle = "customSearch.html";
    }
    CustomSearchExample.prototype.ngOnInit = function () {
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "alpha3Code",
            labelKey: "name",
            noDataLabel: "Search Countries...",
            enableSearchFilter: true,
            searchBy: ['name', 'capital']
        };
    };
    CustomSearchExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    CustomSearchExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    CustomSearchExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    CustomSearchExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    CustomSearchExample.prototype.onSearch = function (evt) {
        var _this = this;
        console.log(evt.target.value);
        this.itemList = [];
        this.http.get('https://restcountries.eu/rest/v2/name/' + evt.target.value + '?fulltext=true')
            .subscribe(function (res) {
            console.log(res);
            _this.itemList = res;
        }, function (error) {
        });
    };
    CustomSearchExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/customSearch.html */ "./src/app/examples/views/customSearch.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomSearchExample);
    return CustomSearchExample;
}());



/***/ }),

/***/ "./src/app/examples/customplaceholder.ts":
/*!***********************************************!*\
  !*** ./src/app/examples/customplaceholder.ts ***!
  \***********************************************/
/*! exports provided: CustomPlaceholderExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPlaceholderExample", function() { return CustomPlaceholderExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomPlaceholderExample = /** @class */ (function () {
    function CustomPlaceholderExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/view.html */ "./src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], CustomPlaceholderExample);
    return CustomPlaceholderExample;
}());



/***/ }),

/***/ "./src/app/examples/disablemode.ts":
/*!*****************************************!*\
  !*** ./src/app/examples/disablemode.ts ***!
  \*****************************************/
/*! exports provided: DisableModeExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableModeExample", function() { return DisableModeExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisableModeExample = /** @class */ (function () {
    function DisableModeExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
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
    DisableModeExample.prototype.disable = function () {
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class",
            disabled: true
        };
    };
    DisableModeExample.prototype.enable = function () {
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class",
            disabled: false
        };
    };
    DisableModeExample.prototype.toggleDisable = function () {
        console.log(this.settings);
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class",
            limitSelection: 2,
            disabled: false
        };
    };
    DisableModeExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/disableMode.html */ "./src/app/examples/views/disableMode.html")
        }),
        __metadata("design:paramtypes", [])
    ], DisableModeExample);
    return DisableModeExample;
}());



/***/ }),

/***/ "./src/app/examples/dynamicDataSets.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/dynamicDataSets.ts ***!
  \*********************************************/
/*! exports provided: DynamicDataSetsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSetsExample", function() { return DynamicDataSetsExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-data */ "./src/app/examples/mock-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicDataSetsExample = /** @class */ (function () {
    function DynamicDataSetsExample(mockService) {
        this.mockService = mockService;
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
        this.title = "Dynamic datasets loading";
        this.tsgist = "CuppaLabs/302d580f91bc40611b2474558d98fbf2";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.mockgist = "CuppaLabs/b3e947ec83710307a3b8680a2ff89693";
        this.tstitle = "dynamicData.ts";
        this.htmltitle = "dynamicData.html";
        this.mocktitle = "mock-data.ts";
    }
    DynamicDataSetsExample.prototype.ngOnInit = function () {
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
        this.loadDataSet2();
    };
    DynamicDataSetsExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    DynamicDataSetsExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    DynamicDataSetsExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    DynamicDataSetsExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    DynamicDataSetsExample.prototype.loadDataSet1 = function () {
        this.settings = {
            text: "Select Fruits",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
        this.selectedItems = [];
        this.itemList = [];
        var tempArr = this.mockService.getFruits();
        for (var i = 0; i < tempArr.length; ++i) {
            this.itemList.push(tempArr[i]);
        }
    };
    DynamicDataSetsExample.prototype.loadDataSet2 = function () {
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
        this.selectedItems = [];
        this.itemList = [];
        var tempArr = this.mockService.getCountries();
        for (var i = 0; i < tempArr.length; ++i) {
            this.itemList.push(tempArr[i]);
        }
    };
    DynamicDataSetsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/dynamicData.html */ "./src/app/examples/views/dynamicData.html")
        }),
        __metadata("design:paramtypes", [_mock_data__WEBPACK_IMPORTED_MODULE_1__["MockService"]])
    ], DynamicDataSetsExample);
    return DynamicDataSetsExample;
}());



/***/ }),

/***/ "./src/app/examples/gist.ts":
/*!**********************************!*\
  !*** ./src/app/examples/gist.ts ***!
  \**********************************/
/*! exports provided: ng2Gist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ng2Gist", function() { return ng2Gist; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ng2Gist = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ng2Gist.prototype, "iframe", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ng2Gist.prototype, "gistId", void 0);
    ng2Gist = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-gist',
            template: "\n    <iframe #iframe type=\"text/javascript\" width=\"100%\" frameborder=\"0\"></iframe>\n  ",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], ng2Gist);
    return ng2Gist;
}());



/***/ }),

/***/ "./src/app/examples/groupBy.ts":
/*!*************************************!*\
  !*** ./src/app/examples/groupBy.ts ***!
  \*************************************/
/*! exports provided: GroupByExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByExample", function() { return GroupByExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupByExample = /** @class */ (function () {
    function GroupByExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
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
    GroupByExample.prototype.loadDataSet1 = function () {
        this.selectedItems = [];
        this.itemList = [{ "id": 1, "itemName": "Apple", "category": "fruits" },
            { "id": 2, "itemName": "Banana", "category": "fruits" },
            { "id": 5, "itemName": "Tomatoe", "category": "vegetables" },
            { "id": 6, "itemName": "Potatoe", "category": "vegetables" }];
    };
    GroupByExample.prototype.loadDataSet2 = function () {
        this.selectedItems = [];
        this.itemList = [
            { "id": 1, "itemName": "India", "category": "asia" },
            { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
            { "id": 3, "itemName": "Germany", "category": "Europe" },
            { "id": 4, "itemName": "France", "category": "Europe" },
            { "id": 5, "itemName": "South Korea", "category": "asia" },
            { "id": 6, "itemName": "Sweden", "category": "Europe" }
        ];
    };
    GroupByExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/groupBy.html */ "./src/app/examples/views/groupBy.html")
        }),
        __metadata("design:paramtypes", [])
    ], GroupByExample);
    return GroupByExample;
}());



/***/ }),

/***/ "./src/app/examples/lazyLoading.ts":
/*!*****************************************!*\
  !*** ./src/app/examples/lazyLoading.ts ***!
  \*****************************************/
/*! exports provided: LazyLoadingExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadingExample", function() { return LazyLoadingExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LazyLoadingExample = /** @class */ (function () {
    function LazyLoadingExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.namesList = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Cox", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Reyes", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler", "Barnes", "Fisher", "Henderson", "Coleman", "Simmons", "Patterson", "Jordan", "Reynolds", "Hamilton", "Graham", "Kim", "Gonzales", "Alexander", "Ramos", "Wallace", "Griffin", "West", "Cole", "Hayes", "Chavez", "Gibson", "Bryant", "Ellis", "Stevens", "Murray", "Ford", "Marshall", "Owens", "Mcdonald", "Harrison", "Ruiz", "Kennedy", "Wells", "Alvarez", "Woods", "Mendoza", "Castillo", "Olson", "Webb", "Washington", "Tucker", "Freeman", "Burns", "Henry", "Vasquez", "Snyder", "Simpson", "Crawford", "Jimenez", "Porter", "Mason", "Shaw", "Gordon", "Wagner", "Hunter", "Romero", "Hicks", "Dixon", "Hunt", "Palmer", "Robertson", "Black", "Holmes", "Stone", "Meyer", "Boyd", "Mills", "Warren", "Fox", "Rose", "Rice", "Moreno", "Schmidt", "Patel", "Ferguson", "Nichols", "Herrera", "Medina", "Ryan", "Fernandez", "Weaver", "Daniels", "Stephens", "Gardner", "Payne", "Kelley", "Dunn", "Pierce", "Arnold", "Tran", "Spencer", "Peters", "Hawkins", "Grant", "Hansen", "Castro", "Hoffman", "Hart", "Elliott", "Cunningham", "Knight", "Bradley", "Carroll", "Hudson", "Duncan", "Armstrong", "Berry", "Andrews", "Johnston", "Ray", "Lane", "Riley", "Carpenter", "Perkins", "Aguilar", "Silva", "Richards", "Willis", "Matthews", "Chapman", "Lawrence", "Garza", "Vargas", "Watkins", "Wheeler", "Larson", "Carlson", "Harper", "George", "Greene", "Burke", "Guzman", "Morrison", "Munoz", "Jacobs", "Obrien", "Lawson", "Franklin", "Lynch", "Bishop", "Carr", "Salazar", "Austin", "Mendez", "Gilbert", "Jensen", "Williamson", "Montgomery", "Harvey", "Oliver", "Howell", "Dean", "Hanson", "Weber", "Garrett", "Sims", "Burton", "Fuller", "Soto", "Mccoy", "Welch", "Chen", "Schultz", "Walters", "Reid", "Fields", "Walsh", "Little", "Fowler", "Bowman", "Davidson", "May", "Day", "Schneider", "Newman", "Brewer", "Lucas", "Holland", "Wong", "Banks", "Santos", "Curtis", "Pearson", "Delgado", "Valdez", "Pena", "Rios", "Douglas", "Sandoval", "Barrett", "Hopkins", "Keller", "Guerrero", "Stanley", "Bates", "Alvarado", "Beck", "Ortega", "Wade", "Estrada", "Contreras", "Barnett", "Caldwell", "Santiago", "Lambert", "Powers", "Chambers", "Nunez", "Craig", "Leonard", "Lowe", "Rhodes", "Byrd", "Gregory", "Shelton", "Frazier", "Becker", "Maldonado", "Fleming", "Vega", "Sutton", "Cohen", "Jennings", "Parks", "Mcdaniel", "Watts", "Barker", "Norris", "Vaughn", "Vazquez", "Holt", "Schwartz", "Steele", "Benson", "Neal", "Dominguez", "Horton", "Terry", "Wolfe", "Hale", "Lyons", "Graves", "Haynes", "Miles", "Park", "Warner", "Padilla", "Bush", "Thornton", "Mccarthy", "Mann", "Zimmerman", "Erickson", "Fletcher", "Mckinney", "Page", "Dawson", "Joseph", "Marquez", "Reeves", "Klein", "Espinoza", "Baldwin", "Moran", "Love", "Robbins", "Higgins", "Ball", "Cortez", "Le", "Griffith", "Bowen", "Sharp", "Cummings", "Ramsey", "Hardy", "Swanson", "Barber", "Acosta", "Luna", "Chandler", "Blair", "Daniel", "Cross", "Simon", "Dennis", "Oconnor", "Quinn", "Gross", "Navarro", "Moss", "Fitzgerald", "Doyle", "Mclaughlin", "Rojas", "Rodgers", "Stevenson", "Singh", "Yang", "Figueroa", "Harmon", "Newton", "Paul", "Manning", "Garner", "Mcgee", "Reese", "Francis", "Burgess", "Adkins", "Goodman", "Curry", "Brady", "Christensen", "Potter", "Walton", "Goodwin", "Mullins", "Molina", "Webster", "Fischer", "Campos", "Avila", "Sherman", "Todd", "Chang", "Blake", "Malone", "Wolf", "Hodges", "Juarez", "Gill", "Farmer", "Hines", "Gallagher", "Duran", "Hubbard", "Cannon", "Miranda", "Wang", "Saunders", "Tate", "Mack", "Hammond", "Carrillo", "Townsend", "Wise", "Ingram", "Barton", "Mejia", "Ayala", "Schroeder", "Hampton", "Rowe", "Parsons", "Frank", "Waters", "Strickland", "Osborne", "Maxwell", "Chan", "Deleon", "Norman", "Harrington", "Casey", "Patton", "Logan", "Bowers", "Mueller", "Glover", "Floyd", "Hartman", "Buchanan", "Cobb", "French", "Kramer", "Mccormick", "Clarke", "Tyler", "Gibbs", "Moody", "Conner", "Sparks", "Mcguire", "Leon", "Bauer", "Norton", "Pope", "Flynn", "Hogan", "Robles", "Salinas", "Yates", "Lindsey", "Lloyd", "Marsh", "Mcbride", "Owen", "Solis", "Pham", "Lang", "Pratt", "Lara", "Brock", "Ballard", "Trujillo", "Shaffer", "Drake", "Roman", "Aguirre", "Morton", "Stokes", "Lamb", "Pacheco", "Patrick", "Cochran", "Shepherd", "Cain", "Burnett", "Hess", "Li", "Cervantes", "Olsen", "Briggs", "Ochoa", "Cabrera", "Velasquez", "Montoya", "Roth", "Meyers", "Cardenas", "Fuentes", "Weiss", "Hoover", "Wilkins", "Nicholson", "Underwood", "Short", "Carson", "Morrow", "Colon", "Holloway", "Summers", "Bryan", "Petersen", "Mckenzie", "Serrano", "Wilcox", "Carey", "Clayton", "Poole", "Calderon", "Gallegos", "Greer", "Rivas", "Guerra", "Decker", "Collier", "Wall", "Whitaker", "Bass", "Flowers", "Davenport", "Conley", "Houston", "Huff", "Copeland", "Hood", "Monroe", "Massey", "Roberson", "Combs", "Franco", "Larsen", "Pittman", "Randall", "Skinner", "Wilkinson", "Kirby", "Cameron", "Bridges", "Anthony", "Richard", "Kirk", "Bruce", "Singleton", "Mathis", "Bradford", "Boone", "Abbott", "Charles", "Allison", "Sweeney", "Atkinson", "Horn", "Jefferson", "Rosales", "York", "Christian", "Phelps", "Farrell", "Castaneda", "Nash", "Dickerson", "Bond", "Wyatt", "Foley", "Chase", "Gates", "Vincent", "Mathews", "Hodge", "Garrison", "Trevino", "Villarreal", "Heath", "Dalton", "Valencia", "Callahan", "Hensley", "Atkins", "Huffman", "Roy", "Boyer", "Shields", "Lin", "Hancock", "Grimes", "Glenn", "Cline", "Delacruz", "Camacho", "Dillon", "Parrish", "Oneill", "Melton", "Booth", "Kane", "Berg", "Harrell", "Pitts", "Savage", "Wiggins", "Brennan", "Salas", "Marks", "Russo", "Sawyer", "Baxter", "Golden", "Hutchinson", "Liu", "Walter", "Mcdowell", "Wiley", "Rich", "Humphrey", "Johns", "Koch", "Suarez", "Hobbs", "Beard", "Gilmore", "Ibarra", "Keith", "Macias", "Khan", "Andrade", "Ware", "Stephenson", "Henson", "Wilkerson", "Dyer", "Mcclure", "Blackwell", "Mercado", "Tanner", "Eaton", "Clay", "Barron", "Beasley", "Oneal", "Preston", "Small", "Wu", "Zamora", "Macdonald", "Vance", "Snow", "Mcclain", "Stafford", "Orozco", "Barry", "English", "Shannon", "Kline", "Jacobson", "Woodard", "Huang", "Kemp", "Mosley", "Prince", "Merritt", "Hurst", "Villanueva", "Roach", "Nolan", "Lam", "Yoder", "Mccullough", "Lester", "Santana", "Valenzuela", "Winters", "Barrera", "Leach", "Orr", "Berger", "Mckee", "Strong", "Conway", "Stein", "Whitehead", "Bullock", "Escobar", "Knox", "Meadows", "Solomon", "Velez", "Odonnell", "Kerr", "Stout", "Blankenship", "Browning", "Kent", "Lozano", "Bartlett", "Pruitt", "Buck", "Barr", "Gaines", "Durham", "Gentry", "Mcintyre", "Sloan", "Melendez", "Rocha", "Herman", "Sexton", "Moon", "Hendricks", "Rangel", "Stark", "Lowery", "Hardin", "Hull", "Sellers", "Ellison", "Calhoun", "Gillespie", "Mora", "Knapp", "Mccall", "Morse", "Dorsey", "Weeks", "Nielsen", "Livingston", "Leblanc", "Mclean", "Bradshaw", "Glass", "Middleton", "Buckley", "Schaefer", "Frost", "Howe", "House", "Mcintosh", "Ho", "Pennington", "Reilly", "Hebert", "Mcfarland", "Hickman", "Noble", "Spears", "Conrad", "Arias", "Galvan", "Velazquez", "Huynh", "Frederick", "Randolph", "Cantu", "Fitzpatrick", "Mahoney", "Peck", "Villa", "Michael", "Donovan", "Mcconnell", "Walls", "Boyle", "Mayer", "Zuniga", "Giles", "Pineda", "Pace", "Hurley", "Mays", "Mcmillan", "Crosby", "Ayers", "Case", "Bentley", "Shepard", "Everett", "Pugh", "David", "Mcmahon", "Dunlap", "Bender", "Hahn", "Harding", "Acevedo", "Raymond", "Blackburn", "Duffy", "Landry", "Dougherty", "Bautista", "Shah", "Potts", "Arroyo", "Valentine", "Meza", "Gould", "Vaughan", "Fry", "Rush", "Avery", "Herring", "Dodson", "Clements", "Sampson", "Tapia", "Bean", "Lynn", "Crane", "Farley", "Cisneros", "Benton", "Ashley", "Mckay", "Finley", "Best", "Blevins", "Friedman", "Moses", "Sosa", "Blanchard", "Huber", "Frye", "Krueger", "Bernard", "Rosario", "Rubio", "Mullen", "Benjamin", "Haley", "Chung", "Moyer", "Choi", "Horne", "Yu", "Woodward", "Ali", "Nixon", "Hayden", "Rivers", "Estes", "Mccarty", "Richmond", "Stuart", "Maynard", "Brandt", "Oconnell", "Hanna", "Sanford", "Sheppard", "Church", "Burch", "Levy", "Rasmussen", "Coffey", "Ponce", "Faulkner", "Donaldson", "Schmitt", "Novak", "Costa", "Montes", "Booker", "Cordova", "Waller", "Arellano", "Maddox", "Mata", "Bonilla", "Stanton", "Compton", "Kaufman", "Dudley", "Mcpherson", "Beltran", "Dickson", "Mccann", "Villegas", "Proctor", "Hester", "Cantrell", "Daugherty", "Cherry", "Bray", "Davila", "Rowland", "Levine", "Madden", "Spence", "Good", "Irwin", "Werner", "Krause", "Petty", "Whitney", "Baird", "Hooper", "Pollard", "Zavala", "Jarvis", "Holden", "Haas", "Hendrix", "Mcgrath", "Bird", "Lucero", "Terrell", "Riggs", "Joyce", "Mercer", "Rollins", "Galloway", "Duke", "Odom", "Andersen", "Downs", "Hatfield", "Benitez", "Archer", "Huerta", "Travis", "Mcneil", "Hinton", "Zhang", "Hays", "Mayo", "Fritz", "Branch", "Mooney", "Ewing", "Ritter", "Esparza", "Frey", "Braun", "Gay", "Riddle", "Haney", "Kaiser", "Holder", "Chaney", "Mcknight", "Gamble", "Vang", "Cooley", "Carney", "Cowan", "Forbes", "Ferrell", "Davies", "Barajas", "Shea", "Osborn", "Bright", "Cuevas", "Bolton", "Murillo", "Lutz", "Duarte", "Kidd", "Key", "Cooke"];
        this.cssgist = false;
        this.title = "Lazy loading - Handle large data sets";
        this.tsgist = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "basic.ts";
        this.htmltitle = "basic.html";
    }
    LazyLoadingExample.prototype.ngOnInit = function () {
        this.itemList = [];
        for (var t = 1; t <= 1000; t++) {
            var tempObj = { "id": 0, "itemName": "" };
            tempObj.id = t;
            tempObj.itemName = this.namesList[Math.floor(Math.random() * this.namesList.length)];
            this.itemList.push(tempObj);
        }
        this.selectedItems = [];
        this.settings = {
            text: "Select Items",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            enableSearchFilter: true,
            lazyLoading: true,
            badgeShowLimit: 4
        };
    };
    LazyLoadingExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    LazyLoadingExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    LazyLoadingExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    LazyLoadingExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    LazyLoadingExample.prototype.changeData = function () {
        this.selectedItems = [];
    };
    LazyLoadingExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/lazyLoading.html */ "./src/app/examples/views/lazyLoading.html")
        }),
        __metadata("design:paramtypes", [])
    ], LazyLoadingExample);
    return LazyLoadingExample;
}());



/***/ }),

/***/ "./src/app/examples/limitbadges.ts":
/*!*****************************************!*\
  !*** ./src/app/examples/limitbadges.ts ***!
  \*****************************************/
/*! exports provided: LimitBadgesExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitBadgesExample", function() { return LimitBadgesExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LimitBadgesExample = /** @class */ (function () {
    function LimitBadgesExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/view.html */ "./src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], LimitBadgesExample);
    return LimitBadgesExample;
}());



/***/ }),

/***/ "./src/app/examples/limitselection.ts":
/*!********************************************!*\
  !*** ./src/app/examples/limitselection.ts ***!
  \********************************************/
/*! exports provided: LimitSelectionExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitSelectionExample", function() { return LimitSelectionExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LimitSelectionExample = /** @class */ (function () {
    function LimitSelectionExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/view.html */ "./src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], LimitSelectionExample);
    return LimitSelectionExample;
}());



/***/ }),

/***/ "./src/app/examples/mock-data.ts":
/*!***************************************!*\
  !*** ./src/app/examples/mock-data.ts ***!
  \***************************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MockService = /** @class */ (function () {
    function MockService() {
        this.DATA = [{ "id": "PBMMedAdhr", "name": "PBM Medication Adherence" }, { "id": "GapsInCare", "name": "Gaps In Care" }, { "id": "UCTest1", "name": "Use Case Test1" }, { "id": "BASICSAVE", "name": "A generic alternative or 30-90 day dispense opport" }, { "id": "ADVSAVE", "name": "An advnaced generic alternative or 30-90 day dispe" }, { "id": "AttAlert", "name": "Attachment Alert" }, { "id": "PatSave", "name": "Patient savings" }, { "id": "UCTest2", "name": "Use Case Test 2" }, { "id": "UCTest3", "name": "Use Case Test 3" }, { "id": "UCTest4", "name": "Use Case Test 4" }, { "id": "UCTest5", "name": "Use Case Test 5" }, { "id": "UCTest6", "name": "Use Case Test 6" }, { "id": "UCTest7", "name": "Use Case Test 7" }, { "id": "UCTest9", "name": "Use Case Test 9" }, { "id": "UCTest#Ten", "name": "Use Case Test 10" }, { "id": "UCTest8", "name": "Use Case Test 8" }, { "id": "UCTest11", "name": "Test Use Case 11" }, { "id": "UCTest12", "name": "Test Use Case 12" }, { "id": "UCTest13", "name": "Test Use Case 13" }, { "id": "PNLIMMUN", "name": "PNL Immunization" }, { "id": "TrustBrkr", "name": "Identity Services" }, { "id": "RTBC", "name": "real time benefit check for 90 day at retail" }];
    }
    MockService.prototype.getDirectories = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            return new Promise(function (resolve) { return setTimeout(function () {
                console.log("directoriesLoaded");
                resolve(_this.DATA);
            }, 1000); }).then(function (response) {
                observer.next(response);
                observer.complete();
            });
        });
    };
    MockService.prototype.getUseCases = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            return new Promise(function (resolve) { return setTimeout(function () {
                console.log("useCasesLoaded");
                resolve(_this.DATA);
            }, 500); }).then(function (response) {
                observer.next(response);
                observer.complete();
            });
        });
    };
    MockService.prototype.getData = function (arr) {
        if (arr.length === 0) {
            return this.DATA;
        }
        // Randomly remove and add some data
        arr.splice(Math.floor(Math.random() * arr.length), 1);
        arr.push(this.DATA[Math.floor(Math.random() * this.DATA.length)]);
        return arr;
    };
    MockService.prototype.getFruits = function () {
        return [{ "id": 1, "itemName": "Apple", "category": "fruits" },
            { "id": 2, "itemName": "Banana", "category": "fruits" },
            { "id": 5, "itemName": "Tomatoe", "category": "vegetables" },
            { "id": 6, "itemName": "Potatoe", "category": "vegetables" }];
    };
    MockService.prototype.getCountries = function () {
        return [
            { "id": 1, "itemName": "India", "category": "asia" },
            { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
            { "id": 3, "itemName": "Germany", "category": "Europe" },
            { "id": 4, "itemName": "France", "category": "Europe" },
            { "id": 5, "itemName": "South Korea", "category": "asia" },
            { "id": 6, "itemName": "Sweden", "category": "Europe" }
        ];
    };
    MockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MockService);
    return MockService;
}());



/***/ }),

/***/ "./src/app/examples/multipleDropdowns.ts":
/*!***********************************************!*\
  !*** ./src/app/examples/multipleDropdowns.ts ***!
  \***********************************************/
/*! exports provided: MultipleDropdownsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleDropdownsExample", function() { return MultipleDropdownsExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-data */ "./src/app/examples/mock-data.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultipleDropdownsExample = /** @class */ (function () {
    function MultipleDropdownsExample(mockService) {
        this.mockService = mockService;
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.directorySpecialties = [];
        this.useCases = [];
        this.dropdownSettings = {};
        this.dropdownSettings2 = {};
        this.providerLocation = {
            directorySpecialties: [{ "id": "PBMMedAdhr", "name": "PBM Medication Adherence" }, { "id": "GapsInCare", "name": "Gaps In Care" }],
            useCases: [{ "id": "UCTest3", "name": "Use Case Test 3" }, { "id": "UCTest4", "name": "Use Case Test 4" }]
        };
        this.cssgist = false;
        this.title = "Multiple Dropdowns in a page";
        this.tsgist = "CuppaLabs/12225540c23c8a171a81f996fc8d9ca6";
        this.htmlgist = "CuppaLabs/3788fb5437925b9d7d8edafec567639c";
        this.mockgist = "CuppaLabs/b3e947ec83710307a3b8680a2ff89693";
        this.tstitle = "multiple-dropdowns.ts";
        this.htmltitle = "multiple-dropdowns.html";
        this.mocktitle = "mock-data.ts";
    }
    MultipleDropdownsExample.prototype.ngOnInit = function () {
        var _this = this;
        this.dropdownSettings = {
            text: "Select",
            enableSearchFilter: true,
            labelKey: "name"
        };
        this.dropdownSettings2 = {
            text: "Select",
            enableSearchFilter: true,
            labelKey: "name"
        };
        this.mockService.getDirectories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            _this.directorySpecialties = resp;
        })).subscribe();
        this.mockService.getUseCases().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            _this.useCases = resp;
        })).subscribe();
    };
    MultipleDropdownsExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    MultipleDropdownsExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    MultipleDropdownsExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    MultipleDropdownsExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    MultipleDropdownsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/multipledropdowns.html */ "./src/app/examples/views/multipledropdowns.html")
        }),
        __metadata("design:paramtypes", [_mock_data__WEBPACK_IMPORTED_MODULE_1__["MockService"]])
    ], MultipleDropdownsExample);
    return MultipleDropdownsExample;
}());



/***/ }),

/***/ "./src/app/examples/remoteData.ts":
/*!****************************************!*\
  !*** ./src/app/examples/remoteData.ts ***!
  \****************************************/
/*! exports provided: RemoteDataExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteDataExample", function() { return RemoteDataExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoteDataExample = /** @class */ (function () {
    function RemoteDataExample(http) {
        this.http = http;
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
        this.title = "Data from remote API example";
        this.tsgist = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "basic.ts";
        this.htmltitle = "basic.html";
    }
    RemoteDataExample.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://restcountries.eu/rest/v2/all')
            .subscribe(function (res) {
            console.log(res);
            _this.itemList = res;
        }, function (error) {
        });
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "alpha3Code",
            labelKey: "name",
            enableSearchFilter: true,
            searchBy: ['name', 'capital']
        };
    };
    RemoteDataExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    RemoteDataExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    RemoteDataExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    RemoteDataExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    RemoteDataExample.prototype.onSearch = function (evt) {
        console.log(evt.target.value);
    };
    RemoteDataExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/remoteData.html */ "./src/app/examples/views/remoteData.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RemoteDataExample);
    return RemoteDataExample;
}());



/***/ }),

/***/ "./src/app/examples/resetdropdown.ts":
/*!*******************************************!*\
  !*** ./src/app/examples/resetdropdown.ts ***!
  \*******************************************/
/*! exports provided: ResetDropdownExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetDropdownExample", function() { return ResetDropdownExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetDropdownExample = /** @class */ (function () {
    function ResetDropdownExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/resetDropdown.html */ "./src/app/examples/views/resetDropdown.html")
        }),
        __metadata("design:paramtypes", [])
    ], ResetDropdownExample);
    return ResetDropdownExample;
}());



/***/ }),

/***/ "./src/app/examples/searchFilter.ts":
/*!******************************************!*\
  !*** ./src/app/examples/searchFilter.ts ***!
  \******************************************/
/*! exports provided: SearchFilterExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterExample", function() { return SearchFilterExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchFilterExample = /** @class */ (function () {
    function SearchFilterExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
        this.title = "Search filter";
        this.tsgist = "CuppaLabs/447bd5fce6dfc2832f5f4a8c36726a9b";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "searchFilter.ts";
        this.htmltitle = "searchFilter.html";
    }
    SearchFilterExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India", "name": "IN" },
            { "id": 2, "itemName": "Singapore", "name": "SN" },
            { "id": 3, "itemName": "Australia", "name": "AU" },
            { "id": 4, "itemName": "Canada", "name": "CA" },
            { "id": 5, "itemName": "South Korea", "name": "SK" },
            { "id": 6, "itemName": "Brazil", "name": "BR" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India", "name": "IN" },
            { "id": 2, "itemName": "Singapore", "name": "SN" },
            { "id": 3, "itemName": "Australia", "name": "AU" },
            { "id": 4, "itemName": "Canada", "name": "CA" }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/view.html */ "./src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], SearchFilterExample);
    return SearchFilterExample;
}());



/***/ }),

/***/ "./src/app/examples/singleselection.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/singleselection.ts ***!
  \*********************************************/
/*! exports provided: SingleSelectionExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSelectionExample", function() { return SingleSelectionExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleSelectionExample = /** @class */ (function () {
    function SingleSelectionExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
        this.title = "Single Selection";
        this.tsgist = "CuppaLabs/6ef578ce507dfd548eec39e008b4de14";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "singleSelection.ts";
        this.htmltitle = "singleSelection.html";
    }
    SingleSelectionExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "India", "name": "IN" },
            { "id": 2, "itemName": "Singapore", "name": "SN" },
            { "id": 3, "itemName": "Australia", "name": "AU" },
            { "id": 4, "itemName": "Canada", "name": "CA" },
            { "id": 5, "itemName": "South Korea", "name": "SK" },
            { "id": 6, "itemName": "Brazil", "name": "BR" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India", "name": "IN" }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/view.html */ "./src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], SingleSelectionExample);
    return SingleSelectionExample;
}());



/***/ }),

/***/ "./src/app/examples/styling.ts":
/*!*************************************!*\
  !*** ./src/app/examples/styling.ts ***!
  \*************************************/
/*! exports provided: StylingExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingExample", function() { return StylingExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StylingExample = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/view.html */ "./src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], StylingExample);
    return StylingExample;
}());



/***/ }),

/***/ "./src/app/examples/templating.ts":
/*!****************************************!*\
  !*** ./src/app/examples/templating.ts ***!
  \****************************************/
/*! exports provided: TemplatingExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatingExample", function() { return TemplatingExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplatingExample = /** @class */ (function () {
    function TemplatingExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
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
            { "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
            { "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
            { "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/templating.html */ "./src/app/examples/views/templating.html")
        }),
        __metadata("design:paramtypes", [])
    ], TemplatingExample);
    return TemplatingExample;
}());



/***/ }),

/***/ "./src/app/examples/theming.ts":
/*!*************************************!*\
  !*** ./src/app/examples/theming.ts ***!
  \*************************************/
/*! exports provided: ThemingExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingExample", function() { return ThemingExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThemingExample = /** @class */ (function () {
    function ThemingExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
        this.title = "Basic example";
        this.tsgist = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
        this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
        this.tstitle = "basic.ts";
        this.htmltitle = "basic.html";
    }
    ThemingExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "countryId": 1, "itemName": "India" },
            { "countryId": 2, "itemName": "Singapore" },
            { "countryId": 3, "itemName": "Australia" },
            { "countryId": 4, "itemName": "Canada" },
            { "countryId": 5, "itemName": "South Korea" },
            { "countryId": 6, "itemName": "Brazil" }
        ];
        this.selectedItems = [
            { "countryId": 1, "itemName": "India" },
            { "countryId": 2, "itemName": "Singapore" },
            { "countryId": 3, "itemName": "Australia" },
            { "countryId": 4, "itemName": "Canada" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "countryId"
        };
    };
    ThemingExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    ThemingExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    ThemingExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    ThemingExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    ThemingExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/theming.html */ "./src/app/examples/views/theming.html")
        }),
        __metadata("design:paramtypes", [])
    ], ThemingExample);
    return ThemingExample;
}());



/***/ }),

/***/ "./src/app/examples/usingInReactForms.ts":
/*!***********************************************!*\
  !*** ./src/app/examples/usingInReactForms.ts ***!
  \***********************************************/
/*! exports provided: UsingWithReactiveFormExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsingWithReactiveFormExample", function() { return UsingWithReactiveFormExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsingWithReactiveFormExample = /** @class */ (function () {
    function UsingWithReactiveFormExample(fb) {
        this.fb = fb;
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.cssgist = false;
        this.title = "Using with Reactive Forms";
        this.tsgist = "CuppaLabs/f0dfe353c6378cee7f55547395a80fc4";
        this.htmlgist = "CuppaLabs/0a32c3d76110468b84bac01fd64488bc";
        this.tstitle = "using-in-reactive-forms.ts";
        this.htmltitle = "using-with-reactive-forms.html";
        this.createForm();
    }
    UsingWithReactiveFormExample.prototype.createForm = function () {
        this.userForm = this.fb.group({
            name: 'xbvxncvx',
            email: ['absd@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            skills: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    UsingWithReactiveFormExample.prototype.submitForm = function () {
        console.log(this.userForm);
    };
    UsingWithReactiveFormExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "Angular" },
            { "id": 2, "itemName": "JavaScript" },
            { "id": 3, "itemName": "HTML" },
            { "id": 4, "itemName": "CSS" },
            { "id": 5, "itemName": "ReactJS" },
            { "id": 6, "itemName": "HTML5" }
        ];
        this.selectedItems = [];
        this.settings = {
            text: "Select Skills",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
    };
    UsingWithReactiveFormExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    UsingWithReactiveFormExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    UsingWithReactiveFormExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    UsingWithReactiveFormExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    UsingWithReactiveFormExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/using-in-react-form.html */ "./src/app/examples/views/using-in-react-form.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], UsingWithReactiveFormExample);
    return UsingWithReactiveFormExample;
}());



/***/ }),

/***/ "./src/app/examples/usingWithForms.ts":
/*!********************************************!*\
  !*** ./src/app/examples/usingWithForms.ts ***!
  \********************************************/
/*! exports provided: UsingWithFormExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsingWithFormExample", function() { return UsingWithFormExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsingWithFormExample = /** @class */ (function () {
    function UsingWithFormExample() {
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.formModel = {
            name: '',
            email: 'ascasc@aa.com',
            skills: [{ "id": 1, "itemName": "Angular" }]
        };
        this.submitted = false;
        this.cssgist = false;
        this.title = "Using with Template driven Forms";
        this.tsgist = "CuppaLabs/6cd9396b8f5589b792b27dd10efe9140";
        this.htmlgist = "CuppaLabs/8148509a46a59e3aba513808daa40ca1";
        this.tstitle = "using-in-forms.ts";
        this.htmltitle = "using-with-forms.html";
    }
    UsingWithFormExample.prototype.onSubmit = function () { this.submitted = true; };
    UsingWithFormExample.prototype.ngOnInit = function () {
        this.itemList = [
            { "id": 1, "itemName": "Angular" },
            { "id": 2, "itemName": "JavaScript" },
            { "id": 3, "itemName": "HTML" },
            { "id": 4, "itemName": "CSS" },
            { "id": 5, "itemName": "ReactJS" },
            { "id": 6, "itemName": "HTML5" }
        ];
        this.settings = {
            text: "Select Skills",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
    };
    UsingWithFormExample.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    UsingWithFormExample.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    UsingWithFormExample.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    UsingWithFormExample.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    UsingWithFormExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./views/using-in-form.html */ "./src/app/examples/views/using-in-form.html")
        }),
        __metadata("design:paramtypes", [])
    ], UsingWithFormExample);
    return UsingWithFormExample;
}());



/***/ }),

/***/ "./src/app/examples/views/customSearch.html":
/*!**************************************************!*\
  !*** ./src/app/examples/views/customSearch.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">\r\n    {{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n        <c-search>\r\n             <ng-template>\r\n                 <input type=\"text\" (keyup)=\"onSearch($event)\" placeholder=\"Search countries\" style=\"border: none;width: 100%; height: 100%;outline: none;\"/>\r\n             </ng-template>\r\n        </c-search>\r\n        <c-item>\r\n            <ng-template let-item=\"item\">\r\n                <label style=\"color: #333;width: 150px;\">{{item.name}}</label>\r\n                <img [src]=\"item.flag\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 0px;\" />\r\n                <label>{{item.capital}}</label>\r\n            </ng-template>\r\n        </c-item>\r\n    </angular2-multiselect>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "./src/app/examples/views/disableMode.html":
/*!*************************************************!*\
  !*** ./src/app/examples/views/disableMode.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<div class=\"row\">\r\n    <div>\r\n        <button (click)=\"disable()\" class=\"btn btn-danger\">Disable</button>\r\n    </div>\r\n    <div>\r\n        <button (click)=\"enable()\" class=\"btn btn-success\">Enable</button>\r\n    </div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "./src/app/examples/views/dynamicData.html":
/*!*************************************************!*\
  !*** ./src/app/examples/views/dynamicData.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<button class=\"btn btn-success\" (click)=\"loadDataSet1()\">Load dataset 1</button>\r\n<button class=\"btn btn-success\" (click)=\"loadDataSet2()\">Load dataset 2</button>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n     <span *ngIf=\"mockgist\">\r\n        <p-tabPanel header=\"{{mocktitle}}\">\r\n        <ng2-gist [gistId]=\"mockgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "./src/app/examples/views/groupBy.html":
/*!*********************************************!*\
  !*** ./src/app/examples/views/groupBy.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<button class=\"btn btn-success\" (click)=\"loadDataSet1()\">Load/change dataset 1</button>\r\n<button class=\"btn btn-success\" (click)=\"loadDataSet2()\">Load/change dataset 2</button>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "./src/app/examples/views/lazyLoading.html":
/*!*************************************************!*\
  !*** ./src/app/examples/views/lazyLoading.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3 mr-auto ml-auto dropdown-container\">\r\n    </div>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n<br>\r\n<span>Total Records : {{itemList.length}}</span>\r\n</div>\r\n<div class=\"col-md-3 mr-auto ml-auto dropdown-container\">\r\n            <button (click)=\"changeData()\" class=\"btn btn-danger\">Reset</button>\r\n</div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "./src/app/examples/views/multipledropdowns.html":
/*!*******************************************************!*\
  !*** ./src/app/examples/views/multipledropdowns.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\"> {{title}}</h2>\r\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\r\n    <div class=\"form-group col-md-12\">\r\n        <label for=\"directorySpecialties\">Directory Specialties</label>\r\n        <angular2-multiselect id=\"directorySpecialties\" name=\"directorySpecialties\" [(ngModel)]=\"providerLocation.directorySpecialties\"\r\n            [data]=\"directorySpecialties\" [settings]=\"dropdownSettings\">\r\n        </angular2-multiselect>\r\n    </div>\r\n    <div class=\"form-group col-md-12\">\r\n        <label for=\"useCases\">Use Cases</label>\r\n        <angular2-multiselect id=\"useCases\" name=\"useCases\" [(ngModel)]=\"providerLocation.useCases\" [data]=\"useCases\" [settings]=\"dropdownSettings2\">\r\n        </angular2-multiselect>\r\n    </div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n    <span *ngIf=\"mockgist\">\r\n        <p-tabPanel header=\"{{mocktitle}}\">\r\n        <ng2-gist [gistId]=\"mockgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "./src/app/examples/views/remoteData.html":
/*!************************************************!*\
  !*** ./src/app/examples/views/remoteData.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">\r\n    {{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n        <c-item>\r\n            <ng-template let-item=\"item\">\r\n                <label style=\"color: #333;width: 150px;\">{{item.name}}</label>\r\n                <img [src]=\"item.flag\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 0px;\" />\r\n                <label>{{item.capital}}</label>\r\n            </ng-template>\r\n        </c-item>\r\n    </angular2-multiselect>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "./src/app/examples/views/resetDropdown.html":
/*!***************************************************!*\
  !*** ./src/app/examples/views/resetDropdown.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-10 mr-auto ml-auto dropdown-container\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <button (click)=\"changeData()\" class=\"btn btn-danger\">Reset</button>\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n</p-tabView>"

/***/ }),

/***/ "./src/app/examples/views/templating.html":
/*!************************************************!*\
  !*** ./src/app/examples/views/templating.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-7 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n        <c-badge>\r\n            <ng-template let-item=\"item\">\r\n                <label style=\"margin: 0px;\">{{item.itemName}}</label>\r\n                <img [src]=\"item.image\" style=\"width: 16px; margin-right: 5px;\" />\r\n            </ng-template>\r\n        </c-badge>\r\n        <c-item>\r\n            <ng-template let-item=\"item\">\r\n                <label style=\"color: #333;min-width: 150px;\">{{item.itemName}}</label>\r\n                <img [src]=\"item.image\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 20px;\" />\r\n                <label>Capital - {{item.capital}}</label>\r\n            </ng-template>\r\n        </c-item>\r\n    </angular2-multiselect>\r\n</div>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n</p-tabView>"

/***/ }),

/***/ "./src/app/examples/views/theming.html":
/*!*********************************************!*\
  !*** ./src/app/examples/views/theming.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<!--<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n-->"

/***/ }),

/***/ "./src/app/examples/views/using-in-form.html":
/*!***************************************************!*\
  !*** ./src/app/examples/views/using-in-form.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"row\">\r\n<div class=\"col-md-6 ml-auto mr-auto\">\r\n    <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" style=\"border: 1px solid #ccc; padding: 10px;\">\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Skills </label>\r\n            <span style=\"color: red;float: right;\">* required</span>\r\n            <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"formModel.skills\" \r\n                                  [settings]=\"settings\" \r\n                                  (onSelect)=\"onItemSelect($event)\"\r\n                                  (onDeSelect)=\"OnItemDeSelect($event)\" \r\n                                  (onSelectAll)=\"onSelectAll($event)\" \r\n                                  (onDeSelectAll)=\"onDeSelectAll($event)\" name=\"skills\" #skills=\"ngModel\" required>\r\n            </angular2-multiselect>\r\n            <div [hidden]=\"skills.valid\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!skills.hasError('required')\">Atleast one Skill is required</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"name\" pattern=\"[a-zA-Z][a-zA-Z ]+\" [(ngModel)]=\"formModel.name\" name=\"name\"\r\n                #name=\"ngModel\">\r\n            <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!name.hasError('required')\">Name is required</div>\r\n                <div [hidden]=\"!name.hasError('pattern')\">Only alphabetsallowed</div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Email Address</label>\r\n            <span style=\"color: red;float: right;\">* required</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"emailaddress\" required [(ngModel)]=\"formModel.email\" name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                #email=\"ngModel\">\r\n            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.hasError('required')\">Email is required</div>\r\n                <div [hidden]=\"!email.hasError('pattern')\">Email format should be <small><b>joe@abc.com</b></small></div>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!loginForm.form.valid\">Submit</button>\r\n    </form>\r\n</div>\r\n<div class=\"col-md-6\">\r\n    <table class=\"table\">\r\n        <tr>\r\n            <td><label>Name</label></td>\r\n            <td>{{formModel.name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>Email</label></td>\r\n            <td>{{formModel.email}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>Skills</label></td>\r\n            <td>\r\n                <h6 *ngFor=\"let obj of formModel.skills\">{{obj.itemName}}</h6>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <span>{{formModel | json}}</span>\r\n        <p>Form status: {{ loginForm.form.status | json }}</p>\r\n\r\n</div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "./src/app/examples/views/using-in-react-form.html":
/*!*********************************************************!*\
  !*** ./src/app/examples/views/using-in-react-form.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"row\">\r\n<div class=\"col-md-6 ml-auto mr-auto\">\r\n    <form [formGroup]=\"userForm\" novalidate style=\"border: 1px solid #ccc; padding: 10px;\">\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Skills</label>\r\n            <span style=\"color: red;float: right;\">* required</span>\r\n           <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" \r\n                                  [settings]=\"settings\" \r\n                                  (onSelect)=\"onItemSelect($event)\"\r\n                                  (onDeSelect)=\"OnItemDeSelect($event)\" \r\n                                  (onSelectAll)=\"onSelectAll($event)\" \r\n                                  (onDeSelectAll)=\"onDeSelectAll($event)\" formControlName=\"skills\">\r\n            </angular2-multiselect>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input class=\"form-control\" formControlName=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Email Address</label>\r\n            <span style=\"color: red;float: right;\">* required</span>\r\n            <input class=\"form-control\" formControlName=\"email\">\r\n        </div>\r\n        <button (click)=\"submitForm()\" [disabled]=\"!userForm.valid\" class=\"btn btn-success btn-block\">Submit</button>\r\n    </form>\r\n\r\n</div>\r\n<div class=\"col-md-6\">\r\n    <table class=\"table\">\r\n        <tr>\r\n            <td><label>Name</label></td>\r\n            <td>{{userForm.value.name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>Email</label></td>\r\n            <td>{{userForm.value.email}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>Skills</label></td>\r\n            <td>\r\n                <h6 *ngFor=\"let obj of userForm.value.skills\">{{obj.itemName}}</h6>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <span>{{userForm.value | json}}</span>\r\n    <p>Form status: {{ userForm.status | json }}</p>\r\n</div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "./src/app/examples/views/view.html":
/*!******************************************!*\
  !*** ./src/app/examples/views/view.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jvos\Desktop\angular2-multiselect\angular2-multiselect-dropdown\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map