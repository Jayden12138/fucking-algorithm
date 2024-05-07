/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
	// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
	// 输入: nums = [1, 2, 3, 4]
	// 输出: [24, 12, 8, 6]

	//     [1, 2, 3, 4]
	// [ 1, 1, 2, 6, 24 ]
	//

	const len = nums.length

	const prePro: number[] = new Array(len + 1).fill(1)
	const sufPro: number[] = new Array(len + 1).fill(1)

	// 前缀积
	for (let i = 1; i <= len; i++) {
		prePro[i] = nums[i - 1] * prePro[i - 1]
	}

	// 后缀积
	for (let i = sufPro.length - 2; i >= 0; i--) {
		sufPro[i] = sufPro[i + 1] * nums[i]
	}

	const res: number[] = []

	for (let i = 0; i < len; i++) {
		res.push(prePro[i] * sufPro[i + 1])
	}

	return res
}
// @lc code=end
export { productExceptSelf }
