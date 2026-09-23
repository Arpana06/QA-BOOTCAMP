async function retry(fn, times) {
  let lastError;
  for (let attempt = 1; attempt <= times; attempt++) {
    try {
      const result = await fn();
      return result; // success — stop retrying immediately
    } catch (err) {
      lastError = err;
      console.log(`Attempt ${attempt} failed: ${err.message}`);
    }
  }
  throw lastError; // every attempt failed — re-throw the last error
}

// Flaky test function: fails on the first 2 calls, succeeds on the 3rd
let flakyAttempts = 0;
function flakyFetch() {
  return new Promise((resolve, reject) => {
    flakyAttempts++;
    if (flakyAttempts < 5) {
      reject(new Error('Failure'));
    } else {
      resolve('Success on: ' + flakyAttempts);
    }
  });
}

async function testRetry() {
  try {
    const result = await retry(flakyFetch, 6);
    console.log('Retry result:', result);
  } catch (err) {
    console.log('Retry ultimately failed:', err.message);
  }
}

testRetry();