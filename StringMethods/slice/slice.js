let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

//If you omit the second parameter, the method will slice out the rest of the string

let text1 = "Apple, Banana, Kiwi";
let part1 = text1.slice(7);
console.log(part1);

// let text3 = "Apple, Banana, Kiwi";
// let part3 = text3.slice(-12);
// console.log(text3);

const str = 'Hello, World!';
console.log(str.slice(0, 5)); 
console.log(str.slice(7));    
console.log(str.slice(-6));   