/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
	// 输入：nums = [0,1,2,2,3,0,4,2], val = 2
	// 输出：5, nums = [0,1,3,0,4]

	/**
	 *
	 *
	 * [0, 1, 2, 2, 3, 0, 4, 2]
	 *
	 * [0, 1, ]
	 *
	 */

	let slow = 0
	let fast = 0

	while (fast < nums.length) {
		if (nums[fast] !== val) {
			nums[slow] = nums[fast]
			slow++
		}
		fast++
	}

	return slow
}
// @lc code=end
