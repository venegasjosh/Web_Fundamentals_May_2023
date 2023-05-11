//Swapping Using Temp and While Loops

// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1);

//-----------------

// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit1 = fruit2;
// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1);

//-----------------

// var start = 0;
// var end = 12;

// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

//---------------

// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

var arr = ["a", "b", "c", "d", "e"];
// we expect to get back...

// ["e", "d", "c", "b", "a"];



//solution (using for loop):

// function reverse(arr) {
//   for (var i = 0; i < arr.length/2; i++) {
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
//   }

//   return arr;
// }

// console.log(reverse(arr))


//solution (using while loop):

function reverse(arr){
  var i = 0;
  while(i < arr.length/2){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
    i++;
  }
  return arr;
}

console.log(reverse(["a","b","c","d","e"]))