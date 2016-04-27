function getIndexToIns(arr, num) {
  var array = arr.push(num);
  array = arr.sort(function(a, b){return a-b;});
  
  var i = 0;
  while (i < array.length) {
    if (array[i] === num) {
      return i;  
    }
    i++;
  }
}

getIndexToIns([2,5,10], 15);
