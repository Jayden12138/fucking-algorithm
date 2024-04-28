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
	// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
	//
	// 输入: nums = [0,1,0,3,12]
	// 输出: [1,3,12,0,0]
	// 双指针

	let slow = 0
	let fast = 0

	while (fast < nums.length) {
		if (nums[fast] != 0) {
			if (slow !== fast) {
				nums[slow] = nums[fast]
				nums[fast] = 0
			}
			slow++
		}
		fast++
	}
}
// @lc code=end
export { moveZeroes }
