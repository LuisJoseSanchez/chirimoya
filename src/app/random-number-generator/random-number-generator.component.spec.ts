import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberGeneratorComponent } from './random-number-generator.component';

describe('RandomNumberGeneratorComponent', () => {
  let component: RandomNumberGeneratorComponent;
  let fixture: ComponentFixture<RandomNumberGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNumberGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumberGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
