// We will write two function
// MergeSort => its job is to break an array into smaller junks.
// Merger => its job is to merge two sorted array into one array

// Merger - STEPS
// 1- Merger function will take two arrays (call them left and right)
// 2- Create and empty array and call it result
// 3- While there are still items left in both array loop over them
//- 3.1- if the first element of left is less then the first element of right
// shift the element from left into our result array
// 3.2- else shift the element from right into result array
// 4- after loop is finished take every thing from the array that still has stuff init and put it in result array

function Merger(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

// const list1 = [1,2,3]
// const list2 = [4,5,6]
// Merger(list1, list2)

// MergeSort - STEPS
// purpose -> takes an array and divide it into as small junks as possible
// 1- it will be recursive function so we need to take care of breaking out of function at some point
// if array has one or less element inside it return
// 2- Create mid point of array (center point)
// we will divide array at that center points
// 3- Create left half from start up until center point (slice method)
// 4- Create the right half from center up until end
// 5- recursively call MergeSort on both left and right half
// 6-Merger needs two arguments, so pass these two recursive functions to Merger.

function MergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const MergedLeft = MergeSort(left);
  const MergedRight = MergeSort(right);
  return Merger(MergedLeft, MergedRight);
}

MergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

function Merge(list1, list2) {
  let result = [];
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < list1.length && idx2 < list2.length) {
    if (list2[idx2] > list1[idx1]) {
      result.push(list1[idx1]);
      idx1++;
    } else {
      result.push(list2[idx2]);
      idx2++;
    }
  }

  while (idx1 < list1.length) {
    result.push(list1[idx1]);
    idx1++;
  }

  while (idx2 < list2.length) {
    result.push(list2[idx2]);
    idx2++;
  }

  return result;
}

// Merge([0,1,3,5,10] ,[2,4,6,7,8,9])

function MergeSort(list) {
  if (list.length <= 1) {
    return list;
  }
  let mid = Math.floor(list.length / 2);
  let right = MergeSort(list.slice(0, mid));
  let left = MergeSort(list.slice(mid));
  return Merge(left, right);
}

const List = [9, 8, 5, 7, 0, 6, 4, 1, 3, 2];
console.log(MergeSort(List));
