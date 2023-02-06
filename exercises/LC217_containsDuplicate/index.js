const containsDuplicate = (nums) => {
  let visitedNumbers = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (visitedNumbers[num]) {
      return true;
    } else {
      visitedNumbers[num] = true;
    }
  }

  return false;
};

module.exports = containsDuplicate;
