function findInflextionPoint(rotatedSortedArray) {
  let left = 0;
  let right = rotatedSortedArray.length - 1;

  if (rotatedSortedArray.length === 1) {
    return 0;
  }

  if (rotatedSortedArray[left] < rotatedSortedArray[right]) {
    return 0;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (rotatedSortedArray[mid] < rotatedSortedArray[mid - 1]) {
      return mid;
    }

    if (rotatedSortedArray[mid] > rotatedSortedArray[mid + 1]) {
      return mid + 1;
    }

    if (rotatedSortedArray[mid] < rotatedSortedArray[left]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

function binarySearch(nums, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function search(nums, target) {
  const inflecIndex = findInflextionPoint(nums);

  const left = binarySearch(nums, target, 0, inflecIndex - 1);
  const right = binarySearch(nums, target, inflecIndex, nums.length - 1);

  return Math.max(left, right);
}

module.exports = search;
