/* exported numVowels */

/*

*************************** PSEUDOCODE ***************************

- create vowelCounter container
- create an array to hold all vowels
- create a new string as a lowercased version of the old string
- look through each character in the string
- if the character is a vowel, add one to the counter and stop the loop
- return the counter

******************************************************************

*/

function numVowels(string) {
  var vowelCounter = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var loweredString = string.toLowerCase();
  for (var i = 0; i < loweredString.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (loweredString[i] === vowels[j]) {
        vowelCounter++;
        break;
      }
    }
  }
  return vowelCounter;
}
