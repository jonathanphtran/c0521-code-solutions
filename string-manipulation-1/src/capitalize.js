/* exported capitalize */
function capitalize(string) {
  var lowerString = string.toLowerCase();
  var strArr = lowerString.split('');
  strArr[0] = strArr[0].toUpperCase();
  var newString = '';
  for (var i = 0; i < strArr.length; i++) {
    newString = newString + strArr[i];
  }
  return newString;
}
