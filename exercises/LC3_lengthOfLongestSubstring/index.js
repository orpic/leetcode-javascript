// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  //key = []character
  //value = the index of the last time that []character appeared
  //        in our input string as we are iterate through it
  let windowMap = {};

  let startOfWindow = 0;
  let endOfWindow = 0; //for loop
  let maxLength = 0;

  for (endOfWindow; endOfWindow < s.length; endOfWindow++) {
    const lastChar = s[endOfWindow];

    // this if comes first in code but when running it in mind simulation
    // we will not cross this code until we have a duplicate value

    //this is checking if we prev have that char in our window
    // if yes then we have to update the start of window to a place where
    // the one more than the where last char of that window was found
    if (windowMap[lastChar] >= startOfWindow) {
      //start of the window to be one index above the last time A was found
      startOfWindow = windowMap[lastChar] + 1;
    }

    windowMap[lastChar] = endOfWindow;
    //key value pair
    //last time the character appeared in our string as we iterate through it

    maxLength = Math.max(maxLength, endOfWindow - startOfWindow + 1);
  }
  return maxLength;
}

module.exports = lengthOfLongestSubstring;
