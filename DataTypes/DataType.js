

function HelloWord()
{
   console.log("Hello")
 }

 HelloWord()


 




// Numbers:
let length = 16;
let weight = 7.5;
console.log(length, weight)

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(color,lastName)

// Booleans
let x = true;
let y = false;
console.log(x,y)

// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(person)

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)

// Date object:
const date = new Date("2023-09-12");
console.log(date)


// Declare a variable using 'let'

let age = 25;
age = 30 ;

if (true){
    let age =35;
    console.log("Inside Block:", age);
}
console.log("Outside Block:", age);

// Declare a variable using 'var'
var m = 10;
m = 20;
function example() {
  var m = 30; 
  console.log("Inside function:", m); 
}
example(); 
console.log("Outside function:", m); 

//Declare a constant using const
const pi = 3.14
function RadiusOfCircle() {
    const radius = 5;
    console.log("radiusOfCircle:", radius)
}
AreaOfCircle();
