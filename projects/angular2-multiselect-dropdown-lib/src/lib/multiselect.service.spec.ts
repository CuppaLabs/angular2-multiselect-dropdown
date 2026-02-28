import { TestBed } from '@angular/core/testing';
import { DataService } from './multiselect.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setData', () => {
    it('should set filtered data', () => {
      const testData = [{ id: 1, name: 'Test' }];
      service.setData(testData);
      expect(service.filteredData).toEqual(testData);
    });

    it('should emit data through subject', (done) => {
      const testData = [{ id: 1, name: 'Test' }];
      service.getData().subscribe(data => {
        expect(data).toEqual(testData);
        done();
      });
      service.setData(testData);
    });
  });

  describe('getData', () => {
    it('should return an observable', () => {
      const result = service.getData();
      expect(result).toBeDefined();
      expect(typeof result.subscribe).toBe('function');
    });
  });

  describe('getFilteredData', () => {
    it('should return empty array when no data is set', () => {
      const result = service.getFilteredData();
      expect(result).toEqual([]);
    });

    it('should return filtered data when data is set', () => {
      const testData = [{ id: 1, name: 'Test' }];
      service.setData(testData);
      const result = service.getFilteredData();
      expect(result).toEqual(testData);
    });

    it('should return empty array when filtered data is empty', () => {
      service.filteredData = [];
      const result = service.getFilteredData();
      expect(result).toEqual([]);
    });

    it('should return empty array when filtered data is null', () => {
      service.filteredData = null;
      const result = service.getFilteredData();
      expect(result).toEqual([]);
    });
  });
});
