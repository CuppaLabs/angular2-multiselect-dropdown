import { Pipe, PipeTransform } from '@angular/core';

import { ListItem } from './multiselect.model';

@Pipe({
    name: 'listFilter',
    pure: false
})
export class ListFilterPipe implements PipeTransform {
    transform(items: ListItem[], filter: ListItem): ListItem[] {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter((item: ListItem) => this.applyFilter(item, filter));
    }
    
    /**
     * Perform the filtering.
     * 
     * @param {Book} book The book to compare to the filter.
     * @param {Book} filter The filter to apply.
     * @return {boolean} True if book satisfies filters, false if not.
     */
    applyFilter(item: ListItem, filter: ListItem): boolean {
        return !(filter.itemName && item.itemName && item.itemName.toLowerCase().indexOf(filter.itemName.toLowerCase()) === -1);
    }
}