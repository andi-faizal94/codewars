function errBob(string) {
  const allString = string.split(" ");

  const str = allString?.map((x) => {
    if (
      x?.toLowerCase().endsWith("a") ||
      x?.toLowerCase().endsWith("i") ||
      x?.toLowerCase().endsWith("u") ||
      x?.toLowerCase().endsWith("e") ||
      x?.toLowerCase().endsWith("o")
    ) {
      return x;
    } else {
      const regexString = /\p{P}/gu;

      if (regexString.test(x)) {
        console.log({ x });
        const strEnd = x.at(-2);
        const y = x.split(regexString);
        // console.log(strEnd, y, x, "ini");

        if (
          strEnd?.toLowerCase().endsWith("a") ||
          strEnd?.toLowerCase().endsWith("i") ||
          strEnd?.toLowerCase().endsWith("u") ||
          strEnd?.toLowerCase().endsWith("e") ||
          strEnd?.toLowerCase().endsWith("o")
        ) {
          return x;
        } else {
          if (strEnd === strEnd?.toUpperCase()) {
            const modifiedTextCapital = x?.replace(
              /([!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~])/g,
              "err$1"
            );
            console.log({ modifiedTextCapital });
            return modifiedTextCapital;
          } else {
            const modifiedText = x?.replace(
              /([!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~])/g,
              "err$1"
            );
            console.log({ modifiedText });

            return modifiedText;
          }
        }
      } else if (x === x?.toUpperCase()) {
        return x + "ERR";
      } else {
        return x + "err";
      }
    }
  });
  return str.join(" ");
}

console.log(errBob("THIS, is crazy!"));
