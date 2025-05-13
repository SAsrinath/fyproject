import { Component, OnInit, OnDestroy } from '@angular/core';
import { Slide } from '../slide';
import { CommonModule } from '@angular/common';
;

@Component({
  selector: 'app-slideshow',
  imports :[CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    { image: 'assets/product1.jpg', description: 'TVS Allen Bolt', active: false },
    { image: 'assets/product2.jpg', description: 'Product 2 Description', active: false },
    { image: 'assets/product3.jpg', description: 'Product 3 Description', active: false },
    { image: 'assets/product4.jpg', description: 'Product 4 Description', active: false },
    { image: 'assets/product5.jpg', description: 'Product 5 Description', active: false }
  ];

  currentSlideIndex = 0;
  interval: any;

  ngOnInit() {
    this.showSlides(this.currentSlideIndex);
    this.startSlideshow();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startSlideshow() {
    this.interval = setInterval(() => {
      this.plusSlides(1);
    }, 5000); // Change image every 5 seconds
  }

  plusSlides(n: number) {
    this.showSlides(this.currentSlideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.currentSlideIndex = n);
  }

  showSlides(n: number) {
    if (n >= this.slides.length) {
      this.currentSlideIndex = 0;
    } else if (n < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }

    this.slides.forEach((slide, index) => {
      slide.active = index === this.currentSlideIndex;
    });
  }
}