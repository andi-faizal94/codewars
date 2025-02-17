function smallWordHelper(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length <= 3) {
        return word.toUpperCase();
      } else {
        return word.replace(/[aeiou]/gi, "");
      }
    })
    .join(" ");
}
