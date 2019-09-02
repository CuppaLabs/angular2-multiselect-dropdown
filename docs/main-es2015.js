(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdownOnClickOut()\">\n    <div class=\"selected-list\" #selectedList>\n        <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\" [attr.tabindex]=\"0\">\n\n            <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\n            <span *ngIf=\"settings.singleSelection && !badgeTempl\">\n                <span *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);\">\n                    {{item[settings.labelKey]}}\n                </span>\n            </span>\n            <span class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && settings.singleSelection && badgeTempl \">\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\">\n                <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n\n            <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                            <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                        </span>\n            <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                <c-icon [name]=\"'remove'\"></c-icon>\n            </span>\n        </div>\n        </span>\n        <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\n            <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\n                <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n                <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                    <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                </span>\n                <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                    <c-icon [name]=\"'remove'\"></c-icon>\n                </span>\n            </div>\n        </div>\n        <span class=\"countplaceholder\" *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\n        <span class=\"c-remove clear-all\" *ngIf=\"settings.clearAll && selectedItems?.length > 0 && !settings.disabled\" (click)=\"clearSelection($event);$event.stopPropagation()\">\n            <c-icon [name]=\"'remove'\"></c-icon>\n        </span>\n        <span *ngIf=\"!isActive\" class=\"c-angle-down\">\n    <c-icon [name]=\"'angle-down'\"></c-icon>\n            </span>\n        <span *ngIf=\"isActive\" class=\"c-angle-up\">\n            <c-icon [name]=\"'angle-up'\"></c-icon>\n\n            </span>\n    </div>\n</div>\n<div #dropdownList class=\"dropdown-list animated fadeIn\"\n[ngClass]=\"{'dropdown-list-top': dropdownListYOffset}\"\n[style.bottom.px]=\"dropdownListYOffset ? dropdownListYOffset : null\"\n[hidden]=\"!isActive\">\n    <div [ngClass]=\"{'arrow-up': !dropdownListYOffset, 'arrow-down': dropdownListYOffset}\" class=\"arrow-2\"></div>\n    <div [ngClass]=\"{'arrow-up': !dropdownListYOffset, 'arrow-down': dropdownListYOffset}\"></div>\n<div class=\"list-area\" [ngClass]=\"{'single-select-mode': settings.singleSelection }\">\n        <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection && data?.length > 0\"\n            (click)=\"toggleSelectAll()\">\n            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n            />\n            <label>\n                <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\n                <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\n            </label>\n        </div>\n        <img class=\"loading-icon\" *ngIf=\"loading\" src=\"assets/img/loading.gif\"/>\n        <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\n            <span class=\"c-search\">\n                <c-icon [name]=\"'search'\"></c-icon>\n                </span>\n            <span *ngIf=\"!settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"clearSearch()\">\n                <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n            <span *ngIf=\"settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"resetInfiniteSearch()\">\n                <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n\n            <input class=\"c-input\" *ngIf=\"settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                [(ngModel)]=\"filter\" (keyup)=\"filterGroupedList()\">\n                <input class=\"c-input\" *ngIf=\"!settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                [(ngModel)]=\"filter\" >\n            <input class=\"c-input\" *ngIf=\"settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                [(ngModel)]=\"filter\" (keyup)=\"searchTerm$.next($event.target.value)\">\n            <!--            <input class=\"c-input\" *ngIf=\"!settings.lazyLoading && !searchTempl && settings.groupBy\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                [(ngModel)]=\"filter\" (keyup)=\"filterGroupList($event)\">-->\n            <c-templateRenderer *ngIf=\"searchTempl\" [data]=\"searchTempl\" [item]=\"item\"></c-templateRenderer>\n        </div>\n        <div class=\"filter-select-all\" *ngIf=\"!settings.lazyLoading && settings.enableFilterSelectAll\">\n            <div class=\"pure-checkbox select-all\" *ngIf=\"!settings.groupBy && filter?.length > 0 && filterLength > 0\" (click)=\"toggleFilterSelectAll()\">\n                <input type=\"checkbox\" [checked]=\"isFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\" />\n                <label>\n                <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n            </label>\n            </div>\n            <div class=\"pure-checkbox select-all\" *ngIf=\"settings.groupBy && filter?.length > 0 && groupedData?.length > 0\" (click)=\"toggleFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isFilterSelectAll && filter?.length > 0\" [disabled]=\"settings.limitSelection == selectedItems?.length\" />\n                    <label>\n                    <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                    <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                </label>\n                </div>\n            <label class=\"nodata-label\" *ngIf=\"!settings.groupBy && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n            <label class=\"nodata-label\" *ngIf=\"settings.groupBy && groupedData?.length == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n\n            <div class=\"btn-container\" *ngIf=\"settings.addNewItemOnFilter && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">\n            <button class=\"c-btn btn-iceblue\" (click)=\"addFilterNewItem()\">{{settings.addNewButtonText}}</button>\n            </div>\n        </div>\n        <div class=\"filter-select-all\" *ngIf=\"settings.lazyLoading && settings.enableFilterSelectAll\">\n            <div class=\"pure-checkbox select-all\" *ngIf=\"filter?.length > 0 && infiniteFilterLength > 0\" (click)=\"toggleInfiniteFilterSelectAll()\">\n                <input type=\"checkbox\" [checked]=\"isInfiniteFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                />\n                <label>\n                <span [hidden]=\"isInfiniteFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                <span [hidden]=\"!isInfiniteFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n            </label>\n            </div>\n        </div>\n\n        <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n            <ul class=\"lazyContainer\">\n                <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                    class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                    <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n            </ul>\n        </div>\n        <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n                <ul virtualScroller #scroll [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <li *ngFor=\"let item of scroll.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                        />\n                        <label>{{item[settings.labelKey]}}</label>\n                    </li>\n                </ul>\n        </div>\n        <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n            <ul class=\"lazyContainer\">\n                <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                    class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                    <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label></label>\n                    <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                </li>\n            </ul>\n        </div>\n        <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n                <ul virtualScroller #scroll2 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                (vsEnd)=\"onScrollEnd($event)\" class=\"lazyContainer\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                    <li *ngFor=\"let item of scroll2.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                        />\n                        <label></label>\n                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                    </li>\n                </ul>\n        </div>\n        <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n            <ul virtualScroller #scroll3 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n            (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                <span *ngFor=\"let item of scroll3.viewPortItems; let i = index;\">\n                <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label></label>\n                    <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                </li>\n                <li *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label></label>\n                    <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                </li>\n                </span>\n            </ul>\n        </div>\n        <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n            <ul class=\"lazyContainer\">\n                <span *ngFor=\"let item of groupedData; let i = index;\">\n                    <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                    <ul class=\"lazyContainer\">\n                        <span *ngFor=\"let val of item.list ; let j = index;\">\n                        <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\" class=\"pure-checkbox\">\n                                <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(val)\"\n                                />\n                                <label></label>\n                                <c-templateRenderer [data]=\"itemTempl\" [item]=\"val\"></c-templateRenderer>\n                            </li>\n                            </span>\n                </ul>\n                    \n                </li>\n                </span>\n            </ul>\n        </div>\n        <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n            <virtual-scroller [items]=\"groupedData\" (vsUpdate)=\"viewPortItems = $event\" (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                <ul virtualScroller #scroll4 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <span *ngFor=\"let item of scroll4.viewPortItems; let i = index;\">\n                <li  *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && !item.grpTitle && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                </span>\n                </ul>\n            </virtual-scroller>\n        </div>\n        <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n            <ul class=\"lazyContainer\">\n                    <span *ngFor=\"let item of groupedData ; let i = index;\">\n                            <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\" class=\"pure-checkbox\">\n                                    <input  *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                                    />\n                                    <label>{{item[settings.labelKey]}}</label>\n                                    <ul class=\"lazyContainer\">\n                                            <span *ngFor=\"let val of item.list ; let j = index;\">\n                                            <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'selected-item': isSelected(val) == true,'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\" class=\"pure-checkbox\">\n                                                    <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(val)\"\n                                                    />\n                                                    <label>{{val[settings.labelKey]}}</label>\n                                                </li>\n                                                </span>\n                                    </ul>\n                                </li>\n                    </span>\n                <!-- <span *ngFor=\"let item of groupedData ; let i = index;\">\n                    <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                <li *ngIf=\"item.grpTitle && !settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                 <li  (click)=\"selectGroup(item)\" *ngIf=\"item.grpTitle && settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                </span> -->\n            </ul>\n        </div>\n        <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">{{settings.noDataLabel}}</h5>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"navbar navbar-expand-lg nav-sub navbar-light d-md-none d-lg-none\">\n    <div class=\"nav-wrapper\">\n      <a class=\"navbar-brand\" href=\"#\">Examples</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n     <span class=\"fas fa-angle-down\"></span>\n  </button>\n    </div>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <div class=\"list-group\">\n        <a [routerLink]=\"['basic']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiselect basic example</a>\n        <a [routerLink]=\"['singleselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Single selection</a>\n        <a [routerLink]=\"['searchfilter']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Search filter</a>\n        <a [routerLink]=\"['groupby']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Group By</a>\n        <a [routerLink]=\"['templating']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Templating</a>\n        <a [routerLink]=\"['usinginform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Template Driven Forms</a>\n        <a [routerLink]=\"['usinginreactiveform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Reactive Forms</a>\n        <a [routerLink]=\"['lazyloading']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Lazy Loading</a>\n        <a [routerLink]=\"['lazyloadingRemoteData']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Lazy Loading Data from API</a>\n        <a [routerLink]=\"['usingInList']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in List for loop</a>\n\n        <a [routerLink]=\"['resetdropdown']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Reset dropdown</a>\n        <a [routerLink]=\"['disablemode']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Disable dropdown</a>\n        <a [routerLink]=\"['limitselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit selection</a>\n        <a [routerLink]=\"['limitbadges']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit Badges</a>\n        <a [routerLink]=\"['customplaceholder']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom placeholder</a>\n        <a [routerLink]=\"['styling']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">CSS Styling</a>\n        <a [routerLink]=\"['theming']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Theming</a>\n\n      </div>\n\n    </div>\n  </nav>\n  <div class=\"col-md-3 pl-0 pr-0 left-sidebar d-none d-md-block d-lg-block\">\n    <div class=\"list-group\">\n      <a href=\"#\" class=\"list-group-item list-group-item-action disabled\">\n    Examples\n  </a>\n      <a [routerLink]=\"['basic']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiselect basic example</a>\n      <a [routerLink]=\"['singleselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Single selection</a>\n      <a [routerLink]=\"['searchfilter']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Search filter</a>\n      <a [routerLink]=\"['customSearchAPI']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom Search / Search API</a>\n      <a [routerLink]=\"['searchFilterByOneProperty']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Search Filter By one Property/key</a>\n      <a [routerLink]=\"['searchfilterAddNewItem']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Search and Add New Item</a>\n      <a [routerLink]=\"['groupby']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Group By</a>\n      <a [routerLink]=\"['templating']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Templating</a>\n      <a [routerLink]=\"['usinginform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Template Driven Forms</a>\n      <a [routerLink]=\"['usinginreactiveform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in Reactive Forms</a>\n      <a [routerLink]=\"['lazyloading']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Virtual Scrolling</a>\n      <a [routerLink]=\"['lazyloadingRemoteData']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Lazy Loading Data from API</a>\n      <a [routerLink]=\"['remoteData']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Data from remote API</a>\n      <a [routerLink]=\"['usingInList']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using in List for loop</a>\n\n      <a [routerLink]=\"['multipledropdowns']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Multiple dropdowns in a page</a>\n      <a [routerLink]=\"['dynamicdatasets']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Dynamic Data Sets loading</a>\n      <a [routerLink]=\"['dropdownMethods']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Methods - Open, close, Reset</a>\n      <a [routerLink]=\"['events']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Events</a>\n      <a [routerLink]=\"['disablemode']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Disable dropdown</a>\n      <a [routerLink]=\"['limitselection']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit selection</a>\n      <a [routerLink]=\"['limitbadges']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Limit Badges</a>\n      <a [routerLink]=\"['customplaceholder']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Custom placeholder</a>\n      <a [routerLink]=\"['styling']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">CSS Styling</a>\n      <!--      <a [routerLink]=\"['theming']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Theming</a>\n-->\n    </div>\n  </div>\n  <div class=\"col center-content\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/customSearch.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/customSearch.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">\n    {{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\n        <c-search>\n             <ng-template>\n                 <input type=\"text\" (keyup)=\"onSearch($event)\" placeholder=\"Search countries\" style=\"border: none;width: 100%; height: 100%;outline: none;\"/>\n             </ng-template>\n        </c-search>\n        <c-item>\n            <ng-template let-item=\"item\">\n                <label style=\"color: #333;width: 150px;\">{{item.name}}</label>\n                <img [src]=\"item.flag\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 0px;\" />\n                <label>{{item.capital}}</label>\n            </ng-template>\n        </c-item>\n    </angular2-multiselect>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/disableMode.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/disableMode.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\n</div>\n<div class=\"row\">\n    <div>\n        <button (click)=\"disable()\" class=\"btn btn-danger\">Disable</button>\n    </div>\n    <div>\n        <button (click)=\"enable()\" class=\"btn btn-success\">Enable</button>\n    </div>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/dynamicData.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/dynamicData.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\n</div>\n<button class=\"btn btn-success\" (click)=\"loadDataSet1()\">Load dataset 1</button>\n<button class=\"btn btn-success\" (click)=\"loadDataSet2()\">Load dataset 2</button>\n\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n     <span *ngIf=\"mockgist\">\n        <p-tabPanel header=\"{{mocktitle}}\">\n        <ng2-gist [gistId]=\"mockgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/events.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/events.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"col-md-12 mr-auto ml-auto dropdown-container\" style=\"height: auto;\">\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n        </div>\n        <div class=\"col-md-8\">\n            <angular2-multiselect #dropdownElem [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" \n                (onSelect)=\"onItemSelect($event)\"\n                (onDeSelect)=\"OnItemDeSelect($event)\" \n                (onSelectAll)=\"onSelectAll($event)\" \n                (onDeSelectAll)=\"onDeSelectAll($event)\"\n                (onOpen)=\"onOpen($event)\"\n                (onClose)=\"onClose($event)\">\n            </angular2-multiselect>\n\n        </div>\n        <div class=\"col-md-2\"></div>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <h5>On Select</h5>\n            <textarea class=\"output-text\" [(ngModel)]=\"selectedItemString\">Event output goes here...\n            </textarea>\n        </div>\n        <div class=\"col-md-4\">\n            <h5>On Un-select</h5>\n            <textarea class=\"output-text\" [(ngModel)]=\"unSelectedItemString\">Event output goes here...\n            </textarea>\n        </div>\n        <div class=\"col-md-4\">\n            <h5>On Open</h5>\n            <textarea class=\"output-text\" [(ngModel)]=\"openString\">Event output goes here...\n            </textarea>\n        </div>\n        <div class=\"col-md-4\">\n            <h5>On Close</h5>\n            <textarea class=\"output-text\" [(ngModel)]=\"closeString\">Event output goes here...\n            </textarea>\n        </div>\n        <div class=\"col-md-4\">\n            <h5>On Select All</h5>\n            <textarea class=\"output-text\" [(ngModel)]=\"selectAllString\">Event output goes here...\n            </textarea>\n        </div>\n        <div class=\"col-md-4\">\n            <h5>On Un-Select All</h5>\n            <textarea class=\"output-text\" [(ngModel)]=\"unSelectAllString\">Event output goes here...\n            </textarea>\n        </div>\n    </div>\n</div>\n\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n</p-tabView>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/groupBy.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/groupBy.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"\n        (ngModelChange)=\"onChange($event)\" (onGroupSelect)=\"onGroupSelect($event)\" (onGroupDeSelect)=\"onGroupDeSelect($event)\"></angular2-multiselect>\n</div>\n<button class=\"btn btn-success\" (click)=\"loadDataSet1()\">Load/change dataset 1</button>\n<button class=\"btn btn-success\" (click)=\"loadDataSet2()\">Load/change dataset 2</button>\n\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/lazyLoading.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/lazyLoading.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"row\">\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" \n                          [(ngModel)]=\"selectedItems\" \n                          [settings]=\"settings\" \n                          (onSelect)=\"onItemSelect($event)\"\n                          (onDeSelect)=\"OnItemDeSelect($event)\" \n                          (onSelectAll)=\"onSelectAll($event)\" \n                          (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\n<br>\n<span>Total Records : {{itemList.length}}</span>\n</div>\n<div class=\"col-md-4 mr-auto ml-auto dropdown-container\">\n            <button (click)=\"changeData()\" class=\"btn btn-danger\">Reset</button>\n</div>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/lazyLoadingRemoteData.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/lazyLoadingRemoteData.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"row\">\n\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" \n                          [(ngModel)]=\"selectedItems\" \n                          [settings]=\"settings\" \n                          [loading] = \"loading\"\n                          (onSelect)=\"onItemSelect($event)\"\n                          (onDeSelect)=\"OnItemDeSelect($event)\" \n                          (onSelectAll)=\"onSelectAll($event)\" \n                          (onDeSelectAll)=\"onDeSelectAll($event)\"\n                          (onOpen)=\"onOpen($event)\"\n                          (onScrollToEnd)=\"fetchMore($event)\"></angular2-multiselect>\n<br>\n<span>Total Records : {{itemList.length}}</span>\n</div>\n<div class=\"col-md-4 mr-auto ml-auto dropdown-container\">\n            <button (click)=\"changeData()\" class=\"btn btn-danger\">Reset</button>\n</div>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/multipledropdowns.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/multipledropdowns.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\"> {{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <div class=\"form-group col-md-12\">\n        <label for=\"directorySpecialties\">Directory Specialties</label>\n        <label class=\"float-right\">        Directory Dropdown status: <b>{{directoriesDropdownStatus}}</b>\n        </label>\n        <angular2-multiselect id=\"directorySpecialties\" name=\"directorySpecialties\" [(ngModel)]=\"providerLocation.directorySpecialties\"\n            [data]=\"directorySpecialties\" [settings]=\"dropdownSettings\" \n            (onOpen)=\"onDirectoriesOpen($event)\" (onClose)=\"onDirectoriesClose($event)\">\n        </angular2-multiselect>\n    </div>\n    <div class=\"form-group col-md-12\">\n        <label for=\"useCases\">Use Cases</label>\n        <label class=\"float-right\">        Cases Dropdown status: <b>{{casesDropdownStatus}}</b>\n        </label>\n        <angular2-multiselect id=\"useCases\" name=\"useCases\" [(ngModel)]=\"providerLocation.useCases\" [data]=\"useCases\" \n        [settings]=\"dropdownSettings2\" (onOpen)=\"onCasesOpen($event)\" (onClose)=\"onCasesClose($event)\">\n        </angular2-multiselect>\n    </div>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n    <span *ngIf=\"mockgist\">\n        <p-tabPanel header=\"{{mocktitle}}\">\n        <ng2-gist [gistId]=\"mockgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/remoteData.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/remoteData.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">\n    {{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\n        <c-item>\n            <ng-template let-item=\"item\">\n                <label style=\"color: #333;width: 150px;\">{{item.name}}</label>\n                <img [src]=\"item.flag\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 0px;\" />\n                <label>{{item.capital}}</label>\n            </ng-template>\n        </c-item>\n    </angular2-multiselect>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/resetDropdown.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/resetDropdown.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"col-md-12 mr-auto ml-auto dropdown-container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <button (click)=\"changeData()\" class=\"btn btn-danger\">Reset</button><br>\n            <br>\n            <button (click)=\"open($event)\" class=\"btn btn-success\">Open</button><br>\n            <br>\n            <button (click)=\"close($event)\" class=\"btn btn-primary\">Close</button>\n        </div>\n        <div class=\"col-md-8\">\n    <angular2-multiselect #dropdownElem [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\n\n        </div>\n    </div>\n</div>\n\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n</p-tabView>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/searchFilter.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/searchFilter.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\" \n        (onAddFilterNewItem)=\"onAddItem($event)\">\n        </angular2-multiselect>\n</div>\n      <div class=\"alert alert-warning\" role=\"alert\">\n        <b>How this example works !! </b> \n        <br>\n        When you try to filter the list items, if no search results are available, you would see an 'Add' button. On clicking the add button, it would emit the text that you enter in the input field to your controlle in the callback method, as show in the below code.\n        You can add this item to the data list. If you wish, that this item be selected, add it to selected items list.\n              </div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/templating.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/templating.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\" \n        (onGroupSelect)=\"onGroupSelect($event)\" (onGroupDeSelect)=\"onGroupDeSelect($event)\">\n        <c-badge>\n            <ng-template let-item=\"item\">\n                <label style=\"margin: 0px;\">{{item.itemName}}</label>\n                <img [src]=\"item.image\" style=\"width: 16px; margin: 0 0 0 4px;\" />\n            </ng-template>\n        </c-badge>\n        <c-item>\n            <ng-template let-item=\"item\">\n                <img [src]=\"item.image\" style=\"width: 30px; border: 1px solid #efefef;margin-right: 20px;\" />\n                <label style=\"color: #333;margin-right: 20px;\">{{item.itemName}}</label>\n                <label><small>Capital - {{item.capital}}</small></label>\n            </ng-template>\n        </c-item>\n    </angular2-multiselect>\n</div>\n\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n</p-tabView>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/theming.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/theming.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<!--<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>\n-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/using-in-form.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/using-in-form.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"row\">\n<div class=\"col-md-8 ml-auto mr-auto\">\n    <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" style=\"border: 1px solid #ccc; padding: 10px;\">\n\n        <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" pattern=\"[a-zA-Z][a-zA-Z ]+\" [(ngModel)]=\"formModel.name\" name=\"name\"\n                #name=\"ngModel\">\n            <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!name.hasError('required')\">Name is required</div>\n                <div [hidden]=\"!name.hasError('pattern')\">Only alphabetsallowed</div>\n\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Email Address</label>\n            <span style=\"color: red;float: right;\">* required</span>\n            <input type=\"text\" class=\"form-control\" id=\"emailaddress\" required [(ngModel)]=\"formModel.email\" name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                #email=\"ngModel\">\n            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n                <div [hidden]=\"!email.hasError('required')\">Email is required</div>\n                <div [hidden]=\"!email.hasError('pattern')\">Email format should be <small><b>joe@abc.com</b></small></div>\n            </div>\n        </div>\n                <div class=\"form-group\">\n            <label for=\"name\">Skills </label>\n            <span style=\"color: red;float: right;\">* required</span>\n            <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"formModel.skills\" \n                                  [settings]=\"settings\" \n                                  (onSelect)=\"onItemSelect($event)\"\n                                  (onDeSelect)=\"OnItemDeSelect($event)\" \n                                  (onSelectAll)=\"onSelectAll($event)\" \n                                  (onDeSelectAll)=\"onDeSelectAll($event)\" name=\"skills\" #skills=\"ngModel\" required>\n            </angular2-multiselect>\n            <div [hidden]=\"skills.valid\" class=\"alert alert-danger\">\n                <div [hidden]=\"!skills.hasError('required')\">Atleast one Skill is required</div>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!loginForm.form.valid\">Submit</button>\n    </form>\n</div>\n<div class=\"col-md-6\">\n    <table class=\"table\">\n        <tr>\n            <td><label>Name</label></td>\n            <td>{{formModel.name}}</td>\n        </tr>\n        <tr>\n            <td><label>Email</label></td>\n            <td>{{formModel.email}}</td>\n        </tr>\n        <tr>\n            <td><label>Skills</label></td>\n            <td>\n                <h6 *ngFor=\"let obj of formModel.skills\">{{obj.itemName}}</h6>\n            </td>\n        </tr>\n    </table>\n    <span>{{formModel | json}}</span>\n        <p>Form status: {{ loginForm.form.status | json }}</p>\n\n</div>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/using-in-react-form.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/using-in-react-form.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"row\">\n<div class=\"col-md-8 ml-auto mr-auto\">\n    <form [formGroup]=\"userForm\" novalidate style=\"border: 1px solid #ccc; padding: 10px;\">\n        <div class=\"form-group\">\n            <label for=\"name\">Skills</label>\n            <span style=\"color: red;float: right;\">* required</span>\n           <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" \n                                  [settings]=\"settings\" \n                                  (onSelect)=\"onItemSelect($event)\"\n                                  (onDeSelect)=\"OnItemDeSelect($event)\" \n                                  (onSelectAll)=\"onSelectAll($event)\" \n                                  (onDeSelectAll)=\"onDeSelectAll($event)\" formControlName=\"skills\">\n            </angular2-multiselect>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input class=\"form-control\" formControlName=\"name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Email Address</label>\n            <span style=\"color: red;float: right;\">* required</span>\n            <input class=\"form-control\" formControlName=\"email\">\n        </div>\n        <button (click)=\"submitForm()\" [disabled]=\"!userForm.valid\" class=\"btn btn-success btn-block\">Submit</button>\n    </form>\n\n</div>\n<div class=\"col-md-6\">\n    <table class=\"table\">\n        <tr>\n            <td><label>Name</label></td>\n            <td>{{userForm.value.name}}</td>\n        </tr>\n        <tr>\n            <td><label>Email</label></td>\n            <td>{{userForm.value.email}}</td>\n        </tr>\n        <tr>\n            <td><label>Skills</label></td>\n            <td>\n                <h6 *ngFor=\"let obj of userForm.value.skills\">{{obj.itemName}}</h6>\n            </td>\n        </tr>\n    </table>\n    <span>{{userForm.value | json}}</span>\n    <p>Form status: {{ userForm.status | json }}</p>\n</div>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/usingInList.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/usingInList.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\" style=\"margin-bottom: 10px;\">{{title}}</h2>\n<div class=\"col-md-12 pl-0 pr-0 dropdown-container\" style=\"height: auto;\">\n    <table class=\"table table-bordered\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th>\n                    Customer\n                </th>\n                <th>\n                    Countries\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of customers\">\n                <td>\n                    {{item.name}}\n                </td>\n                <td>\n                    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"item.countries\" [settings]=\"settings\"\n                        (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\n                        (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\n                    </angular2-multiselect>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    {{customers | json}}\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n        <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n            <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n        </p-tabPanel>\n    </span>\n</p-tabView>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/views/view.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/views/view.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\n<div class=\"col-md-8 mr-auto ml-auto dropdown-container\">\n    <angular2-multiselect [data]=\"itemList\" [(ngModel)]=\"selectedItems\" [settings]=\"settings\" (onSelect)=\"onItemSelect($event)\"\n        (onDeSelect)=\"OnItemDeSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\n        </angular2-multiselect>\n</div>\n<h4 class=\"example-title code-section\">Code</h4>\n\n<p-tabView>\n    <p-tabPanel header=\"{{tstitle}}\">\n       <ng2-gist [gistId]=\"tsgist\"></ng2-gist>\n    </p-tabPanel>\n    <p-tabPanel header=\"{{htmltitle}}\">\n        <ng2-gist [gistId]=\"htmlgist\"></ng2-gist>\n    </p-tabPanel>\n    <span *ngIf=\"cssgist\">\n        <p-tabPanel header=\"{{csstitle}}\">\n        <ng2-gist [gistId]=\"cssgist\"></ng2-gist>\n    </p-tabPanel>\n    </span>\n</p-tabView>\n"

/***/ }),

/***/ "./projects/angular2-multiselect-dropdown-lib/src/lib/clickOutside.ts":
/*!****************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/clickOutside.ts ***!
  \****************************************************************************/
/*! exports provided: ClickOutsideDirective, ScrollDirective, styleDirective, setPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirective", function() { return ScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleDirective", function() { return styleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPosition", function() { return setPosition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
};
ClickOutsideDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClickOutsideDirective.prototype, "clickOutside", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:touchstart', ['$event', '$event.target']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent, HTMLElement]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[clickOutside]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ClickOutsideDirective);

let ScrollDirective = class ScrollDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(event, targetElement) {
        this.scroll.emit(event);
    }
};
ScrollDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ScrollDirective.prototype, "scroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent, HTMLElement]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ScrollDirective.prototype, "onClick", null);
ScrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[scroll]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ScrollDirective);

let styleDirective = class styleDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.el.nativeElement.style.top = this.styleVal;
    }
    ngOnChanges() {
        this.el.nativeElement.style.top = this.styleVal;
    }
};
styleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('styleProp'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], styleDirective.prototype, "styleVal", void 0);
styleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[styleProp]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], styleDirective);

let setPosition = class setPosition {
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
};
setPosition.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('setPosition'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], setPosition.prototype, "height", void 0);
setPosition = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[setPosition]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], setPosition);



/***/ }),

/***/ "./projects/angular2-multiselect-dropdown-lib/src/lib/list-filter.ts":
/*!***************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/list-filter.ts ***!
  \***************************************************************************/
/*! exports provided: ListFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterPipe", function() { return ListFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _multiselect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiselect.service */ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.service.ts");



let ListFilterPipe = class ListFilterPipe {
    constructor(ds) {
        this.ds = ds;
        this.filteredList = [];
    }
    transform(items, filter, searchBy) {
        if (!items || !filter) {
            this.ds.setData(items);
            return items;
        }
        this.filteredList = items.filter((item) => this.applyFilter(item, filter, searchBy));
        this.ds.setData(this.filteredList);
        return this.filteredList;
    }
    applyFilter(item, filter, searchBy) {
        let found = false;
        if (searchBy.length > 0) {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var t = 0; t < searchBy.length; t++) {
                    if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                        if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }
        else {
            if (item.grpTitle) {
                found = true;
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
        }
        return found;
    }
};
ListFilterPipe.ctorParameters = () => [
    { type: _multiselect_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
ListFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'listFilter',
        pure: true
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_multiselect_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], ListFilterPipe);



/***/ }),

/***/ "./projects/angular2-multiselect-dropdown-lib/src/lib/menu-item.ts":
/*!*************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/menu-item.ts ***!
  \*************************************************************************/
/*! exports provided: Item, Badge, Search, TemplateRenderer, CIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRenderer", function() { return TemplateRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIcon", function() { return CIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Item = class Item {
    constructor() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], Item.prototype, "template", void 0);
Item = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'c-item',
        template: ``
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Item);

let Badge = class Badge {
    constructor() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], Badge.prototype, "template", void 0);
Badge = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'c-badge',
        template: ``
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Badge);

let Search = class Search {
    constructor() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], Search.prototype, "template", void 0);
Search = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'c-search',
        template: ``
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Search);

let TemplateRenderer = class TemplateRenderer {
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
};
TemplateRenderer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TemplateRenderer.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TemplateRenderer.prototype, "item", void 0);
TemplateRenderer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'c-templateRenderer',
        template: ``
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], TemplateRenderer);

let CIcon = class CIcon {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CIcon.prototype, "name", void 0);
CIcon = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'c-icon',
        template: `<svg *ngIf="name == 'remove'" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                        <g>
                            <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
                        </g>
                    </svg>
            <svg *ngIf="name == 'angle-down'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<g id="_x31_0_34_">
		<g>
			<path d="M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782
				c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296
				c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"/>
		</g>
	</g>
</g>
</svg>
<svg *ngIf="name == 'angle-up'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<g id="_x39__30_">
		<g>
			<path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
				L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
				c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
		</g>
	</g>
</g>

</svg>
<svg *ngIf="name == 'search'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 615.52 615.52" style="enable-background:new 0 0 615.52 615.52;"
	 xml:space="preserve">
<g>
	<g>
		<g id="Search__x28_and_thou_shall_find_x29_">
			<g>
				<path d="M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0
					C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777
					l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291
					C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174
					c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88
					s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"/>
			</g>
		</g>
	</g>
</g>

</svg>
<svg *ngIf="name == 'clear'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 51.976 51.976" style="enable-background:new 0 0 51.976 51.976;" xml:space="preserve">
<g>
	<path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0
		C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778
		c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828
		c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828
		l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"/>
</g>
</svg>`,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
    })
], CIcon);



/***/ }),

/***/ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.scss":
/*!***************************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "virtual-scroll {\n  display: block;\n  width: 100%; }\n\n.cuppa-dropdown {\n  position: relative; }\n\n.c-btn {\n  display: inline-block;\n  border-width: 1px;\n  line-height: 1.25;\n  border-radius: 3px;\n  font-size: 0.85rem;\n  padding: 5px 10px;\n  cursor: pointer;\n  align-items: center;\n  min-height: 38px; }\n\n.c-btn.disabled {\n  background: #ccc; }\n\n.selected-list .c-list {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  width: calc(100% - 20px); }\n\n.selected-list .c-list .c-token {\n    list-style: none;\n    padding: 4px 8px;\n    /*background: $base-color; */\n    /*color: $token-color;*/\n    border-radius: 2px;\n    margin-right: 4px;\n    margin-top: 2px;\n    float: left;\n    position: relative;\n    padding-right: 22px; }\n\n.selected-list .c-list .c-token .c-label {\n      display: block;\n      float: left; }\n\n.selected-list .c-list .c-token .c-remove {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 8px; }\n\n.selected-list .c-list .c-token .c-remove svg {\n        fill: #fff; }\n\n.selected-list .fa-angle-down, .selected-list .fa-angle-up {\n  font-size: 15pt;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.selected-list .c-angle-down, .selected-list .c-angle-up {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  pointer-events: none; }\n\n.selected-list .c-angle-down svg, .selected-list .c-angle-up svg {\n    fill: #333; }\n\n.selected-list .countplaceholder {\n  position: absolute;\n  right: 45px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.selected-list .c-btn {\n  width: 100%;\n  /*        box-shadow: 0px 1px 5px $box-shadow-color;\n*/\n  padding: 5px 10px;\n  cursor: pointer;\n  display: flex;\n  position: relative; }\n\n.selected-list .c-btn .c-icon {\n    position: absolute;\n    right: 5px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\n.dropdown-list {\n  position: absolute;\n  padding-top: 14px;\n  width: 100%;\n  z-index: 99999; }\n\n.dropdown-list ul {\n    padding: 0px;\n    list-style: none;\n    overflow: auto;\n    margin: 0px; }\n\n.dropdown-list ul li {\n      padding: 10px 10px;\n      cursor: pointer;\n      text-align: left; }\n\n.dropdown-list ul li:first-child {\n      padding-top: 10px; }\n\n.dropdown-list ul li:last-child {\n      padding-bottom: 10px; }\n\n.dropdown-list ul li:hover {\n      /*background: $list-hover-background;*/ }\n\n.dropdown-list ::-webkit-scrollbar {\n    width: 8px; }\n\n.dropdown-list ::-webkit-scrollbar-thumb {\n    background: #cccccc;\n    border-radius: 5px; }\n\n.dropdown-list ::-webkit-scrollbar-track {\n    background: #f2f2f2; }\n\n.arrow-up, .arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 15px solid #fff;\n  margin-left: 15px;\n  position: absolute;\n  top: 0; }\n\n.arrow-down {\n  bottom: -14px;\n  top: unset;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.arrow-2 {\n  border-bottom: 15px solid #ccc;\n  top: -1px; }\n\n.arrow-down.arrow-2 {\n  top: unset;\n  bottom: -16px; }\n\n.list-area {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  margin: 0px;\n  /*box-shadow: 0px 1px 5px $box-shadow-color;*/ }\n\n.select-all {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  text-align: left; }\n\n.list-filter {\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  padding-left: 35px;\n  height: 35px; }\n\n.list-filter input {\n    border: 0px;\n    width: 100%;\n    height: 100%;\n    padding: 0px; }\n\n.list-filter input:focus {\n    outline: none; }\n\n.list-filter .c-search {\n    position: absolute;\n    top: 9px;\n    left: 10px;\n    width: 15px;\n    height: 15px; }\n\n.list-filter .c-search svg {\n      fill: #888; }\n\n.list-filter .c-clear {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 15px;\n    height: 15px; }\n\n.list-filter .c-clear svg {\n      fill: #888; }\n\n.pure-checkbox input[type=\"checkbox\"] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.pure-checkbox input[type=\"checkbox\"]:focus + label:before,\n.pure-checkbox input[type=\"checkbox\"]:hover + label:before {\n  /*border-color: $base-color;*/\n  background-color: #f2f2f2; }\n\n.pure-checkbox input[type=\"checkbox\"]:active + label:before {\n  transition-duration: 0s; }\n\n.pure-checkbox input[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 2em;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin: 0px;\n  /*color: $label-color;*/\n  font-weight: 300; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:before {\n  box-sizing: content-box;\n  content: '';\n  /*color: $base-color;*/\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 15px;\n  height: 15px;\n  margin-top: -9px;\n  /*border: 2px solid $base-color;*/\n  text-align: center;\n  transition: all 0.4s ease;\n  border-radius: 3px; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:after {\n  box-sizing: content-box;\n  content: '';\n  /*background-color: $base-color;*/\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 15px;\n  height: 15px;\n  margin-top: -9px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled + label:before {\n  border-color: #cccccc; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled:focus + label:before\n.pure-checkbox input[type=\"checkbox\"]:disabled:hover + label:before {\n  background-color: inherit; }\n\n.pure-checkbox input[type=\"checkbox\"]:disabled:checked + label:before {\n  background-color: #cccccc; }\n\n.pure-checkbox input[type=\"checkbox\"] + label:after {\n  background-color: transparent;\n  top: 50%;\n  left: 3px;\n  width: 9px;\n  height: 4px;\n  margin-top: -5px;\n  border-style: solid;\n  border-width: 0 0 2px 2px;\n  -o-border-image: none;\n     border-image: none;\n  -webkit-transform: rotate(-45deg) scale(0);\n          transform: rotate(-45deg) scale(0); }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after {\n  content: '';\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1);\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out; }\n\n.pure-checkbox input[type=\"radio\"]:checked + label:before {\n  background-color: white; }\n\n.pure-checkbox input[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.pure-checkbox input[type=\"radio\"] + label:before {\n  border-radius: 50%; }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:before {\n  /*background: $base-color;*/ }\n\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after {\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1); }\n\n.list-message {\n  text-align: center;\n  margin: 0px;\n  padding: 15px 0px;\n  font-size: initial; }\n\n.list-grp {\n  padding: 0 15px !important; }\n\n.list-grp h4 {\n  text-transform: capitalize;\n  margin: 15px 0px 0px 0px;\n  font-size: 14px;\n  font-weight: 700; }\n\n.list-grp > li {\n  padding-left: 15px !important; }\n\n.selected-item {\n  /*background: $selected-background;*/ }\n\n.grp-item {\n  padding-left: 30px !important; }\n\n.grp-title {\n  padding-bottom: 0px !important; }\n\n.grp-title label {\n  margin-bottom: 0px !important;\n  font-weight: 800;\n  text-transform: capitalize; }\n\n.grp-title:hover {\n  background: none !important; }\n\n.loading-icon {\n  width: 20px;\n  position: absolute;\n  right: 10px;\n  top: 23px;\n  z-index: 1; }\n\n.nodata-label {\n  width: 100%;\n  text-align: center;\n  padding: 10px 0px 0px; }\n\n.btn-container {\n  text-align: center;\n  padding: 0px 5px 10px; }\n\n.clear-all {\n  width: 8px;\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb2xvbW9uMzAxL0RvY3VtZW50cy9HaXRIdWIvYW5ndWxhcjItbXVsdGlzZWxlY3QtZHJvcGRvd24vcHJvamVjdHMvYW5ndWxhcjItbXVsdGlzZWxlY3QtZHJvcGRvd24tbGliL3NyYy9saWIvbXVsdGlzZWxlY3QuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9hbmd1bGFyMi1tdWx0aXNlbGVjdC1kcm9wZG93bi1saWIvc3JjL2xpYi9tdWx0aXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBRWI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUVRLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHdCQUF3QixFQUFBOztBQUxoQztJQU9ZLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNEJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7O0FBaEIvQjtNQWtCZ0IsY0FBYztNQUNkLFdBQVcsRUFBQTs7QUFuQjNCO01Bc0JnQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFFBQVE7TUFDUixtQ0FBMkI7Y0FBM0IsMkJBQTJCO01BQzNCLFVBQVUsRUFBQTs7QUExQjFCO1FBNEJvQixVQUFVLEVBQUE7O0FBNUI5QjtFQW1DUSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQXZDbkM7RUEwQ1EsV0FBVztFQUNYLFlBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLG9CQUFvQixFQUFBOztBQWhENUI7SUFrRFksVUFBVSxFQUFBOztBQWxEdEI7RUFzRFEsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQXpEbkM7RUE0RFEsV0FBVztFQUNuQjtDQ05DO0VET1MsaUJBQWlCO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBakUxQjtJQW1FWSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7O0FBSXZDO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUpsQjtJQU1RLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVcsRUFBQTs7QUFUbkI7TUFXWSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGdCQUFnQixFQUFBOztBQWI1QjtNQWdCWSxpQkFBaUIsRUFBQTs7QUFoQjdCO01BbUJZLG9CQUFvQixFQUFBOztBQW5CaEM7TUFzQlksc0NBQUEsRUFBdUM7O0FBdEJuRDtJQTBCUSxVQUFVLEVBQUE7O0FBMUJsQjtJQTZCUSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7O0FBOUIxQjtJQWlDUSxtQkFBbUIsRUFBQTs7QUFHM0I7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsTUFBTSxFQUFBOztBQUVSO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0ksOEJBQThCO0VBQzlCLFNBQVMsRUFBQTs7QUFFYjtFQUNJLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDZDQUFBLEVBQThDOztBQUVsRDtFQUNJLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUpoQjtJQU1RLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVksRUFBQTs7QUFUcEI7SUFZUSxhQUFhLEVBQUE7O0FBWnJCO0lBZVEsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFuQnBCO01BcUJZLFVBQVUsRUFBQTs7QUFyQnRCO0lBeUJRLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBN0JwQjtNQStCWSxVQUFVLEVBQUE7O0FBSXRCO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFFWjs7RUFHRSw2QkFBQTtFQUNBLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUFBO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxzQkFBQTtFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlDQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGlDQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLDRDQUFvQztFQUFwQyxvQ0FBb0M7RUFBcEMsc0VBQW9DLEVBQUE7O0FBRXRDO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCOztFQUVFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQWtCO0tBQWxCLGtCQUFrQjtFQUNsQiwwQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUE7O0FBRXBDO0VBQ0UsV0FBVztFQUNYLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsNENBQW9DO0VBQXBDLG9DQUFvQztFQUFwQyxzRUFBb0MsRUFBQTs7QUFFdEM7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsMkJBQUEsRUFBNEI7O0FBRTlCO0VBQ0UsMENBQWtDO1VBQWxDLGtDQUFrQyxFQUFBOztBQUVwQztFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLG9DQUFBLEVBQXFDOztBQUV6QztFQUNJLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFFZDtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUt6QjtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYW5ndWxhcjItbXVsdGlzZWxlY3QtZHJvcGRvd24tbGliL3NyYy9saWIvbXVsdGlzZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ2aXJ0dWFsLXNjcm9sbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jdXBwYS1kcm9wZG93bntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYy1idG57XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMzhweDtcbn1cbi5jLWJ0bi5kaXNhYmxlZHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLnNlbGVjdGVkLWxpc3R7XG4gICAgLmMtbGlzdHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgLmMtdG9rZW57XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lOyAgXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgLypiYWNrZ3JvdW5kOiAkYmFzZS1jb2xvcjsgKi9cbiAgICAgICAgICAgIC8qY29sb3I6ICR0b2tlbi1jb2xvcjsqL1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XG4gICAgICAgICAgICAuYy1sYWJlbHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jLXJlbW92ZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZmEtYW5nbGUtZG93biwgLmZhLWFuZ2xlLXVwe1xuICAgICAgICBmb250LXNpemU6IDE1cHQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICAgIC5jLWFuZ2xlLWRvd24sIC5jLWFuZ2xlLXVwe1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OjEycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogIzMzMztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY291bnRwbGFjZWhvbGRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDQ1cHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICAgIC5jLWJ0bntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4vKiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggJGJveC1zaGFkb3ctY29sb3I7XG4qLyAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuYy1pY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5kcm9wZG93bi1saXN0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICB1bHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBsaTpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGxpOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBsaTpob3ZlcntcbiAgICAgICAgICAgIC8qYmFja2dyb3VuZDogJGxpc3QtaG92ZXItYmFja2dyb3VuZDsqL1xuICAgICAgICB9XG4gICAgfVxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgfVxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICB9XG59XG4uYXJyb3ctdXAsIC5hcnJvdy1kb3duIHtcbiAgd2lkdGg6IDA7IFxuICBoZWlnaHQ6IDA7IFxuICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5hcnJvdy1kb3duIHtcbiAgYm90dG9tOiAtMTRweDtcbiAgdG9wOiB1bnNldDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5hcnJvdy0ye1xuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgI2NjYztcbiAgICB0b3A6IC0xcHg7XG59XG4uYXJyb3ctZG93bi5hcnJvdy0yIHtcbiAgICB0b3A6IHVuc2V0O1xuICAgIGJvdHRvbTogLTE2cHg7XG59XG4ubGlzdC1hcmVhe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLypib3gtc2hhZG93OiAwcHggMXB4IDVweCAkYm94LXNoYWRvdy1jb2xvcjsqL1xufVxuLnNlbGVjdC1hbGx7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmxpc3QtZmlsdGVye1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGlucHV0IHtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgaW5wdXQ6Zm9jdXN7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIC5jLXNlYXJjaHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6ICM4ODg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmMtY2xlYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiAjODg4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG59XG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06aG92ZXIgKyBsYWJlbDpiZWZvcmVcbiB7XG4gIC8qYm9yZGVyLWNvbG9yOiAkYmFzZS1jb2xvcjsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmFjdGl2ZSArIGxhYmVsOmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xufVxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWx7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICAvKmNvbG9yOiAkbGFiZWwtY29sb3I7Ki9cbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZXtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGNvbnRlbnQ6ICcnO1xuICAvKmNvbG9yOiAkYmFzZS1jb2xvcjsqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICAvKmJvcmRlcjogMnB4IHNvbGlkICRiYXNlLWNvbG9yOyovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YWZ0ZXJ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBjb250ZW50OiAnJztcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjsqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dDtcbn1cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCArIGxhYmVsOmJlZm9yZXtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xufVxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmZvY3VzICsgbGFiZWw6YmVmb3JlXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6aG92ZXIgKyBsYWJlbDpiZWZvcmV7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmFmdGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDNweDtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAycHg7XG4gIGJvcmRlci1pbWFnZTogbm9uZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKTtcbn1cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcnO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQ7XG59XG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3Jle1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZXtcbiAgLypiYWNrZ3JvdW5kOiAkYmFzZS1jb2xvcjsqL1xufVxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlcntcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcbn1cbi5saXN0LW1lc3NhZ2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcbn1cbi5saXN0LWdycHtcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cbi5saXN0LWdycCBoNCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLmxpc3QtZ3JwID4gbGkge1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xufVxuLnNlbGVjdGVkLWl0ZW17XG4gICAgLypiYWNrZ3JvdW5kOiAkc2VsZWN0ZWQtYmFja2dyb3VuZDsqL1xufVxuLmdycC1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbn1cbi5ncnAtdGl0bGUge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5ncnAtdGl0bGUgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZ3JwLXRpdGxlOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5sb2FkaW5nLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDIzcHg7XG4gICAgei1pbmRleDogMTtcbn1cbi5ub2RhdGEtbGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHg7XG59XG4uYnRuLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweCA1cHggMTBweDtcbn1cbi5idG4taWNlYmx1ZSB7XG4gICAgXG59XG4uY2xlYXItYWxsIHtcbiAgICB3aWR0aDogOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4iLCJ2aXJ0dWFsLXNjcm9sbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uY3VwcGEtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmMtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzOHB4OyB9XG5cbi5jLWJ0bi5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNjY2M7IH1cblxuLnNlbGVjdGVkLWxpc3QgLmMtbGlzdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7IH1cbiAgLnNlbGVjdGVkLWxpc3QgLmMtbGlzdCAuYy10b2tlbiB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIC8qYmFja2dyb3VuZDogJGJhc2UtY29sb3I7ICovXG4gICAgLypjb2xvcjogJHRva2VuLWNvbG9yOyovXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1yaWdodDogMjJweDsgfVxuICAgIC5zZWxlY3RlZC1saXN0IC5jLWxpc3QgLmMtdG9rZW4gLmMtbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmbG9hdDogbGVmdDsgfVxuICAgIC5zZWxlY3RlZC1saXN0IC5jLWxpc3QgLmMtdG9rZW4gLmMtcmVtb3ZlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIHdpZHRoOiA4cHg7IH1cbiAgICAgIC5zZWxlY3RlZC1saXN0IC5jLWxpc3QgLmMtdG9rZW4gLmMtcmVtb3ZlIHN2ZyB7XG4gICAgICAgIGZpbGw6ICNmZmY7IH1cblxuLnNlbGVjdGVkLWxpc3QgLmZhLWFuZ2xlLWRvd24sIC5zZWxlY3RlZC1saXN0IC5mYS1hbmdsZS11cCB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuXG4uc2VsZWN0ZWQtbGlzdCAuYy1hbmdsZS1kb3duLCAuc2VsZWN0ZWQtbGlzdCAuYy1hbmdsZS11cCB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5zZWxlY3RlZC1saXN0IC5jLWFuZ2xlLWRvd24gc3ZnLCAuc2VsZWN0ZWQtbGlzdCAuYy1hbmdsZS11cCBzdmcge1xuICAgIGZpbGw6ICMzMzM7IH1cblxuLnNlbGVjdGVkLWxpc3QgLmNvdW50cGxhY2Vob2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0NXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG5cbi5zZWxlY3RlZC1saXN0IC5jLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggJGJveC1zaGFkb3ctY29sb3I7XG4qL1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLnNlbGVjdGVkLWxpc3QgLmMtYnRuIC5jLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuXG4uZHJvcGRvd24tbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5OTsgfVxuICAuZHJvcGRvd24tbGlzdCB1bCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luOiAwcHg7IH1cbiAgICAuZHJvcGRvd24tbGlzdCB1bCBsaSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gICAgLmRyb3Bkb3duLWxpc3QgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7IH1cbiAgICAuZHJvcGRvd24tbGlzdCB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XG4gICAgLmRyb3Bkb3duLWxpc3QgdWwgbGk6aG92ZXIge1xuICAgICAgLypiYWNrZ3JvdW5kOiAkbGlzdC1ob3Zlci1iYWNrZ3JvdW5kOyovIH1cbiAgLmRyb3Bkb3duLWxpc3QgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDsgfVxuICAuZHJvcGRvd24tbGlzdCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAuZHJvcGRvd24tbGlzdCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyOyB9XG5cbi5hcnJvdy11cCwgLmFycm93LWRvd24ge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDsgfVxuXG4uYXJyb3ctZG93biB7XG4gIGJvdHRvbTogLTE0cHg7XG4gIHRvcDogdW5zZXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cblxuLmFycm93LTIge1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICNjY2M7XG4gIHRvcDogLTFweDsgfVxuXG4uYXJyb3ctZG93bi5hcnJvdy0yIHtcbiAgdG9wOiB1bnNldDtcbiAgYm90dG9tOiAtMTZweDsgfVxuXG4ubGlzdC1hcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDBweDtcbiAgLypib3gtc2hhZG93OiAwcHggMXB4IDVweCAkYm94LXNoYWRvdy1jb2xvcjsqLyB9XG5cbi5zZWxlY3QtYWxsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLmxpc3QtZmlsdGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7IH1cbiAgLmxpc3QtZmlsdGVyIGlucHV0IHtcbiAgICBib3JkZXI6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4OyB9XG4gIC5saXN0LWZpbHRlciBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAubGlzdC1maWx0ZXIgLmMtc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5cHg7XG4gICAgbGVmdDogMTBweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7IH1cbiAgICAubGlzdC1maWx0ZXIgLmMtc2VhcmNoIHN2ZyB7XG4gICAgICBmaWxsOiAjODg4OyB9XG4gIC5saXN0LWZpbHRlciAuYy1jbGVhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7IH1cbiAgICAubGlzdC1maWx0ZXIgLmMtY2xlYXIgc3ZnIHtcbiAgICAgIGZpbGw6ICM4ODg7IH1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7IH1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWw6YmVmb3JlLFxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmhvdmVyICsgbGFiZWw6YmVmb3JlIHtcbiAgLypib3JkZXItY29sb3I6ICRiYXNlLWNvbG9yOyovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7IH1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmFjdGl2ZSArIGxhYmVsOmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzOyB9XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIC8qY29sb3I6ICRsYWJlbC1jb2xvcjsqL1xuICBmb250LXdlaWdodDogMzAwOyB9XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBjb250ZW50OiAnJztcbiAgLypjb2xvcjogJGJhc2UtY29sb3I7Ki9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgLypib3JkZXI6IDJweCBzb2xpZCAkYmFzZS1jb2xvcjsqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDphZnRlciB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBjb250ZW50OiAnJztcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjsqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dDsgfVxuXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQgKyBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNjY2NjY2M7IH1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmZvY3VzICsgbGFiZWw6YmVmb3JlXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6aG92ZXIgKyBsYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0OyB9XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZDpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgfVxuXG4ucHVyZS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogM3B4O1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDJweDtcbiAgYm9yZGVyLWltYWdlOiBub25lO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApOyB9XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0OyB9XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cblxuLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgLypiYWNrZ3JvdW5kOiAkYmFzZS1jb2xvcjsqLyB9XG5cbi5wdXJlLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpOyB9XG5cbi5saXN0LW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgZm9udC1zaXplOiBpbml0aWFsOyB9XG5cbi5saXN0LWdycCB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50OyB9XG5cbi5saXN0LWdycCBoNCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDE1cHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4ubGlzdC1ncnAgPiBsaSB7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50OyB9XG5cbi5zZWxlY3RlZC1pdGVtIHtcbiAgLypiYWNrZ3JvdW5kOiAkc2VsZWN0ZWQtYmFja2dyb3VuZDsqLyB9XG5cbi5ncnAtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50OyB9XG5cbi5ncnAtdGl0bGUge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmdycC10aXRsZSBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxuXG4uZ3JwLXRpdGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5sb2FkaW5nLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyM3B4O1xuICB6LWluZGV4OiAxOyB9XG5cbi5ub2RhdGEtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweCAwcHg7IH1cblxuLmJ0bi1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCA1cHggMTBweDsgfVxuXG4uY2xlYXItYWxsIHtcbiAgd2lkdGg6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuIl19 */"

/***/ }),

/***/ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.ts":
/*!*************************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION, AngularMultiSelect, AngularMultiSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_CONTROL_VALUE_ACCESSOR", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_CONTROL_VALIDATION", function() { return DROPDOWN_CONTROL_VALIDATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelect", function() { return AngularMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelectModule", function() { return AngularMultiSelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _multiselect_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiselect.model */ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.model.ts");
/* harmony import */ var _clickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clickOutside */ "./projects/angular2-multiselect-dropdown-lib/src/lib/clickOutside.ts");
/* harmony import */ var _list_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-filter */ "./projects/angular2-multiselect-dropdown-lib/src/lib/list-filter.ts");
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-item */ "./projects/angular2-multiselect-dropdown-lib/src/lib/menu-item.ts");
/* harmony import */ var _multiselect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./multiselect.service */ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./virtual-scroll/virtual-scroll */ "./projects/angular2-multiselect-dropdown-lib/src/lib/virtual-scroll/virtual-scroll.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");












const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AngularMultiSelect),
    multi: true
};
const DROPDOWN_CONTROL_VALIDATION = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AngularMultiSelect),
    multi: true,
};
const noop = () => {
};
let AngularMultiSelect = class AngularMultiSelect {
    constructor(_elementRef, cdr, ds) {
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.ds = ds;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onScrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFilterSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFilterDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAddFilterNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGroupSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGroupDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.virtualdata = [];
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
            clearAll: true
        };
        this.randomSize = true;
        this.filteredList = [];
        this.virtualScroollInit = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.searchTerm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(term => term)).subscribe(val => {
            this.filterInfiniteList(val);
        });
    }
    onEscapeDown(event) {
        if (this.settings.escapeToClose) {
            this.closeDropdown();
        }
    }
    ngOnInit() {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.cachedItems = this.cloneArray(this.data);
        if (this.settings.position == 'top') {
            setTimeout(() => {
                this.selectedListHeight = { val: 0 };
                this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            });
        }
        this.subscription = this.ds.getData().subscribe(data => {
            if (data) {
                let len = 0;
                data.forEach((obj, i) => {
                    if (!obj.hasOwnProperty('grpTitle')) {
                        len++;
                    }
                });
                this.filterLength = len;
                this.onFilterChange(data);
            }
        });
        setTimeout(() => {
            this.calculateDropdownDirection();
        });
        this.virtualScroollInit = false;
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
        if (changes.loading) {
        }
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
    }
    onItemClick(item, index, evt) {
        if (this.settings.disabled) {
            return false;
        }
        let found = this.isSelected(item);
        let limit = this.selectedItems.length < this.settings.limitSelection ? true : false;
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
                }
                else {
                    try {
                        if (value.length > 1) {
                            this.selectedItems = [value[0]];
                            throw new _multiselect_model__WEBPACK_IMPORTED_MODULE_4__["MyException"](404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                        }
                        else {
                            this.selectedItems = value;
                        }
                    }
                    catch (e) {
                        console.error(e.body.msg);
                    }
                }
            }
            else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.slice(0, this.settings.limitSelection);
                }
                else {
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
        }
        else {
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
        let found = false;
        this.selectedItems && this.selectedItems.forEach(item => {
            if (clickedItem[this.settings.primaryKey] === item[this.settings.primaryKey]) {
                found = true;
            }
        });
        return found;
    }
    addSelected(item) {
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
            this.closeDropdown();
        }
        else
            this.selectedItems.push(item);
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
            return false;
        }
        this.isActive = !this.isActive;
        if (this.isActive) {
            if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
                setTimeout(() => {
                    this.searchInput.nativeElement.focus();
                }, 0);
            }
            this.onOpen.emit(true);
        }
        else {
            this.onClose.emit(false);
        }
        setTimeout(() => {
            this.calculateDropdownDirection();
        }, 0);
        if (this.settings.lazyLoading) {
            this.virtualdata = this.data;
            this.virtualScroollInit = true;
        }
        evt.preventDefault();
    }
    openDropdown() {
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = true;
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
            this.onClose.emit(false);
        }
    }
    toggleSelectAll() {
        if (!this.isSelectAll) {
            this.selectedItems = [];
            if (this.settings.groupBy) {
                this.groupedData.forEach((obj) => {
                    obj.selected = true;
                });
                this.groupCachedItems.forEach((obj) => {
                    obj.selected = true;
                });
            }
            this.selectedItems = this.data.slice();
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            if (this.settings.groupBy) {
                this.groupedData.forEach((obj) => {
                    obj.selected = false;
                });
                this.groupCachedItems.forEach((obj) => {
                    obj.selected = false;
                });
            }
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
        }
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
            }
            else {
                arr = obj.list.filter(t => {
                    return t[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
                });
            }
            obj.list = arr;
            if (obj[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
                return arr;
            }
            else {
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
                /*                 this.groupedData.forEach((item: any) => {
                                    if (item.list) {
                                        item.list.forEach((el: any) => {
                                            if (!this.isSelected(el)) {
                                                this.addSelected(el);
                                                added.push(el);
                                            }
                                        });
                                    }
                                    this.updateGroupInfo(item);
                
                                }); */
                this.ds.getFilteredData().forEach((el) => {
                    if (!this.isSelected(el) && !el.hasOwnProperty('grpTitle')) {
                        this.addSelected(el);
                        added.push(el);
                    }
                });
            }
            else {
                this.ds.getFilteredData().forEach((item) => {
                    if (!this.isSelected(item)) {
                        this.addSelected(item);
                        added.push(item);
                    }
                });
            }
            this.isFilterSelectAll = true;
            this.onFilterSelectAll.emit(added);
        }
        else {
            let removed = [];
            if (this.settings.groupBy) {
                /*                 this.groupedData.forEach((item: any) => {
                                    if (item.list) {
                                        item.list.forEach((el: any) => {
                                            if (this.isSelected(el)) {
                                                this.removeSelected(el);
                                                removed.push(el);
                                            }
                                        });
                                    }
                                }); */
                this.ds.getFilteredData().forEach((el) => {
                    if (this.isSelected(el)) {
                        this.removeSelected(el);
                        removed.push(el);
                    }
                });
            }
            else {
                this.ds.getFilteredData().forEach((item) => {
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
            this.virtualdata.forEach((item) => {
                if (!this.isSelected(item)) {
                    this.addSelected(item);
                }
            });
            this.isInfiniteFilterSelectAll = true;
        }
        else {
            this.virtualdata.forEach((item) => {
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
    }
    onFilterChange(data) {
        if (this.filter && this.filter == "" || data.length == 0) {
            this.isFilterSelectAll = false;
        }
        let cnt = 0;
        data.forEach((item) => {
            if (!item.hasOwnProperty('grpTitle') && this.isSelected(item)) {
                cnt++;
            }
        });
        if (cnt > 0 && this.filterLength == cnt) {
            this.isFilterSelectAll = true;
        }
        else if (cnt > 0 && this.filterLength != cnt) {
            this.isFilterSelectAll = false;
        }
        this.cdr.detectChanges();
    }
    cloneArray(arr) {
        let i, copy;
        if (Array.isArray(arr)) {
            return JSON.parse(JSON.stringify(arr));
        }
        else if (typeof arr === 'object') {
            throw 'Cannot clone array containing an object!';
        }
        else {
            return arr;
        }
    }
    updateGroupInfo(item) {
        let key = this.settings.groupBy;
        this.groupedData.forEach((obj) => {
            let cnt = 0;
            if (obj.grpTitle && (item[key] == obj[key])) {
                if (obj.list) {
                    obj.list.forEach((el) => {
                        if (this.isSelected(el)) {
                            cnt++;
                        }
                    });
                }
            }
            if (obj.list && (cnt === obj.list.length) && (item[key] == obj[key])) {
                obj.selected = true;
            }
            else if (obj.list && (cnt != obj.list.length) && (item[key] == obj[key])) {
                obj.selected = false;
            }
        });
        this.groupCachedItems.forEach((obj) => {
            let cnt = 0;
            if (obj.grpTitle && (item[key] == obj[key])) {
                if (obj.list) {
                    obj.list.forEach((el) => {
                        if (this.isSelected(el)) {
                            cnt++;
                        }
                    });
                }
            }
            if (obj.list && (cnt === obj.list.length) && (item[key] == obj[key])) {
                obj.selected = true;
            }
            else if (obj.list && (cnt != obj.list.length) && (item[key] == obj[key])) {
                obj.selected = false;
            }
        });
    }
    transformData(arr, field) {
        const groupedObj = arr.reduce((prev, cur) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        const tempArr = [];
        Object.keys(groupedObj).map((x) => {
            let obj = {};
            obj["grpTitle"] = true;
            obj[this.settings.labelKey] = x;
            obj[this.settings.groupBy] = x;
            obj['selected'] = false;
            obj['list'] = [];
            let cnt = 0;
            groupedObj[x].forEach((item) => {
                item['list'] = [];
                obj.list.push(item);
                if (this.isSelected(item)) {
                    cnt++;
                }
            });
            if (cnt == obj.list.length) {
                obj.selected = true;
            }
            else {
                obj.selected = false;
            }
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
        }
        else {
            this.data = this.cachedItems.slice();
            this.virtualdata = this.cachedItems.slice();
        }
        if ((evt != null || evt != '') && !this.settings.groupBy) {
            if (this.settings.searchBy.length > 0) {
                for (let t = 0; t < this.settings.searchBy.length; t++) {
                    this.virtualdata.filter((el) => {
                        if (el[this.settings.searchBy[t].toString()].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                        }
                    });
                }
            }
            else {
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
                }
                else {
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
        }
        else if (evt.toString() == '' && this.cachedItems.length > 0) {
            this.virtualdata = [];
            this.virtualdata = this.cachedItems;
            this.infiniteFilterLength = 0;
        }
        this.virtualScroller.refresh();
    }
    resetInfiniteSearch() {
        this.filter = "";
        this.isInfiniteFilterSelectAll = false;
        this.virtualdata = [];
        this.virtualdata = this.cachedItems;
        this.groupedData = this.groupCachedItems;
        this.infiniteFilterLength = 0;
    }
    onScrollEnd(e) {
        if (e.endIndex === this.data.length - 1 || e.startIndex === 0) {
        }
        this.onScrollToEnd.emit(e);
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    selectGroup(item) {
        if (item.selected) {
            item.selected = false;
            item.list.forEach((obj) => {
                this.removeSelected(obj);
            });
            this.updateGroupInfo(item);
            this.onGroupSelect.emit(item);
        }
        else {
            item.selected = true;
            item.list.forEach((obj) => {
                if (!this.isSelected(obj)) {
                    this.addSelected(obj);
                }
            });
            this.updateGroupInfo(item);
            this.onGroupDeSelect.emit(item);
        }
    }
    addFilterNewItem() {
        this.onAddFilterNewItem.emit(this.filter);
        this.filterPipe = new _list_filter__WEBPACK_IMPORTED_MODULE_6__["ListFilterPipe"](this.ds);
        this.filterPipe.transform(this.data, this.filter, this.settings.searchBy);
    }
    calculateDropdownDirection() {
        let shouldOpenTowardsTop = this.settings.position == 'top';
        if (this.settings.autoPosition) {
            const dropdownHeight = this.dropdownListElem.nativeElement.clientHeight;
            const viewportHeight = document.documentElement.clientHeight;
            const selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();
            const spaceOnTop = selectedListBounds.top;
            const spaceOnBottom = viewportHeight - selectedListBounds.top;
            if (spaceOnBottom < spaceOnTop && dropdownHeight < spaceOnTop) {
                this.openTowardsTop(true);
            }
            else {
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
        if (value && this.selectedListElem.nativeElement.clientHeight) {
            this.dropdownListYOffset = 15 + this.selectedListElem.nativeElement.clientHeight;
        }
        else {
            this.dropdownListYOffset = 0;
        }
    }
    clearSelection(e) {
        if (this.settings.groupBy) {
            this.groupCachedItems.forEach((obj) => {
                obj.selected = false;
            });
        }
        this.clearSearch();
        this.selectedItems = [];
        this.onDeSelectAll.emit(this.selectedItems);
    }
};
AngularMultiSelect.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _multiselect_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AngularMultiSelect.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AngularMultiSelect.prototype, "settings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AngularMultiSelect.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onSelect'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onDeSelect'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onDeSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onSelectAll'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onSelectAll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onDeSelectAll'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onDeSelectAll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onOpen'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onClose'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onClose", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onScrollToEnd'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onScrollToEnd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onFilterSelectAll'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onFilterSelectAll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onFilterDeSelectAll'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onFilterDeSelectAll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onAddFilterNewItem'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onAddFilterNewItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onGroupSelect'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onGroupSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onGroupDeSelect'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AngularMultiSelect.prototype, "onGroupDeSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_menu_item__WEBPACK_IMPORTED_MODULE_7__["Item"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _menu_item__WEBPACK_IMPORTED_MODULE_7__["Item"])
], AngularMultiSelect.prototype, "itemTempl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_menu_item__WEBPACK_IMPORTED_MODULE_7__["Badge"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _menu_item__WEBPACK_IMPORTED_MODULE_7__["Badge"])
], AngularMultiSelect.prototype, "badgeTempl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_menu_item__WEBPACK_IMPORTED_MODULE_7__["Search"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _menu_item__WEBPACK_IMPORTED_MODULE_7__["Search"])
], AngularMultiSelect.prototype, "searchTempl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AngularMultiSelect.prototype, "searchInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectedList', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AngularMultiSelect.prototype, "selectedListElem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dropdownList', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AngularMultiSelect.prototype, "dropdownListElem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup.escape', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AngularMultiSelect.prototype, "onEscapeDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_10__["VirtualScrollerComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_10__["VirtualScrollerComponent"])
], AngularMultiSelect.prototype, "virtualScroller", void 0);
AngularMultiSelect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'angular2-multiselect',
        template: __webpack_require__(/*! raw-loader!./multiselect.component.html */ "./node_modules/raw-loader/index.js!./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.html"),
        host: { '[class]': 'defaultSettings.classes' },
        providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./multiselect.component.scss */ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _multiselect_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]])
], AngularMultiSelect);

let AngularMultiSelectModule = class AngularMultiSelectModule {
};
AngularMultiSelectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _virtual_scroll_virtual_scroll__WEBPACK_IMPORTED_MODULE_10__["VirtualScrollerModule"]],
        declarations: [AngularMultiSelect, _clickOutside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideDirective"], _clickOutside__WEBPACK_IMPORTED_MODULE_5__["ScrollDirective"], _clickOutside__WEBPACK_IMPORTED_MODULE_5__["styleDirective"], _list_filter__WEBPACK_IMPORTED_MODULE_6__["ListFilterPipe"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["Item"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["TemplateRenderer"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["Badge"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["Search"], _clickOutside__WEBPACK_IMPORTED_MODULE_5__["setPosition"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["CIcon"]],
        exports: [AngularMultiSelect, _clickOutside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideDirective"], _clickOutside__WEBPACK_IMPORTED_MODULE_5__["ScrollDirective"], _clickOutside__WEBPACK_IMPORTED_MODULE_5__["styleDirective"], _list_filter__WEBPACK_IMPORTED_MODULE_6__["ListFilterPipe"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["Item"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["TemplateRenderer"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["Badge"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["Search"], _clickOutside__WEBPACK_IMPORTED_MODULE_5__["setPosition"], _menu_item__WEBPACK_IMPORTED_MODULE_7__["CIcon"]],
        providers: [_multiselect_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]]
    })
], AngularMultiSelectModule);



/***/ }),

/***/ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.model.ts":
/*!*********************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.model.ts ***!
  \*********************************************************************************/
/*! exports provided: MyException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyException", function() { return MyException; });
class MyException {
    constructor(status, body) {
        this.status = status;
        this.body = body;
    }
}
MyException.ctorParameters = () => [
    { type: Number },
    { type: undefined }
];


/***/ }),

/***/ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.service.ts":
/*!***********************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.service.ts ***!
  \***********************************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DataService = class DataService {
    constructor() {
        this.filteredData = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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
        }
        else {
            return [];
        }
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./projects/angular2-multiselect-dropdown-lib/src/lib/virtual-scroll/defaultoptions.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/virtual-scroll/defaultoptions.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./projects/angular2-multiselect-dropdown-lib/src/lib/virtual-scroll/virtual-scroll.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/angular2-multiselect-dropdown-lib/src/lib/virtual-scroll/virtual-scroll.ts ***!
  \*********************************************************************************************/
/*! exports provided: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY, VirtualScrollerComponent, VirtualScrollerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY", function() { return VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollerComponent", function() { return VirtualScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollerModule", function() { return VirtualScrollerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/src/Tween.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _defaultoptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultoptions */ "./projects/angular2-multiselect-dropdown-lib/src/lib/virtual-scroll/defaultoptions.ts");
/* harmony import */ var _defaultoptions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_defaultoptions__WEBPACK_IMPORTED_MODULE_4__);







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
let VirtualScrollerComponent = class VirtualScrollerComponent {
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
        this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.calculatedScrollbarWidth = 0;
        this.calculatedScrollbarHeight = 0;
        this.padding = 0;
        this.previousViewPort = {};
        this.cachedPageSize = 0;
        this.previousScrollNumberElements = 0;
        this.isAngularUniversalSSR = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(platformId);
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
        if (typeof (this._bufferAmount) === 'number' && this._bufferAmount >= 0) {
            return this._bufferAmount;
        }
        else {
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
        }
        else if (this.scrollThrottlingTime) {
            this.onScroll = this.throttleTrailing(() => {
                this.refresh_internal(false);
            }, this.scrollThrottlingTime);
        }
        else {
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
            this.oldParentScrollOverflow = { x: scrollElement.style['overflow-x'], y: scrollElement.style['overflow-y'] };
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
        }
        else {
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
        }
        else {
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
        const tweenConfigObj = { scrollPosition: scrollElement[this._scrollType] };
        let newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__["Tween"](tweenConfigObj)
            .to({ scrollPosition }, animationMilliseconds)
            .easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__["Easing"].Quadratic.Out)
            .onUpdate((data) => {
            if (isNaN(data.scrollPosition)) {
                return;
            }
            this.renderer.setProperty(scrollElement, this._scrollType, data.scrollPosition);
            this.refresh_internal(false);
        })
            .onStop(() => {
            cancelAnimationFrame(animationRequest);
        })
            .start();
        const animate = (time) => {
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
        }
        else {
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
        }
        else {
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
            }
            else {
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
                    }
                    else {
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
                const changeEventArg = (startChanged || endChanged) ? {
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
                    }
                    else {
                        this.zone.run(handleChanged);
                    }
                }
                else {
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
            }
            else {
                this.disposeScrollHandler = this.renderer.listen(scrollElement, 'scroll', this.onScroll);
                if (this._checkResizeInterval > 0) {
                    this.checkScrollElementResizedTimer = setInterval(() => { this.checkScrollElementResized(); }, this._checkResizeInterval);
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
            }
            else {
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
        let children = ((this.containerElementRef && this.containerElementRef.nativeElement) || this.contentElementRef.nativeElement).children;
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
        let content = (this.containerElementRef && this.containerElementRef.nativeElement) || this.contentElementRef.nativeElement;
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
        }
        else if (!this.enableUnequalChildrenSizes) {
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
        }
        else {
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
                    }
                    else {
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
            }
            else {
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
                }
                else {
                    ++numUnknownChildSizes;
                }
            }
            scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
        }
        else {
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
            }
            else {
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
                }
                else {
                    totalScrolledLength += defaultScrollLengthPerWrapGroup;
                }
                if (scrollPosition < totalScrolledLength) {
                    scrollPercentage = i / numberOfWrapGroups;
                    break;
                }
            }
        }
        else {
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
        if (scrollStartPosition > (dimensions.scrollLength + offset) && !(this.parentScroll instanceof Window)) {
            scrollStartPosition = dimensions.scrollLength;
        }
        else {
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
};
VirtualScrollerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _defaultoptions__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollerDefaultOptions"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['virtual-scroller-default-options',] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], VirtualScrollerComponent.prototype, "executeRefreshOutsideAngularZone", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], VirtualScrollerComponent.prototype, "enableUnequalChildrenSizes", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], VirtualScrollerComponent.prototype, "useMarginInsteadOfTranslate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], VirtualScrollerComponent.prototype, "modifyOverflowStyleOfParentScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], VirtualScrollerComponent.prototype, "stripedTable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "scrollbarWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "scrollbarHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "childWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "childHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "ssrChildWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "ssrChildHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "ssrViewportWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "ssrViewportHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], VirtualScrollerComponent.prototype, "bufferAmount", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "scrollAnimationTime", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VirtualScrollerComponent.prototype, "resizeBypassRefreshThreshold", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], VirtualScrollerComponent.prototype, "scrollThrottlingTime", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], VirtualScrollerComponent.prototype, "scrollDebounceTime", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], VirtualScrollerComponent.prototype, "checkResizeInterval", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], VirtualScrollerComponent.prototype, "items", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], VirtualScrollerComponent.prototype, "compareItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], VirtualScrollerComponent.prototype, "horizontal", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], VirtualScrollerComponent.prototype, "parentScroll", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], VirtualScrollerComponent.prototype, "vsUpdate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], VirtualScrollerComponent.prototype, "vsChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], VirtualScrollerComponent.prototype, "vsStart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], VirtualScrollerComponent.prototype, "vsEnd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], VirtualScrollerComponent.prototype, "contentElementRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('invisiblePadding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], VirtualScrollerComponent.prototype, "invisiblePaddingElementRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('header', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], VirtualScrollerComponent.prototype, "headerElementRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], VirtualScrollerComponent.prototype, "containerElementRef", void 0);
VirtualScrollerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'virtual-scroller,[virtualScroller]',
        exportAs: 'virtualScroller',
        template: `
    <div class="total-padding" #invisiblePadding></div>
    <div class="scrollable-content" #content>
      <ng-content></ng-content>
    </div>
  `,
        host: {
            '[class.horizontal]': "horizontal",
            '[class.vertical]': "!horizontal",
            '[class.selfScroll]': "!parentScroll"
        },
        styles: ["\n    :host {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t:host.horizontal.selfScroll {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t:host.vertical.selfScroll {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content ::ng-deep > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t:host.horizontal {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t:host.horizontal .scrollable-content {\n\t\tdisplay: flex;\n\t}\n\t\n\t:host.horizontal .scrollable-content ::ng-deep > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    :host.horizontal .total-padding {\n      height: 100%;\n    }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('virtual-scroller-default-options')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        Object, Object])
], VirtualScrollerComponent);

let VirtualScrollerModule = class VirtualScrollerModule {
};
VirtualScrollerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [VirtualScrollerComponent],
        declarations: [VirtualScrollerComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [
            {
                provide: 'virtual-scroller-default-options',
                useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
            }
        ]
    })
], VirtualScrollerModule);



/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-sidebar {\n    position: fixed;\n    top: 65px;\n    height: calc(100vh - 75px);\n    padding-right: 0px;\n    overflow: hidden;\n}\n.left-sidebar, .right-sidebar {\n    width: 260px;\n}\n.left-sidebar:hover {\n    overflow: auto;\n\n}\n.outer-wrapper {\n    padding: 30px;\n}\n.center-content{\n    background: #ffffff;\n    border: 1px solid rgba(0,0,0,.125);\n    border-radius: 3px;\n    padding: 15px;\n    margin-left: 0px;\n    margin-top: 0px;\n}\n@media (min-width: 768px) { \n    .center-content {\n        margin-left: 265px;\n    }\n}\n.nav-sub{\n    width: 100%;\n    box-shadow: none;\n    margin-bottom: 6px;\n    padding: 0px;\n    margin-top: 50px;\n}\n.nav-wrapper {\n    padding: 0px 10px;\n}\n.list-group-item {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjOztBQUVsQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0LXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDY1cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGVmdC1zaWRlYmFyLCAucmlnaHQtc2lkZWJhciB7XG4gICAgd2lkdGg6IDI2MHB4O1xufVxuLmxlZnQtc2lkZWJhcjpob3ZlciB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbn1cblxuLm91dGVyLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG4uY2VudGVyLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IFxuICAgIC5jZW50ZXItY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNjVweDtcbiAgICB9XG59XG4ubmF2LXN1YntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5uYXYtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
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
    ngOnInit() {
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
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: hljsLanguages, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _examples_mock_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/mock-data */ "./src/app/examples/mock-data.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.ts");
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
/* harmony import */ var _examples_searchByOneProperty__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./examples/searchByOneProperty */ "./src/app/examples/searchByOneProperty.ts");
/* harmony import */ var _examples_lazyLoadingRemoteData__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./examples/lazyLoadingRemoteData */ "./src/app/examples/lazyLoadingRemoteData.ts");
/* harmony import */ var _examples_searchFilterAddNewItem__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./examples/searchFilterAddNewItem */ "./src/app/examples/searchFilterAddNewItem.ts");
/* harmony import */ var _examples_events__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./examples/events */ "./src/app/examples/events.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
/* harmony import */ var _examples_usingInList__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./examples/usingInList */ "./src/app/examples/usingInList.ts");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










































function hljsLanguages() {
    return [
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_38___default.a },
        { name: 'scss', func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_37___default.a },
        { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_36___default.a }
    ];
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
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
            _examples_customSearch__WEBPACK_IMPORTED_MODULE_29__["CustomSearchExample"],
            _examples_searchByOneProperty__WEBPACK_IMPORTED_MODULE_30__["SearchFilterByOnePropertyExample"],
            _examples_lazyLoadingRemoteData__WEBPACK_IMPORTED_MODULE_31__["LazyLoadingRemoteDataExample"],
            _examples_searchFilterAddNewItem__WEBPACK_IMPORTED_MODULE_32__["SearchFilterAddItemExample"],
            _examples_events__WEBPACK_IMPORTED_MODULE_33__["EventsExample"],
            _examples_usingInList__WEBPACK_IMPORTED_MODULE_35__["UsingInListExample"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_router__WEBPACK_IMPORTED_MODULE_8__["AppRouterModule"],
            _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_7__["AngularMultiSelectModule"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_21__["TabViewModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_34__["HighlightModule"].forRoot({
                languages: hljsLanguages
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_39__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_40__["environment"].production }),
            _angular_router__WEBPACK_IMPORTED_MODULE_41__["RouterModule"]
        ],
        providers: [_examples_mock_data__WEBPACK_IMPORTED_MODULE_5__["MockService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _examples_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/basic */ "./src/app/examples/basic.ts");
/* harmony import */ var _examples_singleselection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/singleselection */ "./src/app/examples/singleselection.ts");
/* harmony import */ var _examples_groupBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/groupBy */ "./src/app/examples/groupBy.ts");
/* harmony import */ var _examples_searchFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/searchFilter */ "./src/app/examples/searchFilter.ts");
/* harmony import */ var _examples_templating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/templating */ "./src/app/examples/templating.ts");
/* harmony import */ var _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/resetdropdown */ "./src/app/examples/resetdropdown.ts");
/* harmony import */ var _examples_disablemode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/disablemode */ "./src/app/examples/disablemode.ts");
/* harmony import */ var _examples_limitselection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/limitselection */ "./src/app/examples/limitselection.ts");
/* harmony import */ var _examples_limitbadges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/limitbadges */ "./src/app/examples/limitbadges.ts");
/* harmony import */ var _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/customplaceholder */ "./src/app/examples/customplaceholder.ts");
/* harmony import */ var _examples_styling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/styling */ "./src/app/examples/styling.ts");
/* harmony import */ var _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/usingWithForms */ "./src/app/examples/usingWithForms.ts");
/* harmony import */ var _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/usingInReactForms */ "./src/app/examples/usingInReactForms.ts");
/* harmony import */ var _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/lazyLoading */ "./src/app/examples/lazyLoading.ts");
/* harmony import */ var _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/multipleDropdowns */ "./src/app/examples/multipleDropdowns.ts");
/* harmony import */ var _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/dynamicDataSets */ "./src/app/examples/dynamicDataSets.ts");
/* harmony import */ var _examples_theming__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/theming */ "./src/app/examples/theming.ts");
/* harmony import */ var _examples_remoteData__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/remoteData */ "./src/app/examples/remoteData.ts");
/* harmony import */ var _examples_customSearch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/customSearch */ "./src/app/examples/customSearch.ts");
/* harmony import */ var _examples_searchByOneProperty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./examples/searchByOneProperty */ "./src/app/examples/searchByOneProperty.ts");
/* harmony import */ var _examples_lazyLoadingRemoteData__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./examples/lazyLoadingRemoteData */ "./src/app/examples/lazyLoadingRemoteData.ts");
/* harmony import */ var _examples_searchFilterAddNewItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./examples/searchFilterAddNewItem */ "./src/app/examples/searchFilterAddNewItem.ts");
/* harmony import */ var _examples_events__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./examples/events */ "./src/app/examples/events.ts");
/* harmony import */ var _examples_usingInList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./examples/usingInList */ "./src/app/examples/usingInList.ts");



























const appRoutes = [
    { path: '', redirectTo: '/basic', pathMatch: 'full' },
    { path: 'basic', component: _examples_basic__WEBPACK_IMPORTED_MODULE_3__["BasicExample"] },
    { path: 'singleselection', component: _examples_singleselection__WEBPACK_IMPORTED_MODULE_4__["SingleSelectionExample"] },
    { path: 'searchfilter', component: _examples_searchFilter__WEBPACK_IMPORTED_MODULE_6__["SearchFilterExample"] },
    { path: 'groupby', component: _examples_groupBy__WEBPACK_IMPORTED_MODULE_5__["GroupByExample"] },
    { path: 'templating', component: _examples_templating__WEBPACK_IMPORTED_MODULE_7__["TemplatingExample"] },
    { path: 'dropdownMethods', component: _examples_resetdropdown__WEBPACK_IMPORTED_MODULE_8__["ResetDropdownExample"] },
    { path: 'disablemode', component: _examples_disablemode__WEBPACK_IMPORTED_MODULE_9__["DisableModeExample"] },
    { path: 'limitselection', component: _examples_limitselection__WEBPACK_IMPORTED_MODULE_10__["LimitSelectionExample"] },
    { path: 'limitbadges', component: _examples_limitbadges__WEBPACK_IMPORTED_MODULE_11__["LimitBadgesExample"] },
    { path: 'customplaceholder', component: _examples_customplaceholder__WEBPACK_IMPORTED_MODULE_12__["CustomPlaceholderExample"] },
    { path: 'styling', component: _examples_styling__WEBPACK_IMPORTED_MODULE_13__["StylingExample"] },
    { path: 'usinginform', component: _examples_usingWithForms__WEBPACK_IMPORTED_MODULE_14__["UsingWithFormExample"] },
    { path: 'usinginreactiveform', component: _examples_usingInReactForms__WEBPACK_IMPORTED_MODULE_15__["UsingWithReactiveFormExample"] },
    { path: 'lazyloading', component: _examples_lazyLoading__WEBPACK_IMPORTED_MODULE_16__["LazyLoadingExample"] },
    { path: 'multipledropdowns', component: _examples_multipleDropdowns__WEBPACK_IMPORTED_MODULE_17__["MultipleDropdownsExample"] },
    { path: 'dynamicdatasets', component: _examples_dynamicDataSets__WEBPACK_IMPORTED_MODULE_18__["DynamicDataSetsExample"] },
    { path: 'theming', component: _examples_theming__WEBPACK_IMPORTED_MODULE_19__["ThemingExample"] },
    { path: 'remoteData', component: _examples_remoteData__WEBPACK_IMPORTED_MODULE_20__["RemoteDataExample"] },
    { path: 'customSearchAPI', component: _examples_customSearch__WEBPACK_IMPORTED_MODULE_21__["CustomSearchExample"] },
    { path: 'searchFilterByOneProperty', component: _examples_searchByOneProperty__WEBPACK_IMPORTED_MODULE_22__["SearchFilterByOnePropertyExample"] },
    { path: 'lazyloadingRemoteData', component: _examples_lazyLoadingRemoteData__WEBPACK_IMPORTED_MODULE_23__["LazyLoadingRemoteDataExample"] },
    { path: 'searchfilterAddNewItem', component: _examples_searchFilterAddNewItem__WEBPACK_IMPORTED_MODULE_24__["SearchFilterAddItemExample"] },
    { path: 'events', component: _examples_events__WEBPACK_IMPORTED_MODULE_25__["EventsExample"] },
    { path: 'usingInList', component: _examples_usingInList__WEBPACK_IMPORTED_MODULE_26__["UsingInListExample"] }
];
let AppRouterModule = class AppRouterModule {
};
AppRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true })
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], AppRouterModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let BasicExample = class BasicExample {
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
        this.meta.addTags([
            { name: 'description', content: 'Basic example of angular multiselect drodown.' }
        ]);
    }
    ngOnInit() {
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
            { "countryId": 4, "itemName": "Canada" },
            { "countryId": 5, "itemName": "South Korea" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "countryId"
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
};
BasicExample.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
];
BasicExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/view.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/view.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
], BasicExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CustomSearchExample = class CustomSearchExample {
    constructor(http) {
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
            searchBy: ['name', 'capital']
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
        this.http.get('https://restcountries.eu/rest/v2/name/' + evt.target.value + '?fulltext=true')
            .subscribe(res => {
            console.log(res);
            this.itemList = res;
        }, error => {
        });
    }
};
CustomSearchExample.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomSearchExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/customSearch.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/customSearch.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CustomSearchExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomPlaceholderExample = class CustomPlaceholderExample {
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
};
CustomPlaceholderExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/view.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/view.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CustomPlaceholderExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DisableModeExample = class DisableModeExample {
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
};
DisableModeExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/disableMode.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/disableMode.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DisableModeExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-data */ "./src/app/examples/mock-data.ts");



let DynamicDataSetsExample = class DynamicDataSetsExample {
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
            classes: "myclass custom-class"
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
};
DynamicDataSetsExample.ctorParameters = () => [
    { type: _mock_data__WEBPACK_IMPORTED_MODULE_2__["MockService"] }
];
DynamicDataSetsExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/dynamicData.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/dynamicData.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockService"]])
], DynamicDataSetsExample);



/***/ }),

/***/ "./src/app/examples/events.ts":
/*!************************************!*\
  !*** ./src/app/examples/events.ts ***!
  \************************************/
/*! exports provided: EventsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsExample", function() { return EventsExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventsExample = class EventsExample {
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
};
EventsExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/events.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/events.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EventsExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ng2Gist = class ng2Gist {
    constructor() { }
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
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('iframe', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ng2Gist.prototype, "iframe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ng2Gist.prototype, "gistId", void 0);
ng2Gist = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ng2-gist',
        template: `
    <iframe #iframe type="text/javascript" width="100%" frameborder="0"></iframe>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ng2Gist);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupByExample = class GroupByExample {
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
        this.itemList = [
            { "id": 1, "itemName": "India", "category": "asia" },
            { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
            { "id": 3, "itemName": "Germany", "category": "Europe" },
            { "id": 4, "itemName": "France", "category": "Europe" },
            { "id": 5, "itemName": "South Korea", "category": "asia" },
            { "id": 6, "itemName": "Sweden", "category": "Europe" }
        ];
        this.selectedItems = [
            { "id": 1, "itemName": "India", "category": "asia" },
            { "id": 5, "itemName": "South Korea", "category": "asia" }
        ];
        this.settings = {
            singleSelection: false,
            text: "Select Fields",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            searchPlaceholderText: 'Search Fields',
            enableSearchFilter: true,
            groupBy: "category",
            selectGroup: true,
            searchBy: ["itemName"]
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
        this.itemList = [{ "id": 1, "itemName": "Apple", "category": "fruits" },
            { "id": 2, "itemName": "Banana", "category": "fruits" },
            { "id": 5, "itemName": "Tomatoe", "category": "vegetables" },
            { "id": 6, "itemName": "Potatoe", "category": "vegetables" }];
    }
    loadDataSet2() {
        this.selectedItems = [];
        this.itemList = [
            { "id": 1, "itemName": "India", "category": "asia" },
            { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
            { "id": 3, "itemName": "Germany", "category": "Europe" },
            { "id": 4, "itemName": "France", "category": "Europe" },
            { "id": 5, "itemName": "South Korea", "category": "asia" },
            { "id": 6, "itemName": "Sweden", "category": "Europe" }
        ];
    }
};
GroupByExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/groupBy.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/groupBy.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GroupByExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LazyLoadingExample = class LazyLoadingExample {
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
            var tempObj = { "id": 0, "itemName": "", "category": "" };
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
            badgeShowLimit: 4
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
};
LazyLoadingExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/lazyLoading.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/lazyLoading.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LazyLoadingExample);



/***/ }),

/***/ "./src/app/examples/lazyLoadingRemoteData.ts":
/*!***************************************************!*\
  !*** ./src/app/examples/lazyLoadingRemoteData.ts ***!
  \***************************************************/
/*! exports provided: LazyLoadingRemoteDataExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadingRemoteDataExample", function() { return LazyLoadingRemoteDataExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-data */ "./src/app/examples/mock-data.ts");



let LazyLoadingRemoteDataExample = class LazyLoadingRemoteDataExample {
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
            limitSelection: 3
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
};
LazyLoadingRemoteDataExample.ctorParameters = () => [
    { type: _mock_data__WEBPACK_IMPORTED_MODULE_2__["MockService"] }
];
LazyLoadingRemoteDataExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/lazyLoadingRemoteData.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/lazyLoadingRemoteData.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockService"]])
], LazyLoadingRemoteDataExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LimitBadgesExample = class LimitBadgesExample {
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
};
LimitBadgesExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/view.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/view.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LimitBadgesExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LimitSelectionExample = class LimitSelectionExample {
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
            limitSelection: 2
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
};
LimitSelectionExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/view.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/view.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LimitSelectionExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MockService = class MockService {
    constructor() {
        this.itemList = [];
        this.DATA = [{ "id": "PBMMedAdhr", "name": "PBM Medication Adherence" }, { "id": "GapsInCare", "name": "Gaps In Care" }, { "id": "UCTest1", "name": "Use Case Test1" }, { "id": "BASICSAVE", "name": "A generic alternative or 30-90 day dispense opport" }, { "id": "ADVSAVE", "name": "An advnaced generic alternative or 30-90 day dispe" }, { "id": "AttAlert", "name": "Attachment Alert" }, { "id": "PatSave", "name": "Patient savings" }, { "id": "UCTest2", "name": "Use Case Test 2" }, { "id": "UCTest3", "name": "Use Case Test 3" }, { "id": "UCTest4", "name": "Use Case Test 4" }, { "id": "UCTest5", "name": "Use Case Test 5" }, { "id": "UCTest6", "name": "Use Case Test 6" }, { "id": "UCTest7", "name": "Use Case Test 7" }, { "id": "UCTest9", "name": "Use Case Test 9" }, { "id": "UCTest#Ten", "name": "Use Case Test 10" }, { "id": "UCTest8", "name": "Use Case Test 8" }, { "id": "UCTest11", "name": "Test Use Case 11" }, { "id": "UCTest12", "name": "Test Use Case 12" }, { "id": "UCTest13", "name": "Test Use Case 13" }, { "id": "PNLIMMUN", "name": "PNL Immunization" }, { "id": "TrustBrkr", "name": "Identity Services" }, { "id": "RTBC", "name": "real time benefit check for 90 day at retail" }];
        this.categories = ["Indian", "American", "Canadian", "Chinese"];
        this.namesList = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Cox", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Reyes", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler", "Barnes", "Fisher", "Henderson", "Coleman", "Simmons", "Patterson", "Jordan", "Reynolds", "Hamilton", "Graham", "Kim", "Gonzales", "Alexander", "Ramos", "Wallace", "Griffin", "West", "Cole", "Hayes", "Chavez", "Gibson", "Bryant", "Ellis", "Stevens", "Murray", "Ford", "Marshall", "Owens", "Mcdonald", "Harrison", "Ruiz", "Kennedy", "Wells", "Alvarez", "Woods", "Mendoza", "Castillo", "Olson", "Webb", "Washington", "Tucker", "Freeman", "Burns", "Henry", "Vasquez", "Snyder", "Simpson", "Crawford", "Jimenez", "Porter", "Mason", "Shaw", "Gordon", "Wagner", "Hunter", "Romero", "Hicks", "Dixon", "Hunt", "Palmer", "Robertson", "Black", "Holmes", "Stone", "Meyer", "Boyd", "Mills", "Warren", "Fox", "Rose", "Rice", "Moreno", "Schmidt", "Patel", "Ferguson", "Nichols", "Herrera", "Medina", "Ryan", "Fernandez", "Weaver", "Daniels", "Stephens", "Gardner", "Payne", "Kelley", "Dunn", "Pierce", "Arnold", "Tran", "Spencer", "Peters", "Hawkins", "Grant", "Hansen", "Castro", "Hoffman", "Hart", "Elliott", "Cunningham", "Knight", "Bradley", "Carroll", "Hudson", "Duncan", "Armstrong", "Berry", "Andrews", "Johnston", "Ray", "Lane", "Riley", "Carpenter", "Perkins", "Aguilar", "Silva", "Richards", "Willis", "Matthews", "Chapman", "Lawrence", "Garza", "Vargas", "Watkins", "Wheeler", "Larson", "Carlson", "Harper", "George", "Greene", "Burke", "Guzman", "Morrison", "Munoz", "Jacobs", "Obrien", "Lawson", "Franklin", "Lynch", "Bishop", "Carr", "Salazar", "Austin", "Mendez", "Gilbert", "Jensen", "Williamson", "Montgomery", "Harvey", "Oliver", "Howell", "Dean", "Hanson", "Weber", "Garrett", "Sims", "Burton", "Fuller", "Soto", "Mccoy", "Welch", "Chen", "Schultz", "Walters", "Reid", "Fields", "Walsh", "Little", "Fowler", "Bowman", "Davidson", "May", "Day", "Schneider", "Newman", "Brewer", "Lucas", "Holland", "Wong", "Banks", "Santos", "Curtis", "Pearson", "Delgado", "Valdez", "Pena", "Rios", "Douglas", "Sandoval", "Barrett", "Hopkins", "Keller", "Guerrero", "Stanley", "Bates", "Alvarado", "Beck", "Ortega", "Wade", "Estrada", "Contreras", "Barnett", "Caldwell", "Santiago", "Lambert", "Powers", "Chambers", "Nunez", "Craig", "Leonard", "Lowe", "Rhodes", "Byrd", "Gregory", "Shelton", "Frazier", "Becker", "Maldonado", "Fleming", "Vega", "Sutton", "Cohen", "Jennings", "Parks", "Mcdaniel", "Watts", "Barker", "Norris", "Vaughn", "Vazquez", "Holt", "Schwartz", "Steele", "Benson", "Neal", "Dominguez", "Horton", "Terry", "Wolfe", "Hale", "Lyons", "Graves", "Haynes", "Miles", "Park", "Warner", "Padilla", "Bush", "Thornton", "Mccarthy", "Mann", "Zimmerman", "Erickson", "Fletcher", "Mckinney", "Page", "Dawson", "Joseph", "Marquez", "Reeves", "Klein", "Espinoza", "Baldwin", "Moran", "Love", "Robbins", "Higgins", "Ball", "Cortez", "Le", "Griffith", "Bowen", "Sharp", "Cummings", "Ramsey", "Hardy", "Swanson", "Barber", "Acosta", "Luna", "Chandler", "Blair", "Daniel", "Cross", "Simon", "Dennis", "Oconnor", "Quinn", "Gross", "Navarro", "Moss", "Fitzgerald", "Doyle", "Mclaughlin", "Rojas", "Rodgers", "Stevenson", "Singh", "Yang", "Figueroa", "Harmon", "Newton", "Paul", "Manning", "Garner", "Mcgee", "Reese", "Francis", "Burgess", "Adkins", "Goodman", "Curry", "Brady", "Christensen", "Potter", "Walton", "Goodwin", "Mullins", "Molina", "Webster", "Fischer", "Campos", "Avila", "Sherman", "Todd", "Chang", "Blake", "Malone", "Wolf", "Hodges", "Juarez", "Gill", "Farmer", "Hines", "Gallagher", "Duran", "Hubbard", "Cannon", "Miranda", "Wang", "Saunders", "Tate", "Mack", "Hammond", "Carrillo", "Townsend", "Wise", "Ingram", "Barton", "Mejia", "Ayala", "Schroeder", "Hampton", "Rowe", "Parsons", "Frank", "Waters", "Strickland", "Osborne", "Maxwell", "Chan", "Deleon", "Norman", "Harrington", "Casey", "Patton", "Logan", "Bowers", "Mueller", "Glover", "Floyd", "Hartman", "Buchanan", "Cobb", "French", "Kramer", "Mccormick", "Clarke", "Tyler", "Gibbs", "Moody", "Conner", "Sparks", "Mcguire", "Leon", "Bauer", "Norton", "Pope", "Flynn", "Hogan", "Robles", "Salinas", "Yates", "Lindsey", "Lloyd", "Marsh", "Mcbride", "Owen", "Solis", "Pham", "Lang", "Pratt", "Lara", "Brock", "Ballard", "Trujillo", "Shaffer", "Drake", "Roman", "Aguirre", "Morton", "Stokes", "Lamb", "Pacheco", "Patrick", "Cochran", "Shepherd", "Cain", "Burnett", "Hess", "Li", "Cervantes", "Olsen", "Briggs", "Ochoa", "Cabrera", "Velasquez", "Montoya", "Roth", "Meyers", "Cardenas", "Fuentes", "Weiss", "Hoover", "Wilkins", "Nicholson", "Underwood", "Short", "Carson", "Morrow", "Colon", "Holloway", "Summers", "Bryan", "Petersen", "Mckenzie", "Serrano", "Wilcox", "Carey", "Clayton", "Poole", "Calderon", "Gallegos", "Greer", "Rivas", "Guerra", "Decker", "Collier", "Wall", "Whitaker", "Bass", "Flowers", "Davenport", "Conley", "Houston", "Huff", "Copeland", "Hood", "Monroe", "Massey", "Roberson", "Combs", "Franco", "Larsen", "Pittman", "Randall", "Skinner", "Wilkinson", "Kirby", "Cameron", "Bridges", "Anthony", "Richard", "Kirk", "Bruce", "Singleton", "Mathis", "Bradford", "Boone", "Abbott", "Charles", "Allison", "Sweeney", "Atkinson", "Horn", "Jefferson", "Rosales", "York", "Christian", "Phelps", "Farrell", "Castaneda", "Nash", "Dickerson", "Bond", "Wyatt", "Foley", "Chase", "Gates", "Vincent", "Mathews", "Hodge", "Garrison", "Trevino", "Villarreal", "Heath", "Dalton", "Valencia", "Callahan", "Hensley", "Atkins", "Huffman", "Roy", "Boyer", "Shields", "Lin", "Hancock", "Grimes", "Glenn", "Cline", "Delacruz", "Camacho", "Dillon", "Parrish", "Oneill", "Melton", "Booth", "Kane", "Berg", "Harrell", "Pitts", "Savage", "Wiggins", "Brennan", "Salas", "Marks", "Russo", "Sawyer", "Baxter", "Golden", "Hutchinson", "Liu", "Walter", "Mcdowell", "Wiley", "Rich", "Humphrey", "Johns", "Koch", "Suarez", "Hobbs", "Beard", "Gilmore", "Ibarra", "Keith", "Macias", "Khan", "Andrade", "Ware", "Stephenson", "Henson", "Wilkerson", "Dyer", "Mcclure", "Blackwell", "Mercado", "Tanner", "Eaton", "Clay", "Barron", "Beasley", "Oneal", "Preston", "Small", "Wu", "Zamora", "Macdonald", "Vance", "Snow", "Mcclain", "Stafford", "Orozco", "Barry", "English", "Shannon", "Kline", "Jacobson", "Woodard", "Huang", "Kemp", "Mosley", "Prince", "Merritt", "Hurst", "Villanueva", "Roach", "Nolan", "Lam", "Yoder", "Mccullough", "Lester", "Santana", "Valenzuela", "Winters", "Barrera", "Leach", "Orr", "Berger", "Mckee", "Strong", "Conway", "Stein", "Whitehead", "Bullock", "Escobar", "Knox", "Meadows", "Solomon", "Velez", "Odonnell", "Kerr", "Stout", "Blankenship", "Browning", "Kent", "Lozano", "Bartlett", "Pruitt", "Buck", "Barr", "Gaines", "Durham", "Gentry", "Mcintyre", "Sloan", "Melendez", "Rocha", "Herman", "Sexton", "Moon", "Hendricks", "Rangel", "Stark", "Lowery", "Hardin", "Hull", "Sellers", "Ellison", "Calhoun", "Gillespie", "Mora", "Knapp", "Mccall", "Morse", "Dorsey", "Weeks", "Nielsen", "Livingston", "Leblanc", "Mclean", "Bradshaw", "Glass", "Middleton", "Buckley", "Schaefer", "Frost", "Howe", "House", "Mcintosh", "Ho", "Pennington", "Reilly", "Hebert", "Mcfarland", "Hickman", "Noble", "Spears", "Conrad", "Arias", "Galvan", "Velazquez", "Huynh", "Frederick", "Randolph", "Cantu", "Fitzpatrick", "Mahoney", "Peck", "Villa", "Michael", "Donovan", "Mcconnell", "Walls", "Boyle", "Mayer", "Zuniga", "Giles", "Pineda", "Pace", "Hurley", "Mays", "Mcmillan", "Crosby", "Ayers", "Case", "Bentley", "Shepard", "Everett", "Pugh", "David", "Mcmahon", "Dunlap", "Bender", "Hahn", "Harding", "Acevedo", "Raymond", "Blackburn", "Duffy", "Landry", "Dougherty", "Bautista", "Shah", "Potts", "Arroyo", "Valentine", "Meza", "Gould", "Vaughan", "Fry", "Rush", "Avery", "Herring", "Dodson", "Clements", "Sampson", "Tapia", "Bean", "Lynn", "Crane", "Farley", "Cisneros", "Benton", "Ashley", "Mckay", "Finley", "Best", "Blevins", "Friedman", "Moses", "Sosa", "Blanchard", "Huber", "Frye", "Krueger", "Bernard", "Rosario", "Rubio", "Mullen", "Benjamin", "Haley", "Chung", "Moyer", "Choi", "Horne", "Yu", "Woodward", "Ali", "Nixon", "Hayden", "Rivers", "Estes", "Mccarty", "Richmond", "Stuart", "Maynard", "Brandt", "Oconnell", "Hanna", "Sanford", "Sheppard", "Church", "Burch", "Levy", "Rasmussen", "Coffey", "Ponce", "Faulkner", "Donaldson", "Schmitt", "Novak", "Costa", "Montes", "Booker", "Cordova", "Waller", "Arellano", "Maddox", "Mata", "Bonilla", "Stanton", "Compton", "Kaufman", "Dudley", "Mcpherson", "Beltran", "Dickson", "Mccann", "Villegas", "Proctor", "Hester", "Cantrell", "Daugherty", "Cherry", "Bray", "Davila", "Rowland", "Levine", "Madden", "Spence", "Good", "Irwin", "Werner", "Krause", "Petty", "Whitney", "Baird", "Hooper", "Pollard", "Zavala", "Jarvis", "Holden", "Haas", "Hendrix", "Mcgrath", "Bird", "Lucero", "Terrell", "Riggs", "Joyce", "Mercer", "Rollins", "Galloway", "Duke", "Odom", "Andersen", "Downs", "Hatfield", "Benitez", "Archer", "Huerta", "Travis", "Mcneil", "Hinton", "Zhang", "Hays", "Mayo", "Fritz", "Branch", "Mooney", "Ewing", "Ritter", "Esparza", "Frey", "Braun", "Gay", "Riddle", "Haney", "Kaiser", "Holder", "Chaney", "Mcknight", "Gamble", "Vang", "Cooley", "Carney", "Cowan", "Forbes", "Ferrell", "Davies", "Barajas", "Shea", "Osborn", "Bright", "Cuevas", "Bolton", "Murillo", "Lutz", "Duarte", "Kidd", "Key", "Cooke"];
        for (var t = 1; t <= 100; t++) {
            var tempObj = { "id": 0, "name": "", "category": "" };
            tempObj.id = t;
            tempObj.name = this.namesList[Math.floor(Math.random() * this.namesList.length)];
            tempObj.category = this.categories[Math.floor(Math.random() * this.categories.length)];
            this.itemList.push(tempObj);
        }
    }
    getDirectories() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
            return new Promise(resolve => setTimeout(() => {
                console.log("directoriesLoaded");
                resolve(this.DATA);
            }, 1000)).then((response) => {
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
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
            return new Promise(resolve => setTimeout(() => {
                console.log("useCasesLoaded");
                resolve(this.DATA);
            }, 500)).then((response) => {
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
        return [{ "id": 1, "itemName": "Apple", "category": "fruits" },
            { "id": 2, "itemName": "Banana", "category": "fruits" },
            { "id": 5, "itemName": "Tomatoe", "category": "vegetables" },
            { "id": 6, "itemName": "Potatoe", "category": "vegetables" }];
    }
    getCountries() {
        return [
            { "id": 1, "itemName": "India", "category": "asia" },
            { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
            { "id": 3, "itemName": "Germany", "category": "Europe" },
            { "id": 4, "itemName": "France", "category": "Europe" },
            { "id": 5, "itemName": "South Korea", "category": "asia" },
            { "id": 6, "itemName": "Sweden", "category": "Europe" }
        ];
    }
};
MockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MockService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-data */ "./src/app/examples/mock-data.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let MultipleDropdownsExample = class MultipleDropdownsExample {
    constructor(mockService) {
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
            labelKey: "name"
        };
        this.dropdownSettings2 = {
            text: "Select",
            enableSearchFilter: true,
            labelKey: "name"
        };
        this.mockService.getDirectories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            this.directorySpecialties = resp;
        })).subscribe();
        this.mockService.getUseCases().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            this.useCases = resp;
        })).subscribe();
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
};
MultipleDropdownsExample.ctorParameters = () => [
    { type: _mock_data__WEBPACK_IMPORTED_MODULE_2__["MockService"] }
];
MultipleDropdownsExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/multipledropdowns.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/multipledropdowns.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockService"]])
], MultipleDropdownsExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RemoteDataExample = class RemoteDataExample {
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
        this.http.get('https://restcountries.eu/rest/v2/all')
            .subscribe(res => {
            console.log(res);
            this.itemList = res;
        }, error => {
        });
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "alpha3Code",
            labelKey: "name",
            groupBy: 'region',
            enableSearchFilter: true,
            searchBy: ['name', 'capital']
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
};
RemoteDataExample.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RemoteDataExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/remoteData.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/remoteData.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RemoteDataExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component */ "./projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component.ts");



let ResetDropdownExample = class ResetDropdownExample {
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
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dropdownElem', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _projects_angular2_multiselect_dropdown_lib_src_lib_multiselect_component__WEBPACK_IMPORTED_MODULE_2__["AngularMultiSelect"])
], ResetDropdownExample.prototype, "dropdownElem", void 0);
ResetDropdownExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/resetDropdown.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/resetDropdown.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ResetDropdownExample);



/***/ }),

/***/ "./src/app/examples/searchByOneProperty.ts":
/*!*************************************************!*\
  !*** ./src/app/examples/searchByOneProperty.ts ***!
  \*************************************************/
/*! exports provided: SearchFilterByOnePropertyExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterByOnePropertyExample", function() { return SearchFilterByOnePropertyExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchFilterByOnePropertyExample = class SearchFilterByOnePropertyExample {
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
            badgeShowLimit: 3,
            searchBy: ['itemName'],
            searchPlaceholderText: 'Search by name'
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
};
SearchFilterByOnePropertyExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/view.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/view.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchFilterByOnePropertyExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchFilterExample = class SearchFilterExample {
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
            badgeShowLimit: 3,
            addNewItemOnFilter: true
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
};
SearchFilterExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/view.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/view.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchFilterExample);



/***/ }),

/***/ "./src/app/examples/searchFilterAddNewItem.ts":
/*!****************************************************!*\
  !*** ./src/app/examples/searchFilterAddNewItem.ts ***!
  \****************************************************/
/*! exports provided: SearchFilterAddItemExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterAddItemExample", function() { return SearchFilterAddItemExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchFilterAddItemExample = class SearchFilterAddItemExample {
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
            addNewItemOnFilter: true
        };
    }
    onAddItem(data) {
        this.count++;
        this.itemList.push({ "id": this.count, "itemName": data, "name": data });
        this.selectedItems.push({ "id": this.count, "itemName": data, "name": data });
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
};
SearchFilterAddItemExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/searchFilter.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/searchFilter.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchFilterAddItemExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SingleSelectionExample = class SingleSelectionExample {
    constructor() {
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
    ngOnInit() {
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
        this.settings = { singleSelection: true, text: "Select Country", clearAll: false };
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
};
SingleSelectionExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/view.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/view.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SingleSelectionExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StylingExample = class StylingExample {
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
};
StylingExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/view.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/view.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StylingExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TemplatingExample = class TemplatingExample {
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
        this.itemList = [
            { "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
            { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
            { "category": "europe", "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "category": "northamerica", "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" },
            { "category": "asia", "id": 5, "itemName": "South Korea", "capital": "Seoul", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg" },
            { "category": "latinamerica", "id": 6, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" }
        ];
        this.selectedItems = [
            { "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
            { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
            { "category": "europe", "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "category": "northamerica", "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            showCheckbox: true,
            groupBy: "category"
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
};
TemplatingExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/templating.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/templating.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TemplatingExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ThemingExample = class ThemingExample {
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
};
ThemingExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/theming.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/theming.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ThemingExample);



/***/ }),

/***/ "./src/app/examples/usingInList.ts":
/*!*****************************************!*\
  !*** ./src/app/examples/usingInList.ts ***!
  \*****************************************/
/*! exports provided: UsingInListExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsingInListExample", function() { return UsingInListExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsingInListExample = class UsingInListExample {
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
        this.customers = [
            {
                name: "Toshiba", countries: [{ "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
                    { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
                ]
            },
            { name: "Apple", countries: [] },
            { name: "Samsung", countries: [] },
            {
                name: "MI", countries: [{ "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
                    { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
                ]
            },
            { name: "Google", countries: [] }
        ];
        this.itemList = [
            { "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
            { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
            { "category": "europe", "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "category": "northamerica", "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" },
            { "category": "asia", "id": 5, "itemName": "South Korea", "capital": "Seoul", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg" },
            { "category": "latinamerica", "id": 6, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" }
        ];
        this.selectedItems = [
            { "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
            { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
            { "category": "europe", "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "category": "northamerica", "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" }
        ];
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            showCheckbox: true
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
};
UsingInListExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/usingInList.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/usingInList.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UsingInListExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let UsingWithReactiveFormExample = class UsingWithReactiveFormExample {
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
            email: ['absd@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            skills: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    submitForm() {
        console.log(this.userForm);
    }
    ngOnInit() {
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
};
UsingWithReactiveFormExample.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
UsingWithReactiveFormExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/using-in-react-form.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/using-in-react-form.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], UsingWithReactiveFormExample);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsingWithFormExample = class UsingWithFormExample {
    constructor() {
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
    onSubmit() { this.submitted = true; }
    ngOnInit() {
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
};
UsingWithFormExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./views/using-in-form.html */ "./node_modules/raw-loader/index.js!./src/app/examples/views/using-in-form.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UsingWithFormExample);



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/solomon301/Documents/GitHub/angular2-multiselect-dropdown/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map