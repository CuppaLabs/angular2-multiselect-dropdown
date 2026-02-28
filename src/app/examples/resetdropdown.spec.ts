import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ResetDropdownExample } from './resetdropdown';

describe('ResetDropdownExample', () => {
  let component: ResetDropdownExample;
  let fixture: ComponentFixture<ResetDropdownExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetDropdownExample],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetDropdownExample);
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

    it('should initialize settings', () => {
      expect(component.settings['text']).toBe('Select Countries');
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

    it('should call openDropdown when open is called', () => {
      const mockDropdownElem = { openDropdown: jasmine.createSpy('openDropdown') };
      component.dropdownElem = mockDropdownElem as any;
      const mockEvent = { stopPropagation: jasmine.createSpy('stopPropagation') };
      
      component.open(mockEvent);
      
      expect(mockDropdownElem.openDropdown).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });

    it('should call closeDropdown when close is called', () => {
      const mockDropdownElem = { closeDropdown: jasmine.createSpy('closeDropdown') };
      component.dropdownElem = mockDropdownElem as any;
      const mockEvent = {};
      
      component.close(mockEvent);
      
      expect(mockDropdownElem.closeDropdown).toHaveBeenCalled();
    });
  });

  describe('Component Properties', () => {
    it('should have title set correctly', () => {
      expect(component.title).toBe('Methods - Reset, Open, Close dropdown');
    });

    it('should have cssgist set to false', () => {
      expect(component.cssgist).toBe(false);
    });
  });
});
