import { Input, Directive, OnInit, OnChanges, ElementRef } from "@angular/core";

@Directive({
    selector: '[setPosition]'
})
export class SetPositionDirective implements OnInit, OnChanges {

    @Input('setPosition') 
    height: number;

    constructor(public el: ElementRef) { }
    
    ngOnInit(): void {
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