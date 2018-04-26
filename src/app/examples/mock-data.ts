import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
@Injectable()
export class MockService {
  DATA = [{ "id": "PBMMedAdhr", "name": "PBM Medication Adherence" }, { "id": "GapsInCare", "name": "Gaps In Care" }, { "id": "UCTest1", "name": "Use Case Test1" }, { "id": "BASICSAVE", "name": "A generic alternative or 30-90 day dispense opport" }, { "id": "ADVSAVE", "name": "An advnaced generic alternative or 30-90 day dispe" }, { "id": "AttAlert", "name": "Attachment Alert" }, { "id": "PatSave", "name": "Patient savings" }, { "id": "UCTest2", "name": "Use Case Test 2" }, { "id": "UCTest3", "name": "Use Case Test 3" }, { "id": "UCTest4", "name": "Use Case Test 4" }, { "id": "UCTest5", "name": "Use Case Test 5" }, { "id": "UCTest6", "name": "Use Case Test 6" }, { "id": "UCTest7", "name": "Use Case Test 7" }, { "id": "UCTest9", "name": "Use Case Test 9" }, { "id": "UCTest#Ten", "name": "Use Case Test 10" }, { "id": "UCTest8", "name": "Use Case Test 8" }, { "id": "UCTest11", "name": "Test Use Case 11" }, { "id": "UCTest12", "name": "Test Use Case 12" }, { "id": "UCTest13", "name": "Test Use Case 13" }, { "id": "PNLIMMUN", "name": "PNL Immunization" }, { "id": "TrustBrkr", "name": "Identity Services" }, { "id": "RTBC", "name": "real time benefit check for 90 day at retail" }];

  constructor() { }

  getDirectories(): Observable<Array<any>> {
    return Observable.create(
      (observer) => {

        return new Promise(resolve => setTimeout(() => {
          console.log("directoriesLoaded");
          resolve(this.DATA);
        }, 1000)).then((response) => {
          observer.next(response);
          observer.complete();
        });
      }
    );
  }

  getUseCases(): Observable<Array<any>> {
    return Observable.create(
      (observer) => {
        return new Promise(resolve => setTimeout(() => {
          console.log("useCasesLoaded");
          resolve(this.DATA);
        }, 500)).then((response) => {
          observer.next(response);
          observer.complete();
        });
      }
    );
  }

  getData(arr) {
    if (arr.length === 0) {
      return this.DATA;
    }
    // Randomly remove and add some data
    arr.splice(Math.floor(Math.random() * arr.length), 1);
    arr.push(this.DATA[Math.floor(Math.random() * this.DATA.length)]);
    return arr;
  }
  getFruits() {
    return [{ "id": 1, "itemName": "Apple", "category": "fruits" },
    { "id": 2, "itemName": "Banana", "category": "fruits" },
    { "id": 5, "itemName": "Tomatoe", "category": "vegetables" },
    { "id": 6, "itemName": "Potatoe", "category": "vegetables" }];
  }
  getCountries() {
    return [
      { "id": 1, "itemName": "India", "category": "asia" },
      { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
      { "id": 3, "itemName": "Germany", "category": "Europe" },
      { "id": 4, "itemName": "France", "category": "Europe" },
      { "id": 5, "itemName": "South Korea", "category": "asia" },
      { "id": 6, "itemName": "Sweden", "category": "Europe" }
    ];
  }
}
