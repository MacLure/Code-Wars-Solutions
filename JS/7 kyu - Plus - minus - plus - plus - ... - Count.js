function catchSignChange (arr) {
  let switcher = (arr[0] >= 0);
  let counter = 0;
  for (i = 0 ; i < arr.length ; i++ ) {
    if ((arr[i] >= 0) !== switcher) {
      switcher = !switcher;
      counter ++;
    }
  }
  console.log(arr);
  return counter;
}