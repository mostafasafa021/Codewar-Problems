function incrementer(nums) {
  // code goes here
  if (nums.length < 1) {
    return [];
  }
  let counter = 1;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + counter >= 10) {
      result.push(+(nums[i] + counter).toString()[1]);
      counter++;
    } else {
      result.push(nums[i] + counter);
      counter++;
    }
  }
  return result;
}

console.log(incrementer([1, 2, 91]));
