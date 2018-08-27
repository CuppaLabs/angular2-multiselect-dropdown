import { Component, TemplateRef, ContentChild } from '@angular/core';

@Component({
    selector: 'c-search',
    template: ``
})
export class SearchComponent {
    @ContentChild(TemplateRef)
    template: TemplateRef<any>;
}