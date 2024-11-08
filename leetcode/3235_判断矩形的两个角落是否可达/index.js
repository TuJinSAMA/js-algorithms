/**
 * @param {number} xCorner
 * @param {number} yCorner
 * @param {number[][]} circles
 * @return {boolean}
 */
// todo 超级难 需要后续仔细研究
var canReachCorner = function (xCorner, yCorner, circles) {
  const pointInCircle = (px, py, x, y, r) => {
    return BigInt(x - px) ** 2n + BigInt(y - py) ** 2n <= BigInt(r) ** 2n;
  };

  const circleIntersectsTopLeftOfRectangle = (x, y, r, xCorner, yCorner) => {
    return (Math.abs(x) <= r && y >= 0 && y <= yCorner) ||
      (x >= 0 && x <= xCorner && Math.abs(y - yCorner) <= r) ||
      pointInCircle(x, y, 0, yCorner, r);
  };

  const circleIntersectsBottomRightOfRectangle = (x, y, r, xCorner, yCorner) => {
    return (Math.abs(y) <= r && x >= 0 && x <= xCorner) ||
      (y >= 0 && y <= yCorner && Math.abs(x - xCorner) <= r) ||
      pointInCircle(x, y, xCorner, 0, r);
  };

  const circlesIntersectInRectangle = (x1, y1, r1, x2, y2, r2, xCorner, yCorner) => {
    return BigInt(x1 - x2) ** 2n + BigInt(y1 - y2) ** 2n <= BigInt(r1 + r2) ** 2n &&
      BigInt(x1) * BigInt(r2) + BigInt(x2) * BigInt(r1) < BigInt(r1 + r2) * BigInt(xCorner) &&
      BigInt(y1) * BigInt(r2) + BigInt(y2) * BigInt(r1) < BigInt(r1 + r2) * BigInt(yCorner);
  };

  const visited = new Array(circles.length).fill(false);

  const dfs = (i) => {
    const [x1, y1, r1] = circles[i];
    if (circleIntersectsBottomRightOfRectangle(x1, y1, r1, xCorner, yCorner)) {
      return true;
    }
    visited[i] = true;
    for (let j = 0; j < circles.length; j++) {
      const [x2, y2, r2] = circles[j];
      if (!visited[j] && circlesIntersectInRectangle(x1, y1, r1, x2, y2, r2, xCorner, yCorner) && dfs(j)) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < circles.length; i++) {
    const [x, y, r] = circles[i];
    if (pointInCircle(0, 0, x, y, r) || pointInCircle(xCorner, yCorner, x, y, r)) {
      return false;
    }
    if (!visited[i] && circleIntersectsTopLeftOfRectangle(x, y, r, xCorner, yCorner) && dfs(i)) {
      return false;
    }
  }
  return true;
};