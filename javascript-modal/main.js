/*

****************************** PSEUDOCODE ******************************

- get blue button
- get row
- get red button
- create function
  - change display of row to flex
- add event
  - if blue button is clicked, change display of row to flex
  - if red button is clicked, change display of row to none

************************************************************************

*/

var $blueButton = document.querySelector('.blueButton');
var $row = document.querySelector('.row');
var $redButton = document.querySelector('.redButton');

function showPopUp(event) {
  $row.style.display = 'flex';
}
$blueButton.addEventListener('click', showPopUp);

function closePopUp(event) {
  $row.style.display = 'none';
}
$redButton.addEventListener('click', closePopUp);
