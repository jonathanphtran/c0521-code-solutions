/* exported difference */

/*

******************************** PSEUDOCODE ********************************

- create three empty arrays
- make copies of the array
- compare the two arrays
  - if elements match, remove them from both arrays
- concat the 2 arrays

****************************************************************************

*/

function difference(first, second) {
  var firstCopy = [];
  var secondCopy = [];
  var differenceArray = [];

  for (var j = 0; j < first.length; j++) {
    firstCopy.push(first[j]);
  }
  for (var k = 0; k < second.length; k++) {
    secondCopy.push(second[k]);
  }

  for (var i = 0; i < firstCopy.length; i++) {
    for (var z = 0; z < secondCopy.length; z++) {
      if (firstCopy[i] === secondCopy[z]) {
        firstCopy.splice(i, 1);
        secondCopy.splice(z, 1);
      }
    }
  }

  differenceArray = firstCopy.concat(secondCopy);
  return differenceArray;
}
