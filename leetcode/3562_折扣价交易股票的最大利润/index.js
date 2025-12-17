let printGraph = (graph, start) => {
  const allPaths = []
  function dfs(node, curPath) {
    curPath.push(node)

    const neighbors = graph.get(node)
    // console.log(neighbors, 'neighbors');
    if (neighbors && neighbors.size > 0) {
      for (const next of neighbors) {
        dfs(next, curPath)
      }
    } else {
      allPaths.push([...curPath])
    }

    curPath.pop()
  }

  dfs(start, [])
  return allPaths
}

/**
 * @param {number} n
 * @param {number[]} present
 * @param {number[]} future
 * @param {number[][]} hierarchy
 * @param {number} budget
 * @return {number}
 */
var maxProfit = function (n, present, future, hierarchy, budget) {
  // 首先遍历员工的关系，然后计算每种购买方式的成本和利润，留下符合预算的购买方式的利润。
  // 比如 [[1, 2]] 表示 1 是 2 的上级， 则该种购买方式的成本是 present[1] + floor(present[2] / 2) <= budget
  // 利润则是 future[1] - present[1] + future[2] - floor(present[2] / 2)
  let results = []
  let graph = new Map()
  for (const [x, y] of hierarchy) {
    if (!graph.has(x)) {
      graph.set(x, new Set())
    }

    if (!graph.has(y)) {
      graph.set(y, new Set())
    }

    graph.get(x).add(y)

  }
  let allPaths = printGraph(graph, 1);
  for (const path of allPaths) {
    let cost = 0
    let profit = 0
    for (let i = 0; i < path.length; i++) {
      let index = path[i] - 1;
      if (i === 0) {
        cost += present[index]
      } else {
        cost += Math.floor(present[index] / 2)
      }
      if (cost > budget) {
        break;
      }
      profit += future[index] - cost
    }
    results.push(profit)

  }
  console.log(results);
  // if (results.length === 0) {
  //   // 如果所有组合购买的方式都超了预算，则需要计算单个员工购买自己的股票的利润。
  //   for (let i = 0; i < n; i++) {
  //     let cost = present[i]
  //     if (cost <= budget) {
  //       results.push(future[i] - cost)
  //     }
  //   }
  // }
  return results.length > 0 ? Math.max(...results) : 0;
};

console.log(maxProfit(2, [1, 2], [4, 3], [[1, 2]], 3));
console.log(maxProfit(2, [3, 4], [5, 8], [[1, 2]], 4));
console.log(maxProfit(3, [4, 6, 8], [7, 9, 11], [[1, 2], [1, 3]], 10));
console.log(maxProfit(3, [5, 2, 3], [8, 5, 6], [[1, 2], [2, 3]], 7));