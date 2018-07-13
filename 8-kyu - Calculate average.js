function find_average(array) {
  var sum = 0;
  for (i = 0 ; i < array.length ; i++) {
    sum += array[i];
  }
    
  return sum / array.length;
}