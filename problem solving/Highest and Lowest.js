function highAndLow(numbers){
  let numsArray = numbers.split(" ").map((el) => +el)
  return (Math.max(...numsArray) +" "+Math.min(...numsArray))
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))