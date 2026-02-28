import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SourceTab } from './sourcetab.component';

describe('SourceTab', () => {
  let component: SourceTab;
  let fixture: ComponentFixture<SourceTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbNavModule],
      declarations: [SourceTab],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have active default to 1', () => {
      expect(component.active).toBe(1);
    });
  });

  describe('Input Properties', () => {
    it('should accept tstitle input', () => {
      component.tstitle = 'TypeScript Code';
      fixture.detectChanges();
      expect(component.tstitle).toBe('TypeScript Code');
    });

    it('should accept htmltitle input', () => {
      component.htmltitle = 'HTML Code';
      fixture.detectChanges();
      expect(component.htmltitle).toBe('HTML Code');
    });

    it('should accept csstitle input', () => {
      component.csstitle = 'CSS Styles';
      fixture.detectChanges();
      expect(component.csstitle).toBe('CSS Styles');
    });

    it('should accept tsgist input', () => {
      component.tsgist = 'const x = 1;';
      fixture.detectChanges();
      expect(component.tsgist).toBe('const x = 1;');
    });

    it('should accept htmlgist input', () => {
      component.htmlgist = '<div>Test</div>';
      fixture.detectChanges();
      expect(component.htmlgist).toBe('<div>Test</div>');
    });

    it('should accept cssgist input', () => {
      component.cssgist = '.class { color: red; }';
      fixture.detectChanges();
      expect(component.cssgist).toBe('.class { color: red; }');
    });
  });

  describe('ngOnInit', () => {
    it('should execute without errors', () => {
      expect(() => component.ngOnInit()).not.toThrow();
    });
  });
});
