import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SlidesService } from '../shared/slides.service';

@Component({
  selector: 'source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit {

//  slideNumber;
//  visible;
  
  @Input()
  code: string = '';

  constructor(
  //  private slidesService: SlidesService,
  //  private element: ElementRef
  ) { }

  ngOnInit() {
    /*
    console.log('Dentro de source.ts - nativeElement:');
    console.log(this.element.nativeElement);

    this.slideNumber = this.element.nativeElement.slideNumber;
    this.visible = (this.slideNumber === 1);
*/
    /*
    setTimeout(() => {
      const element = document.querySelector('#source-code');
      console.log(element)
      this.sourceCode = element ? element.innerHTML : '';
  
      // Remove Angular classes
      this.sourceCode = this.sourceCode.replace(new RegExp(/\ \_ngcontent\-c\d=""/, 'g') , '');
    }, 2000);
    */
  }
}
