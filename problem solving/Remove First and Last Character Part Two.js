function array(string) {
  if (string.split(",").length <= 2) return null;

  let result = string.split(",").filter(((el,index, array) => index !== 0 && index !== array.length - 1))

  if (result.length > 1) return result.join(" ")

  return result.join(" ")
}

console.log(array("A1,C3,D4"));
