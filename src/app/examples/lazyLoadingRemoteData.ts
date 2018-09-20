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
    onOpen(){
        console.log(this.itemList);
    }
    fetchMore(event: any) {
        //this.loading = true;
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
    tsgist: string = "CuppaLabs/aab6c8b30a6901af01249c474f3f0cbd";
    htmlgist: string = "CuppaLabs/c77fea947ef053aa22973fcd9c7c612a";
    tstitle: string = "lazyLoadingRemoteData.ts"
    htmltitle: string = "lazyLoading.html";
}
