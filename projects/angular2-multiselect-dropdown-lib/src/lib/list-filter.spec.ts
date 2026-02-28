import { TestBed } from '@angular/core/testing';
import { ListFilterPipe } from './list-filter';
import { DataService } from './multiselect.service';

describe('ListFilterPipe', () => {
  let pipe: ListFilterPipe;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListFilterPipe, DataService]
    });
    dataService = TestBed.inject(DataService);
    pipe = TestBed.inject(ListFilterPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    const mockItems = [
      { id: 1, itemName: 'Apple', category: 'Fruit' },
      { id: 2, itemName: 'Banana', category: 'Fruit' },
      { id: 3, itemName: 'Carrot', category: 'Vegetable' },
      { id: 4, itemName: 'Dates', category: 'Fruit' }
    ];

    it('should return all items when filter is null', () => {
      const result = pipe.transform(mockItems, null, []);
      expect(result).toEqual(mockItems);
    });

    it('should return all items when filter is undefined', () => {
      const result = pipe.transform(mockItems, undefined, []);
      expect(result).toEqual(mockItems);
    });

    it('should return all items when filter is empty string', () => {
      const result = pipe.transform(mockItems, '', []);
      expect(result).toEqual(mockItems);
    });

    it('should return null/undefined when items are null', () => {
      const result = pipe.transform(null as any, 'test', []);
      expect(result).toBeNull();
    });

    it('should return null/undefined when items are undefined', () => {
      const result = pipe.transform(undefined as any, 'test', []);
      expect(result).toBeUndefined();
    });

    it('should filter items by any property when searchBy is empty', () => {
      const result = pipe.transform(mockItems, 'app', []);
      expect(result.length).toBe(1);
      expect(result[0].itemName).toBe('Apple');
    });

    it('should filter items case-insensitively', () => {
      const result = pipe.transform(mockItems, 'APPLE', []);
      expect(result.length).toBe(1);
      expect(result[0].itemName).toBe('Apple');
    });

    it('should filter items by specific property when searchBy is provided', () => {
      const result = pipe.transform(mockItems, 'Fruit', ['category']);
      expect(result.length).toBe(3);
    });

    it('should filter items by multiple searchBy properties', () => {
      const result = pipe.transform(mockItems, 'ap', ['itemName', 'category']);
      expect(result.length).toBe(1);
      expect(result[0].itemName).toBe('Apple');
    });

    it('should include group titles in results', () => {
      const itemsWithGroup = [
        { grpTitle: true, itemName: 'Fruits' },
        { id: 1, itemName: 'Apple', category: 'Fruit' },
        { id: 2, itemName: 'Banana', category: 'Fruit' }
      ];
      const result = pipe.transform(itemsWithGroup, 'xyz', []);
      expect(result.length).toBe(1);
      expect(result[0].grpTitle).toBe(true);
    });

    it('should return empty array when no matches found', () => {
      const result = pipe.transform(mockItems, 'xyz', []);
      expect(result.length).toBe(0);
    });

    it('should handle partial matches', () => {
      const result = pipe.transform(mockItems, 'an', []);
      expect(result.length).toBe(1); // Banana contains 'an'
      expect(result.some(item => item.itemName === 'Banana')).toBe(true);
    });

    it('should store filtered list in property', () => {
      pipe.transform(mockItems, 'app', []);
      expect(pipe.filteredList.length).toBe(1);
      expect(pipe.filteredList[0].itemName).toBe('Apple');
    });
  });

  describe('applyFilter', () => {
    it('should return true for items matching filter in any property', () => {
      const item = { id: 1, itemName: 'Apple', category: 'Fruit' };
      const result = pipe.applyFilter(item, 'Apple', []);
      expect(result).toBe(true);
    });

    it('should return false for items not matching filter', () => {
      const item = { id: 1, itemName: 'Apple', category: 'Fruit' };
      const result = pipe.applyFilter(item, 'xyz', []);
      expect(result).toBe(false);
    });

    it('should return true for group titles', () => {
      const item = { grpTitle: true, itemName: 'Fruits' };
      const result = pipe.applyFilter(item, 'xyz', []);
      expect(result).toBe(true);
    });

    it('should search in specified searchBy properties only', () => {
      const item = { id: 1, itemName: 'Apple', category: 'Fruit' };
      const result = pipe.applyFilter(item, 'Fruit', ['itemName']);
      expect(result).toBe(false);
    });

    it('should return true when filter matches searchBy property', () => {
      const item = { id: 1, itemName: 'Apple', category: 'Fruit' };
      const result = pipe.applyFilter(item, 'Apple', ['itemName']);
      expect(result).toBe(true);
    });

    it('should handle items with empty property values', () => {
      const item = { id: 1, itemName: '', category: 'Fruit' };
      const result = pipe.applyFilter(item, 'test', ['itemName']);
      expect(result).toBe(false);
    });

    it('should handle multiple searchBy properties', () => {
      const item = { id: 1, itemName: 'Apple', category: 'Fruit', description: 'Fresh' };
      const result = pipe.applyFilter(item, 'Fresh', ['itemName', 'description']);
      expect(result).toBe(true);
    });
  });
});
