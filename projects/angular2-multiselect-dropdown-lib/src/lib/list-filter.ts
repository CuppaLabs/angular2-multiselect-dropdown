import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './multiselect.service';


@Pipe({
    name: 'listFilter',
    pure: true
})
export class ListFilterPipe implements PipeTransform {

    public filteredList: any = [];
    constructor(private ds: DataService) {

    }

    transform(items: any[], filter: any, searchBy: any): any[] {
        if (!items || !filter) {
            this.ds.setData(items);
            return items;
        }
        this.filteredList = items.filter((item: any) => this.applyFilter(item, filter, searchBy));
        this.ds.setData(this.filteredList);
        return this.filteredList;
    }
    applyFilter(item: any, filter: any, searchBy: any): boolean {
        let found = false;
        if (searchBy.length > 0) {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var t = 0; t < searchBy.length; t++) {
                    if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                        if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }

        } else {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var prop in item) {
                    if (filter && item[prop]) {
                        if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }

        return found;
    }
}