/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
	// 输入：nums = [0,0,1,1,1,1,2,3,3]
	// 输出：7, nums = [0,0,1,1,2,3,3]

	// 超过2次 只显示2次

	let slow = 0
	let fast = 0
	let count = 0

	while (fast < nums.length) {
		if (nums[slow] !== nums[fast] || (count < 2 && slow < fast)) {
			slow++
			nums[slow] = nums[fast]
		}

		fast++
		count++

		if (fast < nums.length && nums[fast] !== nums[fast - 1]) {
			count = 0
		}
	}

	return slow + 1
}
// @lc code=end
export { removeDuplicates }
