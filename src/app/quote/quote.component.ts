import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { QuoteConstructor } from '../quote-constructor';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes: QuoteConstructor[] = [];

  quoteDelete(quotecomplete, index){

    if (quotecomplete) {
      let theDelete: boolean = confirm(`Do you want to delete the quote?`)
      if (theDelete) {
        this.quotes.splice(index, 1);
      }
    }
    
  }

  addQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
    }

  displayQuote(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  qouted: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
