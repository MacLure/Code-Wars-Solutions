var number = function(busStops){
  let passengers = busStops[0][0] - busStops[0][1];
  for (i = 1 ; i < busStops.length ; i++) {
    passengers += (busStops[i][0] - busStops[i][1]);
  }
  return passengers;
}