function toCamelCase(str) {
  const words = str.split(/[-_]/);

  const camelCased = words.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return camelCased.join("");
}
