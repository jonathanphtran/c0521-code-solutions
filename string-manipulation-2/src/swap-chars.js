/* exported swapChars */
/*

*************************** PSEUDOCODE ***************************

- create a container for the new string
- loop through each character in the string
- check to see which character is at the firstIndex
  - save that character in a variable
- check to see which character is at the secondIndex
  - save that character in a variable
- assign the position at the firstIndex the second character
  - save this to a new variable
- assign the position at the secondIndex the first character
  - save this to the same variable
- return the variable

******************************************************************

*/

function swapChars(firstIndex, secondIndex, string) {
  var newString = string;
  var firstChar = '';
  var secondChar = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      firstChar = string[i];
    } else if (i === secondIndex) {
      secondChar = string[i];
    }
    if (firstChar && secondChar) break;
  }
  return newString;
}
