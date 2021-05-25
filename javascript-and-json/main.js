var books = [
  {
    isbn: '456-3452-9641',
    title: 'Harry Potter',
    Author: 'J.K. Rowling'
  },
  {
    isbn: '823-4216-2675',
    title: 'To Kill a Mockingbird',
    Author: 'Harper Lee'
  },
  {
    isbn: '235-2345-6236',
    title: 'Into Thin Air',
    Author: 'Jon Krakauer'
  }
];
console.log('books: ', books);
console.log('typeof books: ', typeof (books));

var jsonBooks = JSON.stringify(books);
console.log('jsonBooks:', jsonBooks);
console.log('typeof jsonBooks: ', typeof (jsonBooks));

var student = '[{"numberId":"148", "name":"John"}]';
console.log('student:', student);
console.log('typeof student:', typeof (student));

var jsonStudent = JSON.parse(student);
console.log('jsonStudent:', jsonStudent);
console.log('typeof jsonStudent:', typeof (jsonStudent));
