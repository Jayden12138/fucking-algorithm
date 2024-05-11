/*
 * @lc app=leetcode.cn id=1658 lang=typescript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
function minOperations(nums: number[], x: number): number {
	// 输入：nums = [1,1,4,2,3], x = 5
	// 输出：2
	// 解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
	let res = 0

	const sum = nums.reduce((a, b) => a + b, 0)
	const target = sum - x

	if (target < 0) return -1
	// 寻找最长子串，子串和 为 target

	// 扩大窗口 -> 小于target
	// 缩小窗口 -> 大于target
	// 期望结果 ->

	const window: number[] = []

	let left = 0
	let right = 0
	let curSum = 0

	let len = -Infinity
	while (right < nums.length) {
		let add = nums[right]
		right++

		curSum += add
		window.push(add)
		while (curSum > target && left < right) {
			let remove = nums[left]
			left++

			curSum -= remove
			window.shift()
		}

		if (curSum === target) {
			len = Math.max(len, right - left)
		}
	}

	return len !== -Infinity ? nums.length - len : -1
}
// @lc code=end
export { minOperations }
