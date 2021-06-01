function ExampleConstructor() {}

console.log('Value of ExampleContructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var testing = new ExampleConstructor();
console.log('Value of testing:', testing);

var instanceOfTesting = testing instanceof ExampleConstructor;
console.log('Is instance?', instanceOfTesting);
