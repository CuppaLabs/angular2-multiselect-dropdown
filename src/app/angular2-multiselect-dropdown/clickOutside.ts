import { Directive, ElementRef, Output, EventEmitter, HostListener, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    constructor(private _elementRef: ElementRef) {
    }

    @Output()
    public clickOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event', '$event.target'])
    @HostListener('document:touchstart', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}

@Directive({
    selector: '[scroll]'
})
export class ScrollDirective {
    constructor(private _elementRef: ElementRef) {
    }

    @Output()
    public scroll = new EventEmitter<MouseEvent>();

    @HostListener('scroll', ['$event'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        this.scroll.emit(event);
    }
}
@Directive({
    selector: '[styleProp]'
})
export class styleDirective {

    constructor(private el: ElementRef) {

    }

    @Input('styleProp') styleVal: number;

    ngOnInit() {

        this.el.nativeElement.style.top = this.styleVal;
    }
    ngOnChanges(): void {
        this.el.nativeElement.style.top = this.styleVal;
    }
}


@Directive({
    selector: '[setPosition]'
})
export class setPosition implements OnInit, OnChanges {

    @Input('setPosition') height: number;

    constructor(public el: ElementRef) {

    }
    ngOnInit() {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    }
    ngOnChanges(): void {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    }
}