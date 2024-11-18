import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSec2Component } from './menu-sec2.component';

describe('MenuSec2Component', () => {
  let component: MenuSec2Component;
  let fixture: ComponentFixture<MenuSec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSec2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
