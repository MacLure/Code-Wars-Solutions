function lostSheep(friday,saturday,total){
  function returnedSheepCounter(arr) {return arr.length === 0 ? 0 : (arr.reduce((a, b) => a+b))};
  return total - (returnedSheepCounter(friday) + returnedSheepCounter(saturday));
}