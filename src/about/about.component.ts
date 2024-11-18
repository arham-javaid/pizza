import { Component } from '@angular/core';
import { AboutSec1Component } from '../about-sec1/about-sec1.component';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutSec2Component } from '../about-sec2/about-sec2.component';
import { AboutSec3Component } from '../about-sec3/about-sec3.component';
import { AboutSec4Component } from '../about-sec4/about-sec4.component';
import { AboutSec5Component } from '../about-sec5/about-sec5.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutSec1Component,HeaderComponent,RouterLink,RouterOutlet,AboutSec2Component,AboutSec3Component,AboutSec4Component,AboutSec5Component,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
