//Variable Hoisting
console.log(myVariable); // undefined
var myVariable = 10;

//Function Hoisting
sayHello(); // "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}

