import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LimitSelectionExample } from './limitselection';

describe('LimitSelectionExample', () => {
  let component: LimitSelectionExample;
  let fixture: ComponentFixture<LimitSelectionExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LimitSelectionExample],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitSelectionExample);
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

    it('should initialize selectedItems with 4 countries', () => {
      expect(component.selectedItems.length).toBe(4);
    });

    it('should have limitSelection set to 2', () => {
      expect(component.settings['limitSelection']).toBe(2);
    });

    it('should have enableSearchFilter enabled', () => {
      expect(component.settings['enableSearchFilter']).toBe(true);
    });
  });

  describe('Event Handlers', () => {
    beforeEach(() => {
      component.ngOnInit();
      spyOn(console, 'log');
    });

    it('should handle onItemSelect', () => {
      const item = { id: 1, itemName: 'India' };
      component.onItemSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
    });

    it('should handle OnItemDeSelect', () => {
      const item = { id: 1, itemName: 'India' };
      component.OnItemDeSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
    });

    it('should handle onSelectAll', () => {
      const items = [{ id: 1, itemName: 'India' }];
      component.onSelectAll(items);
      expect(console.log).toHaveBeenCalledWith(items);
    });

    it('should handle onDeSelectAll', () => {
      const items: any[] = [];
      component.onDeSelectAll(items);
      expect(console.log).toHaveBeenCalledWith(items);
    });
  });

  describe('Component Properties', () => {
    it('should have title set to "Limit Selection"', () => {
      expect(component.title).toBe('Limit Selection');
    });

    it('should have cssgist set to false', () => {
      expect(component.cssgist).toBe(false);
    });
  });
});
