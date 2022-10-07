function anagram(str1, str2) {
  // check if two strings are of same length
  const isSameLength = str1.length === str2.length;
  if (!isSameLength) {
    return `Not Anagram`;
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

// console.log(anagram("room", "moor"));

function anagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return `Not Anagram`;
  }
  // construct an object
  let lookUpValue = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookUpValue[letter]
      ? (lookUpValue[letter] += 1)
      : (lookUpValue[letter] = 1);
  }
  // loop over second string and compare it

  for (i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // if letter does not match return false
    if (!lookUpValue[letter]) {
      return false;
    } else {
      // decrease
      lookUpValue[letter] -= 1;
    }
  }
  return true;
}

console.log(anagram2("moore", "eroom"));
