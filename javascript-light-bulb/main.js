/*

************************* PSEUDOCODE *************************

- grab body and light from html document
- create a function that changes the class of the bulb from light
  - to dark, or dark to light, depending on what it currently is
  - also change the background color of the body to dark or light
  - depending on what it currently is
- create an eventlistener on the bulb object with an event
  - that lets you click it
  - when clicked, the function runs

**************************************************************

*/

var $bulb = document.querySelector('.light');
var $row = document.querySelector('.rowLight');

function clickBulb(event) {
  if ($bulb.className === 'light' && $row.className === 'rowLight') {
    $bulb.className = 'dark';
    $row.className = 'rowDark';
  } else if ($bulb.className === 'dark' && $row.className === 'rowDark') {
    $bulb.className = 'light';
    $row.className = 'rowLight';
  }
}

$bulb.addEventListener('click', clickBulb);
