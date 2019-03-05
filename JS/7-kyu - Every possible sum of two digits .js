function digits(num){
  let numString = num.toString()
  let resultsArray = [];
  for (i = 0 ; i < numString.length ; i++) {
    for (j = i + 1; j < numString.length ; j++) {
        resultsArray.push(Number(numString[i]) + Number(numString[j]));
    }
  }
  return resultsArray;
}