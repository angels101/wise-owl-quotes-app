import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuoteComponent } from './quote/quote.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';

import { HighlightersDirective } from './highlighters.directive';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    ShowQuoteComponent,
  
    HighlightersDirective,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
