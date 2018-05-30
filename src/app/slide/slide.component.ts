import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { SlidesService } from '../slides.service';


@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations: [
    trigger('animation', [
      state('rotate', style({ transform: 'rotate(400deg)' })),
      state('invisible', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      state('tiny', style({ transform: 'scale(0.1)'})),
      state('big', style({ transform: 'scale(1)'})),
      state('outOfScreen', style({ transform: 'translateX(1800px)'})),
      state('insideScreen', style({ transform: 'translateX(0px)'})),
      transition('invisible => visible', animate('800ms')),
      transition('invisible => rotate', animate('1000ms')),
      transition('tiny => big', animate('800ms')),
      transition('outOfScreen => insideScreen', animate('800ms')),
      //transition(':enter', [style({ opacity: 0 }), animate('666ms')])
    ])
  ]
})
export class SlideComponent implements OnInit {

  @Input() transition = "";

  slideNumber;
  currentSlideNumber;

  thisIsTheFirstSlide: boolean = false;
  thisIsTheLastSlide: boolean = false;

  visible;

  animationState = 'invisible';

  constructor(
    private slidesService: SlidesService,
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.slideNumber = this.element.nativeElement.slideNumber;
    this.visible = (this.slideNumber === 1);
    this.thisIsTheFirstSlide = (this.slideNumber === 1);
    
    this.animate();

    this.slidesService.currentSlideNumber$.subscribe(
      sn => {
        this.currentSlideNumber = sn;
        this.visible = (this.slideNumber === this.currentSlideNumber);
        this.thisIsTheFirstSlide = (this.slideNumber === 1);
        this.thisIsTheLastSlide = (this.slideNumber === this.slidesService.numberOfSlides);

        this.animate();
      }
    );
  }

  goToPreviousSlide() {
    this.slidesService.goToPreviousSlide();
  }

  goToNextSlide() {
    this.slidesService.goToNextSlide();
  }

  animate() {

    let initialState: string;
    let finalState: string;

    if (this.transition == "") {
      // Get default transition
      this.transition = this.slidesService.getTransition();
    }

    switch(this.transition) {
      case 'fade':
        initialState = 'invisible';
        finalState = 'visible';
        break;
      case 'zoom':
        initialState = 'tiny';
        finalState = 'big';
        break;
      case 'scroll':
        initialState = 'outOfScreen';
        finalState = 'insideScreen';
        break;
    }
      

    if (this.transition != 'none') {
      this.animationState = initialState;
      setTimeout(() => {
        this.animationState = finalState;
        console.log(finalState);
      }, 10);
    }

  }

}
