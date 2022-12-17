//NOTE - We will create 10 buckets for each base 10 number (0-9). we will check the right most digit and put it in same bucket (for example 1234 -> put it in 4th bucket). Put them back in new order and repeat the process for second last digit. After doing this for each digit we will have our sorted array.

//ANCHOR - HELPERS

// GET DIGIT
// this helper will get the right most digit in a number. for example number is 1234. this should give us 4.
// STEPS FOR GET DIGIT -> we can do this in two ways.
//1- convert number to string and get first digit
//2 - use Math.pow method

// GET DIGIT with numbers
//STEP- 1 create a function named GetDigit with number. this function will take two arguments. number and place.
// Math.abs() will return absolute number. (convert negative numbers to positive).
// Math.pow() returns the number based to the power (number is provided)
// Math.floor() will floor the number
// % is called remainder operator. will return remaining number after certain operation.
function GetDigit(num, place) {
  let absNum = Math.abs(num);
  let powNum = Math.pow(10, place);
  return Math.floor((absNum / powNum) % 10);
}

GetDigit(1234, 0); // 4
GetDigit(1234, 1); // 3

// Method Two convert number to string
// 1 create a function and called it GetDigitString -> will take two args-> num or place(index)
// 2 covert number to string
// 3 define the end point (srt.length -1 )
// 4

function GetDigitString(num, index) {
  let numStr = String(num);
  let endPoint = numStr.length - 1;
  const found = numStr[endPoint - index];
  if (!found) {
    return undefined;
  }
  return Number(found);
}

GetDigitString(5678, 0); // 8

GetDigitString(5678, 1); // 7

// DIGIT COUNT

function DigitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// MOST DIGIT -> which number contains most digits.

function GetMostDigitNum(list) {
  let MaxDigit = 0;

  for (let i = 0; i < list.length; i++) {
    MaxDigit = Math.max(MaxDigit, DigitCount(list[i]));
  }
  return MaxDigit;
}

GetMostDigitNum([12, 343, 1221, 23212]); // 5

function RadixSort(arr) {
  let mostDigitCount = GetMostDigitNum(arr);

  for (let i = 0; i < mostDigitCount; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      // get digit
      const digit = GetDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }

    arr = buckets.flat();
  }
  return arr;
}

const list = [
  31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37,
  7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50,
  46, 25, 18, 33, 47, 4, 45, 39, 23, 2,
];

console.log(RadixSort(list));

