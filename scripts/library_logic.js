/* global  render, deleteListeners, readedListeners, retrieveArr, saveArr */
/* eslint no-undef: "error" */

const myLibrary = retrieveArr();

// validate methods
function validateTitle(title) { // eslint-disable-line no-unused-vars
  if (title.length >= 5) {
    return (true);
  }
  return (false);
}

function validateAuthor(author) { // eslint-disable-line no-unused-vars
  if (author.length >= 3) {
    return (true);
  }
  return (false);
}

function validatePages(number) { // eslint-disable-line no-unused-vars
  if (number >= 30) {
    return true;
  }
  return false;
}

// constructor
function Book(title, nP, author, read) { // eslint-disable-line no-unused-vars
  this.author = author;
  this.title = title;
  this.numberPages = nP;
  this.read = read;
}

// set listener to add a book
function addBookToLibrary(book) { // eslint-disable-line no-unused-vars
  myLibrary.push(book);
  saveArr(myLibrary);
  render(myLibrary);
  deleteListeners();
  readedListeners();
}

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

// set listener to hide the form
function showForm() {
  const form = document.getElementById('hideShow');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}
document.getElementById('btn-show-form').addEventListener('click', showForm);

// render and set listeners to delete an read a book
render(myLibrary);
deleteListeners();
readedListeners();
