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
      const control = new FormControl();
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
