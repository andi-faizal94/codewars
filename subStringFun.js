function nthChar(words) {
  let str = "";
  if (words.length <= 0) return str;
  for (let a = 0; a < words.length; a++) {
    str += words[a].charAt(a);
  }
  return str;
}

nthChar(["yoda", "best", "has"]);
