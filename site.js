'use strict';
// remove the 'nojs' class and add the 'js' class
var html = document.querySelector('html');
html.classList.remove('nojs');
html.classList.add('js');

// Email validity function
function validate_email(value) {
var email = clean_whitespace(value);
return validate(email,/^[^@\s]+@[^@\s]+$/g);
} 
