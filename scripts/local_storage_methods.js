function saveArr(arr) { // eslint-disable-line no-unused-vars
  window.localStorage.setItem('library', JSON.stringify(arr));
}

function retrieveArr() { // eslint-disable-line no-unused-vars
  let arr = [];
  if (window.localStorage.getItem('library') !== null) arr = JSON.parse(window.localStorage.getItem('library'));
  return arr;
}
