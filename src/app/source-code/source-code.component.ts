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

  @Input()
  language: string = '';

  constructor() { }

  ngOnInit() { }
}
