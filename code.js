const container = document.querySelector(".books-container");
const addBtn = document.querySelector(".add-book-btn");
const modalClose = document.querySelector(".modal-header > img");
const modal = document.querySelector("#modal");
const library = [];

// functions

addBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}

const addBookToLibrary = (title, author, pages, read = false) => {
  let book = new Book(title, author, pages, read);
  library.push(book);
  // console.log(library, book)
};

const displayBooks = (books) => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  books.forEach((book) => {
    // console.log(book.info());
    let card = document.createElement("div");
    card.classList.add("card");

    let bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;

    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = `by ${book.author}`;

    let botCon = document.createElement("div");
    botCon.classList.add("book-bot-container");

    let bookPages = document.createElement("div");
    bookPages.classList.add("book-pages");
    bookPages.textContent = book.pages;

    let bookStatus = document.createElement("div");
    bookStatus.classList.add("book-status");
    bookStatus.textContent = book.read ? "read" : "not read";
    botCon.append(bookPages, bookStatus);
    card.append(bookTitle, bookAuthor, botCon);
    container.append(card);
  });
};

// execution

addBookToLibrary("The Babe", "J.R.R. Tolkien", "1234", true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1234");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "1234");
addBookToLibrary("The Potter", "J.R.R. Tolkien", "1234");
// console.log(library)

console.log(container);
displayBooks(library);
