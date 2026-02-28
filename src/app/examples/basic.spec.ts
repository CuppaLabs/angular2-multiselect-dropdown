import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BasicExample } from './basic';

describe('BasicExample', () => {
  let component: BasicExample;
  let fixture: ComponentFixture<BasicExample>;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicExample],
      providers: [Title, Meta],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicExample);
    component = fixture.componentInstance;
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set page title on construction', () => {
      expect(titleService.getTitle()).toBe('Basic example');
    });
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should initialize itemList with 6 countries', () => {
      expect(component.itemList.length).toBe(6);
    });

    it('should initialize selectedItems with 5 countries', () => {
      expect(component.selectedItems.length).toBe(5);
    });

    it('should initialize settings with correct properties', () => {
      expect(component.settings.text).toBe('Select Countries');
      expect(component.settings.selectAllText).toBe('Select All');
      expect(component.settings.unSelectAllText).toBe('UnSelect All');
      expect(component.settings.primaryKey).toBe('countryId');
      expect(component.settings.enableSearchFilter).toBe(true);
      expect(component.settings.tagToBody).toBe(true);
    });
  });

  describe('Event Handlers', () => {
    beforeEach(() => {
      component.ngOnInit();
      spyOn(console, 'log');
    });

    it('should handle onItemSelect', () => {
      const item = { countryId: 1, itemName: 'India' };
      component.onItemSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
    });

    it('should handle OnItemDeSelect', () => {
      const item = { countryId: 1, itemName: 'India' };
      component.OnItemDeSelect(item);
      expect(console.log).toHaveBeenCalledWith(item);
    });

    it('should handle onSelectAll', () => {
      const items = [{ countryId: 1, itemName: 'India' }];
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
    it('should have title set to "Basic example"', () => {
      expect(component.title).toBe('Basic example');
    });

    it('should have cssgist set to false', () => {
      expect(component.cssgist).toBe(false);
    });

    it('should have tsgist defined', () => {
      expect(component.tsgist).toBeDefined();
    });

    it('should have htmlgist defined', () => {
      expect(component.htmlgist).toBeDefined();
    });
  });
});
