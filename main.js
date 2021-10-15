const books = [];

const book = function(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead;
}
book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(book){
    books.push(book);
}

const theHobbit = new book("The hobbit", "J.R.R. Tolkien", 293, "not read yet");

addBookToLibrary(theHobbit);
