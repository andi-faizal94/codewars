function domainName(url) {
  let domain = url.replace(/(^\w+:|^)\/\//, "");
  domain = domain.replace(/^www\./, "");
  domain = domain.split("/")[0];
  domain = domain.split(".")[0];
  return domain;
}
