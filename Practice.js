// let PrimeNumber = (Number) => Number/2
// console.log(PrimeNumber(6));

// var number = 6

// function CheckPrimeNumber(){
//     if (condition) { number /2;
//         console.log("Number is Prime Number")
//     } else {
//         console.log("Number is Not Prime Number")
        
//     }
    
// }
// CheckPrimeNumber();

// function IsPrime(number) {
//     if (number <= n){
//         console.log("flase")
//     }

//     if (number <=3){
//         console.log("true")
//     }

//     if (number % 2 == 0);

//     for(let n  = 3; n+1;n++){

//     }
        
    
// }

function isPrime(n) {
    
    if (n <= 1)
        return false;

    
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
}
isPrime(11) 

//reverse a string
     console.log("true") 
     console.log("false");


     function reverseString(str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
          reversedStr += str.charAt(i);
        }
        return reversedStr;
      }
      
      console.log(reverseString("Hello, World!")); 


//swaping two numbers
let a = 5;
let b = 6;


let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of after swaping: ${a}`);
console.log(`The value of second variable: ${b}`);
      

