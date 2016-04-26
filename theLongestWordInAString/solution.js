function findLongestWord(str) {
  
  var wordArray = [];
  var i = 0;
  var longest = 0;
  var word = "";
  
  wordArray = str.split(" ");
  while (i < wordArray.length) {
    if (wordArray[i].length > longest) {
      longest = wordArray[i].length;
    }
    i++;
  }
  
  return longest;
}

