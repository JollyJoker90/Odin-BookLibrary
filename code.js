const container = document.querySelector(".books-container");
const addBtn = document.querySelector(".add-book-btn");
const saveBook = document.querySelector(".save-book");
const modalClose = document.querySelector(".modal-header > img");
const modal = document.querySelector("#modal");
const inputs = document.querySelectorAll("input");
const library = [];
let dataIndex = 0;

// functions

addBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  displayBooks(library);
});

modal.addEventListener("submit", (e) => {
  e.preventDefault();
  let title, author, pages, read;
  inputs.forEach((input) => {
    switch (input.id) {
      case "title":
        title = input.value;
        break;
      case "author":
        author = input.value;
        break;
      case "pages":
        pages = input.value;
        break;
      case "read-status":
        read = input.checked;
        break;
    }
  });
  addBookToLibrary(title, author, pages, read);
  modal.reset();
  // console.log(title, author, pages, read);
});

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = dataIndex;
  this.info = () => {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}
// let test;
const toggleReadStatus = (bookID) => {
  // test = library.filter((book) => book.id === bookID)[0];
  const currentBook = library.filter((book) => book.id === bookID)[0];
  currentBook.read = !currentBook.read;
  displayBooks(library);
  console.log(currentBook);
};

const addBookToLibrary = (title, author, pages, read = false) => {
  let book = new Book(title, author, pages, read);
  dataIndex++;
  library.push(book);
};

const deleteBook = (bookID) => {
  library.splice(
    library.findIndex((book) => book.id == bookID),
    1
  );
  displayBooks(library);
};

const displayBooks = (books) => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  books.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("index", book.id);

    let topCon = document.createElement("div");
    topCon.classList.add("book-top-container");

    let bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;

    let bookDelete = document.createElement("img");
    bookDelete.classList.add("book-delete");
    bookDelete.setAttribute("src", "res/delete.svg");
    bookDelete.setAttribute("index", book.id);
    bookDelete.addEventListener("click", (e) => {
      deleteBook(e.target.getAttribute("index"));
    });

    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = `by ${book.author}`;

    let botCon = document.createElement("div");
    botCon.classList.add("book-bot-container");

    let bookPages = document.createElement("div");
    bookPages.classList.add("book-pages");
    bookPages.textContent = `${book.pages} pages`;

    let bookStatus = document.createElement("div");
    const bookReadText = document.createElement("div");
    const bookReadToggle = document.createElement("img");
    book.read
      ? bookReadToggle.setAttribute("src", "res/toggle-switch.svg")
      : bookReadToggle.setAttribute("src", "res/toggle-switch-off-outline.svg");

    bookStatus.classList.add("book-status-container");
    bookReadText.textContent = book.read ? "read" : "not read";

    bookReadToggle.addEventListener("click", () => {
      toggleReadStatus(book.id);
    });

    bookStatus.append(bookReadText, bookReadToggle);
    topCon.append(bookTitle, bookDelete);
    botCon.append(bookPages, bookStatus);
    card.append(topCon, bookAuthor, botCon);
    container.append(card);
  });
};

// execution

addBookToLibrary("The Babe", "J.R.R. Tolkien", "1234", true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1234");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "1234", true);
addBookToLibrary("The Potter", "J.R.R. Tolkien", "1234");

// console.log(container);
displayBooks(library);
// console.log(inputs[(id = "title")]);
