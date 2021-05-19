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
var $row = document.querySelector('.rowInvis');
var $redButton = document.querySelector('.redButton');

function showPopUp(event) {
  $row.className = 'rowExist';
}
$blueButton.addEventListener('click', showPopUp);

function closePopUp(event) {
  $row.className = 'rowInvis';
}
$redButton.addEventListener('click', closePopUp);
