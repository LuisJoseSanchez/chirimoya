import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usd-eur-converter',
  templateUrl: './usd-eur-converter.component.html',
  styleUrls: ['./usd-eur-converter.component.scss']
})
export class UsdEurConverterComponent implements OnInit {

  usd = 0;
  eur = 0;

  constructor() { }

  ngOnInit() {
  }

  updateEuros() {
    this.eur = this.usd * 0.833;
  }

  updateUsd() {
    this.usd = this.eur / 0.833;
  }
}
