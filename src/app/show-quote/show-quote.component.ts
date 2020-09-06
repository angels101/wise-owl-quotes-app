import { Component, OnInit, Input } from '@angular/core';
import {} from '../quote-constructor'
import { from } from 'rxjs';
@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {
  
  @Input() quoted: QuoteConstructor;
  @Output() quotecomplete = new EventEmitter<boolean>();
  

  deleteQuote(reader: boolean){
    this.quotecomplete.emit(reader);
  }

  like(){
    this.quoted.like += 1;
  }

  dislike(){
    this.quoted.dislike += 1;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
