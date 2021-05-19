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

var i = 0;

function getSentence(event) {
  var words = $words.value;

  for (var j = 0; j < words.length; j++) {
    if (words[j] !== ' ') {
      var newEl = document.createElement('h1');
      newEl.append(words[j]);
      $middle.append(newEl);
    } else {
      newEl = document.createElement('h1');
      newEl.innerHTML = '&nbsp';
      $middle.append(newEl);
    }
  }
  $newEl = document.querySelectorAll('h1');
  $newEl[0].className = 'currentLetter';

  $words.value = '';

  $HTML.addEventListener('keypress', getLetter);
}
$submit.addEventListener('click', getSentence);

function getLetter(event) {
  var letter = String.fromCharCode(event.keyCode);
  // console.log($newEl.length);

  if ((letter === $newEl[i].textContent) || (letter === ' ' && $newEl[i].innerHTML === '&nbsp;')) {
    $newEl[i].className = 'green';
    $newEl[i + 1].className = 'currentLetter';
    i++;
  } else if (letter !== $newEl[i].textContent) {
    $newEl[i].className = 'red';
    $newEl[i].className = 'currentLetter red';
  }
  // console.log(i);
}
