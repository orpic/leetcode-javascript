function uniquePaths(m, n) {
  let dpMatrix = [];

  for (let row = 0; row < m; row++) {
    dpMatrix.push([]);
  }

  for (let row = 0; row < m; row++) {
    dpMatrix[row][0] = 1;
  }

  for (let col = 0; col < n; col++) {
    dpMatrix[0][col] = 1;
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dpMatrix[row][col] = dpMatrix[row - 1][col] + dpMatrix[row][col - 1];
    }
  }

  return dpMatrix[m - 1][n - 1];
}

module.exports = uniquePaths;
