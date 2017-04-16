import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  dropdownList = [];
  dropdownList2 = [];
  selectedItems = [];
  selectedItems2 = [];
  selectedItems3 = [];
  dropdownSettings = {};
  dropdownSettings2 = {};
  dropdownSettings3 = {};
  constructor(){
    
  }
  ngOnInit(){
    this.dropdownList = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"},
                          {"id":6,"itemName":"Germany"},
                          {"id":7,"itemName":"France"},
                          {"id":8,"itemName":"Russia"},
                          {"id":9,"itemName":"Italy"},
                          {"id":10,"itemName":"Sweden"}
                        ];
    this.dropdownList2 = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"}
                        ];
    this.selectedItems = [
                          {"id":2,"itemName":"Singapore"}];
    this.selectedItems2 = [
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                           {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"}];
    this.selectedItems3 = [
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"}];

    this.dropdownSettings = {singleSelection: true, text:"Select Country"};
    this.dropdownSettings2 = { singleSelection: false, 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: false
                            };
    this.dropdownSettings3 = { singleSelection: false, 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true
                            };   
  }
  onItemSelect(item:any){
    console.log(item);
  }
  OnItemDeSelect(item:any){
    console.log(item);
  }
  showModel(){
    console.log(this.selectedItems);
  }
}
