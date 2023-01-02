import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
})
export class CarousselComponent implements OnInit {
  slides: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  activeSlide = 0; // La diapositive active par défaut est la première diapositive

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.activeSlide =
      (this.activeSlide - 1 + this.slides.length) % this.slides.length;
  }
}
