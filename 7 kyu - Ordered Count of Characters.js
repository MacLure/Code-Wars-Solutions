var orderedCount = function (text) {
  let output=[]
  let charCounter = {}
  let textArr = text.split('')
  for (i = 0 ; i < textArr.length ; i++) {
    if (!charCounter[textArr[i]]) {
      charCounter[textArr[i]] = 1
    } else {
      charCounter[textArr[i]] += 1
    }
  }
  for (i = 0 ; i < Object.keys(charCounter).length ; i++) {
    output.push([Object.keys(charCounter)[i], Object.values(charCounter)[i]])
  }
  return output;
}