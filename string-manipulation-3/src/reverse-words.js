/* exported reverseWords */

/*

*************************** PSEUDOCODE ***********************************

- create a string container
- create a temporary variable that could hold your position in the string
- create another temprary variable that holds the amount of spaces
  - you have moved up since the last space
- look through each character in the string
- set the temporary variable to whever you currently are
- if the character is a space
  - set the other temporary variable to the index
  -starting with where you are, stop when you reach where you were earlier
    - add characters
- change the increment to where you currently are
- if you are at the last index
  - add the remaining letters

**************************************************************************

*/

function reverseWords(string) {
  var reverseWordsString = '';
  var initialIdx = 0;
  var spacesMoved = 0;
  for (var i = 0; i < string.length; i++) {
    initialIdx = i;
    if (string[i] === ' ') {
      for (var j = initialIdx; j > spacesMoved; j--) {
        reverseWordsString += string[j - 1];
      }
      reverseWordsString += ' ';
      spacesMoved = i + 1;
      initialIdx = i;
    }
  }

  for (var k = string.length - 1; k >= spacesMoved; k--) {
    reverseWordsString += string[k];
  }

  return reverseWordsString;
}
