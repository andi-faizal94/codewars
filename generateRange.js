function generateRange(min, max, step) {
  let numbers = [];
  for (let a = min; a <= max; a += step) {
    numbers.push(a);
  }
  return numbers;
}
generateRange(2, 10, 2);
