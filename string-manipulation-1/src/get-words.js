/* exported getWords */
function getWords(string) {
  var words = [];

  var i = 0;
  while (i < string.length) {
    if (string[i] === ' ') {
      var word = '';
      var j = 0;
      while (j < i) {
        word += string[j];
        j++;
      }
      words.push(word);
      i = i - i;
      i = word.length;
    }
    i++;
  }
  return words;
}
