// similar to bubble sort but instead of checking two values and swapping
// we will go through data and find and place smallest value at beginning.
// we keep doing that until array is sorted
function SelectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = list[i];
      list[i] = list[min];
      list[min] = temp;
    }
  }
  return list;
}

const list = [21, 343, 121, 43, 21, 545, 65, 324];
console.log(SelectionSort(list));
