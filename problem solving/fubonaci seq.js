function fubo(n) {
  let seq = [0,1]

  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 2] + seq[i - 1])
  }

  return seq[seq.length - 1]
}

console.log(fubo(7))