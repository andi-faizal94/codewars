function findOutlier(integers) {
  for (let a of integers) {
    if (a % 2 == 0) {
      return a;
    } else if (a % 2 != 0) {
      return a;
    }
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
