/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
	// 输入：nums = [1, 7, 3, 6, 5, 6]
	// 输出：3
	// 解释：
	// 中心下标是 3 。
	// 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
	// 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。

	const preSum: number[] = []

	preSum[0] = 0

	for (let i = 1; i <= nums.length; i++) {
		preSum[i] = nums[i - 1] + preSum[i - 1]
	}

	//      [1, 7, 3, 6, 5, 6]
	// [0, 1, 8, 11, 17, 22, 28]

	// [2,1,-1]
	// [0, 2, 3, 2]

	const sum = preSum[preSum.length - 1]

	for (let i = 0; i < nums.length; i++) {
		if (preSum[i] + preSum[i + 1] === sum) {
			return i
		}
	}

	return -1
}
// @lc code=end
export { pivotIndex }
