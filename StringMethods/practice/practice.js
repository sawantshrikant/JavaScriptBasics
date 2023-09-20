//Write a function that takes a string as input and returns the string reversed.
function reversestring(reverse){
    return reverse.split('').reverse().join('');

}
const reversed = reversestring("Bridgelabz");
console.log(reversed);

//Write a function that checks whether two given strings are anagrams

function stringanagram(string1,string2){
    const sortstring1 = string1.split('').sort().join('');
    const sortstring2 = string2.split('').sort().join('');
    return sortstring1 === sortstring2;
}

const word1 = "listen";
const word2 = "silent";
const anagramcheck = stringanagram(word1,word2);
console.log(anagramcheck);

//Write a function that finds the longest word in a sentence.
function longword(sentence){
    const words = sentence.split(' ');
    let longest = '';
    for(const word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }

    return longest;
}

const text = 'bridgelabz office is n mumbai';
const longestword = longword(text);

console.log(longestword);