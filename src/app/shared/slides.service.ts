import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SlidesService {

  //currentSlideNumber: number;
  numberOfSlides: number;
  slides;

  currentSlideNumber = 1;
  currentSlideNumber$ = new Subject();

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

  /*
  setNumbersToSourceCode() {
    let i = 1;
    for (let slide of this.slides) {
      if (slide.source) {
        for (let source of slide.source) {
          source.slideNumber = i;
        }
      }
      i++;
    }
  }*/

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
}
