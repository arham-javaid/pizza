import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSec5Component } from './pizza-sec5.component';

describe('PizzaSec5Component', () => {
  let component: PizzaSec5Component;
  let fixture: ComponentFixture<PizzaSec5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaSec5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaSec5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
