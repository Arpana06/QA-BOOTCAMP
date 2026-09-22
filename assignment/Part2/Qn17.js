function getCity(user) {
  return user?.address?.city ?? 'Unknown';
}

console.log(getCity({ address: { city: 'Butwal' } }));  // Delhi
