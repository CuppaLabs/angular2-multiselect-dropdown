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
    directorySpecialties = [{ "id": "PBMMedAdhr", "name": "PBM Medication Adherence" }, { "id": "GapsInCare", "name": "Gaps In Care" }, { "id": "UCTest1", "name": "Use Case Test1" }, { "id": "BASICSAVE", "name": "A generic alternative or 30-90 day dispense opport" }, { "id": "ADVSAVE", "name": "An advnaced generic alternative or 30-90 day dispe" }, { "id": "AttAlert", "name": "Attachment Alert" }, { "id": "PatSave", "name": "Patient savings" }, { "id": "UCTest2", "name": "Use Case Test 2" }, { "id": "UCTest3", "name": "Use Case Test 3" }, { "id": "UCTest4", "name": "Use Case Test 4" }, { "id": "UCTest5", "name": "Use Case Test 5" }, { "id": "UCTest6", "name": "Use Case Test 6" }, { "id": "UCTest7", "name": "Use Case Test 7" }, { "id": "UCTest9", "name": "Use Case Test 9" }, { "id": "UCTest#Ten", "name": "Use Case Test 10" }, { "id": "UCTest8", "name": "Use Case Test 8" }, { "id": "UCTest11", "name": "Test Use Case 11" }, { "id": "UCTest12", "name": "Test Use Case 12" }, { "id": "UCTest13", "name": "Test Use Case 13" }, { "id": "PNLIMMUN", "name": "PNL Immunization" }, { "id": "TrustBrkr", "name": "Identity Services" }, { "id": "RTBC", "name": "real time benefit check for 90 day at retail" }];
    useCases = [{"id":1,"itemName":"India","name":"IN"},
    {"id":2,"itemName":"Singapore","name":"SN"},
    {"id":3,"itemName":"Australia","name":"AU"},
    {"id":4,"itemName":"Canada","name":"CA"},
    {"id":5,"itemName":"South Korea","name":"SK"},    
    {"id":6,"itemName":"Brazil","name":"BR"}];
    dropdownSettings = {};
    dropdownSettings2 = {};

    selectedDirectorySpecialties = [{ "id": "PBMMedAdhr", "name": "PBM Medication Adherence" }, { "id": "GapsInCare", "name": "Gaps In Care" }]
    selectedUseCases = []
    directoriesDropdownStatus: string = 'closed';
    casesDropdownStatus: string = 'closed';
    constructor(public mockService: MockService) { }
    ngOnInit() {

        this.dropdownSettings = {
            text: "Select",
            enableSearchFilter: true,
            labelKey: "name",
            tagToBody: true
        };
        this.dropdownSettings2 = {
            text: "Select",
            enableSearchFilter: true,
            tagToBody: true
        };



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
    onSelectAll2(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll2(items: any) {
        console.log(items);
    }
    onDirectoriesOpen(e:any){
        this.directoriesDropdownStatus = 'open';
    }
    onDirectoriesClose(e:any){
        this.directoriesDropdownStatus = 'close';
    }
    onCasesOpen(e:any){
        this.casesDropdownStatus = 'open';
    }
    onCasesClose(e:any){
        this.casesDropdownStatus = 'close';
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
