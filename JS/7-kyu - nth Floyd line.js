function nthFloyd(n){

  let count = 1;
  let row = 0;

  for (i = count ; count <= n ; i++) {
    count += i;
    row ++;
    }
  return (row);
}