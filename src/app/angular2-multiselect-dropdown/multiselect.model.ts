export class ListItem {
  id: number;
  itemName: string;
  itemClass?: string;
}

export class MyException {
  status: number;
  body: any;

  constructor(status: number, body: any) {
    this.status = status;
    this.body = body;
  }
}
