/* exported capitalizeWord */

// *********************** PSEUDOCODE ***********************
//
// Create a container for the final string
// create a container that holds a lower cased version of the original string
// if the word is javascript, give back JavaScript
// get the first letter of the word, capitalize it, then put it in a container
// remove the rest of the letters from the word and put them in a container
// combine the first letter with the rest of the words
// give back the final word
//
// **********************************************************

function capitalizeWord(word) {
  var finalWord = '';
  var updatedWord = word.toLowerCase();

  if (updatedWord === 'javascript') {
    return 'JavaScript';
  }

  var firstLetter = updatedWord[0];
  firstLetter = firstLetter.toUpperCase();
  var restOfWord = '';

  for (var i = 1; i < word.length; i++) {
    restOfWord += updatedWord[i];
  }
  finalWord = firstLetter + restOfWord;
  return finalWord;
}
