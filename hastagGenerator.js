function generateHashtag(str) {
  //   if (str.length === 0 || str.length >= 140) {
  //     return false;
  //   } else {
  //     const a = str.replace(/\s/g, "");
  //     const b = "#";

  //     return b + a;
  //   }

  const trimmedStr = str.trim();
  if (trimmedStr === "") return false;

  // Split into words, capitalize, and join
  const hashtag =
    "#" +
    trimmedStr
      .split(/\s+/) // Split by spaces (including multiple spaces)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize
      .join(""); // Combine words

  // Check length of the final result
  return hashtag.length > 140 ? false : hashtag;
}
