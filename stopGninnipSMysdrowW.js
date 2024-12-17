function spinWords(string) {
  const words = string.split("");
  const spunWords = words.map((word) => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  });

  return spunWords.join(" ");
}

spinWords("Hey fellow warriors");
spinWords("Hello");
