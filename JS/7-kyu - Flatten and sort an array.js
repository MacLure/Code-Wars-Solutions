"use strict";

function flattenAndSort(array) {
  var flatArray = [];
  for (i = 0 ; i < array.length ; i++) {
    flatArray = flatArray.concat(array[i])
  };
  return flatArray.sort((a, b) => a - b);;
}