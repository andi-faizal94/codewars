var countSheep = function (num) {
  let str = "";
  if (num === 0) return "";
  for (let a = 1; a <= num; a++) {
    str += `${a} sheep...`;
  }
  return str;
};
