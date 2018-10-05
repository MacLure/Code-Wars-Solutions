function cumulativeTriangle(n) {
  let rowStartValue = 1;
  let rowNumbers = [];
  for (i = 0 ; i < n ; i++) {
    rowStartValue += i;
  }
  for (i = 0 ; i < n ; i++) {
    rowNumbers.push(rowStartValue + i);
  }
  return rowNumbers.reduce((a, b) => a+b);
}