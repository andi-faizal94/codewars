function digitize(n) {
  let helperArray = [];
  const allNumber = n.toString().split("").reverse().join("");
  helperArray.push(Number(allNumber));
  return helperArray;
}

function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

console.log(digitize(35231));
