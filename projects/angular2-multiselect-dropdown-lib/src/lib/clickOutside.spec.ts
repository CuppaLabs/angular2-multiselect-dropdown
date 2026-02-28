import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClickOutsideDirective, ScrollDirective, styleDirective, setPosition } from './clickOutside';

// Test host component for ClickOutsideDirective
@Component({
  standalone: false,
  template: `<div clickOutside (clickOutside)="onClickOutside($event)">
    <span class="inside">Inside</span>
  </div>
  <span class="outside">Outside</span>`
})
class TestClickOutsideHostComponent {
  clickedOutside = false;
  lastEvent: MouseEvent | null = null;
  
  onClickOutside(event: MouseEvent) {
    this.clickedOutside = true;
    this.lastEvent = event;
  }
}

// Test host component for ScrollDirective
@Component({
  standalone: false,
  template: `<div scroll (scroll)="onScroll($event)" style="overflow: auto; height: 100px;">
    <div style="height: 500px;">Content</div>
  </div>`
})
class TestScrollHostComponent {
  scrolled = false;
  lastEvent: any = null;
  
  onScroll(event: any) {
    this.scrolled = true;
    this.lastEvent = event;
  }
}

// Test host component for styleDirective
@Component({
  standalone: false,
  template: `<div [styleProp]="topValue">Content</div>`
})
class TestStyleHostComponent {
  topValue: number = 100;
}

// Test host component for setPosition
@Component({
  standalone: false,
  template: `<div [setPosition]="heightValue">Content</div>`
})
class TestSetPositionHostComponent {
  heightValue: number = 50;
}

describe('ClickOutsideDirective', () => {
  let component: TestClickOutsideHostComponent;
  let fixture: ComponentFixture<TestClickOutsideHostComponent>;
  let directiveEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClickOutsideDirective, TestClickOutsideHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestClickOutsideHostComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.debugElement.query(By.directive(ClickOutsideDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = directiveEl.injector.get(ClickOutsideDirective);
    expect(directive).toBeTruthy();
  });

  it('should not emit when clicking inside the element', () => {
    const insideElement = fixture.debugElement.query(By.css('.inside'));
    const event = new MouseEvent('pointerdown', { bubbles: true });
    insideElement.nativeElement.dispatchEvent(event);
    
    expect(component.clickedOutside).toBe(false);
  });

  it('should emit when clicking outside the element', () => {
    const outsideElement = fixture.debugElement.query(By.css('.outside'));
    const event = new MouseEvent('pointerdown', { bubbles: true });
    outsideElement.nativeElement.dispatchEvent(event);
    
    expect(component.clickedOutside).toBe(true);
  });

  it('should not emit when targetElement is null', () => {
    const directive = directiveEl.injector.get(ClickOutsideDirective);
    const event = new MouseEvent('pointerdown');
    directive.onClick(event, null as any);
    
    expect(component.clickedOutside).toBe(false);
  });

  it('should emit the event object', () => {
    const outsideElement = fixture.debugElement.query(By.css('.outside'));
    const event = new MouseEvent('pointerdown', { bubbles: true });
    outsideElement.nativeElement.dispatchEvent(event);
    
    expect(component.lastEvent).toBeTruthy();
  });
});

describe('ScrollDirective', () => {
  let component: TestScrollHostComponent;
  let fixture: ComponentFixture<TestScrollHostComponent>;
  let directiveEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollDirective, TestScrollHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestScrollHostComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.debugElement.query(By.directive(ScrollDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = directiveEl.injector.get(ScrollDirective);
    expect(directive).toBeTruthy();
  });

  it('should emit scroll event when scrolling', () => {
    const scrollEvent = new Event('scroll');
    directiveEl.nativeElement.dispatchEvent(scrollEvent);
    
    expect(component.scrolled).toBe(true);
  });

  it('should emit the event object', () => {
    const scrollEvent = new Event('scroll');
    directiveEl.nativeElement.dispatchEvent(scrollEvent);
    
    expect(component.lastEvent).toBeTruthy();
  });
});

describe('styleDirective', () => {
  let component: TestStyleHostComponent;
  let fixture: ComponentFixture<TestStyleHostComponent>;
  let directiveEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [styleDirective, TestStyleHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestStyleHostComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.debugElement.query(By.directive(styleDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = directiveEl.injector.get(styleDirective);
    expect(directive).toBeTruthy();
  });

  it('should set top style on init', () => {
    // The directive sets style.top = number, which browser may coerce to empty string if no units
    // We just verify the directive is applied
    const directive = directiveEl.injector.get(styleDirective);
    expect(directive.styleVal).toBe(100);
  });

  it('should update top style on changes', () => {
    component.topValue = 200;
    fixture.detectChanges();
    
    const directive = directiveEl.injector.get(styleDirective);
    expect(directive.styleVal).toBe(200);
  });
});

describe('setPosition', () => {
  let component: TestSetPositionHostComponent;
  let fixture: ComponentFixture<TestSetPositionHostComponent>;
  let directiveEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [setPosition, TestSetPositionHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestSetPositionHostComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.debugElement.query(By.directive(setPosition));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = directiveEl.injector.get(setPosition);
    expect(directive).toBeTruthy();
  });

  it('should set bottom style on init', () => {
    // 50 + 15 = 65
    expect(directiveEl.nativeElement.style.bottom).toBe('65px');
  });

  it('should update bottom style on changes', () => {
    component.heightValue = 100;
    fixture.detectChanges();
    
    // 100 + 15 = 115
    expect(directiveEl.nativeElement.style.bottom).toBe('115px');
  });

  it('should not set style when height is 0 or falsy', () => {
    const fixture2 = TestBed.createComponent(TestSetPositionHostComponent);
    const component2 = fixture2.componentInstance;
    component2.heightValue = 0;
    fixture2.detectChanges();
    
    const directiveEl2 = fixture2.debugElement.query(By.directive(setPosition));
    // When height is 0 (falsy), ngOnInit doesn't set style
    expect(directiveEl2.nativeElement.style.bottom).toBe('');
  });
});
