// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

function twoSum(arr, target) {
  // we could take an array but js object has a lookup time of O(1)
  // when compared to lookup time of an array whih is O(n)
  // { 2: 0 , 7:0}
  const numVisited = {};
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const compliment = target - num;

    if (numVisited[compliment] !== undefined) {
      resultArray.push(i);
      resultArray.push(numVisited[compliment]);
    }

    numVisited[num] = i;
  }

  return resultArray;
}

module.exports = twoSum;
