function anagram(str1, str2) {
  // check if two strings are of same length
  const isSameLength = str1.length === str2.length;
  if (!isSameLength) {
    return;
  }
  // sort the strings
  const str1Sorted = str1.split("").sort().join("");
  const str2Sorted = str2.split("").sort().join("");
  // compare them
  const isMatch = str1Sorted === str2Sorted;
  if (!isMatch) {
    return false;
  }
  return true;
}

console.log(anagram("room", "moor"));
