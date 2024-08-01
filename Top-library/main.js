const myLibrary = [[(author = "test"), (title = "test1"), (pages = "test2"), (haveRead = true)]];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = false;
  }
}

const booksContainer = document.querySelector(".book-container");
const addBook = document.querySelector(".add-book");
const bookForm = document.querySelector("#bookForm");
const titleValue = document.querySelector("#bookTitle");
const authorValue = document.querySelector("#bookAuthor");
const pageValue = document.querySelector("#bookPages");
const haveReadValue = document.querySelector("#haveRead");
const cancelValue = document.querySelector("#cancelBtn");

addBook.addEventListener("click", () => {
  bookForm.showModal();
});

bookForm.addEventListener("submit", () => {
  event.preventDefault();

  const title = titleValue.value;
  const author = authorValue.value;
  const page = pageValue.value;
  const haveRead = haveReadValue.checked;

  if (title && author) {
    const newBook = new Book(title, author, page);
    newBook.haveRead = haveRead;
    myLibrary.push(newBook);

    titleValue.value = "";
    authorValue.value = "";
    pageValue.value = "";
    haveReadValue.checked = false;

    displayLibrary();
  }
  bookForm.close();
});

cancelValue.addEventListener("click", () => {
  titleValue.value = "";
  authorValue = "";
  pageValue = "";
  haveReadValue.checked = false;

  bookForm.close();
});

function displayLibrary() {
  booksContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookDivContainer = document.createElement("div");
    bookDivContainer.style.display = "flex";

    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("data", index);
    bookDiv.textContent = `Book ${index + 1}: ${book.title} by ${book.author}, ${
      book.pages
    } pages.`;

    const bookButtons = document.createElement("div");
    bookButtons.style.marginLeft = "auto";
    bookButtons.style.display = "flex";
    bookButtons.style.gridTemplate = "column";
    bookButtons.style.gap = "10px";

    const bookDel = document.createElement("button");
    bookDel.style.width = "100px";
    bookDel.style.height = "25px";
    bookDel.textContent = "Delete";

    const bookRead = document.createElement("button");
    bookRead.style.width = "100px";
    bookRead.style.height = "25px";
    bookRead.textContent = "Read";

    if (book.haveRead) {
      bookDiv.textContent += " (Read)";
    } else {
      bookDiv.textContent += " (Not Read)";
    }

    bookDel.addEventListener("click", createDeleteHandler());

    bookRead.addEventListener("click", () => {
      book.haveRead = true;
      displayLibrary();
    });

    booksContainer.appendChild(bookDivContainer);
    bookDivContainer.appendChild(bookDiv);
    bookDivContainer.appendChild(bookButtons);
    bookButtons.appendChild(bookDel);
    bookButtons.appendChild(bookRead);
  });
}

function createDeleteHandler(index) {
  return (event) => {
    event.preventDefault();
    myLibrary.splice(index, 1);
    displayLibrary();
  };
}

displayLibrary();
