// //Creating a Promise
// const MyPromise = new Promise((resolve, reject) => {
    
//     if (success) {
//       resolve(result); 
//     } else {
//       reject(error); 
//     }
//   });
  
//  // Handling a Promise
//  myPromise
//   .then((result) => {
    
//   })
//   .catch((error) => {
    
//   });
//code
  const myPromise = new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve("Data successfully fetched!");
      } else {
        reject("Error: Data could not be fetched.");
      }
    }, 2000);
  });
  
  // Using the promise
  myPromise
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error(error); 
    });
  