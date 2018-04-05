import { Component, OnInit } from '@angular/core';
import { MockService } from './mock-data';

@Component({
    templateUrl: './views/dynamicData.html'
})
export class DynamicDataSetsExample implements OnInit {

    itemList = [];
    selectedItems = [];
    settings = {};

    constructor(private mockService: MockService) { }
    ngOnInit() {

        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
        this.loadDataSet2();
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
    loadDataSet1() {
        this.settings = {
            text: "Select Fruits",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
        this.selectedItems = [];
        this.itemList = [];
        const tempArr = this.mockService.getFruits();
        for (let i = 0; i < tempArr.length; ++i) {
            this.itemList.push(tempArr[i]);
        }
    }
    loadDataSet2() {
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
        this.selectedItems = [];
        this.itemList = [];
        const tempArr = this.mockService.getCountries();
        for (let i = 0; i < tempArr.length; ++i) {
            this.itemList.push(tempArr[i]);
        }
    }
    cssgist: boolean = false;
    title: string = "Dynamic datasets loading";
    tsgist: string = "CuppaLabs/302d580f91bc40611b2474558d98fbf2";
    htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    mockgist: string = "CuppaLabs/b3e947ec83710307a3b8680a2ff89693";
    tstitle: string = "dynamicData.ts"
    htmltitle: string = "dynamicData.html";
    mocktitle: string = "mock-data.ts";
}
