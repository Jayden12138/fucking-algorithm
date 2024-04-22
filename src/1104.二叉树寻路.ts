/*
 * @lc app=leetcode.cn id=1104 lang=typescript
 *
 * [1104] 二叉树寻路
 */

// @lc code=start
function pathInZigZagTree(label: number): number[] {
	// 输入：label = 14
	// 输出：[1,3,4,14]
	/**
	 *
	 */
	//
	// 输入：label = 26
	// 输出：[1,2,6,10,26]
	let path: number[] = []

	while (label >= 1) {
		path.push(label)
		label = Math.floor(label / 2)
		// 14 [14, 7, 3, 1]
		// 26 [26, 13, 6, 3, 1]

		// 13 -> 6
		// 6 -> 2
		// 2^2 ~ 2^3 - 1
		// 2^3-1 - (6 - 2^2)
		// 7 - (6 - 4)

		let depth = log(label)
		let range = getLevelRange(depth)
		label = range[1] - (label - range[0])
	}

	return path.reverse()
}
function getLevelRange(depth: number) {
	return [Math.pow(2, depth), Math.pow(2, depth + 1) - 1]
}
function log(x: number) {
	return Math.floor(Math.log(x) / Math.log(2))
}
// @lc code=end
export { pathInZigZagTree }
