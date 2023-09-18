// //The at() method returns an indexed element from an array.

// const fruits = ["Banana","Apple","Mango","Orange"];
// const index = 2;
// let fruit = fruits.at(2);
// console.log(fruit)

// //The concat() method concatenates (joins) two or more arrays.

// //The concat() method returns a new array, containing the joined arrays.

// //The concat() method does not change the existing arrays.

// const Array1 = ["Shrikant","sawant"]
// const Array2 = ["Study" ,"In" ,"BridgeLabz"];
// const details = Array1.concat(Array2);
// console.log(details);
// console.log(Array1);
// console.log(Array2);


// //Concatenate nested arrays.
// const arr1 = [1, 2, [3, 4]];
// const arr2 = [[5, 6], 7, 8];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);


// const array1 = [1, 2];
// const array2 = [3, 4];
// const nestedArray = [
//   [5, 6],
//   [7, 8]
// ];

// const comArray = array1.concat(array2, ...nestedArray);

// console.log(comArray);

// //Array constructor is a built-in constructor function that is used to create new array objects.

// //Creating an Empty Array
// const emptyArray = new Array();

// //Creating an Array with Elements
// const arrayWithElements = new Array('apple', 'banana', 'cherry');

// //Creating an Array with a Specific Length
// const arrayLength = new Array(5); 
// console.log(arrayLength)

// //Using Array.from()
// const word = 'samsung';
// const separate = Array.from(word);
// console.log(separate);

// //copyWithin()
// const fruitscopy = ['apple', 'banana', 'cherry', 'date', 'berry'];
// fruits.copyWithin(3, 1);
// console.log(fruitscopy);

// const fruit3 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 2);
// console.log(fruit3);

// //every()
// //used to test whether all elements in an array pass a specific condition (predicate).
// // It returns true if all elements meet the condition; otherwise, it returns false. 
// //Check if all values in ages[] are over 18
// const ages = [32, 33, 16, 40];
// const allAgeAbove18 = ages.every(checkAge);

// ages.every(checkAge)

// function checkAge(age) {
//   return age > 18;
// }

// console.log(allAgeAbove18);


// //fill()
// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(0);

// console.log(numbers);

// const numbers1 = [1, 2, 3, 4, 5];


// numbers.fill(0, 1, 3);

// console.log(numbers1);


// //filter()
// const age = [32,33,39,15];
// const result = age.filter((elem)=> elem > 18);

// console.log("Age Above 18")
// console.log(result);

// find() 
// const MyAge1 = [3,10,18,20];
// function FindAge(age){
//   return age >= 18;
// }
// const FirstValueOver18 = MyAge1.find(FindAge);
// console.log(" using find() 1 st age over 18 : ");
// console.log(FirstValueOver18);

// //findindex()

// //flat()
// //That allows you to flatten a nested array structure by removing nested arrays and creating a new one-dimensional array. 

// const nestedArray2 = [1, [2, 3], [4, [5, 6]]];

// const flatArray1 = nestedArray2.flat(2);

// console.log(flatArray1)

// //flatmap()
// // combines two common array operations:
// // mapping over each element of an array and then flattening the result into a single array.

// const words = ["hello", "world"];

// const splitAndUpperCase = words.flatMap((word) => word.split("").map((char) => char.toUpperCase()));

// console.log(splitAndUpperCase);


// //map()

// const numbers5 = [1, 2, 3, 4];

// const squaredNumbers = numbers5.map((number) => number * number);

// console.log(squaredNumbers);



// //pop
// // Is used to remove the last element from an array and return that removed element. 
// //This method mutates the original array by removing the last element, and the array's length is decreased by 1.
// const fruitsInList = ["Banana", "Orange", "Apple", "Mango"];
// const removedFruit = fruitsInList.pop();

// console.log("Using pop() remove last element from array")

// console.log(removedFruit); 
// console.log(fruitsInList); 

// //prototype()
// //Is associated with constructor functions and is used to add properties and methods to objects created from that constructor function.
// // It allows you to define properties and methods that are shared among all instances created using that constructor function.

// function PersonData1(name ,age2){
//   this.name = name;
//   this.age2 = age2;
// }

// PersonData1.prototype.sayHello = function(){                                    //(ading methodd to prototype)
//   console.log(`Hello, My name is ${this.name} and my age is ${this.age2} years old`) 
// };

// const Person1 = new PersonData1("Ram", 20);         //(creating instance of person)
// const Person2 = new PersonData1("Sham", 30);

// Person1.sayHello();
// Person2.sayHello();


// checkAge();
// console.log(ages);

//push()
//The push() method adds new items to the end of an array.
//The push() method changes the length of the array.
//The push() method returns the new length.

const cars = ["ferari","Mclearn", "Tata"];

const NewLength = cars.push("Mahendra","Bajaj");
console.log("Using push method :")
console.log(cars);
console.log(NewLength);

//reduce()

//array method used for reducing an array into a single value or accumulating a result
// by applying a given function to each element in the array.
 //It's often used for tasks such as summing up values, finding the maximum or minimum value, or concatenating strings within an array.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("Using reduce method : ")
console.log(sum); 


const words = ["tarak", "mehata", "tarak", "mehata", "Iyer"];

const wordCount = words.reduce((count, word) => {
  count[word] = (count[word] || 0) + 1;
  return count;
}, {});

console.log("count word : ");

console.log(wordCount);

//reverse()
//The reverse() method reverses the order of the elements in an array.

//The reverse() method overwrites the original array.

const light = [ 10,20,30,40];
light.reverse();

console.log("reverse method");
console.log(light);


//shift()

//The shift() method removes the first item of an array.

//The shift() method changes the original array.

//The shift() method returns the shifted element.


const Family = ["Friend","Mother","Father","Brother"];

RemovedMember = Family.shift();

console.log(RemovedMember);
console.log(Family);

// slice()
// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

const items = ["chair", "table", "lamp", "rug", "sofa"];
const selectedItems = items.slice(2, 4);
console.log("After Using Slice Remaing Item :")
console.log(selectedItems); 

//some()
// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.
const number121 = [10,20,30,40,50]

const GreaterNumber = number121.some((number)=> number > 35);

console.log("using some() method to check if number more than 35 preasentin array : ");
console.log(GreaterNumber);


//sort()
//The sort() sorts the elements of an array.

//The sort() overwrites the original array.

//The sort() sorts the elements as strings in alphabetical and ascending order.


const colors = ["red", "green", "blue", "yellow", "orange"];

colors.sort();
console.log("Alphabetical order of array colors : ")
console.log(colors);


const names123 = ["Abcd", "Abcde", "ABC", "CBA", "ABCDEFG"];
names123.sort((a,b) => a.length - b.length);

console.log("sort array by custom order : ");
console.log(names123);

//splice()
//The splice() method adds and/or removes array elements.

//The splice() method overwrites the original array.

const Architect = ["BV DOSHI","RAJ REVAL", "SANJAY PURI","charles correa"];

const RemovedArchitect = Architect.splice(1,2);

console.log("using splice method :");
console.log(RemovedArchitect);
console.log(Architect);


const Colors = ["Red", "Green", "Blue","Black"]

Colors.splice(1,0, "yellow","orange");

console.log("usng splice to array to add element : ")
console.log(Colors);

const animals = ["dog", "cat", "rabbit"];
const removedAnimal = animals.splice(1, 1, "hamster");

console.log(removedAnimal); 
console.log(animals); 

//toString()
//The toString() method returns a string with array values separated by commas.

//The toString() method does not change the original array.

const fruits500 = ["apple", "banana", "cherry"];
const fruitsString = fruits500.toString();

console.log("Array after using toString method : ")
console.log(fruitsString); 

const fruits501 = ["apple", "banana", "cherry"];
const fruitsString1 = fruits501.join(" and ");

console.log("Array after using toString method : ")
console.log(fruitsString1); 

//unshift()
//The unshift() method adds new elements to the beginning of an array.

//The unshift() method overwrites the original array.

const Architect1 = ["RAJ REVAL", "SANJAY PURI","charles correa"];
Architect1.unshift("BV DOSHI");

console.log("using unshift to add arcchitect name at beginning : ");
console.log(Architect1);

//valueOf()
//return same array

const fruits = ["apple", "banana", "cherry"];
const value = fruits.valueOf();

console.log(value);



//foreach()
const numbers502 = [1, 2, 3, 4];

numbers502.forEach(function (number, index) {
  console.log(`Element at index ${index} is ${number}`);
});

const numbers503 = [1, 2, 3, 4];
for (const number of numbers503) {
  console.log(number);
}















