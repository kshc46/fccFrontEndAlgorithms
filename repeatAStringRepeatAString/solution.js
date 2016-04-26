function repeatStringNumTimes(str, num) {
  var string = "";
  var i = 0;
  while (i < num) {
    string = string.concat(str);
    i++;
  }
  return string;
}

repeatStringNumTimes("abc", 3);
