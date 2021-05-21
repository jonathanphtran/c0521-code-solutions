/* exported union */

/*

******************************** PSEUDOCODE ********************************

- create a union array
- set 0 to a counter variable
- add all elements in the first array to the empty array
- compare the empty array with the second array
  - if the element doesn't match add one to the counter
  - if the counter is the same length as the union array, push the element
    - then break out of the loop
- give back the array

****************************************************************************

*/

function union(first, second) {
  var unionArray = [];
  var counter = 0;
  for (var i = 0; i < first.length; i++) {
    unionArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    for (var k = 0; k < unionArray.length; k++) {
      if (second[j] !== unionArray[k]) {
        counter++;
      }
      if (counter === unionArray.length) {
        unionArray.push(second[j]);
        counter = 0;
        break;
      }
    }
  }
  return unionArray;
}
