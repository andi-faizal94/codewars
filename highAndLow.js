function highAndLow(numbers) {
  const allNumbers = numbers.split(" ").map(Number);
  const highest = Math.max(...allNumbers);
  const lowest = Math.min(...allNumbers);
  return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
