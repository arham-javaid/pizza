import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSec3Component } from './menu-sec3.component';

describe('MenuSec3Component', () => {
  let component: MenuSec3Component;
  let fixture: ComponentFixture<MenuSec3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSec3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
