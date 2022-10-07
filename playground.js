function charCount(str) {
  var res = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (res[char] > 0) {
      res[char]++;
    } else {
      res[char] = i;
    }
  }
  return res;
}

console.log(charCount("Hello World!, From Web Dev"));

