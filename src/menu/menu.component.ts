import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuSec1Component } from '../menu-sec1/menu-sec1.component';
import { MenuSec2Component } from '../menu-sec2/menu-sec2.component';
import { MenuSec3Component } from '../menu-sec3/menu-sec3.component';
import { MenuSec4Component } from '../menu-sec4/menu-sec4.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent,MenuSec1Component,MenuSec2Component,MenuSec3Component,MenuSec4Component,FooterComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
