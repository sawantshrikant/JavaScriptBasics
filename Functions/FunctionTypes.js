//normal function or also called traditional function
function greetings(name){
    return "Hello, "+ name + "!";
}

let greetingMessage = greetings("shrikant")
console.log(greetingMessage)

function add(a, b) {
    return a + b;
  }

// Arrow Function

const multiply = (a,b) => a * b;
console.log(multiply(4, 6));

//Function Expression
const SumOf2Numbers = function(a, b) {
    return a + b;
  };
const result = SumOf2Numbers(5, 3); 
console.log(result);

//callback 

function Opeartions(num1,num2,callback){
  const result = callback(num1,num2)
  console.log(`The result is: ${result}`);
}

function addNum(a,b){
  return a + b;
}

function subNum(a,b){
  return a - b;
}

Opeartions(5,3, addNum);
Opeartions(10,3, subNum);