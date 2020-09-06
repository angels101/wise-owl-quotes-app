import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuoteComponent } from './quote/quote.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { InquoteComponent } from './inquote/inquote.component';
import { HighlightersDirective } from './highlighters.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    ShowQuoteComponent,
    InquoteComponent,
    HighlightersDirective
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
