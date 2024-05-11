/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
	// 输入：target = 7, nums = [2,3,1,2,4,3]
	// 输出：2
	// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

	let left = 0
	let right = 0

	let windowSum = 0

	let len = Infinity

	while (right < nums.length) {
		let add = nums[right]
		right++

		windowSum += add

		while (windowSum >= target && right > left) {
			len = Math.min(len, right - left)
			let remove = nums[left]
			left++

			windowSum -= remove
		}
	}

	return len === Infinity ? 0 : len
}
// @lc code=end
export { minSubArrayLen }
