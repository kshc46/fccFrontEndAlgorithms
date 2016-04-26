var turkey = [];
var gravy = [];
var potato = "";

function reverseString(str) {
  turkey = str.split("");
  gravy = turkey.reverse();
  potato = gravy.join("");
  return potato;
}

reverseString("hello");
