function CountUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j)
  }
  return i + 1;
}

console.log(CountUniqueValues([1, 1, 2, 2, 3.3, 4, 4, 5, 5, 6, 6]));
