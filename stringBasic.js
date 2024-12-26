function getUsersIds(str) {
  let regex;
  let stringMatch;

  const helper = [];

  if (str.includes(",")) {
    regex = /(uid|#)/g;
    let x = (stringMatch = str.replace(regex, ""));
    helper.push(x);
  } else {
    regex = /(uid|#|\s)/g;
    stringMatch = str.replace(regex, "");
    let x = stringMatch.toLowerCase().split("").join("");
    helper.push(x);
  }

  return helper;
}

getUsersIds("#uidswagger");
getUsersIds("uid12345");
getUsersIds("uidone, uidtwo");
getUsersIds("uid12 ab, uid#, uidMiXeDcHaRs");
