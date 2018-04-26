export class MyException {
	status : number;
	body : any;
	constructor(status : number, body : any) {
		this.status = status;
		this.body = body;
	}
	
}