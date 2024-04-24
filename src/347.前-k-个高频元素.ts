/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */
import { MinPriorityQueue } from '@datastructures-js/priority-queue'
// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
	// 输入: nums = [1,1,1,2,2,3], k = 2
	// 输出: [1,2]
	//
	// 输入: nums = [1], k = 1
	// 输出: [1]

	const pq = new MinPriorityQueue({
		priority: o => o[1],
	})

	const numMap = new Map()

	nums.forEach(num => {
		numMap.set(num, numMap.get(num) + 1 || 1)
	})

	for (const num of numMap) {
		pq.enqueue(num)
		if (pq.size() > k) {
			pq.dequeue()
		}
	}

	return pq.toArray().map(o => o.element[0])
}
// @lc code=end
export { topKFrequent }
