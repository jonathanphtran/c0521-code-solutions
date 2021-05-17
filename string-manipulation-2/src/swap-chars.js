/* exported swapChars */

/*

*************************** PSEUDOCODE ***************************

- create a container for the new string
- loop through string and add in characters up to first string
- add in character at second index
- loop through string up to second index
- add in characters
- add in character at first index
- loop through string, starting after second index
- add in the rest of the characters

******************************************************************

*/

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';

  for (var i = 0; i < firstIndex; i++) {
    newString += string[i];
  }
  newString += string[secondIndex];
  for (var j = firstIndex + 1; j < secondIndex; j++) {
    newString += string[j];
  }
  newString += string[firstIndex];
  for (var k = secondIndex + 1; k < string.length; k++) {
    newString += string[k];
  }
  return newString;
}
