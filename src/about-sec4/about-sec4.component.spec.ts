import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSec4Component } from './about-sec4.component';

describe('AboutSec4Component', () => {
  let component: AboutSec4Component;
  let fixture: ComponentFixture<AboutSec4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSec4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSec4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
