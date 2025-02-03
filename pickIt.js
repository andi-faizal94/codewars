function pickIt(arr) {
  let odd = [],
    even = [];

  for (let a = 0; a < arr.length; a++) {
    if (arr[a] % 2 === 0) {
      even.push(arr[a]);
    } else {
      odd.push(arr[a]);
    }
  }

  return [odd, even];
}
