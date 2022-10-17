//NOTE - Recursion is a process (usually a function) that calls itself.

function countDown(num) {
  //!SECTION stopping Point
  if (num <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(10);

function SumRange(num) {
  if (num === 1) return 1;
  return num + SumRange(num - 1);
}

// console.log(SumRange(10));

// Factorial
// syntax (4!) that would be 4 factorial
// meaning 4 * 3 * 2 * 1
function nonRecursiveFactorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
// console.log(nonRecursiveFactorial(4));

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4));
