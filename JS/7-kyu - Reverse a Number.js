function reverseNumber(n) {
  let nString = n.toString();
  let output = [];
  for (i = 0 ; i < nString.length ; i++) {
    if (nString[i] !== 0) {
      output.unshift(nString[i])
    }
  }
  if (output[output.length-1] === '-') {
    output.pop();
    output.unshift('-');
  }
return Number(output.join(''))
}