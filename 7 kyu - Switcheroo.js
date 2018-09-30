function switcheroo(x){
  let output = '';
  for (i = 0 ; i < x.length ; i++) {
    if (x[i] === 'a') {output += 'b'}
    else if (x[i] === 'b') {output += 'a'}
    else {output += 'c'}
  }
  return output;
}