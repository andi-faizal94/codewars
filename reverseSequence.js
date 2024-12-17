const reverseSeq = (n) => {
  let helper = [];
  for (let i = n; i >= 1; i--) {
    helper.push(i);
  }
  return helper;
};

console.log(reverseSeq(5));
