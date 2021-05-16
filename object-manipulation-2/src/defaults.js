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
  var counter = 0;
  for (var key in source) {
    for (var innerKey in target) {
      if (key === innerKey) {
        counter++;
      }
    }
    if (counter === 0) {
      target[key] = source[key];
    }
    counter = 0;
  }
  return target;
}
