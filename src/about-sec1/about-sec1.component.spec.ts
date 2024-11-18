import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSec1Component } from './about-sec1.component';

describe('AboutSec1Component', () => {
  let component: AboutSec1Component;
  let fixture: ComponentFixture<AboutSec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSec1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
