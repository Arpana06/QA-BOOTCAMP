//Task: Write reverseNumber(n) that returns the digits of n reversed, as a number. Do not convert to a string.
function reverseNumber(n) {
  let reversed = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return reversed;
}
console.log(reverseNumber(98415));