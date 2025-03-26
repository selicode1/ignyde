import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      const isHidden = menu.classList.contains('translate-x-full');
      if (isHidden) {
        menu.classList.remove('translate-x-full');
        menu.classList.add('translate-x-0');
      } else {
        menu.classList.add('translate-x-full');
        menu.classList.remove('translate-x-0');
      }
    }
  }
}
