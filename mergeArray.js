// function mergeArrays(a, b) {
//   let helper = [];
//   if (b.length > a.length) {
//     for (let x = 0; x < b.length; x++) {
//       if (x < a.length) helper.push(a[x]);
//       if (x < b.length) helper.push(b[x]);
//     }
//   } else if (b.length < a.length) {
//     for (let x = 0; x < a.length; x++) {
//       if (x < a.length) helper.push(a[x]);
//       if (x < b.length) helper.push(b[x]);
//     }
//   } else {
//     for (let x = 0; x < a.length; x++) {
//       if (x < a.length) helper.push(a[x]);
//       if (x < b.length) helper.push(b[x]);
//     }
//   }
//   return helper;
// }

function mergeArrays(a, b) {
  let result = new Array(a.length + b.length);
  // console.log({ result });

  for (let i = 0; i < a.length + b.length; i++) {
    console.log(a[i / 2], b[Math.floor(i / 2)]);
    if (i % 2 == 0) result[i] = a[i / 2];
    else result[i] = b[Math.floor(i / 2)];
  }

  if (a.length > b.length) {
    result = [...result.slice(0, b.length * 2), ...a.slice(b.length)];
    console.log({ result: result.slice(0, b.length * 2) });
  } else {
    result = [...result.slice(0, a.length * 2), ...b.slice(a.length)];
    console.log({ result });
  }

  return result;
}

mergeArrays([62, 63, 28, 5, 65], ["t", "c", "q", "p", "k", "b", "y", "e", "p"]);

// console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]));
