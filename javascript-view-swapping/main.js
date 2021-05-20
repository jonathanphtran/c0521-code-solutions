var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');
var $tabContainer = document.querySelector('.tab-container');

function checkMatch(event) {
  var $match = event.target.matches('.tab');
  if (!$match) return;

  for (var i = 0; i < $tabs.length; i++) {
    if ($tabs[i] === event.target) {
      $tabs[i].className = 'tab active';
    } else {
      $tabs[i].className = 'tab';
    }
  }

  var $dataView = event.target.getAttribute('data-view');
  for (var j = 0; j < $views.length; j++) {
    if ($views[j].getAttribute('data-view') === $dataView) {
      $views[j].className = 'view';
    } else {
      $views[j].className = 'view hidden';
    }
  }
}

$tabContainer.addEventListener('click', checkMatch);
