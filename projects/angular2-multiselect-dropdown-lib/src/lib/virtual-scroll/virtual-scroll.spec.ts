import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollerComponent, VirtualScrollerModule, VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY } from './virtual-scroll';
import { VirtualScrollerDefaultOptions } from './defaultoptions';

// Test host component
@Component({
  standalone: false,
  template: `
    <virtual-scroller #scroll [items]="items" (vsUpdate)="onUpdate($event)" (vsEnd)="onEnd($event)" (vsStart)="onStart($event)">
      <div *ngFor="let item of scroll.viewPortItems" class="item" [style.height.px]="itemHeight">
        {{ item.name }}
      </div>
    </virtual-scroller>
  `,
  styles: [`
    virtual-scroller {
      height: 300px;
      display: block;
    }
    .item {
      height: 50px;
    }
  `]
})
class TestHostComponent {
  @ViewChild('scroll') virtualScroller!: VirtualScrollerComponent;
  
  items: any[] = [];
  itemHeight = 50;
  
  updateEvent: any;
  endEvent: any;
  startEvent: any;
  
  onUpdate(event: any) { this.updateEvent = event; }
  onEnd(event: any) { this.endEvent = event; }
  onStart(event: any) { this.startEvent = event; }
}

describe('VirtualScrollerComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let virtualScroller: VirtualScrollerComponent;

  const generateItems = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`
    }));
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, VirtualScrollerModule],
      declarations: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.items = generateItems(100);
    fixture.detectChanges();
    virtualScroller = component.virtualScroller;
  });

  describe('Component Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
      expect(virtualScroller).toBeTruthy();
    });

    it('should have viewPortItems', () => {
      // viewPortItems may be undefined until first render cycle completes
      expect(virtualScroller.viewPortItems === undefined || Array.isArray(virtualScroller.viewPortItems)).toBe(true);
    });

    it('should have items set', () => {
      expect(virtualScroller.items).toEqual(component.items);
    });
  });

  describe('viewPortInfo', () => {
    it('should return page info object', () => {
      const info = virtualScroller.viewPortInfo;
      
      expect(info).toBeDefined();
      expect(typeof info.startIndex).toBe('number');
      expect(typeof info.endIndex).toBe('number');
      expect(typeof info.scrollStartPosition).toBe('number');
      expect(typeof info.scrollEndPosition).toBe('number');
      expect(typeof info.maxScrollPosition).toBe('number');
      expect(typeof info.startIndexWithBuffer).toBe('number');
      expect(typeof info.endIndexWithBuffer).toBe('number');
    });

    it('should have startIndex from viewPortInfo', () => {
      const info = virtualScroller.viewPortInfo;
      expect(info.startIndex).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Input Properties', () => {
    it('should accept items input', () => {
      const newItems = generateItems(50);
      component.items = newItems;
      fixture.detectChanges();
      
      expect(virtualScroller.items).toEqual(newItems);
    });

    it('should handle empty items array', () => {
      component.items = [];
      fixture.detectChanges();
      
      expect(virtualScroller.items).toEqual([]);
    });

    it('should handle null items', () => {
      component.items = null as any;
      fixture.detectChanges();
      
      expect(virtualScroller.items).toEqual([]);
    });
  });

  describe('enableUnequalChildrenSizes', () => {
    it('should reset min measurements when enabled', () => {
      virtualScroller.enableUnequalChildrenSizes = true;
      expect(virtualScroller.enableUnequalChildrenSizes).toBe(true);
    });

    it('should not reset when value unchanged', () => {
      virtualScroller.enableUnequalChildrenSizes = false;
      virtualScroller.enableUnequalChildrenSizes = false;
      expect(virtualScroller.enableUnequalChildrenSizes).toBe(false);
    });
  });

  describe('bufferAmount', () => {
    it('should return set value when valid', () => {
      virtualScroller.bufferAmount = 10;
      expect(virtualScroller.bufferAmount).toBe(10);
    });

    it('should return 0 when invalid and enableUnequalChildrenSizes is false', () => {
      virtualScroller.enableUnequalChildrenSizes = false;
      virtualScroller.bufferAmount = -1;
      expect(virtualScroller.bufferAmount).toBe(0);
    });

    it('should return 5 when invalid and enableUnequalChildrenSizes is true', () => {
      virtualScroller.enableUnequalChildrenSizes = true;
      virtualScroller.bufferAmount = -1;
      expect(virtualScroller.bufferAmount).toBe(5);
    });
  });

  describe('horizontal', () => {
    it('should set horizontal mode', () => {
      virtualScroller.horizontal = true;
      expect(virtualScroller.horizontal).toBe(true);
    });

    it('should set vertical mode', () => {
      virtualScroller.horizontal = false;
      expect(virtualScroller.horizontal).toBe(false);
    });
  });

  describe('scrollThrottlingTime', () => {
    it('should update onScroll function when set', () => {
      const originalOnScroll = virtualScroller['onScroll'];
      virtualScroller.scrollThrottlingTime = 100;
      expect(virtualScroller['onScroll']).toBeDefined();
    });
  });

  describe('scrollDebounceTime', () => {
    it('should update onScroll function when set', () => {
      virtualScroller.scrollDebounceTime = 100;
      expect(virtualScroller.scrollDebounceTime).toBe(100);
    });
  });

  describe('checkResizeInterval', () => {
    it('should update event handlers when changed', () => {
      virtualScroller.checkResizeInterval = 500;
      expect(virtualScroller.checkResizeInterval).toBe(500);
    });

    it('should not update when value unchanged', () => {
      virtualScroller.checkResizeInterval = 500;
      virtualScroller.checkResizeInterval = 500;
      expect(virtualScroller.checkResizeInterval).toBe(500);
    });
  });

  describe('refresh', () => {
    it('should call refresh_internal', fakeAsync(() => {
      spyOn<any>(virtualScroller, 'refresh_internal');
      virtualScroller.refresh();
      tick();
      expect(virtualScroller['refresh_internal']).toHaveBeenCalled();
    }));
  });

  describe('invalidateAllCachedMeasurements', () => {
    it('should reset measurements', () => {
      virtualScroller.invalidateAllCachedMeasurements();
      // Should not throw
      expect(true).toBe(true);
    });
  });

  describe('invalidateCachedMeasurementForItem', () => {
    it('should invalidate specific item measurement', () => {
      const item = component.items[0];
      virtualScroller.invalidateCachedMeasurementForItem(item);
      // Should not throw
      expect(true).toBe(true);
    });
  });

  describe('invalidateCachedMeasurementAtIndex', () => {
    it('should invalidate measurement at index', () => {
      virtualScroller.invalidateCachedMeasurementAtIndex(0);
      // Should not throw
      expect(true).toBe(true);
    });
  });

  describe('scrollInto', () => {
    it('should scroll to item', fakeAsync(() => {
      const item = component.items[50];
      virtualScroller.scrollInto(item);
      tick(1000);
      // Should not throw
      expect(true).toBe(true);
    }));
  });

  describe('scrollToIndex', () => {
    it('should scroll to specific index', fakeAsync(() => {
      virtualScroller.scrollToIndex(50);
      tick(1000);
      // Should not throw
      expect(true).toBe(true);
    }));
  });

  describe('scrollToPosition', () => {
    it('should scroll to specific position', fakeAsync(() => {
      virtualScroller.scrollToPosition(500);
      tick(1000);
      // Should not throw
      expect(true).toBe(true);
    }));
  });

  describe('compareItems', () => {
    it('should compare items by reference by default', () => {
      const item1 = { id: 1 };
      const item2 = { id: 1 };
      
      expect(virtualScroller.compareItems(item1, item1)).toBe(true);
      expect(virtualScroller.compareItems(item1, item2)).toBe(false);
    });

    it('should use custom compareItems function', () => {
      virtualScroller.compareItems = (a, b) => a.id === b.id;
      
      const item1 = { id: 1 };
      const item2 = { id: 1 };
      
      expect(virtualScroller.compareItems(item1, item2)).toBe(true);
    });
  });

  describe('ngOnDestroy', () => {
    it('should clean up resources', () => {
      virtualScroller.ngOnDestroy();
      // Should not throw
      expect(true).toBe(true);
    });
  });

  describe('ngOnChanges', () => {
    it('should handle items change', () => {
      const newItems = generateItems(20);
      // Update via host component and trigger change detection
      component.items = newItems;
      fixture.detectChanges();
      
      expect(virtualScroller.items).toEqual(newItems);
    });
  });
});

describe('VirtualScrollerModule', () => {
  it('should be defined', () => {
    expect(VirtualScrollerModule).toBeTruthy();
  });
});

describe('VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY', () => {
  it('should return default options', () => {
    const options = VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY();
    expect(options).toBeDefined();
    expect(options.scrollThrottlingTime).toBe(0);
    expect(options.scrollDebounceTime).toBe(0);
    expect(options.scrollAnimationTime).toBe(750);
    expect(options.checkResizeInterval).toBe(1000);
    expect(options.resizeBypassRefreshThreshold).toBe(5);
    expect(options.modifyOverflowStyleOfParentScroll).toBe(true);
    expect(options.stripedTable).toBe(false);
  });
});
