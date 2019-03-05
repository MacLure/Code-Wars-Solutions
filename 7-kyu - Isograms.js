function isIsogram(str){
  let strUpperCase = str.toUpperCase();
  let uniqueChars = '';
  for (i = 0; i < strUpperCase.length ; i++) {
    if (uniqueChars.includes(strUpperCase[i])) {
      return false;
    }
    uniqueChars += strUpperCase[i];
  }
  return true;   
}