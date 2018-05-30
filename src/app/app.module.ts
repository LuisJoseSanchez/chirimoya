import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SlideComponent } from './slide/slide.component';
import { SourceCodeComponent } from './source-code/source-code.component';
import { UsdEurConverterComponent } from './usd-eur-converter/usd-eur-converter.component';
import { SlidesService } from './slides.service';


@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    SlideComponent,
    SourceCodeComponent,
    UsdEurConverterComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    HighlightModule.forRoot({theme: 'rainbow'}),
    FormsModule
  ],
  providers: [SlidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
