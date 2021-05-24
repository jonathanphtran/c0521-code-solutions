/* exported titleCase */

/*

*************************** PSEUDOCODE ***********************************
- create a new string container
- lowercase string into a new string
- create 3 arrays, consisting of conjunctions, articles, and prepositions
- create a counter
- create a temporary word variable
- everytime you move up a letter, increase the counter
- stop when you reach a space
- check if the counter is above three
  - if not, check if it matches a word in one of the three arrays
  - then check if the previosu word is a colon
  - if it matches, and a colon doesn't precede it, keep it lower-cased,
    - otherwise capitalize the first letter
- check if the character is a dash
- reset the counter
- once you reach the end, capitalize the last word and add it in
**************************************************************************

*/

function titleCase(string) {
  var title = '';
  var loweredStr = string.toLowerCase();
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at',
    'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var tempStr = '';
  var count = 1;
  // var isMinor = false;

  loweredStr = loweredStr.replace('javascript', 'JavaScript');
  loweredStr = loweredStr.replace('api', 'API');

  title += loweredStr[0].toUpperCase();

  for (var i = 1; i < loweredStr.length; i++) {
    if (loweredStr[i] === ' ') {
      i++;
      while (loweredStr[i] !== ' ' && i < string.length) {
        tempStr += loweredStr[i];
        count++;
        i++;
      }
      i -= count;
      for (var j = 0; j < minorWords.length; j++) {
        if (tempStr === minorWords[j] && string[i - 1] !== ':') {
          // isMinor = true;
          title += ' ' + tempStr;
          i += count;
          break;
        }
      }
      count = 1;
      // console.log(tempStr);
    }
    if (loweredStr[i] !== ' ' && loweredStr[i] !== '-') {
      title += loweredStr[i];
    } else if (loweredStr[i] === ' ') {
      title += ' ';
      title += loweredStr[i + 1].toUpperCase();
      i++;
    } else if (loweredStr[i] === '-') {
      title += '-';
      title += loweredStr[i + 1].toUpperCase();
      i++;
    }
    // isMinor = false;
    tempStr = '';
  }
  return title;
}
