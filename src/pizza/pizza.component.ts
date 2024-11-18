import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PizzaSec1Component } from '../pizza-sec1/pizza-sec1.component';
import { PizzaSec2Component } from '../pizza-sec2/pizza-sec2.component';
import { PizzaSec3Component } from '../pizza-sec3/pizza-sec3.component';
import { PizzaSec4Component } from '../pizza-sec4/pizza-sec4.component';
import { PizzaSec5Component } from '../pizza-sec5/pizza-sec5.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [HeaderComponent,PizzaSec1Component,PizzaSec2Component,PizzaSec3Component,PizzaSec4Component,PizzaSec5Component,FooterComponent],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent {

}
