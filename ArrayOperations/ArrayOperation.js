//The at() method returns an indexed element from an array.

const fruits = ["Banana","Apple","Mango","Orange"];
const index = 2;
let fruit = fruits.at(2);
console.log(fruit)

//The concat() method concatenates (joins) two or more arrays.

//The concat() method returns a new array, containing the joined arrays.

//The concat() method does not change the existing arrays.

const Array1 = ["Shrikant","sawant"]
const Array2 = ["Study" ,"In" ,"BridgeLabz"];
const details = Array1.concat(Array2);
console.log(details);
console.log(Array1);
console.log(Array2);


//Concatenate nested arrays.
const arr1 = [1, 2, [3, 4]];
const arr2 = [[5, 6], 7, 8];
const arr3 = arr1.concat(arr2);
console.log(arr3);


const array1 = [1, 2];
const array2 = [3, 4];
const nestedArray = [
  [5, 6],
  [7, 8]
];

const comArray = array1.concat(array2, ...nestedArray);

console.log(comArray);

//Array constructor is a built-in constructor function that is used to create new array objects.

//Creating an Empty Array
const emptyArray = new Array();

//Creating an Array with Elements
const arrayWithElements = new Array('apple', 'banana', 'cherry');

//Creating an Array with a Specific Length
const arrayLength = new Array(5); 
console.log(arrayLength)

//Using Array.from()
const word = 'samsung';
const separate = Array.from(word);
console.log(separate);

//copyWithin()
const fruitscopy = ['apple', 'banana', 'cherry', 'date', 'berry'];
fruits.copyWithin(3, 1);
console.log(fruitscopy);

const fruit3 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log(fruit3);

//every()
//used to test whether all elements in an array pass a specific condition (predicate).
// It returns true if all elements meet the condition; otherwise, it returns false. 
//Check if all values in ages[] are over 18
const ages = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}
checkAge();
console.log(ages);



