/*
 * @lc app=leetcode.cn id=378 lang=typescript
 *
 * [378] 有序矩阵中第 K 小的元素
 */
import {
	PriorityQueue,
	MinPriorityQueue,
} from '@datastructures-js/priority-queue'

// @lc code=start
function kthSmallest(matrix: number[][], k: number): number {
	// 输入：matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
	// 输出：13
	// 解释：矩阵中的元素为 [1,5,9,10,11,12,13,13,15]，第 8 小元素是 13

	const dp = new MinPriorityQueue()
	const rowLen = matrix.length
	const colLen = matrix[0].length

	for (let i = 0; i < rowLen; i++) {
		// matrix[i] -> [1, 5, 9]
		for (let j = 0; j < colLen; j++) {
			dp.enqueue(matrix[i][j])
		}
	}

	return dp.toArray()[k - 1].element
}
// @lc code=end
