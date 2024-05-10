/*
 * @lc app=leetcode.cn id=1438 lang=typescript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

// @lc code=start

class MonotonicQueue {
	queue: number[] = []
	minQueue: number[] = []
	maxQueue: number[] = []

	push(value: number): void {
		this.queue.push(value)

		// min
		while (
			this.minQueue.length &&
			value < this.minQueue[this.minQueue.length - 1]
		) {
			this.minQueue.pop()
		}
		this.minQueue.push(value)

		// max
		while (
			this.maxQueue.length &&
			value > this.maxQueue[this.maxQueue.length - 1]
		) {
			this.maxQueue.pop()
		}
		this.maxQueue.push(value)
	}

	max(): number {
		return this.maxQueue[0]
	}

	min(): number {
		return this.minQueue[0]
	}

	pop(value: number): void {
		if (this.queue[0] === value) {
			this.queue.shift()
		}
		if (this.minQueue[0] === value) {
			this.minQueue.shift()
		}
		if (this.maxQueue[0] === value) {
			this.maxQueue.shift()
		}
	}

	size(): number {
		return this.queue.length
	}
}

function longestSubarray(nums: number[], limit: number): number {
	// 1 <= nums.length <= 10^5
	// 1 <= nums[i] <= 10^9
	// 输入：nums = [8,2,4,7], limit = 4
	// 输出：2

	// 什么时候add
	// 小于等于limit
	// 什么时候remove
	// 大于limit
	// 什么时候得到预期结果

	let left = 0
	let right = 0

	const pq = new MonotonicQueue()

	let len = 0

	// const window = new Map()

	const window: number[] = []

	while (right < nums.length) {
		let add = nums[right]
		right++

		window.push(add)
		pq.push(add)

		while (pq.max() - pq.min() > limit) {
			let remove = nums[left]
			left++

			window.shift()
			pq.pop(remove)
		}

		len = Math.max(len, window.length)
	}

	return len
}
// @lc code=end

export { longestSubarray }
