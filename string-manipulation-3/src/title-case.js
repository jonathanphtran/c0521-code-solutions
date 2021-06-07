/* exported titleCase */

function titleCase(string) {
  var title = '';
  var loweredStr = string.toLowerCase();
  var minorWords = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As', 'At',
    'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  var words = [];
  loweredStr = loweredStr.replace('javascript', 'JavaScript');
  loweredStr = loweredStr.replace('api', 'API');
  title += loweredStr[0].toUpperCase();
  var i = 0;
  var currentWord = '';

  if (loweredStr.length === 0) return null;

  for (i = 1; i < loweredStr.length; i++) {
    if (loweredStr[i] === ':') {
      title += ': ';
      title += loweredStr[i + 2].toUpperCase();
      i += 2;
    } else if (loweredStr[i] === '-') {
      title += '-';
      title += loweredStr[i + 1].toUpperCase();
      i++;
    } else if (loweredStr[i] !== ' ') {
      title += loweredStr[i];
    } else {
      title += ' ';
      title += loweredStr[i + 1].toUpperCase();
      i++;
    }
  }

  for (i = 0; i < title.length; i++) {
    if (title[i] !== ' ') {
      currentWord += title[i];
    } else {
      words.push(currentWord);
      currentWord = '';
    }
  }
  words.push(currentWord);

  for (i = 0; i < words.length; i++) {
    for (var j = 0; j < minorWords.length; j++) {
      if (i !== 0) {
        var lastLetter = words[i - 1][words[i - 1].length - 1];
      }
      if (words[i] === minorWords[j] && lastLetter !== ':') {
        words.splice(i, 1, words[i].toLowerCase());
      }
    }
  }

  title = words.join(' ');

  return title;
}

titleCase('composing software');
