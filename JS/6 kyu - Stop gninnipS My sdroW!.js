function spinWords(str){
  let words = str.split(' ');
  let output = [];
  for (let i = 0 ; i < words.length ; i++) {
    if (words[i].length >= 5) {
      output.push(words[i].split('').reverse().join(''));
    } else {
      output.push(words[i]);
    }
  }
  return output.join(' ');
}