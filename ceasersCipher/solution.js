function rot13(str) { // LBH QVQ VG!
  var i = 0;
  var num = 0;
  var oldString = str.split("");
  var newString = [];
  while (i < str.length) {
    if (String.charCodeAt(oldString[i]) < 65 || String.charCodeAt(oldString[i]) > 90) {
      newString.push(oldString[i]);
    } else if (String.charCodeAt(oldString[i]) >= 78 && String.charCodeAt(oldString[i]) <= 90) {
      num = String.charCodeAt(oldString[i]);
      newString.push(String.fromCharCode(num - 13));
    } else if (String.charCodeAt(oldString[i]) < 78 && String.charCodeAt(oldString[i]) >= 65) {
      num = String.charCodeAt(oldString[i]);
      newString.push(String.fromCharCode(num + 13));
    }
    i++;
  }
  
  return newString.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");