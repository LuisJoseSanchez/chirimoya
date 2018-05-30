import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SlidesService } from '../slides.service';

enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  SPACE = 32
}

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  @Input() theme: string;
  @Input() transition: string;
  @Input() showProgressBar: boolean;
  @Input() cursorType: string;
  @Input() cursorPosition: string;
  
  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.slidesService.setTransition(this.transition);
    this.slidesService.initNumberOfSlides();
    this.slidesService.loadSlides();
    this.slidesService.setNumbersToSlides();
    //this.slidesService.setNumbersToSourceCode();
    this.slidesService.setCurrentSlideNumber(1);
    this.applyTheme();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch(event.keyCode) {
      case KEY_CODE.RIGHT_ARROW:
      case KEY_CODE.SPACE:
        this.slidesService.goToNextSlide();
        break;
      case KEY_CODE.LEFT_ARROW:
        this.slidesService.goToPreviousSlide();
        break;
      default:
    }
  }

  applyTheme() {
    switch(this.theme) {
      case 'light':
        require("style-loader!./../themes/light.scss");
        break;
      case 'dark':
        require("style-loader!./../themes/dark.scss");
        break;
      default:
        require("style-loader!./../themes/light.scss");
    }
  }
}
