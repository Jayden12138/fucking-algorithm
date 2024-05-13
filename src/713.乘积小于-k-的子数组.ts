/*
 * @lc app=leetcode.cn id=713 lang=typescript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
function numSubarrayProductLessThanK(nums: number[], k: number): number {
	// 输入：nums = [10,5,2,6], k = 100
	// 输出：8
	// 解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
	// 需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。

	// 扩大窗口 乘积 < k
	// 缩小窗口 乘积 > k
	// 期望结果 乘积 <= k

	let left = 0
	let right = 0

	let preProduct = 1

	let count = 0

	while (right < nums.length) {
		let add = nums[right]
		preProduct *= add
		right++

		while (preProduct >= k && right > left) {
			let remove = nums[left]
			left++
			preProduct /= remove
		}
		count += right - left
	}

	return count
}
// @lc code=end

export { numSubarrayProductLessThanK }
