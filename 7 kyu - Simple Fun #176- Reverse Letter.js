function reverseLetter(str) {
  let lettersOnly = /[a-zA-Z]/g;   
  return str.match(lettersOnly).reverse().join('');
}