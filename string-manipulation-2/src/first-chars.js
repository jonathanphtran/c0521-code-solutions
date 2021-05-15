/* exported firstChars */

/*

*************************** PSEUDOCODE ***************************

- create a container to hold the new string
- check to see if the string is empty
  - if yes, give back an empty string
- check to see if the length is bigger then the length of the string
  - if yes, give back the original string
- look through each letter of the string untill you reach the number given
- each loop should add the letter to the container
- give back the new string

******************************************************************

*/

function firstChars(length, string) {
  var newString = '';
  if (string === '') return '';
  if (string.length <= length) return string;
  for (var i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString;
}
