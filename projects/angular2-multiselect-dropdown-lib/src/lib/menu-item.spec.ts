import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Item, Badge, Search, TemplateRenderer, CIcon } from './menu-item';
import { CommonModule } from '@angular/common';

// Test host component for Item
@Component({
  standalone: false,
  template: `<c-item><ng-template>Test Content</ng-template></c-item>`
})
class TestItemHostComponent {
  @ViewChild(Item) item!: Item;
}

// Test host component for Badge
@Component({
  standalone: false,
  template: `<c-badge><ng-template>Badge Content</ng-template></c-badge>`
})
class TestBadgeHostComponent {
  @ViewChild(Badge) badge!: Badge;
}

// Test host component for Search
@Component({
  standalone: false,
  template: `<c-search><ng-template>Search Content</ng-template></c-search>`
})
class TestSearchHostComponent {
  @ViewChild(Search) search!: Search;
}

// Test host component for TemplateRenderer
@Component({
  standalone: false,
  template: `
    <ng-template #testTemplate let-data let-item="item">
      <span>{{data?.testValue}} - {{item?.name}}</span>
    </ng-template>
    <c-templateRenderer [data]="templateData" [item]="itemData"></c-templateRenderer>
  `
})
class TestTemplateRendererHostComponent {
  @ViewChild('testTemplate', { static: true }) testTemplate!: TemplateRef<any>;
  templateData: any = { testValue: 'Test', template: null };
  itemData = { name: 'Item Name' };

  ngOnInit() {
    this.templateData.template = this.testTemplate;
  }
}

// Test host component for CIcon
@Component({
  standalone: false,
  template: `<c-icon [name]="iconName"></c-icon>`
})
class TestCIconHostComponent {
  iconName = 'remove';
}

describe('Item Component', () => {
  let component: TestItemHostComponent;
  let fixture: ComponentFixture<TestItemHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Item, TestItemHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestItemHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.item).toBeTruthy();
  });

  it('should have template reference', () => {
    expect(component.item.template).toBeTruthy();
  });
});

describe('Badge Component', () => {
  let component: TestBadgeHostComponent;
  let fixture: ComponentFixture<TestBadgeHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Badge, TestBadgeHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestBadgeHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.badge).toBeTruthy();
  });

  it('should have template reference', () => {
    expect(component.badge.template).toBeTruthy();
  });
});

describe('Search Component', () => {
  let component: TestSearchHostComponent;
  let fixture: ComponentFixture<TestSearchHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Search, TestSearchHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestSearchHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.search).toBeTruthy();
  });

  it('should have template reference', () => {
    expect(component.search.template).toBeTruthy();
  });
});

describe('TemplateRenderer Component', () => {
  let fixture: ComponentFixture<TestTemplateRendererHostComponent>;
  let component: TestTemplateRendererHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateRenderer, TestTemplateRendererHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestTemplateRendererHostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const templateRenderer = fixture.debugElement.query(By.directive(TemplateRenderer));
    expect(templateRenderer).toBeTruthy();
  });

  it('should render template content', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('span'));
    expect(spanElement.nativeElement.textContent).toContain('Test');
    expect(spanElement.nativeElement.textContent).toContain('Item Name');
  });

  it('should destroy view on component destroy', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const templateRenderer = fixture.debugElement.query(By.directive(TemplateRenderer));
    const rendererInstance = templateRenderer.injector.get(TemplateRenderer);
    
    spyOn(rendererInstance.view, 'destroy');
    rendererInstance.ngOnDestroy();
    
    expect(rendererInstance.view.destroy).toHaveBeenCalled();
  });
});

describe('CIcon Component', () => {
  let component: TestCIconHostComponent;
  let fixture: ComponentFixture<TestCIconHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CIcon, TestCIconHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCIconHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render remove icon', () => {
    component.iconName = 'remove';
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg).toBeTruthy();
  });

  it('should render angle-down icon', () => {
    component.iconName = 'angle-down';
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg).toBeTruthy();
  });

  it('should render angle-up icon', () => {
    component.iconName = 'angle-up';
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg).toBeTruthy();
  });

  it('should render search icon', () => {
    component.iconName = 'search';
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg).toBeTruthy();
  });

  it('should render clear icon', () => {
    component.iconName = 'clear';
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg).toBeTruthy();
  });

  it('should not render svg for unknown icon name', () => {
    component.iconName = 'unknown';
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg).toBeNull();
  });
});
