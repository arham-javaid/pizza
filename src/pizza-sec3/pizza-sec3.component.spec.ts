import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSec3Component } from './pizza-sec3.component';

describe('PizzaSec3Component', () => {
  let component: PizzaSec3Component;
  let fixture: ComponentFixture<PizzaSec3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaSec3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaSec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
