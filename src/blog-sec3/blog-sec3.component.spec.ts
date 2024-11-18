import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSec3Component } from './blog-sec3.component';

describe('BlogSec3Component', () => {
  let component: BlogSec3Component;
  let fixture: ComponentFixture<BlogSec3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSec3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
