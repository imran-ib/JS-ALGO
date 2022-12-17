// we pick an item and put it in its right spot
function InsertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let currentValue = list[i];
    for (var j = i - 1; j >= 0 && list[j] > currentValue; j--) {
      list[j + 1] = list[j];
    }
    list[j + 1] = currentValue;
  }
  return list;
}

const list = [21, 343, 121, 43, 21, 545, 65, 324];
console.log(InsertionSort(list));
