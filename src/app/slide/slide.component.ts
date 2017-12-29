import { Component, OnInit, Inject, ElementRef, HostListener } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { SlidesService } from '../shared/slides.service';
import { ViewChild } from '@angular/core/src/metadata/di';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations: [
    trigger('animation',[
      transition(':enter', [style({ opacity: 0 }), animate('666ms')])
    ])
  ]
})
export class SlideComponent implements OnInit {

  slideNumber;
  currentSlideNumber;

  thisIsTheFirstSlide: boolean = false;
  thisIsTheLastSlide: boolean = false;

  visible;

  constructor(
    private slidesService: SlidesService,
    private element: ElementRef) { }

  ngOnInit() {
    this.slideNumber = this.element.nativeElement.slideNumber;
    this.visible = (this.slideNumber === 1);
    this.thisIsTheFirstSlide = (this.slideNumber === 1);
    this.slidesService.currentSlideNumber$.subscribe(
      sn => {
        this.currentSlideNumber = sn;
        this.visible = (this.slideNumber === this.currentSlideNumber);
        this.thisIsTheFirstSlide = (this.slideNumber === 1);
        this.thisIsTheLastSlide = (this.slideNumber === this.slidesService.numberOfSlides);
      }
    );
  }

  goToPreviousSlide() {
    this.slidesService.goToPreviousSlide();
  }

  goToNextSlide() {
    this.slidesService.goToNextSlide();
  }

}
