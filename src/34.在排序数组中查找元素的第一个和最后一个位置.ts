/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
	// 输入：nums = [5,7,7,8,8,10], target = 8
	// 输出：[3,4]
	//
	// 输入：nums = [5,7,7,8,8,10], target = 6
	// 输出：[-1,-1]

	let result: number[] = []

	let left = 0
	let right = nums.length

	let res

	// 找左边界
	// [left, right)
	while (left < right) {
		let mid = left + Math.floor((right - left) / 2)

		if (nums[mid] === target) {
			right = mid
		} else if (nums[mid] > target) {
			right = mid
		} else if (nums[mid] < target) {
			left = mid + 1
		}
	}

	if (left < 0 || left >= nums.length) {
		res = -1
	} else {
		res = nums[left] === target ? left : -1
	}

	result.push(res)

	// 找右边界
	// [5, 7, 7, 8, 8, 10]
	// [left, right]

	left = 0
	right = nums.length

	while (left < right) {
		let mid = left + Math.floor((right - left) / 2)

		if (nums[mid] === target) {
			left = mid + 1
		} else if (nums[mid] > target) {
			right = mid
		} else if (nums[mid] < target) {
			left = mid + 1
		}
	}

	if (left - 1 < 0 || left - 1 >= nums.length) {
		res = -1
	} else {
		res = nums[left - 1] === target ? left - 1 : -1
	}

	result.push(res)

	return result
}
// @lc code=end
export { searchRange }
