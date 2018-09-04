import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new EventEmitter();
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
    ClickOutsideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[clickOutside]'
                },] },
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ClickOutsideDirective.propDecorators = {
        'clickOutside': [{ type: Output },],
        'onClick': [{ type: HostListener, args: ['document:click', ['$event', '$event.target'],] }, { type: HostListener, args: ['document:touchstart', ['$event', '$event.target'],] },],
    };
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.scroll = new EventEmitter();
    }
    ScrollDirective.prototype.onClick = function (event, targetElement) {
        this.scroll.emit(event);
    };
    ScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[scroll]'
                },] },
    ];
    /** @nocollapse */
    ScrollDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ScrollDirective.propDecorators = {
        'scroll': [{ type: Output },],
        'onClick': [{ type: HostListener, args: ['scroll', ['$event'],] },],
    };
    return ScrollDirective;
}());
export { ScrollDirective };
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
    styleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[styleProp]'
                },] },
    ];
    /** @nocollapse */
    styleDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    styleDirective.propDecorators = {
        'styleVal': [{ type: Input, args: ['styleProp',] },],
    };
    return styleDirective;
}());
export { styleDirective };
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
    setPosition.decorators = [
        { type: Directive, args: [{
                    selector: '[setPosition]'
                },] },
    ];
    /** @nocollapse */
    setPosition.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    setPosition.propDecorators = {
        'height': [{ type: Input, args: ['setPosition',] },],
    };
    return setPosition;
}());
export { setPosition };
//# sourceMappingURL=clickOutside.js.map