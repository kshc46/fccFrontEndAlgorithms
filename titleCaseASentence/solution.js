function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i in str) {
    str[i] = str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase());
  }
  return str.join(' ');
}

titleCase("I'm a little tea pot", "");