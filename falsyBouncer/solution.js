function bouncer(arr) {

  var finArr = [];
  
  for (var i in arr) {
    if (Boolean(arr[i])){
      finArr.push(arr[i]);
    }
  }
  
  return finArr;
}

bouncer([7, "ate", "", false, 9]);
