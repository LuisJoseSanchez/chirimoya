import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  consoleCode1 = 'git clone https://github.com/LuisJoseSanchez/chirimoya';
  
  consoleCode2 = `
cd chirimoya
npm install
  `;

  consoleCode3 = `ng serve`;

  presentationCode = `  <presentation>
    <slide>
      <h1>My presentation</h1>
      <p>Ese pedazo de ese hombree fistro.</p>
    </slide>

    <slide>
      <p>Lorem ipsum</p>
    </slide>
  </presentation>`;

  htmlCode = `
  <h1>Hello</h1>
  <p>fistrum pecador</p>
  `;
  
  javaCode = `
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello world!");
    }
  }
  `;

  usdEurConverter = `
  <slide>
    <usd-eur-converter></usd-eur-converter>
  </slide>
  `;

}
