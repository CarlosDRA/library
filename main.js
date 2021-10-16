const books = [];
const library = document.querySelector(".card__container");

const book = function(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = isRead;
}
book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
};

function addBookToLibrary(book){
    /* let title = book.title;
    let author = book.author;
    let pages = book.pages;
    let status = book.status; */

    let newBook = newCard(book.title, book.author, book.pages, book.status)
    library.appendChild(newBook);


    books.push(book);
}

const theHobbit = new book("The hobbit", "J.R.R. Tolkien", 293, "not read yet");
const harryPotter = new book("Harry Potter", "J.K. Rowling", 100, "Plan to read");

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

console.log(books)



//Function that creates a new book card
function newCard(title, author, pages, status){
    let card = document.createElement("div");
    let grid = document.createElement("div");
    let btn = document.createElement("button");

    let titleDiv = document.createElement("div");
    let authorDiv = document.createElement("div");
    let pageDiv = document.createElement("div");
    let statusDiv = document.createElement("div");

    let titleText = document.createElement("h4");
    let authorText = document.createElement("h4");
    let pageText = document.createElement("h4");
    let statusText = document.createElement("h4");

    card.classList.add("book__card");
    grid.classList.add("card__grid");
    btn.classList.add("book__delete" ,"btn" ,"delete__btn");
    titleDiv.classList.add("card__title");
    authorDiv.classList.add("card__author");
    pageDiv.classList.add("card__pages");
    statusDiv.classList.add("card__status");

    titleText.innerText = title;
    authorText.innerText = author;
    pageText.innerText = `${pages} pages`;
    statusText.innerText = status;
    btn.innerText = "DELETE BOOK!";

    titleDiv.appendChild(titleText);
    authorDiv.appendChild(authorText);
    pageDiv.appendChild(pageText);
    statusDiv.appendChild(statusText);

    grid.append(titleDiv, authorDiv, pageDiv, statusDiv);
    card.append(grid, btn);

    return card;
}

