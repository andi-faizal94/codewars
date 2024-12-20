function add(a, b) {
  let carry = 0;
  let result = [];

  // Make sure both strings are the same length by padding with leading zeros
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  // Iterate from the last digit to the first
  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = parseInt(a[i], 10) + parseInt(b[i], 10) + carry;
    result.unshift(sum % 10); // Add the last digit of the sum to the result
    carry = Math.floor(sum / 10); // Calculate the carry
  }

  // If there's a carry left, add it to the result
  if (carry > 0) {
    result.unshift(carry);
  }

  return result.join(""); // Join the array into a string
}

console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
