/* exported includes */

/*

******************************* PSEUDOCODE *******************************

- check to see if the array is empty
  - if yes, give back false
- look through each value in the array
- if there is a match, give true, otherwise give back false

**************************************************************************

*/

function includes(array, value) {
  if (array.length === 0) return false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}
