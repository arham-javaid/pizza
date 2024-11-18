import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSec2Component } from './contact-sec2.component';

describe('ContactSec2Component', () => {
  let component: ContactSec2Component;
  let fixture: ComponentFixture<ContactSec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSec2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactSec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
