import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSec4Component } from './menu-sec4.component';

describe('MenuSec4Component', () => {
  let component: MenuSec4Component;
  let fixture: ComponentFixture<MenuSec4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSec4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSec4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
