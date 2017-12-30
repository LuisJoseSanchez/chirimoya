import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HighlightModule } from 'ngx-highlightjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { PresentationComponent } from './presentation/presentation.component';

import { SlidesService } from './shared/slides.service';
import { SourceCodeComponent } from './source-code/source-code.component';
import { UsdEurConverterComponent } from './usd-eur-converter/usd-eur-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    PresentationComponent,
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
