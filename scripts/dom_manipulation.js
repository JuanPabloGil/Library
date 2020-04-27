/* global myLibrary, saveArr */
/* eslint no-undef: "error" */
/* eslint no-use-before-define: ["error", { "functions": false }] */

function render(books) {
  let htmlBooks = '';
  books.forEach((book, index) => {
    htmlBooks += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Author: ${book.author}</h6>
          <p class="card-text">Number of Pages ${book.numberPages}</p>

            <button class="btn btn-info readed-book" value="${index}"> Status: ${book.read ? 'Readed' : 'Not reded'} </button>
        </div>
          <button class="btn btn-info delete-book" value="${index}">Delete book</button>
      </div>
      `;
  });

  const containerBooks = document.querySelector('.container-books');
  containerBooks.innerHTML = htmlBooks;
}

function readedListeners() {
  const readedBtns = [...document.querySelectorAll('.readed-book')];
  readedBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const index = event.target.value;
      if (myLibrary[index].read) {
        myLibrary[index].read = false;
      } else {
        myLibrary[index].read = true;
      }
      saveArr(myLibrary);
      render(myLibrary);
      readedListeners();
      deleteListeners();
    });
  });
}

function deleteListeners() {
  const deleteBtns = [...document.querySelectorAll('.delete-book')];
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const index = event.target.value;
      myLibrary.splice(index, 1);
      saveArr(myLibrary);
      render(myLibrary);
      readedListeners();
      deleteListeners();
    });
  });
}
