/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第 K 大元素
 */
import {
	PriorityQueue,
	MinPriorityQueue,
} from '@datastructures-js/priority-queue'
// @lc code=start
class KthLargest {
	// 输入：
	// ["KthLargest", "add", "add", "add", "add", "add"]
	// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
	// 输出：
	// [null, 4, 5, 5, 8, 8]

	// 解释：
	// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
	// kthLargest.add(3);   // return 4 // 3 -> 2 (3) 4 5 8
	// kthLargest.add(5);   // return 5 // 5 -> 2 3 4 (5) 5 8
	// kthLargest.add(10);  // return 5
	// kthLargest.add(9);   // return 8
	// kthLargest.add(4);   // return 8
	private pq
	private k
	constructor(k: number, nums: number[]) {
		this.pq = new PriorityQueue({
            compare: (a, b)=>b-a
        })
		this.k = k
		for (let i = 0; i < nums.length; i++) {
			this.pq.enqueue(nums[i])
			if (this.pq.size() > k) {
				this.pq.dequeue()
			}
		}
	}

	add(val: number): number {
		this.pq.enqueue(val)
		if (this.pq.size() > this.k) {
			this.pq.dequeue()
		}
		return this.pq.front().element
	}
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
