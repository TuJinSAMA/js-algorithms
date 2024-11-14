/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function (edges) {
  const n = edges.length + 1;
  const g = Array.from({ length: n }, () => []);
  for (const [x, y] of edges) {
    g[x].push(y);
    g[y].push(x);
  }
  let res = 0;
  function dfs(node, parent) {
    let valid = true;
    let treeSize = 0;
    let subTreeSize = 0;
    for (const child of g[node]) {
      if (child !== parent) {
        const size = dfs(child, node);
        if (subTreeSize === 0) {
          subTreeSize = size;
        } else if (size !== subTreeSize) {
          valid = false;
        }
        treeSize += size;
      }
    }
    if (valid) {
      res++;
    }
    return treeSize + 1;
  }
  dfs(0, -1);
  return res;
};


console.log(countGoodNodes([[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]]));
console.log(countGoodNodes([[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 7], [3, 8]]));
console.log(countGoodNodes([[0, 1], [1, 2], [1, 3], [1, 4], [0, 5], [5, 6], [6, 7], [7, 8], [0, 9], [9, 10], [9, 12], [10, 11]]));