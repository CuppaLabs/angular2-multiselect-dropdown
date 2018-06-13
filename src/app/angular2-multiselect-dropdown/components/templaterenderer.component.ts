import { Component, OnInit, OnDestroy, EmbeddedViewRef, ViewContainerRef, Input } from '@angular/core';

@Component({
    selector: 'c-templateRenderer',
    template: ``
})
export class TemplateRendererComponent implements OnInit, OnDestroy {
    @Input()
    data: any;

    @Input()
    item: any;

    view: EmbeddedViewRef<any>;

    constructor(public viewContainer: ViewContainerRef) { }
    
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