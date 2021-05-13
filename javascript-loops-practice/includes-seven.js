/* exported includesSeven */
function includesSeven(array) {
  var onlySeven = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      onlySeven.push(array[i]);
    }
  }
  if (onlySeven.length >= 1) {
    return true;
  } else {
    return false;
  }
}
