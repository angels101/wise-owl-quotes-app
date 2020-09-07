import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteConstructor } from '../quote-constructor';

@Component({
  selector: 'app-inquote',
  templateUrl: './inquote.component.html',
  styleUrls: ['./inquote.component.css']
})
export class InquoteComponent implements OnInit {


  quoteArray = new QuoteConstructor(0, '', '', '', new Date(), 0, 0 );

  @Output() getForm = new EventEmitter<QuoteConstructor>();

  onSubmit(){
    this.getForm.emit(this.quoteArray);
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
