/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
	// m == matrix.length
	// n == matrix[i].length
	// 1 <= m, n <= 10
	// -100 <= matrix[i][j] <= 100

	// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
	// 输出：[1,2,3,6,9,8,7,4,5]

	const res: number[] = []

	const m = matrix.length
	const n = matrix[0].length

	let up_bound = 0
	let right_bound = n - 1
	let down_bound = m - 1
	let left_bound = 0

	while (res.length < m * n) {
		if (up_bound <= down_bound) {
			// 向右
			for (let i = left_bound; i <= right_bound; i++) {
				res.push(matrix[up_bound][i])
			}
			up_bound++
		}

		if (left_bound <= right_bound) {
			// 向下
			for (let i = up_bound; i <= down_bound; i++) {
				res.push(matrix[i][right_bound])
			}
			right_bound--
		}

		if (up_bound <= down_bound) {
			// 向左
			for (let i = right_bound; i >= left_bound; i--) {
				res.push(matrix[down_bound][i])
			}
			down_bound--
		}

		if (left_bound <= right_bound) {
			// 向上
			for (let i = down_bound; i >= up_bound; i--) {
				res.push(matrix[i][left_bound])
			}
			left_bound++
		}
	}

	return res
}
// @lc code=end
export { spiralOrder }
