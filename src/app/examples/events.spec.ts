import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EventsExample } from './events';

describe('EventsExample', () => {
  let component: EventsExample;
  let fixture: ComponentFixture<EventsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsExample],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsExample);
    component = fixture.componentInstance;
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize string properties to empty', () => {
      expect(component.selectedItemString).toBe('');
      expect(component.unSelectedItemString).toBe('');
      expect(component.openString).toBe('');
      expect(component.closeString).toBe('');
      expect(component.selectAllString).toBe('');
      expect(component.unSelectAllString).toBe('');
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

    it('should initialize settings with correct properties', () => {
      expect(component.settings['text']).toBe('Select Countries');
      expect(component.settings['selectAllText']).toBe('Select All');
      expect(component.settings['primaryKey']).toBe('countryId');
    });
  });

  describe('Event Handlers', () => {
    beforeEach(() => {
      component.ngOnInit();
      spyOn(console, 'log');
    });

    it('should handle onItemSelect and update selectedItemString', () => {
      const item = { countryId: 1, itemName: 'India' };
      component.onItemSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
      expect(component.selectedItemString).toBe(JSON.stringify(item));
    });

    it('should handle OnItemDeSelect and update unSelectedItemString', () => {
      const item = { countryId: 1, itemName: 'India' };
      component.OnItemDeSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
      expect(component.unSelectedItemString).toBe(JSON.stringify(item));
    });

    it('should handle onOpen event', () => {
      component.onOpen('test-event');
      expect(component.openString).toBe('Dropdown opened: test-event');
    });

    it('should handle onClose event', () => {
      component.onClose('test-event');
      expect(component.closeString).toBe('Dropdown opened: test-event');
    });

    it('should handle onSelectAll and update selectAllString', () => {
      const items = [{ countryId: 1, itemName: 'India' }];
      component.onSelectAll(items);
      expect(console.log).toHaveBeenCalledWith(items);
      expect(component.selectAllString).toBe(JSON.stringify(items));
      expect(component.unSelectAllString).toBe('');
    });

    it('should handle onDeSelectAll and update unSelectAllString', () => {
      const items: any[] = [];
      component.onDeSelectAll(items);
      expect(console.log).toHaveBeenCalledWith(items);
      expect(component.selectAllString).toBe('');
      expect(component.unSelectAllString).toBe('all items un-selected');
    });
  });

  describe('Component Properties', () => {
    it('should have title set to "Events"', () => {
      expect(component.title).toBe('Events');
    });

    it('should have cssgist set to false', () => {
      expect(component.cssgist).toBe(false);
    });
  });
});
