/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
	// 1 <= n <= 20
	//
	// 输入：n = 3
	// 输出：[[1,2,3],[8,9,4],[7,6,5]]

	const mat: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
	let idx = 1

	let up_bound = 0
	let right_bound = n - 1
	let down_bound = n - 1
	let left_bound = 0

	while (idx <= n * n) {
		// 向右
		if (up_bound <= down_bound) {
			for (let i = left_bound; i <= right_bound; i++) {
				mat[up_bound][i] = idx
				idx++
			}
			up_bound++
		}

		// 向下
		if (left_bound <= right_bound) {
			for (let i = up_bound; i <= down_bound; i++) {
				mat[i][right_bound] = idx
				idx++
			}
			right_bound--
		}

		// 向左
		if (up_bound <= down_bound) {
			for (let i = right_bound; i >= left_bound; i--) {
				mat[down_bound][i] = idx
				idx++
			}
			down_bound--
		}

		// 向上
		if (left_bound <= right_bound) {
			for (let i = down_bound; i >= up_bound; i--) {
				mat[i][left_bound] = idx
				idx++
			}
			left_bound++
		}
	}

	return mat
}
// @lc code=end
export { generateMatrix }
