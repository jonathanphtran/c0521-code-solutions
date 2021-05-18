/* exported pick */

/*

***************************** PSEUDOCODE *****************************

- create new object container
- look through each property in the object
- compare each property the the values in the array
- if the value is undefined, move on to the next key
- if they are equal, add the key value pair to the new object
- give back the new object

**********************************************************************

*/
function pick(source, key) {
  var newObj = {};

  for (var i = 0; i < key.length; i++) {
    for (var akey in source) {
      if (!akey) {
        break;
      }
      if (source[akey] === undefined) {
        break;
      }
      if (akey === key[i]) {
        newObj[akey] = source[akey];
        break;
      }
    }
  }
  return newObj;
}
