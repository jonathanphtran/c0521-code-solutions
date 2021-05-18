/* exported truncate */

/*

*************************** PSEUDOCODE ***************************

- create a new string container
- add string up to index to container
- add in ...
- give back new string

******************************************************************

*/

function truncate(length, string) {
  var truncatedString = '';
  truncatedString = string.slice(0, length);
  truncatedString += '...';
  return truncatedString;
}
