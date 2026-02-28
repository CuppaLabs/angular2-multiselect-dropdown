import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchFilterExample } from './searchFilter';

describe('SearchFilterExample', () => {
  let component: SearchFilterExample;
  let fixture: ComponentFixture<SearchFilterExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFilterExample],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterExample);
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

    it('should have enableSearchFilter set to true', () => {
      expect(component.settings['enableSearchFilter']).toBe(true);
    });

    it('should have badgeShowLimit set to 3', () => {
      expect(component.settings['badgeShowLimit']).toBe(3);
    });

    it('should have singleSelection set to false', () => {
      expect(component.settings['singleSelection']).toBe(false);
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

  describe('Component Properties', () => {
    it('should have title set to "Search filter"', () => {
      expect(component.title).toBe('Search filter');
    });

    it('should have cssgist set to false', () => {
      expect(component.cssgist).toBe(false);
    });
  });
});
