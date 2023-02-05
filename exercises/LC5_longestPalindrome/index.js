//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  let initialPosition = 0;
  let maxLength = 1;

  function expandPalindrome(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        initialPosition = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandPalindrome(i - 1, i + 1); //odd
    expandPalindrome(i, i + 1); //even
  }

  return s.slice(initialPosition, initialPosition + maxLength);
}

module.exports = longestPalindrome;
