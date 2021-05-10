var width = 5;
var height = 20;
var area = width * height;

var bill = 50;
var payment = 60;
var change = payment - bill;

var quizzes = 90;
var midterm = 92;
var final = 96;
var grade = (quizzes + midterm + final) / 3;

var firstName = 'Jonathan';
var lastName = 'Tran';
var fullName = firstName + ' ' + lastName;

var ph = 6;
var isAcidic = ph < 7;

var headCount = 100;
var isSparta = headCount === 300;

var motto = fullName;
motto += ' is the GOAT';

console.log('value of area: ' + area);
console.log('type of area: ' + typeof (area));

console.log('value of change: ' + change);
console.log('type of change: ' + typeof (change));

console.log('value of grade: ' + grade);
console.log('type of grade: ' + typeof (grade));

console.log('value of fullName: ' + fullName);
console.log('type of fullName: ' + typeof (fullName));

console.log('value of isAcidic: ' + isAcidic);
console.log('type of isAcidic: ' + typeof (isAcidic));

console.log('value of isSparta: ' + isSparta);
console.log('type of isSparta: ' + typeof (isSparta));

console.log('value of motto: ' + motto);
console.log('type of motto: ' + typeof (motto));
