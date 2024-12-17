function filter_list(l) {
  let helper = [];
  l.filter((a) => {
    if (typeof a === "number") {
      helper.push(a);
    }
  });

  return helper;
}
