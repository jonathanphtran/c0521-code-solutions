/* exported getWords */
function getWords(string) {
  var words = [];
  var currentWord = '';

  if (string.length === 0) return words;

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      words.push(currentWord);
      currentWord = '';
    }
  }
  words.push(currentWord);
  return words;
}
