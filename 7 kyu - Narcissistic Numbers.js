function isNarcissistic(n){
  let digits = n.toString().split('');
  let digitsRaised = [];
  for (i = 0 ; i < digits.length ; i++ ) {
    digitsRaised.push(Math.pow(digits[i], digits.length));
  }
  return (digitsRaised.reduce((a, b) => a + b) === n)
}