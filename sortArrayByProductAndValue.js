function sortByValueAndIndex(array) {
  //   let allArray = [];
  //   array.map((a, i) => {
  //     const num = a + (i + 1);
  //     allArray.push(num);
  //     console.log({ num });
  //   });
  //   return allArray.sort((a, b) => a - b);

  return array
    .map((value, index) => ({ value, product: value * (index + 1) }))
    .sort((a, b) => a.product - b.product)
    .map((item) => item.value);
}

console.log(sortByValueAndIndex([26, 2, 3, 4, 5]));
