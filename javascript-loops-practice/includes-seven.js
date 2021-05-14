/* exported includesSeven */
// function includesSeven(array) {
//   var onlySeven = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === 7) {
//       onlySeven.push(array[i]);
//     }
//   }
//   if (onlySeven.length >= 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

function includesSeven(array) {
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
