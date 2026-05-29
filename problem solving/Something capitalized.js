function testit(s){
  let str = s.split("")
    for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      str[i] = str[i].toUpperCase()
    }
    else {
      str[i] = str[i].toLowerCase()
    }
}
return str
}

console.log(testit("addLDsDK"))