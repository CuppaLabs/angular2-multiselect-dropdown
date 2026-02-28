import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SingleSelectionExample } from './singleselection';

describe('SingleSelectionExample', () => {
  let component: SingleSelectionExample;
  let fixture: ComponentFixture<SingleSelectionExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSelectionExample],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectionExample);
    component = fixture.componentInstance;
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize count to 6', () => {
      expect(component.count).toBe(6);
    });
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should initialize itemList with 6 countries', () => {
      expect(component.itemList.length).toBe(6);
    });

    it('should initialize selectedItems with 1 country', () => {
      expect(component.selectedItems.length).toBe(1);
      expect(component.selectedItems[0].itemName).toBe('India');
    });

    it('should initialize settings with singleSelection true', () => {
      expect(component.settings['singleSelection']).toBe(true);
    });

    it('should have enableSearchFilter in settings', () => {
      expect(component.settings['enableSearchFilter']).toBe(true);
    });

    it('should have addNewItemOnFilter in settings', () => {
      expect(component.settings['addNewItemOnFilter']).toBe(true);
    });
  });

  describe('Event Handlers', () => {
    beforeEach(() => {
      component.ngOnInit();
      spyOn(console, 'log');
    });

    it('should handle onItemSelect', () => {
      const item = { id: 1, itemName: 'India', name: 'IN' };
      component.onItemSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
    });

    it('should handle OnItemDeSelect', () => {
      const item = { id: 1, itemName: 'India', name: 'IN' };
      component.OnItemDeSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
    });

    it('should handle onSelectAll', () => {
      const items = [{ id: 1, itemName: 'India', name: 'IN' }];
      component.onSelectAll(items);
      expect(console.log).toHaveBeenCalledWith(items);
    });

    it('should handle onDeSelectAll', () => {
      const items: any[] = [];
      component.onDeSelectAll(items);
      expect(console.log).toHaveBeenCalledWith(items);
    });
  });

  describe('onAddItem', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should increment count when adding new item', () => {
      const initialCount = component.count;
      component.onAddItem('New Country');
      expect(component.count).toBe(initialCount + 1);
    });

    it('should add new item to itemList', () => {
      const initialLength = component.itemList.length;
      component.onAddItem('New Country');
      expect(component.itemList.length).toBe(initialLength + 1);
    });

    it('should set selectedItems to the new item', () => {
      component.onAddItem('New Country');
      expect(component.selectedItems.length).toBe(1);
      expect(component.selectedItems[0].itemName).toBe('New Country');
    });

    it('should set new item id based on count', () => {
      component.onAddItem('New Country');
      expect(component.selectedItems[0].id).toBe(7);
    });
  });

  describe('Component Properties', () => {
    it('should have title set to "Single Selection"', () => {
      expect(component.title).toBe('Single Selection');
    });

    it('should have cssgist set to false', () => {
      expect(component.cssgist).toBe(false);
    });
  });
});
