function calculate(str) {
  let replacePlus = str.replace(/plus/g, '+');
  let replaceMinus = replacePlus.replace(/minus/g, '-');
return eval(replaceMinus).toString();
}