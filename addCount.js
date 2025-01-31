function oddCount(n) {
  let odds = [];
  for (let i = 1; i < n; i += 2) {
    odds.push(i);
  }
  return odds.length;
}
console.log(oddCount(15023));
