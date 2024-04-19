/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
	// 输入：numbers = [2,7,11,15], target = 9
	// 输出：[1,2]
	// 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

	let left = 0
	let right = numbers.length - 1

	while (left < right) {
		let sum = numbers[left] + numbers[right]

		if (sum > target) {
			right--
		} else if (sum < target) {
			left++
		} else {
			return [left + 1, right + 1]
		}
	}

	return []
}
// @lc code=end
