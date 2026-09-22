//Task: Write wordCount(sentence) that returns an object mapping each word to how many times it appears.
function wordCount(sentence) {
  const obj = {};
  for (const word of sentence.split(" ")) {
    obj[word] = (obj[word] || 0) + 1;
  }
  return obj;
}
console.log(wordCount("a r p a n a"));