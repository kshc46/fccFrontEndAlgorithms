function chunkArrayInGroups(arr, size) {

  var newArr = [];
  var count = 0;
  var finArr = [];
  
  while(count < arr.length) {
    newArr.push(arr[count]);
    if (newArr.length === size) {
      finArr.push(newArr);
      newArr =[];
    } else if (count === (arr.length -1)) {
      finArr.push(newArr);
    }
    count++;
  }
  
  return finArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
