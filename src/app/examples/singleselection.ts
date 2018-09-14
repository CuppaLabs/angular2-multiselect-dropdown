import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './views/view.html' 
})
export class SingleSelectionExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor(){
    
  }
  ngOnInit(){
   

    this.itemList = [
                          {"id":1,"itemName":"India","name":"IN"},
                          {"id":2,"itemName":"Singapore","name":"SN"},
                          {"id":3,"itemName":"Australia","name":"AU"},
                          {"id":4,"itemName":"Canada","name":"CA"},
                          {"id":5,"itemName":"South Korea","name":"SK"},    
                          {"id":6,"itemName":"Brazil","name":"BR"}                      
                        ];
    
    this.selectedItems = [
                          {"id":1,"itemName":"India","name":"IN"}];
    this.settings = {singleSelection: true, text:"Select Country"};
  }
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any){
    console.log(items);
  }
   onDeSelectAll(items: any){
    console.log(items);
  }
cssgist: boolean = false;
    title: string = "Single Selection";
    tsgist: string = "CuppaLabs/6ef578ce507dfd548eec39e008b4de14";
    htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    tstitle: string = "singleSelection.ts"
    htmltitle: string = "singleSelection.html";
}
