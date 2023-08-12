"use strict";
(self["webpackChunkangular2_multiselect_dropdown"] = self["webpackChunkangular2_multiselect_dropdown"] || []).push([["main"],{

/***/ 7618:
/*!****************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/clickOutside.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickOutsideDirective: () => (/* binding */ ClickOutsideDirective),
/* harmony export */   ScrollDirective: () => (/* binding */ ScrollDirective),
/* harmony export */   setPosition: () => (/* binding */ setPosition),
/* harmony export */   styleDirective: () => (/* binding */ styleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class, _class2, _class3, _class4;


class ClickOutsideDirective {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClick(event, targetElement) {
    if (!targetElement) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
_class = ClickOutsideDirective;
_class.ɵfac = function ClickOutsideDirective_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "clickOutside", ""]],
  hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event, $event.target);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchstart", function ClickOutsideDirective_touchstart_HostBindingHandler($event) {
        return ctx.onClick($event, $event.target);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  outputs: {
    clickOutside: "clickOutside"
  }
});
class ScrollDirective {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClick(event, targetElement) {
    this.scroll.emit(event);
  }
}
_class2 = ScrollDirective;
_class2.ɵfac = function ScrollDirective_Factory(t) {
  return new (t || _class2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_class2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class2,
  selectors: [["", "scroll", ""]],
  hostBindings: function ScrollDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollDirective_scroll_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  outputs: {
    scroll: "scroll"
  }
});
class styleDirective {
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    this.el.nativeElement.style.top = this.styleVal;
  }
  ngOnChanges() {
    this.el.nativeElement.style.top = this.styleVal;
  }
}
_class3 = styleDirective;
_class3.ɵfac = function styleDirective_Factory(t) {
  return new (t || _class3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_class3.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class3,
  selectors: [["", "styleProp", ""]],
  inputs: {
    styleVal: ["styleProp", "styleVal"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
class setPosition {
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    if (this.height) {
      this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
    }
  }
  ngOnChanges() {
    if (this.height) {
      this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
    }
  }
}
_class4 = setPosition;
_class4.ɵfac = function setPosition_Factory(t) {
  return new (t || _class4)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_class4.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class4,
  selectors: [["", "setPosition", ""]],
  inputs: {
    height: ["setPosition", "height"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 6645:
/*!***************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/list-filter.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListFilterPipe: () => (/* binding */ ListFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _multiselect_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiselect.service */ 9843);
var _class;


class ListFilterPipe {
  constructor(ds) {
    this.ds = ds;
    this.filteredList = [];
  }
  transform(items, filter, searchBy) {
    if (!items || !filter || filter == "") {
      return items;
    }
    this.filteredList = items.filter(item => this.applyFilter(item, filter, searchBy));
    return this.filteredList;
  }
  applyFilter(item, filter, searchBy) {
    let found = false;
    if (searchBy.length > 0) {
      if (item.grpTitle) {
        found = true;
      } else {
        for (var t = 0; t < searchBy.length; t++) {
          if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
            if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
              found = true;
            }
          }
        }
      }
    } else {
      if (item.grpTitle) {
        found = true;
      } else {
        for (var prop in item) {
          if (filter && item[prop]) {
            if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
              found = true;
            }
          }
        }
      }
    }
    return found;
  }
}
_class = ListFilterPipe;
_class.ɵfac = function ListFilterPipe_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_multiselect_service__WEBPACK_IMPORTED_MODULE_0__.DataService, 16));
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "listFilter",
  type: _class,
  pure: true
});

/***/ }),

/***/ 9970:
/*!*************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/menu-item.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   CIcon: () => (/* binding */ CIcon),
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   Search: () => (/* binding */ Search),
/* harmony export */   TemplateRenderer: () => (/* binding */ TemplateRenderer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
var _class, _class2, _class3, _class4, _class5;



function CIcon__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4)(1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function CIcon__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 6)(1, "g")(2, "g", 7)(3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function CIcon__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 6)(1, "g")(2, "g", 9)(3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function CIcon__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 11)(1, "g")(2, "g")(3, "g", 12)(4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
}
function CIcon__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 14)(1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class Item {
  constructor() {}
}
_class = Item;
_class.ɵfac = function Item_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["c-item"]],
  contentQueries: function Item_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  decls: 0,
  vars: 0,
  template: function Item_Template(rf, ctx) {},
  encapsulation: 2
});
class Badge {
  constructor() {}
}
_class2 = Badge;
_class2.ɵfac = function Badge_Factory(t) {
  return new (t || _class2)();
};
_class2.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["c-badge"]],
  contentQueries: function Badge_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  decls: 0,
  vars: 0,
  template: function Badge_Template(rf, ctx) {},
  encapsulation: 2
});
class Search {
  constructor() {}
}
_class3 = Search;
_class3.ɵfac = function Search_Factory(t) {
  return new (t || _class3)();
};
_class3.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class3,
  selectors: [["c-search"]],
  contentQueries: function Search_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  decls: 0,
  vars: 0,
  template: function Search_Template(rf, ctx) {},
  encapsulation: 2
});
class TemplateRenderer {
  constructor(viewContainer) {
    this.viewContainer = viewContainer;
  }
  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.data.template, {
      '\$implicit': this.data,
      'item': this.item
    });
  }
  ngOnDestroy() {
    this.view.destroy();
  }
}
_class4 = TemplateRenderer;
_class4.ɵfac = function TemplateRenderer_Factory(t) {
  return new (t || _class4)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
_class4.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class4,
  selectors: [["c-templateRenderer"]],
  inputs: {
    data: "data",
    item: "item"
  },
  decls: 0,
  vars: 0,
  template: function TemplateRenderer_Template(rf, ctx) {},
  encapsulation: 2
});
class CIcon {}
_class5 = CIcon;
_class5.ɵfac = function CIcon_Factory(t) {
  return new (t || _class5)();
};
_class5.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class5,
  selectors: [["c-icon"]],
  inputs: {
    name: "name"
  },
  decls: 5,
  vars: 5,
  consts: [["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", "style", "enable-background:new 0 0 47.971 47.971;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", "style", "enable-background:new 0 0 612 612;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", "style", "enable-background:new 0 0 615.52 615.52;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", "style", "enable-background:new 0 0 51.976 51.976;", 0, "xml", "space", "preserve", 4, "ngIf"], ["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 47.971 47.971"], ["d", "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 612 612"], ["id", "_x31_0_34_"], ["d", "M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"], ["id", "_x39__30_"], ["d", "M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 615.52 615.52"], ["id", "Search__x28_and_thou_shall_find_x29_"], ["d", "M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 51.976 51.976"], ["d", "M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n\t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n\t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n\t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n\t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"]],
  template: function CIcon_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CIcon__svg_svg_0_Template, 3, 0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CIcon__svg_svg_1_Template, 5, 0, "svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CIcon__svg_svg_2_Template, 5, 0, "svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CIcon__svg_svg_3_Template, 6, 0, "svg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CIcon__svg_svg_4_Template, 3, 0, "svg", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "angle-down");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "angle-up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "clear");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 8026:
/*!*************************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularMultiSelect: () => (/* binding */ AngularMultiSelect),
/* harmony export */   AngularMultiSelectModule: () => (/* binding */ AngularMultiSelectModule),
/* harmony export */   DROPDOWN_CONTROL_VALIDATION: () => (/* binding */ DROPDOWN_CONTROL_VALIDATION),
/* harmony export */   DROPDOWN_CONTROL_VALUE_ACCESSOR: () => (/* binding */ DROPDOWN_CONTROL_VALUE_ACCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _multiselect_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiselect.model */ 7326);
/* harmony import */ var _clickOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickOutside */ 7618);
/* harmony import */ var _list_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-filter */ 6645);
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-item */ 9970);
/* harmony import */ var _multiselect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiselect.service */ 9843);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./virtual-scroll/virtual-scroll */ 6011);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 655);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3738);
var _class, _class2;
















const _c0 = ["searchInput"];
const _c1 = ["selectedList"];
const _c2 = ["dropdownList"];
const _c3 = ["cuppaDropdown"];
function AngularMultiSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.settings.text);
  }
}
function AngularMultiSelect_span_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r27[ctx_r26.settings.labelKey], " ");
  }
}
function AngularMultiSelect_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_span_6_span_1_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.selectedItems)("ngForTrackBy", ctx_r3.trackByFn.bind(ctx_r3));
  }
}
function AngularMultiSelect_span_7_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r30[ctx_r32.settings.labelKey]);
  }
}
function AngularMultiSelect_span_7_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r33.badgeTempl)("item", item_r30);
  }
}
function AngularMultiSelect_span_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_span_7_div_1_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_span_7_div_1_span_2_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_span_7_div_1_Template_span_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const item_r30 = restoredCtx.$implicit;
      const k_r31 = restoredCtx.index;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r36.onItemClick(item_r30, k_r31, $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r29.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "remove");
  }
}
function AngularMultiSelect_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_span_7_div_1_Template, 5, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.selectedItems)("ngForTrackBy", ctx_r4.trackByFn.bind(ctx_r4));
  }
}
function AngularMultiSelect_div_8_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39[ctx_r41.settings.labelKey]);
  }
}
function AngularMultiSelect_div_8_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r42.badgeTempl)("item", item_r39);
  }
}
function AngularMultiSelect_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_8_div_1_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_8_div_1_span_2_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_8_div_1_Template_span_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const item_r39 = restoredCtx.$implicit;
      const k_r40 = restoredCtx.index;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r45.onItemClick(item_r39, k_r40, $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const k_r40 = ctx.index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", k_r40 > ctx_r38.settings.badgeShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r38.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r38.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "remove");
  }
}
function AngularMultiSelect_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_8_div_1_Template, 5, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.selectedItems)("ngForTrackBy", ctx_r5.trackByFn.bind(ctx_r5));
  }
}
function AngularMultiSelect_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("+", (ctx_r6.selectedItems == null ? null : ctx_r6.selectedItems.length) - ctx_r6.settings.badgeShowLimit, "");
  }
}
function AngularMultiSelect_span_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_span_10_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r47.clearSelection($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "remove");
  }
}
function AngularMultiSelect_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "angle-down");
  }
}
function AngularMultiSelect_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "angle-up");
  }
}
function AngularMultiSelect_div_18_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AngularMultiSelect_div_18_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.toggleSelectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r49.isSelectAll)("disabled", ctx_r49.settings.limitSelection == (ctx_r49.selectedItems == null ? null : ctx_r49.selectedItems.length))("id", ctx_r49.id);
  }
}
function AngularMultiSelect_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_18_input_1_Template, 1, 3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 39)(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", ctx_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r11.isSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.settings.selectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r11.isSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.settings.unSelectAllText);
  }
}
function AngularMultiSelect_img_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 42);
  }
}
function AngularMultiSelect_div_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r58.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r52.filter == undefined || (ctx_r52.filter == null ? null : ctx_r52.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "clear");
  }
}
function AngularMultiSelect_div_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_span_4_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r60.resetInfiniteSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r53.filter == undefined || (ctx_r53.filter == null ? null : ctx_r53.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "clear");
  }
}
function AngularMultiSelect_div_20_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r63.filter = $event);
    })("keyup", function AngularMultiSelect_div_20_input_5_Template_input_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r65.filterGroupedList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r54.settings.searchPlaceholderText)("ngModel", ctx_r54.filter);
  }
}
function AngularMultiSelect_div_20_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_6_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.filter = $event);
    })("keyup", function AngularMultiSelect_div_20_input_6_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.filteritems($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r55.settings.searchPlaceholderText)("ngModel", ctx_r55.filter);
  }
}
function AngularMultiSelect_div_20_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_7_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r71.filter = $event);
    })("keyup", function AngularMultiSelect_div_20_input_7_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r72);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r73.onKeyUp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx_r56.settings.searchPlaceholderText)("ngModel", ctx_r56.filter);
  }
}
function AngularMultiSelect_div_20_c_templateRenderer_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "c-templateRenderer", 30);
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r57.searchTempl)("item", ctx_r57.item);
  }
}
function AngularMultiSelect_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "c-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AngularMultiSelect_div_20_span_3_Template, 2, 2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AngularMultiSelect_div_20_span_4_Template, 2, 2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AngularMultiSelect_div_20_input_5_Template, 2, 2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AngularMultiSelect_div_20_input_6_Template, 2, 2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AngularMultiSelect_div_20_input_7_Template, 2, 2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AngularMultiSelect_div_20_c_templateRenderer_8_Template, 1, 2, "c-templateRenderer", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r13.settings.lazyLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.settings.lazyLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.settings.groupBy && !ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r13.settings.groupBy && !ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.searchTempl);
  }
}
function AngularMultiSelect_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r76.toggleFilterSelectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label")(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r74.isFilterSelectAll)("disabled", ctx_r74.settings.limitSelection == (ctx_r74.selectedItems == null ? null : ctx_r74.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r74.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r74.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r74.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r74.settings.filterUnSelectAllText);
  }
}
function AngularMultiSelect_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r78.toggleFilterSelectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label")(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r75.isFilterSelectAll && (ctx_r75.filter == null ? null : ctx_r75.filter.length) > 0)("disabled", ctx_r75.settings.limitSelection == (ctx_r75.selectedItems == null ? null : ctx_r75.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r75.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r75.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r75.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r75.settings.filterUnSelectAllText);
  }
}
function AngularMultiSelect_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_21_div_1_Template, 7, 6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_21_div_2_Template, 7, 6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r14.settings.groupBy && (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && ctx_r14.filterLength > 0 && !ctx_r14.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.settings.groupBy && (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && (ctx_r14.groupedData == null ? null : ctx_r14.groupedData.length) > 0 && !ctx_r14.settings.singleSelection);
  }
}
function AngularMultiSelect_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_22_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.toggleInfiniteFilterSelectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label")(3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r80.isInfiniteFilterSelectAll)("disabled", ctx_r80.settings.limitSelection == (ctx_r80.selectedItems == null ? null : ctx_r80.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r80.isInfiniteFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r80.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r80.isInfiniteFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r80.settings.filterUnSelectAllText);
  }
}
function AngularMultiSelect_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_22_div_1_Template, 7, 6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r15.filter == null ? null : ctx_r15.filter.length) > 0 && ctx_r15.infiniteFilterLength > 0);
  }
}
function AngularMultiSelect_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 57)(1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_23_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r85);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.addFilterNewItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r83.settings.addNewButtonText);
  }
}
function AngularMultiSelect_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_23_div_1_Template, 3, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.settings.addNewItemOnFilter);
  }
}
function AngularMultiSelect_div_24_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 55);
  }
  if (rf & 2) {
    const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r89.isSelected(item_r87))("disabled", ctx_r89.settings.limitSelection == (ctx_r89.selectedItems == null ? null : ctx_r89.selectedItems.length) && !ctx_r89.isSelected(item_r87) || item_r87.disabled);
  }
}
const _c4 = function (a0) {
  return {
    "selected-item": a0
  };
};
function AngularMultiSelect_div_24_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_24_li_2_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r92);
      const item_r87 = restoredCtx.$implicit;
      const i_r88 = restoredCtx.index;
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r91.onItemClick(item_r87, i_r88, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_24_li_2_input_1_Template, 1, 2, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r87 = ctx.$implicit;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c4, ctx_r86.isSelected(item_r87) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r86.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r87[ctx_r86.settings.labelKey]);
  }
}
function AngularMultiSelect_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_24_li_2_Template, 4, 5, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r17.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r17.data);
  }
}
function AngularMultiSelect_div_25_li_3_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r97.isSelected(item_r95))("disabled", ctx_r97.settings.limitSelection == (ctx_r97.selectedItems == null ? null : ctx_r97.selectedItems.length) && !ctx_r97.isSelected(item_r95) || item_r95.disabled);
  }
}
function AngularMultiSelect_div_25_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_25_li_3_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r100);
      const item_r95 = restoredCtx.$implicit;
      const i_r96 = restoredCtx.index;
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r99.onItemClick(item_r95, i_r96, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_25_li_3_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r95 = ctx.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c4, ctx_r94.isSelected(item_r95) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r94.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r95[ctx_r94.settings.labelKey]);
  }
}
const _c5 = function (a0) {
  return {
    "height": a0
  };
};
function AngularMultiSelect_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_25_Template_ul_vsStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r102);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r101.onScrollEnd($event));
    })("vsEnd", function AngularMultiSelect_div_25_Template_ul_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r102);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r103.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AngularMultiSelect_div_25_li_3_Template, 4, 5, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r18.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r18.randomSize)("items", ctx_r18.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c5, ctx_r18.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r93.viewPortItems);
  }
}
function AngularMultiSelect_div_26_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r107.isSelected(item_r105))("disabled", ctx_r107.settings.limitSelection == (ctx_r107.selectedItems == null ? null : ctx_r107.selectedItems.length) && !ctx_r107.isSelected(item_r105) || item_r105.disabled);
  }
}
function AngularMultiSelect_div_26_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_26_li_2_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r110);
      const item_r105 = restoredCtx.$implicit;
      const i_r106 = restoredCtx.index;
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r109.onItemClick(item_r105, i_r106, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_26_li_2_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "label")(3, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r105 = ctx.$implicit;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c4, ctx_r104.isSelected(item_r105) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r104.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r104.itemTempl)("item", item_r105);
  }
}
function AngularMultiSelect_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_26_li_2_Template, 4, 6, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r19.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r19.data);
  }
}
function AngularMultiSelect_div_27_li_3_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r115.isSelected(item_r113))("disabled", ctx_r115.settings.limitSelection == (ctx_r115.selectedItems == null ? null : ctx_r115.selectedItems.length) && !ctx_r115.isSelected(item_r113) || item_r113.disabled);
  }
}
function AngularMultiSelect_div_27_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_27_li_3_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r118);
      const item_r113 = restoredCtx.$implicit;
      const i_r114 = restoredCtx.index;
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r117.onItemClick(item_r113, i_r114, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_27_li_3_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "label")(3, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r113 = ctx.$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c4, ctx_r112.isSelected(item_r113) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r112.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r112.itemTempl)("item", item_r113);
  }
}
function AngularMultiSelect_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 64, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_27_Template_ul_vsStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r120);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r119.onScrollEnd($event));
    })("vsEnd", function AngularMultiSelect_div_27_Template_ul_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r120);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r121.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AngularMultiSelect_div_27_li_3_Template, 4, 6, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r20.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r20.randomSize)("items", ctx_r20.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c5, ctx_r20.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r111.viewPortItems);
  }
}
function AngularMultiSelect_div_28_span_3_li_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r128.isSelected(item_r124))("disabled", ctx_r128.settings.limitSelection == (ctx_r128.selectedItems == null ? null : ctx_r128.selectedItems.length) && !ctx_r128.isSelected(item_r124) || item_r124.disabled);
  }
}
const _c6 = function (a0, a1) {
  return {
    "grp-title": a0,
    "grp-item": a1
  };
};
function AngularMultiSelect_div_28_span_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_28_span_3_li_1_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r132);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r124 = ctx_r131.$implicit;
      const i_r125 = ctx_r131.index;
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r130.onItemClick(item_r124, i_r125, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_3_li_1_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "label")(3, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, item_r124.grpTitle, !item_r124.grpTitle && !ctx_r126.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r126.settings.showCheckbox && !ctx_r126.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r126.itemTempl)("item", item_r124);
  }
}
function AngularMultiSelect_div_28_span_3_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r134.isSelected(item_r124))("disabled", ctx_r134.settings.limitSelection == (ctx_r134.selectedItems == null ? null : ctx_r134.selectedItems.length) && !ctx_r134.isSelected(item_r124) || item_r124.disabled);
  }
}
function AngularMultiSelect_div_28_span_3_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_3_li_2_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "label")(3, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, item_r124.grpTitle, !item_r124.grpTitle && !ctx_r127.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r127.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r127.itemTempl)("item", item_r124);
  }
}
function AngularMultiSelect_div_28_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_3_li_1_Template, 4, 7, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_28_span_3_li_2_Template, 4, 7, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r124.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r124.grpTitle);
  }
}
function AngularMultiSelect_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 64, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_28_Template_ul_vsStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r138);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r137.onScrollEnd($event));
    })("vsEnd", function AngularMultiSelect_div_28_Template_ul_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r138);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r139.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AngularMultiSelect_div_28_span_3_Template, 3, 2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r21.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r21.randomSize)("items", ctx_r21.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c5, ctx_r21.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r122.viewPortItems);
  }
}
function AngularMultiSelect_div_29_span_2_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r141.selected)("disabled", ctx_r143.settings.limitSelection == (ctx_r143.selectedItems == null ? null : ctx_r143.selectedItems.length) && !ctx_r143.isSelected(item_r141) || item_r141.disabled);
  }
}
function AngularMultiSelect_div_29_span_2_span_6_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const val_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r148.isSelected(val_r146))("disabled", ctx_r148.settings.limitSelection == (ctx_r148.selectedItems == null ? null : ctx_r148.selectedItems.length) && !ctx_r148.isSelected(val_r146) || val_r146.disabled);
  }
}
function AngularMultiSelect_div_29_span_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_span_2_span_6_Template_li_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r151);
      const val_r146 = restoredCtx.$implicit;
      const j_r147 = restoredCtx.index;
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r150.onItemClick(val_r146, j_r147, $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_span_6_input_2_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "label")(4, "c-templateRenderer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const val_r146 = ctx.$implicit;
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, val_r146.grpTitle, !val_r146.grpTitle && !ctx_r144.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r144.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r144.itemTempl)("item", val_r146);
  }
}
function AngularMultiSelect_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_span_2_Template_li_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r153);
      const item_r141 = restoredCtx.$implicit;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r152.selectGroup(item_r141));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_input_2_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AngularMultiSelect_div_29_span_2_span_6_Template, 5, 7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r141 = ctx.$implicit;
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, item_r141.grpTitle, !item_r141.grpTitle && !ctx_r140.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r140.settings.showCheckbox && !ctx_r140.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r141[ctx_r140.settings.labelKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r141.list);
  }
}
function AngularMultiSelect_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_Template, 7, 7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r22.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r22.groupedData);
  }
}
function AngularMultiSelect_div_30_span_4_li_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r160.isSelected(item_r156))("disabled", ctx_r160.settings.limitSelection == (ctx_r160.selectedItems == null ? null : ctx_r160.selectedItems.length) && !ctx_r160.isSelected(item_r156) || item_r156.disabled);
  }
}
const _c7 = function (a0, a1, a2) {
  return {
    "grp-title": a0,
    "grp-item": a1,
    "selected-item": a2
  };
};
function AngularMultiSelect_div_30_span_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_30_span_4_li_1_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c7, item_r156.grpTitle, !item_r156.grpTitle && !ctx_r158.settings.singleSelection, ctx_r158.isSelected(item_r156) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r158.settings.showCheckbox && !item_r156.grpTitle && !ctx_r158.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r156[ctx_r158.settings.labelKey]);
  }
}
function AngularMultiSelect_div_30_span_4_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r163.isSelected(item_r156))("disabled", ctx_r163.settings.limitSelection == (ctx_r163.selectedItems == null ? null : ctx_r163.selectedItems.length) && !ctx_r163.isSelected(item_r156) || item_r156.disabled);
  }
}
function AngularMultiSelect_div_30_span_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_30_span_4_li_2_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r167);
      const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r156 = ctx_r166.$implicit;
      const i_r157 = ctx_r166.index;
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r165.onItemClick(item_r156, i_r157, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_30_span_4_li_2_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c7, item_r156.grpTitle, !item_r156.grpTitle && !ctx_r159.settings.singleSelection, ctx_r159.isSelected(item_r156) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r159.settings.showCheckbox && !item_r156.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r156[ctx_r159.settings.labelKey]);
  }
}
function AngularMultiSelect_div_30_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AngularMultiSelect_div_30_span_4_li_1_Template, 4, 7, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_30_span_4_li_2_Template, 4, 7, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r156.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r156.grpTitle);
  }
}
function AngularMultiSelect_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "virtual-scroller", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsUpdate", function AngularMultiSelect_div_30_Template_virtual_scroller_vsUpdate_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r170);
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r169.viewPortItems = $event);
    })("vsEnd", function AngularMultiSelect_div_30_Template_virtual_scroller_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r170);
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r171.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ul", 64, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_30_Template_ul_vsStart_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r170);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r172.onScrollEnd($event));
    })("vsEnd", function AngularMultiSelect_div_30_Template_ul_vsEnd_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r170);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r173.onScrollEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AngularMultiSelect_div_30_span_4_Template, 3, 2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r23.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r23.groupedData)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c5, ctx_r23.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r23.randomSize)("items", ctx_r23.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c5, ctx_r23.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r154.viewPortItems);
  }
}
function AngularMultiSelect_div_31_span_2_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r175.selected)("disabled", ctx_r177.settings.limitSelection == (ctx_r177.selectedItems == null ? null : ctx_r177.selectedItems.length) && !ctx_r177.isSelected(item_r175) || item_r175.disabled);
  }
}
function AngularMultiSelect_div_31_span_2_span_6_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 67);
  }
  if (rf & 2) {
    const val_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r182.isSelected(val_r180))("disabled", ctx_r182.settings.limitSelection == (ctx_r182.selectedItems == null ? null : ctx_r182.selectedItems.length) && !ctx_r182.isSelected(val_r180) || val_r180.disabled);
  }
}
const _c8 = function (a0, a1, a2) {
  return {
    "selected-item": a0,
    "grp-title": a1,
    "grp-item": a2
  };
};
function AngularMultiSelect_div_31_span_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_31_span_2_span_6_Template_li_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r185);
      const val_r180 = restoredCtx.$implicit;
      const j_r181 = restoredCtx.index;
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r184.onItemClick(val_r180, j_r181, $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_31_span_2_span_6_input_2_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const val_r180 = ctx.$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c8, ctx_r178.isSelected(val_r180) == true, val_r180.grpTitle, !val_r180.grpTitle && !ctx_r178.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r178.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](val_r180[ctx_r178.settings.labelKey]);
  }
}
function AngularMultiSelect_div_31_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_div_31_span_2_Template_li_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r187);
      const item_r175 = restoredCtx.$implicit;
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r186.selectGroup(item_r175));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_31_span_2_input_2_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AngularMultiSelect_div_31_span_2_span_6_Template, 5, 7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r175 = ctx.$implicit;
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c6, item_r175.grpTitle, !item_r175.grpTitle && !ctx_r174.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r174.settings.showCheckbox && !ctx_r174.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r175[ctx_r174.settings.labelKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r175.list);
  }
}
function AngularMultiSelect_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AngularMultiSelect_div_31_span_2_Template, 7, 7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("max-height", ctx_r24.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r24.groupedData);
  }
}
function AngularMultiSelect_h5_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r25.settings.noDataLabel);
  }
}
const _c9 = function (a0) {
  return {
    "disabled": a0
  };
};
const _c10 = function (a0) {
  return {
    "tagToBody": a0
  };
};
const _c11 = function (a0, a1) {
  return {
    "arrow-up": a0,
    "arrow-down": a1
  };
};
const _c12 = function (a0) {
  return {
    "single-select-mode": a0
  };
};
const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(() => AngularMultiSelect),
  multi: true
};
const DROPDOWN_CONTROL_VALIDATION = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(() => AngularMultiSelect),
  multi: true
};
const noop = () => {};
class AngularMultiSelect {
  onEscapeDown(event) {
    if (this.settings.escapeToClose) {
      this.closeDropdown();
    }
  }
  onScroll(event) {
    if (this.isActive && this.settings.tagToBody) {
      this.closeDropdown();
      /*             const elem = this.cuppaDropdown.nativeElement;
                  if(this.settings.autoPosition){
                      this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1;
                  }
                  this.dropDownLeft = elem.getBoundingClientRect().x; */
    }
  }

  constructor(_elementRef, cdr, filterPipe) {
    this._elementRef = _elementRef;
    this.cdr = cdr;
    this.filterPipe = filterPipe;
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onScrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onFilterSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onFilterDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onAddFilterNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onGroupSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onGroupDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.virtualdata = [];
    this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.isActive = false;
    this.isSelectAll = false;
    this.isFilterSelectAll = false;
    this.isInfiniteFilterSelectAll = false;
    this.chunkIndex = [];
    this.cachedItems = [];
    this.groupCachedItems = [];
    this.itemHeight = 41.6;
    this.filterLength = 0;
    this.infiniteFilterLength = 0;
    this.dropdownListYOffset = 0;
    this.dropDownWidth = 0;
    this.dropDownTop = '';
    this.dropDownBottom = 'unset';
    this.dropDownLeft = 0;
    this.id = Math.random().toString(36).substring(2);
    this.defaultSettings = {
      singleSelection: false,
      text: 'Select',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      filterSelectAllText: 'Select all filtered results',
      filterUnSelectAllText: 'UnSelect all filtered results',
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
      enableFilterSelectAll: true,
      selectGroup: false,
      addNewItemOnFilter: false,
      addNewButtonText: "Add",
      escapeToClose: true,
      clearAll: true,
      tagToBody: true
    };
    this.randomSize = true;
    this.filteredList = [];
    this.virtualScroollInit = false;
    this.isDisabledItemPresent = false;
    this.onTouchedCallback = noop;
    this.onChangeCallback = noop;
    this.searchTerm$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(term => term)).subscribe(val => {
      this.filterInfiniteList(val);
    });
  }
  ngOnInit() {
    this.settings = Object.assign(this.defaultSettings, this.settings);
    this.cachedItems = this.cloneArray(this.data);
    if (this.settings.position == 'top') {
      setTimeout(() => {
        this.selectedListHeight = {
          val: 0
        };
        this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
      });
    }
    setTimeout(() => {
      this.calculateDropdownDirection();
    });
    this.virtualScroollInit = false;
  }
  onKeyUp(evt) {
    this.searchTerm$.next(evt.target.value);
  }
  ngOnChanges(changes) {
    if (changes.data && !changes.data.firstChange) {
      if (this.settings.groupBy) {
        this.groupedData = this.transformData(this.data, this.settings.groupBy);
        if (this.data.length == 0) {
          this.selectedItems = [];
        }
        this.groupCachedItems = this.cloneArray(this.groupedData);
      }
      this.cachedItems = this.cloneArray(this.data);
    }
    if (changes.settings && !changes.settings.firstChange) {
      this.settings = Object.assign(this.defaultSettings, this.settings);
    }
    if (changes.loading) {}
    if (this.settings.lazyLoading && this.virtualScroollInit && changes.data) {
      this.virtualdata = changes.data.currentValue;
    }
  }
  ngDoCheck() {
    if (this.selectedItems) {
      if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
        this.isSelectAll = false;
      }
    }
  }
  ngAfterViewInit() {
    if (this.settings.lazyLoading) {
      // this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
    }
  }
  ngAfterViewChecked() {
    if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
      this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
      this.cdr.detectChanges();
    }
    //this.calculateDropdownDirection();
  }

  onItemClick(item, index, evt) {
    if (item.disabled) {
      return;
    }
    if (this.settings.disabled) {
      return;
    }
    let found = this.isSelected(item);
    let limit = this.selectedItems.length < this.settings.limitSelection ? true : false;
    if (!found) {
      if (this.settings.limitSelection) {
        if (limit) {
          this.addSelected(item);
          this.onSelect.emit(item);
        }
      } else {
        this.addSelected(item);
        this.onSelect.emit(item);
      }
    } else {
      this.removeSelected(item);
      this.onDeSelect.emit(item);
    }
    if (this.isSelectAll || this.data.length > this.selectedItems.length) {
      this.isSelectAll = false;
    }
    if (this.data.length == this.selectedItems.length) {
      this.isSelectAll = true;
    }
    if (this.settings.groupBy) {
      this.updateGroupInfo(item);
    }
  }
  validate(c) {
    return null;
  }
  writeValue(value) {
    if (value !== undefined && value !== null && value !== '') {
      if (this.settings.singleSelection) {
        if (this.settings.groupBy) {
          this.groupedData = this.transformData(this.data, this.settings.groupBy);
          this.groupCachedItems = this.cloneArray(this.groupedData);
          this.selectedItems = [value[0]];
        } else {
          try {
            if (value.length > 1) {
              this.selectedItems = [value[0]];
              throw new _multiselect_model__WEBPACK_IMPORTED_MODULE_0__.MyException(404, {
                "msg": "Single Selection Mode, Selected Items cannot have more than one item."
              });
            } else {
              this.selectedItems = value;
            }
          } catch (e) {
            console.error(e.body.msg);
          }
        }
      } else {
        if (this.settings.limitSelection) {
          this.selectedItems = value.slice(0, this.settings.limitSelection);
        } else {
          this.selectedItems = value;
        }
        if (this.selectedItems.length === this.data.length && this.data.length > 0) {
          this.isSelectAll = true;
        }
        if (this.settings.groupBy) {
          this.groupedData = this.transformData(this.data, this.settings.groupBy);
          this.groupCachedItems = this.cloneArray(this.groupedData);
        }
      }
    } else {
      this.selectedItems = [];
    }
  }
  //From ControlValueAccessor interface
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  //From ControlValueAccessor interface
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  trackByFn(index, item) {
    return item[this.settings.primaryKey];
  }
  isSelected(clickedItem) {
    if (clickedItem.disabled) {
      return false;
    }
    let found = false;
    this.selectedItems && this.selectedItems.forEach(item => {
      if (clickedItem[this.settings.primaryKey] === item[this.settings.primaryKey]) {
        found = true;
      }
    });
    return found;
  }
  addSelected(item) {
    if (item.disabled) {
      return;
    }
    if (this.settings.singleSelection) {
      this.selectedItems = [];
      this.selectedItems.push(item);
      this.closeDropdown();
    } else this.selectedItems.push(item);
    this.onChangeCallback(this.selectedItems);
    this.onTouchedCallback(this.selectedItems);
  }
  removeSelected(clickedItem) {
    this.selectedItems && this.selectedItems.forEach(item => {
      if (clickedItem[this.settings.primaryKey] === item[this.settings.primaryKey]) {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
    });
    this.onChangeCallback(this.selectedItems);
    this.onTouchedCallback(this.selectedItems);
  }
  toggleDropdown(evt) {
    if (this.settings.disabled) {
      return;
    }
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
    if (this.settings.lazyLoading) {
      this.virtualdata = this.data;
      this.virtualScroollInit = true;
    }
    evt.preventDefault();
  }
  openDropdown() {
    if (this.settings.disabled) {
      return;
    }
    this.isActive = true;
    this.calculateDropdownDirection();
    if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
      }, 0);
    }
    this.onOpen.emit(true);
  }
  closeDropdown() {
    if (this.searchInput && this.settings.lazyLoading) {
      this.searchInput.nativeElement.value = "";
    }
    if (this.searchInput) {
      this.searchInput.nativeElement.value = "";
    }
    this.filter = "";
    this.isActive = false;
    this.searchTerm$.next('');
    this.onClose.emit(false);
  }
  closeDropdownOnClickOut() {
    if (this.isActive) {
      if (this.searchInput && this.settings.lazyLoading) {
        this.searchInput.nativeElement.value = "";
      }
      if (this.searchInput) {
        this.searchInput.nativeElement.value = "";
      }
      this.filter = "";
      this.isActive = false;
      this.clearSearch();
      this.searchTerm$.next('');
      this.onClose.emit(false);
    }
  }
  toggleSelectAll(event) {
    if (!this.isSelectAll) {
      this.selectedItems = [];
      if (this.settings.groupBy) {
        this.groupedData.forEach(obj => {
          obj.selected = !obj.disabled;
        });
        this.groupCachedItems.forEach(obj => {
          obj.selected = !obj.disabled;
        });
      }
      // this.selectedItems = this.data.slice();
      this.selectedItems = this.data.filter(individualData => !individualData.disabled);
      this.isSelectAll = true;
      this.onChangeCallback(this.selectedItems);
      this.onTouchedCallback(this.selectedItems);
      this.onSelectAll.emit(this.selectedItems);
    } else {
      if (this.settings.groupBy) {
        this.groupedData.forEach(obj => {
          obj.selected = false;
        });
        this.groupCachedItems.forEach(obj => {
          obj.selected = false;
        });
      }
      this.selectedItems = [];
      this.isSelectAll = false;
      this.onChangeCallback(this.selectedItems);
      this.onTouchedCallback(this.selectedItems);
      this.onDeSelectAll.emit(this.selectedItems);
    }
    setTimeout(() => {
      this.calculateDropdownDirection();
    });
    event.stopPropagation();
  }
  filterGroupedList() {
    if (this.filter == "" || this.filter == null) {
      this.clearSearch();
      return;
    }
    this.groupedData = this.cloneArray(this.groupCachedItems);
    this.groupedData = this.groupedData.filter(obj => {
      let arr = [];
      if (obj[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
        arr = obj.list;
      } else {
        arr = obj.list.filter(t => {
          return t[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
        });
      }
      obj.list = arr;
      if (obj[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
        return arr;
      } else {
        return arr.some(cat => {
          return cat[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
        });
      }
    });
  }
  toggleFilterSelectAll() {
    if (!this.isFilterSelectAll) {
      let added = [];
      if (this.settings.groupBy) {
        this.groupedData.forEach(item => {
          item.sele;
          if (item.list) {
            item.list.forEach(el => {
              if (!this.isSelected(el)) {
                this.addSelected(el);
                added.push(el);
              }
            });
          }
          this.updateGroupInfo(item);
        });
        this.filteredList.forEach(el => {
          if (!this.isSelected(el) && !el.hasOwnProperty('grpTitle')) {
            this.addSelected(el);
            added.push(el);
          }
        });
      } else {
        this.filteredList.forEach(item => {
          if (!this.isSelected(item)) {
            this.addSelected(item);
            added.push(item);
          }
        });
      }
      this.isFilterSelectAll = true;
      this.onFilterSelectAll.emit(added);
    } else {
      let removed = [];
      if (this.settings.groupBy) {
        this.groupedData.forEach(item => {
          if (item.list) {
            item.list.forEach(el => {
              if (this.isSelected(el)) {
                this.removeSelected(el);
                removed.push(el);
              }
            });
          }
          this.updateGroupInfo(item);
        });
        this.filteredList.forEach(el => {
          if (this.isSelected(el)) {
            this.removeSelected(el);
            removed.push(el);
          }
        });
      } else {
        this.filteredList.forEach(item => {
          if (this.isSelected(item)) {
            this.removeSelected(item);
            removed.push(item);
          }
        });
      }
      this.isFilterSelectAll = false;
      this.onFilterDeSelectAll.emit(removed);
    }
  }
  toggleInfiniteFilterSelectAll() {
    if (!this.isInfiniteFilterSelectAll) {
      this.virtualdata.forEach(item => {
        if (!this.isSelected(item)) {
          this.addSelected(item);
        }
      });
      this.isInfiniteFilterSelectAll = true;
    } else {
      this.virtualdata.forEach(item => {
        if (this.isSelected(item)) {
          this.removeSelected(item);
        }
      });
      this.isInfiniteFilterSelectAll = false;
    }
  }
  clearSearch() {
    if (this.settings.groupBy) {
      this.groupedData = [];
      this.groupedData = this.cloneArray(this.groupCachedItems);
    }
    this.filter = "";
    this.isFilterSelectAll = false;
    this.searchTerm$.next('');
    this.data = this.cachedItems;
  }
  onFilterChange(data) {
    if (this.filter && this.filter == "" || data.length == 0) {
      this.isFilterSelectAll = false;
      this.data = this.cachedItems.slice();
    }
    let cnt = 0;
    data.forEach(item => {
      if (!item.hasOwnProperty('grpTitle') && this.isSelected(item)) {
        cnt++;
      }
    });
    if (cnt > 0 && this.filterLength == cnt) {
      this.isFilterSelectAll = true;
    } else if (cnt > 0 && this.filterLength != cnt) {
      this.isFilterSelectAll = false;
    }
    this.data = data;
  }
  cloneArray(arr) {
    let i, copy;
    if (Array.isArray(arr)) {
      return JSON.parse(JSON.stringify(arr));
    } else if (typeof arr === 'object') {
      throw 'Cannot clone array containing an object!';
    } else {
      return arr;
    }
  }
  updateGroupInfo(item) {
    if (item.disabled) {
      return;
    }
    let key = this.settings.groupBy;
    this.groupedData.forEach(obj => {
      let cnt = 0;
      if (obj.grpTitle && item[key] == obj[key]) {
        if (obj.list) {
          obj.list.forEach(el => {
            if (this.isSelected(el)) {
              cnt++;
            }
          });
        }
      }
      if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
        obj.selected = true;
      } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
        obj.selected = false;
      }
    });
    this.groupCachedItems.forEach(obj => {
      let cnt = 0;
      if (obj.grpTitle && item[key] == obj[key]) {
        if (obj.list) {
          obj.list.forEach(el => {
            if (this.isSelected(el)) {
              cnt++;
            }
          });
        }
      }
      if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
        obj.selected = true;
      } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
        obj.selected = false;
      }
    });
  }
  transformData(arr, field) {
    const groupedObj = arr.reduce((prev, cur) => {
      if (!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});
    const tempArr = [];
    Object.keys(groupedObj).map(x => {
      let obj = {};
      let disabledChildrens = [];
      obj["grpTitle"] = true;
      obj[this.settings.labelKey] = x;
      obj[this.settings.groupBy] = x;
      obj['selected'] = false;
      obj['list'] = [];
      let cnt = 0;
      groupedObj[x].forEach(item => {
        item['list'] = [];
        if (item.disabled) {
          this.isDisabledItemPresent = true;
          disabledChildrens.push(item);
        }
        obj.list.push(item);
        if (this.isSelected(item)) {
          cnt++;
        }
      });
      if (cnt == obj.list.length) {
        obj.selected = true;
      } else {
        obj.selected = false;
      }
      // Check if current group item's all childrens are disabled or not
      obj['disabled'] = disabledChildrens.length === groupedObj[x].length;
      tempArr.push(obj);
      // obj.list.forEach((item: any) => {
      //     tempArr.push(item);
      // });
    });

    return tempArr;
  }
  filterInfiniteList(evt) {
    let filteredElems = [];
    if (this.settings.groupBy) {
      this.groupedData = this.groupCachedItems.slice();
    } else {
      this.data = this.cachedItems.slice();
      this.virtualdata = this.cachedItems.slice();
    }
    if ((evt != null || evt != '') && !this.settings.groupBy) {
      if (this.settings.searchBy.length > 0) {
        for (let t = 0; t < this.settings.searchBy.length; t++) {
          this.virtualdata.filter(el => {
            if (el[this.settings.searchBy[t].toString()].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
              filteredElems.push(el);
            }
          });
        }
      } else {
        this.virtualdata.filter(function (el) {
          for (let prop in el) {
            if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
              filteredElems.push(el);
              break;
            }
          }
        });
      }
      this.virtualdata = [];
      this.virtualdata = filteredElems;
      this.infiniteFilterLength = this.virtualdata.length;
    }
    if (evt.toString() != '' && this.settings.groupBy) {
      this.groupedData.filter(function (el) {
        if (el.hasOwnProperty('grpTitle')) {
          filteredElems.push(el);
        } else {
          for (let prop in el) {
            if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
              filteredElems.push(el);
              break;
            }
          }
        }
      });
      this.groupedData = [];
      this.groupedData = filteredElems;
      this.infiniteFilterLength = this.groupedData.length;
    } else if (evt.toString() == '' && this.cachedItems.length > 0) {
      this.virtualdata = [];
      this.virtualdata = this.cachedItems;
      this.infiniteFilterLength = 0;
    }
    if (this.virtualScroller) {
      this.virtualScroller.refresh();
    }
  }
  resetInfiniteSearch() {
    this.filter = "";
    this.isInfiniteFilterSelectAll = false;
    this.virtualdata = [];
    this.virtualdata = this.cachedItems;
    this.groupedData = this.groupCachedItems;
    this.searchTerm$.next('');
    this.infiniteFilterLength = 0;
  }
  onScrollEnd(e) {
    if (e.endIndex === this.data.length - 1 || e.startIndex === 0) {}
    this.onScrollToEnd.emit(e);
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  selectGroup(item) {
    if (item.disabled) {
      return;
    }
    if (item.selected) {
      item.selected = false;
      item.list.forEach(obj => {
        this.removeSelected(obj);
      });
      this.onGroupDeSelect.emit(item);
      this.updateGroupInfo(item);
    } else {
      item.selected = true;
      item.list.forEach(obj => {
        if (!this.isSelected(obj)) {
          this.addSelected(obj);
        }
      });
      this.onGroupSelect.emit(item);
      this.updateGroupInfo(item);
    }
  }
  addFilterNewItem() {
    this.onAddFilterNewItem.emit(this.filter);
    this.filterPipe.transform(this.data, this.filter, this.settings.searchBy);
  }
  calculateDropdownDirection() {
    let shouldOpenTowardsTop = this.settings.position == 'top';
    const elem = this.cuppaDropdown.nativeElement;
    const dropdownWidth = elem.clientWidth;
    this.dropDownWidth = dropdownWidth;
    this.dropDownLeft = this.settings.tagToBody ? elem.getBoundingClientRect().x : 'unset';
    if (this.settings.position == 'top' && !this.settings.autoPosition) {
      this.openTowardsTop(true);
    } else if (this.settings.position == 'bottom' && !this.settings.autoPosition) {
      this.openTowardsTop(false);
    }
    if (this.settings.autoPosition) {
      const dropdownHeight = this.defaultSettings.maxHeight;
      const viewportHeight = document.documentElement.clientHeight;
      const selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();
      const spaceOnTop = selectedListBounds.top;
      const spaceOnBottom = viewportHeight - selectedListBounds.top;
      if (spaceOnBottom < spaceOnTop && dropdownHeight < spaceOnTop) {
        this.openTowardsTop(true);
      } else {
        this.openTowardsTop(false);
      }
      // Keep preference if there is not enough space on either the top or bottom
      /* 			if (spaceOnTop || spaceOnBottom) {
                      if (shouldOpenTowardsTop) {
                          shouldOpenTowardsTop = spaceOnTop;
                      } else {
                          shouldOpenTowardsTop = !spaceOnBottom;
                      }
                  } */
    }
  }

  openTowardsTop(value) {
    const elem = this.cuppaDropdown.nativeElement;
    if (value && this.selectedListElem.nativeElement.clientHeight) {
      this.dropdownListYOffset = 15 - this.selectedListElem.nativeElement.clientHeight;
      if (this.settings.tagToBody) {
        this.dropDownTop = elem.getBoundingClientRect().y - this.selectedListElem.nativeElement.clientHeight * 2 - 15 - this.defaultSettings.maxHeight + 'px';
      } else {
        this.dropDownBottom = this.selectedListElem.nativeElement.clientHeight + 15 + 'px';
      }
      this.settings.position = 'top';
    } else {
      if (this.settings.tagToBody) {
        this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1 + 'px';
      } else {
        this.dropDownTop = 'unset';
        this.dropDownBottom = 'unset';
      }
      this.dropdownListYOffset = 0;
      this.settings.position = 'bottom';
    }
  }
  clearSelection(e) {
    if (this.settings.groupBy) {
      this.groupCachedItems.forEach(obj => {
        obj.selected = false;
      });
    }
    this.clearSearch();
    this.selectedItems = [];
    this.isSelectAll = false;
    this.onChangeCallback(this.selectedItems);
    this.onTouchedCallback(this.selectedItems);
    this.onDeSelectAll.emit(this.selectedItems);
  }
  filteritems(evt) {
    this.filteredList = this.filterPipe.transform(this.cachedItems, evt.target.value, this.settings.searchBy);
    if (this.filteredList) {
      let len = 0;
      this.filteredList.forEach((obj, i) => {
        if (obj.disabled) {
          this.isDisabledItemPresent = true;
        }
        if (!obj.hasOwnProperty('grpTitle')) {
          len++;
        }
      });
      this.filterLength = len;
    }
    this.onFilterChange(this.filteredList);
  }
}
_class = AngularMultiSelect;
_class.ɵfac = function AngularMultiSelect_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_list_filter__WEBPACK_IMPORTED_MODULE_2__.ListFilterPipe));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["angular2-multiselect"]],
  contentQueries: function AngularMultiSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Item, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Badge, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Search, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.itemTempl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.badgeTempl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchTempl = _t.first);
    }
  },
  viewQuery: function AngularMultiSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.selectedListElem = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dropdownListElem = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.cuppaDropdown = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function AngularMultiSelect_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.escape", function AngularMultiSelect_keyup_escape_HostBindingHandler($event) {
        return ctx.onEscapeDown($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("scroll", function AngularMultiSelect_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.defaultSettings.classes);
    }
  },
  inputs: {
    data: "data",
    settings: "settings",
    loading: "loading"
  },
  outputs: {
    onSelect: "onSelect",
    onDeSelect: "onDeSelect",
    onSelectAll: "onSelectAll",
    onDeSelectAll: "onDeSelectAll",
    onOpen: "onOpen",
    onClose: "onClose",
    onScrollToEnd: "onScrollToEnd",
    onFilterSelectAll: "onFilterSelectAll",
    onFilterDeSelectAll: "onFilterDeSelectAll",
    onAddFilterNewItem: "onAddFilterNewItem",
    onGroupSelect: "onGroupSelect",
    onGroupDeSelect: "onGroupDeSelect"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 33,
  vars: 50,
  consts: [[1, "cuppa-dropdown", 3, "clickOutside"], ["cuppaDropdown", ""], [1, "selected-list"], ["selectedList", ""], [1, "c-btn", 3, "ngClass", "click"], [4, "ngIf"], ["class", "c-list", 4, "ngIf"], ["class", "countplaceholder", 4, "ngIf"], ["class", "c-remove clear-all", 3, "click", 4, "ngIf"], ["class", "c-angle-down", 4, "ngIf"], ["class", "c-angle-up", 4, "ngIf"], [1, "dropdown-list", "animated", "fadeIn", 3, "ngClass", "hidden"], ["dropdownList", ""], [1, "arrow-2", 3, "ngClass"], [3, "ngClass"], [1, "list-area", 3, "ngClass"], ["class", "pure-checkbox select-all", 4, "ngIf"], ["class", "loading-icon", "src", "assets/img/loading.gif", 4, "ngIf"], ["class", "list-filter", 4, "ngIf"], ["class", "filter-select-all", 4, "ngIf"], ["style", "overflow: auto;", 3, "maxHeight", 4, "ngIf"], ["class", "list-message", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-list"], ["class", "c-token", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token"], ["class", "c-label", 4, "ngIf"], [1, "c-remove", 3, "click"], [3, "name"], [1, "c-label"], [3, "data", "item"], ["class", "c-token", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token", 3, "hidden"], [1, "countplaceholder"], [1, "c-remove", "clear-all", 3, "click"], [1, "c-angle-down"], [1, "c-angle-up"], [1, "pure-checkbox", "select-all"], ["type", "checkbox", 3, "checked", "disabled", "id", "change", 4, "ngIf"], [3, "for"], [3, "hidden"], ["type", "checkbox", 3, "checked", "disabled", "id", "change"], ["src", "assets/img/loading.gif", 1, "loading-icon"], [1, "list-filter"], ["id", "searchIcon", 1, "c-search"], ["class", "c-clear", 3, "hidden", "click", 4, "ngIf"], ["class", "c-input", "type", "text", "aria-labelledby", "searchIcon", 3, "placeholder", "ngModel", "ngModelChange", "keyup", 4, "ngIf"], [3, "data", "item", 4, "ngIf"], [1, "c-clear", 3, "hidden", "click"], ["type", "text", "aria-labelledby", "searchIcon", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["searchInput", ""], [1, "filter-select-all"], ["class", "pure-checkbox select-all", 3, "click", 4, "ngIf"], [1, "pure-checkbox", "select-all", 3, "click"], ["type", "checkbox", "aria-labelledby", "optionName", "aria-label", "option", 3, "checked", "disabled"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled"], ["class", "btn-container", 4, "ngIf"], [1, "btn-container"], [1, "c-btn", "btn-iceblue", 3, "click"], [2, "overflow", "auto"], [1, "lazyContainer"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pure-checkbox", 3, "ngClass", "click"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled", 4, "ngIf"], ["virtualScroller", "", 1, "lazyContainer", 3, "enableUnequalChildrenSizes", "items", "ngStyle", "vsStart", "vsEnd"], ["scroll", ""], ["type", "checkbox", 3, "checked", "disabled", 4, "ngIf"], ["type", "checkbox", 3, "checked", "disabled"], ["scroll2", ""], ["scroll3", ""], [4, "ngFor", "ngForOf"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngIf"], ["class", "pure-checkbox", 3, "ngClass", 4, "ngIf"], [1, "pure-checkbox", 3, "ngClass"], [3, "items", "ngStyle", "vsUpdate", "vsEnd"], ["scroll4", ""], [1, "list-message"]],
  template: function AngularMultiSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("clickOutside", function AngularMultiSelect_Template_div_clickOutside_0_listener() {
        return ctx.closeDropdownOnClickOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2, 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AngularMultiSelect_Template_div_click_4_listener($event) {
        return ctx.toggleDropdown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AngularMultiSelect_span_5_Template, 2, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AngularMultiSelect_span_6_Template, 2, 2, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AngularMultiSelect_span_7_Template, 2, 2, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AngularMultiSelect_div_8_Template, 2, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AngularMultiSelect_span_9_Template, 2, 1, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AngularMultiSelect_span_10_Template, 2, 1, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AngularMultiSelect_span_11_Template, 2, 1, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AngularMultiSelect_span_12_Template, 2, 1, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "div", 13)(16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AngularMultiSelect_div_18_Template, 7, 6, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AngularMultiSelect_img_19_Template, 1, 0, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AngularMultiSelect_div_20_Template, 9, 7, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AngularMultiSelect_div_21_Template, 3, 2, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AngularMultiSelect_div_22_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AngularMultiSelect_div_23_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AngularMultiSelect_div_24_Template, 3, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AngularMultiSelect_div_25_Template, 4, 8, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AngularMultiSelect_div_26_Template, 3, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, AngularMultiSelect_div_27_Template, 4, 8, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AngularMultiSelect_div_28_Template, 4, 8, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, AngularMultiSelect_div_29_Template, 3, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AngularMultiSelect_div_30_Template, 5, 12, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, AngularMultiSelect_div_31_Template, 3, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, AngularMultiSelect_h5_32_Template, 2, 1, "h5", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](38, _c9, ctx.settings.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("tabindex", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.singleSelection && !ctx.badgeTempl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && ctx.settings.singleSelection && ctx.badgeTempl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.singleSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > ctx.settings.badgeShowLimit);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.clearAll && (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx.dropDownWidth, "px")("top", ctx.dropDownTop)("bottom", ctx.dropDownBottom)("left", ctx.dropDownLeft, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](40, _c10, ctx.settings.tagToBody))("hidden", !ctx.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](42, _c11, ctx.settings.position == "bottom", ctx.settings.position == "top"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](45, _c11, ctx.settings.position == "bottom", ctx.settings.position == "top"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](48, _c12, ctx.settings.singleSelection));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.enableCheckAll && !ctx.settings.singleSelection && !ctx.settings.limitSelection && (ctx.data == null ? null : ctx.data.length) > 0 && !ctx.isDisabledItemPresent);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.enableSearchFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent && !ctx.settings.singleSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.filter == null ? null : ctx.filter.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.length) == 0);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerComponent, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective, _menu_item__WEBPACK_IMPORTED_MODULE_3__.TemplateRenderer, _menu_item__WEBPACK_IMPORTED_MODULE_3__.CIcon];
  },
  styles: ["virtual-scroll {\n  display: block;\n  width: 100%;\n}\n\n.cuppa-dropdown {\n  position: relative;\n}\n\n.c-btn {\n  display: inline-block;\n  border-width: 1px;\n  line-height: 1.25;\n  border-radius: 3px;\n  font-size: 0.85rem;\n  padding: 5px 10px;\n  cursor: pointer;\n  align-items: center;\n  min-height: 38px;\n}\n\n.c-btn.disabled {\n  background: #ccc;\n}\n\n.selected-list .c-list {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  width: calc(100% - 20px);\n}\n.selected-list .c-list .c-token {\n  list-style: none;\n  padding: 4px 8px;\n  /*background: $base-color; */\n  /*color: $token-color;*/\n  border-radius: 2px;\n  margin-right: 4px;\n  margin-top: 2px;\n  float: left;\n  position: relative;\n  padding-right: 22px;\n}\n.selected-list .c-list .c-token .c-label {\n  display: block;\n  float: left;\n}\n.selected-list .c-list .c-token .c-remove {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.selected-list .c-list .c-token .c-remove svg {\n  fill: #fff;\n}\n.selected-list .fa-angle-down,\n.selected-list .fa-angle-up {\n  font-size: 15pt;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.selected-list .c-angle-down,\n.selected-list .c-angle-up {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.selected-list .c-angle-down svg,\n.selected-list .c-angle-up svg {\n  fill: #333;\n}\n.selected-list .countplaceholder {\n  position: absolute;\n  right: 45px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.selected-list .c-btn {\n  width: 100%;\n  /*        box-shadow: 0px 1px 5px $box-shadow-color;\n  */\n  padding: 5px 10px;\n  cursor: pointer;\n  display: flex;\n  position: relative;\n}\n.selected-list .c-btn .c-icon {\n  position: absolute;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.dropdown-list.tagToBody {\n  position: fixed;\n}\n\n.dropdown-list {\n  position: absolute;\n  padding-top: 14px;\n  width: 100%;\n  z-index: 99999;\n}\n.dropdown-list ul {\n  padding: 0px;\n  list-style: none;\n  overflow: auto;\n  margin: 0px;\n}\n.dropdown-list ul li {\n  padding: 10px 10px;\n  cursor: pointer;\n  text-align: left;\n}\n.dropdown-list ul li:first-child {\n  padding-top: 10px;\n}\n.dropdown-list ul li:last-child {\n  padding-bottom: 10px;\n}\n.dropdown-list ul li:hover {\n  /*background: $list-hover-background;*/\n}\n.dropdown-list ::-webkit-scrollbar {\n  width: 8px;\n}\n.dropdown-list ::-webkit-scrollbar-thumb {\n  background: #cccccc;\n  border-radius: 5px;\n}\n.dropdown-list ::-webkit-scrollbar-track {\n  background: #f2f2f2;\n}\n\n.arrow-up,\n.arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 15px solid #fff;\n  margin-left: 15px;\n  position: absolute;\n  top: 0;\n}\n\n.arrow-down {\n  bottom: -14px;\n  top: unset;\n  transform: rotate(180deg);\n}\n\n.arrow-2 {\n  border-bottom: 15px solid #ccc;\n  top: -1px;\n}\n\n.arrow-down.arrow-2 {\n  top: unset;\n  bottom: -16px;\n}\n\n.list-area {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  margin: 0px;\n  /*box-shadow: 0px 1px 5px $box-shadow-color;*/\n}\n\n.select-all {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  text-align: left;\n}\n\n.list-filter {\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  padding-left: 35px;\n  height: 35px;\n}\n.list-filter input {\n  border: 0px;\n  width: 100%;\n  height: 100%;\n  padding: 0px;\n}\n.list-filter input:focus {\n  outline: none;\n}\n.list-filter .c-search {\n  position: absolute;\n  top: 4px;\n  left: 10px;\n  width: 15px;\n  height: 15px;\n}\n.list-filter .c-search svg {\n  fill: #888;\n}\n.list-filter .c-clear {\n  position: absolute;\n  top: 4px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n}\n.list-filter .c-clear svg {\n  fill: #888;\n}\n\n.pure-checkbox input[type=checkbox] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.pure-checkbox input[type=checkbox]:focus + label:before,\n.pure-checkbox input[type=checkbox]:hover + label:before {\n  /*border-color: $base-color;*/\n  background-color: none;\n}\n\n.pure-checkbox input[type=checkbox]:active + label:before {\n  transition-duration: 0s;\n}\n\n.pure-checkbox input[type=checkbox]:disabled + label {\n  color: #cccccc;\n}\n\n.pure-checkbox input[type=checkbox] + label {\n  position: relative;\n  padding-left: 2em;\n  vertical-align: middle;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin: 0px;\n  /*color: $label-color;*/\n  font-weight: 300;\n}\n\n.pure-checkbox input[type=checkbox] + label:before {\n  box-sizing: content-box;\n  content: \"\";\n  /*color: $base-color;*/\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 15px;\n  height: 15px;\n  margin-top: -9px;\n  /*border: 2px solid $base-color;*/\n  text-align: center;\n  transition: all 0.4s ease;\n  border-radius: 3px;\n}\n\n.pure-checkbox input[type=checkbox] + label:after {\n  box-sizing: content-box;\n  content: \"\";\n  /*background-color: $base-color;*/\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 15px;\n  height: 15px;\n  margin-top: -9px;\n  transform: scale(0);\n  transform-origin: 50%;\n  transition: transform 200ms ease-out;\n}\n\n.pure-checkbox input[type=checkbox]:disabled + label:before {\n  border-color: #cccccc;\n}\n\n.pure-checkbox input[type=checkbox]:disabled:focus + label:before .pure-checkbox input[type=checkbox]:disabled:hover + label:before {\n  background-color: inherit;\n}\n\n.pure-checkbox input[type=checkbox]:disabled:checked + label:before {\n  background-color: #cccccc;\n}\n\n.pure-checkbox input[type=checkbox] + label:after {\n  background-color: transparent;\n  top: 50%;\n  left: 3px;\n  width: 9px;\n  height: 4px;\n  margin-top: -5px;\n  border-style: solid;\n  border-width: 0 0 2px 2px;\n  border-image: none;\n  transform: rotate(-45deg) scale(0);\n}\n\n.pure-checkbox input[type=checkbox]:checked + label:after {\n  content: \"\";\n  transform: rotate(-45deg) scale(1);\n  transition: transform 200ms ease-out;\n}\n\n.pure-checkbox input[type=radio]:checked + label:before {\n  background-color: white;\n}\n\n.pure-checkbox input[type=radio]:checked + label:after {\n  transform: scale(1);\n}\n\n.pure-checkbox input[type=radio] + label:before {\n  border-radius: 50%;\n}\n\n.pure-checkbox input[type=checkbox]:checked + label:before {\n  /*background: $base-color;*/\n}\n\n.pure-checkbox input[type=checkbox]:checked + label:after {\n  transform: rotate(-45deg) scale(1);\n}\n\n.list-message {\n  text-align: center;\n  margin: 0px;\n  padding: 15px 0px;\n  font-size: initial;\n}\n\n.list-grp {\n  padding: 0 15px !important;\n}\n\n.list-grp h4 {\n  text-transform: capitalize;\n  margin: 15px 0px 0px 0px;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.list-grp > li {\n  padding-left: 15px !important;\n}\n\n.selected-item {\n  /*background: $selected-background;*/\n}\n\n.grp-item {\n  padding-left: 30px !important;\n}\n\n.grp-title {\n  padding-bottom: 0px !important;\n}\n\n.grp-title label {\n  margin-bottom: 0px !important;\n  font-weight: 800;\n  text-transform: capitalize;\n}\n\n.grp-title:hover {\n  background: none !important;\n}\n\n.loading-icon {\n  width: 20px;\n  position: absolute;\n  right: 10px;\n  top: 23px;\n  z-index: 1;\n}\n\n.nodata-label {\n  width: 100%;\n  text-align: center;\n  padding: 10px 0px 0px;\n}\n\n.btn-container {\n  text-align: center;\n  padding: 5px 5px 5px;\n}\n\n.clear-all {\n  width: 8px;\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2FuZ3VsYXIyLW11bHRpc2VsZWN0LWRyb3Bkb3duLWxpYi9zcmMvbGliL211bHRpc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBQUo7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUFSO0FBR007RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FBRFI7QUFHUTtFQUNFLFVBQUE7QUFEVjtBQU9FOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFMSjtBQVFFOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFOSjtBQVFJOztFQUNFLFVBQUE7QUFMTjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBUEo7QUFVRTtFQUNFLFdBQUE7RUFDQTtHQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUko7QUFVSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQVJOOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBUkY7QUFVRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBUko7QUFVSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUk47QUFXSTtFQUNFLGlCQUFBO0FBVE47QUFZSTtFQUNFLG9CQUFBO0FBVk47QUFhSTtFQUNFLHNDQUFBO0FBWE47QUFlRTtFQUNFLFVBQUE7QUFiSjtBQWdCRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFkSjtBQWlCRTtFQUNFLG1CQUFBO0FBZko7O0FBbUJBOztFQUVFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUFoQkY7O0FBbUJBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSw4QkFBQTtFQUNBLFNBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFoQkY7O0FBbUJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0FBaEJGOztBQW1CQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBaEJGOztBQW1CQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFoQkY7QUFrQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBaEJKO0FBbUJFO0VBQ0UsYUFBQTtBQWpCSjtBQW9CRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWxCSjtBQW9CSTtFQUNFLFVBQUE7QUFsQk47QUFzQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFwQko7QUFzQkk7RUFDRSxVQUFBO0FBcEJOOztBQXlCQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBdEJGOztBQXlCQTs7RUFFRSw2QkFBQTtFQUNBLHNCQUFBO0FBdEJGOztBQXlCQTtFQUNFLHVCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGNBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxxQkFBQTtBQXRCRjs7QUF5QkE7RUFFRSx5QkFBQTtBQXZCRjs7QUEwQkE7RUFDRSx5QkFBQTtBQXZCRjs7QUEwQkE7RUFDRSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBdkJGOztBQTBCQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0FBdkJGOztBQTBCQTtFQUNFLHVCQUFBO0FBdkJGOztBQTBCQTtFQUNFLG1CQUFBO0FBdkJGOztBQTBCQTtFQUNFLGtCQUFBO0FBdkJGOztBQTBCQTtFQUNFLDJCQUFBO0FBdkJGOztBQTBCQTtFQUNFLGtDQUFBO0FBdkJGOztBQTBCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsMEJBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSw2QkFBQTtBQXZCRjs7QUEwQkE7RUFDRSxvQ0FBQTtBQXZCRjs7QUEwQkE7RUFDRSw2QkFBQTtBQXZCRjs7QUEwQkE7RUFDRSw4QkFBQTtBQXZCRjs7QUEwQkE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsMkJBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBdkJGOztBQTBCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBdkJGOztBQTBCQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUF2QkY7O0FBNkJBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQTFCRiIsInNvdXJjZXNDb250ZW50IjpbInZpcnR1YWwtc2Nyb2xsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmN1cHBhLWRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jLWJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMzhweDtcclxufVxyXG5cclxuLmMtYnRuLmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtbGlzdCB7XHJcbiAgLmMtbGlzdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG5cclxuICAgIC5jLXRva2VuIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgLypiYWNrZ3JvdW5kOiAkYmFzZS1jb2xvcjsgKi9cclxuICAgICAgLypjb2xvcjogJHRva2VuLWNvbG9yOyovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjJweDtcclxuXHJcbiAgICAgIC5jLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmMtcmVtb3ZlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgd2lkdGg6IDhweDtcclxuXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIGZpbGw6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmEtYW5nbGUtZG93bixcclxuICAuZmEtYW5nbGUtdXAge1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcblxyXG4gIC5jLWFuZ2xlLWRvd24sXHJcbiAgLmMtYW5nbGUtdXAge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgZmlsbDogIzMzMztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb3VudHBsYWNlaG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0NXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG5cclxuICAuYy1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiovXHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmMtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRyb3Bkb3duLWxpc3QudGFnVG9Cb2R5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmRyb3Bkb3duLWxpc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nLXRvcDogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuXHJcbiAgdWwge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBsaTpob3ZlciB7XHJcbiAgICAgIC8qYmFja2dyb3VuZDogJGxpc3QtaG92ZXItYmFja2dyb3VuZDsqL1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIH1cclxufVxyXG5cclxuLmFycm93LXVwLFxyXG4uYXJyb3ctZG93biB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmFycm93LWRvd24ge1xyXG4gIGJvdHRvbTogLTE0cHg7XHJcbiAgdG9wOiB1bnNldDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uYXJyb3ctMiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjY2NjO1xyXG4gIHRvcDogLTFweDtcclxufVxyXG5cclxuLmFycm93LWRvd24uYXJyb3ctMiB7XHJcbiAgdG9wOiB1bnNldDtcclxuICBib3R0b206IC0xNnB4O1xyXG59XHJcblxyXG4ubGlzdC1hcmVhIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIC8qYm94LXNoYWRvdzogMHB4IDFweCA1cHggJGJveC1zaGFkb3ctY29sb3I7Ki9cclxufVxyXG5cclxuLnNlbGVjdC1hbGwge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmxpc3QtZmlsdGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYy1zZWFyY2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgZmlsbDogIzg4ODtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jLWNsZWFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBmaWxsOiAjODg4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBib3JkZXI6IDA7XHJcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBtYXJnaW46IC0xcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMXB4O1xyXG59XHJcblxyXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXHJcbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpob3ZlciArIGxhYmVsOmJlZm9yZSB7XHJcbiAgLypib3JkZXItY29sb3I6ICRiYXNlLWNvbG9yOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxufVxyXG5cclxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmFjdGl2ZSArIGxhYmVsOmJlZm9yZSB7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XHJcbn1cclxuXHJcbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCArIGxhYmVsIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICAvKmNvbG9yOiAkbGFiZWwtY29sb3I7Ki9cclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIC8qY29sb3I6ICRiYXNlLWNvbG9yOyovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IC05cHg7XHJcbiAgLypib3JkZXI6IDJweCBzb2xpZCAkYmFzZS1jb2xvcjsqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7Ki9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTlweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6Zm9jdXMgKyBsYWJlbDpiZWZvcmVcclxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmhvdmVyICsgbGFiZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDNweDtcclxuICB3aWR0aDogOXB4O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAgMCAycHggMnB4O1xyXG4gIGJvcmRlci1pbWFnZTogbm9uZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApO1xyXG59XHJcblxyXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIC8qYmFja2dyb3VuZDogJGJhc2UtY29sb3I7Ki9cclxufVxyXG5cclxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcclxufVxyXG5cclxuLmxpc3QtbWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xyXG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxufVxyXG5cclxuLmxpc3QtZ3JwIHtcclxuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3QtZ3JwIGg0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBtYXJnaW46IDE1cHggMHB4IDBweCAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5saXN0LWdycCA+IGxpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdGVkLWl0ZW0ge1xyXG4gIC8qYmFja2dyb3VuZDogJHNlbGVjdGVkLWJhY2tncm91bmQ7Ki9cclxufVxyXG5cclxuLmdycC1pdGVtIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdycC10aXRsZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JwLXRpdGxlIGxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uZ3JwLXRpdGxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWljb24ge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDIzcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5vZGF0YS1sYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggNXB4IDVweDtcclxufVxyXG5cclxuLmJ0bi1pY2VibHVlIHtcclxufVxyXG5cclxuLmNsZWFyLWFsbCB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});
class AngularMultiSelectModule {}
_class2 = AngularMultiSelectModule;
_class2.ɵfac = function AngularMultiSelectModule_Factory(t) {
  return new (t || _class2)();
};
_class2.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class2
});
_class2.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_multiselect_service__WEBPACK_IMPORTED_MODULE_4__.DataService, _list_filter__WEBPACK_IMPORTED_MODULE_2__.ListFilterPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AngularMultiSelectModule, {
    declarations: [AngularMultiSelect, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ScrollDirective, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.styleDirective, _list_filter__WEBPACK_IMPORTED_MODULE_2__.ListFilterPipe, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Item, _menu_item__WEBPACK_IMPORTED_MODULE_3__.TemplateRenderer, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Badge, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Search, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.setPosition, _menu_item__WEBPACK_IMPORTED_MODULE_3__.CIcon],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerModule],
    exports: [AngularMultiSelect, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.ScrollDirective, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.styleDirective, _list_filter__WEBPACK_IMPORTED_MODULE_2__.ListFilterPipe, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Item, _menu_item__WEBPACK_IMPORTED_MODULE_3__.TemplateRenderer, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Badge, _menu_item__WEBPACK_IMPORTED_MODULE_3__.Search, _clickOutside__WEBPACK_IMPORTED_MODULE_1__.setPosition, _menu_item__WEBPACK_IMPORTED_MODULE_3__.CIcon]
  });
})();

/***/ }),

/***/ 7326:
/*!*********************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.model.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyException: () => (/* binding */ MyException)
/* harmony export */ });
class MyException {
  constructor(status, body) {
    this.status = status;
    this.body = body;
  }
}

/***/ }),

/***/ 9843:
/*!***********************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class DataService {
  constructor() {
    this.filteredData = [];
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  setData(data) {
    this.filteredData = data;
    this.subject.next(data);
  }
  getData() {
    return this.subject.asObservable();
  }
  getFilteredData() {
    if (this.filteredData && this.filteredData.length > 0) {
      return this.filteredData;
    } else {
      return [];
    }
  }
}
_class = DataService;
_class.ɵfac = function DataService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 6011:
/*!*********************************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/virtual-scroll/virtual-scroll.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   VirtualScrollerComponent: () => (/* binding */ VirtualScrollerComponent),
/* harmony export */   VirtualScrollerModule: () => (/* binding */ VirtualScrollerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tweenjs/tween.js */ 4309);
var _class, _class2;






const _c0 = ["header"];
const _c1 = ["container"];
const _c2 = ["content"];
const _c3 = ["invisiblePadding"];
const _c4 = ["*"];
function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY() {
  return {
    scrollThrottlingTime: 0,
    scrollDebounceTime: 0,
    scrollAnimationTime: 750,
    checkResizeInterval: 1000,
    resizeBypassRefreshThreshold: 5,
    modifyOverflowStyleOfParentScroll: true,
    stripedTable: false
  };
}
class VirtualScrollerComponent {
  get viewPortInfo() {
    let pageInfo = this.previousViewPort || {};
    return {
      startIndex: pageInfo.startIndex || 0,
      endIndex: pageInfo.endIndex || 0,
      scrollStartPosition: pageInfo.scrollStartPosition || 0,
      scrollEndPosition: pageInfo.scrollEndPosition || 0,
      maxScrollPosition: pageInfo.maxScrollPosition || 0,
      startIndexWithBuffer: pageInfo.startIndexWithBuffer || 0,
      endIndexWithBuffer: pageInfo.endIndexWithBuffer || 0
    };
  }
  get enableUnequalChildrenSizes() {
    return this._enableUnequalChildrenSizes;
  }
  set enableUnequalChildrenSizes(value) {
    if (this._enableUnequalChildrenSizes === value) {
      return;
    }
    this._enableUnequalChildrenSizes = value;
    this.minMeasuredChildWidth = undefined;
    this.minMeasuredChildHeight = undefined;
  }
  get bufferAmount() {
    if (typeof this._bufferAmount === 'number' && this._bufferAmount >= 0) {
      return this._bufferAmount;
    } else {
      return this.enableUnequalChildrenSizes ? 5 : 0;
    }
  }
  set bufferAmount(value) {
    this._bufferAmount = value;
  }
  get scrollThrottlingTime() {
    return this._scrollThrottlingTime;
  }
  set scrollThrottlingTime(value) {
    this._scrollThrottlingTime = value;
    this.updateOnScrollFunction();
  }
  get scrollDebounceTime() {
    return this._scrollDebounceTime;
  }
  set scrollDebounceTime(value) {
    this._scrollDebounceTime = value;
    this.updateOnScrollFunction();
  }
  updateOnScrollFunction() {
    if (this.scrollDebounceTime) {
      this.onScroll = this.debounce(() => {
        this.refresh_internal(false);
      }, this.scrollDebounceTime);
    } else if (this.scrollThrottlingTime) {
      this.onScroll = this.throttleTrailing(() => {
        this.refresh_internal(false);
      }, this.scrollThrottlingTime);
    } else {
      this.onScroll = () => {
        this.refresh_internal(false);
      };
    }
  }
  get checkResizeInterval() {
    return this._checkResizeInterval;
  }
  set checkResizeInterval(value) {
    if (this._checkResizeInterval === value) {
      return;
    }
    this._checkResizeInterval = value;
    this.addScrollEventHandlers();
  }
  get items() {
    return this._items;
  }
  set items(value) {
    if (value === this._items) {
      return;
    }
    this._items = value || [];
    this.refresh_internal(true);
  }
  get horizontal() {
    return this._horizontal;
  }
  set horizontal(value) {
    this._horizontal = value;
    this.updateDirection();
  }
  revertParentOverscroll() {
    const scrollElement = this.getScrollElement();
    if (scrollElement && this.oldParentScrollOverflow) {
      scrollElement.style['overflow-y'] = this.oldParentScrollOverflow.y;
      scrollElement.style['overflow-x'] = this.oldParentScrollOverflow.x;
    }
    this.oldParentScrollOverflow = undefined;
  }
  get parentScroll() {
    return this._parentScroll;
  }
  set parentScroll(value) {
    if (this._parentScroll === value) {
      return;
    }
    this.revertParentOverscroll();
    this._parentScroll = value;
    this.addScrollEventHandlers();
    const scrollElement = this.getScrollElement();
    if (this.modifyOverflowStyleOfParentScroll && scrollElement !== this.element.nativeElement) {
      this.oldParentScrollOverflow = {
        x: scrollElement.style['overflow-x'],
        y: scrollElement.style['overflow-y']
      };
      scrollElement.style['overflow-y'] = this.horizontal ? 'visible' : 'auto';
      scrollElement.style['overflow-x'] = this.horizontal ? 'auto' : 'visible';
    }
  }
  ngOnInit() {
    this.addScrollEventHandlers();
  }
  ngOnDestroy() {
    this.removeScrollEventHandlers();
    this.revertParentOverscroll();
  }
  ngOnChanges(changes) {
    let indexLengthChanged = this.cachedItemsLength !== this.items.length;
    this.cachedItemsLength = this.items.length;
    const firstRun = !changes.items || !changes.items.previousValue || changes.items.previousValue.length === 0;
    this.refresh_internal(indexLengthChanged || firstRun);
  }
  ngDoCheck() {
    if (this.cachedItemsLength !== this.items.length) {
      this.cachedItemsLength = this.items.length;
      this.refresh_internal(true);
      return;
    }
    if (this.previousViewPort && this.viewPortItems && this.viewPortItems.length > 0) {
      let itemsArrayChanged = false;
      for (let i = 0; i < this.viewPortItems.length; ++i) {
        if (!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer + i], this.viewPortItems[i])) {
          itemsArrayChanged = true;
          break;
        }
      }
      if (itemsArrayChanged) {
        this.refresh_internal(true);
      }
    }
  }
  refresh() {
    this.refresh_internal(true);
  }
  invalidateAllCachedMeasurements() {
    this.wrapGroupDimensions = {
      maxChildSizePerWrapGroup: [],
      numberOfKnownWrapGroupChildSizes: 0,
      sumOfKnownWrapGroupChildWidths: 0,
      sumOfKnownWrapGroupChildHeights: 0
    };
    this.minMeasuredChildWidth = undefined;
    this.minMeasuredChildHeight = undefined;
    this.refresh_internal(false);
  }
  invalidateCachedMeasurementForItem(item) {
    if (this.enableUnequalChildrenSizes) {
      let index = this.items && this.items.indexOf(item);
      if (index >= 0) {
        this.invalidateCachedMeasurementAtIndex(index);
      }
    } else {
      this.minMeasuredChildWidth = undefined;
      this.minMeasuredChildHeight = undefined;
    }
    this.refresh_internal(false);
  }
  invalidateCachedMeasurementAtIndex(index) {
    if (this.enableUnequalChildrenSizes) {
      let cachedMeasurement = this.wrapGroupDimensions.maxChildSizePerWrapGroup[index];
      if (cachedMeasurement) {
        this.wrapGroupDimensions.maxChildSizePerWrapGroup[index] = undefined;
        --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= cachedMeasurement.childWidth || 0;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= cachedMeasurement.childHeight || 0;
      }
    } else {
      this.minMeasuredChildWidth = undefined;
      this.minMeasuredChildHeight = undefined;
    }
    this.refresh_internal(false);
  }
  scrollInto(item, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    let index = this.items.indexOf(item);
    if (index === -1) {
      return;
    }
    this.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
  }
  scrollToIndex(index, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    let maxRetries = 5;
    let retryIfNeeded = () => {
      --maxRetries;
      if (maxRetries <= 0) {
        if (animationCompletedCallback) {
          animationCompletedCallback();
        }
        return;
      }
      let dimensions = this.calculateDimensions();
      let desiredStartIndex = Math.min(Math.max(index, 0), dimensions.itemCount - 1);
      if (this.previousViewPort.startIndex === desiredStartIndex) {
        if (animationCompletedCallback) {
          animationCompletedCallback();
        }
        return;
      }
      this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, 0, retryIfNeeded);
    };
    this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, animationMilliseconds, retryIfNeeded);
  }
  scrollToIndex_internal(index, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
    let dimensions = this.calculateDimensions();
    let scroll = this.calculatePadding(index, dimensions) + additionalOffset;
    if (!alignToBeginning) {
      scroll -= dimensions.wrapGroupsPerPage * dimensions[this._childScrollDim];
    }
    this.scrollToPosition(scroll, animationMilliseconds, animationCompletedCallback);
  }
  scrollToPosition(scrollPosition, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    scrollPosition += this.getElementsOffset();
    animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
    let scrollElement = this.getScrollElement();
    let animationRequest;
    if (this.currentTween) {
      this.currentTween.stop();
      this.currentTween = undefined;
    }
    if (!animationMilliseconds) {
      this.renderer.setProperty(scrollElement, this._scrollType, scrollPosition);
      this.refresh_internal(false, animationCompletedCallback);
      return;
    }
    const tweenConfigObj = {
      scrollPosition: scrollElement[this._scrollType]
    };
    let newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__.Tween(tweenConfigObj).to({
      scrollPosition
    }, animationMilliseconds).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__.Easing.Quadratic.Out).onUpdate(data => {
      if (isNaN(data.scrollPosition)) {
        return;
      }
      this.renderer.setProperty(scrollElement, this._scrollType, data.scrollPosition);
      this.refresh_internal(false);
    }).onStop(() => {
      cancelAnimationFrame(animationRequest);
    }).start();
    const animate = time => {
      if (!newTween["isPlaying"]()) {
        return;
      }
      newTween.update(time);
      if (tweenConfigObj.scrollPosition === scrollPosition) {
        this.refresh_internal(false, animationCompletedCallback);
        return;
      }
      this.zone.runOutsideAngular(() => {
        animationRequest = requestAnimationFrame(animate);
      });
    };
    animate();
    this.currentTween = newTween;
  }
  constructor(element, renderer, zone, changeDetectorRef, platformId, options) {
    this.element = element;
    this.renderer = renderer;
    this.zone = zone;
    this.changeDetectorRef = changeDetectorRef;
    this.window = window;
    this.executeRefreshOutsideAngularZone = false;
    this._enableUnequalChildrenSizes = false;
    this.useMarginInsteadOfTranslate = false;
    this.ssrViewportWidth = 1920;
    this.ssrViewportHeight = 1080;
    this._bufferAmount = 0;
    this._items = [];
    this.compareItems = (item1, item2) => item1 === item2;
    this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.calculatedScrollbarWidth = 0;
    this.calculatedScrollbarHeight = 0;
    this.padding = 0;
    this.previousViewPort = {};
    this.cachedPageSize = 0;
    this.previousScrollNumberElements = 0;
    this.isAngularUniversalSSR = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(platformId);
    this.scrollThrottlingTime = options.scrollThrottlingTime;
    this.scrollDebounceTime = options.scrollDebounceTime;
    this.scrollAnimationTime = options.scrollAnimationTime;
    this.scrollbarWidth = options.scrollbarWidth;
    this.scrollbarHeight = options.scrollbarHeight;
    this.checkResizeInterval = options.checkResizeInterval;
    this.resizeBypassRefreshThreshold = options.resizeBypassRefreshThreshold;
    this.modifyOverflowStyleOfParentScroll = options.modifyOverflowStyleOfParentScroll;
    this.stripedTable = options.stripedTable;
    this.horizontal = false;
    this.resetWrapGroupDimensions();
  }
  getElementSize(element) {
    let result = element.getBoundingClientRect();
    let styles = getComputedStyle(element);
    let marginTop = parseInt(styles['margin-top'], 10) || 0;
    let marginBottom = parseInt(styles['margin-bottom'], 10) || 0;
    let marginLeft = parseInt(styles['margin-left'], 10) || 0;
    let marginRight = parseInt(styles['margin-right'], 10) || 0;
    return {
      top: result.top + marginTop,
      bottom: result.bottom + marginBottom,
      left: result.left + marginLeft,
      right: result.right + marginRight,
      width: result.width + marginLeft + marginRight,
      height: result.height + marginTop + marginBottom
    };
  }
  checkScrollElementResized() {
    let boundingRect = this.getElementSize(this.getScrollElement());
    let sizeChanged;
    if (!this.previousScrollBoundingRect) {
      sizeChanged = true;
    } else {
      let widthChange = Math.abs(boundingRect.width - this.previousScrollBoundingRect.width);
      let heightChange = Math.abs(boundingRect.height - this.previousScrollBoundingRect.height);
      sizeChanged = widthChange > this.resizeBypassRefreshThreshold || heightChange > this.resizeBypassRefreshThreshold;
    }
    if (sizeChanged) {
      this.previousScrollBoundingRect = boundingRect;
      if (boundingRect.width > 0 && boundingRect.height > 0) {
        this.refresh_internal(false);
      }
    }
  }
  updateDirection() {
    if (this.horizontal) {
      this._invisiblePaddingProperty = 'width';
      this._offsetType = 'offsetLeft';
      this._pageOffsetType = 'pageXOffset';
      this._childScrollDim = 'childWidth';
      this._marginDir = 'margin-left';
      this._translateDir = 'translateX';
      this._scrollType = 'scrollLeft';
    } else {
      this._invisiblePaddingProperty = 'height';
      this._offsetType = 'offsetTop';
      this._pageOffsetType = 'pageYOffset';
      this._childScrollDim = 'childHeight';
      this._marginDir = 'margin-top';
      this._translateDir = 'translateY';
      this._scrollType = 'scrollTop';
    }
  }
  debounce(func, wait) {
    const throttled = this.throttleTrailing(func, wait);
    const result = function () {
      throttled['cancel']();
      throttled.apply(this, arguments);
    };
    result['cancel'] = function () {
      throttled['cancel']();
    };
    return result;
  }
  throttleTrailing(func, wait) {
    let timeout = undefined;
    let _arguments = arguments;
    const result = function () {
      const _this = this;
      _arguments = arguments;
      if (timeout) {
        return;
      }
      if (wait <= 0) {
        func.apply(_this, _arguments);
      } else {
        timeout = setTimeout(function () {
          timeout = undefined;
          func.apply(_this, _arguments);
        }, wait);
      }
    };
    result['cancel'] = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
      }
    };
    return result;
  }
  refresh_internal(itemsArrayModified, refreshCompletedCallback = undefined, maxRunTimes = 2) {
    //note: maxRunTimes is to force it to keep recalculating if the previous iteration caused a re-render (different sliced items in viewport or scrollPosition changed).
    //The default of 2x max will probably be accurate enough without causing too large a performance bottleneck
    //The code would typically quit out on the 2nd iteration anyways. The main time it'd think more than 2 runs would be necessary would be for vastly different sized child items or if this is the 1st time the items array was initialized.
    //Without maxRunTimes, If the user is actively scrolling this code would become an infinite loop until they stopped scrolling. This would be okay, except each scroll event would start an additional infinte loop. We want to short-circuit it to prevent this.
    if (itemsArrayModified && this.previousViewPort && this.previousViewPort.scrollStartPosition > 0) {
      //if items were prepended, scroll forward to keep same items visible
      let oldViewPort = this.previousViewPort;
      let oldViewPortItems = this.viewPortItems;
      let oldRefreshCompletedCallback = refreshCompletedCallback;
      refreshCompletedCallback = () => {
        let scrollLengthDelta = this.previousViewPort.scrollLength - oldViewPort.scrollLength;
        if (scrollLengthDelta > 0 && this.viewPortItems) {
          let oldStartItem = oldViewPortItems[0];
          let oldStartItemIndex = this.items.findIndex(x => this.compareItems(oldStartItem, x));
          if (oldStartItemIndex > this.previousViewPort.startIndexWithBuffer) {
            let itemOrderChanged = false;
            for (let i = 1; i < this.viewPortItems.length; ++i) {
              if (!this.compareItems(this.items[oldStartItemIndex + i], oldViewPortItems[i])) {
                itemOrderChanged = true;
                break;
              }
            }
            if (!itemOrderChanged) {
              this.scrollToPosition(this.previousViewPort.scrollStartPosition + scrollLengthDelta, 0, oldRefreshCompletedCallback);
              return;
            }
          }
        }
        if (oldRefreshCompletedCallback) {
          oldRefreshCompletedCallback();
        }
      };
    }
    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        if (itemsArrayModified) {
          this.resetWrapGroupDimensions();
        }
        let viewport = this.calculateViewport();
        let startChanged = itemsArrayModified || viewport.startIndex !== this.previousViewPort.startIndex;
        let endChanged = itemsArrayModified || viewport.endIndex !== this.previousViewPort.endIndex;
        let scrollLengthChanged = viewport.scrollLength !== this.previousViewPort.scrollLength;
        let paddingChanged = viewport.padding !== this.previousViewPort.padding;
        let scrollPositionChanged = viewport.scrollStartPosition !== this.previousViewPort.scrollStartPosition || viewport.scrollEndPosition !== this.previousViewPort.scrollEndPosition || viewport.maxScrollPosition !== this.previousViewPort.maxScrollPosition;
        this.previousViewPort = viewport;
        if (scrollLengthChanged) {
          this.renderer.setStyle(this.invisiblePaddingElementRef.nativeElement, this._invisiblePaddingProperty, `${viewport.scrollLength}px`);
        }
        if (paddingChanged) {
          if (this.useMarginInsteadOfTranslate) {
            this.renderer.setStyle(this.contentElementRef.nativeElement, this._marginDir, `${viewport.padding}px`);
          } else {
            this.renderer.setStyle(this.contentElementRef.nativeElement, 'transform', `${this._translateDir}(${viewport.padding}px)`);
            this.renderer.setStyle(this.contentElementRef.nativeElement, 'webkitTransform', `${this._translateDir}(${viewport.padding}px)`);
          }
        }
        if (this.headerElementRef) {
          let scrollPosition = this.getScrollElement()[this._scrollType];
          let containerOffset = this.getElementsOffset();
          let offset = Math.max(scrollPosition - viewport.padding - containerOffset + this.headerElementRef.nativeElement.clientHeight, 0);
          this.renderer.setStyle(this.headerElementRef.nativeElement, 'transform', `${this._translateDir}(${offset}px)`);
          this.renderer.setStyle(this.headerElementRef.nativeElement, 'webkitTransform', `${this._translateDir}(${offset}px)`);
        }
        const changeEventArg = startChanged || endChanged ? {
          startIndex: viewport.startIndex,
          endIndex: viewport.endIndex,
          scrollStartPosition: viewport.scrollStartPosition,
          scrollEndPosition: viewport.scrollEndPosition,
          startIndexWithBuffer: viewport.startIndexWithBuffer,
          endIndexWithBuffer: viewport.endIndexWithBuffer,
          maxScrollPosition: viewport.maxScrollPosition
        } : undefined;
        if (startChanged || endChanged || scrollPositionChanged) {
          const handleChanged = () => {
            // update the scroll list to trigger re-render of components in viewport
            this.viewPortItems = viewport.startIndexWithBuffer >= 0 && viewport.endIndexWithBuffer >= 0 ? this.items.slice(viewport.startIndexWithBuffer, viewport.endIndexWithBuffer + 1) : [];
            this.vsUpdate.emit(this.viewPortItems);
            if (startChanged) {
              this.vsStart.emit(changeEventArg);
            }
            if (endChanged) {
              this.vsEnd.emit(changeEventArg);
            }
            if (startChanged || endChanged) {
              this.changeDetectorRef.markForCheck();
              this.vsChange.emit(changeEventArg);
            }
            if (maxRunTimes > 0) {
              this.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
              return;
            }
            if (refreshCompletedCallback) {
              refreshCompletedCallback();
            }
          };
          if (this.executeRefreshOutsideAngularZone) {
            handleChanged();
          } else {
            this.zone.run(handleChanged);
          }
        } else {
          if (maxRunTimes > 0 && (scrollLengthChanged || paddingChanged)) {
            this.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
            return;
          }
          if (refreshCompletedCallback) {
            refreshCompletedCallback();
          }
        }
      });
    });
  }
  getScrollElement() {
    return this.parentScroll instanceof Window ? document.scrollingElement || document.documentElement || document.body : this.parentScroll || this.element.nativeElement;
  }
  addScrollEventHandlers() {
    if (this.isAngularUniversalSSR) {
      return;
    }
    let scrollElement = this.getScrollElement();
    this.removeScrollEventHandlers();
    this.zone.runOutsideAngular(() => {
      if (this.parentScroll instanceof Window) {
        this.disposeScrollHandler = this.renderer.listen('window', 'scroll', this.onScroll);
        this.disposeResizeHandler = this.renderer.listen('window', 'resize', this.onScroll);
      } else {
        this.disposeScrollHandler = this.renderer.listen(scrollElement, 'scroll', this.onScroll);
        if (this._checkResizeInterval > 0) {
          this.checkScrollElementResizedTimer = setInterval(() => {
            this.checkScrollElementResized();
          }, this._checkResizeInterval);
        }
      }
    });
  }
  removeScrollEventHandlers() {
    if (this.checkScrollElementResizedTimer) {
      clearInterval(this.checkScrollElementResizedTimer);
    }
    if (this.disposeScrollHandler) {
      this.disposeScrollHandler();
      this.disposeScrollHandler = undefined;
    }
    if (this.disposeResizeHandler) {
      this.disposeResizeHandler();
      this.disposeResizeHandler = undefined;
    }
  }
  getElementsOffset() {
    if (this.isAngularUniversalSSR) {
      return 0;
    }
    let offset = 0;
    if (this.containerElementRef && this.containerElementRef.nativeElement) {
      offset += this.containerElementRef.nativeElement[this._offsetType];
    }
    if (this.parentScroll) {
      let scrollElement = this.getScrollElement();
      let elementClientRect = this.getElementSize(this.element.nativeElement);
      let scrollClientRect = this.getElementSize(scrollElement);
      if (this.horizontal) {
        offset += elementClientRect.left - scrollClientRect.left;
      } else {
        offset += elementClientRect.top - scrollClientRect.top;
      }
      if (!(this.parentScroll instanceof Window)) {
        offset += scrollElement[this._scrollType];
      }
    }
    return offset;
  }
  countItemsPerWrapGroup() {
    if (this.isAngularUniversalSSR) {
      return Math.round(this.horizontal ? this.ssrViewportHeight / this.ssrChildHeight : this.ssrViewportWidth / this.ssrChildWidth);
    }
    let propertyName = this.horizontal ? 'offsetLeft' : 'offsetTop';
    let children = (this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement).children;
    let childrenLength = children ? children.length : 0;
    if (childrenLength === 0) {
      return 1;
    }
    let firstOffset = children[0][propertyName];
    let result = 1;
    while (result < childrenLength && firstOffset === children[result][propertyName]) {
      ++result;
    }
    return result;
  }
  getScrollStartPosition() {
    let windowScrollValue = undefined;
    if (this.parentScroll instanceof Window) {
      windowScrollValue = window[this._pageOffsetType];
    }
    return windowScrollValue || this.getScrollElement()[this._scrollType] || 0;
  }
  resetWrapGroupDimensions() {
    const oldWrapGroupDimensions = this.wrapGroupDimensions;
    this.invalidateAllCachedMeasurements();
    if (!this.enableUnequalChildrenSizes || !oldWrapGroupDimensions || oldWrapGroupDimensions.numberOfKnownWrapGroupChildSizes === 0) {
      return;
    }
    const itemsPerWrapGroup = this.countItemsPerWrapGroup();
    for (let wrapGroupIndex = 0; wrapGroupIndex < oldWrapGroupDimensions.maxChildSizePerWrapGroup.length; ++wrapGroupIndex) {
      const oldWrapGroupDimension = oldWrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];
      if (!oldWrapGroupDimension || !oldWrapGroupDimension.items || !oldWrapGroupDimension.items.length) {
        continue;
      }
      if (oldWrapGroupDimension.items.length !== itemsPerWrapGroup) {
        return;
      }
      let itemsChanged = false;
      let arrayStartIndex = itemsPerWrapGroup * wrapGroupIndex;
      for (let i = 0; i < itemsPerWrapGroup; ++i) {
        if (!this.compareItems(oldWrapGroupDimension.items[i], this.items[arrayStartIndex + i])) {
          itemsChanged = true;
          break;
        }
      }
      if (!itemsChanged) {
        ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += oldWrapGroupDimension.childWidth || 0;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += oldWrapGroupDimension.childHeight || 0;
        this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = oldWrapGroupDimension;
      }
    }
  }
  calculateDimensions() {
    let scrollElement = this.getScrollElement();
    const maxCalculatedScrollBarSize = 25; // Note: Formula to auto-calculate doesn't work for ParentScroll, so we default to this if not set by consuming application
    this.calculatedScrollbarHeight = Math.max(Math.min(scrollElement.offsetHeight - scrollElement.clientHeight, maxCalculatedScrollBarSize), this.calculatedScrollbarHeight);
    this.calculatedScrollbarWidth = Math.max(Math.min(scrollElement.offsetWidth - scrollElement.clientWidth, maxCalculatedScrollBarSize), this.calculatedScrollbarWidth);
    let viewportWidth = scrollElement.offsetWidth - (this.scrollbarWidth || this.calculatedScrollbarWidth || (this.horizontal ? 0 : maxCalculatedScrollBarSize));
    let viewportHeight = scrollElement.offsetHeight - (this.scrollbarHeight || this.calculatedScrollbarHeight || (this.horizontal ? maxCalculatedScrollBarSize : 0));
    let content = this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement;
    let itemsPerWrapGroup = this.countItemsPerWrapGroup();
    let wrapGroupsPerPage;
    let defaultChildWidth;
    let defaultChildHeight;
    if (this.isAngularUniversalSSR) {
      viewportWidth = this.ssrViewportWidth;
      viewportHeight = this.ssrViewportHeight;
      defaultChildWidth = this.ssrChildWidth;
      defaultChildHeight = this.ssrChildHeight;
      let itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
      let itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
      wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
    } else if (!this.enableUnequalChildrenSizes) {
      if (content.children.length > 0) {
        if (!this.childWidth || !this.childHeight) {
          if (!this.minMeasuredChildWidth && viewportWidth > 0) {
            this.minMeasuredChildWidth = viewportWidth;
          }
          if (!this.minMeasuredChildHeight && viewportHeight > 0) {
            this.minMeasuredChildHeight = viewportHeight;
          }
        }
        let child = content.children[0];
        let clientRect = this.getElementSize(child);
        this.minMeasuredChildWidth = Math.min(this.minMeasuredChildWidth, clientRect.width);
        this.minMeasuredChildHeight = Math.min(this.minMeasuredChildHeight, clientRect.height);
      }
      defaultChildWidth = this.childWidth || this.minMeasuredChildWidth || viewportWidth;
      defaultChildHeight = this.childHeight || this.minMeasuredChildHeight || viewportHeight;
      let itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
      let itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
      wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
    } else {
      let scrollOffset = scrollElement[this._scrollType] - (this.previousViewPort ? this.previousViewPort.padding : 0);
      let arrayStartIndex = this.previousViewPort.startIndexWithBuffer || 0;
      let wrapGroupIndex = Math.ceil(arrayStartIndex / itemsPerWrapGroup);
      let maxWidthForWrapGroup = 0;
      let maxHeightForWrapGroup = 0;
      let sumOfVisibleMaxWidths = 0;
      let sumOfVisibleMaxHeights = 0;
      wrapGroupsPerPage = 0;
      for (let i = 0; i < content.children.length; ++i) {
        ++arrayStartIndex;
        let child = content.children[i];
        let clientRect = this.getElementSize(child);
        maxWidthForWrapGroup = Math.max(maxWidthForWrapGroup, clientRect.width);
        maxHeightForWrapGroup = Math.max(maxHeightForWrapGroup, clientRect.height);
        if (arrayStartIndex % itemsPerWrapGroup === 0) {
          let oldValue = this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];
          if (oldValue) {
            --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= oldValue.childWidth || 0;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= oldValue.childHeight || 0;
          }
          ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
          const items = this.items.slice(arrayStartIndex - itemsPerWrapGroup, arrayStartIndex);
          this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = {
            childWidth: maxWidthForWrapGroup,
            childHeight: maxHeightForWrapGroup,
            items: items
          };
          this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += maxWidthForWrapGroup;
          this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += maxHeightForWrapGroup;
          if (this.horizontal) {
            let maxVisibleWidthForWrapGroup = Math.min(maxWidthForWrapGroup, Math.max(viewportWidth - sumOfVisibleMaxWidths, 0));
            if (scrollOffset > 0) {
              let scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleWidthForWrapGroup);
              maxVisibleWidthForWrapGroup -= scrollOffsetToRemove;
              scrollOffset -= scrollOffsetToRemove;
            }
            sumOfVisibleMaxWidths += maxVisibleWidthForWrapGroup;
            if (maxVisibleWidthForWrapGroup > 0 && viewportWidth >= sumOfVisibleMaxWidths) {
              ++wrapGroupsPerPage;
            }
          } else {
            let maxVisibleHeightForWrapGroup = Math.min(maxHeightForWrapGroup, Math.max(viewportHeight - sumOfVisibleMaxHeights, 0));
            if (scrollOffset > 0) {
              let scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleHeightForWrapGroup);
              maxVisibleHeightForWrapGroup -= scrollOffsetToRemove;
              scrollOffset -= scrollOffsetToRemove;
            }
            sumOfVisibleMaxHeights += maxVisibleHeightForWrapGroup;
            if (maxVisibleHeightForWrapGroup > 0 && viewportHeight >= sumOfVisibleMaxHeights) {
              ++wrapGroupsPerPage;
            }
          }
          ++wrapGroupIndex;
          maxWidthForWrapGroup = 0;
          maxHeightForWrapGroup = 0;
        }
      }
      let averageChildWidth = this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
      let averageChildHeight = this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
      defaultChildWidth = this.childWidth || averageChildWidth || viewportWidth;
      defaultChildHeight = this.childHeight || averageChildHeight || viewportHeight;
      if (this.horizontal) {
        if (viewportWidth > sumOfVisibleMaxWidths) {
          wrapGroupsPerPage += Math.ceil((viewportWidth - sumOfVisibleMaxWidths) / defaultChildWidth);
        }
      } else {
        if (viewportHeight > sumOfVisibleMaxHeights) {
          wrapGroupsPerPage += Math.ceil((viewportHeight - sumOfVisibleMaxHeights) / defaultChildHeight);
        }
      }
    }
    let itemCount = this.items.length;
    let itemsPerPage = itemsPerWrapGroup * wrapGroupsPerPage;
    let pageCount_fractional = itemCount / itemsPerPage;
    let numberOfWrapGroups = Math.ceil(itemCount / itemsPerWrapGroup);
    let scrollLength = 0;
    let defaultScrollLengthPerWrapGroup = this.horizontal ? defaultChildWidth : defaultChildHeight;
    if (this.enableUnequalChildrenSizes) {
      let numUnknownChildSizes = 0;
      for (let i = 0; i < numberOfWrapGroups; ++i) {
        let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
        if (childSize) {
          scrollLength += childSize;
        } else {
          ++numUnknownChildSizes;
        }
      }
      scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
    } else {
      scrollLength = numberOfWrapGroups * defaultScrollLengthPerWrapGroup;
    }
    if (this.headerElementRef) {
      scrollLength += this.headerElementRef.nativeElement.clientHeight;
    }
    let viewportLength = this.horizontal ? viewportWidth : viewportHeight;
    let maxScrollPosition = Math.max(scrollLength - viewportLength, 0);
    return {
      itemCount: itemCount,
      itemsPerWrapGroup: itemsPerWrapGroup,
      wrapGroupsPerPage: wrapGroupsPerPage,
      itemsPerPage: itemsPerPage,
      pageCount_fractional: pageCount_fractional,
      childWidth: defaultChildWidth,
      childHeight: defaultChildHeight,
      scrollLength: scrollLength,
      viewportLength: viewportLength,
      maxScrollPosition: maxScrollPosition
    };
  }
  calculatePadding(arrayStartIndexWithBuffer, dimensions) {
    if (dimensions.itemCount === 0) {
      return 0;
    }
    let defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
    let startingWrapGroupIndex = Math.floor(arrayStartIndexWithBuffer / dimensions.itemsPerWrapGroup) || 0;
    if (!this.enableUnequalChildrenSizes) {
      return defaultScrollLengthPerWrapGroup * startingWrapGroupIndex;
    }
    let numUnknownChildSizes = 0;
    let result = 0;
    for (let i = 0; i < startingWrapGroupIndex; ++i) {
      let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
      if (childSize) {
        result += childSize;
      } else {
        ++numUnknownChildSizes;
      }
    }
    result += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
    return result;
  }
  calculatePageInfo(scrollPosition, dimensions) {
    let scrollPercentage = 0;
    if (this.enableUnequalChildrenSizes) {
      const numberOfWrapGroups = Math.ceil(dimensions.itemCount / dimensions.itemsPerWrapGroup);
      let totalScrolledLength = 0;
      let defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
      for (let i = 0; i < numberOfWrapGroups; ++i) {
        let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
        if (childSize) {
          totalScrolledLength += childSize;
        } else {
          totalScrolledLength += defaultScrollLengthPerWrapGroup;
        }
        if (scrollPosition < totalScrolledLength) {
          scrollPercentage = i / numberOfWrapGroups;
          break;
        }
      }
    } else {
      scrollPercentage = scrollPosition / dimensions.scrollLength;
    }
    let startingArrayIndex_fractional = Math.min(Math.max(scrollPercentage * dimensions.pageCount_fractional, 0), dimensions.pageCount_fractional) * dimensions.itemsPerPage;
    let maxStart = dimensions.itemCount - dimensions.itemsPerPage - 1;
    let arrayStartIndex = Math.min(Math.floor(startingArrayIndex_fractional), maxStart);
    arrayStartIndex -= arrayStartIndex % dimensions.itemsPerWrapGroup; // round down to start of wrapGroup
    if (this.stripedTable) {
      let bufferBoundary = 2 * dimensions.itemsPerWrapGroup;
      if (arrayStartIndex % bufferBoundary !== 0) {
        arrayStartIndex = Math.max(arrayStartIndex - arrayStartIndex % bufferBoundary, 0);
      }
    }
    let arrayEndIndex = Math.ceil(startingArrayIndex_fractional) + dimensions.itemsPerPage - 1;
    let endIndexWithinWrapGroup = (arrayEndIndex + 1) % dimensions.itemsPerWrapGroup;
    if (endIndexWithinWrapGroup > 0) {
      arrayEndIndex += dimensions.itemsPerWrapGroup - endIndexWithinWrapGroup; // round up to end of wrapGroup
    }

    if (isNaN(arrayStartIndex)) {
      arrayStartIndex = 0;
    }
    if (isNaN(arrayEndIndex)) {
      arrayEndIndex = 0;
    }
    arrayStartIndex = Math.min(Math.max(arrayStartIndex, 0), dimensions.itemCount - 1);
    arrayEndIndex = Math.min(Math.max(arrayEndIndex, 0), dimensions.itemCount - 1);
    let bufferSize = this.bufferAmount * dimensions.itemsPerWrapGroup;
    let startIndexWithBuffer = Math.min(Math.max(arrayStartIndex - bufferSize, 0), dimensions.itemCount - 1);
    let endIndexWithBuffer = Math.min(Math.max(arrayEndIndex + bufferSize, 0), dimensions.itemCount - 1);
    return {
      startIndex: arrayStartIndex,
      endIndex: arrayEndIndex,
      startIndexWithBuffer: startIndexWithBuffer,
      endIndexWithBuffer: endIndexWithBuffer,
      scrollStartPosition: scrollPosition,
      scrollEndPosition: scrollPosition + dimensions.viewportLength,
      maxScrollPosition: dimensions.maxScrollPosition
    };
  }
  calculateViewport() {
    let dimensions = this.calculateDimensions();
    let offset = this.getElementsOffset();
    let scrollStartPosition = this.getScrollStartPosition();
    if (scrollStartPosition > dimensions.scrollLength + offset && !(this.parentScroll instanceof Window)) {
      scrollStartPosition = dimensions.scrollLength;
    } else {
      scrollStartPosition -= offset;
    }
    scrollStartPosition = Math.max(0, scrollStartPosition);
    let pageInfo = this.calculatePageInfo(scrollStartPosition, dimensions);
    let newPadding = this.calculatePadding(pageInfo.startIndexWithBuffer, dimensions);
    let newScrollLength = dimensions.scrollLength;
    return {
      startIndex: pageInfo.startIndex,
      endIndex: pageInfo.endIndex,
      startIndexWithBuffer: pageInfo.startIndexWithBuffer,
      endIndexWithBuffer: pageInfo.endIndexWithBuffer,
      padding: Math.round(newPadding),
      scrollLength: Math.round(newScrollLength),
      scrollStartPosition: pageInfo.scrollStartPosition,
      scrollEndPosition: pageInfo.scrollEndPosition,
      maxScrollPosition: pageInfo.maxScrollPosition
    };
  }
}
_class = VirtualScrollerComponent;
_class.ɵfac = function VirtualScrollerComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('virtual-scroller-default-options', 8));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["virtual-scroller"], ["", "virtualScroller", ""]],
  contentQueries: function VirtualScrollerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
    }
  },
  viewQuery: function VirtualScrollerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.invisiblePaddingElementRef = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function VirtualScrollerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("horizontal", ctx.horizontal)("vertical", !ctx.horizontal)("selfScroll", !ctx.parentScroll);
    }
  },
  inputs: {
    executeRefreshOutsideAngularZone: "executeRefreshOutsideAngularZone",
    enableUnequalChildrenSizes: "enableUnequalChildrenSizes",
    useMarginInsteadOfTranslate: "useMarginInsteadOfTranslate",
    modifyOverflowStyleOfParentScroll: "modifyOverflowStyleOfParentScroll",
    stripedTable: "stripedTable",
    scrollbarWidth: "scrollbarWidth",
    scrollbarHeight: "scrollbarHeight",
    childWidth: "childWidth",
    childHeight: "childHeight",
    ssrChildWidth: "ssrChildWidth",
    ssrChildHeight: "ssrChildHeight",
    ssrViewportWidth: "ssrViewportWidth",
    ssrViewportHeight: "ssrViewportHeight",
    bufferAmount: "bufferAmount",
    scrollAnimationTime: "scrollAnimationTime",
    resizeBypassRefreshThreshold: "resizeBypassRefreshThreshold",
    scrollThrottlingTime: "scrollThrottlingTime",
    scrollDebounceTime: "scrollDebounceTime",
    checkResizeInterval: "checkResizeInterval",
    items: "items",
    compareItems: "compareItems",
    horizontal: "horizontal",
    parentScroll: "parentScroll"
  },
  outputs: {
    vsUpdate: "vsUpdate",
    vsChange: "vsChange",
    vsStart: "vsStart",
    vsEnd: "vsEnd"
  },
  exportAs: ["virtualScroller"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 0,
  consts: [[1, "total-padding"], ["invisiblePadding", ""], [1, "scrollable-content"], ["content", ""]],
  template: function VirtualScrollerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%] {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%] {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding[_ngcontent-%COMP%] {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2FuZ3VsYXIyLW11bHRpc2VsZWN0LWRyb3Bkb3duLWxpYi9zcmMvbGliL3ZpcnR1YWwtc2Nyb2xsL3ZpcnR1YWwtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGtCQUFrQjtHQUNyQixjQUFjO01BQ1gsaUNBQWlDO0lBQ25DOztDQUVIO01BQ0ssbUJBQW1CO01BQ25CLGdCQUFnQjtDQUNyQjtDQUNBO01BQ0ssZ0JBQWdCO01BQ2hCLG1CQUFtQjtDQUN4Qjs7SUFFRztNQUNFLE1BQU07TUFDTixPQUFPO01BQ1AsV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtJQUNwQjs7Q0FFSDtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0JBQW9CO0NBQ3JCOztJQUVHO01BQ0UsVUFBVTtNQUNWLFVBQVU7SUFDWjs7SUFFQTtNQUNFLFlBQVk7SUFDZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICB9XG5cdFxuXHQ6aG9zdC5ob3Jpem9udGFsLnNlbGZTY3JvbGwge1xuICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG5cdH1cblx0Omhvc3QudmVydGljYWwuc2VsZlNjcm9sbCB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcblx0fVxuXHRcbiAgICAuc2Nyb2xsYWJsZS1jb250ZW50IHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cblx0LnNjcm9sbGFibGUtY29udGVudCA6Om5nLWRlZXAgPiAqIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR9XG5cdFxuXHQ6aG9zdC5ob3Jpem9udGFsIHtcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHR9XG5cdFxuXHQ6aG9zdC5ob3Jpem9udGFsIC5zY3JvbGxhYmxlLWNvbnRlbnQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblx0XG5cdDpob3N0Lmhvcml6b250YWwgLnNjcm9sbGFibGUtY29udGVudCA6Om5nLWRlZXAgPiAqIHtcblx0XHRmbGV4LXNocmluazogMDtcblx0XHRmbGV4LWdyb3c6IDA7XG5cdFx0d2hpdGUtc3BhY2U6IGluaXRpYWw7XG5cdH1cblx0XG4gICAgLnRvdGFsLXBhZGRpbmcge1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIFxuICAgIDpob3N0Lmhvcml6b250YWwgLnRvdGFsLXBhZGRpbmcge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
class VirtualScrollerModule {}
_class2 = VirtualScrollerModule;
_class2.ɵfac = function VirtualScrollerModule_Factory(t) {
  return new (t || _class2)();
};
_class2.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class2
});
_class2.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'virtual-scroller-default-options',
    useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VirtualScrollerModule, {
    declarations: [VirtualScrollerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [VirtualScrollerComponent]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _check_for_update_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-for-update.service */ 1354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-adsense */ 3004);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _components_sourcetab_sourcetab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sourcetab/sourcetab.component */ 3279);
var _class;










const _c0 = function (a0) {
  return [a0];
};
function AppComponent_span_34_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, link_r4.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", link_r4.data.label, " ");
  }
}
function AppComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_span_34_a_2_Template, 3, 4, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r4.path !== "");
  }
}
function AppComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cuppa-source", 39);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tstitle", ctx_r3.currentComponent.tstitle)("htmltitle", ctx_r3.currentComponent.htmltitle)("csstitle", ctx_r3.currentComponent.csstitle)("tsgist", ctx_r3.currentComponent.tsgist)("htmlgist", ctx_r3.currentComponent.htmlgist)("cssgist", ctx_r3.currentComponent.cssgist);
  }
}
const _c1 = function () {
  return ["basic"];
};
class AppComponent {
  constructor(updates, checkForUpdateService, router, activatedRoute) {
    this.updates = updates;
    this.checkForUpdateService = checkForUpdateService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.title = 'app works!';
    this.currentComponent = {
      label: '',
      tstitle: '',
      htmltitle: '',
      csstitle: '',
      tsgist: '',
      htmlgist: '',
      cssgist: false
    };
    this.active = 1;
    this.links = [];
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
    this.updates.available.subscribe(event => {
      this.updateToLatest();
    });
    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
    console.log(this.router.config);
    this.links = this.router.config;
    this.routeData$ = router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(routeEvent => routeEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => activatedRoute), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(activatedRoute => activatedRoute.firstChild), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(firstChild => firstChild.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data));
    this.routeData$.subscribe(data => {
      this.active = 1;
      this.currentComponent = Object.assign({}, data);
    });
  }
  showInfo(link) {
    console.log(link);
  }
  updateToLatest() {
    console.log('Updating to latest version.');
    this.updates.activateUpdate().then(() => document.location.reload());
  }
  ngOnInit() {
    this.singleSelectionList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.singleSelectionselectedItems = [{
      "id": 2,
      "itemName": "Singapore"
    }];
    this.singleSelectionSettings = {
      singleSelection: true,
      text: "Select Country"
    };
    this.basicExampleList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Brazil"
    }];
    this.basicExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.basicExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
    this.selectedItems3 = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.dropdownSettings3 = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    this.limitSelectionSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.limitSelectionSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      limitSelection: 4
    };
    this.disableModeSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.disableModeSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      limitSelection: 2,
      disabled: true
    };
    this.placeholderExampleList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.placeholderExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.placeholderExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      searchPlaceholderText: "Custom Placeholder text"
    };
    this.resetExampleList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.resetExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.resetExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class"
    };
    this.groupByExampleList = [{
      "id": 1,
      "itemName": "India",
      "category": "asia"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "category": "asia pacific"
    }, {
      "id": 3,
      "itemName": "Germany",
      "category": "Europe"
    }, {
      "id": 4,
      "itemName": "France",
      "category": "Europe"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "category": "asia"
    }, {
      "id": 6,
      "itemName": "Sweden",
      "category": "Europe"
    }];
    this.groupByExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Germany"
    }, {
      "id": 4,
      "itemName": "France"
    }];
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
    this.templatingExampleList = [{
      "id": 1,
      "itemName": "India",
      "capital": "Delhi",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "capital": "Singapore",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"
    }, {
      "id": 3,
      "itemName": "United Kingdom",
      "capital": "London",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"
    }, {
      "id": 4,
      "itemName": "Canada",
      "capital": "Ottawa",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "capital": "Seoul",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg"
    }, {
      "id": 6,
      "itemName": "Brazil",
      "capital": "Brasilia",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"
    }];
    this.templatingExampleSelectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "United Kingdom"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.templatingExampleSettings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      showCheckbox: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  showModel() {
    console.log(this.singleSelectionselectedItems);
  }
  changeData() {
    this.resetExampleSelectedItems = [];
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_7__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_check_for_update_service__WEBPACK_IMPORTED_MODULE_0__.CheckForUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 52,
  vars: 18,
  consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "cuppa-navbar"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "cuppa-brand", "col-lg-2"], ["src", "assets/img/cuppa-logo-coffee11.png", "height", "32", "alt", ""], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link"], ["src", "assets/img/angular.svg", "height", "32", "alt", "", 2, "margin-top", "-3px", "height", "25px"], [1, "nav-item", "active"], [1, "nav-link", "active", 3, "routerLink"], ["href", "https://cuppalabs.github.io/components/multiselectDropdown", "target", "_blank", 1, "nav-link"], ["href", "http://cuppalabs.github.io/aboutme", "target", "_blank", 1, "nav-link"], [1, "navbar-nav", "m2-auto", "mb-2", "mb-lg-0"], ["aria-current", "page", "href", "https://www.npmjs.com/package/angular2-multiselect-dropdown", "target", "_blank", 1, "nav-link"], ["src", "https://img.shields.io/npm/v/angular2-multiselect-dropdown.svg"], ["aria-current", "page", "href", "https://github.com/CuppaLabs/angular2-multiselect-dropdown", "target", "_blank", 1, "nav-link"], ["src", "assets/img/GitHub-Mark-32px.png", 2, "height", "15px"], [1, "row", "d-flex"], ["id", "sidebarMenu", 1, "col", "d-md-block", "sidebar", "collapse"], [1, "position-sticky", "pt-3"], [1, "nav", "flex-column"], [4, "ngFor", "ngForOf"], [1, "col", "center-content", "pt-4"], [1, "mb-4"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [1, "col", "ad-container"], [3, "adClient", "adSlot", "display", "width", "height"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["data-feather", "home"], [1, "pt-5"], [3, "tstitle", "htmltitle", "csstitle", "tsgist", "htmlgist", "cssgist"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Multiselect Dropdown ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 11)(13, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Examples");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 8)(16, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 8)(19, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "About Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul", 15)(22, "li", 8)(23, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 8)(26, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Source on Github ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 1)(30, "div", 20)(31, "nav", 21)(32, "div", 22)(33, "ul", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, AppComponent_span_34_Template, 3, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "main", 25)(36, "h4", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ul", 27, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdChange", function AppComponent_Template_ul_activeIdChange_38_listener($event) {
        return ctx.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li", 29)(41, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, AppComponent_ng_template_43_Template, 2, 0, "ng-template", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li", 29)(45, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Source");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, AppComponent_ng_template_47_Template, 1, 6, "ng-template", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "ng-adsense", 34)(51, "ng-adsense", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.links);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentComponent.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeId", ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("adClient", "ca-pub-4525567075133342")("adSlot", 2263435109)("display", "inline-block")("width", 300)("height", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("adClient", "ca-pub-4525567075133342")("adSlot", 6386579727)("display", "inline-block")("width", 300)("height", 250);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, ng2_adsense__WEBPACK_IMPORTED_MODULE_9__.AdsenseComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavOutlet, _components_sourcetab_sourcetab_component__WEBPACK_IMPORTED_MODULE_1__.SourceTab],
  styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky; \n\n  top: 0; \n\n  z-index: 1000; \n\n}\n\n.left-section[_ngcontent-%COMP%] {\n  max-width: 250px !important;\n  width: 250px !important;\n  position: fixed;\n  display: flex;\n  height: calc(100vh - 64px);\n  overflow: auto;\n  border-right: 1px solid #ccc;\n}\n\n.center-section[_ngcontent-%COMP%] {\n  max-width: initial !important;\n  margin-left: 250px;\n  padding-top: 10px;\n}\n\n.right-section[_ngcontent-%COMP%] {\n  max-width: 300px !important;\n}\n\n.mat-grid-list[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px) !important;\n}\n\n.left-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 65px;\n  height: calc(100vh - 75px);\n  padding-right: 0px;\n  overflow: hidden;\n}\n\n.left-sidebar[_ngcontent-%COMP%], .right-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n}\n\n.left-sidebar[_ngcontent-%COMP%]:hover {\n  overflow: auto;\n}\n\n.outer-wrapper[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.center-content[_ngcontent-%COMP%] {\n  border-right: 1px solid #dee2e6;\n}\n\n@media (min-width: 768px) {\n  .center-content[_ngcontent-%COMP%] {\n    margin-left: 265px;\n  }\n}\n.nav-sub[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: none;\n  margin-bottom: 6px;\n  padding: 0px;\n  margin-top: 50px;\n}\n\n.nav-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  \n\n\n\n  bottom: 0;\n  \n\n  left: 0;\n  z-index: 100; \n\n  padding: 60px 0 0; \n\n  overflow: auto;\n  width: 250px;\n  border-right: 1px solid #dee2e6;\n}\n\n@media (max-width: 767.98px) {\n  .sidebar[_ngcontent-%COMP%] {\n    top: 5rem;\n  }\n}\n.sidebar-sticky[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto; \n\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #727272;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n\n.center-content[_ngcontent-%COMP%] {\n  margin-left: 250px !important;\n}\n\n.ad-container[_ngcontent-%COMP%] {\n  flex: 0 0 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FBQTtBQUhKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQSxFQUFBLHlCQUFBO0VBQ0EsTUFBQSxFQUFBLHlDQUFBO0VBQ0EsYUFBQSxFQUFBLCtEQUFBO0FBRko7O0FBSUE7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQURKOztBQUdBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUNBO0VBQ0kscUNBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0o7O0FBREE7RUFDSSxhQUFBO0FBSUo7O0FBRkE7RUFDRSwrQkFBQTtBQUtGOztBQUhBO0VBQ0k7SUFDSSxrQkFBQTtFQU1OO0FBQ0Y7QUFKQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQVFKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQTs7R0FBQTtFQUdBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUEsRUFBQSxzQkFBQTtFQUNBLGlCQUFBLEVBQUEscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBTUo7O0FBSEU7RUFDRTtJQUNFLFNBQUE7RUFNSjtBQUNGO0FBSEU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQSxFQUFBLDZEQUFBO0FBS0o7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFGRTtFQUNFLGNBQUE7QUFLSjs7QUFGRTs7RUFFRSxjQUFBO0FBS0o7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEU7RUFDRSw2QkFBQTtBQU1KOztBQUpBO0VBQ0UsZUFBQTtBQU9GIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuXHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIC5tYXQtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gICAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxufVxyXG4ubGVmdC1zZWN0aW9uIHtcclxuICAgIG1heC13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5jZW50ZXItc2VjdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5yaWdodC1zZWN0aW9uIHtcclxuICAgIG1heC13aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWdyaWQtbGlzdCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KSAhaW1wb3J0YW50O1xyXG59XHJcbi5sZWZ0LXNpZGViYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5sZWZ0LXNpZGViYXIsIC5yaWdodC1zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNjBweDtcclxufVxyXG4ubGVmdC1zaWRlYmFyOmhvdmVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLm91dGVyLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG4uY2VudGVyLWNvbnRlbnR7XHJcbiAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyLXdpZHRoIHNvbGlkICRncmF5LTMwMDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAuY2VudGVyLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNjVweDtcclxuICAgIH1cclxufVxyXG4ubmF2LXN1YntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLm5hdi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLyogcnRsOnJhdzpcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgKi9cclxuICAgIGJvdHRvbTogMDtcclxuICAgIC8qIHJ0bDpyZW1vdmUgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXHJcbiAgICBwYWRkaW5nOiA2MHB4IDAgMDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6ICRib3JkZXItd2lkdGggc29saWQgJGdyYXktMzAwO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgdG9wOiA1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1zdGlja3kge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgY29sb3I6ICM3MjcyNzI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcclxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmNlbnRlci1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuLmFkLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMCAwIDMwMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _examples_mock_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples/mock-data */ 3483);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.router */ 2977);
/* harmony import */ var _examples_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/basic */ 1174);
/* harmony import */ var _examples_singleselection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/singleselection */ 5246);
/* harmony import */ var _examples_groupBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/groupBy */ 4195);
/* harmony import */ var _examples_searchFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/searchFilter */ 2209);
/* harmony import */ var _examples_templating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/templating */ 2142);
/* harmony import */ var _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/resetdropdown */ 2521);
/* harmony import */ var _examples_disablemode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/disablemode */ 7165);
/* harmony import */ var _examples_limitselection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/limitselection */ 4851);
/* harmony import */ var _examples_limitbadges__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/limitbadges */ 2111);
/* harmony import */ var _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/customplaceholder */ 9370);
/* harmony import */ var _examples_styling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/styling */ 8654);
/* harmony import */ var _examples_gist__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/gist */ 9384);
/* harmony import */ var _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/usingWithForms */ 7043);
/* harmony import */ var _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/usingInReactForms */ 4714);
/* harmony import */ var _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/lazyLoading */ 9357);
/* harmony import */ var _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/multipleDropdowns */ 7427);
/* harmony import */ var _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/dynamicDataSets */ 1886);
/* harmony import */ var _examples_theming__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/theming */ 867);
/* harmony import */ var _examples_remoteData__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./examples/remoteData */ 6830);
/* harmony import */ var _examples_customSearch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./examples/customSearch */ 1610);
/* harmony import */ var _examples_searchByOneProperty__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./examples/searchByOneProperty */ 3642);
/* harmony import */ var _examples_lazyLoadingRemoteData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./examples/lazyLoadingRemoteData */ 8140);
/* harmony import */ var _examples_searchFilterAddNewItem__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./examples/searchFilterAddNewItem */ 277);
/* harmony import */ var _examples_events__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./examples/events */ 622);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-highlightjs */ 1747);
/* harmony import */ var _examples_usingInList__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./examples/usingInList */ 3894);
/* harmony import */ var _components_sourcetab_sourcetab_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/sourcetab/sourcetab.component */ 3279);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _check_for_update_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./check-for-update.service */ 1354);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _examples_usingWithinDialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./examples/usingWithinDialog */ 4781);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng2-adsense */ 3004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;













































class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({
  providers: [_examples_mock_data__WEBPACK_IMPORTED_MODULE_0__.MockService, _check_for_update_service__WEBPACK_IMPORTED_MODULE_31__.CheckForUpdateService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule, _app_router__WEBPACK_IMPORTED_MODULE_3__.AppRouterModule, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_2__.AngularMultiSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_36__.HttpClientModule, ng2_adsense__WEBPACK_IMPORTED_MODULE_37__.AdsenseModule.forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_39__.HighlightModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_40__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_30__.environment.production
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _examples_gist__WEBPACK_IMPORTED_MODULE_15__.ng2Gist, _examples_basic__WEBPACK_IMPORTED_MODULE_4__.BasicExample, _examples_singleselection__WEBPACK_IMPORTED_MODULE_5__.SingleSelectionExample, _examples_groupBy__WEBPACK_IMPORTED_MODULE_6__.GroupByExample, _examples_searchFilter__WEBPACK_IMPORTED_MODULE_7__.SearchFilterExample, _examples_templating__WEBPACK_IMPORTED_MODULE_8__.TemplatingExample, _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_9__.ResetDropdownExample, _examples_disablemode__WEBPACK_IMPORTED_MODULE_10__.DisableModeExample, _examples_limitselection__WEBPACK_IMPORTED_MODULE_11__.LimitSelectionExample, _examples_limitbadges__WEBPACK_IMPORTED_MODULE_12__.LimitBadgesExample, _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_13__.CustomPlaceholderExample, _examples_styling__WEBPACK_IMPORTED_MODULE_14__.StylingExample, _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_16__.UsingWithFormExample, _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_17__.UsingWithReactiveFormExample, _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_18__.LazyLoadingExample, _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_19__.MultipleDropdownsExample, _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_20__.DynamicDataSetsExample, _examples_theming__WEBPACK_IMPORTED_MODULE_21__.ThemingExample, _examples_remoteData__WEBPACK_IMPORTED_MODULE_22__.RemoteDataExample, _examples_customSearch__WEBPACK_IMPORTED_MODULE_23__.CustomSearchExample, _examples_searchByOneProperty__WEBPACK_IMPORTED_MODULE_24__.SearchFilterByOnePropertyExample, _examples_lazyLoadingRemoteData__WEBPACK_IMPORTED_MODULE_25__.LazyLoadingRemoteDataExample, _examples_searchFilterAddNewItem__WEBPACK_IMPORTED_MODULE_26__.SearchFilterAddItemExample, _examples_events__WEBPACK_IMPORTED_MODULE_27__.EventsExample, _examples_usingInList__WEBPACK_IMPORTED_MODULE_28__.UsingInListExample, _components_sourcetab_sourcetab_component__WEBPACK_IMPORTED_MODULE_29__.SourceTab, _examples_usingWithinDialog__WEBPACK_IMPORTED_MODULE_32__.DialogContentExampleDialog, _examples_usingWithinDialog__WEBPACK_IMPORTED_MODULE_32__.UsingWithinDialog],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule, _app_router__WEBPACK_IMPORTED_MODULE_3__.AppRouterModule, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_2__.AngularMultiSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_36__.HttpClientModule, ng2_adsense__WEBPACK_IMPORTED_MODULE_37__.AdsenseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_39__.HighlightModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_40__.ServiceWorkerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 2977:
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouterModule: () => (/* binding */ AppRouterModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _examples_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples/basic */ 1174);
/* harmony import */ var _examples_singleselection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/singleselection */ 5246);
/* harmony import */ var _examples_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/groupBy */ 4195);
/* harmony import */ var _examples_searchFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/searchFilter */ 2209);
/* harmony import */ var _examples_templating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/templating */ 2142);
/* harmony import */ var _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/resetdropdown */ 2521);
/* harmony import */ var _examples_disablemode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/disablemode */ 7165);
/* harmony import */ var _examples_limitselection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/limitselection */ 4851);
/* harmony import */ var _examples_limitbadges__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/limitbadges */ 2111);
/* harmony import */ var _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/customplaceholder */ 9370);
/* harmony import */ var _examples_styling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/styling */ 8654);
/* harmony import */ var _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/usingWithForms */ 7043);
/* harmony import */ var _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/usingInReactForms */ 4714);
/* harmony import */ var _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/lazyLoading */ 9357);
/* harmony import */ var _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/multipleDropdowns */ 7427);
/* harmony import */ var _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/dynamicDataSets */ 1886);
/* harmony import */ var _examples_remoteData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/remoteData */ 6830);
/* harmony import */ var _examples_customSearch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/customSearch */ 1610);
/* harmony import */ var _examples_searchByOneProperty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/searchByOneProperty */ 3642);
/* harmony import */ var _examples_lazyLoadingRemoteData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/lazyLoadingRemoteData */ 8140);
/* harmony import */ var _examples_searchFilterAddNewItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/searchFilterAddNewItem */ 277);
/* harmony import */ var _examples_events__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/events */ 622);
/* harmony import */ var _examples_usingInList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./examples/usingInList */ 3894);
/* harmony import */ var _examples_usingWithinDialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./examples/usingWithinDialog */ 4781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



























const appRoutes = [{
  path: "",
  redirectTo: "/basic",
  pathMatch: "full"
}, {
  path: "basic",
  component: _examples_basic__WEBPACK_IMPORTED_MODULE_0__.BasicExample,
  data: {
    label: "Basic example",
    tstitle: "basic.ts",
    htmltitle: "basic.html",
    csstitle: "",
    tsgist: "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "singleselection",
  component: _examples_singleselection__WEBPACK_IMPORTED_MODULE_1__.SingleSelectionExample,
  data: {
    label: "Single selection",
    tstitle: "singleSelection.ts",
    htmltitle: "singleSelection.html",
    csstitle: "",
    tsgist: "CuppaLabs/6ef578ce507dfd548eec39e008b4de14",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "searchfilter",
  component: _examples_searchFilter__WEBPACK_IMPORTED_MODULE_3__.SearchFilterExample,
  data: {
    label: "Search filter",
    tstitle: "searchFilter.ts",
    htmltitle: "searchFilter.html",
    csstitle: "",
    tsgist: "CuppaLabs/447bd5fce6dfc2832f5f4a8c36726a9b",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "customSearchAPI",
  component: _examples_customSearch__WEBPACK_IMPORTED_MODULE_17__.CustomSearchExample,
  data: {
    label: "Custom Search from API",
    tstitle: "customSearch.ts",
    htmltitle: "customSearch.html",
    csstitle: "",
    tsgist: "CuppaLabs/1bab5ecbbb22727eb0afe49848a454f0",
    htmlgist: "CuppaLabs/7f0d8ea9f9cfe9eec2cc1699affd2c14",
    cssgist: false
  }
}, {
  path: "searchFilterByOneProperty",
  component: _examples_searchByOneProperty__WEBPACK_IMPORTED_MODULE_18__.SearchFilterByOnePropertyExample,
  data: {
    label: "Search Filter By Property",
    tstitle: "searchFilterByProperty.ts",
    htmltitle: "searchFilterByProperty.html",
    csstitle: "",
    tsgist: "CuppaLabs/f6acd1eb94c95df32f689260b1f38b4c",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "searchfilterAddNewItem",
  component: _examples_searchFilterAddNewItem__WEBPACK_IMPORTED_MODULE_20__.SearchFilterAddItemExample,
  data: {
    label: "Search and Add New Item",
    tstitle: "searchFilterAddNewItem.ts",
    htmltitle: "searchFilter.html",
    csstitle: "",
    tsgist: "CuppaLabs/c1e00c870c3e3b9213e69e0a93518cc6",
    htmlgist: "CuppaLabs/0583ba4be8b7c192d14f04375f96c074",
    cssgist: false
  }
}, {
  path: "groupby",
  component: _examples_groupBy__WEBPACK_IMPORTED_MODULE_2__.GroupByExample,
  data: {
    label: "Group By",
    tstitle: "groupBy.ts",
    htmltitle: "groupBy.html",
    csstitle: "",
    tsgist: "CuppaLabs/f6c1328ade3201042a4b4d268a30ad8c",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "templating",
  component: _examples_templating__WEBPACK_IMPORTED_MODULE_4__.TemplatingExample,
  data: {
    label: "Templating",
    tstitle: "templating.ts",
    htmltitle: "templating.html",
    csstitle: "",
    tsgist: "CuppaLabs/cc0ac5976bf26b89119180ff82115fe4",
    htmlgist: "CuppaLabs/6399258d93fd5580be1736aba2539519",
    cssgist: false
  }
}, {
  path: "usinginform",
  component: _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_11__.UsingWithFormExample,
  data: {
    label: "Using in Forms",
    tstitle: "using-in-forms.ts",
    htmltitle: "using-with-forms.html",
    csstitle: "",
    tsgist: "CuppaLabs/6cd9396b8f5589b792b27dd10efe9140",
    htmlgist: "CuppaLabs/8148509a46a59e3aba513808daa40ca1",
    cssgist: false
  }
}, {
  path: "usinginreactiveform",
  component: _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_12__.UsingWithReactiveFormExample,
  data: {
    label: "Using in Reactive Forms",
    tstitle: "using-in-reactive-forms.ts",
    htmltitle: "using-with-reactive-forms.html",
    csstitle: "",
    tsgist: "CuppaLabs/f0dfe353c6378cee7f55547395a80fc4",
    htmlgist: "CuppaLabs/0a32c3d76110468b84bac01fd64488bc",
    cssgist: false
  }
}, {
  path: "lazyloading",
  component: _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_13__.LazyLoadingExample,
  data: {
    label: "Virtual Scrolling",
    tstitle: "lazyLoading.ts",
    htmltitle: "lazyLoading.html",
    csstitle: "",
    tsgist: "CuppaLabs/aab6c8b30a6901af01249c474f3f0cbd",
    htmlgist: "CuppaLabs/c77fea947ef053aa22973fcd9c7c612a",
    cssgist: false
  }
}, {
  path: "lazyloadingRemoteData",
  component: _examples_lazyLoadingRemoteData__WEBPACK_IMPORTED_MODULE_19__.LazyLoadingRemoteDataExample,
  data: {
    label: "Lazy Loading from API",
    tstitle: "lazyLoadingRemoteData.ts",
    htmltitle: "lazyLoadingRemoteData.html",
    csstitle: "",
    tsgist: "CuppaLabs/3833720c12e23f6c8ee5fd870e38ad5b",
    htmlgist: "CuppaLabs/72ebd8cfa40a23a74ccbeda6de98a1e8",
    cssgist: false
  }
}, {
  path: "remoteData",
  component: _examples_remoteData__WEBPACK_IMPORTED_MODULE_16__.RemoteDataExample,
  data: {
    label: "Data from remote API",
    tstitle: "remoteData.ts",
    htmltitle: "remoteData.html",
    csstitle: "",
    tsgist: "CuppaLabs/ffb168ae28c36a9130ad5ce74b720c5d",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "usingInList",
  component: _examples_usingInList__WEBPACK_IMPORTED_MODULE_22__.UsingInListExample,
  data: {
    label: "Using in List for loop",
    tstitle: "usingInList.ts",
    htmltitle: "usingInList.html",
    csstitle: "",
    tsgist: "CuppaLabs/0d2dc802967cca16ffc5053d0b873aba",
    htmlgist: "CuppaLabs/85fb2b925a56c2e533e321ae09de0e2f",
    cssgist: false
  }
}, {
  path: "usingInDialog",
  component: _examples_usingWithinDialog__WEBPACK_IMPORTED_MODULE_23__.UsingWithinDialog,
  data: {
    label: "Using Inside Dialog",
    tstitle: "basic.ts",
    htmltitle: "basic.html",
    csstitle: "",
    tsgist: "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "multipledropdowns",
  component: _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_14__.MultipleDropdownsExample,
  data: {
    label: "Multiple dropdowns",
    tstitle: "multiple-dropdowns.ts",
    htmltitle: "multiple-dropdowns.html",
    csstitle: "",
    tsgist: "CuppaLabs/12225540c23c8a171a81f996fc8d9ca6",
    htmlgist: "CuppaLabs/3788fb5437925b9d7d8edafec567639c",
    cssgist: false
  }
}, {
  path: "dynamicdatasets",
  component: _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_15__.DynamicDataSetsExample,
  data: {
    label: "Load dynamic data",
    tstitle: "dynamicData.ts",
    htmltitle: "dynamicData.html",
    csstitle: "",
    tsgist: "CuppaLabs/302d580f91bc40611b2474558d98fbf2",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "dropdownMethods",
  component: _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_5__.ResetDropdownExample,
  data: {
    label: "Methods",
    tstitle: "resetDropdown.ts",
    htmltitle: "resetDropdown.html",
    csstitle: "",
    tsgist: "CuppaLabs/96d3ca7681f1a7a38b8c76b2f1552458",
    htmlgist: "CuppaLabs/bbd73b9f9864effb69f361c9fc65a6e5",
    cssgist: false
  }
}, {
  path: "events",
  component: _examples_events__WEBPACK_IMPORTED_MODULE_21__.EventsExample,
  data: {
    label: "Events",
    tstitle: "basic.ts",
    htmltitle: "basic.html",
    csstitle: "",
    tsgist: "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "disablemode",
  component: _examples_disablemode__WEBPACK_IMPORTED_MODULE_6__.DisableModeExample,
  data: {
    label: "Disable dropdown",
    tstitle: "disableMode.ts",
    htmltitle: "disableMode.html",
    csstitle: "",
    tsgist: "CuppaLabs/96f799302bdfa08e11b4420c86c1d720",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "limitselection",
  component: _examples_limitselection__WEBPACK_IMPORTED_MODULE_7__.LimitSelectionExample,
  data: {
    label: "Limit selection",
    tstitle: "limitSelection.ts",
    htmltitle: "limitSelection.html",
    csstitle: "",
    tsgist: "CuppaLabs/70667b7d4dd4270bb290685e036a379a",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "limitbadges",
  component: _examples_limitbadges__WEBPACK_IMPORTED_MODULE_8__.LimitBadgesExample,
  data: {
    label: "Limit Badges",
    tstitle: "limitBadges.ts",
    htmltitle: "limitBadges.html",
    csstitle: "",
    tsgist: "CuppaLabs/00a25e7f8f70199f6571ac9fccbb94c2",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "customplaceholder",
  component: _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_9__.CustomPlaceholderExample,
  data: {
    label: "Custom placeholder",
    tstitle: "customPlaceholder.ts",
    htmltitle: "customPlaceholder.html",
    csstitle: "",
    tsgist: "CuppaLabs/48c087b6c0b4381d5bae1c689cc0ee3e",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: false
  }
}, {
  path: "styling",
  component: _examples_styling__WEBPACK_IMPORTED_MODULE_10__.StylingExample,
  data: {
    label: "CSS Styling",
    tstitle: "customStyling.ts",
    htmltitle: "customStyling.html",
    csstitle: "app.css",
    tsgist: "CuppaLabs/67fb11cbb67a62888ca0a3adb44ee440",
    htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
    cssgist: "CuppaLabs/e6efeedade8f737df03107625df165e7"
  }
}];
class AppRouterModule {}
_class = AppRouterModule;
_class.ɵfac = function AppRouterModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forRoot(appRoutes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppRouterModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule]
  });
})();

/***/ }),

/***/ 1354:
/*!*********************************************!*\
  !*** ./src/app/check-for-update.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckForUpdateService: () => (/* binding */ CheckForUpdateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ 1509);
var _class;




class CheckForUpdateService {
  constructor(appRef, updates) {
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.first)(isStable => isStable === true));
    const everySixHours$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(24 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.concat)(appIsStable$, everySixHours$);
    everySixHoursOnceAppIsStable$.subscribe(() => {
      console.log("checking for update");
      updates.checkForUpdate();
    });
  }
}
_class = CheckForUpdateService;
_class.ɵfac = function CheckForUpdateService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_4__.SwUpdate));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 3279:
/*!*************************************************************!*\
  !*** ./src/app/components/sourcetab/sourcetab.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceTab: () => (/* binding */ SourceTab)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _examples_gist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/gist */ 9384);
var _class;



function SourceTab_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ng2-gist", 6);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gistId", ctx_r1.tsgist);
  }
}
function SourceTab_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ng2-gist", 6);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gistId", ctx_r2.htmlgist);
  }
}
function SourceTab_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ng2-gist", 6);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gistId", ctx_r3.cssgist);
  }
}
class SourceTab {
  constructor() {
    this.active = 1;
  }
  ngOnInit() {}
}
_class = SourceTab;
_class.ɵfac = function SourceTab_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["cuppa-source"]],
  inputs: {
    tstitle: "tstitle",
    htmltitle: "htmltitle",
    csstitle: "csstitle",
    tsgist: "tsgist",
    htmlgist: "htmlgist",
    cssgist: "cssgist"
  },
  decls: 15,
  vars: 8,
  consts: [["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [3, "gistId"]],
  template: function SourceTab_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function SourceTab_Template_ul_activeIdChange_0_listener($event) {
        return ctx.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SourceTab_ng_template_5_Template, 1, 1, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 2)(7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SourceTab_ng_template_9_Template, 1, 1, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 2)(11, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SourceTab_ng_template_13_Template, 1, 1, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 5);
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tstitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.htmltitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.csstitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet, _examples_gist__WEBPACK_IMPORTED_MODULE_0__.ng2Gist],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1174:
/*!***********************************!*\
  !*** ./src/app/examples/basic.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicExample: () => (/* binding */ BasicExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;




class BasicExample {
  constructor(seotitle, meta) {
    this.seotitle = seotitle;
    this.meta = meta;
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.cssgist = false;
    this.title = "Basic example";
    this.tsgist = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
    this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    this.tstitle = "basic.ts";
    this.htmltitle = "basic.html";
    this.seotitle.setTitle('Basic example');
    this.meta.addTags([{
      name: 'description',
      content: 'Basic example of angular multiselect drodown.'
    }]);
  }
  ngOnInit() {
    this.itemList = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }, {
      "countryId": 5,
      "itemName": "South Korea"
    }, {
      "countryId": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }, {
      "countryId": 5,
      "itemName": "South Korea"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      primaryKey: "countryId",
      enableSearchFilter: true,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = BasicExample;
_class.ɵfac = function BasicExample_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"]],
  template: function BasicExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BasicExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function BasicExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function BasicExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function BasicExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function BasicExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 1610:
/*!******************************************!*\
  !*** ./src/app/examples/customSearch.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomSearchExample: () => (/* binding */ CustomSearchExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/menu-item */ 9970);
var _class;





function CustomSearchExample_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomSearchExample_ng_template_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.filter = $event);
    })("keyup", function CustomSearchExample_ng_template_2_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onSearch($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.filter);
  }
}
function CustomSearchExample_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r5.flag, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.capital);
  }
}
class CustomSearchExample {
  constructor(http) {
    this.http = http;
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.filter = "";
    this.cssgist = false;
    this.title = "Custom Search / Search from API";
    this.tsgist = "CuppaLabs/1bab5ecbbb22727eb0afe49848a454f0";
    this.htmlgist = "CuppaLabs/7f0d8ea9f9cfe9eec2cc1699affd2c14";
    this.tstitle = "customSearch.ts";
    this.htmltitle = "customSearch.html";
  }
  ngOnInit() {
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      primaryKey: "alpha3Code",
      labelKey: "name",
      noDataLabel: "Search Countries...",
      enableSearchFilter: true,
      searchBy: ['name', 'capital'],
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  onSearch(evt) {
    console.log(evt.target.value);
    this.itemList = [];
    this.http.get('https://restcountries.eu/rest/v2/name/' + evt.target.value + '?fulltext=true').subscribe(res => {
      console.log(res);
      this.itemList = res;
    }, error => {});
  }
  onClose() {
    this.itemList = [];
    this.filter = "";
  }
}
_class = CustomSearchExample;
_class.ɵfac = function CustomSearchExample_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 5,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onClose", "onSelectAll", "onDeSelectAll"], ["type", "text", "placeholder", "Search countries", 2, "border", "none", "width", "100%", "height", "100%", "outline", "none", 3, "ngModel", "ngModelChange", "keyup"], [2, "color", "#333", "width", "150px"], [2, "width", "30px", "border", "1px solid #efefef", "margin-right", "0px", 3, "src"]],
  template: function CustomSearchExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomSearchExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function CustomSearchExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function CustomSearchExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onClose", function CustomSearchExample_Template_angular2_multiselect_onClose_0_listener() {
        return ctx.onClose();
      })("onSelectAll", function CustomSearchExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function CustomSearchExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "c-search");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CustomSearchExample_ng_template_2_Template, 1, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "c-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CustomSearchExample_ng_template_4_Template, 5, 3, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect, _projects_angular2_multiselect_dropdown_lib_src_lib_menu_item__WEBPACK_IMPORTED_MODULE_1__.Item, _projects_angular2_multiselect_dropdown_lib_src_lib_menu_item__WEBPACK_IMPORTED_MODULE_1__.Search],
  encapsulation: 2
});

/***/ }),

/***/ 9370:
/*!***********************************************!*\
  !*** ./src/app/examples/customplaceholder.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPlaceholderExample: () => (/* binding */ CustomPlaceholderExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class CustomPlaceholderExample {
  constructor() {
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
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      searchPlaceholderText: "Custom Placeholder text",
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = CustomPlaceholderExample;
_class.ɵfac = function CustomPlaceholderExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"]],
  template: function CustomPlaceholderExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomPlaceholderExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function CustomPlaceholderExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function CustomPlaceholderExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function CustomPlaceholderExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function CustomPlaceholderExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 7165:
/*!*****************************************!*\
  !*** ./src/app/examples/disablemode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisableModeExample: () => (/* binding */ DisableModeExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class DisableModeExample {
  constructor() {
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
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      disabled: true,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  showModel() {
    console.log(this.selectedItems);
  }
  changeData() {
    this.selectedItems = [];
  }
  disable() {
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      disabled: true
    };
  }
  enable() {
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class",
      disabled: false
    };
  }
  toggleDisable() {
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
  }
}
_class = DisableModeExample;
_class.ɵfac = function DisableModeExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 8,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "example-button-row"], [1, "btn", "btn-primary", 3, "click"]],
  template: function DisableModeExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisableModeExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function DisableModeExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function DisableModeExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function DisableModeExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function DisableModeExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br")(3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DisableModeExample_Template_button_click_4_listener() {
        return ctx.disable();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Disable");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DisableModeExample_Template_button_click_6_listener() {
        return ctx.enable();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Enable");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 1886:
/*!*********************************************!*\
  !*** ./src/app/examples/dynamicDataSets.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicDataSetsExample: () => (/* binding */ DynamicDataSetsExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-data */ 3483);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;




class DynamicDataSetsExample {
  constructor(mockService) {
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
  ngOnInit() {
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      tagToBody: true
    };
    this.loadDataSet2();
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  loadDataSet1() {
    this.settings = {
      text: "Select Fruits",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };
    this.selectedItems = [];
    this.itemList = [];
    const tempArr = this.mockService.getFruits();
    for (let i = 0; i < tempArr.length; ++i) {
      this.itemList.push(tempArr[i]);
    }
  }
  loadDataSet2() {
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };
    this.selectedItems = [];
    this.itemList = [];
    const tempArr = this.mockService.getCountries();
    for (let i = 0; i < tempArr.length; ++i) {
      this.itemList.push(tempArr[i]);
    }
  }
}
_class = DynamicDataSetsExample;
_class.ɵfac = function DynamicDataSetsExample_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_mock_data__WEBPACK_IMPORTED_MODULE_0__.MockService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 8,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "example-button-row"], [1, "btn", "btn-primary", 3, "click"]],
  template: function DynamicDataSetsExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DynamicDataSetsExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function DynamicDataSetsExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function DynamicDataSetsExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function DynamicDataSetsExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function DynamicDataSetsExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br")(3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DynamicDataSetsExample_Template_button_click_4_listener() {
        return ctx.loadDataSet1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Load Fruits");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DynamicDataSetsExample_Template_button_click_6_listener() {
        return ctx.loadDataSet2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Load Countries");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_1__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 622:
/*!************************************!*\
  !*** ./src/app/examples/events.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsExample: () => (/* binding */ EventsExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class EventsExample {
  constructor() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.selectedItemString = '';
    this.unSelectedItemString = '';
    this.openString = '';
    this.closeString = '';
    this.selectAllString = '';
    this.unSelectAllString = '';
    this.cssgist = false;
    this.title = "Events";
    this.tsgist = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
    this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    this.tstitle = "basic.ts";
    this.htmltitle = "basic.html";
  }
  ngOnInit() {
    this.itemList = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }, {
      "countryId": 5,
      "itemName": "South Korea"
    }, {
      "countryId": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      primaryKey: "countryId",
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    this.selectedItemString = JSON.stringify(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    this.unSelectedItemString = JSON.stringify(item);
    console.log(this.selectedItems);
  }
  onOpen(evt) {
    this.openString = "Dropdown opened: " + evt;
  }
  onClose(evt) {
    this.closeString = "Dropdown opened: " + evt;
  }
  onSelectAll(items) {
    console.log(items);
    this.selectAllString = JSON.stringify(items);
    this.unSelectAllString = "";
  }
  onDeSelectAll(items) {
    console.log(items);
    this.selectAllString = '';
    this.unSelectAllString = "all items un-selected";
  }
}
_class = EventsExample;
_class.ɵfac = function EventsExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 35,
  vars: 9,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "onOpen", "onClose"], ["dropdownElem", ""], [1, "row"], [1, "col-md-4"], [1, "output-text", 3, "ngModel", "ngModelChange"]],
  template: function EventsExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventsExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function EventsExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function EventsExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function EventsExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function EventsExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      })("onOpen", function EventsExample_Template_angular2_multiselect_onOpen_0_listener($event) {
        return ctx.onOpen($event);
      })("onClose", function EventsExample_Template_angular2_multiselect_onClose_0_listener($event) {
        return ctx.onClose($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br")(3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "On Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventsExample_Template_textarea_ngModelChange_8_listener($event) {
        return ctx.selectedItemString = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Event output goes here...\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "On Un-select");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventsExample_Template_textarea_ngModelChange_13_listener($event) {
        return ctx.unSelectedItemString = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Event output goes here...\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3)(16, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "On Open");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventsExample_Template_textarea_ngModelChange_18_listener($event) {
        return ctx.openString = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Event output goes here...\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3)(21, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "On Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventsExample_Template_textarea_ngModelChange_23_listener($event) {
        return ctx.closeString = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Event output goes here...\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3)(26, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "On Select All");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventsExample_Template_textarea_ngModelChange_28_listener($event) {
        return ctx.selectAllString = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Event output goes here...\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 3)(31, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "On Un-Select All");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EventsExample_Template_textarea_ngModelChange_33_listener($event) {
        return ctx.unSelectAllString = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Event output goes here...\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedItemString);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.unSelectedItemString);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.openString);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.closeString);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectAllString);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.unSelectAllString);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 9384:
/*!**********************************!*\
  !*** ./src/app/examples/gist.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ng2Gist: () => (/* binding */ ng2Gist)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

const _c0 = ["iframe"];
class ng2Gist {
  constructor() {}
  ngAfterViewInit() {
    this.iframe.nativeElement.id = 'gist-' + this.gistId;
    let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    let content = `
      <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')
        .style.height=document.body.scrollHeight + 'px'">
        <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
}
_class = ng2Gist;
_class.ɵfac = function ng2Gist_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng2-gist"]],
  viewQuery: function ng2Gist_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iframe = _t.first);
    }
  },
  inputs: {
    gistId: "gistId"
  },
  decls: 2,
  vars: 0,
  consts: [["type", "text/javascript", "width", "100%", "frameborder", "0"], ["iframe", ""]],
  template: function ng2Gist_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0, 1);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 4195:
/*!*************************************!*\
  !*** ./src/app/examples/groupBy.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupByExample: () => (/* binding */ GroupByExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class GroupByExample {
  constructor() {
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
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India",
      "category": "asia"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "category": "asia pacific"
    }, {
      "id": 3,
      "itemName": "Germany",
      "category": "Europe"
    }, {
      "id": 4,
      "itemName": "France",
      "category": "Europe"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "category": "asia"
    }, {
      "id": 6,
      "itemName": "Sweden",
      "category": "Europe"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India",
      "category": "asia"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "category": "asia"
    }];
    this.settings = {
      singleSelection: false,
      text: "Select Fields",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      groupBy: "category",
      selectGroup: true,
      searchBy: ["itemName"],
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  onGroupSelect(selectedGroupItem) {
    console.log(selectedGroupItem);
  }
  onGroupDeSelect(deselectedGroupItem) {
    console.log(deselectedGroupItem);
  }
  onChange(e) {
    console.log(e);
  }
  loadDataSet1() {
    this.selectedItems = [];
    this.itemList = [{
      "id": 1,
      "itemName": "Apple",
      "category": "fruits"
    }, {
      "id": 2,
      "itemName": "Banana",
      "category": "fruits"
    }, {
      "id": 5,
      "itemName": "Tomatoe",
      "category": "vegetables"
    }, {
      "id": 6,
      "itemName": "Potatoe",
      "category": "vegetables"
    }];
  }
  loadDataSet2() {
    this.selectedItems = [];
    this.itemList = [{
      "id": 1,
      "itemName": "India",
      "category": "asia"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "category": "asia pacific"
    }, {
      "id": 3,
      "itemName": "Germany",
      "category": "Europe"
    }, {
      "id": 4,
      "itemName": "France",
      "category": "Europe"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "category": "asia"
    }, {
      "id": 6,
      "itemName": "Sweden",
      "category": "Europe"
    }];
  }
}
_class = GroupByExample;
_class.ɵfac = function GroupByExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 8,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "onGroupSelect", "onGroupDeSelect"], [1, "example-button-row"], [1, "btn", "btn-primary", 3, "click"]],
  template: function GroupByExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupByExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function GroupByExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function GroupByExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function GroupByExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function GroupByExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      })("ngModelChange", function GroupByExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.onChange($event);
      })("onGroupSelect", function GroupByExample_Template_angular2_multiselect_onGroupSelect_0_listener($event) {
        return ctx.onGroupSelect($event);
      })("onGroupDeSelect", function GroupByExample_Template_angular2_multiselect_onGroupDeSelect_0_listener($event) {
        return ctx.onGroupDeSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br")(3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupByExample_Template_button_click_4_listener() {
        return ctx.loadDataSet1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Load Fruits ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupByExample_Template_button_click_6_listener() {
        return ctx.loadDataSet2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Load Countries ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 9357:
/*!*****************************************!*\
  !*** ./src/app/examples/lazyLoading.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyLoadingExample: () => (/* binding */ LazyLoadingExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class LazyLoadingExample {
  constructor() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.categories = ["Indian", "American", "Canadian", "Chinese"];
    this.namesList = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Cox", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Reyes", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler", "Barnes", "Fisher", "Henderson", "Coleman", "Simmons", "Patterson", "Jordan", "Reynolds", "Hamilton", "Graham", "Kim", "Gonzales", "Alexander", "Ramos", "Wallace", "Griffin", "West", "Cole", "Hayes", "Chavez", "Gibson", "Bryant", "Ellis", "Stevens", "Murray", "Ford", "Marshall", "Owens", "Mcdonald", "Harrison", "Ruiz", "Kennedy", "Wells", "Alvarez", "Woods", "Mendoza", "Castillo", "Olson", "Webb", "Washington", "Tucker", "Freeman", "Burns", "Henry", "Vasquez", "Snyder", "Simpson", "Crawford", "Jimenez", "Porter", "Mason", "Shaw", "Gordon", "Wagner", "Hunter", "Romero", "Hicks", "Dixon", "Hunt", "Palmer", "Robertson", "Black", "Holmes", "Stone", "Meyer", "Boyd", "Mills", "Warren", "Fox", "Rose", "Rice", "Moreno", "Schmidt", "Patel", "Ferguson", "Nichols", "Herrera", "Medina", "Ryan", "Fernandez", "Weaver", "Daniels", "Stephens", "Gardner", "Payne", "Kelley", "Dunn", "Pierce", "Arnold", "Tran", "Spencer", "Peters", "Hawkins", "Grant", "Hansen", "Castro", "Hoffman", "Hart", "Elliott", "Cunningham", "Knight", "Bradley", "Carroll", "Hudson", "Duncan", "Armstrong", "Berry", "Andrews", "Johnston", "Ray", "Lane", "Riley", "Carpenter", "Perkins", "Aguilar", "Silva", "Richards", "Willis", "Matthews", "Chapman", "Lawrence", "Garza", "Vargas", "Watkins", "Wheeler", "Larson", "Carlson", "Harper", "George", "Greene", "Burke", "Guzman", "Morrison", "Munoz", "Jacobs", "Obrien", "Lawson", "Franklin", "Lynch", "Bishop", "Carr", "Salazar", "Austin", "Mendez", "Gilbert", "Jensen", "Williamson", "Montgomery", "Harvey", "Oliver", "Howell", "Dean", "Hanson", "Weber", "Garrett", "Sims", "Burton", "Fuller", "Soto", "Mccoy", "Welch", "Chen", "Schultz", "Walters", "Reid", "Fields", "Walsh", "Little", "Fowler", "Bowman", "Davidson", "May", "Day", "Schneider", "Newman", "Brewer", "Lucas", "Holland", "Wong", "Banks", "Santos", "Curtis", "Pearson", "Delgado", "Valdez", "Pena", "Rios", "Douglas", "Sandoval", "Barrett", "Hopkins", "Keller", "Guerrero", "Stanley", "Bates", "Alvarado", "Beck", "Ortega", "Wade", "Estrada", "Contreras", "Barnett", "Caldwell", "Santiago", "Lambert", "Powers", "Chambers", "Nunez", "Craig", "Leonard", "Lowe", "Rhodes", "Byrd", "Gregory", "Shelton", "Frazier", "Becker", "Maldonado", "Fleming", "Vega", "Sutton", "Cohen", "Jennings", "Parks", "Mcdaniel", "Watts", "Barker", "Norris", "Vaughn", "Vazquez", "Holt", "Schwartz", "Steele", "Benson", "Neal", "Dominguez", "Horton", "Terry", "Wolfe", "Hale", "Lyons", "Graves", "Haynes", "Miles", "Park", "Warner", "Padilla", "Bush", "Thornton", "Mccarthy", "Mann", "Zimmerman", "Erickson", "Fletcher", "Mckinney", "Page", "Dawson", "Joseph", "Marquez", "Reeves", "Klein", "Espinoza", "Baldwin", "Moran", "Love", "Robbins", "Higgins", "Ball", "Cortez", "Le", "Griffith", "Bowen", "Sharp", "Cummings", "Ramsey", "Hardy", "Swanson", "Barber", "Acosta", "Luna", "Chandler", "Blair", "Daniel", "Cross", "Simon", "Dennis", "Oconnor", "Quinn", "Gross", "Navarro", "Moss", "Fitzgerald", "Doyle", "Mclaughlin", "Rojas", "Rodgers", "Stevenson", "Singh", "Yang", "Figueroa", "Harmon", "Newton", "Paul", "Manning", "Garner", "Mcgee", "Reese", "Francis", "Burgess", "Adkins", "Goodman", "Curry", "Brady", "Christensen", "Potter", "Walton", "Goodwin", "Mullins", "Molina", "Webster", "Fischer", "Campos", "Avila", "Sherman", "Todd", "Chang", "Blake", "Malone", "Wolf", "Hodges", "Juarez", "Gill", "Farmer", "Hines", "Gallagher", "Duran", "Hubbard", "Cannon", "Miranda", "Wang", "Saunders", "Tate", "Mack", "Hammond", "Carrillo", "Townsend", "Wise", "Ingram", "Barton", "Mejia", "Ayala", "Schroeder", "Hampton", "Rowe", "Parsons", "Frank", "Waters", "Strickland", "Osborne", "Maxwell", "Chan", "Deleon", "Norman", "Harrington", "Casey", "Patton", "Logan", "Bowers", "Mueller", "Glover", "Floyd", "Hartman", "Buchanan", "Cobb", "French", "Kramer", "Mccormick", "Clarke", "Tyler", "Gibbs", "Moody", "Conner", "Sparks", "Mcguire", "Leon", "Bauer", "Norton", "Pope", "Flynn", "Hogan", "Robles", "Salinas", "Yates", "Lindsey", "Lloyd", "Marsh", "Mcbride", "Owen", "Solis", "Pham", "Lang", "Pratt", "Lara", "Brock", "Ballard", "Trujillo", "Shaffer", "Drake", "Roman", "Aguirre", "Morton", "Stokes", "Lamb", "Pacheco", "Patrick", "Cochran", "Shepherd", "Cain", "Burnett", "Hess", "Li", "Cervantes", "Olsen", "Briggs", "Ochoa", "Cabrera", "Velasquez", "Montoya", "Roth", "Meyers", "Cardenas", "Fuentes", "Weiss", "Hoover", "Wilkins", "Nicholson", "Underwood", "Short", "Carson", "Morrow", "Colon", "Holloway", "Summers", "Bryan", "Petersen", "Mckenzie", "Serrano", "Wilcox", "Carey", "Clayton", "Poole", "Calderon", "Gallegos", "Greer", "Rivas", "Guerra", "Decker", "Collier", "Wall", "Whitaker", "Bass", "Flowers", "Davenport", "Conley", "Houston", "Huff", "Copeland", "Hood", "Monroe", "Massey", "Roberson", "Combs", "Franco", "Larsen", "Pittman", "Randall", "Skinner", "Wilkinson", "Kirby", "Cameron", "Bridges", "Anthony", "Richard", "Kirk", "Bruce", "Singleton", "Mathis", "Bradford", "Boone", "Abbott", "Charles", "Allison", "Sweeney", "Atkinson", "Horn", "Jefferson", "Rosales", "York", "Christian", "Phelps", "Farrell", "Castaneda", "Nash", "Dickerson", "Bond", "Wyatt", "Foley", "Chase", "Gates", "Vincent", "Mathews", "Hodge", "Garrison", "Trevino", "Villarreal", "Heath", "Dalton", "Valencia", "Callahan", "Hensley", "Atkins", "Huffman", "Roy", "Boyer", "Shields", "Lin", "Hancock", "Grimes", "Glenn", "Cline", "Delacruz", "Camacho", "Dillon", "Parrish", "Oneill", "Melton", "Booth", "Kane", "Berg", "Harrell", "Pitts", "Savage", "Wiggins", "Brennan", "Salas", "Marks", "Russo", "Sawyer", "Baxter", "Golden", "Hutchinson", "Liu", "Walter", "Mcdowell", "Wiley", "Rich", "Humphrey", "Johns", "Koch", "Suarez", "Hobbs", "Beard", "Gilmore", "Ibarra", "Keith", "Macias", "Khan", "Andrade", "Ware", "Stephenson", "Henson", "Wilkerson", "Dyer", "Mcclure", "Blackwell", "Mercado", "Tanner", "Eaton", "Clay", "Barron", "Beasley", "Oneal", "Preston", "Small", "Wu", "Zamora", "Macdonald", "Vance", "Snow", "Mcclain", "Stafford", "Orozco", "Barry", "English", "Shannon", "Kline", "Jacobson", "Woodard", "Huang", "Kemp", "Mosley", "Prince", "Merritt", "Hurst", "Villanueva", "Roach", "Nolan", "Lam", "Yoder", "Mccullough", "Lester", "Santana", "Valenzuela", "Winters", "Barrera", "Leach", "Orr", "Berger", "Mckee", "Strong", "Conway", "Stein", "Whitehead", "Bullock", "Escobar", "Knox", "Meadows", "Solomon", "Velez", "Odonnell", "Kerr", "Stout", "Blankenship", "Browning", "Kent", "Lozano", "Bartlett", "Pruitt", "Buck", "Barr", "Gaines", "Durham", "Gentry", "Mcintyre", "Sloan", "Melendez", "Rocha", "Herman", "Sexton", "Moon", "Hendricks", "Rangel", "Stark", "Lowery", "Hardin", "Hull", "Sellers", "Ellison", "Calhoun", "Gillespie", "Mora", "Knapp", "Mccall", "Morse", "Dorsey", "Weeks", "Nielsen", "Livingston", "Leblanc", "Mclean", "Bradshaw", "Glass", "Middleton", "Buckley", "Schaefer", "Frost", "Howe", "House", "Mcintosh", "Ho", "Pennington", "Reilly", "Hebert", "Mcfarland", "Hickman", "Noble", "Spears", "Conrad", "Arias", "Galvan", "Velazquez", "Huynh", "Frederick", "Randolph", "Cantu", "Fitzpatrick", "Mahoney", "Peck", "Villa", "Michael", "Donovan", "Mcconnell", "Walls", "Boyle", "Mayer", "Zuniga", "Giles", "Pineda", "Pace", "Hurley", "Mays", "Mcmillan", "Crosby", "Ayers", "Case", "Bentley", "Shepard", "Everett", "Pugh", "David", "Mcmahon", "Dunlap", "Bender", "Hahn", "Harding", "Acevedo", "Raymond", "Blackburn", "Duffy", "Landry", "Dougherty", "Bautista", "Shah", "Potts", "Arroyo", "Valentine", "Meza", "Gould", "Vaughan", "Fry", "Rush", "Avery", "Herring", "Dodson", "Clements", "Sampson", "Tapia", "Bean", "Lynn", "Crane", "Farley", "Cisneros", "Benton", "Ashley", "Mckay", "Finley", "Best", "Blevins", "Friedman", "Moses", "Sosa", "Blanchard", "Huber", "Frye", "Krueger", "Bernard", "Rosario", "Rubio", "Mullen", "Benjamin", "Haley", "Chung", "Moyer", "Choi", "Horne", "Yu", "Woodward", "Ali", "Nixon", "Hayden", "Rivers", "Estes", "Mccarty", "Richmond", "Stuart", "Maynard", "Brandt", "Oconnell", "Hanna", "Sanford", "Sheppard", "Church", "Burch", "Levy", "Rasmussen", "Coffey", "Ponce", "Faulkner", "Donaldson", "Schmitt", "Novak", "Costa", "Montes", "Booker", "Cordova", "Waller", "Arellano", "Maddox", "Mata", "Bonilla", "Stanton", "Compton", "Kaufman", "Dudley", "Mcpherson", "Beltran", "Dickson", "Mccann", "Villegas", "Proctor", "Hester", "Cantrell", "Daugherty", "Cherry", "Bray", "Davila", "Rowland", "Levine", "Madden", "Spence", "Good", "Irwin", "Werner", "Krause", "Petty", "Whitney", "Baird", "Hooper", "Pollard", "Zavala", "Jarvis", "Holden", "Haas", "Hendrix", "Mcgrath", "Bird", "Lucero", "Terrell", "Riggs", "Joyce", "Mercer", "Rollins", "Galloway", "Duke", "Odom", "Andersen", "Downs", "Hatfield", "Benitez", "Archer", "Huerta", "Travis", "Mcneil", "Hinton", "Zhang", "Hays", "Mayo", "Fritz", "Branch", "Mooney", "Ewing", "Ritter", "Esparza", "Frey", "Braun", "Gay", "Riddle", "Haney", "Kaiser", "Holder", "Chaney", "Mcknight", "Gamble", "Vang", "Cooley", "Carney", "Cowan", "Forbes", "Ferrell", "Davies", "Barajas", "Shea", "Osborn", "Bright", "Cuevas", "Bolton", "Murillo", "Lutz", "Duarte", "Kidd", "Key", "Cooke"];
    this.cssgist = false;
    this.title = "Virtual scrolling - Lazy load large data sets";
    this.tsgist = "CuppaLabs/aab6c8b30a6901af01249c474f3f0cbd";
    this.htmlgist = "CuppaLabs/c77fea947ef053aa22973fcd9c7c612a";
    this.tstitle = "lazyLoading.ts";
    this.htmltitle = "lazyLoading.html";
  }
  ngOnInit() {
    this.itemList = [];
    for (var t = 1; t <= 1000; t++) {
      var tempObj = {
        "id": 0,
        "itemName": "",
        "category": ""
      };
      tempObj.id = t;
      tempObj.itemName = this.namesList[Math.floor(Math.random() * this.namesList.length)];
      tempObj.category = this.categories[Math.floor(Math.random() * this.categories.length)];
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
      badgeShowLimit: 4,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  onScroll(e) {
    console.log(e);
  }
  onScrollToEnd(e) {
    console.log(e);
  }
  changeData() {
    this.selectedItems = [];
  }
}
_class = LazyLoadingExample;
_class.ɵfac = function LazyLoadingExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 9,
  vars: 4,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "example-button-row"], ["mat-raised-button", "", "color", "warn", 1, "btn", "btn-danger", 3, "click"]],
  template: function LazyLoadingExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LazyLoadingExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function LazyLoadingExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function LazyLoadingExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function LazyLoadingExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function LazyLoadingExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br")(6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LazyLoadingExample_Template_button_click_7_listener() {
        return ctx.changeData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Reset\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Records : ", ctx.itemList.length, "");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 8140:
/*!***************************************************!*\
  !*** ./src/app/examples/lazyLoadingRemoteData.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyLoadingRemoteDataExample: () => (/* binding */ LazyLoadingRemoteDataExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-data */ 3483);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;




class LazyLoadingRemoteDataExample {
  constructor(appService) {
    this.appService = appService;
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.loading = false;
    this.bufferSize = 10;
    this.cssgist = false;
    this.title = "Lazy loading - Remote Data API";
    this.tsgist = "CuppaLabs/3833720c12e23f6c8ee5fd870e38ad5b";
    this.htmlgist = "CuppaLabs/72ebd8cfa40a23a74ccbeda6de98a1e8";
    this.tstitle = "lazyLoadingRemoteData.ts";
    this.htmltitle = "lazyLoadingRemoteData.html";
  }
  ngOnInit() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {
      text: "Select Items",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      enableSearchFilter: true,
      lazyLoading: true,
      labelKey: 'name',
      limitSelection: 3,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  onScroll(e) {
    console.log(e);
  }
  onOpen(e) {
    console.log(this.itemList);
  }
  fetchMore(event) {
    if (event.endIndex === this.itemList.length - 1) {
      this.loading = true;
      this.appService.getChunkData(this.itemList.length, this.bufferSize).then(chunk => {
        this.itemList = this.itemList.concat(chunk);
        this.loading = false;
      }, () => this.loading = false);
    }
  }
  changeData() {
    this.selectedItems = [];
  }
}
_class = LazyLoadingRemoteDataExample;
_class.ɵfac = function LazyLoadingRemoteDataExample_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_mock_data__WEBPACK_IMPORTED_MODULE_0__.MockService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 9,
  vars: 5,
  consts: [[3, "data", "ngModel", "settings", "loading", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "onOpen", "onScrollToEnd"], [1, "example-button-row"], ["mat-raised-button", "", "color", "warn", 1, "btn", "btn-danger", 3, "click"]],
  template: function LazyLoadingRemoteDataExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LazyLoadingRemoteDataExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function LazyLoadingRemoteDataExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function LazyLoadingRemoteDataExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function LazyLoadingRemoteDataExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function LazyLoadingRemoteDataExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      })("onOpen", function LazyLoadingRemoteDataExample_Template_angular2_multiselect_onOpen_0_listener($event) {
        return ctx.onOpen($event);
      })("onScrollToEnd", function LazyLoadingRemoteDataExample_Template_angular2_multiselect_onScrollToEnd_0_listener($event) {
        return ctx.fetchMore($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br")(6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazyLoadingRemoteDataExample_Template_button_click_7_listener() {
        return ctx.changeData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings)("loading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total Records : ", ctx.itemList.length, "");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_1__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 2111:
/*!*****************************************!*\
  !*** ./src/app/examples/limitbadges.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LimitBadgesExample: () => (/* binding */ LimitBadgesExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class LimitBadgesExample {
  constructor() {
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
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.settings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = LimitBadgesExample;
_class.ɵfac = function LimitBadgesExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"]],
  template: function LimitBadgesExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LimitBadgesExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function LimitBadgesExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function LimitBadgesExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function LimitBadgesExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function LimitBadgesExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 4851:
/*!********************************************!*\
  !*** ./src/app/examples/limitselection.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LimitSelectionExample: () => (/* binding */ LimitSelectionExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class LimitSelectionExample {
  constructor() {
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
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      limitSelection: 2,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = LimitSelectionExample;
_class.ɵfac = function LimitSelectionExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"]],
  template: function LimitSelectionExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LimitSelectionExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function LimitSelectionExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function LimitSelectionExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function LimitSelectionExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function LimitSelectionExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 3483:
/*!***************************************!*\
  !*** ./src/app/examples/mock-data.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockService: () => (/* binding */ MockService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class MockService {
  constructor() {
    this.itemList = [];
    this.DATA = [{
      "id": "PBMMedAdhr",
      "name": "PBM Medication Adherence"
    }, {
      "id": "GapsInCare",
      "name": "Gaps In Care"
    }, {
      "id": "UCTest1",
      "name": "Use Case Test1"
    }, {
      "id": "BASICSAVE",
      "name": "A generic alternative or 30-90 day dispense opport"
    }, {
      "id": "ADVSAVE",
      "name": "An advnaced generic alternative or 30-90 day dispe"
    }, {
      "id": "AttAlert",
      "name": "Attachment Alert"
    }, {
      "id": "PatSave",
      "name": "Patient savings"
    }, {
      "id": "UCTest2",
      "name": "Use Case Test 2"
    }, {
      "id": "UCTest3",
      "name": "Use Case Test 3"
    }, {
      "id": "UCTest4",
      "name": "Use Case Test 4"
    }, {
      "id": "UCTest5",
      "name": "Use Case Test 5"
    }, {
      "id": "UCTest6",
      "name": "Use Case Test 6"
    }, {
      "id": "UCTest7",
      "name": "Use Case Test 7"
    }, {
      "id": "UCTest9",
      "name": "Use Case Test 9"
    }, {
      "id": "UCTest#Ten",
      "name": "Use Case Test 10"
    }, {
      "id": "UCTest8",
      "name": "Use Case Test 8"
    }, {
      "id": "UCTest11",
      "name": "Test Use Case 11"
    }, {
      "id": "UCTest12",
      "name": "Test Use Case 12"
    }, {
      "id": "UCTest13",
      "name": "Test Use Case 13"
    }, {
      "id": "PNLIMMUN",
      "name": "PNL Immunization"
    }, {
      "id": "TrustBrkr",
      "name": "Identity Services"
    }, {
      "id": "RTBC",
      "name": "real time benefit check for 90 day at retail"
    }];
    this.categories = ["Indian", "American", "Canadian", "Chinese"];
    this.namesList = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Cox", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Reyes", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler", "Barnes", "Fisher", "Henderson", "Coleman", "Simmons", "Patterson", "Jordan", "Reynolds", "Hamilton", "Graham", "Kim", "Gonzales", "Alexander", "Ramos", "Wallace", "Griffin", "West", "Cole", "Hayes", "Chavez", "Gibson", "Bryant", "Ellis", "Stevens", "Murray", "Ford", "Marshall", "Owens", "Mcdonald", "Harrison", "Ruiz", "Kennedy", "Wells", "Alvarez", "Woods", "Mendoza", "Castillo", "Olson", "Webb", "Washington", "Tucker", "Freeman", "Burns", "Henry", "Vasquez", "Snyder", "Simpson", "Crawford", "Jimenez", "Porter", "Mason", "Shaw", "Gordon", "Wagner", "Hunter", "Romero", "Hicks", "Dixon", "Hunt", "Palmer", "Robertson", "Black", "Holmes", "Stone", "Meyer", "Boyd", "Mills", "Warren", "Fox", "Rose", "Rice", "Moreno", "Schmidt", "Patel", "Ferguson", "Nichols", "Herrera", "Medina", "Ryan", "Fernandez", "Weaver", "Daniels", "Stephens", "Gardner", "Payne", "Kelley", "Dunn", "Pierce", "Arnold", "Tran", "Spencer", "Peters", "Hawkins", "Grant", "Hansen", "Castro", "Hoffman", "Hart", "Elliott", "Cunningham", "Knight", "Bradley", "Carroll", "Hudson", "Duncan", "Armstrong", "Berry", "Andrews", "Johnston", "Ray", "Lane", "Riley", "Carpenter", "Perkins", "Aguilar", "Silva", "Richards", "Willis", "Matthews", "Chapman", "Lawrence", "Garza", "Vargas", "Watkins", "Wheeler", "Larson", "Carlson", "Harper", "George", "Greene", "Burke", "Guzman", "Morrison", "Munoz", "Jacobs", "Obrien", "Lawson", "Franklin", "Lynch", "Bishop", "Carr", "Salazar", "Austin", "Mendez", "Gilbert", "Jensen", "Williamson", "Montgomery", "Harvey", "Oliver", "Howell", "Dean", "Hanson", "Weber", "Garrett", "Sims", "Burton", "Fuller", "Soto", "Mccoy", "Welch", "Chen", "Schultz", "Walters", "Reid", "Fields", "Walsh", "Little", "Fowler", "Bowman", "Davidson", "May", "Day", "Schneider", "Newman", "Brewer", "Lucas", "Holland", "Wong", "Banks", "Santos", "Curtis", "Pearson", "Delgado", "Valdez", "Pena", "Rios", "Douglas", "Sandoval", "Barrett", "Hopkins", "Keller", "Guerrero", "Stanley", "Bates", "Alvarado", "Beck", "Ortega", "Wade", "Estrada", "Contreras", "Barnett", "Caldwell", "Santiago", "Lambert", "Powers", "Chambers", "Nunez", "Craig", "Leonard", "Lowe", "Rhodes", "Byrd", "Gregory", "Shelton", "Frazier", "Becker", "Maldonado", "Fleming", "Vega", "Sutton", "Cohen", "Jennings", "Parks", "Mcdaniel", "Watts", "Barker", "Norris", "Vaughn", "Vazquez", "Holt", "Schwartz", "Steele", "Benson", "Neal", "Dominguez", "Horton", "Terry", "Wolfe", "Hale", "Lyons", "Graves", "Haynes", "Miles", "Park", "Warner", "Padilla", "Bush", "Thornton", "Mccarthy", "Mann", "Zimmerman", "Erickson", "Fletcher", "Mckinney", "Page", "Dawson", "Joseph", "Marquez", "Reeves", "Klein", "Espinoza", "Baldwin", "Moran", "Love", "Robbins", "Higgins", "Ball", "Cortez", "Le", "Griffith", "Bowen", "Sharp", "Cummings", "Ramsey", "Hardy", "Swanson", "Barber", "Acosta", "Luna", "Chandler", "Blair", "Daniel", "Cross", "Simon", "Dennis", "Oconnor", "Quinn", "Gross", "Navarro", "Moss", "Fitzgerald", "Doyle", "Mclaughlin", "Rojas", "Rodgers", "Stevenson", "Singh", "Yang", "Figueroa", "Harmon", "Newton", "Paul", "Manning", "Garner", "Mcgee", "Reese", "Francis", "Burgess", "Adkins", "Goodman", "Curry", "Brady", "Christensen", "Potter", "Walton", "Goodwin", "Mullins", "Molina", "Webster", "Fischer", "Campos", "Avila", "Sherman", "Todd", "Chang", "Blake", "Malone", "Wolf", "Hodges", "Juarez", "Gill", "Farmer", "Hines", "Gallagher", "Duran", "Hubbard", "Cannon", "Miranda", "Wang", "Saunders", "Tate", "Mack", "Hammond", "Carrillo", "Townsend", "Wise", "Ingram", "Barton", "Mejia", "Ayala", "Schroeder", "Hampton", "Rowe", "Parsons", "Frank", "Waters", "Strickland", "Osborne", "Maxwell", "Chan", "Deleon", "Norman", "Harrington", "Casey", "Patton", "Logan", "Bowers", "Mueller", "Glover", "Floyd", "Hartman", "Buchanan", "Cobb", "French", "Kramer", "Mccormick", "Clarke", "Tyler", "Gibbs", "Moody", "Conner", "Sparks", "Mcguire", "Leon", "Bauer", "Norton", "Pope", "Flynn", "Hogan", "Robles", "Salinas", "Yates", "Lindsey", "Lloyd", "Marsh", "Mcbride", "Owen", "Solis", "Pham", "Lang", "Pratt", "Lara", "Brock", "Ballard", "Trujillo", "Shaffer", "Drake", "Roman", "Aguirre", "Morton", "Stokes", "Lamb", "Pacheco", "Patrick", "Cochran", "Shepherd", "Cain", "Burnett", "Hess", "Li", "Cervantes", "Olsen", "Briggs", "Ochoa", "Cabrera", "Velasquez", "Montoya", "Roth", "Meyers", "Cardenas", "Fuentes", "Weiss", "Hoover", "Wilkins", "Nicholson", "Underwood", "Short", "Carson", "Morrow", "Colon", "Holloway", "Summers", "Bryan", "Petersen", "Mckenzie", "Serrano", "Wilcox", "Carey", "Clayton", "Poole", "Calderon", "Gallegos", "Greer", "Rivas", "Guerra", "Decker", "Collier", "Wall", "Whitaker", "Bass", "Flowers", "Davenport", "Conley", "Houston", "Huff", "Copeland", "Hood", "Monroe", "Massey", "Roberson", "Combs", "Franco", "Larsen", "Pittman", "Randall", "Skinner", "Wilkinson", "Kirby", "Cameron", "Bridges", "Anthony", "Richard", "Kirk", "Bruce", "Singleton", "Mathis", "Bradford", "Boone", "Abbott", "Charles", "Allison", "Sweeney", "Atkinson", "Horn", "Jefferson", "Rosales", "York", "Christian", "Phelps", "Farrell", "Castaneda", "Nash", "Dickerson", "Bond", "Wyatt", "Foley", "Chase", "Gates", "Vincent", "Mathews", "Hodge", "Garrison", "Trevino", "Villarreal", "Heath", "Dalton", "Valencia", "Callahan", "Hensley", "Atkins", "Huffman", "Roy", "Boyer", "Shields", "Lin", "Hancock", "Grimes", "Glenn", "Cline", "Delacruz", "Camacho", "Dillon", "Parrish", "Oneill", "Melton", "Booth", "Kane", "Berg", "Harrell", "Pitts", "Savage", "Wiggins", "Brennan", "Salas", "Marks", "Russo", "Sawyer", "Baxter", "Golden", "Hutchinson", "Liu", "Walter", "Mcdowell", "Wiley", "Rich", "Humphrey", "Johns", "Koch", "Suarez", "Hobbs", "Beard", "Gilmore", "Ibarra", "Keith", "Macias", "Khan", "Andrade", "Ware", "Stephenson", "Henson", "Wilkerson", "Dyer", "Mcclure", "Blackwell", "Mercado", "Tanner", "Eaton", "Clay", "Barron", "Beasley", "Oneal", "Preston", "Small", "Wu", "Zamora", "Macdonald", "Vance", "Snow", "Mcclain", "Stafford", "Orozco", "Barry", "English", "Shannon", "Kline", "Jacobson", "Woodard", "Huang", "Kemp", "Mosley", "Prince", "Merritt", "Hurst", "Villanueva", "Roach", "Nolan", "Lam", "Yoder", "Mccullough", "Lester", "Santana", "Valenzuela", "Winters", "Barrera", "Leach", "Orr", "Berger", "Mckee", "Strong", "Conway", "Stein", "Whitehead", "Bullock", "Escobar", "Knox", "Meadows", "Solomon", "Velez", "Odonnell", "Kerr", "Stout", "Blankenship", "Browning", "Kent", "Lozano", "Bartlett", "Pruitt", "Buck", "Barr", "Gaines", "Durham", "Gentry", "Mcintyre", "Sloan", "Melendez", "Rocha", "Herman", "Sexton", "Moon", "Hendricks", "Rangel", "Stark", "Lowery", "Hardin", "Hull", "Sellers", "Ellison", "Calhoun", "Gillespie", "Mora", "Knapp", "Mccall", "Morse", "Dorsey", "Weeks", "Nielsen", "Livingston", "Leblanc", "Mclean", "Bradshaw", "Glass", "Middleton", "Buckley", "Schaefer", "Frost", "Howe", "House", "Mcintosh", "Ho", "Pennington", "Reilly", "Hebert", "Mcfarland", "Hickman", "Noble", "Spears", "Conrad", "Arias", "Galvan", "Velazquez", "Huynh", "Frederick", "Randolph", "Cantu", "Fitzpatrick", "Mahoney", "Peck", "Villa", "Michael", "Donovan", "Mcconnell", "Walls", "Boyle", "Mayer", "Zuniga", "Giles", "Pineda", "Pace", "Hurley", "Mays", "Mcmillan", "Crosby", "Ayers", "Case", "Bentley", "Shepard", "Everett", "Pugh", "David", "Mcmahon", "Dunlap", "Bender", "Hahn", "Harding", "Acevedo", "Raymond", "Blackburn", "Duffy", "Landry", "Dougherty", "Bautista", "Shah", "Potts", "Arroyo", "Valentine", "Meza", "Gould", "Vaughan", "Fry", "Rush", "Avery", "Herring", "Dodson", "Clements", "Sampson", "Tapia", "Bean", "Lynn", "Crane", "Farley", "Cisneros", "Benton", "Ashley", "Mckay", "Finley", "Best", "Blevins", "Friedman", "Moses", "Sosa", "Blanchard", "Huber", "Frye", "Krueger", "Bernard", "Rosario", "Rubio", "Mullen", "Benjamin", "Haley", "Chung", "Moyer", "Choi", "Horne", "Yu", "Woodward", "Ali", "Nixon", "Hayden", "Rivers", "Estes", "Mccarty", "Richmond", "Stuart", "Maynard", "Brandt", "Oconnell", "Hanna", "Sanford", "Sheppard", "Church", "Burch", "Levy", "Rasmussen", "Coffey", "Ponce", "Faulkner", "Donaldson", "Schmitt", "Novak", "Costa", "Montes", "Booker", "Cordova", "Waller", "Arellano", "Maddox", "Mata", "Bonilla", "Stanton", "Compton", "Kaufman", "Dudley", "Mcpherson", "Beltran", "Dickson", "Mccann", "Villegas", "Proctor", "Hester", "Cantrell", "Daugherty", "Cherry", "Bray", "Davila", "Rowland", "Levine", "Madden", "Spence", "Good", "Irwin", "Werner", "Krause", "Petty", "Whitney", "Baird", "Hooper", "Pollard", "Zavala", "Jarvis", "Holden", "Haas", "Hendrix", "Mcgrath", "Bird", "Lucero", "Terrell", "Riggs", "Joyce", "Mercer", "Rollins", "Galloway", "Duke", "Odom", "Andersen", "Downs", "Hatfield", "Benitez", "Archer", "Huerta", "Travis", "Mcneil", "Hinton", "Zhang", "Hays", "Mayo", "Fritz", "Branch", "Mooney", "Ewing", "Ritter", "Esparza", "Frey", "Braun", "Gay", "Riddle", "Haney", "Kaiser", "Holder", "Chaney", "Mcknight", "Gamble", "Vang", "Cooley", "Carney", "Cowan", "Forbes", "Ferrell", "Davies", "Barajas", "Shea", "Osborn", "Bright", "Cuevas", "Bolton", "Murillo", "Lutz", "Duarte", "Kidd", "Key", "Cooke"];
    for (var t = 1; t <= 100; t++) {
      var tempObj = {
        "id": 0,
        "name": "",
        "category": ""
      };
      tempObj.id = t;
      tempObj.name = this.namesList[Math.floor(Math.random() * this.namesList.length)];
      tempObj.category = this.categories[Math.floor(Math.random() * this.categories.length)];
      this.itemList.push(tempObj);
    }
  }
  getDirectories() {
    return rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable.create(observer => {
      return new Promise(resolve => setTimeout(() => {
        console.log("directoriesLoaded");
        resolve(this.DATA);
      }, 1000)).then(response => {
        observer.next(response);
        observer.complete();
      });
    });
  }
  getChunkData(skip, limit) {
    return new Promise((resolve, reject) => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (skip < this.itemList.length) {
          return resolve(this.itemList.slice(skip, skip + limit));
        }
        reject();
      }, 1000 + Math.random() * 1000);
    });
  }
  getUseCases() {
    return rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable.create(observer => {
      return new Promise(resolve => setTimeout(() => {
        console.log("useCasesLoaded");
        resolve(this.DATA);
      }, 500)).then(response => {
        observer.next(response);
        observer.complete();
      });
    });
  }
  getData(arr) {
    if (arr.length === 0) {
      return this.DATA;
    }
    // Randomly remove and add some data
    arr.splice(Math.floor(Math.random() * arr.length), 1);
    arr.push(this.DATA[Math.floor(Math.random() * this.DATA.length)]);
    return arr;
  }
  getFruits() {
    return [{
      "id": 1,
      "itemName": "Apple",
      "category": "fruits"
    }, {
      "id": 2,
      "itemName": "Banana",
      "category": "fruits"
    }, {
      "id": 5,
      "itemName": "Tomatoe",
      "category": "vegetables"
    }, {
      "id": 6,
      "itemName": "Potatoe",
      "category": "vegetables"
    }];
  }
  getCountries() {
    return [{
      "id": 1,
      "itemName": "India",
      "category": "asia"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "category": "asia pacific"
    }, {
      "id": 3,
      "itemName": "Germany",
      "category": "Europe"
    }, {
      "id": 4,
      "itemName": "France",
      "category": "Europe"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "category": "asia"
    }, {
      "id": 6,
      "itemName": "Sweden",
      "category": "Europe"
    }];
  }
}
_class = MockService;
_class.ɵfac = function MockService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 7427:
/*!***********************************************!*\
  !*** ./src/app/examples/multipleDropdowns.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultipleDropdownsExample: () => (/* binding */ MultipleDropdownsExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-data */ 3483);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;




class MultipleDropdownsExample {
  constructor(mockService) {
    this.mockService = mockService;
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.directorySpecialties = [{
      "id": "PBMMedAdhr",
      "name": "PBM Medication Adherence"
    }, {
      "id": "GapsInCare",
      "name": "Gaps In Care"
    }, {
      "id": "UCTest1",
      "name": "Use Case Test1"
    }, {
      "id": "BASICSAVE",
      "name": "A generic alternative or 30-90 day dispense opport"
    }, {
      "id": "ADVSAVE",
      "name": "An advnaced generic alternative or 30-90 day dispe"
    }, {
      "id": "AttAlert",
      "name": "Attachment Alert"
    }, {
      "id": "PatSave",
      "name": "Patient savings"
    }, {
      "id": "UCTest2",
      "name": "Use Case Test 2"
    }, {
      "id": "UCTest3",
      "name": "Use Case Test 3"
    }, {
      "id": "UCTest4",
      "name": "Use Case Test 4"
    }, {
      "id": "UCTest5",
      "name": "Use Case Test 5"
    }, {
      "id": "UCTest6",
      "name": "Use Case Test 6"
    }, {
      "id": "UCTest7",
      "name": "Use Case Test 7"
    }, {
      "id": "UCTest9",
      "name": "Use Case Test 9"
    }, {
      "id": "UCTest#Ten",
      "name": "Use Case Test 10"
    }, {
      "id": "UCTest8",
      "name": "Use Case Test 8"
    }, {
      "id": "UCTest11",
      "name": "Test Use Case 11"
    }, {
      "id": "UCTest12",
      "name": "Test Use Case 12"
    }, {
      "id": "UCTest13",
      "name": "Test Use Case 13"
    }, {
      "id": "PNLIMMUN",
      "name": "PNL Immunization"
    }, {
      "id": "TrustBrkr",
      "name": "Identity Services"
    }, {
      "id": "RTBC",
      "name": "real time benefit check for 90 day at retail"
    }];
    this.useCases = [{
      "id": 1,
      "itemName": "India",
      "name": "IN"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "name": "SN"
    }, {
      "id": 3,
      "itemName": "Australia",
      "name": "AU"
    }, {
      "id": 4,
      "itemName": "Canada",
      "name": "CA"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "name": "SK"
    }, {
      "id": 6,
      "itemName": "Brazil",
      "name": "BR"
    }];
    this.dropdownSettings = {};
    this.dropdownSettings2 = {};
    this.selectedDirectorySpecialties = [{
      "id": "PBMMedAdhr",
      "name": "PBM Medication Adherence"
    }, {
      "id": "GapsInCare",
      "name": "Gaps In Care"
    }];
    this.selectedUseCases = [];
    this.directoriesDropdownStatus = 'closed';
    this.casesDropdownStatus = 'closed';
    this.cssgist = false;
    this.title = "Multiple Dropdowns in a page";
    this.tsgist = "CuppaLabs/12225540c23c8a171a81f996fc8d9ca6";
    this.htmlgist = "CuppaLabs/3788fb5437925b9d7d8edafec567639c";
    this.mockgist = "CuppaLabs/b3e947ec83710307a3b8680a2ff89693";
    this.tstitle = "multiple-dropdowns.ts";
    this.htmltitle = "multiple-dropdowns.html";
    this.mocktitle = "mock-data.ts";
  }
  ngOnInit() {
    this.dropdownSettings = {
      text: "Select",
      enableSearchFilter: true,
      labelKey: "name",
      tagToBody: true
    };
    this.dropdownSettings2 = {
      text: "Select",
      enableSearchFilter: true,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onSelectAll2(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll2(items) {
    console.log(items);
  }
  onDirectoriesOpen(e) {
    this.directoriesDropdownStatus = 'open';
  }
  onDirectoriesClose(e) {
    this.directoriesDropdownStatus = 'close';
  }
  onCasesOpen(e) {
    this.casesDropdownStatus = 'open';
  }
  onCasesClose(e) {
    this.casesDropdownStatus = 'close';
  }
}
_class = MultipleDropdownsExample;
_class.ɵfac = function MultipleDropdownsExample_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_mock_data__WEBPACK_IMPORTED_MODULE_0__.MockService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 22,
  vars: 8,
  consts: [[1, "form-group", "col-md-12"], ["for", "directorySpecialties"], [1, "float-right"], ["id", "directorySpecialties", "name", "directorySpecialties", 3, "ngModel", "data", "settings", "ngModelChange", "onOpen", "onClose", "onSelectAll", "onDeSelectAll"], ["for", "useCases"], ["id", "useCases", "name", "useCases", 3, "ngModel", "data", "settings", "ngModelChange", "onOpen", "onClose", "onSelectAll", "onDeSelectAll"]],
  template: function MultipleDropdownsExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Directory Specialties");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Directory Dropdown status: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "angular2-multiselect", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MultipleDropdownsExample_Template_angular2_multiselect_ngModelChange_9_listener($event) {
        return ctx.selectedDirectorySpecialties = $event;
      })("onOpen", function MultipleDropdownsExample_Template_angular2_multiselect_onOpen_9_listener($event) {
        return ctx.onDirectoriesOpen($event);
      })("onClose", function MultipleDropdownsExample_Template_angular2_multiselect_onClose_9_listener($event) {
        return ctx.onDirectoriesClose($event);
      })("onSelectAll", function MultipleDropdownsExample_Template_angular2_multiselect_onSelectAll_9_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function MultipleDropdownsExample_Template_angular2_multiselect_onDeSelectAll_9_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br")(11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 0)(13, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Use Cases");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Cases Dropdown status: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "angular2-multiselect", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MultipleDropdownsExample_Template_angular2_multiselect_ngModelChange_21_listener($event) {
        return ctx.selectedUseCases = $event;
      })("onOpen", function MultipleDropdownsExample_Template_angular2_multiselect_onOpen_21_listener($event) {
        return ctx.onCasesOpen($event);
      })("onClose", function MultipleDropdownsExample_Template_angular2_multiselect_onClose_21_listener($event) {
        return ctx.onCasesClose($event);
      })("onSelectAll", function MultipleDropdownsExample_Template_angular2_multiselect_onSelectAll_21_listener($event) {
        return ctx.onSelectAll2($event);
      })("onDeSelectAll", function MultipleDropdownsExample_Template_angular2_multiselect_onDeSelectAll_21_listener($event) {
        return ctx.onDeSelectAll2($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.directoriesDropdownStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedDirectorySpecialties)("data", ctx.directorySpecialties)("settings", ctx.dropdownSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.casesDropdownStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedUseCases)("data", ctx.useCases)("settings", ctx.dropdownSettings2);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_1__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 6830:
/*!****************************************!*\
  !*** ./src/app/examples/remoteData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteDataExample: () => (/* binding */ RemoteDataExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/menu-item */ 9970);
var _class;





function RemoteDataExample_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.flag, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.capital);
  }
}
class RemoteDataExample {
  constructor(http) {
    this.http = http;
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.cssgist = false;
    this.title = "Data from remote API example";
    this.tsgist = "CuppaLabs/ffb168ae28c36a9130ad5ce74b720c5d";
    this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    this.tstitle = "remoteData.ts";
    this.htmltitle = "remoteData.html";
  }
  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(res => {
      console.log(res);
      this.itemList = res;
    }, error => {});
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      primaryKey: "alpha3Code",
      labelKey: "name",
      groupBy: 'region',
      enableSearchFilter: true,
      searchBy: ['name', 'capital'],
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  onSearch(evt) {
    console.log(evt.target.value);
  }
}
_class = RemoteDataExample;
_class.ɵfac = function RemoteDataExample_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 3,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [2, "color", "#333", "width", "150px"], [2, "width", "30px", "border", "1px solid #efefef", "margin-right", "0px", 3, "src"]],
  template: function RemoteDataExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RemoteDataExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function RemoteDataExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function RemoteDataExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function RemoteDataExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function RemoteDataExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "c-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RemoteDataExample_ng_template_2_Template, 5, 3, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect, _projects_angular2_multiselect_dropdown_lib_src_lib_menu_item__WEBPACK_IMPORTED_MODULE_1__.Item],
  encapsulation: 2
});

/***/ }),

/***/ 2521:
/*!*******************************************!*\
  !*** ./src/app/examples/resetdropdown.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetDropdownExample: () => (/* binding */ ResetDropdownExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



const _c0 = ["dropdownElem"];
class ResetDropdownExample {
  constructor() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.cssgist = false;
    this.title = "Methods - Reset, Open, Close dropdown";
    this.tsgist = "CuppaLabs/96d3ca7681f1a7a38b8c76b2f1552458";
    this.htmlgist = "CuppaLabs/bbd73b9f9864effb69f361c9fc65a6e5";
    this.tstitle = "resetDropdown.ts";
    this.htmltitle = "resetDropdown.html";
  }
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  showModel() {
    console.log(this.selectedItems);
  }
  changeData() {
    this.selectedItems = [];
  }
  open(evt) {
    this.dropdownElem.openDropdown();
    evt.stopPropagation();
  }
  close(evt) {
    this.dropdownElem.closeDropdown();
  }
}
_class = ResetDropdownExample;
_class.ɵfac = function ResetDropdownExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  viewQuery: function ResetDropdownExample_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdownElem = _t.first);
    }
  },
  decls: 10,
  vars: 3,
  consts: [[1, "example-button-row"], [1, "btn", "btn-primary", 3, "click"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], ["dropdownElem", ""]],
  template: function ResetDropdownExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetDropdownExample_Template_button_click_1_listener() {
        return ctx.changeData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetDropdownExample_Template_button_click_3_listener($event) {
        return ctx.open($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Open");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetDropdownExample_Template_button_click_5_listener($event) {
        return ctx.close($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "angular2-multiselect", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ResetDropdownExample_Template_angular2_multiselect_ngModelChange_7_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function ResetDropdownExample_Template_angular2_multiselect_onSelect_7_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function ResetDropdownExample_Template_angular2_multiselect_onDeSelect_7_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function ResetDropdownExample_Template_angular2_multiselect_onSelectAll_7_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function ResetDropdownExample_Template_angular2_multiselect_onDeSelectAll_7_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 3642:
/*!*************************************************!*\
  !*** ./src/app/examples/searchByOneProperty.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFilterByOnePropertyExample: () => (/* binding */ SearchFilterByOnePropertyExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class SearchFilterByOnePropertyExample {
  constructor() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.cssgist = false;
    this.title = "Search filter by one property / key";
    this.tsgist = "CuppaLabs/f6acd1eb94c95df32f689260b1f38b4c";
    this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    this.tstitle = "searchFilterByProperty.ts";
    this.htmltitle = "searchFilterByProperty.html";
  }
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India",
      "name": "IN"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "name": "SN"
    }, {
      "id": 3,
      "itemName": "Australia",
      "name": "AU"
    }, {
      "id": 4,
      "itemName": "Canada",
      "name": "CA"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "name": "SK"
    }, {
      "id": 6,
      "itemName": "Brazil",
      "name": "BR"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India",
      "name": "IN"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "name": "SN"
    }, {
      "id": 3,
      "itemName": "Australia",
      "name": "AU"
    }, {
      "id": 4,
      "itemName": "Canada",
      "name": "CA"
    }];
    this.settings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      searchBy: ['itemName'],
      searchPlaceholderText: 'Search by name',
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = SearchFilterByOnePropertyExample;
_class.ɵfac = function SearchFilterByOnePropertyExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"]],
  template: function SearchFilterByOnePropertyExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchFilterByOnePropertyExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function SearchFilterByOnePropertyExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function SearchFilterByOnePropertyExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function SearchFilterByOnePropertyExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function SearchFilterByOnePropertyExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 2209:
/*!******************************************!*\
  !*** ./src/app/examples/searchFilter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFilterExample: () => (/* binding */ SearchFilterExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class SearchFilterExample {
  constructor() {
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
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India",
      "name": "IN"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "name": "SN"
    }, {
      "id": 3,
      "itemName": "Australia",
      "name": "AU"
    }, {
      "id": 4,
      "itemName": "Canada",
      "name": "CA"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "name": "SK"
    }, {
      "id": 6,
      "itemName": "Brazil",
      "name": "BR"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India",
      "name": "IN"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "name": "SN"
    }, {
      "id": 3,
      "itemName": "Australia",
      "name": "AU"
    }, {
      "id": 4,
      "itemName": "Canada",
      "name": "CA"
    }];
    this.settings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = SearchFilterExample;
_class.ɵfac = function SearchFilterExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"]],
  template: function SearchFilterExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchFilterExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function SearchFilterExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function SearchFilterExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function SearchFilterExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function SearchFilterExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 277:
/*!****************************************************!*\
  !*** ./src/app/examples/searchFilterAddNewItem.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFilterAddItemExample: () => (/* binding */ SearchFilterAddItemExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class SearchFilterAddItemExample {
  constructor() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.count = 6;
    this.cssgist = false;
    this.title = "Search and Add New Item, if not found";
    this.tsgist = "CuppaLabs/c1e00c870c3e3b9213e69e0a93518cc6";
    this.htmlgist = "CuppaLabs/0583ba4be8b7c192d14f04375f96c074";
    this.tstitle = "searchFilterAddNewItem.ts";
    this.htmltitle = "searchFilter.html";
  }
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India",
      "name": "IN"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "name": "SN"
    }, {
      "id": 3,
      "itemName": "Australia",
      "name": "AU"
    }, {
      "id": 4,
      "itemName": "Canada",
      "name": "CA"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "name": "SK"
    }, {
      "id": 6,
      "itemName": "Brazil",
      "name": "BR"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India",
      "name": "IN"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "name": "SN"
    }, {
      "id": 3,
      "itemName": "Australia",
      "name": "AU"
    }, {
      "id": 4,
      "itemName": "Canada",
      "name": "CA"
    }];
    this.settings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      addNewItemOnFilter: true,
      enableFilterSelectAll: true,
      tagToBody: true
    };
  }
  onAddItem(data) {
    this.count++;
    const list = [...this.itemList, ...[{
      "id": this.count,
      "itemName": data,
      "name": data
    }]];
    this.itemList = list;
    this.selectedItems.push({
      "id": this.count,
      "itemName": data,
      "name": data
    });
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = SearchFilterAddItemExample;
_class.ɵfac = function SearchFilterAddItemExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 7,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "onAddFilterNewItem"], ["role", "alert", 1, "alert", "alert-warning"]],
  template: function SearchFilterAddItemExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchFilterAddItemExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function SearchFilterAddItemExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function SearchFilterAddItemExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function SearchFilterAddItemExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function SearchFilterAddItemExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      })("onAddFilterNewItem", function SearchFilterAddItemExample_Template_angular2_multiselect_onAddFilterNewItem_0_listener($event) {
        return ctx.onAddItem($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "How this example works !! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " When you try to filter the list items, if no search results are available, you would see an 'Add' button. On clicking the add button, it would emit the text that you enter in the input field to your controlle in the callback method, as show in the below code. You can add this item to the data list. If you wish, that this item be selected, add it to selected items list.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 5246:
/*!*********************************************!*\
  !*** ./src/app/examples/singleselection.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingleSelectionExample: () => (/* binding */ SingleSelectionExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class SingleSelectionExample {
  constructor() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.count = 6;
    this.cssgist = false;
    this.title = "Single Selection";
    this.tsgist = "CuppaLabs/6ef578ce507dfd548eec39e008b4de14";
    this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    this.tstitle = "singleSelection.ts";
    this.htmltitle = "singleSelection.html";
  }
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India",
      "name": "IN"
    }, {
      "id": 2,
      "itemName": "Singapore",
      "name": "SN"
    }, {
      "id": 3,
      "itemName": "Australia",
      "name": "AU"
    }, {
      "id": 4,
      "itemName": "Canada",
      "name": "CA"
    }, {
      "id": 5,
      "itemName": "South Korea",
      "name": "SK"
    }, {
      "id": 6,
      "itemName": "Brazil",
      "name": "BR"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India",
      "name": "IN"
    }];
    this.settings = {
      enableSearchFilter: true,
      addNewItemOnFilter: true,
      singleSelection: true,
      text: "Select Country",
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  onAddItem(data) {
    this.count++;
    this.itemList.push({
      "id": this.count,
      "itemName": data,
      "name": data
    });
    this.selectedItems = [];
    this.selectedItems.push({
      "id": this.count,
      "itemName": data,
      "name": data
    });
  }
}
_class = SingleSelectionExample;
_class.ɵfac = function SingleSelectionExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onAddFilterNewItem", "onDeSelectAll"]],
  template: function SingleSelectionExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SingleSelectionExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function SingleSelectionExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function SingleSelectionExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function SingleSelectionExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onAddFilterNewItem", function SingleSelectionExample_Template_angular2_multiselect_onAddFilterNewItem_0_listener($event) {
        return ctx.onAddItem($event);
      })("onDeSelectAll", function SingleSelectionExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 8654:
/*!*************************************!*\
  !*** ./src/app/examples/styling.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StylingExample: () => (/* binding */ StylingExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class StylingExample {
  constructor() {
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
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class-example",
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = StylingExample;
_class.ɵfac = function StylingExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"]],
  template: function StylingExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StylingExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function StylingExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function StylingExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function StylingExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function StylingExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 2142:
/*!****************************************!*\
  !*** ./src/app/examples/templating.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplatingExample: () => (/* binding */ TemplatingExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/menu-item */ 9970);
var _class;




function TemplatingExample_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function TemplatingExample_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label")(4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Capital - ", item_r3.capital, "");
  }
}
class TemplatingExample {
  constructor() {
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
  ngOnInit() {
    this.itemList = [{
      "category": "asia",
      "id": 1,
      "itemName": "India",
      "capital": "Delhi",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
    }, {
      "category": "asia",
      "id": 2,
      "itemName": "Singapore",
      "capital": "Singapore",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"
    }, {
      "category": "europe",
      "id": 3,
      "itemName": "United Kingdom",
      "capital": "London",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"
    }, {
      "category": "northamerica",
      "id": 4,
      "itemName": "Canada",
      "capital": "Ottawa",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"
    }, {
      "category": "asia",
      "id": 5,
      "itemName": "South Korea",
      "capital": "Seoul",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg"
    }, {
      "category": "latinamerica",
      "id": 6,
      "itemName": "Brazil",
      "capital": "Brasilia",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"
    }];
    this.selectedItems = [{
      "category": "asia",
      "id": 1,
      "itemName": "India",
      "capital": "Delhi",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
    }, {
      "category": "asia",
      "id": 2,
      "itemName": "Singapore",
      "capital": "Singapore",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"
    }, {
      "category": "europe",
      "id": 3,
      "itemName": "United Kingdom",
      "capital": "London",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"
    }, {
      "category": "northamerica",
      "id": 4,
      "itemName": "Canada",
      "capital": "Ottawa",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      showCheckbox: true,
      groupBy: "category",
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  onGroupSelect(selectedGroupItem) {
    console.log(selectedGroupItem);
  }
  onGroupDeSelect(deselectedGroupItem) {
    console.log(deselectedGroupItem);
  }
}
_class = TemplatingExample;
_class.ɵfac = function TemplatingExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 5,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "onGroupSelect", "onGroupDeSelect"], [2, "margin", "0px"], [2, "width", "16px", "margin", "0 0 0 4px", 3, "src"], [2, "width", "30px", "border", "1px solid #efefef", "margin-right", "20px", 3, "src"], [2, "color", "#333", "margin-right", "20px"]],
  template: function TemplatingExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TemplatingExample_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function TemplatingExample_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function TemplatingExample_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function TemplatingExample_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function TemplatingExample_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      })("onGroupSelect", function TemplatingExample_Template_angular2_multiselect_onGroupSelect_0_listener($event) {
        return ctx.onGroupSelect($event);
      })("onGroupDeSelect", function TemplatingExample_Template_angular2_multiselect_onGroupDeSelect_0_listener($event) {
        return ctx.onGroupDeSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "c-badge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TemplatingExample_ng_template_2_Template, 3, 2, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "c-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TemplatingExample_ng_template_4_Template, 6, 3, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect, _projects_angular2_multiselect_dropdown_lib_src_lib_menu_item__WEBPACK_IMPORTED_MODULE_1__.Item, _projects_angular2_multiselect_dropdown_lib_src_lib_menu_item__WEBPACK_IMPORTED_MODULE_1__.Badge],
  encapsulation: 2
});

/***/ }),

/***/ 867:
/*!*************************************!*\
  !*** ./src/app/examples/theming.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemingExample: () => (/* binding */ ThemingExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;



class ThemingExample {
  constructor() {
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
  ngOnInit() {
    this.itemList = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }, {
      "countryId": 5,
      "itemName": "South Korea"
    }, {
      "countryId": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      primaryKey: "countryId",
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = ThemingExample;
_class.ɵfac = function ThemingExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 4,
  vars: 3,
  consts: [[1, "col-md-8", "mr-auto", "ml-auto", "dropdown-container"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "example-title", "code-section"]],
  template: function ThemingExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "angular2-multiselect", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ThemingExample_Template_angular2_multiselect_ngModelChange_1_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function ThemingExample_Template_angular2_multiselect_onSelect_1_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function ThemingExample_Template_angular2_multiselect_onDeSelect_1_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function ThemingExample_Template_angular2_multiselect_onSelectAll_1_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function ThemingExample_Template_angular2_multiselect_onDeSelectAll_1_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 3894:
/*!*****************************************!*\
  !*** ./src/app/examples/usingInList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsingInListExample: () => (/* binding */ UsingInListExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;




function UsingInListExample_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "angular2-multiselect", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsingInListExample_tr_9_Template_angular2_multiselect_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r1.countries = $event);
    })("onSelect", function UsingInListExample_tr_9_Template_angular2_multiselect_onSelect_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onItemSelect($event));
    })("onDeSelect", function UsingInListExample_tr_9_Template_angular2_multiselect_onDeSelect_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.OnItemDeSelect($event));
    })("onSelectAll", function UsingInListExample_tr_9_Template_angular2_multiselect_onSelectAll_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onSelectAll($event));
    })("onDeSelectAll", function UsingInListExample_tr_9_Template_angular2_multiselect_onDeSelectAll_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onDeSelectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.itemList)("ngModel", item_r1.countries)("settings", ctx_r0.settings);
  }
}
class UsingInListExample {
  constructor() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.customers = [];
    this.cssgist = false;
    this.title = "Using in List - Inside `for loop`";
    this.tsgist = "CuppaLabs/0d2dc802967cca16ffc5053d0b873aba";
    this.htmlgist = "CuppaLabs/85fb2b925a56c2e533e321ae09de0e2f";
    this.tstitle = "usingInList.ts";
    this.htmltitle = "usingInList.html";
  }
  ngOnInit() {
    this.customers = [{
      name: "Toshiba",
      countries: [{
        "category": "asia",
        "id": 1,
        "itemName": "India",
        "capital": "Delhi",
        "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
      }, {
        "category": "asia",
        "id": 2,
        "itemName": "Singapore",
        "capital": "Singapore",
        "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"
      }]
    }, {
      name: "Apple",
      countries: []
    }, {
      name: "Samsung",
      countries: []
    }, {
      name: "MI",
      countries: [{
        "category": "asia",
        "id": 1,
        "itemName": "India",
        "capital": "Delhi",
        "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
      }, {
        "category": "asia",
        "id": 2,
        "itemName": "Singapore",
        "capital": "Singapore",
        "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"
      }]
    }, {
      name: "Google",
      countries: []
    }];
    this.itemList = [{
      "category": "asia",
      "id": 1,
      "itemName": "India",
      "capital": "Delhi",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
    }, {
      "category": "asia",
      "id": 2,
      "itemName": "Singapore",
      "capital": "Singapore",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"
    }, {
      "category": "europe",
      "id": 3,
      "itemName": "United Kingdom",
      "capital": "London",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"
    }, {
      "category": "northamerica",
      "id": 4,
      "itemName": "Canada",
      "capital": "Ottawa",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"
    }, {
      "category": "asia",
      "id": 5,
      "itemName": "South Korea",
      "capital": "Seoul",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg"
    }, {
      "category": "latinamerica",
      "id": 6,
      "itemName": "Brazil",
      "capital": "Brasilia",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"
    }];
    this.selectedItems = [{
      "category": "asia",
      "id": 1,
      "itemName": "India",
      "capital": "Delhi",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
    }, {
      "category": "asia",
      "id": 2,
      "itemName": "Singapore",
      "capital": "Singapore",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"
    }, {
      "category": "europe",
      "id": 3,
      "itemName": "United Kingdom",
      "capital": "London",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"
    }, {
      "category": "northamerica",
      "id": 4,
      "itemName": "Canada",
      "capital": "Ottawa",
      "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      showCheckbox: true,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(this.customers);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
  onGroupSelect(selectedGroupItem) {
    console.log(selectedGroupItem);
  }
  onGroupDeSelect(deselectedGroupItem) {
    console.log(deselectedGroupItem);
  }
}
_class = UsingInListExample;
_class.ɵfac = function UsingInListExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 12,
  vars: 4,
  consts: [[1, "col-md-12", "mr-auto", "ml-auto", "dropdown-container"], [1, "table", "table-bordered"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"]],
  template: function UsingInListExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead", 2)(3, "tr")(4, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Countries");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UsingInListExample_tr_9_Template, 5, 4, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.customers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 2, ctx.customers), "\n");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe],
  encapsulation: 2
});

/***/ }),

/***/ 4714:
/*!***********************************************!*\
  !*** ./src/app/examples/usingInReactForms.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsingWithReactiveFormExample: () => (/* binding */ UsingWithReactiveFormExample)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;





function UsingWithReactiveFormExample_h6_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const obj_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r1.itemName);
  }
}
class UsingWithReactiveFormExample {
  constructor(fb) {
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
  createForm() {
    this.userForm = this.fb.group({
      name: 'xbvxncvx',
      email: ['absd@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      skills: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  submitForm() {
    console.log(this.userForm);
  }
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "Angular"
    }, {
      "id": 2,
      "itemName": "JavaScript"
    }, {
      "id": 3,
      "itemName": "HTML"
    }, {
      "id": 4,
      "itemName": "CSS"
    }, {
      "id": 5,
      "itemName": "ReactJS"
    }, {
      "id": 6,
      "itemName": "HTML5"
    }];
    this.selectedItems = [];
    this.settings = {
      text: "Select Skills",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = UsingWithReactiveFormExample;
_class.ɵfac = function UsingWithReactiveFormExample_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 48,
  vars: 14,
  consts: [["novalidate", "", 2, "border", "1px solid #ccc", "padding", "10px", 3, "formGroup"], [1, "form-group"], ["for", "name"], ["formControlName", "name", 1, "form-control"], [2, "color", "red", "float", "right"], ["formControlName", "email", 1, "form-control"], ["formControlName", "skills", 3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "d-grid", "col-12", "mx-auto"], [1, "btn", "btn-success", "btn-block", 3, "disabled", "click"], [1, "table"], [4, "ngFor", "ngForOf"]],
  template: function UsingWithReactiveFormExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1)(7, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "* required");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1)(14, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "* required");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "angular2-multiselect", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsingWithReactiveFormExample_Template_angular2_multiselect_ngModelChange_18_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function UsingWithReactiveFormExample_Template_angular2_multiselect_onSelect_18_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function UsingWithReactiveFormExample_Template_angular2_multiselect_onDeSelect_18_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function UsingWithReactiveFormExample_Template_angular2_multiselect_onSelectAll_18_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function UsingWithReactiveFormExample_Template_angular2_multiselect_onDeSelectAll_18_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7)(21, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsingWithReactiveFormExample_Template_button_click_21_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 9)(24, "tr")(25, "td")(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr")(31, "td")(32, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr")(37, "td")(38, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, UsingWithReactiveFormExample_h6_41_Template, 2, 1, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.userForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userForm.value.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userForm.value.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userForm.value.skills);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 10, ctx.userForm.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Form status: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 12, ctx.userForm.status), "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
  encapsulation: 2
});

/***/ }),

/***/ 7043:
/*!********************************************!*\
  !*** ./src/app/examples/usingWithForms.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsingWithFormExample: () => (/* binding */ UsingWithFormExample)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class;




function UsingWithFormExample_h6_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const obj_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r5.itemName);
  }
}
class UsingWithFormExample {
  onSubmit() {
    this.submitted = true;
  }
  constructor() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.formModel = {
      name: '',
      email: 'ascasc@aa.com',
      skills: [{
        "id": 1,
        "itemName": "Angular"
      }]
    };
    this.submitted = false;
    this.cssgist = false;
    this.title = "Using with Template driven Forms";
    this.tsgist = "CuppaLabs/6cd9396b8f5589b792b27dd10efe9140";
    this.htmlgist = "CuppaLabs/8148509a46a59e3aba513808daa40ca1";
    this.tstitle = "using-in-forms.ts";
    this.htmltitle = "using-with-forms.html";
  }
  ngOnInit() {
    this.itemList = [{
      "id": 1,
      "itemName": "Angular"
    }, {
      "id": 2,
      "itemName": "JavaScript"
    }, {
      "id": 3,
      "itemName": "HTML"
    }, {
      "id": 4,
      "itemName": "CSS"
    }, {
      "id": 5,
      "itemName": "ReactJS"
    }, {
      "id": 6,
      "itemName": "HTML5"
    }];
    this.settings = {
      text: "Select Skills",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = UsingWithFormExample;
_class.ɵfac = function UsingWithFormExample_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 68,
  vars: 23,
  consts: [[2, "border", "1px solid #ccc", "padding", "10px", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "pattern", "[a-zA-Z][a-zA-Z ]+", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [3, "hidden"], [2, "color", "red", "float", "right"], ["type", "text", "id", "emailaddress", "required", "", "name", "email", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "skills", "required", "", 3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], ["skills", "ngModel"], [1, "d-grid", "col-12", "mx-auto"], ["type", "submit", 1, "btn", "btn-success", "btn-block", 3, "disabled"], [1, "table"], [4, "ngFor", "ngForOf"]],
  template: function UsingWithFormExample_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsingWithFormExample_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsingWithFormExample_Template_input_ngModelChange_5_listener($event) {
        return ctx.formModel.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name is required");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Only alphabetsallowed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2)(14, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "* required");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsingWithFormExample_Template_input_ngModelChange_18_listener($event) {
        return ctx.formModel.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6)(21, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email is required");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Email format should be ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "small")(26, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "joe@abc.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2)(30, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Skills ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "* required");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "angular2-multiselect", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsingWithFormExample_Template_angular2_multiselect_ngModelChange_34_listener($event) {
        return ctx.formModel.skills = $event;
      })("onSelect", function UsingWithFormExample_Template_angular2_multiselect_onSelect_34_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function UsingWithFormExample_Template_angular2_multiselect_onDeSelect_34_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function UsingWithFormExample_Template_angular2_multiselect_onSelectAll_34_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function UsingWithFormExample_Template_angular2_multiselect_onDeSelectAll_34_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6)(37, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Atleast one Skill is required");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13)(41, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "table", 15)(44, "tr")(45, "td")(46, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "tr")(51, "td")(52, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr")(57, "td")(58, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, UsingWithFormExample_h6_61_Template, 2, 1, "h6", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.formModel.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !_r1.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !_r1.hasError("pattern"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.formModel.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !_r2.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !_r2.hasError("pattern"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.formModel.skills)("settings", ctx.settings);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", _r3.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !_r3.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formModel.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formModel.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formModel.skills);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 19, ctx.formModel));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Form status: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 21, _r0.form.status), "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe],
  encapsulation: 2
});

/***/ }),

/***/ 4781:
/*!***********************************************!*\
  !*** ./src/app/examples/usingWithinDialog.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogContentExampleDialog: () => (/* binding */ DialogContentExampleDialog),
/* harmony export */   UsingWithinDialog: () => (/* binding */ UsingWithinDialog)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ 8026);
var _class, _class2;




class UsingWithinDialog {
  constructor(seotitle, meta) {
    this.seotitle = seotitle;
    this.meta = meta;
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
    this.cssgist = false;
    this.title = "Basic example";
    this.tsgist = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
    this.htmlgist = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    this.tstitle = "basic.ts";
    this.htmltitle = "basic.html";
    this.seotitle.setTitle('Basic example');
    this.meta.addTags([{
      name: 'description',
      content: 'Basic example of angular multiselect drodown.'
    }]);
  }
  ngOnInit() {
    this.itemList = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }, {
      "countryId": 5,
      "itemName": "South Korea"
    }, {
      "countryId": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }, {
      "countryId": 5,
      "itemName": "South Korea"
    }, {
      "countryId": 6,
      "itemName": "Brazil"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      primaryKey: "countryId",
      enableSearchFilter: true,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class = UsingWithinDialog;
_class.ɵfac = function UsingWithinDialog_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 15,
  vars: 3,
  consts: [[1, "d-grid", "gap-2", "col-6", "mx-auto"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-primary"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"]],
  template: function UsingWithinDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Launch demo modal ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dropdown in Modal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "angular2-multiselect", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsingWithinDialog_Template_angular2_multiselect_ngModelChange_11_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function UsingWithinDialog_Template_angular2_multiselect_onSelect_11_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function UsingWithinDialog_Template_angular2_multiselect_onDeSelect_11_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function UsingWithinDialog_Template_angular2_multiselect_onSelectAll_11_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function UsingWithinDialog_Template_angular2_multiselect_onDeSelectAll_11_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});
class DialogContentExampleDialog {
  constructor() {
    this.itemList = [];
    this.selectedItems = [];
    this.settings = {};
  }
  ngOnInit() {
    this.itemList = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }, {
      "countryId": 5,
      "itemName": "South Korea"
    }, {
      "countryId": 6,
      "itemName": "Brazil"
    }];
    this.selectedItems = [{
      "countryId": 1,
      "itemName": "India"
    }, {
      "countryId": 2,
      "itemName": "Singapore"
    }, {
      "countryId": 3,
      "itemName": "Australia"
    }, {
      "countryId": 4,
      "itemName": "Canada"
    }, {
      "countryId": 5,
      "itemName": "South Korea"
    }, {
      "countryId": 6,
      "itemName": "Brazil"
    }];
    this.settings = {
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      primaryKey: "countryId",
      enableSearchFilter: true,
      tagToBody: true
    };
  }
  onItemSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items) {
    console.log(items);
  }
  onDeSelectAll(items) {
    console.log(items);
  }
}
_class2 = DialogContentExampleDialog;
_class2.ɵfac = function DialogContentExampleDialog_Factory(t) {
  return new (t || _class2)();
};
_class2.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["dialog-content-example-dialog"]],
  decls: 39,
  vars: 3,
  consts: [[3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"]],
  template: function DialogContentExampleDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "angular2-multiselect", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogContentExampleDialog_Template_angular2_multiselect_ngModelChange_0_listener($event) {
        return ctx.selectedItems = $event;
      })("onSelect", function DialogContentExampleDialog_Template_angular2_multiselect_onSelect_0_listener($event) {
        return ctx.onItemSelect($event);
      })("onDeSelect", function DialogContentExampleDialog_Template_angular2_multiselect_onDeSelect_0_listener($event) {
        return ctx.OnItemDeSelect($event);
      })("onSelectAll", function DialogContentExampleDialog_Template_angular2_multiselect_onSelectAll_0_listener($event) {
        return ctx.onSelectAll($event);
      })("onDeSelectAll", function DialogContentExampleDialog_Template_angular2_multiselect_onDeSelectAll_0_listener($event) {
        return ctx.onDeSelectAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Develop across all platforms");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Speed & Performance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Incredible tooling");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Loved by millions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "What is Angular?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Architecture overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.itemList)("ngModel", ctx.selectedItems)("settings", ctx.settings);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_0__.AngularMultiSelect],
  encapsulation: 2
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map