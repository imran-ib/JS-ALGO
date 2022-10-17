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

// console.log(charCount("Hello World!, From Web Dev"));

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === val) {
    return mid;
  }
  return -1;
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
const value = 17;
console.log(binarySearch(arr, value));
