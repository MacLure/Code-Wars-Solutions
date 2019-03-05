var translate = function(word) {
  if (word.length < 2) return word;
  let pigLatin = word.split('');
  let vowelRegEx = (/^[aeiou]/i);
  if ("aeiouAEIOU".indexOf(pigLatin[0]) === -1) {
    pigLatin.push(pigLatin[0]);
    pigLatin.shift();
  }
  pigLatin.push('a', 'y');
  return pigLatin.join('');
}