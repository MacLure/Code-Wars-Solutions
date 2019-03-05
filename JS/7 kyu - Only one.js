function onlyOne() {
  let argList = [];
  for (i = 0 ; i < arguments.length; i++) {
    argList[i] = arguments[i].toString().slice(0,1);
  }
  let sortedList = argList.sort();
  return !(sortedList[0] === sortedList[1] && sortedList[sortedList.length-1] === sortedList[sortedList.length-2]);
}