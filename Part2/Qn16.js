function sumAll(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(sumAll(10, 12, 13));  