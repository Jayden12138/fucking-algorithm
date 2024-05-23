/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
class MonotonicQueue {
	private _queue: number[] = []
	private _maxqueue: number[] = []
	private _minqueue: number[] = []
	constructor() {}
	push(n) {
		while (
			this._maxqueue.length &&
			n > this._maxqueue[this._maxqueue.length - 1]
		) {
			this._maxqueue.pop()
		}

		while (
			this._minqueue.length &&
			n < this._minqueue[this._minqueue.length - 1]
		) {
			this._minqueue.pop()
		}

		this._queue.push(n)
		this._maxqueue.push(n)
		this._minqueue.push(n)
	}
	pop() {
		let remove = this._queue[0]
		this._queue.shift()
		if (this._maxqueue[0] === remove) {
			this._maxqueue.shift()
		}
		if (this._minqueue[0] === remove) {
			this._minqueue.shift()
		}
		return remove
	}
	max() {
		return this._maxqueue[0]
	}
	min() {
		return this._minqueue[0]
	}
	size() {
		return this._queue.length
	}
	isEmpty() {
		return this._queue.length === 0
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
			queue.pop()
		}
	}

	return res
}
// @lc code=end
export { maxSlidingWindow }
