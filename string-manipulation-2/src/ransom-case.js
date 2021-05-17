/* exported ransomCase */

/*

*********************** PSEUDOCODE ***********************

lower case the original string and put it in a container
create a container for the final string
look at each character in the string
check to see if the index of each string at an even or odd position
if even, keep it lowercased, and add it to the final string
if odd, uppercase it, add it to a container, then add it to the final string
give back the final string

**********************************************************

*/

function ransomCase(string) {
  var loweredString = string.toLowerCase();
  var newWord = '';
  for (var i = 0; i < loweredString.length; i++) {
    if (i % 2 === 0) {
      newWord += loweredString[i];
    } else {
      var upperCasedLetter = '';
      upperCasedLetter = loweredString[i].toUpperCase();
      newWord += upperCasedLetter;
    }
  }
  return newWord;
}
