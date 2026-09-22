function totalPrice(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

console.log(totalPrice([{ price: 100 }, { price: 500 }, { price: 200 }]));