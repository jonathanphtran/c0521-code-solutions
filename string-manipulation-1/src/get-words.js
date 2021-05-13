/* exported getWords */
function getWords(string) {
  var words = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      words.push(string[i]);
    }
  }
}
