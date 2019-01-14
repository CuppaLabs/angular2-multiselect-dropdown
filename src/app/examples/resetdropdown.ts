import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { AngularMultiSelect } from '../../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component';

@Component({
  templateUrl: './views/resetDropdown.html'
})
export class ResetDropdownExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};
  @ViewChild('dropdownElem') dropdownElem: AngularMultiSelect;
  constructor() {

  }
  ngOnInit() {


    this.itemList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Brazil" }
    ];

    this.selectedItems = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" }];
    this.settings = {
      text: "Select Countries",
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
  showModel() {
    console.log(this.selectedItems);
  }
  changeData() {
    this.selectedItems = [];
  }
  open(evt: any){
    this.dropdownElem.openDropdown();
    evt.stopPropagation();
  }
  close(evt: any){
    this.dropdownElem.closeDropdown();
  }
  cssgist: boolean = false;
  title: string = "Methods - Reset, Open, Close dropdown";
  tsgist: string = "CuppaLabs/96d3ca7681f1a7a38b8c76b2f1552458";
  htmlgist: string = "CuppaLabs/bbd73b9f9864effb69f361c9fc65a6e5";
  tstitle: string = "resetDropdown.ts"
  htmltitle: string = "resetDropdown.html";
}
