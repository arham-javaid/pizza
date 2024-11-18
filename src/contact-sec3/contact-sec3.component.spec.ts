import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSec3Component } from './contact-sec3.component';

describe('ContactSec3Component', () => {
  let component: ContactSec3Component;
  let fixture: ComponentFixture<ContactSec3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSec3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactSec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
