/*
 * @lc app=leetcode.cn id=974 lang=typescript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
function subarraysDivByK(nums: number[], k: number): number {
	// 元素之和可被 k 整除的（连续、非空） 子数组 的数目
	// 输入：nums = [4,5,0,-2,-3,1], k = 5
	// 输出：7
	// 解释：
	// 有 7 个子数组满足其元素之和可被 k = 5 整除：
	// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

	const preSum: number[] = [0]
	const vMap = new Map()
	vMap.set(0, 1)
	let res = 0

	for (let i = 1; i <= nums.length; i++) {
		preSum[i] = nums[i - 1] + preSum[i - 1]

		let need = preSum[i] % k
		// 负数得处理
		if (need < 0) {
			need += k
		}

		if (!vMap.has(need)) {
			vMap.set(need, 1)
		} else {
			res += vMap.get(need)
			vMap.set(need, vMap.get(need) + 1)
		}
	}

	return res
}
// @lc code=end
export { subarraysDivByK }
