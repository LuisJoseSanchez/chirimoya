import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit {

  @Input()
  code: string = '';

  constructor() { }

  ngOnInit() {

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
