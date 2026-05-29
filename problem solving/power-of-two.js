function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(10))
console.log(isPowerOfTwo(11))
console.log(isPowerOfTwo(12))
console.log(isPowerOfTwo(13))
console.log(isPowerOfTwo(14))
console.log(isPowerOfTwo(15))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(32))
console.log(isPowerOfTwo(64))
console.log(isPowerOfTwo(128))
console.log(isPowerOfTwo(256))
console.log(isPowerOfTwo(512))
console.log(isPowerOfTwo(1024))
console.log(isPowerOfTwo(2048))
console.log(isPowerOfTwo(4096))
console.log(isPowerOfTwo(8192))