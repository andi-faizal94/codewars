function smash(words) {
  if (words?.length <= 0) return "";

  return words.toString().split(",").join(" ");
}

// const x = new Map();

// x.set("a", 1);
// x.set("baru", "nama");
// x.set("bar", "foo").set(1, "foobar").set(2, "baz");

// const all = Array.from(x, ([name, total, edc]) => ({
//   name,
//   total,
//   note: "",
//   edc,
// }));
// console.log({ x, all });

// console.log(smash(["hello", "world"]));

const x = [
  { name: "nadi", total: 90 },

  { name: "rahma", total: 90 },
  { name: "rifan", total: 90 },
  { name: "cash", total: 7 },
  { name: "cash", total: 5 },
  { name: "cash", total: 7 },
];

const reducer = x?.filter((a) => {
  let total = 0;

  // console.log({ a, b });
  // console.log(a + b?.total);
  // return a + b?.total;

  if (a?.name === "cash") {
    total += a?.total;
  }
  // console.log({ total });
  return total;
}, 0);

let total = 0;
let array = [];

for (let a = 0; a < x?.length; a++) {
  // console.log({[a]})

  if (x[a]?.name === "cash") {
    total += x[a]?.total;
    array.push({
      total: total,
    });
  }
  // else {
  //   array.push({
  //     total: total,
  //   });
  // }
}

const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  Object.defineProperty(obj, "c", { enumerable: false });
}

console.log({ obj });
// console.log({ reducer });
