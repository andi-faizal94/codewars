function getCount(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let voc of str) {
    if (vowels.includes(voc)) {
      count++;
    }
  }
  return count;
}

console.log(getCount("o a kak ushakov lil vo kashu kakao"));
