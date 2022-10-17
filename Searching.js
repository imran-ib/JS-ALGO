// Linear Search
//NOTE - Data can be unsorted
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

const MyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Value = 9;
// linearSearch(MyArr, Value);

// Binary Search
// Binary Search

function binarySearch(arr, value) {
  let leftSide = 0;
  let rightSide = arr.length - 1;
  let middle = Math.floor((leftSide + rightSide) / 2);

  while (arr[middle] !== value && leftSide <= rightSide) {
    if (value < arr[middle]) {
      rightSide = middle - 1;
    } else {
      leftSide = middle + 1;
    }
    middle = Math.floor((leftSide + rightSide) / 2);
  }
  if (arr[middle] === value) {
    return middle;
  }
  return -1;
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
const value = 10;

// console.log(binarySearch(arr, value));

function NaiveStringSearch(strg, pttrn) {
  let count = 0;
  for (let i = 0; i < strg.length; i++) {
    for (let j = 0; j < pttrn.length; j++) {
      if (pttrn[j] !== strg[i + j]) {
        break;
      }
      if (j === pttrn.length - 1) {
        count++;
      }
    }
  }
  return count;
}
console.log(NaiveStringSearch("Hello How Are You Hello Hello", "Hello")); // 3
