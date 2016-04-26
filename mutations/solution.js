function mutation(arr) {
  var count = 0;
  arr[0]=arr[0].toLowerCase();
  var test = arr[1].toLowerCase().split("");
  
  for (var i in test) {
    if (arr[0].indexOf(test[i]) >= 0) {
      count++;
    }
  }
  
  return count === arr[1].length;
}

mutation(["hello", "Hello"]);
