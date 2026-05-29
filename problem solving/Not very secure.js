function alphanumeric(string){
  let reg = /^([0-9-a-z]+)$/ig
  return reg.test(string)
}

console.log(alphanumeric("hello"))

