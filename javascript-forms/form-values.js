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
