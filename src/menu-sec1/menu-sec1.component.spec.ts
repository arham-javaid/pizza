import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSec1Component } from './menu-sec1.component';

describe('MenuSec1Component', () => {
  let component: MenuSec1Component;
  let fixture: ComponentFixture<MenuSec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSec1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
