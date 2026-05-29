function stringExpansion(s) {
  if (s === "") {
    return s;
  }
  let isAlphabaticExist = false;
  let isNumberExist = false;
  let resultStr = "";
  let currentNumber;

      resultStr = s
        .split("")
        .map((el) => {
          if (/[0-9]/i.test(el)) {
            currentNumber = parseInt(el);
          }

          return el.repeat(currentNumber);
        })
        .filter((el) => {
          return /[a-z]/i.test(el)
        })
        .join("");
  
  return resultStr;
}

console.log(stringExpansion(""));
