/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  // 先按照活动结束时间排序
  events.sort((a, b) => a[1] - b[1])


  // 预处理维护一个数组，maxBefore[i] 表示前 i 个活动中，结束时间小于 events[i][1] 的活动的最大价值
  let maxBefore = new Array(events.length + 1).fill(0);
  for (let i = 0; i < events.length; i++) {
    maxBefore[i + 1] = Math.max(maxBefore[i], events[i][2])
  }

  let max = 0;

  for (let i = 0; i < events.length; i++) {
    const [start, end, value] = events[i]

    // 假设只选一个活动
    max = Math.max(max, value);


    let left = 0, right = i - 1, pos = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (events[mid][1] < start) {
        pos = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (pos >= 0) {
      max = Math.max(max, value + maxBefore[pos + 1])
    }
  }

  return max
};


console.log(maxTwoEvents([[1, 3, 2], [4, 5, 2], [2, 4, 3]]))
console.log(maxTwoEvents([[1, 3, 2], [4, 5, 2], [1, 5, 5]]))
console.log(maxTwoEvents([[1, 5, 3], [1, 5, 1], [6, 6, 5]]))