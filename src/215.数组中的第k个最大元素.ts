/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue'

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
	// 输入: [3,2,1,5,6,4], k = 2
	// 输出: 5
	//
	// 输入: [3,2,3,1,2,4,5,5,6], k = 4
	// 输出: 4

	/**
	 * [3,2,1,5,6,4]
	 * [1,2,3,4,5,6]
	 * 2
	 *
	 *
	 *
	 */

	const dp = new MinPriorityQueue()

	nums.forEach(num => {
		dp.enqueue(num)
		if (dp.size() > k) {
			dp.dequeue()
		}
	})

	return dp.front().element
}
// @lc code=end
export { findKthLargest }
