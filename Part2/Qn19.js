function getAdults(people) {
  return people.filter(p => p.age >= 18);
}

console.log(getAdults([{ name: 'Arpana', age: 24 }, { name: 'Aashish', age: 18 }]));
