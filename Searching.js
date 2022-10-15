// Linear Search

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

const MyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Value = 9;
linearSearch(MyArr, Value);
