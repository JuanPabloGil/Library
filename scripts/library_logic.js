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

// changing methods
function addBookToLibrary(book) {
  myLibrary.push(book);
  saveArr(myLibrary);
  render(myLibrary);
}
function deleteBook(index) {
  myLibrary.splice(index, 1);
  saveArr(myLibrary);
  render(myLibrary);
}

function readedBook(index) {
  if (myLibrary[index].read) {
    myLibrary[index].read = false;
  } else {
    myLibrary[index].read = true;
  }
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