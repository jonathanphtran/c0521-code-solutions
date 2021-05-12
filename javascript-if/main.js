/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

var person = {
  name: 'Jojo',
  age: 10
};
var person2 = {
  name: 'Ojoj',
  age: 21
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

isOldEnoughToDrink(person);
isOldEnoughToDrink(person2);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(ph) {
  if (ph < 7 && ph >= 0) {
    return 'Acid';
  } else if (ph === 7) {
    return 'Neutral';
  } else if (ph > 7 && ph <= 14) {
    return 'Base';
  } else {
    return 'Invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight Everybody!';
  }
}
