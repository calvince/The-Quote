import { Component, OnInit} from '@angular/core';
import { Quote} from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
  quote:Quote;
  upvote =0;
  downvote =0;

  title = 'Quotes';
  quotes =[
    new Quote(1, 'No one walks faster than a man who has had a one night stand with an ugly lady','Omonge Junior', 'jalango',new Date(2016, 5,7),0,0),
   
  ]

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    quote.completeDate = new Date (quote.completeDate)
    this.quotes.unshift(quote)
  }
  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm('Do you really want  to delete this quote?')
        if (toDelete){
          this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  like(index){
    this.quotes[index].upvote +=1;
    // console.log(1);
  }
  unlike (index){
    this.quotes[index].downvote +=1;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
