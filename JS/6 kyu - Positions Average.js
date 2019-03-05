function posAverage(s) {

  let arr = s.split(/,\W/)
  let positions = 0;
  let matches = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < arr[i].length; k++) {
        if (arr[i][k] === arr[j][k]) matches++
        positions++
      }
    }
  }
  return matches / positions * 100;
}