function dropCap(n) {
  let m = n.split(" ").map((el, i) => {
    el = el.length > 2 ? el[0].toUpperCase() + el.slice(1).toLowerCase() : el
    return el
  })
  let finalResult = m.join(" ")
  return finalResult
}

console.log(dropCap("hShsRARO Wi R"))