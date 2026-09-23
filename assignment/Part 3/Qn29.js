function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: 'User' + id });
    }, 500);
  });
}
async function loadAll() {
  const start = Date.now();
  const results = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3),
  ]);
  const elapsed = Date.now() - start;
  console.log(results);              // [user1, user2, user3]
  console.log('Elapsed ms:', elapsed); // should be ~500ms, not ~1500ms
  return results;
}

loadAll();