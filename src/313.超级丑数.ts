/*
 * @lc app=leetcode.cn id=313 lang=typescript
 *
 * [313] 超级丑数
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue'

// @lc code=start
function nthSuperUglyNumber(n: number, primes: number[]): number {
	// 输入：n = 12, primes = [2,7,13,19]
	// 输出：32
	// 解释：给定长度为 4 的质数数组 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
	//
	// 输入：n = 1, primes = [2,3,5]
	// 输出：1
	// 解释：1 不含质因数，因此它的所有质因数都在质数数组 primes = [2,3,5] 中。

	/**
	 *
	 * primes number[n1, n2, n3, ...]
	 *
	 * [1,2,4,7,8,13,14,16,19,26,28,32]
	 *
	 * 1 -> 2 -> 4 -> 8 -> 16 -> 32
	 * 1 -> 7 -> 14 -> 28
	 * 1 -> 13 -> 26
	 * 1 -> 19
	 *
	 * 1 -> 2 -> 4 -> 7 -> 8 -> 13 -> 14 -> 16 -> 19 -> 26 -> 28 -> 32
	 *
	 */

	const pq = new MinPriorityQueue({
		priority: o => o[0],
		compare: (a, b) => a[0] - b[0],
	})

	for (let i = 0; i < primes.length; i++) {
		// [1, 2, 1]
		// [1, 7, 1]
		// [1, 13, 1]
		// [1, 19, 1]
		pq.enqueue([1, primes[i], 1])
	}
	// push 1
	const result = new Array(n + 1)
	let p = 1

	//
	while (p <= n) {
		// [1, 2, 1]
		// [2, 2, 2]
		const [value, prime, index] = pq.dequeue()
		// add 2
		if (value != result[p - 1]) {
			result[p] = value
			p++
		}
		// [1, 1, 2, 4]

		// push 4
		// [4, 2, 3]
		const newValue = [result[index] * prime, prime, index + 1]
		pq.enqueue(newValue)
	}

	return result[n]
}
// @lc code=end
export { nthSuperUglyNumber }
