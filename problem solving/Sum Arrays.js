function sum (numbers) {
  if (numbers.length < 1) return 0

  return numbers.reduce((acc, curr)=> acc + curr)
}

console.log(sum([1, 5.2, 4, 0, -1]))