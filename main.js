"use strict";

let id = 1;
const books = [];
const library = document.querySelector(".card__container");
const newBookBtn = document.querySelector("#add__book");
const form = document.querySelector(".form__container");
const addBookBtn = document.querySelector("#form__add");
const delBookBtn = document.querySelector("#form__del");

const newTitle = document.querySelector("#book-title");
const newAuthor = document.querySelector("#book-author");
const newPages = document.querySelector("#book-pages");
const newStatus = document.querySelector("#book-status");


const book = function(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = isRead;
}
book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
};


const theHobbit = new book("The hobbit", "J.R.R. Tolkien", 293, "not read yet");
const harryPotter = new book("Harry Potter", "J.K. Rowling", 100, "Plan to read");

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

newBookBtn.addEventListener("click", addBook);
addBookBtn.addEventListener("click", formAdd);
delBookBtn.addEventListener("click", formDel);


//create a new book card
function newCard(title, author, pages, status){
    let card = document.createElement("div");
    card.classList.add("book__card");
    card.setAttribute("id", id++);
    card.innerHTML = `
        <div class="card__grid">
            <div class="card__title">
                <h4>${title}</h4>
            </div>
            <div class="card__author">
                <h4>${author}</h4>
            </div>
            <div class="card__pages">
                <h4>${pages} pages</h4>
            </div>
            <div class="card__status">
                <h4>${status}</h4>
            </div>
        </div>
    `;
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("book__delete", "btn", "delete__btn");
    removeBtn.innerText = "DELETE BOOK!";
    removeBtn.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute("id");
        document.getElementById(id).remove();
    })

    card.appendChild(removeBtn);

    return card;
}

//Add the book to the page and array
function addBookToLibrary(book){
    let newBook = newCard(book.title, book.author, book.pages, book.status)
    library.appendChild(newBook);
    books.push(book);
}

/* const delBook = document.querySelectorAll(".book__delete");
delBook.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        let id = e.target.parentElement.getAttribute("id");
        document.getElementById(id).remove();
    })
}); */

//give functionality to the buttons
function addBook(e){
    form.classList.remove("hidden");
}

function formAdd(e){
    e.preventDefault();
    
    const newBook = new book(newTitle.value, newAuthor.value, newPages.value, newStatus.value);
    
    addBookToLibrary(newBook);
    form.classList.add("hidden");
    resetForm();
}

function formDel(e){
    e.preventDefault();
    form.classList.add("hidden");
    resetForm();
}

function resetForm(){
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
    newStatus.selectedIndex = null;
}