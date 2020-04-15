// localStorage methods
function saveArr(arr) {
  window.localStorage.setItem('library', JSON.stringify(arr));
}

function retrieveArr() {
  let arr = [];
  if (window.localStorage.getItem('library') !== null) arr = JSON.parse(window.localStorage.getItem('library'));
  return arr;
}

const myLibrary = retrieveArr();

// validate methods
function validateTitle(title) {
  if (title.length >= 5) {
    return (true);
  }
  return (false);
}

function validateAuthor(author) {
  if (author.length >= 3) {
    return (true);
  }
  return (false);
}

function validatePages(number) {
  if (number >= 30) {
    return true;
  }
  return false;
}

// constructor
function Book(title, nP, author, read) {
  this.author = author;
  this.title = title;
  this.numberPages = nP;
  this.read = read;
}

// show methods
function render(books) {
  let htmlBooks = '';
  books.forEach((book, index) => {
    htmlBooks += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Author: ${book.author}</h6>
          <p class="card-text">Number of Pages ${book.numberPages}</p>

            <button class="btn btn-info" onclick="readedBook(${index})"> Status: ${book.read ? 'Readed' : 'Not reded'} </button>

        </div>
          <button class="btn btn-info" onclick="deleteBook(${index})">Delete book</button>
      </div>
      `;
  });

  const containerBooks = document.querySelector('.container-books');
  containerBooks.innerHTML = htmlBooks;
}

// changing methods
function addBookToLibrary(book) {
  myLibrary.push(book);
  saveArr(myLibrary);
  render(myLibrary);
}

// listener to add a book
const button = document.getElementById('button');
button.addEventListener('click', () => {
  const form = document.getElementById('form');
  if (
    validateTitle(form.titleForm.value)
    && validatePages(form.numberForm.value)
    && validateAuthor(form.authorForm.value)
  ) {
    const book = new Book(
      form.titleForm.value,
      form.numberForm.value,
      form.authorForm.value,
      form.readForm.checked,
    );

    addBookToLibrary(book);
  }
});

render(myLibrary);