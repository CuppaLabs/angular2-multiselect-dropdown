import { Component, TemplateRef, ContentChild } from '@angular/core';

@Component({
    selector: 'c-item',
    template: ``
})
export class ItemComponent {
    @ContentChild(TemplateRef)
    template: TemplateRef<any>;
}