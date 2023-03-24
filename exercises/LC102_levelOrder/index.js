function levelOrder(root) {
  const result = [];

  function helperFunc(node, depth) {
    if (!node) return;

    if (!result[depth]) {
      result[depth] = [];
    }

    result[depth].push(node.val);

    helperFunc(node.left, depth + 1);
    helperFunc(node.right, depth + 1);
  }

  helperFunc(root, 0);

  return result;
}

module.exports = levelOrder;
