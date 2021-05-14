/* exported capitalizeWord */
function capitalizeWord(word) {
  var finalWord = '';
  var updatedWord = word.toLowerCase();

  if (updatedWord === 'javascript') {
    return 'JavaScript';
  }

  var firstLetter = updatedWord.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  var missingFirstLetter = updatedWord.slice(1);
  finalWord = firstLetter + missingFirstLetter;
  return finalWord;
}
