/*
 * @lc app=leetcode.cn id=1314 lang=typescript
 *
 * [1314] 矩阵区域和
 */

// @lc code=start

class PreSumMat {
	_preSum: number[][] = []
	constructor(mat: number[][]) {
		let m = mat.length
		let n = mat[0].length
		// init
		this._preSum = new Array(m + 1)
			.fill(0)
			.map(() => new Array(n + 1).fill(0))

		// preSum
		for (let i = 1; i <= m; i++) {
			for (let j = 1; j <= n; j++) {
				this._preSum[i][j] =
					mat[i - 1][j - 1] -
					this._preSum[i - 1][j - 1] +
					this._preSum[i][j - 1] +
					this._preSum[i - 1][j]
			}
		}
	}

	calcSum(row1: number, col1: number, row2: number, col2: number) {
		return (
			this._preSum[row2 + 1][col2 + 1] -
			this._preSum[row1][col2 + 1] -
			this._preSum[row2 + 1][col1] +
			this._preSum[row1][col1]
		)
	}
}

function matrixBlockSum(mat: number[][], k: number): number[][] {
	// 输入：mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1
	// 输出：[[12,21,16],[27,45,33],[24,39,28]]
	// 输入：mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2
	// 输出：[[45,45,45],[45,45,45],[45,45,45]]
	//
	// 其中每个 answer[i][j] 是所有满足下述条件的元素 mat[r][c] 的和
	// i - k <= r <= i + k,
	// j - k <= c <= j + k 且
	// (r, c) 在矩阵内。
	//
	// k = 1
	// [
	// 	[1, 2, 3],
	// 	[4, 5, 6],
	// 	[7, 8, 9],
	// ]
	//
	// [
	// 	[12, 21, 16],
	// 	[27, 45, 33],
	// 	[24, 39, 28],
	// ]

	/**
	 *
	 * k = 1
	 *
	 * 0,0
	 * r [-1, 1]
	 * c [-1, 1]
	 * 0,0 0,1 1,0 1,1 => 1 2 4 5 => 12 => answer[0,0]
	 *
	 *
	 */
	let m = mat.length
	let n = mat[0].length
	const preSum = new PreSumMat(mat)
	const answer = new Array(m).fill(0).map(() => new Array(n).fill(0))
	// [
	// 	[0, 0, 0, 0],
	// 	[0, 1, 3, 6],
	// 	[0, 5, 12, 21],
	// 	[0, 12, 27, 45],
	// ]

	// 00
	// -k,-k - k,k <= r,c => preSum.calcSum
	// 11
	//
	// i - k <= r <= i + k, j - k <= c <= j + k
	// row1 i - k col1 j - k
	// row2 i + k col2 j + k
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			let row1 = i - k < 0 ? 0 : i - k
			let col1 = j - k < 0 ? 0 : j - k
			let row2 = i + k >= m ? m - 1 : i + k
			let col2 = j + k >= n ? n - 1 : j + k

			answer[i][j] = preSum.calcSum(row1, col1, row2, col2)
		}
	}

	return answer
}
// @lc code=end
export { matrixBlockSum }
