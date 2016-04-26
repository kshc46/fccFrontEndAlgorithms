function destroyer(arr) {
  var tested = arguments[0];
  var count = 1;
  var newArr = [];
  
  while(count < arguments.length) {
    for (var i in tested) {
      if(tested[i] !== arguments[count]) {
        newArr.push(tested[i]);       
      }
    }
    tested = newArr;
    newArr = [];
    count++;
  }
    
  return tested;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
