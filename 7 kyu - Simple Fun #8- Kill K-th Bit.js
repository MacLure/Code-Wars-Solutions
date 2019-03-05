function killKthBit(n, k) {
  let binary = n.toString(2).split('')
  binary[binary.length-k] = 0;
  return parseInt(binary.join(''), 2)
}