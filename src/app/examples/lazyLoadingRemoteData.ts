import { Component, OnInit } from '@angular/core';
import { MockService } from './mock-data';

@Component({
    templateUrl: './views/lazyLoadingRemoteData.html'
})
export class LazyLoadingRemoteDataExample implements OnInit {

    itemList = [];
    selectedItems = [];
    settings = {};
    loading = false;
    indices: any;
    readonly bufferSize: number = 10;

    constructor(private appService: MockService) { }
    ngOnInit() {
        this.itemList = [];
        this.selectedItems = [];

        this.settings = {
            text: "Select Items",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class",
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: 'name'

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
    onScroll(e: any) {
        console.log(e);
    }
    onOpen(e:any){
        console.log(this.itemList);
    }
    fetchMore(event: any) {
        if (event.end === this.itemList.length - 1) {
            this.loading = true;
            this.appService.getChunkData(this.itemList.length, this.bufferSize).then(chunk => {
                this.itemList = this.itemList.concat(chunk);
                this.loading = false;
            }, () => this.loading = false);
        }
    }
    changeData() {
        this.selectedItems = [];
    }
    cssgist: boolean = false;
    title: string = "Lazy loading - Remote Data API";
    tsgist: string = "CuppaLabs/3833720c12e23f6c8ee5fd870e38ad5b";
    htmlgist: string = "CuppaLabs/72ebd8cfa40a23a74ccbeda6de98a1e8";
    tstitle: string = "lazyLoadingRemoteData.ts"
    htmltitle: string = "lazyLoadingRemoteData.html";
}
