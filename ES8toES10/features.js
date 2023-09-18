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

// const values = Object.values(person);
// console.log("My Output :",values)

//Object.entries() 
const details = {
    studentid : 1121,
    place : 'Mumbai',
    state : 'MH',
};
const entries = Object.entries(details);
console.log("My output :",entries)

//Object.keys()
const keys = Object.keys(details);
console.log("My output for keys :",keys)


//Difference between calbacl hell and Promise

//callback hell example
setTimeout(() => {
    console.log ('Called the HR')
    setTimeout(() => {
        console.log("HR called Director");
        setTimeout(() => {
            console.log("Information Update");
        },1000);
    },1000);
},2000);

//promise
// var promise1 = new promise ((resolve , reject) =>{
//     console.log("Yes promise is resolved");
//     let obj = {
//         userId : 12,
//         comments : 'Code Improve'
//     }
//     resolve(obj);

//     reject('something went wrong')
// })

// promise1
// .then((value) =>{
//     console.log(value)
// })
// .catch  (err =>{
//     console.log ("Error is : "+err)
// });

var promise11 = new Promise((resolve, reject) => {
    console.log("promise program example")
    console.log("Called The HR");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  
  promise11
    .then(() => {
        
      console.log("HR Call Director");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    })
    .then(() => {
      console.log("Information update");
    })
    .catch((error) => { 
      console.error('An error:', error);
    });
  












    