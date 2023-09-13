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

//anonymous function
const add = function (a, b) {
  return a + b;
};


