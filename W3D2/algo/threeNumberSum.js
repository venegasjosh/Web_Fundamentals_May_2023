//

//Sorting - using JavaScript's inbuilt sort function

//How does the ".sort()" work?

// var stringArray = ["Apple", "Orange", "Bannana"]

// console.log(stringArray.sort())

// var array1 = [1, 30, 4, 21, 100000];

// console.log(array1.sort())

//Arrow Function

// An arrow function is a concise way to write a function in
// JavaScript that was introduced in ES6. It is a compact alternative to
// a traditional function expression, with some semantic differences and deliberate
// limitations in usage . Here's a brief summary of how an arrow function is different
// than a normal function:

// Arrow functions are always unnamed, but can be assigned to a variable so it has a name .
// Arrow functions cannot be used as constructors and should not be used as methods as they
// don't have their own bindings to this, arguments, or super.
// The this keyword behaves differently in arrow functions compared to regular functions.
// In arrow functions, this always represents the object that defined the arrow function,
// while in regular functions, this represents the object that called the function .

//What is the difference between using "array.sort()" and array.sort((a,b) => a - b)?

//Do some research on this and t-diagram to explain how it works.

// var array2 = [1, 30, 4, 21, 100000, -5];

// console.log(array2.sort())

// var array3 = [1, 30, 4, 21, 100000, -5];

// console.log(array3.sort((a,b) => a - b))

// Three Number Sum

// Write a function that takes in a non-empty array of distinct integers
// and an integer representing a target sum.
// The function should find all triplets in the array that sum up to the target sum
// and return a two-dimensional array of all these triplets.
// The numbers in each triplet should be ordered in ascending order, and the triplets themselves
// should be ordered in ascending order with respect to the numbers
// they hold. If no three numbers sum up to the target sum,
// the function should return "No three numbers sum up to the target sum".

// sample Input
// array= [12,3,1,2,-6,5,-8,6]
// targetSum = 0;

// Sample Output
// [[-8,2,6],[-8,3,5],[-6,1,5]]

// -------------

function threeNumberSum(array, targetSum) {
  // this sorts the array with negative on the left, and positive on the right
  array.sort((a, b) => a - b);
  // this will hold the triplets
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
