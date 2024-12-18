function expandedForm(num) {
  const numStr = num.toString();
  const length = numStr.length;

  const expandedParts = numStr
    .split("")
    .map((digit, index) => {
      digit * Math.pow(10, length - index - 1);
    })
    .filter((value) => value > 0);

  return expandedParts.join(" + ");
}
expandedForm(12);
