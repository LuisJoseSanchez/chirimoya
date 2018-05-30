import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-number-generator',
  templateUrl: './random-number-generator.component.html',
  styleUrls: ['./random-number-generator.component.scss']
})
export class RandomNumberGeneratorComponent implements OnInit {

  a = 0;
  b = 0;
  randomNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  generateNumber() {
    this.randomNumber = Math.floor(Math.random() * (this.b - this.a + 1)) + 1;
  }
}
