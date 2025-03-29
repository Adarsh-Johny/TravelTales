import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NzMenuModule, NzButtonModule, NzIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  hoveredImageMap: { [index: number]: string } = {};

  onHover(index: number, hoverImage: string) {
    this.hoveredImageMap[index] = hoverImage;
  }

  onLeave(index: number) {
    delete this.hoveredImageMap[index];
  }


  scrolling = false;

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    event.preventDefault();

    if (this.scrolling) return;

    this.scrolling = true;

    const container = document.querySelector('.destinations-container');
    const direction = event.deltaY > 0 ? 1 : -1;
    const scrollAmount = window.innerHeight * direction;

    container?.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });

    // Wait for the scroll animation to complete before allowing another
    setTimeout(() => {
      this.scrolling = false;
    }, 1000); // Adjust duration to match scroll animation speed
  }


  scrollDownOneSection() {
    const container = document.querySelector('.destinations-container');
    if (container) {
      container.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  }

  indiaDestinations = [
    {
      name: 'Lakshadweep',
      image: 'assets/lekshadeep_1.jpeg',
      hoverImage: 'assets/lekshadeep_2.jpg',
      cost: '₹18,000 - ₹25,000',
      includes: ['Island tour', 'Boat rides', 'Resort stay', 'Meals']
    },
    {
      name: 'Kashmir',
      image: 'assets/kashmir_1.jpg',
      hoverImage: 'assets/kashmir_2.jpg',
      cost: '₹20,000 - ₹30,000',
      includes: ['Houseboat', 'Gulmarg trip', 'Meals', 'Local guide']
    },
    {
      name: 'Goa',
      image: 'assets/goa_1.jpg',
      hoverImage: 'assets/goa_2.jpg',
      cost: '₹15,000 - ₹22,000',
      includes: ['Beach stay', 'Cruise dinner', 'Bike rental']
    }
  ];

  abroadDestinations = [
    {
      name: 'Thailand',
      image: 'assets/thailand_1.jpg',
      hoverImage: 'assets/thailand_2.jpg',
      cost: '₹40,000 - ₹55,000',
      includes: ['Flights', 'Hotels', 'City tour', 'Night safari']
    },
    {
      name: 'Dubai',
      image: 'assets/dubai_1.jpg',
      hoverImage: 'assets/dubai_2.jpg',
      cost: '₹60,000 - ₹80,000',
      includes: ['Burj Khalifa', 'Desert safari', '4-star hotel', 'Flights']
    },
    {
      name: 'Nepal',
      image: 'assets/nepal_1.jpg',
      hoverImage: 'assets/nepal_2.jpg',
      cost: '₹25,000 - ₹35,000',
      includes: ['Himalaya trek', 'Kathmandu tour', 'Local cuisine']
    }
  ];
}
