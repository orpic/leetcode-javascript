function isSameTree(p, q) {
  let sameTree = true;

  function checkSameNode(p, q) {
    // base case
    if (!p && !q) {
      return;
    } else if (!p || !q) {
      // one node is null and other may be a tree they are not equal
      sameTree = false;
      return;
    } else if (p.val !== q.val) {
      sameTree = false;
      return;
    }

    checkSameNode(p.left, q.left);
    checkSameNode(p.right, q.right);
  }

  checkSameNode(p, q);

  return sameTree;
}

module.exports = isSameTree;
