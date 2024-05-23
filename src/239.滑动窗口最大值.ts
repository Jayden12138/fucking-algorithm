/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
// 递减
class MonotonicQueue {
	constructor(private _queue: number[] = []) {}
	push(n) {
		while (this._queue.length && n > this._queue[this._queue.length - 1]) {
			this._queue.pop()
		}

		this._queue.push(n)
	}
	pop(n) {
		if (this._queue[0] === n) {
			this._queue.shift()
		}
	}
	max() {
		return this._queue[0]
	}
}
function maxSlidingWindow(nums: number[], k: number): number[] {
	// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
	// 输出：[3,3,5,5,6,7]

	const queue = new MonotonicQueue()

	let res: number[] = []

	for (let i = 0; i < nums.length; i++) {
		if (i < k - 1) {
			queue.push(nums[i])
		} else {
			// 队列中现在有k-1个
			queue.push(nums[i])

			// k个了
			res.push(queue.max())

			// 窗口第一个移除
			queue.pop(nums[i - k + 1])
		}
	}

	return res
}
// @lc code=end
export { maxSlidingWindow }
