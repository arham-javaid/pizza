import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSec2Component } from './about-sec2.component';

describe('AboutSec2Component', () => {
  let component: AboutSec2Component;
  let fixture: ComponentFixture<AboutSec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSec2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
