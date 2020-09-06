export class QuoteConstructor {
    showQuote: boolean;
    constructor(
        public id: number,
        public quoteDescription: string,
        public userName: string,
        public quoteAuthor: string,
        public quoteDay: Date,
        public like: number,
        public dislike: number
    ){
        this.showQuote = false;
    }
}
