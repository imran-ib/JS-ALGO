// Elementary Sorting Algorithms
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //check if current item is greater then next item
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// above code is working but it is looping every with every item even if item is already sorted
// we can improve this by following code

function bubbleSortImproved(arr) {
  // make the loop start from the end toward beginning
  // start i at length
  // decrement with every step until i is 0
  for (let i = arr.length; i < 0; i--) {
    // until j is less then i - 1
    for (let j = 0; j < i - 1; j++) {
      //check if current item is greater then next item
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSortES2016Version(arr) {
  const swap = (arr, indexOne, indexTwo) => {
    [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];
  };
  // improved Version
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function bubbleSortOptimized(arr) {
  let noSwaps;
  const swap = (arr, indexOne, indexTwo) => {
    [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];
  };
  // improved Version
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// with Do while

function bubbleSortWithDoWhileLoop(arr) {
  let noSwap;
  const swap = (arr, indexOne, indexTwo) => {
    [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];
  };
  do {
    noSwap = false;

    for (let i = 0; i < arr.length; i++) {
      console.log(i);
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        noSwap = true;
      }
    }
  } while (noSwap);
  return arr;
}

// in some cases array is almost sorted and we only need few loops to sort the array
// but with above method we will loop every item even it is already sorted
// we will check with every loop if array is sorted and we break out

const list = [23, 3, 45, 22, 32, 1, 5, 10, 28, 25];
console.log(bubbleSortWithDoWhileLoop(list));
