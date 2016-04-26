function truncateString(str, num) {
  var slice = "";
  if (str.length > num) {
    if (num<4) {
      slice = str.slice(0,-(str.length-num));
      return slice.concat("...");
    } else {
      slice = str.slice(0,-(str.length-num+3));
      return slice.concat("...");
    }
  } else {
      return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
