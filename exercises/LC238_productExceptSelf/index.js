const productExceptSelf = (nums) => {
  // mulitplying the left part of array and then the right
  // and then multiplying them together to achieve this without
  let output = nums.map((n) => 1);
  let product = 1;

  //the multiplication  from left
  for (let i = 0; i < nums.length; i++) {
    output[i] = output[i] * product;
    product = product * nums[i];
  }

  product = 1;
  // the multiplication from right

  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] = output[j] * product;
    product = product * nums[j];
  }

  return output;
};

module.exports = productExceptSelf;
