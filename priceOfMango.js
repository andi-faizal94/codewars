function mango(quantity, price) {
  const total = (quantity - Math.floor(quantity / 3)) * price;
  return total;
}
