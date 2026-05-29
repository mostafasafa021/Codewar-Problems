const reverseSeq = n => {
  let result = []
  while (n >= 1) {
    result.push(n)
    n--
  }
  return result
};

console.log(reverseSeq(5))

