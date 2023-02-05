const isValid = (s) => {
  let stack = [];

  let bracketPairMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (bracketPairMap[char]) {
      stack.push(char);
    } else if (bracketPairMap[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
