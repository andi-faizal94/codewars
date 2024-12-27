function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0;
  marks.map((a) => {
    sum += a;
  });
  return Math.floor(sum / marks.length);
}

getAverage([2, 2, 2, 2]);
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
