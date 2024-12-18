function positiveSum(arr) {
  const filterNum = arr
    .filter((a) => {
      if (a < 0) {
        return 0;
      } else {
        return a;
      }
    })
    .reduce((a, b) => a + b, 0);
  return filterNum;
}

positiveSum([-1, 2, 3, 4, 5]);
