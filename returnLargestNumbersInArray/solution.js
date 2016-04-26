function largestOfFour(arr) {
  var newArray = [];
  var largest = 0;
    for (var i in arr) {
      for (var ii in arr[i]) {
        if (arr[i][ii] > largest) {
          largest = arr[i][ii];
        }
      }
      newArray.push(largest);
      largest = 0;
    }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
