import { Component, OnInit, NgModule, SimpleChanges, OnChanges, ChangeDetectorRef, AfterViewChecked, ViewEncapsulation, ContentChild, ViewChild, forwardRef, Input, Output, EventEmitter, ElementRef, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyException } from './multiselect.model';
import { DropdownSettings } from './multiselect.interface';
import { ClickOutsideDirective, ScrollDirective, styleDirective, setPosition } from './clickOutside';
import { ListFilterPipe } from './list-filter';
import { Item, Badge, Search, TemplateRenderer } from './menu-item';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularMultiSelect),
    multi: true
};
export const DROPDOWN_CONTROL_VALIDATION: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AngularMultiSelect),
    multi: true,
}
const noop = () => {
};

@Component({
    selector: 'angular2-multiselect',
    templateUrl: './multiselect.component.html',
    host: { '[class]': 'defaultSettings.classes' },
    styleUrls: ['./multiselect.component.scss'],
    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]
})

export class AngularMultiSelect implements OnInit, ControlValueAccessor, OnChanges, Validator, AfterViewChecked {

    @Input()
    data: Array<any>;

    @Input()
    settings: DropdownSettings;

    @Output('onSelect')
    onSelect: EventEmitter<any> = new EventEmitter<any>();

    @Output('onDeSelect')
    onDeSelect: EventEmitter<any> = new EventEmitter<any>();

    @Output('onSelectAll')
    onSelectAll: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

    @Output('onDeSelectAll')
    onDeSelectAll: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

    @Output('onOpen')
    onOpen: EventEmitter<any> = new EventEmitter<any>();

    @Output('onClose')
    onClose: EventEmitter<any> = new EventEmitter<any>();

    @Output('onAddClick')
    onAddClick: EventEmitter<any> = new EventEmitter<any>();

    @ContentChild(Item) itemTempl: Item;
    @ContentChild(Badge) badgeTempl: Badge;
    @ContentChild(Search) searchTempl: Search;


    @ViewChild('searchInput') searchInput: ElementRef;
    @ViewChild('selectedList') selectedListElem: ElementRef;

    public selectedItems: Array<any>;
    public isActive: boolean = false;
    public isSelectAll: boolean = false;
    public groupedData: Array<any>;
    filter: any;
    public chunkArray: any[];
    public scrollTop: any;
    public chunkIndex: any[] = [];
    public cachedItems: any[] = [];
    public totalRows: any;
    public itemHeight: any = 41.6;
    public screenItemsLen: any;
    public cachedItemsLen: any;
    public totalHeight: any;
    public scroller: any;
    public maxBuffer: any;
    public lastScrolled: any;
    public lastRepaintY: any;
    public selectedListHeight: any;

    defaultSettings: DropdownSettings = {
        singleSelection: false,
        text: 'Select',
        enableCheckAll: true,
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        enableSearchFilter: false,
        searchBy:[],
        maxHeight: 300,
        badgeShowLimit: 999999999999,
        classes: '',
        disabled: false,
        searchPlaceholderText: 'Search',
        showCheckbox: true,
        noDataLabel: 'No Data Available',
        searchAutofocus: true,
        lazyLoading: false,
        labelKey: 'itemName',
        primaryKey: 'id',
        position: 'bottom',
        showCountOnly: false,
        showCountText: 'Item Selected',
        showCountsText: 'Items Selected',
        showAddItem: false,
        showAddItemText: 'Add Item'
    }
    public parseError: boolean;
    constructor(public _elementRef: ElementRef, private cdr: ChangeDetectorRef) {

    }
    ngOnInit() {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.groupBy) {
            this.groupedData = this.transformData(this.data, this.settings.groupBy);
        }
        this.totalRows = (this.data && this.data.length);
        this.cachedItems = this.data;
        this.screenItemsLen = Math.ceil(this.settings.maxHeight / this.itemHeight);
        this.cachedItemsLen = this.screenItemsLen * 3;
        this.totalHeight = this.itemHeight * this.totalRows;
        this.maxBuffer = this.screenItemsLen * this.itemHeight;
        this.lastScrolled = 0;
        this.renderChunk(0, this.cachedItemsLen / 2);
        if (this.settings.position == 'top') {
            setTimeout(() => {
                this.selectedListHeight = { val: 0 };
                this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            });
        }

    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.data && !changes.data.firstChange) {
            if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);
                if (this.data.length == 0) {
                    this.selectedItems = [];
                }
            }
        }
        if (changes.settings && !changes.settings.firstChange) {
            this.settings = Object.assign(this.defaultSettings, this.settings);
        }
    }
    ngDoCheck() {
        if (this.selectedItems) {
            if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
            }
        }
    }
    ngAfterViewInit() {
        if (this.settings.lazyLoading) {
            this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
        }
    }
    ngAfterViewChecked() {
        if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
            this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            this.cdr.detectChanges();
        }
    }
    onItemClick(item: any, index: number, evt: Event) {
        if (this.settings.disabled) {
            return false;
        }

        let found = this.isSelected(item);
        let limit = this.selectedItems.length < this.settings.limitSelection ? true : false;

        if (!found) {
            if (this.settings.limitSelection) {
                if (limit) {
                    this.addSelected(item);
                    this.onSelect.emit(item);
                }
            }
            else {
                this.addSelected(item);
                this.onSelect.emit(item);
            }

        }
        else {
            this.removeSelected(item);
            this.onDeSelect.emit(item);
        }
        if (this.isSelectAll || this.data.length > this.selectedItems.length) {
            this.isSelectAll = false;
        }
        if (this.data.length == this.selectedItems.length) {
            this.isSelectAll = true;
        }
    }
    public validate(c: FormControl): any {
        return null;
    }
    private onTouchedCallback: (_: any) => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    writeValue(value: any) {
        if (value !== undefined && value !== null) {
            if (this.settings.singleSelection) {
                try {

                    if (value.length > 1) {
                        this.selectedItems = [value[0]];
                        throw new MyException(404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                    }
                    else {
                        this.selectedItems = value;
                    }
                }
                catch (e) {
                    console.error(e.body.msg);
                }

            }
            else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.splice(0, this.settings.limitSelection);
                }
                else {
                    this.selectedItems = value;
                }
                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                    this.isSelectAll = true;
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
    trackByFn(index: number, item: any) {
        return item[this.settings.primaryKey];
    }
    isSelected(clickedItem: any) {
        let found = false;
        this.selectedItems && this.selectedItems.forEach(item => {
            if (clickedItem[this.settings.primaryKey] === item[this.settings.primaryKey]) {
                found = true;
            }
        });
        return found;
    }
    addSelected(item: any) {
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
            this.closeDropdown();
        }
        else
            this.selectedItems.push(item);
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    }
    removeSelected(clickedItem: any) {
        this.selectedItems && this.selectedItems.forEach(item => {
            if (clickedItem[this.settings.primaryKey] === item[this.settings.primaryKey]) {
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    }
    toggleDropdown(evt: any) {
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = !this.isActive;
        if (this.isActive) {
            if (this.settings.searchAutofocus && this.settings.enableSearchFilter && !this.searchTempl) {
                setTimeout(() => {
                    this.searchInput.nativeElement.focus();
                }, 0);
            }
            this.onOpen.emit(true);
        }
        else {
            this.onClose.emit(false);
        }
        evt.preventDefault();
    }
    closeDropdown() {
        if (this.searchInput && this.settings.lazyLoading) {
            this.searchInput.nativeElement.value = "";
            this.data = [];
            this.data = this.cachedItems;
            this.totalHeight = this.itemHeight * this.data.length;
            this.totalRows = this.data.length;
            this.updateView(this.scrollTop);
        }
        if (this.searchInput) {
            this.searchInput.nativeElement.value = "";
        }
        this.filter = "";
        this.isActive = false;
        this.onClose.emit(false);
    }
    toggleSelectAll() {
        if (!this.isSelectAll) {
            this.selectedItems = [];
            this.selectedItems = this.data.slice();
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);

            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);

            this.onDeSelectAll.emit(this.selectedItems);
        }
    }
    transformData(arr: Array<any>, field: any): Array<any> {
        const groupedObj: any = arr.reduce((prev: any, cur: any) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            } else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        const tempArr: any = [];
        Object.keys(groupedObj).map(function (x) {
            tempArr.push({ key: x, value: groupedObj[x] });
        });
        return tempArr;
    }
    renderChunk(fromPos: any, howMany: any) {
        this.chunkArray = [];
        this.chunkIndex = [];
        var finalItem = fromPos + howMany;
        if (finalItem > this.totalRows)
            finalItem = this.totalRows;

        for (var i = fromPos; i < finalItem; i++) {
            this.chunkIndex.push((i * this.itemHeight) + 'px');
            this.chunkArray.push(this.data[i]);
        }
    }
    
    addItemEmitter($event:any) {
        this.onAddClick.emit($event);
    }

    public onScroll(e: any) {
        this.scrollTop = e.target.scrollTop;
        this.updateView(this.scrollTop);

    }
    public updateView(scrollTop: any) {
        var scrollPos = scrollTop ? scrollTop : 0;
        var first = (scrollPos / this.itemHeight) - this.screenItemsLen;
        var firstTemp = "" + first;
        first = parseInt(firstTemp) < 0 ? 0 : parseInt(firstTemp);
        this.renderChunk(first, this.cachedItemsLen);
        this.lastRepaintY = scrollPos;
    }
    public filterInfiniteList(evt: any) {
        var filteredElems: Array<any> = [];
        this.data = this.cachedItems.slice();
        if (evt.target.value.toString() != '') {
            this.data.filter(function (el: any) {
                for (var prop in el) {
                    if (el[prop].toString().toLowerCase().indexOf(evt.target.value.toString().toLowerCase()) >= 0) {
                        filteredElems.push(el);
                        break;
                    }
                }
            });
            //this.cachedItems = this.data;
            this.totalHeight = this.itemHeight * filteredElems.length;
            this.totalRows = filteredElems.length;
            this.data = [];
            this.data = filteredElems;
            this.updateView(this.scrollTop);
        }
        else if (evt.target.value.toString() == '' && this.cachedItems.length > 0) {
            this.data = [];
            this.data = this.cachedItems;
            this.totalHeight = this.itemHeight * this.data.length;
            this.totalRows = this.data.length;
            this.updateView(this.scrollTop);
        }
    }
}

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition],
    exports: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition]
})
export class AngularMultiSelectModule { }
