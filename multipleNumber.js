function multiTable(number) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let string = "";
  for (let a = 1; a <= numbers.length; a++) {
    const result = a * number;
    if (a === numbers.length) {
      const result = a * number;
      return (string += `${a} * ${number} = ${result}`);
    }
    string += `${a} * ${number} = ${result}\n`;
  }
  return string;
}

console.log(multiTable(5));
