import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { PresentationComponent } from './presentation/presentation.component';

import { SlidesService } from './shared/slides.service';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [SlidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
