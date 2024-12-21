function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    const a = i * x;
    z.push(a);
  }
  console.log({ z });
  return z;
}
countBy(1, 10);
