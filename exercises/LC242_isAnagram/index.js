function isAnagram(s, t) {
  // checking if lengths are equal or not

  if (s.length !== t.length) return false;

  const sCharMap = {};

  for (let i = 0; i < s.length; i++) {
    sCharMap[s[i]] = sCharMap[s[i]] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!sCharMap[t[i]]) {
      return false;
    } else {
      sCharMap[t[i]]--;
    }
  }
  return true;
}

module.exports = isAnagram;
