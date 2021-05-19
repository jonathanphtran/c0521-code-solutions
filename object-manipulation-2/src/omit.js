/* exported omit */

/*

***************************** PSEUDOCODE *****************************

- create a new object
- loop through the source object and add every key and value to the new
  - object so it doesn't affect the original object
- loop through the new object and compare it with the values in key
- if there is a match, delete the property
- give back object

**********************************************************************

*/

function omit(source, key) {
  var newObj = {};
  for (var akey in source) {
    newObj[akey] = source[akey];
  }
  for (var anotherKey in newObj) {
    for (var i = 0; i < key.length; i++) {
      if (anotherKey === key[i]) {
        delete newObj[anotherKey];
        break;
      }
    }
  }
  return newObj;
}
