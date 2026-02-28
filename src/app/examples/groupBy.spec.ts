import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GroupByExample } from './groupBy';

describe('GroupByExample', () => {
  let component: GroupByExample;
  let fixture: ComponentFixture<GroupByExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupByExample],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupByExample);
    component = fixture.componentInstance;
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should initialize itemList with 6 countries', () => {
      expect(component.itemList.length).toBe(6);
    });

    it('should initialize selectedItems with 2 items', () => {
      expect(component.selectedItems.length).toBe(2);
    });

    it('should have items with category property', () => {
      expect(component.itemList[0].hasOwnProperty('category')).toBe(true);
    });

    it('should initialize settings with groupBy property', () => {
      expect(component.settings['groupBy']).toBe('category');
    });

    it('should have selectGroup enabled', () => {
      expect(component.settings['selectGroup']).toBe(true);
    });

    it('should have searchBy array', () => {
      expect(component.settings['searchBy']).toEqual(['itemName']);
    });
  });

  describe('Event Handlers', () => {
    beforeEach(() => {
      component.ngOnInit();
      spyOn(console, 'log');
    });

    it('should handle onItemSelect', () => {
      const item = { id: 1, itemName: 'India', category: 'asia' };
      component.onItemSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
    });

    it('should handle OnItemDeSelect', () => {
      const item = { id: 1, itemName: 'India', category: 'asia' };
      component.OnItemDeSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
    });

    it('should handle onSelectAll', () => {
      const items = [{ id: 1, itemName: 'India', category: 'asia' }];
      component.onSelectAll(items);
      expect(console.log).toHaveBeenCalledWith(items);
    });

    it('should handle onDeSelectAll', () => {
      const items: any[] = [];
      component.onDeSelectAll(items);
      expect(console.log).toHaveBeenCalledWith(items);
    });

    it('should handle onGroupSelect', () => {
      const groupItem = { category: 'asia', items: [] };
      component.onGroupSelect(groupItem);
      expect(console.log).toHaveBeenCalledWith(groupItem);
    });

    it('should handle onGroupDeSelect', () => {
      const groupItem = { category: 'asia', items: [] };
      component.onGroupDeSelect(groupItem);
      expect(console.log).toHaveBeenCalledWith(groupItem);
    });

    it('should handle onChange', () => {
      const event = { value: 'test' };
      component.onChange(event);
      expect(console.log).toHaveBeenCalledWith(event);
    });
  });

  describe('loadDataSet methods', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should load data set 1 with fruits and vegetables', () => {
      component.loadDataSet1();
      expect(component.itemList.length).toBe(4);
      expect(component.selectedItems.length).toBe(0);
      expect(component.itemList.some(item => item.category === 'fruits')).toBe(true);
      expect(component.itemList.some(item => item.category === 'vegetables')).toBe(true);
    });

    it('should load data set 2 with countries', () => {
      component.loadDataSet2();
      expect(component.selectedItems.length).toBe(0);
      expect(component.itemList.some(item => item.category === 'asia')).toBe(true);
    });
  });
});
