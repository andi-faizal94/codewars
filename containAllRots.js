function containAllRots(strng, arr) {
  if (arr.includes(strng)) {
    return true;
  } else if (strng === "") {
    return true;
  } else {
    return false;
  }
}

console.log(
  containAllRots("XjYABhR", [
    "TzYxlgfnhf",
    "yqVAuoLjMLy",
    "BhRXjYA",
    "YABhRXj",
    "hRXjYAB",
    "jYABhRX",
    "XjYABhR",
    "ABhRXjY",
  ])
);

console.log(containAllRots("", ["bsjq", "qbsj"]));
console.log(
  containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
);
