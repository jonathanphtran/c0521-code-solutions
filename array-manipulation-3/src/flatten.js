/* exported flatten */

/*

******************************* PSEUDOCODE *******************************

- create a new array
- look through each element in the array
- check if the element is an array
- if not, add to the array
- if yes, loop through that array and add each element to the array
- give back the new array

**************************************************************************

*/

function flatten(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}
