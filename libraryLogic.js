let myLibrary = [];

function Book(title, nP, author, read) {
  this.author = author;
  this.title = title;
  this.numberPages = nP;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  render(myLibrary);
}

function deleteBook(index){
  myLibrary.splice(index, 1);
  render(myLibrary);
}

function render(books){
  let htmlBooks = "";
  //arr.forEach(function callback(currentValue, index, array) { // tu iterador }[, thisArg]);
  books.forEach((book,index) => {

    htmlBooks +=  `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Author: ${book.author}</h6>
          <p class="card-text">Number of Pages ${book.numberPages}</p>
        </div>
          <button class="btn btn-info" onclick="deleteBook(${index})">Delete book</button>
      </div>
      ` ;
  });

  const containerBooks = document.querySelector('.container-books');
  containerBooks.innerHTML = htmlBooks;

}

const button = document.getElementById('button');
button.addEventListener('click', event => {
  const form = document.getElementById('form');
  if (validateTitle(form.titleForm.value) && validatePages(form.numberForm.value) && validateAuthor(form.authorForm.value)) {
    const book = new Book(
      form.titleForm.value,
      form.numberForm.value,
      form.authorForm.value,
      form.readForm.checked)

      addBookToLibrary(book);
    }

    console.log(myLibrary);
  });

  function validateTitle(title)
  {
    if (title.length > 5)
    {
      return (true)
    }
    alert("You have entered an invalid title, must be bigger than 5 chars")
    return (false)
  }

  function validateAuthor(author)
  {
    if (author.length > 3)
    {
      return (true)
    }
    alert("You have entered an invalid author, must be bigger than 3 chars")
    return (false)
  }

  function validatePages(number)
  {

    if(number > 30)
    {
      return true;
    }
    else
    {
      alert(" The book must have more than 30 pages ");
      return false;
    }
  }


  function showForm(){
    form = document.getElementById("hideShow");
    if (form.style.display === "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
  }
