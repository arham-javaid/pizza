import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContactSec1Component } from '../contact-sec1/contact-sec1.component';
import { ContactSec2Component } from '../contact-sec2/contact-sec2.component';
import { ContactSec3Component } from '../contact-sec3/contact-sec3.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,ContactSec1Component,ContactSec2Component,ContactSec3Component,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
