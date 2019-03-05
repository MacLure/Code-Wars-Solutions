function snail(column, day, night) {
  let snailProgress = 0;
  for (i = 1 ; i <= column ; i++) {
    snailProgress += day;
    if (snailProgress >= column) {
      return (i);
    }
    snailProgress -= night;
  }
}