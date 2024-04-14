/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
	// 输入：n = 4, k = 2
	// 输出：
	// [
	//     [2,4],
	//     [3,4],
	//     [2,3],
	//     [1,2],
	//     [1,3],
	//     [1,4],
	// ]

	let resultList: number[][] = []

	let choice: number[] = []

	for (let i = 1; i <= n; i++) {
		choice.push(i)
	}

	backTrack([], choice, 0)

	function backTrack(path: number[], choice: number[], start: number) {
		if (path.length === k) {
			resultList.push([...path])
			return
		}

		for (let i = start; i < choice.length; i++) {
			if (path.includes(choice[i])) {
				continue
			}

			path.push(choice[i])

			backTrack(path, choice, i + 1)

			path.pop()
		}
	}

	return resultList
}
// @lc code=end
export { combine }
