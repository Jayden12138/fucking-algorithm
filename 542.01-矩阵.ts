/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 */

// @lc code=start
function updateMatrix(mat: number[][]): number[][] {
	// 输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
	// 输出：[[0,0,0],[0,1,0],[1,2,1]]
	let m = mat.length
	let n = mat[0].length

	let resultList: number[][] = new Array(m)
		.fill(0)
		.map(() => new Array(n).fill(-1))

	let queue: number[][] = []

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (mat[i][j] === 0) {
				resultList[i][j] = 0
				queue.push([i, j])
			}
		}
	}

	let dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	]

	while (queue.length) {
		let [curI, curJ] = queue.shift()!

		dirs.forEach(([i, j]) => {
			let nextI = curI + i
			let nextJ = curJ + j

			if (
				nextI >= 0 &&
				nextI < m &&
				nextJ >= 0 &&
				nextJ < n &&
				resultList[nextI][nextJ] === -1
			) {
				resultList[nextI][nextJ] = resultList[curI][curJ] + 1
				queue.push([nextI, nextJ])
			}
		})
	}

	return resultList
}

// @lc code=end
export { updateMatrix }
