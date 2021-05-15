/* exported takeRight */

/*

******************************* PSEUDOCODE *******************************

- check to see if count is bigger than the array length
  - if yes, give back an empty array
- create a new array
- look through 'count' elements in each array, but starting from the end
- add those elements to the new array
- give back new array

**************************************************************************

*/

function takeRight(array, count) {
  if (count > array.length) return [];
  var newArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
