/* exported isVowel */
function isVowel(char) {
  var upperChar = char.toUpperCase();
  var vowels = ['A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === upperChar) {
      return true;
    }
  }
  return false;
}
