function oddCount(n) {
  let odds = [];
  for (let i = 1; i < n; i += 2) {
    console.log(i);
    odds.push(i);
  }
  console.log({ odds: odds?.length });
  return odds.length;
}
console.log(oddCount(15));
