import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { MenuComponent } from '../menu/menu.component';
import { PizzaComponent } from '../pizza/pizza.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,title:"Home"},
    {path:"about",component:AboutComponent,title:"About"},
    {path:"menu",component:MenuComponent,title:"Menu"},
    {path:"pizza",component:PizzaComponent,title:"Pizza"},
    {path:"blog",component:BlogComponent,title:"Blog"},
    {path:"contact",component:ContactComponent,title:"Contact Us"}
];
