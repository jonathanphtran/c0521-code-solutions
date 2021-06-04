var $rightArrow = document.querySelector('.fa-chevron-right');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $circles = document.querySelectorAll('.fa-circle');
var $allCircles = document.querySelector('.all-circles');
var $views = document.querySelectorAll('.view');
var i = 0;
var circlePosition = 0;
var viewPosition = 0;

function switchView(nameOfView) {
  for (i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === nameOfView) {
      $views[i].className = 'col view';
    } else {
      $views[i].className = 'col hidden view';
    }
  }
}

function changeImageRight(event) {
  if (viewPosition === $views.length - 1) {
    $views[viewPosition].className = 'col view hidden';
    $views[0].className = 'col view';
    viewPosition = 0;
  } else if ($views[viewPosition].className === 'col view') {
    $views[viewPosition].className = 'col view hidden';
    $views[viewPosition + 1].className = 'col view';
    viewPosition++;
  }
}

function changeImageLeft(event) {
  if (viewPosition === 0) {
    $views[viewPosition].className = 'col view hidden';
    viewPosition = $views.length - 1;
    $views[viewPosition].className = 'col view';
  } else if ($views[viewPosition].className === 'col view') {
    $views[viewPosition].className = 'col view hidden';
    $views[viewPosition - 1].className = 'col view';
    viewPosition--;
  }
}

function moveCircleRight(event) {
  if (circlePosition === $circles.length - 1) {
    $circles[circlePosition].className = 'far fa-circle';
    $circles[0].className = 'fas fa-circle';
    circlePosition = 0;
  } else if (circlePosition < 4) {
    $circles[circlePosition + 1].className = 'fas fa-circle';
    $circles[circlePosition].className = 'far fa-circle';
    circlePosition++;
  }
}

function moveCircleLeft(event) {
  if (circlePosition === 0) {
    $circles[circlePosition].className = 'far fa-circle';
    $circles[$circles.length - 1].className = 'fas fa-circle';
    circlePosition = $circles.length - 1;
  } else if (circlePosition > 0) {
    $circles[circlePosition - 1].className = 'fas fa-circle';
    $circles[circlePosition].className = 'far fa-circle';
    circlePosition--;
  }
}

function chooseCircle(event) {
  var nameOfView = event.target.getAttribute('data-view');
  switchView(nameOfView);
  for (i = 0; i < $circles.length; i++) {
    $circles[i].className = 'far fa-circle';
  }
  event.target.className = 'fas fa-circle';
  circlePosition = parseInt(nameOfView) - 1;
  viewPosition = parseInt(nameOfView) - 1;
}

function continueInterval() {
  clearInterval(intervalObj.intervalId);
  clearInterval(intervalObj.intervalId2);
  intervalObj.intervalId = setInterval(changeImageRight, 3000);
  intervalObj.intervalId2 = setInterval(moveCircleRight, 3000);
}

function clickCircle() {
  chooseCircle(event);
  continueInterval();
}

function rightArrowClick() {
  changeImageRight();
  moveCircleRight();
  continueInterval();
}

function leftArrowClick() {
  changeImageLeft();
  moveCircleLeft();
  continueInterval();
}

$rightArrow.addEventListener('click', rightArrowClick);
$leftArrow.addEventListener('click', leftArrowClick);
$allCircles.addEventListener('click', clickCircle);

var intervalId = setInterval(changeImageRight, 3000);
var intervalId2 = setInterval(moveCircleRight, 3000);

var intervalObj = {
  intervalId: intervalId,
  intervalId2: intervalId2
};
