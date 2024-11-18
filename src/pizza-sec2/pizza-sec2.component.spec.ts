import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSec2Component } from './pizza-sec2.component';

describe('PizzaSec2Component', () => {
  let component: PizzaSec2Component;
  let fixture: ComponentFixture<PizzaSec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaSec2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaSec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
