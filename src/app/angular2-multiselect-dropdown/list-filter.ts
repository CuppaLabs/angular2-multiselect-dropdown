import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'listFilter',
    pure: false
})
export class ListFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any[] {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: any) => this.applyFilter(item, filter));
    }
    applyFilter(item: any, filter: any): boolean {
        let found = false;
        for (var prop in item) {
            if (filter) {
                if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                    found = true;
                }
            }
            else
                found = true;
        }
        return found;
    }
}
