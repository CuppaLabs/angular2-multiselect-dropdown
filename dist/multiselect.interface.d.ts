export interface DropdownSettings {
    singleSelection: Boolean;
    text: String;
    enableCheckAll: Boolean;
    selectAllText: String;
    unSelectAllText: String;
    enableSearchFilter: Boolean;
    searchBy: Array<string>[];
    maxHeight: number;
    badgeShowLimit: Number;
    classes: String;
    limitSelection?: Number;
    disabled?: Boolean;
    searchPlaceholderText: String;
    groupBy?: String;
    showCheckbox?: Boolean;
    noDataLabel: string;
    searchAutofocus?: boolean;
    lazyLoading?: boolean;
    labelKey?: String;
    primaryKey: string;
    position: string;
    showCountOnly: Boolean;
    showCountText: String;
    showAddItem: Boolean;
    showAddItemText: String;
    showCountsText: String;
}
