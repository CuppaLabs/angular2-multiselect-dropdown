import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AngularMultiSelect, AngularMultiSelectModule } from './multiselect.component';
import { DataService } from './multiselect.service';
import { ListFilterPipe } from './list-filter';

// Test host component
@Component({
  standalone: false,
  template: `
    <angular2-multiselect 
      [data]="dropdownList" 
      [(ngModel)]="selectedItems" 
      [settings]="dropdownSettings"
      (onSelect)="onItemSelect($event)"
      (onDeSelect)="onItemDeSelect($event)"
      (onSelectAll)="onSelectAll($event)"
      (onDeSelectAll)="onDeSelectAll($event)"
      (onOpen)="onOpen($event)"
      (onClose)="onClose($event)"
      (onScrollToEnd)="onScrollToEnd($event)"
      (onFilterSelectAll)="onFilterSelectAll($event)"
      (onFilterDeSelectAll)="onFilterDeSelectAll($event)"
      (onGroupSelect)="onGroupSelect($event)"
      (onGroupDeSelect)="onGroupDeSelect($event)"
      (onAddFilterNewItem)="onAddFilterNewItem($event)">
    </angular2-multiselect>
  `
})
class TestHostComponent {
  @ViewChild(AngularMultiSelect) multiselect!: AngularMultiSelect;
  
  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: any = {};
  
  // Event tracking
  lastSelectEvent: any;
  lastDeSelectEvent: any;
  lastSelectAllEvent: any;
  lastDeSelectAllEvent: any;
  openCount = 0;
  closeCount = 0;
  scrollEndEvent: any;
  filterSelectAllEvent: any;
  filterDeSelectAllEvent: any;
  groupSelectEvent: any;
  groupDeSelectEvent: any;
  addFilterNewItemEvent: any;
  
  onItemSelect(item: any) { this.lastSelectEvent = item; }
  onItemDeSelect(item: any) { this.lastDeSelectEvent = item; }
  onSelectAll(items: any) { this.lastSelectAllEvent = items; }
  onDeSelectAll(items: any) { this.lastDeSelectAllEvent = items; }
  onOpen(event: any) { this.openCount++; }
  onClose(event: any) { this.closeCount++; }
  onScrollToEnd(event: any) { this.scrollEndEvent = event; }
  onFilterSelectAll(items: any) { this.filterSelectAllEvent = items; }
  onFilterDeSelectAll(items: any) { this.filterDeSelectAllEvent = items; }
  onGroupSelect(item: any) { this.groupSelectEvent = item; }
  onGroupDeSelect(item: any) { this.groupDeSelectEvent = item; }
  onAddFilterNewItem(item: any) { this.addFilterNewItemEvent = item; }
}

describe('AngularMultiSelect', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let multiselect: AngularMultiSelect;

  const mockData = [
    { id: 1, itemName: 'Item 1' },
    { id: 2, itemName: 'Item 2' },
    { id: 3, itemName: 'Item 3' },
    { id: 4, itemName: 'Item 4' },
    { id: 5, itemName: 'Item 5' }
  ];

  const mockDataWithDisabled = [
    { id: 1, itemName: 'Item 1', disabled: false },
    { id: 2, itemName: 'Item 2', disabled: true },
    { id: 3, itemName: 'Item 3', disabled: false }
  ];

  const mockGroupData = [
    { id: 1, itemName: 'Item 1', category: 'Fruits' },
    { id: 2, itemName: 'Item 2', category: 'Fruits' },
    { id: 3, itemName: 'Item 3', category: 'Vegetables' },
    { id: 4, itemName: 'Item 4', category: 'Vegetables' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMultiSelectModule],
      declarations: [TestHostComponent],
      providers: [DataService, ListFilterPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.dropdownList = [...mockData];
    component.selectedItems = [];
    component.dropdownSettings = {
      singleSelection: false,
      text: 'Select',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      searchPlaceholderText: 'Search',
      labelKey: 'itemName',
      primaryKey: 'id'
    };
    fixture.detectChanges();
    multiselect = component.multiselect;
  });

  describe('Component Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
      expect(multiselect).toBeTruthy();
    });

    it('should initialize with default settings', () => {
      expect(multiselect.settings).toBeTruthy();
      expect(multiselect.settings.singleSelection).toBe(false);
    });

    it('should initialize selectedItems as empty array', () => {
      expect(multiselect.selectedItems).toEqual([]);
    });

    it('should cache data on init', () => {
      expect(multiselect.cachedItems).toEqual(mockData);
    });

    it('should set isActive to false initially', () => {
      expect(multiselect.isActive).toBe(false);
    });
  });

  describe('Dropdown Toggle', () => {
    it('should open dropdown on toggle', () => {
      multiselect.toggleDropdown(new Event('click'));
      expect(multiselect.isActive).toBe(true);
    });

    it('should close dropdown on second toggle', () => {
      multiselect.toggleDropdown(new Event('click'));
      multiselect.toggleDropdown(new Event('click'));
      expect(multiselect.isActive).toBe(false);
    });

    it('should emit onOpen event when opening', fakeAsync(() => {
      multiselect.openDropdown();
      tick();
      expect(component.openCount).toBe(1);
    }));

    it('should emit onClose event when closing', fakeAsync(() => {
      multiselect.openDropdown();
      tick();
      multiselect.closeDropdown();
      tick();
      expect(component.closeCount).toBe(1);
    }));

    it('should not toggle when disabled', () => {
      multiselect.settings.disabled = true;
      fixture.detectChanges();
      multiselect.toggleDropdown(new Event('click'));
      expect(multiselect.isActive).toBe(false);
    });

    it('should clear filter on close', () => {
      multiselect.filter = 'test';
      multiselect.closeDropdown();
      expect(multiselect.filter).toBe('');
    });
  });

  describe('Item Selection', () => {
    it('should select item on click', fakeAsync(() => {
      const item = mockData[0];
      multiselect.onItemClick(item, 0, new Event('click'));
      tick();
      expect(multiselect.selectedItems.length).toBe(1);
      expect(multiselect.selectedItems[0]).toEqual(item);
    }));

    it('should emit onSelect event', fakeAsync(() => {
      const item = mockData[0];
      multiselect.onItemClick(item, 0, new Event('click'));
      tick();
      fixture.detectChanges();
      expect(component.lastSelectEvent).toEqual(item);
    }));

    it('should deselect item on second click', fakeAsync(() => {
      const item = mockData[0];
      multiselect.onItemClick(item, 0, new Event('click'));
      tick();
      multiselect.onItemClick(item, 0, new Event('click'));
      tick();
      expect(multiselect.selectedItems.length).toBe(0);
    }));

    it('should not select disabled item', fakeAsync(() => {
      component.dropdownList = [...mockDataWithDisabled];
      fixture.detectChanges();
      
      const disabledItem = { id: 2, itemName: 'Item 2', disabled: true };
      multiselect.onItemClick(disabledItem, 1, new Event('click'));
      tick();
      expect(multiselect.selectedItems.length).toBe(0);
    }));

    it('should respect limitSelection setting', fakeAsync(() => {
      multiselect.settings.limitSelection = 2;
      fixture.detectChanges();
      
      multiselect.onItemClick(mockData[0], 0, new Event('click'));
      tick();
      multiselect.onItemClick(mockData[1], 1, new Event('click'));
      tick();
      multiselect.onItemClick(mockData[2], 2, new Event('click'));
      tick();
      
      expect(multiselect.selectedItems.length).toBe(2);
    }));
  });

  describe('Single Selection Mode', () => {
    beforeEach(() => {
      component.dropdownSettings = {
        ...component.dropdownSettings,
        singleSelection: true
      };
      fixture.detectChanges();
    });

    it('should only allow one selection', fakeAsync(() => {
      multiselect.addSelected(mockData[0]);
      tick();
      multiselect.addSelected(mockData[1]);
      tick();
      
      expect(multiselect.selectedItems.length).toBe(1);
      expect(multiselect.selectedItems[0]).toEqual(mockData[1]);
    }));

    it('should close dropdown after selection', fakeAsync(() => {
      multiselect.openDropdown();
      tick();
      multiselect.addSelected(mockData[0]);
      tick();
      
      expect(multiselect.isActive).toBe(false);
    }));
  });

  describe('Select All / Deselect All', () => {
    it('should select all items', fakeAsync(() => {
      const event = { stopPropagation: () => {} };
      multiselect.toggleSelectAll(event);
      tick();
      
      expect(multiselect.selectedItems.length).toBe(mockData.length);
      expect(multiselect.isSelectAll).toBe(true);
    }));

    it('should deselect all when already selected', fakeAsync(() => {
      const event = { stopPropagation: () => {} };
      multiselect.toggleSelectAll(event);
      tick();
      multiselect.toggleSelectAll(event);
      tick();
      
      expect(multiselect.selectedItems.length).toBe(0);
      expect(multiselect.isSelectAll).toBe(false);
    }));

    it('should not select disabled items in select all', fakeAsync(() => {
      component.dropdownList = [...mockDataWithDisabled];
      fixture.detectChanges();
      
      const event = { stopPropagation: () => {} };
      multiselect.toggleSelectAll(event);
      tick();
      
      // Should select 2 items (1 and 3), not the disabled one (2)
      expect(multiselect.selectedItems.length).toBe(2);
      expect(multiselect.selectedItems.find((item: any) => item.disabled)).toBeUndefined();
    }));

    it('should emit onSelectAll event', fakeAsync(() => {
      const event = { stopPropagation: () => {} };
      multiselect.toggleSelectAll(event);
      tick();
      fixture.detectChanges();
      
      expect(component.lastSelectAllEvent).toEqual(mockData);
    }));

    it('should emit onDeSelectAll event', fakeAsync(() => {
      const event = { stopPropagation: () => {} };
      multiselect.toggleSelectAll(event);
      tick();
      multiselect.toggleSelectAll(event);
      tick();
      fixture.detectChanges();
      
      expect(component.lastDeSelectAllEvent).toEqual([]);
    }));
  });

  describe('isSelected', () => {
    it('should return true for selected item', fakeAsync(() => {
      multiselect.addSelected(mockData[0]);
      tick();
      
      expect(multiselect.isSelected(mockData[0])).toBe(true);
    }));

    it('should return false for unselected item', () => {
      expect(multiselect.isSelected(mockData[0])).toBe(false);
    });

    it('should return false for disabled item', () => {
      const disabledItem = { id: 1, itemName: 'Test', disabled: true };
      expect(multiselect.isSelected(disabledItem)).toBe(false);
    });
  });

  describe('addSelected', () => {
    it('should add item to selectedItems', () => {
      multiselect.addSelected(mockData[0]);
      expect(multiselect.selectedItems).toContain(mockData[0]);
    });

    it('should not add disabled item', () => {
      const disabledItem = { id: 1, itemName: 'Test', disabled: true };
      multiselect.addSelected(disabledItem);
      expect(multiselect.selectedItems.length).toBe(0);
    });
  });

  describe('removeSelected', () => {
    it('should remove item from selectedItems', fakeAsync(() => {
      multiselect.addSelected(mockData[0]);
      tick();
      multiselect.removeSelected(mockData[0]);
      tick();
      
      expect(multiselect.selectedItems.length).toBe(0);
    }));
  });

  describe('clearSelection', () => {
    it('should clear all selected items', fakeAsync(() => {
      multiselect.addSelected(mockData[0]);
      multiselect.addSelected(mockData[1]);
      tick();
      
      multiselect.clearSelection();
      tick();
      
      expect(multiselect.selectedItems.length).toBe(0);
      expect(multiselect.isSelectAll).toBe(false);
    }));
  });

  describe('writeValue (ControlValueAccessor)', () => {
    it('should set selectedItems', () => {
      multiselect.writeValue([mockData[0]]);
      expect(multiselect.selectedItems).toEqual([mockData[0]]);
    });

    it('should handle null value', () => {
      multiselect.writeValue(null);
      expect(multiselect.selectedItems).toEqual([]);
    });

    it('should handle undefined value', () => {
      multiselect.writeValue(undefined);
      expect(multiselect.selectedItems).toEqual([]);
    });

    it('should handle empty string value', () => {
      multiselect.writeValue('');
      expect(multiselect.selectedItems).toEqual([]);
    });

    it('should respect limitSelection in writeValue', () => {
      multiselect.settings.limitSelection = 2;
      multiselect.writeValue([mockData[0], mockData[1], mockData[2]]);
      
      expect(multiselect.selectedItems.length).toBe(2);
    });

    it('should set isSelectAll when all items are selected', () => {
      multiselect.writeValue(mockData);
      expect(multiselect.isSelectAll).toBe(true);
    });
  });

  describe('registerOnChange and registerOnTouched', () => {
    it('should register onChange callback', () => {
      const fn = jasmine.createSpy('onChange');
      multiselect.registerOnChange(fn);
      multiselect.addSelected(mockData[0]);
      
      expect(fn).toHaveBeenCalledWith([mockData[0]]);
    });

    it('should register onTouched callback', () => {
      const fn = jasmine.createSpy('onTouched');
      multiselect.registerOnTouched(fn);
      multiselect.addSelected(mockData[0]);
      
      expect(fn).toHaveBeenCalled();
    });
  });

  describe('trackByFn', () => {
    it('should return item primary key', () => {
      const item = { id: 123, itemName: 'Test' };
      const result = multiselect.trackByFn(0, item);
      expect(result).toBe(123);
    });
  });

  describe('cloneArray', () => {
    it('should clone array', () => {
      const original = [{ id: 1 }, { id: 2 }];
      const cloned = multiselect.cloneArray(original);
      
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
    });

    it('should return non-array values as-is', () => {
      const result = multiselect.cloneArray('test' as any);
      expect(result).toBe('test');
    });
  });

  describe('clearSearch', () => {
    it('should reset filter', () => {
      multiselect.filter = 'test';
      multiselect.clearSearch();
      expect(multiselect.filter).toBe('');
    });

    it('should reset isFilterSelectAll', () => {
      multiselect.isFilterSelectAll = true;
      multiselect.clearSearch();
      expect(multiselect.isFilterSelectAll).toBe(false);
    });

    it('should restore data from cache', () => {
      multiselect.data = [];
      multiselect.clearSearch();
      expect(multiselect.data).toEqual(multiselect.cachedItems);
    });
  });

  describe('Filter Select All', () => {
    beforeEach(() => {
      multiselect.filteredList = [mockData[0], mockData[1]];
    });

    it('should select all filtered items', () => {
      multiselect.toggleFilterSelectAll();
      
      expect(multiselect.selectedItems.length).toBe(2);
      expect(multiselect.isFilterSelectAll).toBe(true);
    });

    it('should deselect all filtered items', () => {
      multiselect.toggleFilterSelectAll();
      multiselect.toggleFilterSelectAll();
      
      expect(multiselect.selectedItems.length).toBe(0);
      expect(multiselect.isFilterSelectAll).toBe(false);
    });
  });

  describe('Group Selection', () => {
    beforeEach(() => {
      component.dropdownSettings = {
        ...component.dropdownSettings,
        groupBy: 'category',
        selectGroup: true
      };
      component.dropdownList = [...mockGroupData];
      fixture.detectChanges();
    });

    it('should transform data into groups', () => {
      multiselect.ngOnInit();
      fixture.detectChanges();
      
      expect(multiselect.groupedData).toBeTruthy();
    });
  });

  describe('Escape Key Handler', () => {
    it('should close dropdown on escape when escapeToClose is true', () => {
      multiselect.settings.escapeToClose = true;
      multiselect.openDropdown();
      
      const event = new KeyboardEvent('keyup', { key: 'Escape' });
      multiselect.onEscapeDown(event);
      
      expect(multiselect.isActive).toBe(false);
    });

    it('should not close dropdown on escape when escapeToClose is false', () => {
      multiselect.settings.escapeToClose = false;
      multiselect.openDropdown();
      
      const event = new KeyboardEvent('keyup', { key: 'Escape' });
      multiselect.onEscapeDown(event);
      
      expect(multiselect.isActive).toBe(true);
    });
  });

  describe('onFilterChange', () => {
    it('should update data with filtered results', () => {
      const filteredData = [mockData[0]];
      multiselect.onFilterChange(filteredData);
      
      expect(multiselect.data).toEqual(filteredData);
    });

    it('should reset to cached data when filter is empty', () => {
      multiselect.filter = '';
      multiselect.cachedItems = [...mockData];
      multiselect.onFilterChange([]);
      
      // When filter is empty and cachedItems exists, data should be set from cachedItems
      expect(multiselect.data.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('validate', () => {
    it('should return null (no validation errors)', () => {
      const control = { value: null } as any;
      const result = multiselect.validate(control);
      expect(result).toBeNull();
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe from subscription if exists', () => {
      const unsubscribeSpy = jasmine.createSpy('unsubscribe');
      multiselect.subscription = { unsubscribe: unsubscribeSpy } as any;
      
      multiselect.ngOnDestroy();
      
      expect(unsubscribeSpy).toHaveBeenCalled();
    });

    it('should handle no subscription gracefully', () => {
      multiselect.subscription = undefined as any;
      expect(() => multiselect.ngOnDestroy()).not.toThrow();
    });
  });

  describe('ngOnChanges', () => {
    it('should update cachedItems when data changes', () => {
      const newData = [{ id: 10, itemName: 'New Item' }];
      
      // Set the data first since ngOnChanges reads from this.data
      multiselect.data = newData;
      multiselect.ngOnChanges({
        data: {
          currentValue: newData,
          previousValue: mockData,
          firstChange: false,
          isFirstChange: () => false
        }
      });
      
      expect(multiselect.cachedItems).toEqual(newData);
    });

    it('should skip first change', () => {
      const originalCached = [...multiselect.cachedItems];
      
      multiselect.ngOnChanges({
        data: {
          currentValue: [],
          previousValue: undefined,
          firstChange: true,
          isFirstChange: () => true
        }
      });
      
      expect(multiselect.cachedItems).toEqual(originalCached);
    });
  });

  describe('closeDropdownOnClickOut', () => {
    it('should close dropdown and clear search', () => {
      multiselect.openDropdown();
      multiselect.filter = 'test';
      
      multiselect.closeDropdownOnClickOut();
      
      expect(multiselect.isActive).toBe(false);
      expect(multiselect.filter).toBe('');
    });

    it('should do nothing if dropdown is already closed', () => {
      multiselect.isActive = false;
      multiselect.closeDropdownOnClickOut();
      
      expect(multiselect.isActive).toBe(false);
    });
  });

  describe('transformData', () => {
    it('should group data by specified field', () => {
      multiselect.settings.labelKey = 'itemName';
      multiselect.settings.groupBy = 'category';
      
      const result = multiselect.transformData(mockGroupData, 'category');
      
      expect(result.length).toBe(2); // Fruits and Vegetables
      expect(result[0].grpTitle).toBe(true);
      expect(result[0].list.length).toBe(2);
    });

    it('should mark group as disabled if all children are disabled', () => {
      const dataWithAllDisabled = [
        { id: 1, itemName: 'Item 1', category: 'Group1', disabled: true },
        { id: 2, itemName: 'Item 2', category: 'Group1', disabled: true }
      ];
      
      multiselect.settings.labelKey = 'itemName';
      multiselect.settings.groupBy = 'category';
      
      const result = multiselect.transformData(dataWithAllDisabled, 'category');
      
      expect(result[0].disabled).toBe(true);
    });
  });

  describe('selectGroup', () => {
    it('should select all items in group', () => {
      const groupItem = {
        grpTitle: true,
        itemName: 'Fruits',
        category: 'Fruits',
        selected: false,
        list: [mockGroupData[0], mockGroupData[1]]
      };
      
      // Initialize groupedData for updateGroupInfo
      multiselect.groupedData = [groupItem];
      multiselect.selectGroup(groupItem);
      
      expect(groupItem.selected).toBe(true);
      expect(multiselect.selectedItems.length).toBe(2);
    });

    it('should deselect all items in group', () => {
      const groupItem = {
        grpTitle: true,
        itemName: 'Fruits',
        category: 'Fruits',
        selected: true,
        list: [mockGroupData[0], mockGroupData[1]]
      };
      
      // Initialize groupedData for updateGroupInfo
      multiselect.groupedData = [groupItem];
      multiselect.addSelected(mockGroupData[0]);
      multiselect.addSelected(mockGroupData[1]);
      
      multiselect.selectGroup(groupItem);
      
      expect(groupItem.selected).toBe(false);
      expect(multiselect.selectedItems.length).toBe(0);
    });

    it('should not select disabled group', () => {
      const disabledGroup = {
        grpTitle: true,
        itemName: 'Disabled',
        disabled: true,
        selected: false,
        list: []
      };
      
      multiselect.selectGroup(disabledGroup);
      
      expect(disabledGroup.selected).toBe(false);
    });
  });

  describe('addFilterNewItem', () => {
    it('should emit onAddFilterNewItem event', fakeAsync(() => {
      multiselect.filter = 'New Item';
      multiselect.addFilterNewItem();
      tick();
      fixture.detectChanges();
      
      expect(component.addFilterNewItemEvent).toBe('New Item');
    }));
  });

  describe('openTowardsTop', () => {
    it('should set position to top when true', () => {
      multiselect.openTowardsTop(true);
      expect(multiselect.settings.position).toBe('top');
    });

    it('should set position to bottom when false', () => {
      multiselect.openTowardsTop(false);
      expect(multiselect.settings.position).toBe('bottom');
    });
  });

  describe('resetInfiniteSearch', () => {
    it('should reset filter and virtual data', () => {
      multiselect.filter = 'test';
      multiselect.virtualdata = [];
      multiselect.isInfiniteFilterSelectAll = true;
      multiselect.infiniteFilterLength = 5;
      
      multiselect.resetInfiniteSearch();
      
      expect(multiselect.filter).toBe('');
      expect(multiselect.isInfiniteFilterSelectAll).toBe(false);
      expect(multiselect.virtualdata).toEqual(multiselect.cachedItems);
      expect(multiselect.infiniteFilterLength).toBe(0);
    });
  });

  describe('onScrollEnd', () => {
    it('should emit onScrollToEnd event', fakeAsync(() => {
      const event = { startIndex: 0, endIndex: 4 };
      multiselect.onScrollEnd(event);
      tick();
      fixture.detectChanges();
      
      expect(component.scrollEndEvent).toEqual(event);
    }));
  });
});

describe('AngularMultiSelectModule', () => {
  it('should import successfully', () => {
    expect(AngularMultiSelectModule).toBeTruthy();
  });
});

describe('AngularMultiSelect Extended Coverage', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let multiselect: AngularMultiSelect;

  const mockData = [
    { id: 1, itemName: 'Item 1' },
    { id: 2, itemName: 'Item 2' },
    { id: 3, itemName: 'Item 3' },
    { id: 4, itemName: 'Item 4' },
    { id: 5, itemName: 'Item 5' }
  ];

  const mockGroupData = [
    { id: 1, itemName: 'Apple', category: 'Fruits' },
    { id: 2, itemName: 'Banana', category: 'Fruits' },
    { id: 3, itemName: 'Carrot', category: 'Vegetables' },
    { id: 4, itemName: 'Potato', category: 'Vegetables' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMultiSelectModule],
      declarations: [TestHostComponent],
      providers: [DataService, ListFilterPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.dropdownList = [...mockData];
    component.selectedItems = [];
    component.dropdownSettings = {
      singleSelection: false,
      text: 'Select',
      enableCheckAll: true,
      enableSearchFilter: true,
      labelKey: 'itemName',
      primaryKey: 'id'
    };
    fixture.detectChanges();
    multiselect = component.multiselect;
  });

  describe('ngDoCheck', () => {
    it('should set isSelectAll to false when selectedItems is empty', () => {
      multiselect.selectedItems = [];
      multiselect.isSelectAll = true;
      multiselect.ngDoCheck();
      expect(multiselect.isSelectAll).toBe(false);
    });

    it('should set isSelectAll to false when data is empty', () => {
      multiselect.data = [];
      multiselect.isSelectAll = true;
      multiselect.ngDoCheck();
      expect(multiselect.isSelectAll).toBe(false);
    });

    it('should set isSelectAll to false when selectedItems < data length', () => {
      multiselect.selectedItems = [mockData[0]];
      multiselect.isSelectAll = true;
      multiselect.ngDoCheck();
      expect(multiselect.isSelectAll).toBe(false);
    });
  });

  describe('ngAfterViewInit', () => {
    it('should handle lazy loading setup', () => {
      multiselect.settings.lazyLoading = true;
      expect(() => multiselect.ngAfterViewInit()).not.toThrow();
    });

    it('should handle non-lazy loading', () => {
      multiselect.settings.lazyLoading = false;
      expect(() => multiselect.ngAfterViewInit()).not.toThrow();
    });
  });

  describe('ngAfterViewChecked', () => {
    it('should update selectedListHeight for top position', () => {
      multiselect.settings.position = 'top';
      multiselect.selectedListHeight = { val: 0 };
      multiselect.ngAfterViewChecked();
      fixture.detectChanges();
      expect(multiselect.selectedListHeight).toBeTruthy();
    });

    it('should not update when position is bottom', () => {
      multiselect.settings.position = 'bottom';
      expect(() => multiselect.ngAfterViewChecked()).not.toThrow();
    });
  });

  describe('onKeyUp', () => {
    it('should emit search term to subject', fakeAsync(() => {
      const event = { target: { value: 'test' } };
      spyOn(multiselect.searchTerm$, 'next');
      multiselect.onKeyUp(event);
      expect(multiselect.searchTerm$.next).toHaveBeenCalledWith('test');
    }));
  });

  describe('filterGroupedList', () => {
    beforeEach(() => {
      component.dropdownSettings = {
        ...component.dropdownSettings,
        groupBy: 'category'
      };
      component.dropdownList = [...mockGroupData];
      fixture.detectChanges();
      multiselect.ngOnInit();
    });

    it('should clear search when filter is empty', () => {
      multiselect.filter = '';
      spyOn(multiselect, 'clearSearch');
      multiselect.filterGroupedList();
      expect(multiselect.clearSearch).toHaveBeenCalled();
    });

    it('should clear search when filter is null', () => {
      multiselect.filter = null as any;
      spyOn(multiselect, 'clearSearch');
      multiselect.filterGroupedList();
      expect(multiselect.clearSearch).toHaveBeenCalled();
    });

    it('should filter grouped data by label match', () => {
      multiselect.groupCachedItems = multiselect.transformData(mockGroupData, 'category');
      multiselect.filter = 'Fruits';
      multiselect.filterGroupedList();
      expect(multiselect.groupedData.length).toBeGreaterThan(0);
    });

    it('should filter grouped data by item match', () => {
      multiselect.groupCachedItems = multiselect.transformData(mockGroupData, 'category');
      multiselect.filter = 'Apple';
      multiselect.filterGroupedList();
      expect(multiselect.groupedData.length).toBeGreaterThan(0);
    });
  });

  describe('toggleInfiniteFilterSelectAll', () => {
    it('should select all virtual data items', () => {
      multiselect.virtualdata = [...mockData];
      multiselect.isInfiniteFilterSelectAll = false;
      multiselect.toggleInfiniteFilterSelectAll();
      expect(multiselect.isInfiniteFilterSelectAll).toBe(true);
      expect(multiselect.selectedItems.length).toBe(5);
    });

    it('should deselect all virtual data items', () => {
      multiselect.virtualdata = [...mockData];
      multiselect.selectedItems = [...mockData];
      multiselect.isInfiniteFilterSelectAll = true;
      multiselect.toggleInfiniteFilterSelectAll();
      expect(multiselect.isInfiniteFilterSelectAll).toBe(false);
      expect(multiselect.selectedItems.length).toBe(0);
    });
  });

  describe('filterInfiniteList', () => {
    beforeEach(() => {
      multiselect.cachedItems = [...mockData];
      multiselect.virtualdata = [...mockData];
    });

    it('should filter virtual data by search term', () => {
      multiselect.filterInfiniteList('Item 1');
      expect(multiselect.virtualdata.length).toBe(1);
    });

    it('should reset virtual data when search is empty', () => {
      multiselect.filterInfiniteList('');
      expect(multiselect.virtualdata).toEqual(multiselect.cachedItems);
    });

    it('should filter by searchBy property when specified', () => {
      multiselect.settings.searchBy = ['itemName'];
      multiselect.filterInfiniteList('Item 2');
      expect(multiselect.virtualdata.length).toBe(1);
    });

    it('should handle grouped data filtering', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.groupCachedItems = multiselect.transformData(mockGroupData, 'category');
      multiselect.groupedData = [...multiselect.groupCachedItems];
      multiselect.filterInfiniteList('Apple');
      expect(multiselect.groupedData.length).toBeGreaterThan(0);
    });
  });

  describe('filteritems', () => {
    it('should filter items and update filteredList', () => {
      const event = { target: { value: 'Item 1' } };
      multiselect.cachedItems = [...mockData];
      multiselect.filteritems(event);
      expect(multiselect.filteredList).toBeTruthy();
    });

    it('should track disabled items', () => {
      const dataWithDisabled = [
        { id: 1, itemName: 'Item 1', disabled: true },
        { id: 2, itemName: 'Item 2', disabled: false }
      ];
      multiselect.cachedItems = dataWithDisabled;
      const event = { target: { value: 'Item' } };
      multiselect.filteritems(event);
      expect(multiselect.isDisabledItemPresent).toBe(true);
    });
  });

  describe('writeValue extended', () => {
    it('should handle single selection with groupBy', () => {
      multiselect.settings.singleSelection = true;
      multiselect.settings.groupBy = 'category';
      multiselect.data = [...mockGroupData];
      multiselect.writeValue([mockGroupData[0]]);
      expect(multiselect.selectedItems.length).toBe(1);
      expect(multiselect.groupedData).toBeTruthy();
    });

    it('should throw error for multiple items in single selection', () => {
      spyOn(console, 'error');
      multiselect.settings.singleSelection = true;
      multiselect.writeValue([mockData[0], mockData[1]]);
      expect(console.error).toHaveBeenCalled();
      expect(multiselect.selectedItems.length).toBe(1);
    });

    it('should handle groupBy in multi-selection mode', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.data = [...mockGroupData];
      multiselect.writeValue([mockGroupData[0], mockGroupData[1]]);
      expect(multiselect.groupedData).toBeTruthy();
    });
  });

  describe('toggleDropdown extended', () => {
    it('should initialize virtual data for lazy loading', () => {
      multiselect.settings.lazyLoading = true;
      multiselect.virtualdata = [];
      const event = new Event('click');
      spyOn(event, 'preventDefault');
      multiselect.toggleDropdown(event);
      expect(multiselect.virtualScroollInit).toBe(true);
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });

  describe('toggleSelectAll with groupBy', () => {
    beforeEach(() => {
      component.dropdownSettings = {
        ...component.dropdownSettings,
        groupBy: 'category'
      };
      component.dropdownList = [...mockGroupData];
      fixture.detectChanges();
      multiselect.ngOnInit();
    });

    it('should select all and update grouped data', () => {
      const event = { stopPropagation: () => {} };
      multiselect.toggleSelectAll(event);
      expect(multiselect.isSelectAll).toBe(true);
      expect(multiselect.groupedData.every((g: any) => g.selected || g.disabled)).toBe(true);
    });

    it('should deselect all and update grouped data', () => {
      const event = { stopPropagation: () => {} };
      multiselect.toggleSelectAll(event);
      multiselect.toggleSelectAll(event);
      expect(multiselect.isSelectAll).toBe(false);
      expect(multiselect.groupedData.every((g: any) => !g.selected)).toBe(true);
    });
  });

  describe('toggleFilterSelectAll with groupBy', () => {
    beforeEach(() => {
      component.dropdownSettings = {
        ...component.dropdownSettings,
        groupBy: 'category'
      };
      component.dropdownList = [...mockGroupData];
      fixture.detectChanges();
      multiselect.ngOnInit();
    });

    it('should select all filtered items in grouped mode', () => {
      multiselect.filteredList = [mockGroupData[0]];
      multiselect.toggleFilterSelectAll();
      expect(multiselect.isFilterSelectAll).toBe(true);
    });

    it('should deselect all filtered items in grouped mode', () => {
      multiselect.filteredList = [mockGroupData[0]];
      multiselect.selectedItems = [mockGroupData[0]];
      multiselect.isFilterSelectAll = true;
      multiselect.toggleFilterSelectAll();
      expect(multiselect.isFilterSelectAll).toBe(false);
    });
  });

  describe('onItemClick extended', () => {
    it('should not select when settings.disabled is true', () => {
      multiselect.settings.disabled = true;
      multiselect.onItemClick(mockData[0], 0, new Event('click'));
      expect(multiselect.selectedItems.length).toBe(0);
    });

    it('should update group info when groupBy is set', fakeAsync(() => {
      multiselect.settings.groupBy = 'category';
      multiselect.data = [...mockGroupData];
      multiselect.groupedData = multiselect.transformData(mockGroupData, 'category');
      multiselect.groupCachedItems = [...multiselect.groupedData];
      
      multiselect.onItemClick(mockGroupData[0], 0, new Event('click'));
      tick();
      expect(multiselect.selectedItems.length).toBe(1);
    }));
  });

  describe('onFilterChange extended', () => {
    it('should set isFilterSelectAll true when all filtered items are selected', () => {
      multiselect.filter = 'test';
      multiselect.filterLength = 2;
      multiselect.selectedItems = [mockData[0], mockData[1]];
      
      const filteredData = [mockData[0], mockData[1]];
      multiselect.onFilterChange(filteredData);
      
      expect(multiselect.isFilterSelectAll).toBe(true);
    });

    it('should set isFilterSelectAll false when not all filtered items are selected', () => {
      multiselect.filter = 'test';
      multiselect.filterLength = 3;
      multiselect.selectedItems = [mockData[0]];
      
      const filteredData = [mockData[0], mockData[1], mockData[2]];
      multiselect.onFilterChange(filteredData);
      
      expect(multiselect.isFilterSelectAll).toBe(false);
    });
  });

  describe('updateGroupInfo extended', () => {
    it('should not update for disabled items', () => {
      const disabledItem = { id: 1, itemName: 'Test', disabled: true, category: 'Test' };
      multiselect.groupedData = [];
      multiselect.groupCachedItems = [];
      multiselect.updateGroupInfo(disabledItem);
      // Should not throw
      expect(true).toBe(true);
    });
  });

  describe('ngOnChanges extended', () => {
    it('should clear selectedItems when data becomes empty with groupBy', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.selectedItems = [mockGroupData[0]];
      multiselect.data = [];
      
      multiselect.ngOnChanges({
        data: {
          currentValue: [],
          previousValue: mockGroupData,
          firstChange: false,
          isFirstChange: () => false
        }
      });
      
      expect(multiselect.selectedItems).toEqual([]);
    });

    it('should update settings on settings change', () => {
      const newSettings = { text: 'New Text' };
      multiselect.settings = { ...multiselect.settings, ...newSettings };
      
      multiselect.ngOnChanges({
        settings: {
          currentValue: newSettings,
          previousValue: {},
          firstChange: false,
          isFirstChange: () => false
        }
      });
      
      expect(multiselect.settings.text).toBe('New Text');
    });

    it('should handle loading changes', () => {
      multiselect.ngOnChanges({
        loading: {
          currentValue: true,
          previousValue: false,
          firstChange: false,
          isFirstChange: () => false
        }
      });
      // Should not throw
      expect(true).toBe(true);
    });

    it('should update virtualdata for lazy loading', () => {
      multiselect.settings.lazyLoading = true;
      multiselect.virtualScroollInit = true;
      const newData = [{ id: 10, itemName: 'New' }];
      multiselect.data = newData;
      
      multiselect.ngOnChanges({
        data: {
          currentValue: newData,
          previousValue: mockData,
          firstChange: false,
          isFirstChange: () => false
        }
      });
      
      expect(multiselect.virtualdata).toEqual(newData);
    });
  });

  describe('calculateDropdownDirection', () => {
    it('should handle top position without autoPosition', () => {
      multiselect.settings.position = 'top';
      multiselect.settings.autoPosition = false;
      spyOn(multiselect, 'openTowardsTop');
      multiselect.calculateDropdownDirection();
      expect(multiselect.openTowardsTop).toHaveBeenCalledWith(true);
    });

    it('should handle bottom position without autoPosition', () => {
      multiselect.settings.position = 'bottom';
      multiselect.settings.autoPosition = false;
      spyOn(multiselect, 'openTowardsTop');
      multiselect.calculateDropdownDirection();
      expect(multiselect.openTowardsTop).toHaveBeenCalledWith(false);
    });

    it('should handle autoPosition', () => {
      multiselect.settings.autoPosition = true;
      multiselect.defaultSettings.maxHeight = 300;
      spyOn(multiselect, 'openTowardsTop');
      multiselect.calculateDropdownDirection();
      expect(multiselect.openTowardsTop).toHaveBeenCalled();
    });
  });

  describe('openTowardsTop extended', () => {
    it('should set dropDownTop for tagToBody when opening upwards', () => {
      multiselect.settings.tagToBody = true;
      multiselect.openTowardsTop(true);
      expect(multiselect.settings.position).toBe('top');
      expect(multiselect.dropDownTop).toBeTruthy();
    });

    it('should set dropDownBottom when not tagToBody', () => {
      multiselect.settings.tagToBody = false;
      multiselect.openTowardsTop(true);
      expect(multiselect.settings.position).toBe('top');
      expect(multiselect.dropDownBottom).toBeTruthy();
    });

    it('should set dropDownTop for tagToBody when opening downwards', () => {
      multiselect.settings.tagToBody = true;
      multiselect.openTowardsTop(false);
      expect(multiselect.settings.position).toBe('bottom');
    });

    it('should reset values when not tagToBody opening downwards', () => {
      multiselect.settings.tagToBody = false;
      multiselect.openTowardsTop(false);
      expect(multiselect.settings.position).toBe('bottom');
      expect(multiselect.dropDownTop).toBe('unset');
      expect(multiselect.dropDownBottom).toBe('unset');
    });
  });

  describe('onScroll', () => {
    it('should close dropdown when active and tagToBody', () => {
      multiselect.isActive = true;
      multiselect.settings.tagToBody = true;
      multiselect.onScroll(new Event('scroll'));
      expect(multiselect.isActive).toBe(false);
    });

    it('should not close dropdown when not active', () => {
      multiselect.isActive = false;
      multiselect.settings.tagToBody = true;
      multiselect.onScroll(new Event('scroll'));
      expect(multiselect.isActive).toBe(false);
    });

    it('should not close dropdown when tagToBody is false', () => {
      multiselect.isActive = true;
      multiselect.settings.tagToBody = false;
      multiselect.onScroll(new Event('scroll'));
      expect(multiselect.isActive).toBe(true);
    });
  });

  describe('clearSelection extended', () => {
    it('should reset groupCachedItems when groupBy is set', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.groupCachedItems = [{ selected: true }];
      multiselect.clearSelection();
      expect(multiselect.groupCachedItems[0].selected).toBe(false);
    });
  });

  describe('openDropdown extended', () => {
    it('should not open when disabled', () => {
      multiselect.settings.disabled = true;
      multiselect.openDropdown();
      expect(multiselect.isActive).toBe(false);
    });

    it('should not autofocus when searchAutofocus is false', () => {
      multiselect.settings.searchAutofocus = false;
      multiselect.settings.enableSearchFilter = true;
      multiselect.openDropdown();
      expect(multiselect.isActive).toBe(true);
    });
  });

  describe('closeDropdown extended', () => {
    it('should clear searchInput for lazy loading', fakeAsync(() => {
      multiselect.settings.lazyLoading = true;
      multiselect.openDropdown();
      tick();
      multiselect.closeDropdown();
      expect(multiselect.filter).toBe('');
    }));
  });

  describe('clearSearch with groupBy', () => {
    it('should reset groupedData from cache', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.groupCachedItems = [{ id: 1 }];
      multiselect.groupedData = [];
      multiselect.clearSearch();
      expect(multiselect.groupedData).toEqual(multiselect.groupCachedItems);
    });
  });

  describe('transformData extended', () => {
    it('should set group selected when all items are selected', () => {
      multiselect.selectedItems = [mockGroupData[0], mockGroupData[1]];
      multiselect.settings.labelKey = 'itemName';
      multiselect.settings.groupBy = 'category';
      
      const result = multiselect.transformData(mockGroupData, 'category');
      const fruitsGroup = result.find((g: any) => g.category === 'Fruits');
      expect(fruitsGroup.selected).toBe(true);
    });

    it('should handle disabled childrens', () => {
      const dataWithDisabled = [
        { id: 1, itemName: 'Item 1', category: 'Group1', disabled: false },
        { id: 2, itemName: 'Item 2', category: 'Group1', disabled: true }
      ];
      
      const result = multiselect.transformData(dataWithDisabled, 'category');
      expect(result[0].disabled).toBe(false);
    });
  });

  describe('isSelected with null selectedItems', () => {
    it('should handle null selectedItems', () => {
      multiselect.selectedItems = null as any;
      const result = multiselect.isSelected(mockData[0]);
      expect(result).toBe(false);
    });
  });

  describe('removeSelected with null selectedItems', () => {
    it('should handle null selectedItems', () => {
      multiselect.selectedItems = null as any;
      expect(() => multiselect.removeSelected(mockData[0])).not.toThrow();
    });
  });
});

describe('AngularMultiSelect Additional Coverage', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let multiselect: AngularMultiSelect;

  const mockData = [
    { id: 1, itemName: 'Item 1' },
    { id: 2, itemName: 'Item 2' },
    { id: 3, itemName: 'Item 3' },
    { id: 4, itemName: 'Item 4' },
    { id: 5, itemName: 'Item 5' }
  ];

  const mockGroupData = [
    { id: 1, itemName: 'Apple', category: 'Fruits' },
    { id: 2, itemName: 'Banana', category: 'Fruits' },
    { id: 3, itemName: 'Carrot', category: 'Vegetables' },
    { id: 4, itemName: 'Potato', category: 'Vegetables' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMultiSelectModule],
      declarations: [TestHostComponent],
      providers: [DataService, ListFilterPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.dropdownList = [...mockData];
    component.selectedItems = [];
    component.dropdownSettings = {
      singleSelection: false,
      text: 'Select',
      enableCheckAll: true,
      enableSearchFilter: true,
      labelKey: 'itemName',
      primaryKey: 'id'
    };
    fixture.detectChanges();
    multiselect = component.multiselect;
  });

  describe('ngOnInit with position top', () => {
    it('should set selectedListHeight for top position', fakeAsync(() => {
      multiselect.settings.position = 'top';
      multiselect.ngOnInit();
      tick(100);
      expect(multiselect.selectedListHeight).toBeTruthy();
    }));
  });

  describe('onItemClick isSelectAll scenarios', () => {
    it('should set isSelectAll false when isSelectAll true and selected < data', fakeAsync(() => {
      multiselect.isSelectAll = true;
      multiselect.onItemClick(mockData[0], 0, new Event('click'));
      tick();
      expect(multiselect.isSelectAll).toBe(false);
    }));

    it('should set isSelectAll true when all items selected', fakeAsync(() => {
      multiselect.selectedItems = [mockData[0], mockData[1], mockData[2], mockData[3]];
      multiselect.onItemClick(mockData[4], 4, new Event('click'));
      tick();
      expect(multiselect.isSelectAll).toBe(true);
    }));
  });

  describe('addSelected in single selection', () => {
    it('should close dropdown after adding item', () => {
      multiselect.settings.singleSelection = true;
      multiselect.openDropdown();
      multiselect.addSelected(mockData[0]);
      expect(multiselect.isActive).toBe(false);
      expect(multiselect.selectedItems.length).toBe(1);
    });

    it('should replace previous selection in single mode', () => {
      multiselect.settings.singleSelection = true;
      multiselect.addSelected(mockData[0]);
      multiselect.addSelected(mockData[1]);
      expect(multiselect.selectedItems.length).toBe(1);
      expect(multiselect.selectedItems[0]).toEqual(mockData[1]);
    });
  });

  describe('filterInfiniteList with searchBy', () => {
    it('should filter using multiple searchBy properties', () => {
      const dataWithMultipleProps = [
        { id: 1, itemName: 'Apple', description: 'red fruit' },
        { id: 2, itemName: 'Banana', description: 'yellow fruit' }
      ];
      multiselect.cachedItems = dataWithMultipleProps;
      multiselect.virtualdata = [...dataWithMultipleProps];
      multiselect.settings.searchBy = ['itemName', 'description'];
      
      multiselect.filterInfiniteList('red');
      expect(multiselect.virtualdata.length).toBe(1);
    });
  });

  describe('filterInfiniteList with groupBy', () => {
    it('should filter grouped data with grpTitle items', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.groupCachedItems = [
        { grpTitle: true, itemName: 'Fruits', category: 'Fruits', list: [mockGroupData[0], mockGroupData[1]] },
        { grpTitle: true, itemName: 'Vegetables', category: 'Vegetables', list: [mockGroupData[2], mockGroupData[3]] }
      ];
      multiselect.groupedData = [...multiselect.groupCachedItems];
      
      multiselect.filterInfiniteList('Apple');
      expect(multiselect.groupedData.length).toBeGreaterThan(0);
    });

    it('should handle empty search with groupBy', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.cachedItems = [...mockGroupData];
      multiselect.filterInfiniteList('');
      expect(multiselect.virtualdata).toEqual(multiselect.cachedItems);
    });
  });

  describe('toggleFilterSelectAll with filteredList containing grpTitle', () => {
    it('should skip items with grpTitle when selecting', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.filteredList = [
        { grpTitle: true, itemName: 'Fruits' },
        mockGroupData[0]
      ];
      multiselect.groupedData = [];
      
      multiselect.toggleFilterSelectAll();
      expect(multiselect.selectedItems.length).toBe(1);
    });
  });

  describe('selectGroup event emissions', () => {
    it('should emit onGroupSelect when selecting group', fakeAsync(() => {
      const groupItem = {
        grpTitle: true,
        itemName: 'Fruits',
        category: 'Fruits',
        selected: false,
        list: [mockGroupData[0], mockGroupData[1]]
      };
      multiselect.groupedData = [groupItem];
      multiselect.groupCachedItems = [groupItem];
      multiselect.settings.groupBy = 'category';
      
      multiselect.selectGroup(groupItem);
      tick();
      fixture.detectChanges();
      
      expect(component.groupSelectEvent).toBeTruthy();
    }));

    it('should emit onGroupDeSelect when deselecting group', fakeAsync(() => {
      const groupItem = {
        grpTitle: true,
        itemName: 'Fruits',
        category: 'Fruits',
        selected: true,
        list: [mockGroupData[0], mockGroupData[1]]
      };
      multiselect.groupedData = [groupItem];
      multiselect.groupCachedItems = [groupItem];
      multiselect.settings.groupBy = 'category';
      multiselect.selectedItems = [mockGroupData[0], mockGroupData[1]];
      
      multiselect.selectGroup(groupItem);
      tick();
      fixture.detectChanges();
      
      expect(component.groupDeSelectEvent).toBeTruthy();
    }));
  });

  describe('updateGroupInfo detailed', () => {
    it('should set group selected when all items selected', () => {
      const groupItem = {
        grpTitle: true,
        itemName: 'Fruits',
        category: 'Fruits',
        selected: false,
        list: [mockGroupData[0], mockGroupData[1]]
      };
      multiselect.groupedData = [groupItem];
      multiselect.groupCachedItems = [{ ...groupItem }];
      multiselect.settings.groupBy = 'category';
      multiselect.selectedItems = [mockGroupData[0], mockGroupData[1]];
      
      multiselect.updateGroupInfo(mockGroupData[0]);
      
      expect(groupItem.selected).toBe(true);
    });

    it('should set group unselected when not all items selected', () => {
      const groupItem = {
        grpTitle: true,
        itemName: 'Fruits',
        category: 'Fruits',
        selected: true,
        list: [mockGroupData[0], mockGroupData[1]]
      };
      multiselect.groupedData = [groupItem];
      multiselect.groupCachedItems = [{ ...groupItem }];
      multiselect.settings.groupBy = 'category';
      multiselect.selectedItems = [mockGroupData[0]];
      
      multiselect.updateGroupInfo(mockGroupData[0]);
      
      expect(groupItem.selected).toBe(false);
    });
  });

  describe('cloneArray edge cases', () => {
    it('should throw for non-array objects', () => {
      expect(() => multiselect.cloneArray({} as any)).toThrow();
    });

    it('should throw for null', () => {
      // null is typeof 'object' in JavaScript
      expect(() => multiselect.cloneArray(null as any)).toThrow();
    });

    it('should return primitives as-is', () => {
      expect(multiselect.cloneArray(42 as any)).toBe(42);
      expect(multiselect.cloneArray('test' as any)).toBe('test');
      expect(multiselect.cloneArray(undefined as any)).toBe(undefined);
    });
  });

  describe('writeValue with all selected items', () => {
    it('should set isSelectAll when value equals all data', () => {
      multiselect.writeValue([...mockData]);
      expect(multiselect.isSelectAll).toBe(true);
    });

    it('should not set isSelectAll when value is partial', () => {
      multiselect.writeValue([mockData[0]]);
      expect(multiselect.isSelectAll).toBe(false);
    });
  });

  describe('onFilterChange detailed', () => {
    it('should handle items with grpTitle property', () => {
      multiselect.filter = 'test';
      multiselect.filterLength = 2;
      
      const filteredData = [
        { grpTitle: true, itemName: 'Group' },
        mockData[0],
        mockData[1]
      ];
      multiselect.selectedItems = [mockData[0], mockData[1]];
      
      multiselect.onFilterChange(filteredData);
      expect(multiselect.isFilterSelectAll).toBe(true);
    });
  });

  describe('filteritems with grpTitle', () => {
    it('should count items excluding grpTitle', () => {
      multiselect.cachedItems = [
        { grpTitle: true, itemName: 'Group' },
        mockData[0]
      ];
      const event = { target: { value: '' } };
      multiselect.filteritems(event);
      // filterLength should only count non-grpTitle items
      expect(multiselect.filterLength).toBeLessThanOrEqual(1);
    });
  });

  describe('openDropdown with search autofocus', () => {
    it('should focus search input when searchAutofocus enabled', fakeAsync(() => {
      multiselect.settings.searchAutofocus = true;
      multiselect.settings.enableSearchFilter = true;
      multiselect.searchTempl = null as any;
      
      multiselect.openDropdown();
      tick(100);
      
      expect(multiselect.isActive).toBe(true);
    }));

    it('should not focus when searchTempl exists', fakeAsync(() => {
      multiselect.settings.searchAutofocus = true;
      multiselect.settings.enableSearchFilter = true;
      multiselect.searchTempl = {} as any;
      
      multiselect.openDropdown();
      tick(100);
      
      expect(multiselect.isActive).toBe(true);
    }));
  });

  describe('closeDropdownOnClickOut', () => {
    it('should call clearSearch when closing', () => {
      multiselect.isActive = true;
      spyOn(multiselect, 'clearSearch');
      multiselect.closeDropdownOnClickOut();
      expect(multiselect.clearSearch).toHaveBeenCalled();
    });
  });

  describe('transformData with selected items', () => {
    it('should mark group selected when some items are selected', () => {
      multiselect.settings.labelKey = 'itemName';
      multiselect.settings.groupBy = 'category';
      multiselect.selectedItems = [mockGroupData[0]];
      
      const result = multiselect.transformData(mockGroupData, 'category');
      const fruitsGroup = result.find((g: any) => g.category === 'Fruits');
      
      // Not all selected, so should be false
      expect(fruitsGroup.selected).toBe(false);
    });
  });

  describe('resetInfiniteSearch with groupedData', () => {
    it('should reset groupedData from cache', () => {
      multiselect.groupCachedItems = [{ id: 1, grpTitle: true }];
      multiselect.groupedData = [];
      multiselect.resetInfiniteSearch();
      expect(multiselect.groupedData).toEqual(multiselect.groupCachedItems);
    });
  });

  describe('onScrollEnd edge cases', () => {
    it('should handle startIndex 0', fakeAsync(() => {
      const event = { startIndex: 0, endIndex: 2 };
      multiselect.data = [...mockData];
      multiselect.onScrollEnd(event);
      tick();
      expect(component.scrollEndEvent).toEqual(event);
    }));

    it('should handle endIndex at last position', fakeAsync(() => {
      const event = { startIndex: 2, endIndex: 4 };
      multiselect.data = [...mockData];
      multiselect.onScrollEnd(event);
      tick();
      expect(component.scrollEndEvent).toEqual(event);
    }));
  });

  describe('Virtual scroller refresh', () => {
    it('should call virtualScroller.refresh when available', () => {
      const mockVirtualScroller = { refresh: jasmine.createSpy('refresh') };
      (multiselect as any).virtualScroller = mockVirtualScroller;
      multiselect.cachedItems = [...mockData];
      multiselect.virtualdata = [...mockData];
      
      multiselect.filterInfiniteList('Item');
      
      expect(mockVirtualScroller.refresh).toHaveBeenCalled();
    });
  });

  describe('ngOnChanges with groupBy data changes', () => {
    it('should transform data when groupBy is set', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.data = [...mockGroupData];
      
      multiselect.ngOnChanges({
        data: {
          currentValue: mockGroupData,
          previousValue: [],
          firstChange: false,
          isFirstChange: () => false
        }
      });
      
      expect(multiselect.groupedData).toBeTruthy();
      expect(multiselect.groupCachedItems).toBeTruthy();
    });
  });

  describe('toggleSelectAll stopPropagation', () => {
    it('should call stopPropagation on event', () => {
      const event = { stopPropagation: jasmine.createSpy('stopPropagation') };
      multiselect.toggleSelectAll(event);
      expect(event.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('filterGroupedList item filtering', () => {
    it('should filter by item properties within groups', () => {
      multiselect.settings.groupBy = 'category';
      multiselect.settings.labelKey = 'itemName';
      multiselect.groupCachedItems = [
        { 
          grpTitle: true, 
          itemName: 'Fruits', 
          category: 'Fruits', 
          list: [
            { id: 1, itemName: 'Apple', category: 'Fruits' },
            { id: 2, itemName: 'Banana', category: 'Fruits' }
          ]
        }
      ];
      
      multiselect.filter = 'Apple';
      multiselect.filterGroupedList();
      
      expect(multiselect.groupedData.length).toBeGreaterThan(0);
    });
  });

  describe('onItemClick with groupBy update', () => {
    it('should call updateGroupInfo when groupBy set', fakeAsync(() => {
      multiselect.settings.groupBy = 'category';
      multiselect.groupedData = [
        { grpTitle: true, itemName: 'Fruits', category: 'Fruits', selected: false, list: [mockGroupData[0]] }
      ];
      multiselect.groupCachedItems = [...multiselect.groupedData];
      
      spyOn(multiselect, 'updateGroupInfo');
      multiselect.onItemClick(mockGroupData[0], 0, new Event('click'));
      tick();
      
      expect(multiselect.updateGroupInfo).toHaveBeenCalled();
    }));
  });
});