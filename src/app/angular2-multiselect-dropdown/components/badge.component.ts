import { Component, TemplateRef, ContentChild, forwardRef } from '@angular/core';

@Component({
    selector: 'c-badge',
    template: ``
})
export class BadgeComponent {

    @ContentChild(TemplateRef)
    template: TemplateRef<any>;
}