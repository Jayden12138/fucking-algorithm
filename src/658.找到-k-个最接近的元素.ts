/*
 * @lc app=leetcode.cn id=658 lang=typescript
 *
 * [658] 找到 K 个最接近的元素
 */
import { MaxPriorityQueue } from '@datastructures-js/priority-queue'
// @lc code=start
function findClosestElements(arr: number[], k: number, x: number): number[] {
	// 输入：arr = [1,2,3,4,5], k = 4, x = 3
	// 输出：[1,2,3,4]

	const pq = new MaxPriorityQueue({
		priority: o => o[0],
		compare: (a, b) => {
			if (a[0] === b[0]) {
				return b[1] - a[1]
			} else {
				return b[0] - a[0]
			}
		},
	})

	for (let i = 0; i < arr.length; i++) {
		let val = Math.abs(arr[i] - x)
		pq.enqueue([val, arr[i], i])
		if (pq.size() > k) {
			pq.dequeue()
		}
	}

	return pq
		.toArray()
		.map(o => o[1])
		.sort((a, b) => a - b)
}
// @lc code=end
export { findClosestElements }
