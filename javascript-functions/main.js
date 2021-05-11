function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var seconds = convertMinutesToSeconds(5);
console.log(`convertMinutesToSeconds result: ${seconds}`);

function greet(name) {
  console.log(`Hi ${name}!`);
}
greet('Jon');

function getArea(width, height) {
  return width * height;
}
var area = getArea(5, 10);
console.log(`result of area: ${area}`);

function getFirstName(person) {
  return person.firstName;
}
var firstName = getFirstName({ firstName: 'John', lastName: 'Doe' });
console.log(`result of getFirstName: ${firstName}`);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}
var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(`result of lastELement: ${lastElement}`);
