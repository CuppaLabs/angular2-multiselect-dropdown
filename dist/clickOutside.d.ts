import { ElementRef, EventEmitter, OnInit, OnChanges } from '@angular/core';
export declare class ClickOutsideDirective {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    clickOutside: EventEmitter<MouseEvent>;
    onClick(event: MouseEvent, targetElement: HTMLElement): void;
}
export declare class ScrollDirective {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    scroll: EventEmitter<MouseEvent>;
    onClick(event: MouseEvent, targetElement: HTMLElement): void;
}
export declare class styleDirective {
    private el;
    constructor(el: ElementRef);
    styleVal: number;
    ngOnInit(): void;
    ngOnChanges(): void;
}
export declare class setPosition implements OnInit, OnChanges {
    el: ElementRef;
    height: number;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
}
