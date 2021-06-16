var $h1 = document.querySelector('h1');

var change = function () {
  $h1.textContent = 'Hello There';
};

setTimeout(change, 2000);
