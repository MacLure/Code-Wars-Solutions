function minValue(values){
  return Number(
    Array.from(new Set(values))
    .sort((a, b) => a - b)
    .join(''));
}