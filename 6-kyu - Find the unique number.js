function findUniq(arr) {
  var output = arr.sort();
  return (output[0] === output[1]) ? output[output.length-1] : output[0];
}