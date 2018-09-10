import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './views/remoteData.html'
})
export class RemoteDataExample implements OnInit {

    itemList:any = [];
    selectedItems = [];
    settings = {};

    constructor(private http: HttpClient) { }
    ngOnInit() {
        this.http.get('https://restcountries.eu/rest/v2/all')
        .subscribe(res => {
            console.log(res);
            this.itemList = res;
        },error => {

        });
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "alpha3Code",
            labelKey: "name",
            enableSearchFilter: true,
            searchBy: ['name','capital']
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
    onSearch(evt: any){
        console.log(evt.target.value);
    }
    cssgist: boolean = false;
    title: string = "Data from remote API example";
    tsgist: string = "CuppaLabs/ffb168ae28c36a9130ad5ce74b720c5d";
    htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    tstitle: string = "remoteData.ts"
    htmltitle: string = "remoteData.html";
}
