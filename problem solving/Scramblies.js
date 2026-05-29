function scramble(str1, str2) {
  let str1Hash = {}
 let containsScramble = true
 for (const char1 of str1) {
   str1Hash[char1] ? str1Hash[char1] += 1 : str1Hash[char1] = 1
 }

 for (const char2 of str2) {
  str1Hash[char2] ? str1Hash[char2] -= 1 : containsScramble = false
 }

 return containsScramble
}

scramble('scriptingjava', 'javascript')