/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

var newStudent = new Student('John', 'Doe', 'Biology');

Student.prototype.getFullName = function () {
  var fullName = this.firstName + ' ' + this.lastName;
  return fullName;
};

Student.prototype.getIntroduction = function () {
  var fullName = this.firstName + ' ' + this.lastName;
  var introduction = 'Hello, my name is ' + fullName + ' and I am studying ' + this.subject + '.';
  return introduction;
};
