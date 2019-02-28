'use strict';
// remove the 'nojs' class and add the 'js' class
var html = document.querySelector('html');
html.classList.remove('nojs');
html.classList.add('js');

// Email validity function
function validate_email(email) {
var email = clean_whitespace(email);
return validate(email,/^[^@\s]+@[^@\s]+$/g);
}

function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validate_email(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else {
    $result.text(email + " is not valid :(");
    $result.css("color", "red");
  }
  return false;
}
$("#submit").bind("click", submit);
