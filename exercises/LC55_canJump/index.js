function canJump(nums) {
  //assigning the last postion a goalpost
  let goalPost = nums.length - 1;

  // moving the goalPost if the previous index
  // can reach and setting the previous index as gal post
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goalPost) {
      goalPost = i;
    }
  }

  if (goalPost === 0) return true;
  if (goalPost !== 0) return false;
}

module.exports = canJump;
