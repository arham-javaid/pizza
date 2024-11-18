import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSec1Component } from './contact-sec1.component';

describe('ContactSec1Component', () => {
  let component: ContactSec1Component;
  let fixture: ComponentFixture<ContactSec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSec1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
