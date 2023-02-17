const threeSum = (nums) => {
  //sorting array in ascending order
  nums.sort((a, b) => a - b);
  //   the result array
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    const target = 0 - nums[i];

    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
      // here we skip the part where duplcate array might occur
    }

    while (left < right) {
      if (nums[left] + nums[right] === target) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        // here we skip the part where duplcate array might occur
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (nums[left] + nums[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};

module.exports = threeSum;
