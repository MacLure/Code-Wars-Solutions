function count (string) {  
  if (string.length === 0) return {};
  let output = {};
  for (i = 0 ; i < string.length ; i++) {
    if (!output.hasOwnProperty(string[i])) {
      output[string[i]] = 1;
    } else {
    output[string[i]] += 1
    }
  }
  return output;
}