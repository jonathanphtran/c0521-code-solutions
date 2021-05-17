/* exported capitalizeWords */

/*

*************************** PSEUDOCODE ***************************

- lowercase the letters in the string
- create a container for a new string
- capitalize the first letter and add it to the container
- look through the entire string
- capitalize each letter after a space and add them to a container
- if the character is not a space, add the character to the container
- if it is a space
  - add a space
  - uppercase the next letter and add it to the string
  - skip to the next letter
- return the new string

******************************************************************

*/

function capitalizeWords(string) {
  var loweredString = string.toLowerCase();
  var newString = '';
  newString += loweredString[0].toUpperCase();

  for (var i = 1; i < loweredString.length; i++) {
    if (loweredString[i] !== ' ') {
      newString += loweredString[i];
    } else if (loweredString[i] === ' ') {
      newString += ' ';
      newString += loweredString[i + 1].toUpperCase();
      i++;
    }
  }
  return newString;
}
