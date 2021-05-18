/* exported isPalindromic */

/*

*************************** PSEUDOCODE ***********************************

- create a new string container to hold the backwards string
- create a new string container to hold string without space
- look through each letter of the string
- if the character isn't a space, add it to the  no space string
- look through each letter of the no space string starting from the end
- add each letter to the new string container
- check if the new string and the old string is the same
- give back true if yes
- give back false if no

**************************************************************************

*/

function isPalindromic(string) {
  var backwardString = '';
  var noSpace = '';

  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      noSpace += string[j];
    }
  }

  for (var i = noSpace.length - 1; i >= 0; i--) {
    backwardString += noSpace[i];
  }
  if (noSpace === backwardString) {
    return true;
  }
  return false;
}
