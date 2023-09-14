
//Modules
//2 FILES math.js and main js

// import { add , pi } from "./Math"

// const result  = add (5,3)
// console.log('The Sum is ${result}')

// console.log('The value of Pi is approximately ${pi}');


//Default parameters
function Welcome(name = "Guest", message = "Hello") {
    console.log(`${message}, ${name}!`);
  }
  
 
  Welcome(); 
  
  // Calling the function with custom arguments
  Welcome("John", "Hi"); 
  
