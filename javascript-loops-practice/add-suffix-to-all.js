/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var arr = [];
  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
    arr.push(words[i]);
  }
  return arr;
}
