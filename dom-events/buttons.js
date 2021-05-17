function handleClick(event) {
  console.log('Button Clicked!');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function mouseOver(event) {
  console.log('Button Hovered!');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', mouseOver);

function handleDoubleClick(event) {
  console.log('Button Double-Clicked!');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
