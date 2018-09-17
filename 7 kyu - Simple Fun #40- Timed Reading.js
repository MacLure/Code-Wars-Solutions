function timedReading(maxLength, text) {
  let words = /\w+/g;
  let wordArr = text.match(words) !== null ? text.match(words) : [];
  return wordArr.filter( word => word.length <= maxLength).length;
}