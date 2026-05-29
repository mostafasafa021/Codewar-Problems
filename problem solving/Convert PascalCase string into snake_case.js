function toUnderscore(string) {
    let result= string.toString().split("").map((el,i)=> {
      if (/[A-Z]/.test(el) && i !== 0) {
        el = "_" + el.toLowerCase()
      }

      if (i === 0) {
        el = el.toLowerCase()
      }
      return el
    })

    return result.join("")
}

console.log(toUnderscore("TestController"))
console.log(toUnderscore(1))