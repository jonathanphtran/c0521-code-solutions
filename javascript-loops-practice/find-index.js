/* exported findIndex */
function findIndex(array, value) {
  var idx;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      idx = i;
      return idx;
    }
  }
  return -1;
}
