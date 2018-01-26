import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './views/using-in-form.html'
})
export class UsingWithFormExample implements OnInit {
    itemList = [];
    selectedItems = [];
    settings = {};
    formModel = {
        name: '',
        email: 'ascasc@aa.com',
        skills: [{ "id": 1, "itemName": "Angular" }]
    };
    submitted = false;
    onSubmit() { this.submitted = true; }
    constructor() { }
    ngOnInit() {

        this.itemList = [
            { "id": 1, "itemName": "Angular" },
            { "id": 2, "itemName": "JavaScript" },
            { "id": 3, "itemName": "HTML" },
            { "id": 4, "itemName": "CSS" },
            { "id": 5, "itemName": "ReactJS" },
            { "id": 6, "itemName": "HTML5" }
        ];

        this.settings = {
            text: "Select Skills",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
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
    title: string = "Using with Template driven Forms";
    tsgist: string = "CuppaLabs/6cd9396b8f5589b792b27dd10efe9140";
    htmlgist: string = "CuppaLabs/8148509a46a59e3aba513808daa40ca1";
    tstitle: string = "using-in-forms.ts"
    htmltitle: string = "using-with-forms.html";
}
