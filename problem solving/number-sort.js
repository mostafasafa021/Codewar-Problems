function solution(nums){
  if (nums.length < 1 || nums === null) {
    return []
  }
  nums.sort((a,b) => console.log(a - b))
  return nums
}

console.log(solution([ 1, 10, 2, 3, 5 ]))


// Negative result (< 0): Keep a before b.
// Positive result (> 0): Move b before a (the swap).
// Zero (0): Keep their original order relative to each other. 
