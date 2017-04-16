export class ListItem{
    id: Number;
    itemName: String
}
export interface DropdownSettings{
    singleSelection: Boolean;
    text: String;
    enableCheckAll : Boolean;
    selectAllText: String;
    unSelectAllText: String;
    enableSearchFilter: Boolean;
    maxHeight: Number
} 
export class MyException {
	status : number;
	body : any;
	constructor(status : number, body : any) {
		this.status = status;
		this.body = body;
	}
	
}