function groupAnagrams(strs) {
  let grouped = {};

  for (let i = 0; i < strs.length; i++) {
    // const strs[i] = strs[i];

    const key = strs[i].split("").sort().join("");

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(strs[i]);
  }
  return Object.values(grouped);
}

module.exports = groupAnagrams;
