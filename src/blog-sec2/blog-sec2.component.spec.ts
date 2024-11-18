import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSec2Component } from './blog-sec2.component';

describe('BlogSec2Component', () => {
  let component: BlogSec2Component;
  let fixture: ComponentFixture<BlogSec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSec2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
