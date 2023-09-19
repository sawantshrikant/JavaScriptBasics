//split()
//Splitting by Space
const Sentence = "Hello World"
const words = Sentence.split(" ")

console.log("Using Split method : ")
console.log(words);

//Limiting the Number of Splits
const Sentence1 = "Hello i am shrikant bridgelabz student"
const words1 = Sentence1.split(" ",3)

console.log("Using Split method : ")
console.log(words1);


//Split the words, and return the second word
const Sentence2 = "Hello i am shrikant bridgelabz student"
const words2 = Sentence1.split(" ")

let word = words2[2];

console.log("Using Split method : ")
console.log(word);
