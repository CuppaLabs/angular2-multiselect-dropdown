import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './views/resetDropdown.html'
})
export class ResetDropdownExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

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
  cssgist: boolean = false;
  title: string = "Reset dropdown";
  tsgist: string = "CuppaLabs/96d3ca7681f1a7a38b8c76b2f1552458";
  htmlgist: string = "CuppaLabs/bbd73b9f9864effb69f361c9fc65a6e5";
  tstitle: string = "resetDropdown.ts"
  htmltitle: string = "resetDropdown.html";
}
