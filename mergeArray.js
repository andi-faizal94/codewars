function mergeArrays(a, b) {
  let helper = [];
  if (b.length > a.length) {
    for (let x = 0; x < b.length; x++) {
      if (x < a.length) helper.push(a[x]);
      if (x < b.length) helper.push(b[x]);
    }
  } else if (b.length < a.length) {
    for (let x = 0; x < a.length; x++) {
      if (x < a.length) helper.push(a[x]);
      if (x < b.length) helper.push(b[x]);
    }
  } else {
    for (let x = 0; x < a.length; x++) {
      if (x < a.length) helper.push(a[x]);
      if (x < b.length) helper.push(b[x]);
    }
  }
  return helper;
}

console.log(
  mergeArrays(
    [62, 63, 28, 5, 65],
    ["t", "c", "q", "p", "k", "b", "y", "e", "p"]
  )
);

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]));
