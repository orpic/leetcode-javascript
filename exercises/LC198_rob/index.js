function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  //   let maxAtNth = [nums[0], Math.max(nums[0], nums[1])];

  let maxAtOne = nums[0];
  let maxAtTwo = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    temp = Math.max(nums[i] + maxAtOne, maxAtTwo);
    maxAtOne = maxAtTwo;
    maxAtTwo = temp;
    // maxAtNth.push(Math.max(nums[i] + maxAtNth[i - 2], maxAtNth[i - 1]));
  }

  //   return maxAtNth.pop();
  return maxAtTwo;
}

module.exports = rob;

// if (nums.length === 0) return 0;
// if (nums.length === 1) return nums[0];
// if (nums.length === 2) return Math.max(nums[0], nums[1]);

// let maxAtNth = [nums[0], Math.max(nums[0], nums[1])];

// for (let i = 2; i < nums.length; i++) {
//   maxAtNth.push(Math.max(nums[i] + maxAtNth[i - 2], maxAtNth[i - 1]));
// }

// return maxAtNth.pop();
