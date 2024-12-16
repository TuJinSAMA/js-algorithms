/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {
  const n = rooms.length
  rooms.sort(([_, s1], [i, s2]) => s1 - s2)
  const find = (p, s) => {
    let l = 0, r = n;
    while (l < r) {
      let mid = (l + r) >> 1
      if (rooms[mid][1] >= s) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    if (l >= n) return -1;
    let id = rooms[l][0];
    let min = Math.abs(id - p);
    for (let i = l; i < n; i++) {
      let tmp = Math.abs(rooms[i][0] - p)
      if (tmp < min) {
        min = tmp
        id = rooms[i][0]
      } else if (tmp === min) {
        id = Math.min(id, rooms[i][0])
      }
    }
    return id
  }
  return queries.map(([p, s]) => find(p, s))
};

console.log(closestRoom([[2, 2], [1, 2], [3, 2]], [[3, 1], [3, 3], [5, 2]]));
console.log(closestRoom([[1, 4], [2, 3], [3, 5], [4, 1], [5, 2]], [[2, 3], [2, 4], [2, 5]]));