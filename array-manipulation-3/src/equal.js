/* exported equal */

/*

******************************* PSEUDOCODE *******************************

- check to see if lengths are equal
  - if not equal, give back false
- check to see if both arrays are empty
  - if yes, give back true
- loop through every element in the first array
- compare each element to the corresponding element in the other array
- if they aren't equal, return false
- otherwise return true

**************************************************************************

*/

function equal(first, second) {
  if (first.length !== second.length) return false;
  if (first.length === 0 && second.length === 0) return true;

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
