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
  if ($bulb.className === 'light') {
    $bulb.className = 'dark';
  } else if ($bulb.className === 'dark') {
    $bulb.className = 'light';
  }
  if ($row.className === 'rowLight') {
    $row.className = 'rowDark';
  } else if ($row.className === 'rowDark') {
    $row.className = 'rowLight';
  }
}

$bulb.addEventListener('click', clickBulb);
