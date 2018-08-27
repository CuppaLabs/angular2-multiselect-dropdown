import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
    selector: '[styleProp]'
})
export class StylePropDirective implements OnInit, OnChanges {
    
    @Input('styleProp')
    styleVal: number;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.style.top = this.styleVal;
    }

    ngOnChanges(): void {
        this.el.nativeElement.style.top = this.styleVal;
    }
}