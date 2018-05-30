import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdEurConverterComponent } from './usd-eur-converter.component';

describe('UsdEurConverterComponent', () => {
  let component: UsdEurConverterComponent;
  let fixture: ComponentFixture<UsdEurConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdEurConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdEurConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
