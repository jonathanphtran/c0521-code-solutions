/* exported isAnagram */

/*

*************************** PSEUDOCODE ***********************************

- create an empty object
- look through each character of the first string
- if you see a letter for the first time, add it as a property to
  - the object
  - set value to 1
- if it isn't new, increase value by 1
- look through each character of the second string
- if you see a letter that is on the object
  - subtract 1 from the value
- if there is a new letter, add it as a property and set value to 1
- set all space properties to 0
- if any value isn't 0, give back false
- if they are all 0, give back true
-

**************************************************************************

*/

function isAnagram(firstString, secondString) {
  var counter = {};

  for (var i = 0; i < firstString.length; i++) {
    if (!counter[firstString[i]]) {
      counter[firstString[i]] = 1;
    } else {
      counter[firstString[i]]++;
    }
  }

  for (var j = 0; j < secondString.length; j++) {
    if (!counter[secondString[j]]) {
      counter[secondString[j]] = 1;
    } else {
      counter[secondString[j]]--;
    }
  }

  counter[' '] = 0;

  for (var key in counter) {
    if (counter[key] !== 0) {
      return false;
    }
  }
  return true;
}
