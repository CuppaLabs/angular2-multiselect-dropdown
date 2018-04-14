import { Component, OnInit } from '@angular/core';
import { MockService } from './mock-data';
import { tap, map } from 'rxjs/operators';

@Component({
    templateUrl: './views/multipledropdowns.html'
})
export class MultipleDropdownsExample implements OnInit {

    itemList = [];
    selectedItems = [];
    settings = {};
    directorySpecialties = [];
    useCases = [];
    dropdownSettings = {};
    dropdownSettings2 = {};

    providerLocation: any = {
        directorySpecialties: [{ "id": "PBMMedAdhr", "name": "PBM Medication Adherence" }, { "id": "GapsInCare", "name": "Gaps In Care" }],
        useCases: [{ "id": "UCTest3", "name": "Use Case Test 3" }, { "id": "UCTest4", "name": "Use Case Test 4" }]
    };


    constructor(public mockService: MockService) { }
    ngOnInit() {

        this.dropdownSettings = {
            text: "Select",
            enableSearchFilter: true,
            labelKey: "name"
        };
        this.dropdownSettings2 = {
            text: "Select",
            enableSearchFilter: true,
            labelKey: "name"
        };

        this.mockService.getDirectories().pipe(map((resp: Array<any>) => {
            this.directorySpecialties = resp;
        })).subscribe();

        this.mockService.getUseCases().pipe(map((resp: Array<any>) => {
            this.useCases = resp;
        })).subscribe();
    }
    onItemSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }
    cssgist: boolean = false;
    title: string = "Multiple Dropdowns in a page";
    tsgist: string = "CuppaLabs/12225540c23c8a171a81f996fc8d9ca6";
    htmlgist: string = "CuppaLabs/3788fb5437925b9d7d8edafec567639c";
    mockgist: string = "CuppaLabs/b3e947ec83710307a3b8680a2ff89693";
    tstitle: string = "multiple-dropdowns.ts"
    htmltitle: string = "multiple-dropdowns.html";
    mocktitle: string = "mock-data.ts"
}
