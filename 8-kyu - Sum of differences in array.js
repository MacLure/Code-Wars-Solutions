function sumOfDifferences(arr) {
  if (arr.length < 2) {
    return 0
    }; 
  let differences = [];
  let descendingOrder = arr.sort((a, b) => a - b)
  
  for (i = 0 ; i < descendingOrder.length -1 ; i++) {
    differences.push(descendingOrder[i] - descendingOrder[i+1]);
    }
  return Math.abs(differences.reduce((a, b) => a + b));
}