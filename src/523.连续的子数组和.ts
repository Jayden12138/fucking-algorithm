/*
 * @lc app=leetcode.cn id=523 lang=typescript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
function checkSubarraySum(nums: number[], k: number): boolean {
	// 输入：nums = [23,2,6,4,7], k = 6
	// 输出：true
	// 解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。
	// 42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。

	const preSum: number[] = [0]

	for (let i = 1; i <= nums.length; i++) {
		preSum[i] = preSum[i - 1] + nums[i - 1]
	}

	const vMap = new Map()

	// [ 0, 23, 25, 29, 35, 42 ]
	console.log(preSum)
	for (let i = 0; i < preSum.length; i++) {
		let target = preSum[i] % k
		if (!vMap.has(target)) {
			vMap.set(target, i)
		}
	}
	console.log(vMap)

	for (let i = 1; i < preSum.length; i++) {
		let target = preSum[i] % k
		if (vMap.has(target) && i - vMap.get(target) >= 2) {
			return true
		}
	}

	return false
}
// @lc code=end
export { checkSubarraySum }
