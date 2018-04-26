import { Component, OnInit, OnDestroy, NgModule, TemplateRef, AfterContentInit, ContentChild, EmbeddedViewRef, OnChanges, ViewContainerRef, ViewEncapsulation, Input, Output, EventEmitter, ElementRef, AfterViewInit, Pipe, PipeTransform, Directive } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';

@Component({
  selector: 'c-item',
  template: ``
})

export class Item { 

    @ContentChild(TemplateRef) template: TemplateRef<any>
    constructor() {   
    }

}

@Component({
  selector: 'c-badge',
  template: ``
})

export class Badge { 

    @ContentChild(TemplateRef) template: TemplateRef<any>
    constructor() {   
    }

}

@Component({
  selector: 'c-search',
  template: ``
})

export class Search { 

    @ContentChild(TemplateRef) template: TemplateRef<any>
    constructor() {   
    }

}
@Component({
  selector: 'c-templateRenderer',
  template: ``
})

export class TemplateRenderer implements OnInit, OnDestroy { 

    @Input() data: any
    @Input() item: any
    view: EmbeddedViewRef<any>;

    constructor(public viewContainer: ViewContainerRef) {   
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.data.template, {
            '\$implicit': this.data,
            'item':this.item
        });
    }
	
    ngOnDestroy() {
		this.view.destroy();
	}

}
