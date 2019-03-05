function gameWinners(gryffindor, slytherin) {
  let gPoints = gryffindor[0] + (gryffindor[1] === 'yes' ? 150 : 0);
  let sPoints = slytherin[0] + (slytherin[1] === 'yes' ? 150 : 0);

  if (gPoints === sPoints) return "It's a draw!";
  if (gPoints > sPoints) return "Gryffindor wins!";
  if (gPoints < sPoints) return "Slytherin wins!"; 
};