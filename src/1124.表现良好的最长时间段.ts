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

	const preSum: number[] = [0]
	const vMap = new Map()
	vMap.set(0, 1)
	let res = 0
	for (let i = 1; i <= hours.length; i++) {
		// > 8 -> 1
		// <= 8 -> -1
		// preSum 中 >=0 的 i-j即为所求

		preSum[i] = preSum[i - 1] + (hours[i - 1] > 8 ? 1 : -1)

		if (!vMap.has(preSum[i])) {
			vMap.set(preSum[i], i)
		}

		if (preSum[i] > 0) {
			// 表示 [0, i] 都是ok的
			res = Math.max(res, i)
		} else {
			// 当前 [0, i] 为负数
			// 需要在之前找到一个 j 使得 [j, i] 为正
			console.log(i, preSum[i], preSum[i] - 1)
			if (vMap.has(preSum[i] - 1)) {
				let j = vMap.get(preSum[i] - 1)
				res = Math.max(res, i - j)
			}
		}
	}

	return res
}
// @lc code=end
export { longestWPI }
