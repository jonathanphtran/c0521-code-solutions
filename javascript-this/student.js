/* exported student */

var student = {
  firstName: 'Jonathan',
  lastName: 'Tran',
  subject: 'Javascript',
  getFullName: function () {
    var fullName = '';
    fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
  getIntroduction: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`;
  }
};
