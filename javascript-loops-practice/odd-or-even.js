/* exported oddOrEven */
function oddOrEven(array) {
  var oddOrEven = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      oddOrEven.push('even');
    } else {
      oddOrEven.push('odd');
    }
  }
  return oddOrEven;
}
