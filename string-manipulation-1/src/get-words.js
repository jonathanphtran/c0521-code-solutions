/* exported getWords */
function getWords(string) {
  var words = [];
  var currentIdx = 0;
  var i = 0;
  var j = 0;
  var oneWord = '';
  var finalWord = '';

  // debugger;

  if (string === '') {
    return words;
  }

  var spaces = [];
  for (var h = 0; h < string.length; h++) {
    if (string[h] === ' ') {
      spaces.push(string[h]);
      break;
    }
  }
  if (spaces.length === 0) {
    for (var z = 0; z < string.length; z++) {
      oneWord += string[z];
    }
    words.push(oneWord);
    return words;
  }

  while (i < string.length) {
    if (string[i] === ' ') {
      var word = '';
      while (currentIdx < i) {
        if (string[currentIdx] !== ' ') {
          word += string[currentIdx];
        }
        currentIdx++;
      }
      words.push(word);
    }
    i++;
  }

  for (j = currentIdx + 1; j < string.length; j++) {
    finalWord += string[j];
  }
  words.push(finalWord);

  return words;
}
