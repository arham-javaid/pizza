import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isFixed: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Logic to determine if navbar should be fixed
    const headerHeight = 650; // Adjust this value based on your header height
    if (window.pageYOffset > headerHeight) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }
}
