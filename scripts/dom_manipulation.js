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

function showForm() {
  const form = document.getElementById('hideShow');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}