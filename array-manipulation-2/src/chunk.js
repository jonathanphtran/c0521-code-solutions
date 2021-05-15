/* exported chunk */

/*

******************************* PSEUDOCODE *******************************

- if the size is greater than array length, give back an empty array
- create an array container
- look through the whole array
- create an inner loop that looks through the size
- add elements to a new array
- update i by adding size to it and subtracting 1
- if there is an overflow, then
- give back the array container

**************************************************************************

*/

function chunk(array, size) {
  if (size > array.length) return [];
  var arrayContainer = [];
  for (var i = 0; i < array.length; i++) {
    var chunks = [];
    for (var j = 0; j < size; j++) {
      chunks.push(array[j + i]);
    }
    arrayContainer.push(chunks);
    i = i + size - 1;
  }
  // console.log(arrayContainer);
  return arrayContainer;
}

var arr = [false, true, false, true];
chunk(arr, 3);
