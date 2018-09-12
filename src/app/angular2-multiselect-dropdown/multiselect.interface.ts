export interface DropdownSettings{
    singleSelection: boolean;
    text: String;
    enableCheckAll : boolean;
    selectAllText: String;
    unSelectAllText: String;
    filterSelectAllText: String;
    filterUnSelectAllText: String;
    enableFilterSelectAll: boolean;
    enableSearchFilter: boolean;
    searchBy: Array<string>[];
    maxHeight: number;
    badgeShowLimit: Number;
    classes: String;
    limitSelection?: Number;
    disabled?: boolean;
    searchPlaceholderText: String;
    groupBy?: String;
    showCheckbox?: boolean;
    noDataLabel: string;
    searchAutofocus?: boolean;
    lazyLoading?: boolean;
    labelKey?: String;
    primaryKey: string;
    position:string;
} 
