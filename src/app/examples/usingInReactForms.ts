import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './views/using-in-react-form.html'
})
export class UsingWithReactiveFormExample implements OnInit {
    itemList = [];
    selectedItems = [];
    settings = {};

    userForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }
    createForm() {
        this.userForm = this.fb.group({
            name: 'xbvxncvx',
            email: ['absd@gmail.com', Validators.required],
            skills: [[], Validators.required]
        });
    }
    submitForm() {
        console.log(this.userForm);
    }
    ngOnInit() {

        this.itemList = [
            { "id": 1, "itemName": "Angular" },
            { "id": 2, "itemName": "JavaScript" },
            { "id": 3, "itemName": "HTML" },
            { "id": 4, "itemName": "CSS" },
            { "id": 5, "itemName": "ReactJS" },
            { "id": 6, "itemName": "HTML5" }
        ];
        this.selectedItems = [];
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
    title: string = "Using with Reactive Forms";
    tsgist: string = "CuppaLabs/f0dfe353c6378cee7f55547395a80fc4";
    htmlgist: string = "CuppaLabs/0a32c3d76110468b84bac01fd64488bc";
    tstitle: string = "using-in-reactive-forms.ts"
    htmltitle: string = "using-with-reactive-forms.html";
}
