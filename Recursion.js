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

console.log(SumRange(10));
