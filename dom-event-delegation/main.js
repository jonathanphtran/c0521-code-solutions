var $taskList = document.querySelector('.task-list');

function logEvent(event) {
  console.log('target: ', event.target);
  console.log('tagName: ', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var $closestAncestor = event.target.closest('.task-list-item');
    console.log('closest: ', $closestAncestor);
    $closestAncestor.remove();
  }
}

$taskList.addEventListener('click', logEvent);
