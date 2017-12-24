import { Component, OnInit, Inject, ElementRef, HostListener } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { SlidesService } from '../shared/slides.service';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
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
    console.log('slide previous');
    this.slidesService.goToPreviousSlide();
    //this.updateVisibility();
  }

  goToNextSlide() {
    console.log('slide next');
    //this.element.nativeElement.hidden = true;
    this.slidesService.goToNextSlide();
    //this.updateVisibility();
  }
/*
  updateVisibility() {
    this.visible = (this.slideNumber === this.slidesService.currentSlideNumber);
  }*/

  /*
   * Resize window to fill screen from:
   * http://www.creativebloq.com/how-to/how-to-build-a-full-page-website-in-angular/4
   */
/*
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  @HostListener('load', ['$event'])
  onLoad(event) {
    this.resize();
  }
*/
  resize() {
    let bgwidth = this.element.nativeElement.width;
    let bgheight = this.element.nativeElement.height;

    let winwidth = window.innerWidth;
    let winheight = window.innerHeight;

    let widthratio = winwidth / bgwidth;
    let heightratio = winheight / bgheight;

    let widthdiff = heightratio * bgwidth;
    let heightdiff = widthratio * bgheight;

    if (heightdiff > winheight) {
      this.element.nativeElement.width = winwidth;
      this.element.nativeElement.height = heightdiff;
    } else {
      this.element.nativeElement.width = widthdiff;
      this.element.nativeElement.height = winheight;
    }
  }
}
