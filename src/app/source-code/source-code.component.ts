import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit {

  @Input()
  code: string = '';

  @Input()
  language: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
