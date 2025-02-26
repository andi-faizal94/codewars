function partlist(arr) {
  //   return arr
  //     .map((_, i) => {
  //       console.log(arr.length - 1);
  //       if (i === arr.length - 1) return;
  //       return [arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")];
  //     })
  //     .filter(Boolean);

  let array;
  let returnArray = [];

  for (let a = 1; a < arr.length; a++) {
    array = [];
    array.push(arr.slice(0, a).join(" "));
    array.push(arr.slice(a).join(" "));
    returnArray.push(array);
  }

  return returnArray;

  //   var newArray;
  //   var returnArray = [];
  //   for (var i = 1; i < arr.length; i++) {
  //     newArray = [];
  //     newArray.push(arr.slice(0, i).join(" "));
  //     newArray.push(arr.slice(i).join(" "));

  //     returnArray.push(newArray);
  //   }

  return returnArray;
}

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));
