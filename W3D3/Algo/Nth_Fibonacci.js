
// Const, Let, and if/else statements:

// let and const declarations can only be accessed within the block they were declared.



// function example(){

// }

// What is 'const'?

//const cannot be updated or re-declared

// So if we declare a variable with const, we can neither do this:

// const greeting = "say Hi";

// greeting = "say Hello instead";

// console.log(greeting)

// error: Assignment to constant variable. 

//What is 'let'?

// let can be updated but not re-declared.


// Unlike var, a let variable cannot be re-declared within its scope. So while this will work:

    // let greeting = "say Hi";
    // greeting = "say Hello instead";

    // console.log(greeting)


// this will return an error:

    // let greeting = "say Hi";
    // let greeting = "say Hello instead"; 
    // console.log( greeting)
    // error: Identifier 'greeting' has already been declared


// However, if the same variable is defined in different scopes, there will be no error:

    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); 
      
    }
    console.log(greeting); 







//How to write an if/else statement in a new way:




// let stopLight = "red";

// stopLight == "red"? console.log("I'm staying here"): console.log("I'm going");


// if (stopLight == "red"){
  //console.log("I'm staying here") 
//}
// else{
//   console.log("I'm going")
// }












// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, 
// the second number is 1, and the nth number is the sum of the (n -1)th and (n -2)th numbers.
// Write a function that takes in an integer n and returns the nth Fibonacci number.

// Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1.
//  For the purpose of this question, the first Fibonnacci number is F0; 
//  therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..




//counting from 1 in the Fibonnacci Sequence
// 0,1,1,2,3,5,8,13,21,34,55



// Because: 0 + 1 = 1, and 1 + 1 = 2, and 1 + 2 = 3, and 2 + 3 = 5 and so on.....


function getNthFib(n) {
  let lastTwo = [0,1];
  //Your code here
  
  


  return n > 1 ? lastTwo[1] : lastTwo[0];
}
getNthFib();









// ----------------- Answer Below --------------





function getNthFib(n) {
  const lastTwo = [0,1];
  let counter = 3;
  while (counter <= n){
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++
  }


  return n > 1 ? lastTwo[1] : lastTwo[0];
}
console.log(getNthFib(2));

// var      |  val
// --------------
//  n       |  5
// lastTwo  |  [0,1], [1,1], [1,1], [1, 2], [2, 3]
// counter  |  3, 4, 5, 6
// nextFib. |  1, 2, 3
// return   |  3




