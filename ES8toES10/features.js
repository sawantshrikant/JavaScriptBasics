// includes() function
 // used to determine whether an array contains a specified value. If it does, it returns true. Otherwise, it returns false.

 let arr = ['react', 'angular', 'vue'];
 
if (arr.includes('react'))
{
    console.log('react existence');
}

let arrname = ['ram', 'sham,' ,'Gopal'];
if (arrname.includes('ram')){
    console.log('ram is there');
}

//Async ,aWait -

//Object.values() (ES8/ES2017)
const person = {
    name : 'shrikant',
    rollNo : 11,
    city : 'Nashik',

};

const values = Object.values(person);
console.log("My Output :",values)