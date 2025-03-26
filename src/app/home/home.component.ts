import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  testimonials = [
    {
      name: 'Justus Menke',
      position: 'CEO Enoman',
      message: 'Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Jane Doe',
      position: 'CTO TechCorp',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam est qui dolorem ipsum quia dolor sit amet.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael Smith',
      position: 'Founder, XYZ',
      message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      name: 'Justus Menke',
      position: 'CEO Enoman',
      message: 'Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Jane Doe',
      position: 'CTO TechCorp',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam est qui dolorem ipsum quia dolor sit amet.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  currentIndex = 0;
  cardsPerView = 1;
  Math = Math;

  constructor() {
    this.updateCardsPerView();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateCardsPerView();
  }

  updateCardsPerView() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      this.cardsPerView = 3; // Show 3 cards on large screens
    } else if (screenWidth >= 768) {
      this.cardsPerView = 2; // Show 2 cards on tablets
    } else {
      this.cardsPerView = 1; // Show 1 card on mobile
    }
  }

  nextSlide() {
    if (this.currentIndex < this.testimonials.length - this.cardsPerView) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
  
}
