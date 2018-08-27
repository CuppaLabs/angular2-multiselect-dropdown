import { Injectable } from "@angular/core";
import { IMultiSelectConfig } from "./interfaces";

@Injectable()
export class MultiSelectConfig implements IMultiSelectConfig {
  badgeShowLimit: number = 999999999999;
  classes: string = "";
  disabled: boolean = false;
  enableCheckAll: boolean = true;
  enableSearchFilter: boolean = false;
  groupBy?: string;
  labelKey: string = "itemName";
  lazyLoading: boolean = false;
  limitSelection?: Number;
  maxHeight: number = 300;
  noDataLabel: string = "No Data Available";
  position: string = "bottom";
  primaryKey: string = "id";
  searchAutofocus: boolean = true;
  searchBy: string[] = [];
  searchPlaceholderText: string = "Search";
  selectAllText: string = "Select All";
  showCheckbox: boolean = true;
  singleSelection: boolean = false;
  text: string = "Select";
  unSelectAllText: string = "UnSelect All";
}
