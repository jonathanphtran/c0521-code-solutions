var $rightArrow = document.querySelector('.fa-chevron-right');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $pokemonImg = document.querySelector('.pokemon');
var $circles = document.querySelectorAll('.fa-circle');
var allImages = ['001.png', '004.png', '007.png', '025.png', '039.png'];
var circlePosition = 0;

function changeImageRight(event) {
  var src = $pokemonImg.getAttribute('src');
  var imageID = src.slice(7);
  for (var i = 0; i < allImages.length; i++) {
    if (imageID === allImages[allImages.length - 1]) {
      var nextImageID = allImages[0];
    } else if (imageID === allImages[i]) {
      nextImageID = allImages[i + 1];
    }
  }
  var newSrc = `images/${nextImageID}`;
  $pokemonImg.setAttribute('src', newSrc);
}

function changeImageLeft(event) {
  var src = $pokemonImg.getAttribute('src');
  var imageID = src.slice(7);
  for (var i = allImages.length - 1; i >= 0; i--) {
    if (imageID === allImages[0]) {
      var nextImageID = allImages[allImages.length - 1];
    } else if (imageID === allImages[i]) {
      nextImageID = allImages[i - 1];
    }
  }
  var newSrc = `images/${nextImageID}`;
  $pokemonImg.setAttribute('src', newSrc);
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

function rightArrowClick() {
  changeImageRight();
  moveCircleRight();
  clearInterval(intervalObj.intervalId);
  clearInterval(intervalObj.intervalId2);
  intervalObj.intervalId = setInterval(changeImageRight, 3000);
  intervalObj.intervalId2 = setInterval(moveCircleRight, 3000);
}

function leftArrowClick() {
  changeImageLeft();
  moveCircleLeft();
  clearInterval(intervalObj.intervalId);
  clearInterval(intervalObj.intervalId2);
  intervalObj.intervalId = setInterval(changeImageRight, 3000);
  intervalObj.intervalId2 = setInterval(moveCircleRight, 3000);
}

$rightArrow.addEventListener('click', rightArrowClick);
$leftArrow.addEventListener('click', leftArrowClick);

var intervalId = setInterval(changeImageRight, 3000);
var intervalId2 = setInterval(moveCircleRight, 3000);

var intervalObj = {
  intervalId: intervalId,
  intervalId2: intervalId2
};
