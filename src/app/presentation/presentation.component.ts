import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SlidesService } from '../shared/slides.service';

enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  @Input() theme: string;
  @Input() showProgressBar: boolean;
  @Input() cursorType: string;
  @Input() cursorPosition: string;

  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.slidesService.initNumberOfSlides();
    this.slidesService.loadSlides();
    this.slidesService.setNumbersToSlides()
    this.slidesService.setCurrentSlideNumber(1);
    this.applyTheme();

  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.slidesService.goToNextSlide();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.slidesService.goToPreviousSlide();
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
