import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Quote} from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  upvote = 0;
  
  like(){
    this.upvote = this.upvote +1;
  }
  unlike (){
    this.upvote = this.upvote -1;
  }
  quoteDelete(complete: boolean){
    this.isComplete.emit(complete)
  }
  constructor() { }
  ngOnInit() {
  }
}
