/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
	// 输入：nums = [1,2,3,1], k = 3
	// 输出：true

	let left = 0
	let right = 0

	const window = new Set()

	// 扩大窗口 小于k
	// 缩小窗口 大于k
	// 预期结果 等于k 且

	while (right < nums.length) {
		let add = nums[right]
		if (window.has(add)) {
			return true
		}

		window.add(add)
		right++

		if (right - left > k) {
			let remove = nums[left]
			left++
			window.delete(remove)
		}
	}

	return false
}
// @lc code=end
export { containsNearbyDuplicate }
