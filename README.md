# Angular2 Multiselect Dropdown
[![npm version](https://img.shields.io/npm/v/angular2-multiselect-dropdown.svg)](https://www.npmjs.com/package/angular2-multiselect-dropdown)

Angular 2 multiselect dropdown component for web applications. Easy to integrate and use.


# [Documentation](http://cuppalabs.github.io/components/multiselectDropdown) | [Demo](https://cuppalabs.github.io/angular2-multiselect-dropdown).

## Getting Started
### Installation
- The Mutiselect Dropdown package is published on the [npm](https://www.npmjs.com/package/angular2-multiselect-dropdown) Registry. 
- Install the package :
    `npm install angular2-multiselect-dropdown`

- Once installed import `AngularMultiSelectModule` from the installed package into your module as follows:

### Usage
Import `AngularMultiSelectModule` into `NgModule` in `app.module.ts`
```js
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

@NgModule({
  // ...
  imports: [
    AngularMultiSelectModule,
  ]
  // ...
})

```

Declare the component data variables and options in your component where you want to consume the dropdown component.

```js

import { Component, OnInit } from '@angular/core';

export class AppComponent implements OnInit {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
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
        this.selectedItems = [
                                {"id":2,"itemName":"Singapore"},
                                {"id":3,"itemName":"Australia"},
                                {"id":4,"itemName":"Canada"},
                                {"id":5,"itemName":"South Korea"}
                            ];
        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Countries",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };            
    }
    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems2);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems2);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }
}
```

Add the following component tag in you template 
```html
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" 
    [settings]="dropdownSettings" 
    (onSelect)="onItemSelect($event)" 
    (onDeSelect)="OnItemDeSelect($event)"
    (onSelectAll)="onSelectAll($event)"
    (onDeSelectAll)="onDeSelectAll($event)"></angular2-multiselect>

```

### Settings
The following list of settings are supported by the component. Configure the settings to meet your requirement.

| Setting         |Type    | Description            | Default Value |
|:--- |:--- |:--- |:--- |
| singleSelection | Boolean | To set the dropdown for single item selection only. | false |
| text | String | Text to be show in the dropdown, when no items are selected. | 'Select' |
| enableCheckAll | Boolean | Enable the option to select all items in list | false |
| selectAllText | String | Text to display as the label of select all option | Select All |
| unSelectAllText | String | Text to display as the label of unSelect option | UnSelect All |
| enableSearchFilter | Boolean | Enable filter option for the list. | false |
| maxHeight | Number | Set maximum height of the dropdown list in px. | 300 |
| badgeShowLimit | Number | Limit the number of badges/items to show in the input field. If not set will show all selected. | All |
| classes | String | Custom classes to the dropdown component. Classes are added to the dropdown selector tag. To add multiple classes, the value should be space separated class names.| '' |
| limitSelection | Number | Limit the selection of number of items from the dropdown list. Once the limit is reached, all unselected items gets disabled. | none |
| disabled | Boolean | Disable the dropdown | false |
| searchPlaceholderText | String | Custom text for the search placeholder text. Default value would be 'Search' | 'Search' |

### Callback Methods
- `onSelect` - Return the selected item on selection.
    Example : (onSelect)="onItemSelect($event)"
- `onDeSelect` - Return the un-selected item on un-selecting.
    Example : (onDeSelect)="OnItemDeSelect($event)"
- `onSelectAll` - Return the list of all selected items.
    Example : (onSelectAll)="onSelectAll($event)"
- `onDeSelectAll` - Returns an empty array.
    Example : (onDeSelectAll)="onDeSelectAll($event)"
    

## Run locally
- Clone the repository or downlod the .zip,.tar files.
- Run `npm install`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`
 The app will automatically reload if you change any of the source files.

## License
MIT License.
