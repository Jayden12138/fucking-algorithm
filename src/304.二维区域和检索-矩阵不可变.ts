/*
 * @lc app=leetcode.cn id=304 lang=typescript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
class NumMatrix {
	// 输入:
	// ["NumMatrix","sumRegion","sumRegion","sumRegion"]
	// [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
	// 输出:
	// [null, 8, 11, 12]

	// 解释:
	// NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
	// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
	// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
	// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
	_preSum: number[][] = []
	constructor(matrix: number[][]) {
		let m = matrix.length
		let n = matrix[0].length

		// init
		this._preSum = new Array(m + 1)
			.fill(0)
			.map(() => new Array(n + 1).fill(0))

		// preSum
		for (let i = 1; i <= m; i++) {
			for (let j = 1; j <= n; j++) {
				this._preSum[i][j] =
					this._preSum[i - 1][j] +
					this._preSum[i][j - 1] +
					matrix[i - 1][j - 1] -
					this._preSum[i - 1][j - 1]
			}
		}
	}

	sumRegion(row1: number, col1: number, row2: number, col2: number): number {
		// let arr = [
		// 	[0, 0, 0, 0, 0, 0],
		// 	[0, 3, 3, 4, 8, 10],
		// 	[0, 8, 14, 18, 24, 27],
		// 	[0, 9, 17, 21, 28, 36],
		// 	[0, 13, 22, 26, 34, 49],
		// 	[0, 14, 23, 30, 38, 58],
		// ]
		let res =
			this._preSum[row2 + 1][col2 + 1] -
			this._preSum[row1][col2 + 1] -
			this._preSum[row2 + 1][col1] +
			this._preSum[row1][col1]

		return res
	}
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
export { NumMatrix }
