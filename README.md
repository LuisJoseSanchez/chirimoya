<p align="center">
  <img src="img/chirimoya.svg" width="200">
  <h1 align="center">Chirimoya</h1>
  <h2 align="center">Presentation software based on Angular</h2>
</p>

Chirimoya is a presentation made in Angular that you can use as a template to make your own presentation. Check out the <a target="_blank"  href="https://rawgit.com/LuisJoseSanchez/chirimoya/master/dist/chirimoya/index.html">live demo</a>.

## :clipboard: Requirements

### 1. NodeJS

Download from <https://nodejs.org>

### 2. Angular CLI

```console
sudo npm install -g @angular/cli
```

## :green_book: Instructions

### 1. Download Chirimoya

```console
git clone https://github.com/LuisJoseSanchez/chirimoya.git
```

### 2. Install dependencies

```console
cd chirimoya
npm install
```

### 3. Launch presentation

```console
ng serve
```

Go to <http://localhost:4200/>

### 4. :pencil: Edit `src/app/app.component.html`

Use your favorite editor to modify the file `app.component.html` to make your presentation.

## :triangular_ruler: Format

The format of the presentation is very simple, it starts with `<presentation>` and ends with `</presentation>`. In the middle, you have slides delimited by `<slide>` and `</slide>`. Each slide can be filled with any HTML code.

Example:

```html
<presentation>

  <slide>
    <h1>Chirimoya</h1>
    <h2>Presentation software based on Angular</h2>
  </slide>

  <slide>
    <h1>Slide 2</h1>
    <p>Lorem fistrum de la pradera condemor qué dise usteer diodenoo.</p>
  </slide>

  <slide>
    <h1>Unordered list</h1>
    <ul>
      <li>Benemeritaarapetecan al ataquerl. </li>
      <li>Condemor mamaar.</li>
      <li>No te digo trigo por no llamarte Rodrigor</li>
      <li>A gramenawer de la pradera</li>
    </ul>
  </slide>

</presentation>
```

Chirimoya has [Font Awesome Icons](http://fontawesome.io/icons/) pre-installed.

```html
<slide>
  <h1>Paper plane icon</h1>
  <fa name="paper-plane fa-5x"></fa>
</slide>
```

Code highlight is another feature of Chirimoya thanks to [Angular Highlight.js](https://murhafsousli.github.io/ngx-highlightjs/)

`app.component.html`

```html
  <slide>
    <h1>Code highlight</h1>
    <source-code [code]="javaCode" [language]="'java'"></source-code>
  </slide>
```

`app.component.ts`

```typescript
export class AppComponent {

  javaCode = `
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello world!");
    }
  }
  `;

}
```

There are several types of transition between slides:

* Fade
* Zoom
* Scroll
* None

Default transition is **fade**. Transition type can be set at presentation level and can be overwritten at slide level.

```html
<presentation [transition]="fade">
    
  <slide>
    <p>Fade transition applied</p>
  </slide>
  
  <slide [transition]="zoom">
    <p>Zoom transition applied</p>
  </slide>

  <slide [transition]="scroll">
    <p>Scroll transition applied</p>
  </slide>
</presentation>
```

Given the presentation is an Angular project, you can insert Angular components inside the slides :sunglasses:

```html
<slide>
  <h1>USD-EUR Converter</h1>
  <usd-eur-converter></usd-eur-converter>
</slide>
```

## :wrench: Build the presentation

To build the presentation type the following:

```console
ng build --prod --base-href ./
```

Your presentation will be in `dist` folder. You can launch it by double-clicking on `index.html`

## :clipboard: TODO

* Editable source code inside a slide
* More themes
* More transition types
* Segments

## Thanks

I want to thank the amazing [Angular Málaga community](https://www.meetup.com/es-ES/Angular-Malaga/) for their support and advices.

If you like this repo, please give a :star:
