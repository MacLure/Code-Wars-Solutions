function points(games) {
  let points = 0;
  for (i = 0 ; i < games.length ; i++) {
  console.log(games[i][0], games[i][2]);
    if (games[i][0] > games[i][2]) {
      points += 3;
    }
    else if (games[i][0] === games[i][2]){
      points += 1;
    }
  }
  return points;
}