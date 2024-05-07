/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
	// 输入：nums = [1,2,3], k = 3
	// 输出：2

	/**
	 *
	 * [1, 2, 3]
	 *
	 * [1, 2]
	 * [3]
	 *
	 * [0, 1, 3, 6]
	 *
	 *
	 * [1, 1, 1]
	 *
	 * [0, 1, 2, 3]
	 *
	 *
	 */

	let preSum: number[] = [0]

	const vMap = new Map()
	vMap.set(0, 1)
	let res = 0

	for (let i = 1; i <= nums.length; i++) {
		preSum[i] = preSum[i - 1] + nums[i - 1]

		let need = preSum[i] - k
		if (vMap.has(need)) {
			res += vMap.get(need)
		}

		if (!vMap.has(preSum[i])) {
			vMap.set(preSum[i], 1)
		} else {
			vMap.set(preSum[i], vMap.get(preSum[i]) + 1)
		}
	}

	return res
}
// @lc code=end
export { subarraySum }
