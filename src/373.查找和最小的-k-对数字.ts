/*
 * @lc app=leetcode.cn id=373 lang=typescript
 *
 * [373] 查找和最小的 K 对数字
 */
import {
	PriorityQueue,
	MinPriorityQueue,
} from '@datastructures-js/priority-queue'
// @lc code=start
function kSmallestPairs(
	nums1: number[],
	nums2: number[],
	k: number
): number[][] {
	// 输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
	// 输出: [1,2],[1,4],[1,6]
	// 解释: 返回序列中的前 3 对数：
	//      [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
	//
	// 输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
	// 输出: [1,1],[1,1]
	// 解释: 返回序列中的前 2 对数：
	//     [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

	/**
	 * [1,7,11]
	 * [2,4,6]
	 *
	 * 全排列
	 */

	const pq = new PriorityQueue({
		compare: (a: number[], b: number[]) => a[0] + a[1] - (b[0] + b[1]),
		priority: priority => priority[0] + priority[1],
	})

	// 遍历传入
	nums1.forEach(num1 => {
		console.log(num1)
		pq.enqueue([num1, nums2[0], 0])
	})
	// 1 2, 7 2, 11 2,
	// add 1 4
	console.log(pq.toArray())

	let res: number[][] = []
	while (!pq.isEmpty() && k > 0) {
		const cur = pq.dequeue()
		k--
		res.push([cur[0], cur[1]])

		let newIdx2 = cur[2] + 1
		if (newIdx2 < nums2.length) {
			pq.enqueue([cur[0], nums2[newIdx2], newIdx2])
		}
	}

	return res
}
// @lc code=end
export { kSmallestPairs }
