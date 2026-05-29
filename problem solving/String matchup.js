function solve(a,b) {
  let result = []
  for (let i = 0; i < b.length; i++) {
    let current = 0
    for (let j = 0; j < a.length; j++) {
      if (b[i] === a[j]) {
        current++
      }
    }
    result.push(current)
  }
  return result
}


console.log(solve(['abc', 'abc','cde'], ['abc', 'cde']))
