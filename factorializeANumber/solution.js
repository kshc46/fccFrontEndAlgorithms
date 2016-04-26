var i = 0;
var counter = 1;

function factorialize(num) {
  if (num > 0) {
    while (i < num) {
      counter = counter * (i + 1);
      i++;
    }
  } else if (num === 0) {
    counter = 1;
  }
  return counter;
}

factorialize(5);
