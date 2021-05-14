/* exported truncate */
function truncate(length, string) {
  var truncatedString = '';
  truncatedString = string.slice(0, length);
  truncatedString += '...';
  return truncatedString;
}
