<p align="center">
  <img src="img/chirimoya.svg" width="200">
  <h1 align="center">Chirimoya</h1>
  <h2 align="center">Presentation software based on Angular</h2>
</p>

Chirimoya is a presentation made in Angular that you can use as a template to make your own presentation.

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

### 2. Launch presentation

```console
cd chirimoya
ng serve
```

Go to <http://localhost:4200/>

### 3. :pencil: Edit `src/app/app.component.html`

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

Code highlight is another feature thanks to [Angular Highlight.js](https://murhafsousli.github.io/ngx-highlightjs/)

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

Given the presentation is an Angular project, you can insert Angular components inside the slides :sunglasses:

```html
<slide>
  <h1>USD-EUR Converter</h1>
  <usd-eur-converter></usd-eur-converter>
</slide>
```


## TODO

* More themes
* Several transitions
* Segments

## Thanks

I want to thank the amazing [Angular Málaga community](https://www.meetup.com/es-ES/Angular-Malaga/) for their support and advices.

If you like this repo, please give a :star:
