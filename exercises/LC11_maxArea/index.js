function maxArea(height) {
  // calculating the area between heights of the water
  // from left most and rightmost
  // decreasing each side whichever is smaller (we want max area)

  let maxArea = 0;
  let startPointer = 0;
  let endPointer = height.length - 1;

  while (startPointer < endPointer) {
    // the height of start and end pointer are responsible for holding water
    // the smaller of them will make sure the water doesn't spill over and
    // slant is not allowed on leetcode
    // width of base = endPointer - startPointer
    // therefore area = minimum of two heights x base

    const areaWithCurrentPosition =
      Math.min(height[startPointer], height[endPointer]) *
      (endPointer - startPointer);

    maxArea = Math.max(areaWithCurrentPosition, maxArea);

    if (height[startPointer] < height[endPointer]) {
      startPointer++;
    } else {
      endPointer--;
    }
  }

  return maxArea;
}

module.exports = maxArea;
