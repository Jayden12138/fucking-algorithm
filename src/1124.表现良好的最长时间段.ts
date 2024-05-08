/*
 * @lc app=leetcode.cn id=1124 lang=typescript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
function longestWPI(hours: number[]): number {
	// 输入：hours = [9,9,6,0,6,6,9]
	// 输出：3
	// 解释：最长的表现良好时间段是 [9,9,6]。

	let res = 0
	const preSum: number[] = [0]
	const vmap = new Map()
	vmap.set(0, 1)

	for (let i = 1; i <= hours.length; i++) {
		preSum[i] = preSum[i - 1] + (hours[i - 1] > 8 ? 1 : -1)

		if (!vmap.has(preSum[i])) {
			// i 尽可能要小
			vmap.set(preSum[i], i)
		}

		if (preSum[i] > 0) {
			res = Math.max(res, i)
		} else {
			if (vmap.has(preSum[i] - 1)) {
				let j = vmap.get(preSum[i] - 1)
				res = Math.max(res, i - j)
			}
		}
	}

	return res
}
// @lc code=end
export { longestWPI }
