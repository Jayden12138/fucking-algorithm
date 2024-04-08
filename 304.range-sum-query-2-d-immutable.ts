/*
 * @lc app=leetcode id=304 lang=typescript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
class NumMatrix {
	preSum: number[][] = []
	constructor(matrix: number[][]) {
		let rowLen = matrix.length
		let colLen = matrix[0].length

		if (rowLen == 0 || colLen == 0) return

		this.preSum = new Array(rowLen + 1)
			.fill(0)
			.map(() => new Array(colLen + 1).fill(0))

		/**
		 *
		 * [
		 *  [1,2,3],
		 *  [2,3,4],
		 *  [3,4,5]
		 * ]
		 *
		 * [
		 *  [0,0,0,0],
		 *  [0],
		 *  [0],
		 *  [0]
		 * ]
		 *
		 *
		 * preSum[i][j] -> [0,0,i-1,j-1]
		 *
		 */

		for (let i = 1; i <= rowLen; i++) {
			for (let j = 1; j <= colLen; j++) {
				this.preSum[i][j] =
					matrix[i - 1][j - 1] -
					this.preSum[i - 1][j - 1] +
					this.preSum[i - 1][j] +
					this.preSum[i][j - 1]
			}
		}
	}
	sumRegion(row1: number, col1: number, row2: number, col2: number): number {
		/**
		 *
		 * [row1, col1, row2, col2]
		 *
		 * [
		 *  [1,2,3],
		 *  [2,3,4],
		 *  [3,4,5]
		 * ]
		 *
		 * row1,
		 * col1
		 *      -------
		 *              row2,
		 *              col2
		 *
		 */

		return (
			this.preSum[row2 + 1][col2 + 1] -
			this.preSum[row1][col2 + 1] -
			this.preSum[row2 + 1][col1] +
			this.preSum[row1][col1]
		)
	}
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
