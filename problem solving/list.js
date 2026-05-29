function filter_list(l) {
  return l.filter((el) => {
    return typeof el == "number"
  })
}

console.log(filter_list([1,2,3,"2","k","e",0]))