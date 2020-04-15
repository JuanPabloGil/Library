// let myLibrary = [];
//
// function Book(author, title, nP) {
//   this.author = author;
//   this.title = title;
//   this.numberPages = nP;
// }
//
// function addBookToLibrary(author, title, nP) {
//   let newB = new Book(author, title, nP);
//   myLibrary.push();
// }
//
//
// console.log(myLibrary);




const button = document.getElementById('button');
button.addEventListener('click', event => {
  const form = document.getElementById('form');
  if (validateTitle(form.titleForm.value) && validatePages(form.numberPages.value)) {
    const input = {
      title : form.titleForm.value,
      number : form.numberPages.value
    }
    console.log(input);
  }
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
