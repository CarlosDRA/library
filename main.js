"use strict";

let id = 1;
let updateId = 0
const books = [];
const library = document.querySelector(".card__container");
const newBookBtn = document.querySelector("#add__book");
const form = document.querySelector(".form__container");
const update = document.querySelector(".update__container");
const addBookBtn = document.querySelector("#form__add");
const delBookBtn = document.querySelector("#form__del");
const updateBtn = document.querySelector("#update__add");
const delUpdateBtn = document.querySelector("#update__del");

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


const theHobbit = new book("The hobbit", "J.R.R. Tolkien", 293, "Finished");
const harryPotter = new book("Harry Potter", "J.K. Rowling", 100, "Plan to read");

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

newBookBtn.addEventListener("click", addBook);
addBookBtn.addEventListener("click", formAdd);
delBookBtn.addEventListener("click", formDel);
updateBtn.addEventListener("click", updateBook);
delUpdateBtn.addEventListener("click", updateCancel);


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

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn");
    editBtn.innerHTML = `<span class="material-icons">edit</span>`;
    editBtn.addEventListener("click", editBook)

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("book__delete", "btn", "delete__btn");
    removeBtn.innerHTML = `<span class="material-icons">delete_outline</span>`
    removeBtn.addEventListener("click", removeBook)

    card.append(editBtn, removeBtn);
    return card;
}

//Add the book to the page and array
function addBookToLibrary(book){
    let newBook = newCard(book.title, book.author, book.pages, book.status)
    library.appendChild(newBook);
    books.push(book);
}


/* function getId(){

} */

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

function removeBook(e){
    let id;

    if(e.target.nodeName != "BUTTON"){
        id = e.target.parentElement.parentElement.getAttribute("id");
    } else {
        id = e.target.parentElement.getAttribute("id");
    }

    document.getElementById(id).remove();
}

function editBook(e){    
    update.classList.remove("hidden");
    
    let id;
    
    if(e.target.nodeName != "BUTTON"){
        id = e.target.parentElement.parentElement.getAttribute("id");
    } else {
        id = e.target.parentElement.getAttribute("id");
    }

    updateId = parseInt(id);
}

function updateBook(e){
    e.preventDefault();
    const updatable = document.getElementById(updateId);
    const select = document.querySelector("#update-status");
    updatable.firstElementChild.children[3].firstElementChild.textContent = select.value;
    select.selectedIndex = null;
    update.classList.add("hidden");
}

function updateCancel(e){
    e.preventDefault()
    update.classList.add("hidden");
}

function resetForm(){
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
    newStatus.selectedIndex = null;
}