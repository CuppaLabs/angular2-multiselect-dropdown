import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './views/theming.html'
})
export class ThemingExample implements OnInit {

    itemList = [];
    selectedItems = [];
    settings = {};

    constructor() { }
    ngOnInit() {

        this.itemList = [
            { "countryId": 1, "itemName": "India" },
            { "countryId": 2, "itemName": "Singapore" },
            { "countryId": 3, "itemName": "Australia" },
            { "countryId": 4, "itemName": "Canada" },
            { "countryId": 5, "itemName": "South Korea" },
            { "countryId": 6, "itemName": "Brazil" }
        ];

        this.selectedItems = [
            { "countryId": 1, "itemName": "India" },
            { "countryId": 2, "itemName": "Singapore" },
            { "countryId": 3, "itemName": "Australia" },
            { "countryId": 4, "itemName": "Canada" }];

        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            primaryKey: "countryId"
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
    cssgist: boolean = false;
    title: string = "Basic example";
    tsgist: string = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
    htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    tstitle: string = "basic.ts"
    htmltitle: string = "basic.html";
}
