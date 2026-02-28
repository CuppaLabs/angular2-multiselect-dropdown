import { TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { NEVER, of, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CheckForUpdateService } from './check-for-update.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: any;
  let mockSwUpdate: jasmine.SpyObj<SwUpdate>;
  let versionUpdates$: Subject<VersionReadyEvent>;
  let mockCheckForUpdateService: any;

  beforeEach(waitForAsync(() => {
    versionUpdates$ = new Subject<VersionReadyEvent>();
    mockSwUpdate = jasmine.createSpyObj('SwUpdate', ['activateUpdate'], {
      isEnabled: true,
      versionUpdates: versionUpdates$.asObservable()
    });
    mockSwUpdate.activateUpdate.and.returnValue(Promise.resolve(true));
    mockCheckForUpdateService = {};

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgbNavModule],
      declarations: [AppComponent],
      providers: [
        { provide: SwUpdate, useValue: mockSwUpdate },
        { provide: CheckForUpdateService, useValue: mockCheckForUpdateService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    versionUpdates$.complete();
    fixture.destroy();
  });

  describe('Component Creation', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should have title as "app works!"', () => {
      expect(component.title).toEqual('app works!');
    });

    it('should initialize links array', () => {
      expect(component.links).toBeDefined();
    });

    it('should have currentComponent initialized', () => {
      expect(component.currentComponent).toBeDefined();
    });
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should initialize singleSelectionList', () => {
      expect(component.singleSelectionList).toBeDefined();
      expect(component.singleSelectionList.length).toBe(5);
    });

    it('should initialize singleSelectionselectedItems', () => {
      expect(component.singleSelectionselectedItems).toBeDefined();
      expect(component.singleSelectionselectedItems.length).toBe(1);
    });

    it('should initialize singleSelectionSettings with singleSelection true', () => {
      expect(component.singleSelectionSettings).toBeDefined();
      expect((component.singleSelectionSettings as any).singleSelection).toBe(true);
    });

    it('should initialize basicExampleList', () => {
      expect(component.basicExampleList).toBeDefined();
      expect(component.basicExampleList.length).toBe(6);
    });

    it('should initialize basicExampleSelectedItems', () => {
      expect(component.basicExampleSelectedItems).toBeDefined();
      expect(component.basicExampleSelectedItems.length).toBe(4);
    });

    it('should initialize basicExampleSettings', () => {
      expect(component.basicExampleSettings).toBeDefined();
      expect((component.basicExampleSettings as any).text).toBe('Select Countries');
    });

    it('should initialize groupByExampleList', () => {
      expect(component.groupByExampleList).toBeDefined();
      expect(component.groupByExampleList.length).toBeGreaterThan(0);
    });

    it('should initialize groupByExampleSettings with groupBy property', () => {
      expect(component.groupByExampleSettings).toBeDefined();
      expect((component.groupByExampleSettings as any).groupBy).toBe('category');
    });
  });

  describe('showInfo', () => {
    it('should log the event to console', () => {
      spyOn(console, 'log');
      const testEvent = { test: 'data' };
      component.showInfo(testEvent);
      expect(console.log).toHaveBeenCalledWith(testEvent);
    });
  });

  describe('updateToLatest', () => {
    it('should call activateUpdate', () => {
      // Return a never-resolving promise to prevent document.location.reload()
      mockSwUpdate.activateUpdate.and.returnValue(new Promise(() => {}));
      component.updateToLatest();
      expect(mockSwUpdate.activateUpdate).toHaveBeenCalled();
    });
  });

  describe('Version Updates Subscription', () => {
    it('should have SwUpdate injected', () => {
      expect(component.updates).toBeDefined();
    });
  });
});
