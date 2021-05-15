/* exported chunk */

/*

******************************* PSEUDOCODE *******************************

- if the size is greater than array length, give back an empty array
- create an array container
- create a variable to check size of array
- look through the whole array
- create an array for each chunk
- create an inner loop that looks through the size
- add elements to the chunk array
- subtract 1 from the array length counter
- if the array length counter is 0, break the loop
  - this is to stop adding empty items to the array
- set i so to the index of the first item that hasn't been added yet
- give back the array container

**************************************************************************

*/

function chunk(array, size) {
  if (size > array.length) return [];
  var arrayContainer = [];
  var arrayLengthCounter = array.length;
  for (var i = 0; i < array.length; i++) {
    var chunks = [];
    for (var j = 0; j < size; j++) {
      chunks.push(array[j + i]);
      arrayLengthCounter--;
      if (arrayLengthCounter === 0) {
        break;
      }
    }
    arrayContainer.push(chunks);
    i = i + size - 1;
  }
  return arrayContainer;
}
