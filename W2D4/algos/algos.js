var arr2d = [
  [2, 5, 8],
  [3, 6, 1, 3],
  [5, 6, 7],
];

console.log(arr2d[1][2]);

function isPresent2d(array, value) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < innerArr.length; j++) {
      console.log(arr2d[i][j]);
      //code goes here
      // if (){

      // }
    }
  }
}

isPresent2d(arr2d, 3);

// for(var i = 0; i< arr2d.length; i++){
//     var innerArr = arr2d[i];
//     for (var j =0; j< innerArr.length; j++){
//         console.log(arr2d[i][j])
//     }
// }

// Think of nested for loops as a clock.
// For every sequence of turns of the long hand (inner for loop),
// The outer hand will move (outer for loop).
