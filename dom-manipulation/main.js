var numberOfClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  numberOfClicks++;
  $clickCount.textContent = 'Clicks: ' + numberOfClicks;
  if (numberOfClicks > 15) {
    $hotButton.className = 'hot-button nuclear';
  } else if (numberOfClicks > 12) {
    $hotButton.className = 'hot-button hot';
  } else if (numberOfClicks > 9) {
    $hotButton.className = 'hot-button warm';
  } else if (numberOfClicks > 6) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberOfClicks > 3) {
    $hotButton.className = 'hot-button cool';
  }
});
