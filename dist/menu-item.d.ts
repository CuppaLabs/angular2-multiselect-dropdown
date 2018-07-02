import { OnInit, OnDestroy, TemplateRef, EmbeddedViewRef, ViewContainerRef } from '@angular/core';
export declare class Item {
    template: TemplateRef<any>;
    constructor();
}
export declare class Badge {
    template: TemplateRef<any>;
    constructor();
}
export declare class Search {
    template: TemplateRef<any>;
    constructor();
}
export declare class TemplateRenderer implements OnInit, OnDestroy {
    viewContainer: ViewContainerRef;
    data: any;
    item: any;
    view: EmbeddedViewRef<any>;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
