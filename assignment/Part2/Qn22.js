function sumEvenSquares(nums) {
  return nums
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((sum, n) => sum + n, 0);
}

console.log(sumEvenSquares([2, 9, 4]));  // 20