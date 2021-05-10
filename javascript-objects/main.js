var student = {
  firstName: 'Jonathan',
  lastName: 'Tran',
  age: 25
};

var vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2014
};

var pet = {
  name: 'Yoshi',
  type: 'Akita'
};

student.fullName = student.firstName + ' ' + student.lastName;
console.log('value of student.fullName: ' + student.fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine: ' + student.livesInIrvine);

student.previousOccupation = 'Delivery Driver';
console.log('value of student.previousOccupation: ' + student.previousOccupation);

console.log('value of student: ', student);

vehicle.color = 'gray';
vehicle.isConvertible = false;

console.log("value of vehicle['color']: " + vehicle['color']);
console.log("value of vehicle['isConvertible']: " + vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
