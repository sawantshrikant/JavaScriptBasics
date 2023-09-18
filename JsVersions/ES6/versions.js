
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

  //Template strings

const nameOfPerson = "Ram";
const age = 21;


const message = `Hello, ${nameOfPerson}! You are ${age} years old.`;

console.log(message);

//Structure Assignment with Objects
 //creating a object
  const person = {
    firstName : "Rohan",
    lastName : "Gurav",
    age:30
  };
  
console.log("First name of person :",person.firstName);
  
  const {firstName,lastName, age: personAge} = person;

  console.log(firstName);
  console.log(lastName);
  console.log(personAge);

  
  //structure assignment of array

  const colors = ["Red", "Green", "Blue"];

  const [FirstColor, SecondColor, ThirdColor] = colors;

  console.log(FirstColor);
  console.log(SecondColor);
  console.log(ThirdColor);

  //spread operator

  //Spreading Array Elements copy element

const originaLArray = [1, 2, 3]
const NewArray = [...originaLArray, 4, 5]

console.log(NewArray);

//Merging Arrays
const Array1 = [1,2];
const Array2 = [3,4];
const mergedArray = [...Array1,...Array2];
console.log(mergedArray);

// Spreading Object Properties
const originalObject = {name : "John",age :30};
const CopyObject = {...originalObject , city : "NewYork"};

console.log(CopyObject);

//Function Arguments

