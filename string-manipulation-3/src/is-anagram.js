/* exported isAnagram */

/*

*************************** PSEUDOCODE ***********************************

- create an empty object
- look through each character of the first string
- if you see a letter for the first time, add it as a property to
  - the object
  - set value to 1
- if it isn't new, increase value by 1
- look through each character of the second string
- if you see a letter that is on the object
  - subtract 1 from the value
- if there is a new letter, add it as a property and set value to 1
- if all values in the object = 0, give back true
- if not, give back false

**************************************************************************

*/

// function isAnagram(firstString, secondString) {

// }
