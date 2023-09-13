//synchronous

function add(a, b) {
    console.log("Adding numbers synchronously...");
    const result = a + b;
    return result;
  }
  
  console.log("Start");
  
  const sum = add(3, 5);
  
  console.log("Result:", sum);
  
  console.log("End");
  
//asynchronous
function Print(){
    console.log('shrikant')
}
setTimeout(Print, 2000)

function PrintMe(){
    console.log("BridgeLabz")
}
function Test(){
    console.log("print Meassage waiting for replay from bridgelabz")
}
setTimeout(PrintMe, 3000);
Test();