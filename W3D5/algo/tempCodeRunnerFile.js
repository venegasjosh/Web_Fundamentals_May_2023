function removeArr(arr,index){
  var removed = arr[index];
  if (index >= arr.length || index < 0){
    return null;
  }
  for (var i = index; i < arr.length-1; i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  return removed;
}

console.log(removeArr([1,2,3]), 2)