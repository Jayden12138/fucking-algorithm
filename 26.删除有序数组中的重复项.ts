/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
	// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
	// 输出：5, nums = [0,1,2,3,4]

	/**
	 *
	 * [0,0,1,1,1,2,2,3,3,4]
	 * [0,1,2,3,4,2,2,3,3,4]
	 *
	 */

	let slow = 0
	let fast = 0
	let l = nums.length

	while (fast < l) {
		if (nums[fast] === nums[slow]) {
			fast++
		} else {
			slow++
			nums[slow] = nums[fast]
		}
	}

	return slow + 1
}
// @lc code=end
