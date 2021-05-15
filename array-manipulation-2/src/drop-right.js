/* exported dropRight */

/*

******************************* PSEUDOCODE *******************************

- check to see if count is bigger than the array length
  - if yes, give back an empty array
- create a new array
- look through 'count' elements in each array, but end when you reach
  - the length of the array minus count
- add those elements to the new array
- give back new array

**************************************************************************

*/

function dropRight(array, count) {
  if (count > array.length) return [];
  var newArr = [];
  for (var i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
