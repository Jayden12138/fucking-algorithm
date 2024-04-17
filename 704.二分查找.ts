/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
	// 输入: nums = [-1,0,3,5,9,12], target = 9
	// 输出: 4
	// 解释: 9 出现在 nums 中并且下标为 4

	// 输入: nums = [-1,0,3,5,9,12], target = 2
	// 输出: -1
	// 解释: 2 不存在 nums 中因此返回 -1

	let left = 0
	let right = nums.length - 1
	// [left, right]

	// left == right
	while (left <= right) {
		let diff = (right - left) / 2
		let mid: number = left + parseInt(diff.toString())

		if (nums[mid] === target) {
			return mid
		} else if (nums[mid] > target) {
			right = mid - 1
		} else if (nums[mid] < target) {
			left = mid + 1
		}
	}

	return -1
}
// @lc code=end
export { search }
