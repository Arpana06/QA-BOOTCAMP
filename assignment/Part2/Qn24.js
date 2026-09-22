class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ValidationError';
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError('Age must be positive');
  }
  return age;
}

console.log(validateAge(30));   // ✅ only this line runs → prints: 30

try {
  validateAge(10);
} catch (err) {
  console.log(err.name + ': ' + err.message);
}