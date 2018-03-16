import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './views/view.html'
})
export class ApiSearchFilterExample implements OnInit {

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
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      enableApiSearch: true,
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

  onSearchInput(items: any) {
    console.log(items);
}

  title: string = "Api Search filter";
  tsgist: string = "nikhilrane1992/b13a28e9f487b0a1ede98b5b13f26593";
  htmlgist: string = "nikhilrane1992/e41b16df0a38df3cf8a4b5cc442cc7e4";
  tstitle: string = "apiSearchFilter.ts"
  htmltitle: string = "apiSearchFilter.html";
}
