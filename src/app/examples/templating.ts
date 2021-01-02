import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './views/templating.html'
})
export class TemplatingExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor(){
    
  }
  ngOnInit(){
   

    this.itemList = [
                          {"category":"asia","id":1,"itemName":"India","capital":"Delhi","image":"http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"},
                          {"category":"asia","id":2,"itemName":"Singapore", "capital":"Singapore","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"},
                          {"category":"europe","id":3,"itemName":"United Kingdom", "capital":"London","image":"http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"},
                          {"category":"northamerica","id":4,"itemName":"Canada","capital":"Ottawa","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"},
                          {"category":"asia","id":5,"itemName":"South Korea","capital":"Seoul","image":"http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg"},    
                          {"category":"latinamerica","id":6,"itemName":"Brazil","capital":"Brasilia","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"}                      
                        ];
    
    this.selectedItems = [
                          {"category":"asia","id":1,"itemName":"India","capital":"Delhi","image":"http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"},
                          {"category":"asia","id":2,"itemName":"Singapore", "capital":"Singapore","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"},
                          {"category":"europe","id":3,"itemName":"United Kingdom", "capital":"London","image":"http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"},
                          {"category":"northamerica","id":4,"itemName":"Canada","capital":"Ottawa","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"}]
    this.settings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class",
                              showCheckbox: true,
                              groupBy: "category",
                              tagToBody: true,
                            };

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
  onGroupSelect(selectedGroupItem){
    console.log(selectedGroupItem);
  }
  onGroupDeSelect(deselectedGroupItem){
    console.log(deselectedGroupItem);
  }
  cssgist: boolean = false;
    title: string = "Templating menu option";
    tsgist: string = "CuppaLabs/cc0ac5976bf26b89119180ff82115fe4";
    htmlgist: string = "CuppaLabs/6399258d93fd5580be1736aba2539519";
    tstitle: string = "templating.ts"
    htmltitle: string = "templating.html";
}
