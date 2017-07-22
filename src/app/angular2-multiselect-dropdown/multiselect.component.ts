import { Component, OnInit, NgModule, OnChanges, ViewEncapsulation,forwardRef, Input, Output, EventEmitter, ElementRef, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CommonModule }       from '@angular/common';
import { ListItem , MyException} from './multiselect.model';
import { DropdownSettings } from './multiselect.interface';
import { ClickOutsideDirective } from './clickOutside';
import { ListFilterPipe } from './list-filter';

export const DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularMultiSelect),
    multi: true
};
const noop = () => {
};

@Component({
    selector:'angular2-multiselect',
    templateUrl: './multiselect.component.html',
    host: { '[class]' : 'defaultSettings.classes'  },
    styleUrls:['./multiselect.component.scss'],
    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR]
})

export class AngularMultiSelect implements OnInit, ControlValueAccessor {

    @Input() 
    data: Array<ListItem>;
    
    @Input()
    settings:DropdownSettings;
    
    @Output('onSelect')
    onSelect: EventEmitter<ListItem> = new EventEmitter<ListItem>();

    @Output('onDeSelect')
    onDeSelect: EventEmitter<ListItem> = new EventEmitter<ListItem>();

    @Output('onSelectAll')
    onSelectAll: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();

    @Output('onDeSelectAll')
    onDeSelectAll: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();

    public selectedItems: Array<ListItem>;
    public isActive: boolean = false;
    public isSelectAll: boolean = false;
    filter: ListItem = new ListItem();
    defaultSettings:DropdownSettings = {
        singleSelection: false,
        text:'Select',
        enableCheckAll: true,
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        enableSearchFilter: false,
        maxHeight: 300,
        badgeShowLimit: 999999999999,
        classes:'',
        disabled: false,
        searchPlaceholderText: 'Search'
    }
    constructor(){

    }
    ngOnInit(){
         this.settings = Object.assign(this.defaultSettings, this.settings);
       /* this.selectedItems = [];
        for(var t=0;t<this.data.length;t++){
            if(this.data[t]){
                this.selectedItems.push(this.data[t]);
            }
        }*/
    }
    onItemClick(item: ListItem,index){

                if(this.settings.disabled){
                    return false;
                }
        
                let found = this.isSelected(item);
                let limit = this.selectedItems.length < this.settings.limitSelection ? true : false;

                if(!found){
                    if(this.settings.limitSelection){
                        if(limit){
                            this.addSelected(item);
                            this.onSelect.emit(item);
                        } 
                    }
                    else{
                        this.addSelected(item);
                        this.onSelect.emit(item);
                    }
                    
                }
                else{
                this.removeSelected(item);
                    this.onDeSelect.emit(item);
                }
                if(this.isSelectAll || this.data.length > this.selectedItems.length){
                    this.isSelectAll = false;
                }
                if(this.data.length == this.selectedItems.length){
                    this.isSelectAll = true;
                }    
    }
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    writeValue(value: any) {
        if (value !== undefined && value !== null) {
            if(this.settings.singleSelection){
                try{
                    
                    if(value.length > 1){
                        this.selectedItems = [value[0]];
                        throw new MyException(404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                    }
                    else
                        this.selectedItems = value;
                }
                catch(e){
                    console.error(e.body.msg);
                }
                
            }
            else{
                if(this.settings.limitSelection){
                            this.selectedItems = value.splice(0,this.settings.limitSelection);
                        }
                        else{
                            this.selectedItems = value;
                        }
            }
        } else {
            this.selectedItems = [];
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
    trackByFn(index,item){
        return item.id;
    }
    isSelected(clickedItem:ListItem){
        let found = false;
        this.selectedItems.forEach(item => {
           if(clickedItem.id === item.id){
               found = true;
           }
        });
        return found;
    }
    addSelected(item: ListItem){
        if(this.settings.singleSelection){
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else
            this.selectedItems.push(item);
            this.onChangeCallback(this.selectedItems);
    }
    removeSelected(clickedItem: ListItem){
        this.selectedItems.forEach(item => {
           if(clickedItem.id === item.id){
               this.selectedItems.splice(this.selectedItems.indexOf(item),1);
           }
        });    
        this.onChangeCallback(this.selectedItems);
    }
    toggleDropdown(evt){
        this.isActive = !this.isActive;
        evt.preventDefault();
    }
    closeDropdown(){
        this.isActive = false;
    }
    toggleSelectAll(){
        if(!this.isSelectAll){
            this.selectedItems = [];
            this.selectedItems = this.data.slice();
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        }
        else{
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
        }     
    }
}

@NgModule({
  imports:      [ CommonModule,FormsModule ],
  declarations: [AngularMultiSelect, ClickOutsideDirective, ListFilterPipe],
  exports:      [AngularMultiSelect, ClickOutsideDirective, ListFilterPipe]
})
export class AngularMultiSelectModule { }
