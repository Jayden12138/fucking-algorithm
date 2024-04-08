/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
export function subarraySum(nums: number[], k: number): number {
	/**
	 * Input: nums = [1,1,1], k = 2
	 * Output: 2
	 */
	const l = nums.length
	const preSum = new Array(l + 1).fill(0)
	const preSumMap = new Map()
	preSumMap.set(0, 1)
	let res = 0

	/**
	 *
	 * [1, 2, 3, 4]
	 *
	 * [0, 1, 3, 6 ,10]
	 *
	 * 假设 k = 7 则需要 10 - 7 = 3 【0, 10]找有多少个3
	 *
	 */

	/**
	 *
	 * [1, 1, 1]
	 *
	 * [0, 1, 2, 3]
	 *
	 * k = 2
	 *
	 * {
	 *  1: 1,
	 *  2: 1
	 * }
	 *
	 *
	 *
	 */

	/**
	 *
	 * [1]
	 *
	 * [0, 1]
	 *
	 * {
	 *  1: 1
	 * }
	 *
	 *
	 *
	 * k = 0
	 *
	 *
	 *
	 */

	for (let i = 1; i <= l; i++) {
		preSum[i] = preSum[i - 1] + nums[i - 1]

		let target = preSum[i] - k
		res += preSumMap.get(target) || 0

		if (preSumMap.has(preSum[i])) {
			preSumMap.set(preSum[i], preSumMap.get(preSum[i]) + 1)
		} else {
			preSumMap.set(preSum[i], 1)
		}
	}

	return res
}
// @lc code=end
