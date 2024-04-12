/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N 皇后 II
 */

// @lc code=start
function totalNQueens(n: number): number {
	// 输入：n = 4
	// 输出：2
	// 解释：如上图所示，4 皇后问题存在两个不同的解法。
	let resultNum = 0

	let choice: number[] = []
	for (let i = 0; i < n; i++) {
		choice.push(i)
	}

	func([], choice)

	function func(path: number[], choice: number[]) {
		if (path.length === n) {
			resultNum++
			return
		}

		for (const iter of choice) {
			let currentPathLength = path.length
			if (
				path.includes(iter) ||
				Math.abs(iter - path[currentPathLength - 1]) <= 1 ||
				isCanUse(path, iter)
			) {
				continue
			}

			path.push(iter)

			func(path, choice)

			path.pop()
		}

		return
	}

	function isCanUse(path: number[], iter: number) {
		for (let i = 0; i < path.length - 1; i++) {
			if (Math.abs(path[i] - iter) === path.length - i) {
				return true
			}
		}
		return false
	}

	return resultNum
}
// @lc code=end
