var word = "";
var array = [];
var revArray = [];
var revWord = "";
var newWord = "";


function palindrome(str) {
  
  word = str.toLowerCase();
  newWord = word.replace(/[^0-9a-z]/g, '');
  array = newWord.split("");  
  revArray = array.reverse();
  revWord = revArray.join("");
  
  if (newWord === revWord) {
    return true;
  } 
  
  if (newWord !== revWord) {
    return false;
  }
  
}



palindrome("nope");
