function maxNumber(n){
  var numString = n.toString()
  var numArray = numString.split('');
  var newNum = numArray.sort((a, b) => b- a);
  return Number(newNum.join(''));
}