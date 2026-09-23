function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
setTimeout(() => console.log(' Promise'), 0);
delay(1000).then(() => console.log('Hi (after 1s)'));

