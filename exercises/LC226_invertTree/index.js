function invertTree(root) {
  function helper(node) {
    if (!node) return;

    const tep = node.left;
    node.left = node.right;
    node.right = tep;

    helper(node.left);
    helper(node.right);
  }

  helper(root);
  return root;
}

module.exports = invertTree;
