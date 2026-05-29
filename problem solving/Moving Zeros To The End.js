function moveZeros(arr) {
  let nonZeroesCount = 0

  for (let i =0; i< arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroesCount] = arr[i]
      nonZeroesCount++
    }
  }

  for (let i = nonZeroesCount; i <arr.length; i++) {
    arr[i] = 0
  }

  return arr
}

console.log(moveZeros([0,2,3]))