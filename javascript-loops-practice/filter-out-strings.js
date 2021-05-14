/* exported filterOutStrings */
function filterOutStrings(values) {
  var nonStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      nonStrings.push(values[i]);
    }
  }
  return nonStrings;
}
