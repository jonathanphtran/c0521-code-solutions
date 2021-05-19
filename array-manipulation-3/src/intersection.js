/* exported intersection */

/*

******************************** PSEUDOCODE ********************************

- create an empty array
- loop through the first array
- compare each element with each element in the second array
- if there is a match, add that element to the empty array
- give back the array

****************************************************************************

*/

function intersection(first, second) {
  var differenceArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        differenceArray.push(first[i]);
      }
    }
  }
  return differenceArray;
}
