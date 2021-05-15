/* exported pick */

/*

***************************** PSEUDOCODE *****************************

- create new object container
- look through each property in the object
- compare each property the the values in the array
- if they are equal, add the key value pair to the new object
- give back the new object

**********************************************************************

*/
function pick(source, key) {
  var newObj = {};
  for (var akey in source) {
    var earlyEnd = key.length;
    for (var i = 0; i < key.length; i++) {
      if (source[akey] === undefined) {
        break;
      }
      if (akey === key[i]) {
        newObj[akey] = source[akey];
        earlyEnd--;
        break;
      }
    }
    if (earlyEnd === 0) {
      break;
    }
  }
  return newObj;
}
