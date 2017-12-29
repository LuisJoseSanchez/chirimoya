import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  htmlCode = `
  <h1>Hola</h1>
  <p>fistrum pecador</p>
  `;
  
  javaCode = `
  public class HolaMundo { // Clase principal
    public static void main(String[] args) {
      System.out.println("¡Hola mundo!");
    }
  }
  `;

}
