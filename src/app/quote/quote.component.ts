import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    new Quote(1,'Vincent Havard','No pain no gain',new Date(2020,3,14)),
    new Quote(2,'Jacob Wasonga','Be the type of person that you would like to meet.',new Date(2019,6,9)),
    new Quote(3,'Steve Havey','The sadest thing is when you are feeling real down,you realise that there is no shoulder for you to lean on',new Date(2022,1,12)),
    // new Quote(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    // new Quote(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    // new Quote(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];
  quotes: any;
  toggleDetails(index: string | number){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  addNewQuote(quote: { id: any; completeDate: string | number | Date; }){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
