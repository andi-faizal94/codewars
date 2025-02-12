function sumMul(n, m) {
  if (m <= 0) {
    return "INVALID";
  }
  let number = 0;
  for (let a = n; a < m; a += n) {
    number += a;
  }
  return number;
}

console.log(sumMul(2, 9));
