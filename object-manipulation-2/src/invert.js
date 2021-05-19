/* exported invert */

/*

***************************** PSEUDOCODE *****************************

- create new object
- look through each property of the object
- add value as property and property as value
- give back the object

**********************************************************************

*/

function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
