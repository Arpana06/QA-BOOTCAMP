//Task: Write sumEven(n) that returns the sum of all even numbers from 1 to n (inclusive).
//let n=10 
function sumEven(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) total += i;
  }
  return total;
}
console.log(sumEven(10)); 