webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return styleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setPosition; });
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

var ClickOutsideDirective = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:touchstart', ['$event', '$event.target']),
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

var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.scroll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ScrollDirective.prototype.onClick = function (event, targetElement) {
        this.scroll.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollDirective.prototype, "scroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ScrollDirective.prototype, "onClick", null);
    ScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[scroll]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], ScrollDirective);
    return ScrollDirective;
    var _a;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('styleProp'),
        __metadata("design:type", Number)
    ], styleDirective.prototype, "styleVal", void 0);
    styleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[styleProp]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], styleDirective);
    return styleDirective;
    var _a;
}());

var setPosition = /** @class */ (function () {
    function setPosition(el) {
        this.el = el;
    }
    setPosition.prototype.ngOnInit = function () {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    };
    setPosition.prototype.ngOnChanges = function () {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('setPosition'),
        __metadata("design:type", Number)
    ], setPosition.prototype, "height", void 0);
    setPosition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[setPosition]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], setPosition);
    return setPosition;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TemplateRenderer; });
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

var Item = /** @class */ (function () {
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

var Badge = /** @class */ (function () {
    function Badge() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
    ], Badge.prototype, "template", void 0);
    Badge = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-badge',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], Badge);
    return Badge;
    var _a;
}());

var Search = /** @class */ (function () {
    function Search() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
    ], Search.prototype, "template", void 0);
    Search = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-search',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], Search);
    return Search;
    var _a;
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

module.exports = "<div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdown()\">\r\n    <div class=\"selected-list\" #selectedList>\r\n        <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\">\r\n            <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\r\n            <span *ngIf=\"settings.singleSelection\">\r\n                <span *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);\">\r\n                    {{item[settings.labelKey]}}\r\n                </span>\r\n            </span>\r\n            <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\r\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\r\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\r\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\r\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\r\n                    </span>\r\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event)\">\r\n                        <svg width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\">\r\n<g>\r\n\t<path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\r\n\t\tc-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\r\n\t\tC1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\r\n\t\ts1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\"/>\r\n</g>\r\n</svg>\r\n\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <span class=\"countplaceholder\" *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\r\n            <!--            <span class=\"fa\" [ngClass]=\"{'c-angle-down': !isActive,'fa-angle-up':isActive}\"></span>\r\n--><span *ngIf=\"!isActive\" class=\"c-angle-down\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\r\n<g>\r\n\t<g id=\"_x31_0_34_\">\r\n\t\t<g>\r\n\t\t\t<path d=\"M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\r\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\r\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z\"/>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n</svg>\r\n\r\n            </span>\r\n            <span *ngIf=\"isActive\" class=\"c-angle-up\">\r\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\r\n<g>\r\n\t<g id=\"_x39__30_\">\r\n\t\t<g>\r\n\t\t\t<path d=\"M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\r\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\r\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z\"/>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n\r\n</svg>\r\n\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div [setPosition]=\"selectedListHeight?.val\" class=\"dropdown-list\" [ngClass]=\"{'dropdown-list-top': settings.position == 'top'}\"\r\n        [hidden]=\"!isActive\">\r\n        <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\" class=\"arrow-2\"></div>\r\n        <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\"></div>\r\n        <div class=\"list-area\">\r\n            <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection\"\r\n                (click)=\"toggleSelectAll()\">\r\n                <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\r\n                />\r\n                <label>\r\n                <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\r\n                <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\r\n            </label>\r\n            </div>\r\n            <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\r\n                <span class=\"c-search\">\r\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 615.52 615.52\" style=\"enable-background:new 0 0 615.52 615.52;\"\r\n\t xml:space=\"preserve\">\r\n<g>\r\n\t<g>\r\n\t\t<g id=\"Search__x28_and_thou_shall_find_x29_\">\r\n\t\t\t<g>\r\n\t\t\t\t<path d=\"M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\r\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\r\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\r\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\r\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\r\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z\"/>\r\n\t\t\t</g>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n\r\n</svg>\r\n\r\n                </span>\r\n                <input class=\"c-input\" *ngIf=\"!settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\r\n                    [(ngModel)]=\"filter\">\r\n                <input class=\"c-input\" *ngIf=\"settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\r\n                    (keyup)=\"filterInfiniteList($event)\">\r\n                <c-templateRenderer *ngIf=\"searchTempl\" [data]=\"searchTempl\" [item]=\"item\"></c-templateRenderer>\r\n            </div>\r\n            <ul *ngIf=\"!settings.groupBy\" [style.maxHeight]=\"settings.maxHeight+'px'\" class=\"lazyContainer\">\r\n                <span *ngIf=\"itemTempl\">\r\n            <li *ngFor=\"let item of data | listFilter: filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label></label>\r\n            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\r\n        </li>\r\n        </span>\r\n                <span *ngIf=\"!itemTempl && !settings.lazyLoading\">\r\n        <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label>{{item[settings.labelKey]}}</label>\r\n        </li>\r\n        </span>\r\n                <span *ngIf=\"!itemTempl && settings.lazyLoading\">\r\n            <div [ngStyle]=\"{'height':totalHeight+'px'}\" style=\"position: relative;\">\r\n\r\n            \r\n        <li *ngFor=\"let item of chunkArray | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" style=\"position: absolute;width: 100%;\" class=\"pure-checkbox\" [styleProp]=\"chunkIndex[i]\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label>{{item[settings.labelKey]}}</label>\r\n        </li>\r\n        </div>\r\n        </span>\r\n            </ul>\r\n            <div *ngIf=\"settings.groupBy\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\r\n                <ul *ngFor=\"let obj of groupedData ; let i = index;\" class=\"list-grp\">\r\n                    <h4 *ngIf=\"(obj.value | listFilter:filter : settings.searchBy ).length > 0\">{{obj.key}}</h4>\r\n                    <span *ngIf=\"itemTempl\">\r\n        <li *ngFor=\"let item of obj.value | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label></label>\r\n            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\r\n        </li>\r\n        </span>\r\n                    <span *ngIf=\"!itemTempl\">\r\n        <li *ngFor=\"let item of obj.value | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\r\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\r\n            <label>{{item[settings.labelKey]}}</label>\r\n        </li>\r\n        </span>\r\n                </ul>\r\n            </div>\r\n            <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">{{settings.noDataLabel}}</h5>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cuppa-dropdown {\n  position: relative; }\n\n.c-btn {\n  display: inline-block;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 14px;\n  color: #333; }\n\n.c-btn.disabled {\n  background: #ccc; }\n\n.c-btn:focus {\n  outline: none; }\n\n.selected-list .c-list {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  width: calc(100% - 20px); }\n  .selected-list .c-list .c-token {\n    list-style: none;\n    padding: 2px 8px;\n    background: #0079FE;\n    color: #fff;\n    border-radius: 2px;\n    margin-right: 4px;\n    margin-top: 2px;\n    float: left;\n    position: relative;\n    padding-right: 25px; }\n    .selected-list .c-list .c-token .c-label {\n      display: block;\n      float: left; }\n    .selected-list .c-list .c-token .c-remove {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 10px; }\n      .selected-list .c-list .c-token .c-remove svg {\n        fill: #fff; }\n\n.selected-list .fa-angle-down, .selected-list .fa-angle-up {\n  font-size: 15pt;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.selected-list .c-angle-down, .selected-list .c-angle-up {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  pointer-events: none; }\n  .selected-list .c-angle-down svg, .selected-list .c-angle-up svg {\n    fill: #333; }\n\n.selected-list .countplaceholder {\n  position: absolute;\n  right: 30px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.selected-list .c-btn {\n  width: 100%;\n  box-shadow: 0px 1px 5px #959595;\n  padding: 10px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n  .selected-list .c-btn .c-icon {\n    position: absolute;\n    right: 5px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\n.dropdown-list {\n  position: absolute;\n  padding-top: 14px;\n  width: 100%;\n  z-index: 9999; }\n  .dropdown-list ul {\n    padding: 0px;\n    list-style: none;\n    overflow: auto;\n    margin: 0px; }\n    .dropdown-list ul li {\n      padding: 10px 10px;\n      cursor: pointer;\n      text-align: left; }\n    .dropdown-list ul li:first-child {\n      padding-top: 10px; }\n    .dropdown-list ul li:last-child {\n      padding-bottom: 10px; }\n    .dropdown-list ul li:hover {\n      background: #f5f5f5; }\n  .dropdown-list ::-webkit-scrollbar {\n    width: 8px; }\n  .dropdown-list ::-webkit-scrollbar-thumb {\n    background: #cccccc;\n    border-radius: 5px; }\n  .dropdown-list ::-webkit-scrollbar-track {\n    background: #f2f2f2; }\n\n.arrow-up, .arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 15px solid #fff;\n  margin-left: 15px;\n  position: absolute;\n  top: 0; }\n\n.arrow-down {\n  bottom: -14px;\n  top: unset;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.arrow-2 {\n  border-bottom: 15px solid #ccc;\n  top: -1px; }\n\n.arrow-down.arrow-2 {\n  top: unset;\n  bottom: -16px; }\n\n.list-area {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  margin: 0px;\n  box-shadow: 0px 1px 5px #959595; }\n\n.select-all {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  text-align: left; }\n\n.list-filter {\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  padding-left: 35px;\n  height: 35px; }\n  .list-filter input {\n    border: 0px;\n    width: 100%;\n    height: 100%;\n    padding: 0px; }\n  .list-filter input:focus {\n    outline: none; }\n  .list-filter .c-search {\n    position: absolute;\n    top: 9px;\n    left: 10px;\n    width: 15px;\n    height: 15px; }\n    .list-filter .c-search svg {\n      fill: #888; }\n\n.pure-checkbox input[type=\"checkbox\"] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.pure-checkbox input[type=\"checkbox\"]:focus + label:before,\n.pure-checkbox input[type=\"checkbox\"]:hover + label:before {\n  border-color: #0079FE;\n  background-color: #f2f2f2; }\n\n.pure-checkbox input[type=\"checkbox\"]:active + label:before {\n  transition-duration: 0s; }\n\n.pure-checkbox input[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 2em;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin: 0px;\n  color: #000;\n  font-weight: 300; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:before {\n  box-sizing: content-box;\n  content: '';\n  color: #0079FE;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 14px;\n  height: 14px;\n  margin-top: -9px;\n  border: 2px solid #0079FE;\n  text-align: center;\n  transition: all 0.4s ease; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:after {\n  box-sizing: content-box;\n  content: '';\n  background-color: #0079FE;\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled + label:before {\n  border-color: #cccccc; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled:focus + label:before\n.pure-checkbox input[type=\"checkbox\"]:disabled:hover + label:before {\n  background-color: inherit; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled:checked + label:before {\n  background-color: #cccccc; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:after {\n  background-color: transparent;\n  top: 50%;\n  left: 4px;\n  width: 8px;\n  height: 3px;\n  margin-top: -4px;\n  border-style: solid;\n  border-color: #ffffff;\n  border-width: 0 0 3px 3px;\n  -o-border-image: none;\n     border-image: none;\n  -webkit-transform: rotate(-45deg) scale(0);\n          transform: rotate(-45deg) scale(0); }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after {\n  content: '';\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1);\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out; }\n\n.pure-checkbox input[type=\"radio\"]:checked + label:before {\n  background-color: white; }\n\n.pure-checkbox input[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.pure-checkbox input[type=\"radio\"] + label:before {\n  border-radius: 50%; }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:before {\n  background: #0079FE; }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after {\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1); }\n\n.list-message {\n  text-align: center;\n  margin: 0px;\n  padding: 15px 0px;\n  font-size: initial; }\n\n.list-grp {\n  padding: 0 15px !important; }\n\n.list-grp h4 {\n  text-transform: capitalize;\n  margin: 15px 0px 0px 0px;\n  font-size: 14px;\n  font-weight: 700; }\n\n.list-grp > li {\n  padding-left: 15px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DROPDOWN_CONTROL_VALUE_ACCESSOR */
/* unused harmony export DROPDOWN_CONTROL_VALIDATION */
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
var DROPDOWN_CONTROL_VALIDATION = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return AngularMultiSelect; }),
    multi: true,
};
var noop = function () {
};
var AngularMultiSelect = /** @class */ (function () {
    function AngularMultiSelect(_elementRef, cdr) {
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isActive = false;
        this.isSelectAll = false;
        this.chunkIndex = [];
        this.cachedItems = [];
        this.itemHeight = 41.6;
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
            position: 'bottom'
        };
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
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
        if (this.settings.position == 'top') {
            setTimeout(function () {
                _this.selectedListHeight = { val: 0 };
                _this.selectedListHeight.val = _this.selectedListElem.nativeElement.clientHeight;
            });
        }
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
        if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
            this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            this.cdr.detectChanges();
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
    AngularMultiSelect.prototype.validate = function (c) {
        return null;
    };
    AngularMultiSelect.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            if (this.settings.singleSelection) {
                try {
                    if (value.length > 1) {
                        this.selectedItems = [value[0]];
                        throw new __WEBPACK_IMPORTED_MODULE_3__multiselect_model__["a" /* MyException */](404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onOpen'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
    ], AngularMultiSelect.prototype, "onOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onClose'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
    ], AngularMultiSelect.prototype, "onClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_7__menu_item__["b" /* Item */]),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__menu_item__["b" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__menu_item__["b" /* Item */]) === "function" && _h || Object)
    ], AngularMultiSelect.prototype, "itemTempl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Badge */]),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Badge */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Badge */]) === "function" && _j || Object)
    ], AngularMultiSelect.prototype, "badgeTempl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_7__menu_item__["c" /* Search */]),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__menu_item__["c" /* Search */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__menu_item__["c" /* Search */]) === "function" && _k || Object)
    ], AngularMultiSelect.prototype, "searchTempl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchInput'),
        __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _l || Object)
    ], AngularMultiSelect.prototype, "searchInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedList'),
        __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _m || Object)
    ], AngularMultiSelect.prototype, "selectedListElem", void 0);
    AngularMultiSelect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'angular2-multiselect',
            template: __webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.html"),
            host: { '[class]': 'defaultSettings.classes' },
            styles: [__webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.scss")],
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]
        }),
        __metadata("design:paramtypes", [typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _p || Object])
    ], AngularMultiSelect);
    return AngularMultiSelect;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

var AngularMultiSelectModule = /** @class */ (function () {
    function AngularMultiSelectModule() {
    }
    AngularMultiSelectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
            declarations: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_5__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_5__clickOutside__["b" /* ScrollDirective */], __WEBPACK_IMPORTED_MODULE_5__clickOutside__["d" /* styleDirective */], __WEBPACK_IMPORTED_MODULE_6__list_filter__["a" /* ListFilterPipe */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["b" /* Item */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["d" /* TemplateRenderer */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Badge */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["c" /* Search */], __WEBPACK_IMPORTED_MODULE_5__clickOutside__["c" /* setPosition */]],
            exports: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_5__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_5__clickOutside__["b" /* ScrollDirective */], __WEBPACK_IMPORTED_MODULE_5__clickOutside__["d" /* styleDirective */], __WEBPACK_IMPORTED_MODULE_6__list_filter__["a" /* ListFilterPipe */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["b" /* Item */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["d" /* TemplateRenderer */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["a" /* Badge */], __WEBPACK_IMPORTED_MODULE_7__menu_item__["c" /* Search */], __WEBPACK_IMPORTED_MODULE_5__clickOutside__["c" /* setPosition */]]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyException; });
var MyException = /** @class */ (function () {
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
exports.push([module.i, ".left-sidebar {\r\n    position: fixed;\r\n    top: 70px;\r\n    height: calc(100vh - 75px);\r\n    overflow: auto;\r\n    padding-right: 0px;\r\n}\r\n.left-sidebar, .right-sidebar {\r\n    width: 330px;\r\n    max-width: 315px;\r\n    min-width: 315px;\r\n}\r\n\r\n.outer-wrapper {\r\n    padding: 30px;\r\n}\r\n.center-content{\r\n    background: #ffffff;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: 3px;\r\n    padding: 15px;\r\n    margin-left: 330px;\r\n    margin-top: 55px;\r\n}\r\n.nav-sub{\r\n    width: 100%;\r\n    box-shadow: none;\r\n    margin-bottom: 6px;\r\n    padding: 0px;\r\n}\r\n.nav-wrapper {\r\n    padding: 0px 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <nav class=\"navbar navbar-expand-lg nav-sub navbar-light d-md-none d-lg-none\">\r\n    <div class=\"nav-wrapper\">\r\n      <a class=\"navbar-brand\" href=\"#\">Examples</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n     <span class=\"fa fa-angle-down\"></span>\r\n  </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <div class=\"list-group\">\r\n        <a [routerLink]=\"['basic']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiselect basic example</a>\r\n        <a [routerLink]=\"['singleselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Single selection</a>\r\n        <a [routerLink]=\"['searchfilter']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Search filter</a>\r\n        <a [routerLink]=\"['groupby']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Group By</a>\r\n        <a [routerLink]=\"['templating']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Templating</a>\r\n        <a [routerLink]=\"['usinginform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Template Driven Forms</a>\r\n        <a [routerLink]=\"['usinginreactiveform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Reactive Forms</a>\r\n        <a [routerLink]=\"['lazyloading']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Lazy Loading</a>\r\n        <a [routerLink]=\"['resetdropdown']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Reset dropdown</a>\r\n        <a [routerLink]=\"['disablemode']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Disable dropdown</a>\r\n        <a [routerLink]=\"['limitselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit selection</a>\r\n        <a [routerLink]=\"['limitbadges']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit Badges</a>\r\n        <a [routerLink]=\"['customplaceholder']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom placeholder</a>\r\n        <a [routerLink]=\"['styling']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">CSS Styling</a>\r\n        <a [routerLink]=\"['theming']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Theming</a>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </nav>\r\n  <div class=\"col-md-3 left-sidebar d-none d-md-block d-lg-block\">\r\n    <div class=\"list-group\">\r\n      <a href=\"#\" class=\"list-group-item list-group-item-action disabled\">\r\n    Examples\r\n  </a>\r\n      <a [routerLink]=\"['basic']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiselect basic example</a>\r\n      <a [routerLink]=\"['singleselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Single selection</a>\r\n      <a [routerLink]=\"['searchfilter']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Search filter</a>\r\n      <a [routerLink]=\"['customSearchAPI']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom Search / Search API</a>\r\n      <a [routerLink]=\"['groupby']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Group By</a>\r\n      <a [routerLink]=\"['templating']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Templating</a>\r\n      <a [routerLink]=\"['usinginform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Template Driven Forms</a>\r\n      <a [routerLink]=\"['usinginreactiveform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Reactive Forms</a>\r\n      <a [routerLink]=\"['lazyloading']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Lazy Loading</a>\r\n      <a [routerLink]=\"['remoteData']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Data from remote API</a>\r\n      <a [routerLink]=\"['multipledropdowns']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiple dropdowns in a page</a>\r\n      <a [routerLink]=\"['dynamicdatasets']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Dynamic Data Sets loading</a>\r\n      <a [routerLink]=\"['resetdropdown']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Reset dropdown</a>\r\n      <a [routerLink]=\"['disablemode']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Disable dropdown</a>\r\n      <a [routerLink]=\"['limitselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit selection</a>\r\n      <a [routerLink]=\"['limitbadges']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit Badges</a>\r\n      <a [routerLink]=\"['customplaceholder']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom placeholder</a>\r\n      <a [routerLink]=\"['styling']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">CSS Styling</a>\r\n<!--      <a [routerLink]=\"['theming']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Theming</a>\r\n-->\r\n    </div>\r\n  </div>\r\n  <div class=\"col center-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_mock_data__ = __webpack_require__("../../../../../src/app/examples/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular2_multiselect_dropdown_multiselect_component__ = __webpack_require__("../../../../../src/app/angular2-multiselect-dropdown/multiselect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_basic__ = __webpack_require__("../../../../../src/app/examples/basic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__examples_singleselection__ = __webpack_require__("../../../../../src/app/examples/singleselection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__examples_groupBy__ = __webpack_require__("../../../../../src/app/examples/groupBy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__examples_searchFilter__ = __webpack_require__("../../../../../src/app/examples/searchFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__examples_templating__ = __webpack_require__("../../../../../src/app/examples/templating.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__examples_resetdropdown__ = __webpack_require__("../../../../../src/app/examples/resetdropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__examples_disablemode__ = __webpack_require__("../../../../../src/app/examples/disablemode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__examples_limitselection__ = __webpack_require__("../../../../../src/app/examples/limitselection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__examples_limitbadges__ = __webpack_require__("../../../../../src/app/examples/limitbadges.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__examples_customplaceholder__ = __webpack_require__("../../../../../src/app/examples/customplaceholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__examples_styling__ = __webpack_require__("../../../../../src/app/examples/styling.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__examples_gist__ = __webpack_require__("../../../../../src/app/examples/gist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__examples_usingWithForms__ = __webpack_require__("../../../../../src/app/examples/usingWithForms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__examples_usingInReactForms__ = __webpack_require__("../../../../../src/app/examples/usingInReactForms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__examples_lazyLoading__ = __webpack_require__("../../../../../src/app/examples/lazyLoading.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__examples_multipleDropdowns__ = __webpack_require__("../../../../../src/app/examples/multipleDropdowns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__examples_dynamicDataSets__ = __webpack_require__("../../../../../src/app/examples/dynamicDataSets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__examples_theming__ = __webpack_require__("../../../../../src/app/examples/theming.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__examples_remoteData__ = __webpack_require__("../../../../../src/app/examples/remoteData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__examples_customSearch__ = __webpack_require__("../../../../../src/app/examples/customSearch.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__examples_gist__["a" /* ng2Gist */],
                __WEBPACK_IMPORTED_MODULE_9__examples_basic__["a" /* BasicExample */],
                __WEBPACK_IMPORTED_MODULE_10__examples_singleselection__["a" /* SingleSelectionExample */],
                __WEBPACK_IMPORTED_MODULE_11__examples_groupBy__["a" /* GroupByExample */],
                __WEBPACK_IMPORTED_MODULE_12__examples_searchFilter__["a" /* SearchFilterExample */],
                __WEBPACK_IMPORTED_MODULE_13__examples_templating__["a" /* TemplatingExample */],
                __WEBPACK_IMPORTED_MODULE_14__examples_resetdropdown__["a" /* ResetDropdownExample */],
                __WEBPACK_IMPORTED_MODULE_15__examples_disablemode__["a" /* DisableModeExample */],
                __WEBPACK_IMPORTED_MODULE_16__examples_limitselection__["a" /* LimitSelectionExample */],
                __WEBPACK_IMPORTED_MODULE_17__examples_limitbadges__["a" /* LimitBadgesExample */],
                __WEBPACK_IMPORTED_MODULE_18__examples_customplaceholder__["a" /* CustomPlaceholderExample */],
                __WEBPACK_IMPORTED_MODULE_19__examples_styling__["a" /* StylingExample */],
                __WEBPACK_IMPORTED_MODULE_22__examples_usingWithForms__["a" /* UsingWithFormExample */],
                __WEBPACK_IMPORTED_MODULE_23__examples_usingInReactForms__["a" /* UsingWithReactiveFormExample */],
                __WEBPACK_IMPORTED_MODULE_24__examples_lazyLoading__["a" /* LazyLoadingExample */],
                __WEBPACK_IMPORTED_MODULE_25__examples_multipleDropdowns__["a" /* MultipleDropdownsExample */],
                __WEBPACK_IMPORTED_MODULE_26__examples_dynamicDataSets__["a" /* DynamicDataSetsExample */],
                __WEBPACK_IMPORTED_MODULE_27__examples_theming__["a" /* ThemingExample */],
                __WEBPACK_IMPORTED_MODULE_28__examples_remoteData__["a" /* RemoteDataExample */],
                __WEBPACK_IMPORTED_MODULE_29__examples_customSearch__["a" /* CustomSearchExample */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_router__["a" /* AppRouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular2_multiselect_dropdown_multiselect_component__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__examples_mock_data__["a" /* MockService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__examples_usingWithForms__ = __webpack_require__("../../../../../src/app/examples/usingWithForms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__examples_usingInReactForms__ = __webpack_require__("../../../../../src/app/examples/usingInReactForms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__examples_lazyLoading__ = __webpack_require__("../../../../../src/app/examples/lazyLoading.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__examples_multipleDropdowns__ = __webpack_require__("../../../../../src/app/examples/multipleDropdowns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__examples_dynamicDataSets__ = __webpack_require__("../../../../../src/app/examples/dynamicDataSets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__examples_theming__ = __webpack_require__("../../../../../src/app/examples/theming.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__examples_remoteData__ = __webpack_require__("../../../../../src/app/examples/remoteData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__examples_customSearch__ = __webpack_require__("../../../../../src/app/examples/customSearch.ts");
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
    { path: 'styling', component: __WEBPACK_IMPORTED_MODULE_12__examples_styling__["a" /* StylingExample */] },
    { path: 'usinginform', component: __WEBPACK_IMPORTED_MODULE_13__examples_usingWithForms__["a" /* UsingWithFormExample */] },
    { path: 'usinginreactiveform', component: __WEBPACK_IMPORTED_MODULE_14__examples_usingInReactForms__["a" /* UsingWithReactiveFormExample */] },
    { path: 'lazyloading', component: __WEBPACK_IMPORTED_MODULE_15__examples_lazyLoading__["a" /* LazyLoadingExample */] },
    { path: 'multipledropdowns', component: __WEBPACK_IMPORTED_MODULE_16__examples_multipleDropdowns__["a" /* MultipleDropdownsExample */] },
    { path: 'dynamicdatasets', component: __WEBPACK_IMPORTED_MODULE_17__examples_dynamicDataSets__["a" /* DynamicDataSetsExample */] },
    { path: 'theming', component: __WEBPACK_IMPORTED_MODULE_18__examples_theming__["a" /* ThemingExample */] },
    { path: 'remoteData', component: __WEBPACK_IMPORTED_MODULE_19__examples_remoteData__["a" /* RemoteDataExample */] },
    { path: 'customSearchAPI', component: __WEBPACK_IMPORTED_MODULE_20__examples_customSearch__["a" /* CustomSearchExample */] }
];
var AppRouterModule = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], BasicExample);
    return BasicExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/basic.js.map

/***/ }),

/***/ "../../../../../src/app/examples/customSearch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSearchExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/customSearch.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], CustomSearchExample);
    return CustomSearchExample;
    var _a;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/customSearch.js.map

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/disableMode.html")
        }),
        __metadata("design:paramtypes", [])
    ], DisableModeExample);
    return DisableModeExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/disablemode.js.map

/***/ }),

/***/ "../../../../../src/app/examples/dynamicDataSets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicDataSetsExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_data__ = __webpack_require__("../../../../../src/app/examples/mock-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/dynamicData.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* MockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* MockService */]) === "function" && _a || Object])
    ], DynamicDataSetsExample);
    return DynamicDataSetsExample;
    var _a;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/dynamicDataSets.js.map

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/groupBy.html")
        }),
        __metadata("design:paramtypes", [])
    ], GroupByExample);
    return GroupByExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/groupBy.js.map

/***/ }),

/***/ "../../../../../src/app/examples/lazyLoading.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyLoadingExample; });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/lazyLoading.html")
        }),
        __metadata("design:paramtypes", [])
    ], LazyLoadingExample);
    return LazyLoadingExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/lazyLoading.js.map

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/view.html")
        }),
        __metadata("design:paramtypes", [])
    ], LimitSelectionExample);
    return LimitSelectionExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/limitselection.js.map

/***/ }),

/***/ "../../../../../src/app/examples/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MockService = /** @class */ (function () {
    function MockService() {
        this.DATA = [{ "id": "PBMMedAdhr", "name": "PBM Medication Adherence" }, { "id": "GapsInCare", "name": "Gaps In Care" }, { "id": "UCTest1", "name": "Use Case Test1" }, { "id": "BASICSAVE", "name": "A generic alternative or 30-90 day dispense opport" }, { "id": "ADVSAVE", "name": "An advnaced generic alternative or 30-90 day dispe" }, { "id": "AttAlert", "name": "Attachment Alert" }, { "id": "PatSave", "name": "Patient savings" }, { "id": "UCTest2", "name": "Use Case Test 2" }, { "id": "UCTest3", "name": "Use Case Test 3" }, { "id": "UCTest4", "name": "Use Case Test 4" }, { "id": "UCTest5", "name": "Use Case Test 5" }, { "id": "UCTest6", "name": "Use Case Test 6" }, { "id": "UCTest7", "name": "Use Case Test 7" }, { "id": "UCTest9", "name": "Use Case Test 9" }, { "id": "UCTest#Ten", "name": "Use Case Test 10" }, { "id": "UCTest8", "name": "Use Case Test 8" }, { "id": "UCTest11", "name": "Test Use Case 11" }, { "id": "UCTest12", "name": "Test Use Case 12" }, { "id": "UCTest13", "name": "Test Use Case 13" }, { "id": "PNLIMMUN", "name": "PNL Immunization" }, { "id": "TrustBrkr", "name": "Identity Services" }, { "id": "RTBC", "name": "real time benefit check for 90 day at retail" }];
    }
    MockService.prototype.getDirectories = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
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
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MockService);
    return MockService;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/mock-data.js.map

/***/ }),

/***/ "../../../../../src/app/examples/multipleDropdowns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleDropdownsExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_data__ = __webpack_require__("../../../../../src/app/examples/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        this.mockService.getDirectories().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (resp) {
            _this.directorySpecialties = resp;
        })).subscribe();
        this.mockService.getUseCases().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (resp) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/multipledropdowns.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* MockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* MockService */]) === "function" && _a || Object])
    ], MultipleDropdownsExample);
    return MultipleDropdownsExample;
    var _a;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/multipleDropdowns.js.map

/***/ }),

/***/ "../../../../../src/app/examples/remoteData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteDataExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/remoteData.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RemoteDataExample);
    return RemoteDataExample;
    var _a;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/remoteData.js.map

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/templating.html")
        }),
        __metadata("design:paramtypes", [])
    ], TemplatingExample);
    return TemplatingExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/templating.js.map

/***/ }),

/***/ "../../../../../src/app/examples/theming.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingExample; });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/theming.html")
        }),
        __metadata("design:paramtypes", [])
    ], ThemingExample);
    return ThemingExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/theming.js.map

/***/ }),

/***/ "../../../../../src/app/examples/usingInReactForms.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsingWithReactiveFormExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
            email: ['absd@gmail.com', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            skills: [[], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/using-in-react-form.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
    ], UsingWithReactiveFormExample);
    return UsingWithReactiveFormExample;
    var _a;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/usingInReactForms.js.map

/***/ }),

/***/ "../../../../../src/app/examples/usingWithForms.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsingWithFormExample; });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/examples/views/using-in-form.html")
        }),
        __metadata("design:paramtypes", [])
    ], UsingWithFormExample);
    return UsingWithFormExample;
}());

//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-multiselect-dropdown/src/usingWithForms.js.map

/***/ }),

/***/ "../../../../../src/app/examples/views/customSearch.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">\r\n    {{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n        <c-search>\r\n             <ng-template>\r\n                 <input type=\"text\" (keyup)=\"onSearch($event)\" placeholder=\"Search countries\" style=\"border: none;width: 100%; height: 100%;outline: none;\"/>\r\n             </ng-template>\r\n        </c-search>\r\n        <c-item>\r\n            <ng-template let-item=\"item\">\r\n                <label style=\"color: #333;width: 150px;\">{{item.name}}</label>\r\n                <img [src]=\"item.flag\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 0px;\" />\r\n                <label>{{item.capital}}</label>\r\n            </ng-template>\r\n        </c-item>\r\n    </angular2-multiselect>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "../../../../../src/app/examples/views/disableMode.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<div class=\"row\">\r\n    <div>\r\n        <button (click)=\"disable()\" class=\"btn btn-danger\">Disable</button>\r\n    </div>\r\n    <div>\r\n        <button (click)=\"enable()\" class=\"btn btn-success\">Enable</button>\r\n    </div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/views/dynamicData.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<button class=\"btn btn-success\" (click)=\"loadDataSet1()\">Load dataset 1</button>\r\n<button class=\"btn btn-success\" (click)=\"loadDataSet2()\">Load dataset 2</button>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n     <span *ngIf=\"mockgist\">\r\n        <p-tabPanel header=\"{{mocktitle}}\">\r\n        <ng2-gist [gistId]=\"mockgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/views/groupBy.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<button class=\"btn btn-success\" (click)=\"loadDataSet1()\">Load/change dataset 1</button>\r\n<button class=\"btn btn-success\" (click)=\"loadDataSet2()\">Load/change dataset 2</button>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/views/lazyLoading.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3 mr-auto ml-auto dropdown-container\">\r\n    </div>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n<br>\r\n<span>Total Records : {{itemList.length}}</span>\r\n</div>\r\n<div class=\"col-md-3 mr-auto ml-auto dropdown-container\">\r\n            <button (click)=\"changeData()\" class=\"btn btn-danger\">Reset</button>\r\n</div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/views/multipledropdowns.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\"> {{title}}</h2>\r\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\r\n    <div class=\"form-group col-md-12\">\r\n        <label for=\"directorySpecialties\">Directory Specialties</label>\r\n        <angular2-multiselect id=\"directorySpecialties\" name=\"directorySpecialties\" [(ngModel)]=\"providerLocation.directorySpecialties\"\r\n            [data]=\"directorySpecialties\" [settings]=\"dropdownSettings\">\r\n        </angular2-multiselect>\r\n    </div>\r\n    <div class=\"form-group col-md-12\">\r\n        <label for=\"useCases\">Use Cases</label>\r\n        <angular2-multiselect id=\"useCases\" name=\"useCases\" [(ngModel)]=\"providerLocation.useCases\" [data]=\"useCases\" [settings]=\"dropdownSettings2\">\r\n        </angular2-multiselect>\r\n    </div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n    <span *ngIf=\"mockgist\">\r\n        <p-tabPanel header=\"{{mocktitle}}\">\r\n        <ng2-gist [gistId]=\"mockgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "../../../../../src/app/examples/views/remoteData.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">\r\n    {{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n        <c-item>\r\n            <ng-template let-item=\"item\">\r\n                <label style=\"color: #333;width: 150px;\">{{item.name}}</label>\r\n                <img [src]=\"item.flag\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 0px;\" />\r\n                <label>{{item.capital}}</label>\r\n            </ng-template>\r\n        </c-item>\r\n    </angular2-multiselect>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "../../../../../src/app/examples/views/resetDropdown.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-10 mr-auto ml-auto dropdown-container\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <button (click)=\"changeData()\" class=\"btn btn-danger\">Reset</button>\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n</p-tabView>"

/***/ }),

/***/ "../../../../../src/app/examples/views/templating.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-7 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n        <c-badge>\r\n            <ng-template let-item=\"item\">\r\n                <label style=\"margin: 0px;\">{{item.itemName}}</label>\r\n                <img [src]=\"item.image\" style=\"width: 16px; margin-right: 5px;\" />\r\n            </ng-template>\r\n        </c-badge>\r\n        <c-item>\r\n            <ng-template let-item=\"item\">\r\n                <label style=\"color: #333;min-width: 150px;\">{{item.itemName}}</label>\r\n                <img [src]=\"item.image\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 20px;\" />\r\n                <label>Capital - {{item.capital}}</label>\r\n            </ng-template>\r\n        </c-item>\r\n    </angular2-multiselect>\r\n</div>\r\n\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n</p-tabView>"

/***/ }),

/***/ "../../../../../src/app/examples/views/theming.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<!--<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n-->"

/***/ }),

/***/ "../../../../../src/app/examples/views/using-in-form.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"row\">\r\n<div class=\"col-md-6 ml-auto mr-auto\">\r\n    <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" style=\"border: 1px solid #ccc; padding: 10px;\">\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Skills </label>\r\n            <span style=\"color: red;float: right;\">* required</span>\r\n            <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"formModel.skills\" \r\n                                  [settings]=\"settings\" \r\n                                  (onSelect)=\"onItemSelect($event)\"\r\n                                  (onDeSelect)=\"OnItemDeSelect($event)\" \r\n                                  (onSelectAll)=\"onSelectAll($event)\" \r\n                                  (onDeSelectAll)=\"onDeSelectAll($event)\" name=\"skills\" #skills=\"ngModel\" required>\r\n            </angular2-multiselect>\r\n            <div [hidden]=\"skills.valid\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!skills.hasError('required')\">Atleast one Skill is required</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"name\" pattern=\"[a-zA-Z][a-zA-Z ]+\" [(ngModel)]=\"formModel.name\" name=\"name\"\r\n                #name=\"ngModel\">\r\n            <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!name.hasError('required')\">Name is required</div>\r\n                <div [hidden]=\"!name.hasError('pattern')\">Only alphabetsallowed</div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Email Address</label>\r\n            <span style=\"color: red;float: right;\">* required</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"emailaddress\" required [(ngModel)]=\"formModel.email\" name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                #email=\"ngModel\">\r\n            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.hasError('required')\">Email is required</div>\r\n                <div [hidden]=\"!email.hasError('pattern')\">Email format should be <small><b>joe@abc.com</b></small></div>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!loginForm.form.valid\">Submit</button>\r\n    </form>\r\n</div>\r\n<div class=\"col-md-6\">\r\n    <table class=\"table\">\r\n        <tr>\r\n            <td><label>Name</label></td>\r\n            <td>{{formModel.name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>Email</label></td>\r\n            <td>{{formModel.email}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>Skills</label></td>\r\n            <td>\r\n                <h6 *ngFor=\"let obj of formModel.skills\">{{obj.itemName}}</h6>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <span>{{formModel | json}}</span>\r\n        <p>Form status: {{ loginForm.form.status | json }}</p>\r\n\r\n</div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "../../../../../src/app/examples/views/using-in-react-form.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"row\">\r\n<div class=\"col-md-6 ml-auto mr-auto\">\r\n    <form [formGroup]=\"userForm\" novalidate style=\"border: 1px solid #ccc; padding: 10px;\">\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Skills</label>\r\n            <span style=\"color: red;float: right;\">* required</span>\r\n           <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" \r\n                                  [settings]=\"settings\" \r\n                                  (onSelect)=\"onItemSelect($event)\"\r\n                                  (onDeSelect)=\"OnItemDeSelect($event)\" \r\n                                  (onSelectAll)=\"onSelectAll($event)\" \r\n                                  (onDeSelectAll)=\"onDeSelectAll($event)\" formControlName=\"skills\">\r\n            </angular2-multiselect>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input class=\"form-control\" formControlName=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Email Address</label>\r\n            <span style=\"color: red;float: right;\">* required</span>\r\n            <input class=\"form-control\" formControlName=\"email\">\r\n        </div>\r\n        <button (click)=\"submitForm()\" [disabled]=\"!userForm.valid\" class=\"btn btn-success btn-block\">Submit</button>\r\n    </form>\r\n\r\n</div>\r\n<div class=\"col-md-6\">\r\n    <table class=\"table\">\r\n        <tr>\r\n            <td><label>Name</label></td>\r\n            <td>{{userForm.value.name}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>Email</label></td>\r\n            <td>{{userForm.value.email}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>Skills</label></td>\r\n            <td>\r\n                <h6 *ngFor=\"let obj of userForm.value.skills\">{{obj.itemName}}</h6>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <span>{{userForm.value | json}}</span>\r\n    <p>Form status: {{ userForm.status | json }}</p>\r\n</div>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>"

/***/ }),

/***/ "../../../../../src/app/examples/views/view.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\r\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\r\n</div>\r\n<h4 class=\"example-title code-section\">Code</h4>\r\n\r\n<p-tabView>\r\n    <p-tabPanel header=\"{{tstitle}}\">\r\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"{{htmltitle}}\">\r\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    <span *ngIf=\"cssgist\">\r\n        <p-tabPanel header=\"{{csstitle}}\">\r\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\r\n    </p-tabPanel>\r\n    </span>\r\n</p-tabView>\r\n"

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