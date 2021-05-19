/* exported difference */

/*

******************************** PSEUDOCODE ********************************

- create an empty array
- create an empty object
- loop through the first array
- add array elements as properties to the object and count how many of each
- loop through the other array
- add array elements as properties to the object and count how many of each
- add properties with a value of 1 to the empty array
- return the empty array

****************************************************************************

*/

function difference(first, second) {
  // var differenceArray = [];
  var counterObj = {};
  for (var i = 0; i < first.length; i++) {
    counterObj[first[i]] = 1;
  }
  for (var j = 0; j < second.length; j++) {
    if (!counterObj[first[j]]) {
      counterObj[first[i]] = 1;
    } else if (counterObj[first[j]]) {
      counterObj[first[i]] = 2;
    }
  }
  return counterObj;
}
