import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BlogSec1Component } from '../blog-sec1/blog-sec1.component';
import { BlogSec2Component } from '../blog-sec2/blog-sec2.component';
import { BlogSec3Component } from '../blog-sec3/blog-sec3.component';
import { BlogSec4Component } from '../blog-sec4/blog-sec4.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderComponent,BlogSec1Component,BlogSec2Component,BlogSec3Component,BlogSec4Component,FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
