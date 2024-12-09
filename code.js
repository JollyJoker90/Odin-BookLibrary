const library = [];




function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? "read" : "not read yet"}`
    }
}

const addBookToLibrary = (title, author, pages) => {
    let book = new Book(title, author, pages)
    library.push(book);
}

// const bo = new Book("The Hobbit", "J.R.R. Tolkien", "1234", false)
// console.log(bo.info());

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "1234")
console.log(library)