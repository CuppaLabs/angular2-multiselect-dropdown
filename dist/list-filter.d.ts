import { PipeTransform } from '@angular/core';
export declare class ListFilterPipe implements PipeTransform {
    transform(items: any[], filter: any, searchBy: any): any[];
    applyFilter(item: any, filter: any, searchBy: any): boolean;
}
