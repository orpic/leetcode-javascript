function lengthOfLIS(nums) {
  // binary search
  // we dont create LIS
  // array empty
  if (nums.length === 0) return 0;

  let temp = [];
  temp.push(nums[0]);
  let length = 1; //we already pushed the zero
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > temp[temp.length - 1]) {
      temp.push(nums[i]);
      length++;
    } else {
      const index = temp.findIndex((x) => x >= nums[i]);
      temp[index] = nums[i];
    }
  }

  return length;
}

module.exports = lengthOfLIS;
