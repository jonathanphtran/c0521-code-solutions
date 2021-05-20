var $words = document.querySelector('#sentence');
var $submit = document.querySelector('.submit');
var $middle = document.querySelector('.middle');
var $HTML = document.querySelector('html');
var $newEl = document.querySelectorAll('span');

var i = 0;

function getSentence(event) {
  event.preventDefault();
  var words = $words.value;
  var newEl = document.createElement('h1');

  for (var j = 0; j < words.length; j++) {
    if (words[j] !== ' ') {
      var newSpanEl = document.createElement('span');
      newSpanEl.append(words[j]);
      newEl.append(newSpanEl);
    } else {
      newSpanEl = document.createElement('span');
      newSpanEl.innerHTML = ' ';
      newEl.append(newSpanEl);
    }
  }

  $middle.append(newEl);

  $newEl = document.querySelectorAll('span');

  $words.value = '';

  $HTML.addEventListener('keypress', getLetter);
}
$submit.addEventListener('mousedown', getSentence);

function getLetter(event) {
  event.preventDefault();
  var letter = String.fromCharCode(event.keyCode);

  if (i === $newEl.length - 1 && letter === $newEl[i].textContent) {
    $newEl[i].className = 'green';
    return 'FINISHED';
  }
  if ((letter === $newEl[i].textContent) || (letter === ' ' && $newEl[i].innerHTML === ' ')) {
    $newEl[i].className = 'green';
    $newEl[i + 1].className = 'currentLetter';
    i++;
  } else if (letter !== $newEl[i].textContent) {
    $newEl[i].className = 'red';
    $newEl[i].className = 'wrongLetter red';
  }
}
