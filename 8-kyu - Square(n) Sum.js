function squareSum(numbers){
  return  numbers.length > 0 ? 
    numbers.map(n => n*n).reduce((a, b) => a + b) :
    0;
}