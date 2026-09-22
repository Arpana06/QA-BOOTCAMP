//Task: Write countVowels(str) that returns how many vowels (a, e, i, o, u) are in the string. Case-insensitive.
function countVowels(str) {
  let count = 0;
  for (const char of str.toLowerCase()) {
    if ("aeiou".includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Qniverse"));