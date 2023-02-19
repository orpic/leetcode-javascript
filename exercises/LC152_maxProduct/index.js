function maxProduct(nums) {
  //creating two dp arrays

  let maxDpArray = [nums[0]];
  let minDpArray = [nums[0]];

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    maxDpArray[i] = Math.max(
      num,
      num * maxDpArray[i - 1],
      num * minDpArray[i - 1]
    );

    // to cover the case with two minus giving plus
    // we have maintained a dp min array
    minDpArray[i] = Math.min(
      num,
      num * maxDpArray[i - 1],
      num * minDpArray[i - 1]
    );

    max = Math.max(max, maxDpArray[i]);
  }

  return max;
}

module.exports = maxProduct;
