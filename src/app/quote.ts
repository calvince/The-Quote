export class Quote {
    showDescription:boolean;
    highlightQuote:boolean;
    constructor(
        public  id:number,
         public description: string,
          public name: string,
          public publisher: string,
           public completeDate: Date,
           public upvote:number,
           public downvote:number
           ){
        this.showDescription = false
        this.highlightQuote = false
    }
}
