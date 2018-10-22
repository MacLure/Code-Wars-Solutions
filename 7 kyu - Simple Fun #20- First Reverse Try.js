function firstReverseTry(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length == 1) {
    return arr;
  }
  let output = [];
  output.push(arr[arr.length-1]);
  for (i = 1 ; i < arr.length-1 ; i++) {
    output.push(arr[i]);
  }
  output.push(arr[0]);
  return output;
}

firstReverseTry([111])