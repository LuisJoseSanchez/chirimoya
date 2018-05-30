import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  numberOfSlides: number;
  slides;

  currentSlideNumber = 1;
  currentSlideNumber$ = new Subject();

  transition: string;
  
  constructor() { }

  initNumberOfSlides() {
    this.numberOfSlides = document.getElementsByTagName('slide').length;
  }

  loadSlides() {
    this.slides = document.getElementsByTagName('slide');
  }

  setNumbersToSlides() {
    let i = 1;
    for (let slide of this.slides) {
      slide.slideNumber = i++;
    }
  }

  setCurrentSlideNumber(sn: number) {
    this.currentSlideNumber = sn;
    this.currentSlideNumber$.next(sn);
  }

  getCurrentSlideNumber(): Observable<any> {
    return this.currentSlideNumber$;
  }

  setNumberOfSlides(ns: number) {
    this.numberOfSlides = ns;
  }

  goToPreviousSlide() {
    if (this.currentSlideNumber > 1) {
      this.currentSlideNumber--;
    }
    this.currentSlideNumber$.next(this.currentSlideNumber);
  }

  goToNextSlide() {
    if (this.currentSlideNumber < this.numberOfSlides) {
      this.currentSlideNumber++;
    }
    this.currentSlideNumber$.next(this.currentSlideNumber);
  }

  setTransition(t: string) {
    this.transition = t;
  }

  getTransition() {
    return this.transition;
  }
}
