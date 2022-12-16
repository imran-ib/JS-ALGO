// Quick Sort -> Ref digital Ocean web article
// INTRO- We will select a number and call it pivot.
// We will Loop over the array and Sort the array in a way That all the items that are less than our pivot we will put them on the left side and all the items that are greater than our pivots we will  put them on the right side. When our pivot is in right spot we will pick a new pivot and do the same thing again.

// STEP 1- We need Four Parts
// 1.1 Swapper
// 1.2 pivot Point
// 1.3 For Loop
// 1.4 Pointer -> this is just a placeholder for our pivot
// STEP 2 - Create Swapper
// STEP 3 - Create a function Named pivot. This function will take three Arguments, an array. left(starting point - 0) point, right(end Point -> arr.length + 1) point
// STEP 4 - Create pivot, we can pick any pivot point from array. in this case we will pick our left(starting point)
// Create pointer and set it to starting point (left)
// STEP 5 - Create a For Loop. start the from left point instead of 0.
// STEP 6 - inside Loop Check if Our Current element is less then out pivot.  if so
// 6.1 - Move the pointer one step to the right(increment by one(++))
// 6.2 - swap pointer with current index.
// STEP 7 - outside of loop swap left (starting point) with current pointer.
// our left is our starting point, so by doing step 7 our point will be our starting point for next loop.
// STEP 8 - Return Pointer
function Swapper(list, indexOne, indexTwo) {
  return ([list[indexOne], list[indexTwo]] = [list[indexTwo], list[indexOne]]);
}
function pivot(arr, left = 0, right = arr.length - 1) {
  let pivot = arr[left];
  let pointer = left;

  for (let i = left + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pointer++;
      Swapper(arr, pointer, i);
    }
  }
  Swapper(arr, left, pointer);
  return pointer;
}

// QUICK SORT
// STEP 1- Create a QuickSort function. this function will take an arr.
// STEP 2- Create left(starting point - 0) point, and right(end Point -> arr.length) point.
// STEP 3- if our left is greater then or equal to our right return arr. That means we have reached at the end of our array. So we return array.
// STEP 4- call our pivot function and Pass it arr , left, right.  and save it in variable called pivotIndex.
// STEP 5- call recursive QuickSort and pass it arr, left and pivotIndex.
// 5.1 this will sort left half of the array
// STEP 6- call recursive QuickSort again with arr , pivotIndex + 1 and right
// 6.1 this will sort right half of the array
// STEP 7- return arr.

function QuickSort(arr, left = 0, right = arr.length - 1) {
  let pivotIndex = pivot(arr, left, right);

  if (left > right) {
    return arr;
  }

  QuickSort(arr, left, pivotIndex - 1);
  QuickSort(arr, pivotIndex + 1, right);
  return arr;
}

const unsortedArr = [
  31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37,
  7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50,
  46, 25, 18, 33, 47, 4, 45, 39, 23, 2,
];
console.log(QuickSort(unsortedArr));
