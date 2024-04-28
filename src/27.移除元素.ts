/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
	// 输入：nums = [3,2,2,3], val = 3
	// 输出：2, nums = [2,2]
	let count = 0

	let slow = 0
	let fast = 0

	while (fast < nums.length) {
		if (nums[fast] !== val) {
			;[nums[fast], nums[slow]] = [nums[slow], nums[fast]]
			slow++
			count++
		}
		fast++
	}

	return count
}
// @lc code=end
export { removeElement }
