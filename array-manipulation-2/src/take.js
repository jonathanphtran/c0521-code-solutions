/* exported take */

/*

******************************* PSEUDOCODE *******************************

- check to see if count is bigger than the array length
  - if yes, give back an empty array
- create a new array
- look through 'count' elements in each array
- add those elements to the new array
- give back new array

**************************************************************************

*/

function take(array, count) {
  if (count > array.length) return [];
  var newArr = [];
  for (var i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
