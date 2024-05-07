/*
 * @lc app=leetcode.cn id=525 lang=typescript
 *
 * [525] 连续数组
 */

// @lc code=start
function findMaxLength(nums: number[]): number {
	// 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
	// 输入: nums = [0,1,0]
	// 输出: 2
	// 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。

	// 最长子串

	let preSum: number[] = [0]

	for (let i = 1; i <= nums.length; i++) {
		preSum[i] = preSum[i - 1] + (nums[i - 1] === 0 ? -1 : 1)
	}

	const vMap = new Map() // 存所有 i - j 为 0 的
	let res = 0

	console.log(preSum)

	for (let i = 0; i <= preSum.length; i++) {
		if (!vMap.has(preSum[i])) {
			vMap.set(preSum[i], i)
		} else {
			res = Math.max(res, i - vMap.get(preSum[i]))
		}
	}

	return res
}
// @lc code=end
export { findMaxLength }
