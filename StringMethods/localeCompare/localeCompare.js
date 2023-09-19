const string1 = "apple";
const string2 = "banana";

const result = string1.localeCompare(string2);

if (result < 0 ){
    console.log(`${string1} comes before ${string2}`);

} else if (result > 0) {
    console,log(`${string1} comes after ${string2}`);
}
else {
    console.log(`${string1} equal to ${string2}`)
}