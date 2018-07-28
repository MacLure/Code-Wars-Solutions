function fakeBin(x){
  var numToString = x.split('');
  var output = [];
  for (i = 0 ; i < numToString.length ; i++) {
    if (numToString[i] >= 5) {
      output.push(1);
    } else {
      output.push(0);
    }
  }
      return output.join('');

}  