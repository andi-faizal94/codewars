function transposeTwoStrings(array) {
  //   console.log(array);

  for (let a = 0; a < array.length; a++) {
    const x = array[a].split("");

    for (let y = 0; y < x.length; y++) {
      console.log(x[y]);
      //   return `${x[y]} \n`;
    }
  }
  return "";
}

console.log(transposeTwoStrings(["Hello", "World"]));
