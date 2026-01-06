// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {

  let maxSum = -Infinity;
  let result = 0;

  const queue = [root];
  let level = 1;
  while (queue.length > 0) {
    const size = queue.length;

    let sum = 0;


    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

    }

    if (sum > maxSum) {
      maxSum = sum;
      result = level;
    }

    level++;

  }
  return result;
};


const tree1 = new TreeNode(
  1,
  new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
  new TreeNode(0)
)

console.log(maxLevelSum(tree1));