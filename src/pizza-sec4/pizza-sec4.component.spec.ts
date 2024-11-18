import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSec4Component } from './pizza-sec4.component';

describe('PizzaSec4Component', () => {
  let component: PizzaSec4Component;
  let fixture: ComponentFixture<PizzaSec4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaSec4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaSec4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
