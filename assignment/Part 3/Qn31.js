function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function withTimeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject('Timed out'), ms);
  });
  return Promise.race([promise, timeoutPromise]);
}

// Test: delay(3000) is slower than the 1000ms timeout -> should reject 'Timed out'
withTimeout(delay(300), 1000)
  .then(result => {
    console.log('Resolved:', result);
  })
  .catch(err => {
        console.log('Rejected:', err); // 'Timed out'
  });