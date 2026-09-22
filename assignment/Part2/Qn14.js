function describe(user) {
  const { name, email } = user;
  return ` name: ${name} email: ${email}`;
}
const u = { name: 'Arpana', email: 'arpana@email.com', age: 30 };
console.log(describe(u));