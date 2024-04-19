/*
 * @lc app=leetcode.cn id=1091 lang=typescript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
function shortestPathBinaryMatrix(grid: number[][]): number {
	// 输入：grid = [[0,0,0],[1,1,0],[1,1,0]]
	// 输出：4

	// 输入：grid = [[0,1],[1,0]]
	// 输出：2

	// 输入：grid = [[1,0,0],[1,1,0],[1,1,0]]
	// 输出：-1

	let m = grid.length
	let n = grid[0].length

	if (grid[0][0] === 1 || grid[m - 1][n - 1] === 1) {
		return -1
	}

	let queue: number[][] = []
	let visited = new Array(m).fill(0).map(() => new Array(n).fill(false))

	queue.push([0, 0])
	visited[0][0] = true

	let dirs = [
		[0, 1],
		[0, -1],
		[-1, 0],
		[1, 0],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	]

	let step = 1
	while (queue.length) {
		const l = queue.length
		for (let i = 0; i < l; i++) {
			let [curI, curJ] = queue.shift()!

			if (curI === m - 1 && curJ === n - 1) {
				return step
			}

			dirs.forEach(([i, j]) => {
				let nextI = curI + i
				let nextJ = curJ + j

				if (
					nextI >= 0 &&
					nextI < m &&
					nextJ >= 0 &&
					nextJ < n &&
					grid[nextI][nextJ] === 0 &&
					!visited[nextI][nextJ]
				) {
					queue.push([nextI, nextJ])
					visited[nextI][nextJ] = true
				}
			})
		}
		step++
	}

	return -1
}
// @lc code=end
export { shortestPathBinaryMatrix }
