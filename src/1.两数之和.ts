/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
	// 输入：nums = [2,7,11,15], target = 9
	// 输出：[0,1]
	// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
	let res: number[] = []
	for (let i = 0; i < nums.length; i++) {
		// i
		res[0] = i
		let tar = target - nums[i]

		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] === tar) {
				res[1] = j
				return res
			}
		}
	}

	return []
}
// @lc code=end
export { twoSum }
