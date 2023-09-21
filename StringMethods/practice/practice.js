// //Write a function that takes a string as input and returns the string reversed.
// function reversestring(reverse){
//     return reverse.split('').reverse().join('');

// }
// const reversed = reversestring("Bridgelabz");
// console.log(reversed);

// //Write a function that checks whether two given strings are anagrams

// function stringanagram(string1,string2){
//     const sortstring1 = string1.split('').sort().join('');
//     const sortstring2 = string2.split('').sort().join('');
//     return sortstring1 === sortstring2;
// }

// const word1 = "listen";
// const word2 = "silent";
// const anagramcheck = stringanagram(word1,word2);
// console.log(anagramcheck);

// //Write a function that finds the longest word in a sentence.
// function longword(sentence){
//     const words = sentence.split(' ');
//     let longest = '';
//     for(const word of words){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }

//     return longest;
// }

// const text = 'bridgelabz office is in mumbai';
// const longestword = longword(text);

// console.log(longestword);

// //callback 

// // function Opeartions(num1,num2,callback){
// //     const result = callback(num1,num2)
// //     console.log(`The result is: ${result}`);
// //   }
  
// //   function addNum(a,b){
// //     return a + b;
// //   }
  
// //   function subNum(a,b){
// //     return a - b;
// //   }
  
// //   Opeartions(5,3, addNum);
// //   Opeartions(10,3, subNum);

//   function Operations(num1,num2,callback){
//     const result = callback(num1,num2)
//     console.log(`The result is : ${result}`);
//   }
    
//   function addNum(a,b){
//     return a + b;
//   }

//   function subNum(a,b) {
//     return a - b;
//   }
//   Operations(5,3, addNum);
//   Operations(10,3, subNum);

//   //You are given an array of numbers, and you need to find the sum of all even numbers in the array.

//   arr1 = [1,2,3,4,5,6,7,8,9,10];

//   function sumofevenNumber(arr ,callback){
//           let sum = 0;
//           for(const num of arr){
//             if (num % 2 === 0){
//                 sum += num;
//             }
//           }
//           callback(sum)
//   }
  
//   function displayresult(result){
//     console.log("sum of even number:",result)
//   }

//   sumofevenNumber(arr1,displayresult);


//   //multiple two numbers using promise dont use setTimeout

// //   function MultipleNumber(num1,num2){
// //     return new Promise((resolve,reject) => {
// //         const result = num1 * num2;
// //         resolve(result);
// //     });
// //   }

// //   MultipleNumber(5,7)
// //   .then((result) => {
// //     console.log("Result :",result);
// //   })
// //   .catch((error) => {
// //     console.error("Error :",result);
// //   });

//   //same program used async/await
//   async function MultipleNumberasync(num1,num2){
//     try{
//         const result = await MultipleNumber(num1,num2);
//         console.log("Result :",result);
//     }
//     catch (error){
//          console.log("Error :",result);
//     }

//   }

//   async function MultipleNumber(num1,num2){
//     return new Promise((resolve) => {
//           const result = num1 * num2;
//           resolve(result);
//     })
//   };

  // MultipleNumberasync();

  //Closures
  //It occurs when a function "closes over" its surrounding lexical scope,
  // retaining access to the variables and parameters from that scope even after the outer function has finished executing. 
  //Closures are powerful because they enable data encapsulation and can be used to create private variables and functions in JavaScript.
  function outer() {
    const outerVar = 'I am from outer function';
  
    function inner() {
      console.log(outerVar);
    }
  
    return inner;
  }
  
  console.log( outer());
  //closure();
  // outer();



//
// const numbers = [1, 2, 3, 4];

// numbers.forEach((number,index,array) => {
//     array[index] = number * 2;
// });

// console.log(numbers);

// //filter
// const numbers1 = [1, 2, 3, 4];
// const evenNumbers = numbers1.filter((number) => number % 2 === 0);
// console.log(evenNumbers);


//closures
//closures in js refers to the ability of a function to remeber & access it lexical scope,even if that function is executed outside that lexical scope

function createDiscount(discount){
  return function(price) {
    return price -price * (discount / 100);

  }
}

const summersale = createDiscount(20);
console.log(summersale(100));









