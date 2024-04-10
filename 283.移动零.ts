/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	// 输入: nums = [0,1,0,3,12]
	// 输出: [1,3,12,0,0]
	/**
	 *
	 * [0, 1, 0, 3, 12]
	 *
	 * [0, 0, 1]
	 *
	 *
	 */

	let slow = 0
	let fast = 0

	while (fast < nums.length) {
		if (nums[fast] !== 0) {
			let t = nums[slow]
			nums[slow] = nums[fast]
			nums[fast] = t
			slow++
		}
		fast++
	}
}
// @lc code=end
