//Variable Hoisting
console.log(myVariable); 
var myVariable = 10;

//Function Hoisting
sayHello(); // 

function sayHello() {
  console.log("Hello, World!");
}

