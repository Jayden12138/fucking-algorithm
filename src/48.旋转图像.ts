/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function reverseArr(arr: number[]) {
	let left = 0
	let right = arr.length - 1
	while (left < right) {
		let t = arr[left]
		arr[left] = arr[right]
		arr[right] = t

		left++
		right--
	}
}
function rotate(matrix: number[][]): void {
	// n == matrix.length == matrix[i].length
	// 1 <= n <= 20
	// -1000 <= matrix[i][j] <= 1000
	// 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
	// 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
	let n = matrix.length

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			let t = matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = t
		}
	}

	for (let i = 0; i < n; i++) {
		// 反转这一层
		reverseArr(matrix[i])
	}
}
// @lc code=end
export { rotate }
