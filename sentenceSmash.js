function smash(words) {
  if (words?.length <= 0) return "";

  return words.toString().split(",").join(" ");
}

console.log(smash(["hello", "world"]));
