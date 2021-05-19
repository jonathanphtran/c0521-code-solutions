/*

***************************** PSEUDOCODE *****************************

- get the h1 element

**********************************************************************

*/

var $words = document.querySelector('#sentence');
var $submit = document.querySelector('.submit');
var $middle = document.querySelector('.middle');
var $HTML = document.querySelector('html');

var $newEl = document.querySelectorAll('h1');

var letterContainer = [];
var i = 0;

function getSentence(event) {
  var words = $words.value;

  for (var i = 0; i < words.length; i++) {
    letterContainer.push(words[i]);
  }
  for (var j = 0; j < letterContainer.length; j++) {
    if (letterContainer[j] !== ' ') {
      var newEl = document.createElement('h1');
      newEl.append(letterContainer[j]);
      $middle.append(newEl);
    } else {
      var newSpace = document.createTextNode(' ');
      $middle.append(newSpace);
    }
  }
  $newEl = document.querySelectorAll('h1');
  $newEl[0].className = 'currentLetter';
}
$submit.addEventListener('click', getSentence);

function getLetter(event) {
  var letter = String.fromCharCode(event.keyCode);

  if (letter === $newEl[i].textContent) {
    $newEl[i].className = 'green';
    $newEl[i + 1].className = 'currentLetter';
    i++;
  } else if (letter !== $newEl[i].textContent) {
    $newEl[i].className = 'red';
    $newEl[i].className = 'currentLetter red';
  }

}

$HTML.addEventListener('keypress', getLetter);
