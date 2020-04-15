let myLibrary = [];

function Book(title, nP, author, read) {
  this.author = author;
  this.title = title;
  this.numberPages = nP;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}


console.log(myLibrary);




const button = document.getElementById('button');
button.addEventListener('click', event => {
  const form = document.getElementById('form');
  if (validateTitle(form.titleForm.value) && validatePages(form.numberForm.value)) {
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

const title = 'My book';

const text = `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Author</h6>
    <p class="card-text">Number of Pages</p>
  </div>
</div>`;

const container = document.querySelector('.container');
container.insertAdjacentHTML('beforeend', text);
