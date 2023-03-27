function lowestCommonAncestor(root, p, q) {
  const pVal = p.val;

  const qVal = q.val;

  let currentNode = root;

  while (currentNode) {
    const currentVal = currentNode.val;

    if (currentVal < pVal && currentVal < qVal) {
      currentNode = currentNode.right;
    } else if (currentVal > pVal && currentVal > qVal) {
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }
}

module.exports = lowestCommonAncestor;
