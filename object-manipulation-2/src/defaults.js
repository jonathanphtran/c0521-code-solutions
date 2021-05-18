/* exported defaults */

/*

***************************** PSEUDOCODE *****************************

- create a counter
- look through each property of the source and compare it to the target
- if there is a match, add one to the counter
- if the counter is equivalent to 0, add the property to the target
- reset the counter
- return the target object

**********************************************************************

*/

function defaults(target, source) {
  var match = false;
  for (var key in source) {
    for (var innerKey in target) {
      if (key === innerKey) {
        match = true;
      }
    }
    if (!match) {
      target[key] = source[key];
    }
    match = false;
  }
  return target;
}
