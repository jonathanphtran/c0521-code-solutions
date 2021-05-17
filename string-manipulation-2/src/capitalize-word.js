/* exported capitalizeWord */

/*

*************************** PSEUDOCODE ***************************

- lower case all the letters
- if the word is javascript, give back JavaScript
- create a container for a new string
- capitalize the first letter and add it to the string
- look through the rest of the string
- add the rest of the characters
- return the new string

******************************************************************

*/

function capitalizeWord(word) {
  var loweredString = word.toLowerCase();

  if (loweredString === 'javascript') return 'JavaScript';

  var newString = '';
  newString = loweredString[0].toUpperCase();

  for (var i = 1; i < loweredString.length; i++) {
    newString += loweredString[i];
  }

  return newString;
}
