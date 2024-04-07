/*
 * @lc app=leetcode id=304 lang=typescript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
class NumMatrix {
	preSums: number[][] = []
	constructor(matrix: number[][]) {
		let rowLen = matrix[0].length
		let colLen = matrix.length

		// init
		this.preSums = new Array(colLen + 1)
			.fill(0)
			.map(() => new Array(rowLen + 1).fill(0))

		if (rowLen == 0 || colLen == 0) return
		for (let i = 1; i <= colLen; i++) {
			for (let j = 1; j <= rowLen; j++) {
				this.preSums[i][j] =
					this.preSums[i][j - 1] +
					this.preSums[i - 1][j] -
					this.preSums[i - 1][j - 1] +
					matrix[i - 1][j - 1]
			}
		}
	}

	sumRegion(row1: number, col1: number, row2: number, col2: number): number {
		return (
			this.preSums[row2 + 1][col2 + 1] -
			this.preSums[row2 + 1][col1] -
			this.preSums[row1][col2 + 1] +
			this.preSums[row1][col1]
		)
	}
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
