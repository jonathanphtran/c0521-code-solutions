/* exported difference */

/*

******************************** PSEUDOCODE ********************************

- create an empty array
- create a variable that holds true
- loop through the first array
- compare each element with each element in the second array
- if there is a match, change the true value to false
- if the variable is false, add that element to the empty array
- give back the variable

****************************************************************************

*/

function difference(first, second) {
  var differenceArray = [];
  var match = true;
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.lenght; j++) {
      if (first[i] === second[j]) {
        match = false;
      }
    }
    if (match === false) {
      differenceArray.push(first[i]);
    }
  }
}
