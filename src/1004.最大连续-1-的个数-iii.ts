/*
 * @lc app=leetcode.cn id=1004 lang=typescript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
function longestOnes(nums: number[], k: number): number {
	// 输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
	// 输出：6
	// 解释：[1,1,1,0,0,1,1,1,1,1,1]
	// 粗体数字从 0 翻转到 1，最长的子数组长度为 6。
	//
	// 什么时候扩大窗口
	// 什么时候缩小窗口
	// 什么时候得到一个合法的答案
	//
	// 可替换次数 大于等于 0 扩大
	// 可替换次数 小于 0 缩小
	// 当可替换次数大于等于0时，窗口内都是1

	let res = 0

	let left = 0
	let right = 0

	let windowOneCount = 0

	while (right < nums.length) {
		let add = nums[right]
		if (add === 1) {
			windowOneCount++
		}
		right++

		while (right - left - windowOneCount > k) {
			let remove = nums[left]
			if (remove === 1) {
				windowOneCount--
			}
			left++
		}

		res = Math.max(res, right - left)
	}

	return res
}
// @lc code=end
export { longestOnes }
