/* exported difference */

/*

******************************** PSEUDOCODE ********************************

- create two empty arrays
- make copies of the array
- compare the two arrays
  - if there is a match, remove it
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

  for (var i = 0; i < first.length; i++) {
    for (var z = 0; z < second.length; z++) {

      if (first[i] === second[z]) {
        // console.log('first[i]', first[i]);
        // console.log('second[z]', second[z]);
        // console.log('*****************************');

        firstCopy.splice(i, 1);
        secondCopy.splice(z, 1);

      }
    }
  }

  differenceArray = firstCopy.concat(secondCopy);
  return differenceArray;
}
