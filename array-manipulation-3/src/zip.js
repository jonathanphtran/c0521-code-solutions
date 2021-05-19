/* exported zip */

/*

******************************** PSEUDOCODE ********************************

- create an empty array
- find the length of each array
- loop up to the legnth of the shorter array
- create an empty array
- add elements from both arrays that share the same index to the array
- add the array to the outside array
- return the outside array

****************************************************************************

*/

function zip(first, second) {
  var zippedArray = [];
  var smallerArray = Math.min(first.length, second.length);
  for (var i = 0; i < smallerArray; i++) {
    var arrayPair = [];
    arrayPair.push(first[i]);
    arrayPair.push(second[i]);
    zippedArray.push(arrayPair);
  }
  return zippedArray;
}
