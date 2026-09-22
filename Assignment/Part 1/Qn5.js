//Task: Write factorial(n) that returns n! (n × (n-1) × … × 1). factorial(0) should return 1.
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("The factorial is: " + factorial(10));