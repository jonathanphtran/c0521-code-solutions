var $h1 = document.querySelector('h1');

function countDown() {
  var num = parseInt($h1.textContent);
  num--;
  if (num === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
    return;
  }
  $h1.textContent = num;
}

var intervalID = setInterval(countDown, 1000);
