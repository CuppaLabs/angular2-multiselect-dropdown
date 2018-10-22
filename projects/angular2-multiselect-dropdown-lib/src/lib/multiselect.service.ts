import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class DataService {

  filteredData: any = [];
  private subject = new Subject<any>();

  setData(data: any) {

    this.filteredData = data;
    this.subject.next(data);
  }
  getData(): Observable<any> {
    return this.subject.asObservable();
  }
  getFilteredData() {
    if (this.filteredData && this.filteredData.length > 0) {
      return this.filteredData;
    }
    else {
      return [];
    }
  }

}