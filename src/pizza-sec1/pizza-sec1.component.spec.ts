import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSec1Component } from './pizza-sec1.component';

describe('PizzaSec1Component', () => {
  let component: PizzaSec1Component;
  let fixture: ComponentFixture<PizzaSec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaSec1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
