import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSec4Component } from './blog-sec4.component';

describe('BlogSec4Component', () => {
  let component: BlogSec4Component;
  let fixture: ComponentFixture<BlogSec4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSec4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSec4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
