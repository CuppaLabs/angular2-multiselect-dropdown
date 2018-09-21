import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './views/groupBy.html'
})
export class GroupByExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor() {

  }
  ngOnInit() {


    this.itemList = [
      { "id": 1, "itemName": "India", "category": "asia" },
      { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
      { "id": 3, "itemName": "Germany", "category": "Europe" },
      { "id": 4, "itemName": "France", "category": "Europe" },
      { "id": 5, "itemName": "South Korea", "category": "asia" },
      { "id": 6, "itemName": "Sweden", "category": "Europe" }
    ];

    this.selectedItems = [
      { "id": 1, "itemName": "India", "category": "asia" },
      { "id": 3, "itemName": "Germany", "category": "Europe" },
      { "id": 6, "itemName": "Sweden", "category": "Europe" }]
    this.settings = {
      singleSelection: false,
      text: "Select Fields",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      groupBy: "category",
      selectGroup: true,
      searchBy: ["itemName"]
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
  loadDataSet1(){
    this.selectedItems = [];
    this.itemList = [ { "id": 1, "itemName": "Apple", "category": "fruits" },
      { "id": 2, "itemName": "Banana", "category": "fruits" },
      { "id": 5, "itemName": "Tomatoe", "category": "vegetables" },
      { "id": 6, "itemName": "Potatoe", "category": "vegetables" }];
  }
  loadDataSet2(){
    this.selectedItems = [];
    this.itemList = [
      { "id": 1, "itemName": "India", "category": "asia" },
      { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
      { "id": 3, "itemName": "Germany", "category": "Europe" },
      { "id": 4, "itemName": "France", "category": "Europe" },
      { "id": 5, "itemName": "South Korea", "category": "asia" },
      { "id": 6, "itemName": "Sweden", "category": "Europe" }
    ];
  }
  cssgist: boolean = false;
  title: string = "Group By";
  tsgist: string = "CuppaLabs/f6c1328ade3201042a4b4d268a30ad8c";
  htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
  tstitle: string = "groupBy.ts"
  htmltitle: string = "groupBy.html";
}
