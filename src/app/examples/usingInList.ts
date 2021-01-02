import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './views/usingInList.html'
})
export class UsingInListExample implements OnInit {

    itemList = [];
    selectedItems = [];
    settings = {};
    customers = [];
    constructor() {

    }
    ngOnInit() {

        this.customers = [
            {
                name: "Toshiba", countries: [{ "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
                { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
                ]
            },
            { name: "Apple", countries: [] },
            { name: "Samsung", countries: [] },
            {
                name: "MI", countries: [{ "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
                { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
                ]
            },
            { name: "Google", countries: [] }
        ];
        this.itemList = [
            { "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
            { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
            { "category": "europe", "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "category": "northamerica", "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" },
            { "category": "asia", "id": 5, "itemName": "South Korea", "capital": "Seoul", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg" },
            { "category": "latinamerica", "id": 6, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" }
        ];

        this.selectedItems = [
            { "category": "asia", "id": 1, "itemName": "India", "capital": "Delhi", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg" },
            { "category": "asia", "id": 2, "itemName": "Singapore", "capital": "Singapore", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg" },
            { "category": "europe", "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "category": "northamerica", "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" }]
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            showCheckbox: true,
            tagToBody: true
        };

    }
    onItemSelect(item: any) {
        console.log(this.customers);
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
    onGroupSelect(selectedGroupItem) {
        console.log(selectedGroupItem);
    }
    onGroupDeSelect(deselectedGroupItem) {
        console.log(deselectedGroupItem);
    }
    cssgist: boolean = false;
    title: string = "Using in List - Inside `for loop`";
    tsgist: string = "CuppaLabs/0d2dc802967cca16ffc5053d0b873aba";
    htmlgist: string = "CuppaLabs/85fb2b925a56c2e533e321ae09de0e2f";
    tstitle: string = "usingInList.ts"
    htmltitle: string = "usingInList.html";
}
