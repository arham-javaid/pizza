import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSec1Component } from './blog-sec1.component';

describe('BlogSec1Component', () => {
  let component: BlogSec1Component;
  let fixture: ComponentFixture<BlogSec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSec1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
