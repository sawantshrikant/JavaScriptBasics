


  function Welcome(name, callback) {
    console.log('Hello');
    callback(); // call back function
  }
  
  function GoodBye() {
    console.log("GoodBye");
  }
  
  Welcome("Shrikant", GoodBye); // Passing GoodBye as a callback

  function multiply(num, operation) {
    return operation(num);
  }
  
  function multipleSameNum(num) {
    return num * num;
  }
  
  const result = multiply(5, multipleSameNum);
  console.log("Result:", result);


  