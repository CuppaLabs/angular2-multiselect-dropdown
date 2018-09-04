import { Component, TemplateRef, ContentChild, ViewContainerRef, Input } from '@angular/core';
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.decorators = [
        { type: Component, args: [{
                    selector: 'c-item',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Item.ctorParameters = function () { return []; };
    Item.propDecorators = {
        'template': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return Item;
}());
export { Item };
var Badge = /** @class */ (function () {
    function Badge() {
    }
    Badge.decorators = [
        { type: Component, args: [{
                    selector: 'c-badge',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Badge.ctorParameters = function () { return []; };
    Badge.propDecorators = {
        'template': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return Badge;
}());
export { Badge };
var Search = /** @class */ (function () {
    function Search() {
    }
    Search.decorators = [
        { type: Component, args: [{
                    selector: 'c-search',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Search.ctorParameters = function () { return []; };
    Search.propDecorators = {
        'template': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return Search;
}());
export { Search };
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
    TemplateRenderer.decorators = [
        { type: Component, args: [{
                    selector: 'c-templateRenderer',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    TemplateRenderer.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    TemplateRenderer.propDecorators = {
        'data': [{ type: Input },],
        'item': [{ type: Input },],
    };
    return TemplateRenderer;
}());
export { TemplateRenderer };
//# sourceMappingURL=menu-item.js.map