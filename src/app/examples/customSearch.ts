import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './views/customSearch.html'
})
export class CustomSearchExample implements OnInit {

    itemList: any = [];
    selectedItems = [];
    settings = {};

    constructor(private http: HttpClient) { }
    ngOnInit() {

        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "alpha3Code",
            labelKey: "name",
            noDataLabel: "Search Countries...",
            enableSearchFilter: true,
            searchBy: ['name', 'capital']
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
    onDeSelectAll(items: any) {
        console.log(items);
    }
    onSearch(evt: any) {
        console.log(evt.target.value);
        this.itemList = [];
        this.http.get('https://restcountries.eu/rest/v2/name/'+evt.target.value+'?fulltext=true')
            .subscribe(res => {
                console.log(res);
                this.itemList = res;
            }, error => {

            });
    }
    cssgist: boolean = false;
    title: string = "Custom Search / Search from API";
    tsgist: string = "CuppaLabs/1bab5ecbbb22727eb0afe49848a454f0";
    htmlgist: string = "CuppaLabs/7f0d8ea9f9cfe9eec2cc1699affd2c14";
    tstitle: string = "customSearch.ts"
    htmltitle: string = "customSearch.html";
}
