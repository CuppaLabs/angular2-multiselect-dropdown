import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  singleSelectionList = [];
  singleSelectionselectedItems = [];
  singleSelectionSettings = {};

  basicExampleList = [];
  basicExampleSelectedItems = [];
  basicExampleSettings = {};

  selectedItems3 = [];
  dropdownSettings3 = {};

  limitSelectionSelectedItems = [];
  limitSelectionSettings = {};

  disableModeSelectedItems = [];
  disableModeSettings = {};

  placeholderExampleList = [];
  placeholderExampleSelectedItems = [];
  placeholderExampleSettings = {};

  resetExampleList = [];
  resetExampleSelectedItems = [];
  resetExampleSettings = {};

  groupByExampleList = [];
  groupByExampleSelectedItems = [];
  groupByExampleSettings = {};

  templatingExampleList = [];
  templatingExampleSelectedItems = [];
  templatingExampleSettings = {};

  constructor(){
    
  }
  ngOnInit(){
    this.singleSelectionList = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"}
                        ];

    this.singleSelectionselectedItems = [
                          {"id":2,"itemName":"Singapore"}];
    this.singleSelectionSettings = {singleSelection: true, text:"Select Country"};

    this.basicExampleList = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"},    
                          {"id":6,"itemName":"Brazil"}                      
                        ];
    
    this.basicExampleSelectedItems = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"}];
    this.basicExampleSettings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class"
                            };

    this.selectedItems3 = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"}];

    
    this.dropdownSettings3 = { singleSelection: false, 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              badgeShowLimit: 3
                            };   
    this.limitSelectionSelectedItems = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"}];
    this.limitSelectionSettings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: false,
                              classes:"myclass custom-class",
                              limitSelection: 4
                            };
    this.disableModeSelectedItems = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"}];
    this.disableModeSettings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: false,
                              classes:"myclass custom-class",
                              limitSelection: 2,
                              disabled: true
                            };

    this.placeholderExampleList = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"}
                        ];
    
    this.placeholderExampleSelectedItems = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"}];
    this.placeholderExampleSettings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class",
                              searchPlaceholderText: "Custom Placeholder text"
                            };
    this.resetExampleList = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"}
                        ];
    
    this.resetExampleSelectedItems = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"}];
    this.resetExampleSettings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: false,
                              classes:"myclass custom-class"
                            };      
    this.groupByExampleList = [
                          {"id":1,"itemName":"India","category":"asia"},
                          {"id":2,"itemName":"Singapore","category":"asia pacific"},
                          {"id":3,"itemName":"Germany","category":"Europe"},
                          {"id":4,"itemName":"France","category":"Europe"},
                          {"id":5,"itemName":"South Korea","category":"asia"},    
                          {"id":6,"itemName":"Sweden","category":"Europe"}                      
                        ];
    
    this.groupByExampleSelectedItems = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Germany"},
                          {"id":4,"itemName":"France"}];
    this.groupByExampleSettings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class",
                              groupBy: "category"
                            }; 

  this.groupByExampleSettings = {
singleSelection: false,
text:"Select Fields",
selectAllText:'Select All',
unSelectAllText:'UnSelect All',
searchPlaceholderText: 'Search Fields',
enableSearchFilter: true,
badgeShowLimit: 5,
groupBy:"category"
};         

this.templatingExampleList = [
                          {"id":1,"itemName":"India","capital":"Delhi","image":"http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"},
                          {"id":2,"itemName":"Singapore", "capital":"Singapore","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg"},
                          {"id":3,"itemName":"United Kingdom", "capital":"London","image":"http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"},
                          {"id":4,"itemName":"Canada","capital":"Ottawa","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"},
                          {"id":5,"itemName":"South Korea","capital":"Seoul","image":"http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg"},    
                          {"id":6,"itemName":"Brazil","capital":"Brasilia","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"}                      
                        ];
    
    this.templatingExampleSelectedItems = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"United Kingdom"},
                          {"id":4,"itemName":"Canada"}];
    this.templatingExampleSettings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class",
                              showCheckbox: true
                            };

  }
  onItemSelect(item:any){
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  onSelectAll(items: any){
    console.log(items);
  }
   onDeSelectAll(items: any){
    console.log(items);
  }
  showModel(){
    console.log(this.singleSelectionselectedItems);
  }
  changeData(){
    this.resetExampleSelectedItems = [];
  }
}
