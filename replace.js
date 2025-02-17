const replace = (w) =>
  w
    .split("")
    .map((e) => (["a", "e", "i", "o", "u"].includes(e.toLowerCase()) ? "!" : e))
    .join("");

console.log(replace("Hi!"));
