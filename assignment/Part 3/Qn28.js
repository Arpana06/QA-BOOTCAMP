function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: 'User' + id });
    }, 1000);
  });
}
 
async function getUser() {
  const user = await fetchUser(1);
    console.log(user); // { id: 1, name: User1' }
}
 
getUser();