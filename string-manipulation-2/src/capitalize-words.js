/* exported capitalizeWords */

/*

*************************** PSEUDOCODE ***************************

1. Lower case all letters and add that to a new string
2. create a container for the final string
3. create a container for seprated words
4. look at each character in the string
5. separate each word into the container
6. capitalize each word
7. combine the words together into the final string
8. give back the word

******************************************************************

*/

// function capitalizeWords(string) {
//   // debugger;
//   var loweredString = string.toLowerCase();
//   var combinedStr = '';
//   var wordsContainer = [];
//   var capitalizedContainer = [];
//   var aWord = '';

//   for (var i = 0; i < loweredString.length; i++) {
//     if (loweredString[i] !== ' ') {
//       aWord += loweredString[i];
//     } else {
//       wordsContainer.push(aWord);
//       aWord = '';
//     }
//   }
//   wordsContainer.push(aWord);

//   for (var j = 0; j < wordsContainer.length; j++) {
//     var firstLetter = wordsContainer[j][0].toUpperCase();
//     var restOfWord = '';
//     for (var k = 1; k < wordsContainer[j].length; k++) {
//       restOfWord += wordsContainer[j][k];
//     }
//     aWord = firstLetter + restOfWord;
//     capitalizedContainer.push(aWord);
//   }

//   for (let g = 0; g < capitalizedContainer.length; g++) {
//     combinedStr = combinedStr + ' ' + capitalizedContainer[g];
//   }
//   var finalString = combinedStr.trim();
//   return finalString;
// }

// capitalizeWords('IT going?');

/*

*************************** PSEUDOCODE ***************************

- create a container for a new string
- look through the entire string
- capitalize the first letter and add it to a container
- capitalize each letter after a space and add them to a container
- loop through the entire string
- add the first capitalized letter
- add the rest of the letters
- if the index is a space, add in the correct capitalized letter
- return the new string

******************************************************************

*/

function capitalizeWords(string) {
  return 'temp to let me commit';
}
