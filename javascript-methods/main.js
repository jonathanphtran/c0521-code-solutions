var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);
console.log(`result of maximumValue: ${maximumValue}`);

var heroes = ['Spiderman', 'Batman', 'Wolverine', 'Starlord'];
var randomNumber = Math.random();
console.log(randomNumber);

randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log(`result of randomIndex: ${randomIndex}`);

var randomHero = heroes[randomIndex];
console.log(`result of randomHero: ${randomHero}`);

var library = [
  {
    title: 'Harry Potter and The Goblet of Fire',
    author: 'JK Rowling'
  },
  {
    title: 'Lord of the Rings',
    author: 'Tolkein'
  },
  {
    title: 'To Kill a Mockingbird ',
    author: 'Harper Lee'
  }
];

var lastBook = library.pop();
console.log('result of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('result of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library array: ', library);

var fullName = 'Jonathan Tran';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(`sayMyName: ${sayMyName}`);
