import { Pipe, PipeTransform } from '@angular/core';

import { ListItem } from './multiselect.model';

@Pipe({
    name: 'listFilter',
    pure: false
})
export class ListFilterPipe implements PipeTransform {
    transform(items: ListItem[], filter: any): ListItem[] {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: any) => this.applyFilter(item, filter));
    }
    applyFilter(item: any, filter: any): boolean {
        let found = false;
        for (var prop in item) {
            if (filter.itemName) {
                if (item.toString().toLowerCase().indexOf(filter.itemName.toLowerCase()) >= 0) {
                    found = true;
                }
            }
            else
                found = true;
        }
        return found;
    }
}
