import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSec5Component } from './about-sec5.component';

describe('AboutSec5Component', () => {
  let component: AboutSec5Component;
  let fixture: ComponentFixture<AboutSec5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSec5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSec5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
