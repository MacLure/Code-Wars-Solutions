function feast(beast, dish) {
  let beastName = beast.split('');
  let dishName = dish.split('');

  return (beastName[0] === dishName[0] && beastName[beastName.length-1] === dishName[dishName.length-1])
}