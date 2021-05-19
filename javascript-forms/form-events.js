function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ' + event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name: ' + event.target.name);
}

function handleInput(event) {
  console.log('event.target.value: ' + event.target.value);
}

var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);

var $contactForm = document.querySelector('#contact-form');

function storeInObj(event) {
  event.preventDefault();
  var valueObj = {};

  for (var i = 0; i < document.forms[0].length - 1; i++) {
    valueObj[document.forms[0].elements[i].name] = document.forms[0].elements[i].value;
  }

  console.log(valueObj);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', storeInObj);
