/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 */

// @lc code=start
function updateMatrix(mat: number[][]): number[][] {
	// 输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
	// 输出：[[0,0,0],[0,1,0],[1,2,1]]

	let rowLen = mat.length
	let colLen = mat[0].length

	// 初始化 -1
	let resultList: number[][] = new Array(rowLen)
		.fill(0)
		.map(() => new Array(colLen).fill(-1))

	let queue: number[][] = []

	// 填入0
	for (let i = 0; i < rowLen; i++) {
		for (let j = 0; j < colLen; j++) {
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
	while (queue.length > 0) {
		let [curI, curJ] = queue.shift()!

		dirs.forEach(dir => {
			let nextI = dir[0] + curI
			let nextJ = dir[1] + curJ

			if (
				nextI >= 0 &&
				nextI < rowLen &&
				nextJ >= 0 &&
				nextJ < colLen &&
				resultList[nextI][nextJ] === -1
			) {
				queue.push([nextI, nextJ])
				resultList[nextI][nextJ] = resultList[curI][curJ] + 1
			}
		})
	}

	return resultList
}

// @lc code=end
export { updateMatrix }
