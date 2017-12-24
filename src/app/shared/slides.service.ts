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

  setCurrentSlideNumber(sn: number) {
    //this.currentSlideNumber = sn;
    //this.showCurrentSlide();
    this.currentSlideNumber = sn;
    this.currentSlideNumber$.next(sn);
  }

  getCurrentSlideNumber(): Observable<any> {
    return this.currentSlideNumber$;
  }

  setNumberOfSlides(ns: number) {
    this.numberOfSlides = ns;
  }

  /*
  showCurrentSlide() {
    this.hideAllSlides();
    console.log('showCurrentSlide()');
    
    //this.slides[this.currentSlideNumber - 1].hidden = false;
    //document.getElementsByTagName('slide')[0].setAttribute('hidden', 'false');
    console.log(this.slides);
  }*/
/*
  hideAllSlides() {
    //this.loadSlides();
    for (let slide of this.slides) {
      slide.hidden = true;
    }
  }
*/
  goToPreviousSlide() {
    if (this.currentSlideNumber > 1 ) {
      this.currentSlideNumber--;
    }
    this.currentSlideNumber$.next(this.currentSlideNumber);
    //this.showCurrentSlide();
  }

  goToNextSlide() {
    if (this.currentSlideNumber < this.numberOfSlides ) {
      this.currentSlideNumber++;
    }
    this.currentSlideNumber$.next(this.currentSlideNumber);
    console.log('slideService.goToNextSlide() -> this.currentSlideNumber: ' + this.currentSlideNumber);
    //this.showCurrentSlide();
  }
}
