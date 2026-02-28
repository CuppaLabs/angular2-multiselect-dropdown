import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DisableModeExample } from './disablemode';

describe('DisableModeExample', () => {
  let component: DisableModeExample;
  let fixture: ComponentFixture<DisableModeExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisableModeExample],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableModeExample);
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

    it('should initialize settings with disabled true', () => {
      expect(component.settings.disabled).toBe(true);
    });

    it('should have enableSearchFilter set to false', () => {
      expect(component.settings.enableSearchFilter).toBe(false);
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

    it('should handle showModel', () => {
      component.showModel();
      expect(console.log).toHaveBeenCalledWith(component.selectedItems);
    });
  });

  describe('Control Methods', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should clear selectedItems on changeData', () => {
      component.changeData();
      expect(component.selectedItems.length).toBe(0);
    });

    it('should set disabled to true on disable()', () => {
      component.disable();
      expect(component.settings.disabled).toBe(true);
    });

    it('should set disabled to false on enable()', () => {
      component.enable();
      expect(component.settings.disabled).toBe(false);
    });
  });
});
