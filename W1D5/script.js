// function counter() {

//   for (var num = 0; num <= 5; num++) {
//     console.log(num);
//   }

//   console.log("Happy Weekend")
//   return "Happy Friday"

// }

// //below is the way we actually start our function

// counter()




















function counter(startNum) {
  //The function is expecting some PARAMETER in order to run
  for (var num = startNum; num >= 0; num--) {
    console.log(num);
  }
}
counter(3);
